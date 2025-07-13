import type React from "react"
import { Laptop, Type, Monitor, Code, Palette } from "lucide-react"

interface SetupItem {
  name: string
  description: string
  category?: string
}
interface SetupSection {
  title: string
  icon: React.ComponentType<{ className?: string }>
  items: SetupItem[]
  color: string
}

const setupData: SetupSection[] = [
  {
    title: "Hardware",
    icon: Laptop,
    color: "bg-[#121212]",
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
    title: "Development Stack",
    icon: Code,
    color: "bg-[#121212]",
    items: [
      {
        name: "Visual Studio Code",
        description: "Primary code editor with extensive extension ecosystem",
        category: "Editor",
      },
      {
        name: "Git & GitHub",
        description: "Version control system with web interface and CLI tools",
        category: "VCS",
      },
      {
        name: "WSL2 Ubuntu",
        description: "Windows Subsystem for Linux with Ubuntu distribution",
        category: "Terminal",
      },
    ],
  },
  {
    title: "Design Tools",
    icon: Palette,
    color: "bg-[#121212]",
    items: [
      {
        name: "Figma",
        description: "Collaborative interface design and prototyping platform",
        category: "UI/UX",
      },
      {
        name: "Canva",
        description: "Graphic design platform for quick visual content creation",
        category: "Graphics",
      },
    ],
  },
  {
    title: "Typography",
    icon: Type,
    color: " bg-[#121212]",
    items: [
      {
        name: "Menlo & Monaco",
        description: "Monospace fonts with programming ligatures support",
        category: "Code Font",
      },
      {
        name: "Courier New",
        description: "Classic monospace typeface for terminal and code",
        category: "Code Font",
      },
            {
        name: "Rubik | IBM Plex Sans | Roboto | Ubuntu",
        description: "Modern sans-serif fonts optimized for UI readability",
        category: "UI Font",
      },
    ],
  },
  {
    title: "Other Stuff....I use",
    icon: Type,
    color: " bg-[#121212]",
    items: [
      {
        name: "Dark Modern",
        description: "A default vs code theme provided by microsoft available by default in vscode",
        category: "VS Code Theme",
      },
      {
        name: "Github Dark",
        description: "A github based vs code theme provided by Github available in vscode extensions",
        category: "VS Code Theme",
      },
      {
        name: "Discord",
        description: "A Chat and fun application for developers and gamers ",
        category: "For Fun",
      },
    ],
  },
]

export default function DevSetup() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Main Content Container */}
      <div className="max-w-7xl pt-28 mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Monitor className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
            <span className="text-xs sm:text-sm font-mono text-gray-500 uppercase tracking-wider">
              Development Environment
            </span>
          </div>

          
        </div>

        {/* Setup Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
          {setupData.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className={`${section.color} rounded-md p-4 sm:p-6 hover:border-opacity-40 transition-all duration-300 group`}
            >
              {/* Section Header */}
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-black/50 rounded-lg border border-gray-800">
                  <section.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-100" />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg text-xl font-semibold text-white">{section.title}</h2>
                  <div className="text-sm text-gray-200 font-mono">
                    {section.items.length} item{section.items.length !== 1 ? "s" : ""}
                  </div>
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-3 sm:space-y-4">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className=" p-2 sm:p-4 hover:border-gray-700/50 hover:bg-black/50 transition-all duration-200"
                  >
                    {item.category && (
                      <div className="text-sm  rounded font-mono text-yellow-400 uppercase tracking-wider mb-1">
                        {item.category}
                      </div>
                    )}

                    <h3 className="text-lg sm:text-base font-medium text-white mb-1 sm:mb-2 leading-tight">
                      {item.name}
                    </h3>

                    <p className="text-md sm:text-sm  text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Stats */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-800">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="bg-[#131313] border border-gray-800 rounded-lg p-3 sm:p-4">
              <div className="text-lg sm:text-xl font-bold text-white font-mono">
                {setupData.reduce((acc, section) => acc + section.items.length, 0)}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 font-mono uppercase tracking-wider">Total Items</div>
            </div>

            <div className="bg-[#131313] border border-gray-800 rounded-lg p-3 sm:p-4">
              <div className="text-lg sm:text-xl font-bold text-white font-mono">{setupData.length}</div>
              <div className="text-xs sm:text-sm text-gray-500 font-mono uppercase tracking-wider">Categories</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
