"use client"

import type React from "react"
import { useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { Newspaper, Database, Sparkles, Shield, Users, Zap } from "lucide-react"
import { useMemo } from "react"
import Customauth from "./Customsauth"

interface RouteInfo {
  title: string
  subtitle: string
  description: string
  icon: typeof Newspaper
  gradient: string
  bgGradient: string
  features: Array<{ icon: typeof Zap; text: string }>
}

interface LocationState {
  from?: string
}

const NewsignIn: React.FC = () => {
  const location = useLocation()

  const isSignUp = useMemo(() => location.pathname.includes("/sign-up"), [location.pathname])

  const getRedirectUrl = useMemo((): string => {
    const state = location.state as LocationState
    if (state?.from) return state.from

    const urlParams = new URLSearchParams(location.search)
    const redirectTo = urlParams.get("redirect_to")
    if (redirectTo) return decodeURIComponent(redirectTo)

    if (location.pathname.includes("blog") || location.search.includes("blog")) return "/blog"
    if (location.pathname.includes("sources") || location.search.includes("sources")) return "/sources"

    return "/"
  }, [location.pathname, location.search, location.state])

  const routeInfo = useMemo((): RouteInfo => {
    if (getRedirectUrl.startsWith("/blog")) {
      return {
        title: isSignUp ? "Join Minimal Minds" : "Welcome to Minimal Minds",
        subtitle: isSignUp
          ? "Create your account to access exclusive blog content and insights"
          : "Sign in to access exclusive blog content and thought-provoking insights",
        description: "Dive deep into thoughts, ideas, and explorations that shape the digital landscape.",
        icon: Newspaper,
        gradient: "from-emerald-400 via-cyan-400 to-blue-400",
        bgGradient: "from-emerald-500/8 via-cyan-500/5 to-blue-500/8",
        features: [
          { icon: Zap, text: "Deep dives into technology and innovation" },
          { icon: Shield, text: "Thought-provoking insights and analysis" },
          { icon: Users, text: "Exclusive content and early access" },
        ],
      }
    } else if (getRedirectUrl.startsWith("/sources")) {
      return {
        title: isSignUp ? "Join Learning Sources" : "Welcome to Learning Sources",
        subtitle: isSignUp
          ? "Create your account to explore curated learning resources and materials"
          : "Sign in to explore curated learning resources and expert recommendations",
        description: "Access handpicked resources, tutorials, and materials for continuous learning and growth.",
        icon: Database,
        gradient: "from-purple-400 via-pink-400 to-red-400",
        bgGradient: "from-purple-500/8 via-pink-500/5 to-red-500/8",
        features: [
          { icon: Newspaper, text: "Curated learning materials and tutorials" },
          { icon: Users, text: "Expert-recommended resources" },
          { icon: Zap, text: "Personalized learning paths" },
        ],
      }
    }

    return {
      title: isSignUp ? "Join Cloudkinshuk" : "Welcome Back",
      subtitle: isSignUp
        ? "Create your account to get started on your journey"
        : "Sign in to continue your personalized journey",
      description: "Access exclusive content and personalized experiences tailored just for you.",
      icon: Sparkles,
      gradient: "from-emerald-400 via-cyan-400 to-blue-400",
      bgGradient: "from-emerald-500/8 via-cyan-500/5 to-blue-500/8",
      features: [
        { icon: Shield, text: "Secure and private experience" },
        { icon: Zap, text: "Fast and intuitive interface" },
        { icon: Users, text: "Personalized content just for you" },
      ],
    }
  }, [getRedirectUrl, isSignUp])

  const IconComponent = routeInfo.icon

  return (
    <div className="min-h-screen pt-10 bg-black flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 via-black to-zinc-900/30" />
      <div className={`absolute inset-0 bg-gradient-to-br ${routeInfo.bgGradient} opacity-30`} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile */}
        <div className="lg:hidden">
          <motion.div
            className="flex flex-col items-center justify-center min-h-screen py-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="text-center space-y-6 mb-10 max-w-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className={`inline-flex p-5 rounded-3xl bg-gradient-to-br ${routeInfo.bgGradient} border border-zinc-700/50 backdrop-blur-xl shadow-2xl shadow-black/50`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <IconComponent className="w-10 h-10 text-white drop-shadow-lg" />
              </motion.div>

              <div className="space-y-4">
                <h1
                  className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${routeInfo.gradient} bg-clip-text text-transparent leading-tight tracking-tight`}
                >
                  {routeInfo.title}
                </h1>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-medium">{routeInfo.subtitle}</p>
                <p className="text-sm text-gray-400 leading-relaxed max-w-xs mx-auto">{routeInfo.description}</p>
              </div>
            </motion.div>

            <motion.div
              className="w-full max-w-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${routeInfo.gradient} opacity-20 blur-3xl rounded-3xl scale-105`}
                />
                <div className="relative p-8 ">
                  <Customauth redirectTo={getRedirectUrl} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-20 items-center min-h-screen">
          <motion.div
            className="text-left space-y-8 max-w-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className={`inline-flex p-6 rounded-full bg-gradient-to-br ${routeInfo.bgGradient}  backdrop-blur-xl shadow-2xl shadow-black/50`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <IconComponent className="w-12 h-12 text-white drop-shadow-lg" />
            </motion.div>

            <div className="space-y-6">
              <h1
                className={`text-5xl xl:text-6xl font-bold bg-gradient-to-r ${routeInfo.gradient} bg-clip-text text-transparent leading-tight tracking-tight`}
              >
                {routeInfo.title}
              </h1>
              <p className="text-xl xl:text-2xl text-gray-100 leading-relaxed font-medium">{routeInfo.subtitle}</p>
              <p className="text-lg text-gray-100 leading-relaxed max-w-lg">{routeInfo.description}</p>
            </div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {routeInfo.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex  items-center space-x-3 text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <div className="bg-blue-500 p-2 rounded-full">
                  <feature.icon className="w-5 h-5 text-black " />
                  </div>
                  <span className="text-base font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-full max-w-md xl:max-w-lg">
              <div className="relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${routeInfo.gradient} opacity-25 blur-3xl rounded-3xl scale-110`}
                />
                <div className="relative bg-zinc-950/90 backdrop-blur-2xl border border-zinc-700/60 rounded-3xl p-10 xl:p-12 shadow-2xl shadow-black/50">
                  <Customauth redirectTo={getRedirectUrl} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default NewsignIn
