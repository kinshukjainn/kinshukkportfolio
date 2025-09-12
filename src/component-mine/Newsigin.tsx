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
        title: isSignUp ? "Join Minimal Minds" : "Authenticate yourself to read my blogs",
        subtitle: isSignUp
          ? "Create your account to access normal blog content and insights"
          : "Sign in to continue reading  blog content and thought-provoking insights",
        description: "Dive deep into thoughts, ideas, and explorations that shape the digital landscape.",
        icon: Newspaper,
        bgGradient: "from-blue-50 via-blue-100 to-indigo-50",
        features: [
          { icon: Zap, text: "Deep dives into technology and innovation" },
          { icon: Shield, text: "Thought-provoking insights and analysis" },
          { icon: Users, text: "Exclusive content and early access" },
        ],
      }
    } else if (getRedirectUrl.startsWith("/sources")) {
      return {
        title: isSignUp ? "Join Learning Sources" : "Learn every tech deeply with my personal picks",
        subtitle: isSignUp
          ? "Create your account to explore curated learning resources and materials"
          : "Sign in to explore curated learning resources and expert recommendations",
        description: "Access handpicked resources, tutorials, and materials for continuous learning and growth.",
        icon: Database,
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
      bgGradient: "from-blue-50 via-blue-100 to-indigo-50",
      features: [
        { icon: Shield, text: "Secure and private experience" },
        { icon: Zap, text: "Fast and intuitive interface" },
        { icon: Users, text: "Personalized content just for you" },
      ],
    }
  }, [getRedirectUrl, isSignUp])


  return (
    <div className="min-h-screen pt-10 bg-neutral-900 flex items-center justify-center relative overflow-hidden">
      

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

              <div className="space-y-4">
                <h1
                  className="text-xl sm:text-2xl font-semibold  text-white leading-tight tracking-tight"
                >
                  {routeInfo.title}
                </h1>
                <p className="text-base sm:text-lg text-white leading-relaxed font-medium">{routeInfo.subtitle}</p>
                <p className="text-sm text-gray-100 leading-relaxed max-w-xs mx-auto">{routeInfo.description}</p>
              </div>
            </motion.div>

            <motion.div
              className="w-full max-w-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-neutral-900 rounded-md" />
                <div className="relative p-8 bg-neutral-900/80 backdrop-blur-xl  rounded-md">
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
            

            <div className="space-y-6">
              <h1
                className={`text-2xl xl:text-3xl font-semibold text-white  leading-tight tracking-tight`}
              >
                {routeInfo.title}
              </h1>
              <p className="text-lg xl:text-xl text-white leading-relaxed font-normal">{routeInfo.subtitle}</p>
              <p className="text-lg text-white leading-relaxed max-w-lg">{routeInfo.description}</p>
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
                  className="flex items-center space-x-4 text-gray-100"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 4 }}
                >
                  <div className={` p-2.5 rounded-md shadow-md`}>
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
                <div className="absolute inset-0 bg-nuetral-900  scale-105" />
                <motion.div 
                  className="relative  p-10 xl:p-12"
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