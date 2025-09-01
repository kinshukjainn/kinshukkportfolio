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
        gradient: "from-blue-500 via-blue-600 to-blue-700",
        bgGradient: "from-blue-50 via-blue-100 to-indigo-50",
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
        gradient: "from-purple-500 via-purple-600 to-pink-600",
        bgGradient: "from-purple-50 via-purple-100 to-pink-50",
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
      gradient: "from-blue-500 via-blue-600 to-indigo-600",
      bgGradient: "from-blue-50 via-blue-100 to-indigo-50",
      features: [
        { icon: Shield, text: "Secure and private experience" },
        { icon: Zap, text: "Fast and intuitive interface" },
        { icon: Users, text: "Personalized content just for you" },
      ],
    }
  }, [getRedirectUrl, isSignUp])

  const IconComponent = routeInfo.icon

  return (
    <div className="min-h-screen pt-10 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center relative overflow-hidden">
      {/* Windows 11 style background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile */}
        <div className="lg:hidden">
          <motion.div
            className="flex flex-col items-center justify-center min-h-screen py-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              className="text-center space-y-6 mb-10 max-w-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <motion.div
                className={`inline-flex p-5 rounded-2xl bg-gradient-to-r ${routeInfo.gradient} backdrop-blur-xl border border-gray-200/60 shadow-lg shadow-gray-200/50`}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <IconComponent className="w-10 h-10 text-white drop-shadow-sm" />
              </motion.div>

              <div className="space-y-4">
                <h1
                  className={`text-3xl sm:text-4xl font-semibold bg-gradient-to-r ${routeInfo.gradient} bg-clip-text text-transparent leading-tight tracking-tight`}
                >
                  {routeInfo.title}
                </h1>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">{routeInfo.subtitle}</p>
                <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto">{routeInfo.description}</p>
              </div>
            </motion.div>

            <motion.div
              className="w-full max-w-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl shadow-gray-300/30" />
                <div className="relative p-8 bg-white/80 backdrop-blur-xl border border-gray-200/60 rounded-3xl shadow-lg">
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
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              className={`inline-flex p-6 rounded-2xl bg-gradient-to-r ${routeInfo.gradient} backdrop-blur-xl border border-gray-200/60 shadow-lg shadow-gray-200/50`}
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <IconComponent className="w-12 h-12 text-white drop-shadow-sm" />
            </motion.div>

            <div className="space-y-6">
              <h1
                className={`text-5xl xl:text-6xl font-semibold bg-gradient-to-r ${routeInfo.gradient} bg-clip-text text-transparent leading-tight tracking-tight`}
              >
                {routeInfo.title}
              </h1>
              <p className="text-xl xl:text-2xl text-gray-700 leading-relaxed font-medium">{routeInfo.subtitle}</p>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">{routeInfo.description}</p>
            </div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {routeInfo.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 text-gray-700"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 4 }}
                >
                  <div className={`bg-gradient-to-r ${routeInfo.gradient} p-2.5 rounded-xl shadow-md`}>
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-base font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="w-full max-w-md xl:max-w-lg">
              <div className="relative">
                <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl shadow-gray-300/40 scale-105" />
                <motion.div 
                  className="relative bg-white/90 backdrop-blur-2xl border border-gray-200/80 rounded-3xl p-10 xl:p-12 shadow-xl shadow-gray-300/30"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Customauth redirectTo={getRedirectUrl} />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default NewsignIn