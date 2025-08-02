import type React from "react"
import { Laptop, Code, Palette, Type, Monitor } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

// --- TYPE DEFINITIONS ---
interface SetupItem {
  name: string
  description: string
  category?: string
}

interface SetupSection {
  title: string
  icon: React.ComponentType<{ className?: string }>
  items: SetupItem[]
}

// --- DATA SOURCE ---
const setupData: SetupSection[] = [
  {
    title: "Hardware",
    icon: Laptop,
    items: [
      {
        name: "Acer Swift 3",
        description: "Intel i5 EVO • 8GB RAM • 512GB SSD • Windows 11 Home",
        category: "Primary Machine",
      },
      {
        name: "Back-Lit Keyboard",
        description: "Standard laptop keyboard for comfortable typing sessions",
        category: "Input Device",
      },
      {
        name: "RedGear Mouse Turbo Fire",
        description: "Ergonomic gaming mouse for precise navigation",
        category: "Input Device",
      },
    ],
  },
  {
    title: "Development",
    icon: Code,
    items: [
      {
        name: "Visual Studio Code",
        description: "Primary code editor with an extensive extension ecosystem.",
        category: "Editor",
      },
      {
        name: "Git & GitHub",
        description: "Version control system with web interface and CLI tools.",
        category: "VCS",
      },
      {
        name: "WSL2 Ubuntu",
        description: "Windows Subsystem for Linux with Ubuntu distribution.",
        category: "Terminal",
      },
    ],
  },
  {
    title: "Design",
    icon: Palette,
    items: [
      {
        name: "Figma",
        description: "Collaborative interface design and prototyping platform.",
        category: "UI/UX",
      },
      {
        name: "Canva",
        description: "Graphic design platform for quick visual content creation.",
        category: "Graphics",
      },
    ],
  },
  {
    title: "Typography",
    icon: Type,
    items: [
      {
        name: "Menlo & Monaco",
        description: "Monospace fonts with programming ligature support.",
        category: "Code Font",
      },
       {
        name: "Rubik | IBM Plex Sans",
        description: "Modern sans-serif fonts optimized for UI readability.",
        category: "UI Font",
      },
      {
        name: "Dark Modern",
        description: "A clean, default theme for VS Code by Microsoft.",
        category: "VS Code Theme",
      },
    ],
  },
]

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
}

// --- REUSABLE AnimatedCard COMPONENT ---
// This component uses the `useInView` hook to trigger animations only when visible.
const AnimatedCard: React.FC<{ section: SetupSection }> = ({ section }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ scale: 1, y: -2 }}
      className=" border-3 border-neutral-900 rounded-xl p-6 h-full flex flex-col cursor-pointer"
    >
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="p-2 bg-black rounded-lg border border-neutral-800">
          <section.icon className="w-5 h-5 text-neutral-300" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-neutral-100">{section.title}</h2>
          <p className="text-sm text-neutral-500 font-mono">
            {section.items.length} item{section.items.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {/* Items List */}
      <div className="space-y-5 flex-grow">
        {section.items.map((item) => (
          <div key={item.name}>
            {item.category && (
              <div className="text-xs font-mono text-yellow-400/80 uppercase tracking-wider mb-1.5">
                {item.category}
              </div>
            )}
            <h3 className="font-semibold text-neutral-200">{item.name}</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

// --- MAIN COMPONENT ---
export default function DevSetup() {
  return (
    <main className="min-h-screen bg-black text-neutral-300 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Monitor className="w-6 h-6 text-neutral-500" />
            <span className="text-sm font-mono text-neutral-500 uppercase tracking-wider">
              My Digital Workspace
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-mono text-green-500 ">
            Development Setup
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-lg text-neutral-400">
            The tools, software, and hardware I use daily to code and design.
          </p>
        </motion.div>

        {/* Setup Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {setupData.map((section) => (
            <AnimatedCard key={section.title} section={section} />
          ))}
        </motion.div>

        {/* Footer Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
          className="mt-20 pt-10 border-t border-neutral-900"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-[#0A0A0A] border border-neutral-900 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-white font-mono">
                {setupData.reduce((acc, section) => acc + section.items.length, 0)}
              </div>
              <div className="text-sm text-neutral-500 font-mono uppercase tracking-wider mt-1">
                Total Items
              </div>
            </div>

            <div className="bg-[#0A0A0A] border border-neutral-900 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-white font-mono">{setupData.length}</div>
              <div className="text-sm text-neutral-500 font-mono uppercase tracking-wider mt-1">
                Categories
              </div>
            </div>
            
             <div className="bg-[#0A0A0A] border border-neutral-900 rounded-lg p-4 text-center col-span-2">
              <div className="text-2xl font-bold text-white font-mono">
                2025
              </div>
              <div className="text-sm text-neutral-500 font-mono uppercase tracking-wider mt-1">
                Last Updated
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}