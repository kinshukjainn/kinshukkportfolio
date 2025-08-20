"use client"

import type React from "react"

import { SignIn, SignUp } from "@clerk/clerk-react"
import { useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { BookOpen, Database, Sparkles, Shield, Users, Zap } from "lucide-react"
import { useMemo } from "react"

interface RouteInfo {
  title: string
  subtitle: string
  description: string
  icon: typeof BookOpen
  gradient: string
  bgGradient: string
  features: Array<{
    icon: typeof Zap
    text: string
  }>
}

interface LocationState {
  from?: string
}

const fadeInUp = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
}

const fadeInScale = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const NewsignIn: React.FC = () => {
  const location = useLocation()

  const isSignUp = useMemo(() => location.pathname.includes("/sign-up"), [location.pathname])

  const getRedirectUrl = useMemo((): string => {
    const state = location.state as LocationState

    if (state?.from) {
      return state.from
    }

    const urlParams = new URLSearchParams(location.search)
    const redirectTo = urlParams.get("redirect_to")
    if (redirectTo) {
      return decodeURIComponent(redirectTo)
    }

    if (location.pathname.includes("blog") || location.search.includes("blog")) {
      return "/blog"
    }
    if (location.pathname.includes("sources") || location.search.includes("sources")) {
      return "/sources"
    }

    return "/"
  }, [location.pathname, location.search, location.state])

  const routeInfo = useMemo((): RouteInfo => {
    if (getRedirectUrl.startsWith("/blog") || location.search.includes("blog")) {
      return {
        title: isSignUp ? "Join Minimal Mind" : "Welcome to Minimal Minds",
        subtitle: isSignUp
          ? "Create your account to access exclusive blog content"
          : "Sign in to access exclusive blog content and insights",
        description: "Dive deep into thoughts, ideas, and explorations that shape the digital landscape.",
        icon: BookOpen,
        gradient: "from-emerald-400 via-cyan-400 to-blue-400",
        bgGradient: "from-emerald-500/8 via-cyan-500/5 to-blue-500/8",
        features: [
          { icon: Zap, text: "Deep dives into technology and innovation" },
          { icon: Shield, text: "Thought-provoking insights and analysis" },
          { icon: Users, text: "Exclusive content and early access" },
        ],
      }
    } else if (getRedirectUrl.startsWith("/sources") || location.search.includes("sources")) {
      return {
        title: isSignUp ? "Join Learning Sources" : "Welcome to Learning Sources",
        subtitle: isSignUp
          ? "Create your account to explore curated learning resources"
          : "Sign in to explore curated learning resources",
        description: "Access handpicked resources, tutorials, and materials for continuous learning.",
        icon: Database,
        gradient: "from-purple-400 via-pink-400 to-red-400",
        bgGradient: "from-purple-500/8 via-pink-500/5 to-red-500/8",
        features: [
          { icon: BookOpen, text: "Curated learning materials and tutorials" },
          { icon: Users, text: "Expert-recommended resources" },
          { icon: Zap, text: "Personalized learning paths" },
        ],
      }
    }

    return {
      title: isSignUp ? "Join Cloudkinshuk" : "Welcome Back",
      subtitle: isSignUp ? "Create your account to get started" : "Sign in to continue your journey",
      description: "Access exclusive content and personalized experiences.",
      icon: Sparkles,
      gradient: "from-emerald-400 via-cyan-400 to-blue-400",
      bgGradient: "from-emerald-500/8 via-cyan-500/5 to-blue-500/8",
      features: [
        { icon: Shield, text: "Secure and private experience" },
        { icon: Zap, text: "Fast and intuitive interface" },
        { icon: Users, text: "Personalized content just for you" },
      ],
    }
  }, [getRedirectUrl, location.search, isSignUp])

  const IconComponent = routeInfo.icon

  const clerkAppearance = useMemo(
    () => ({
      elements: {
        rootBox: "w-full",
        card: "bg-transparent shadow-none border-none",
        headerTitle: `text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r ${routeInfo.gradient} bg-clip-text text-transparent mb-1`,
        headerSubtitle: "text-gray-400 text-xs sm:text-sm leading-relaxed mb-6",
        socialButtonsBlockButton: `
        bg-zinc-950/95 hover:bg-zinc-900/95 border border-zinc-800/70 hover:border-zinc-700/90 
        text-white rounded-2xl transition-all duration-300 backdrop-blur-md
        hover:shadow-lg hover:shadow-white/5 font-medium text-sm sm:text-base
        hover:scale-[1.02] active:scale-[0.98] min-h-[48px] sm:min-h-[52px]
        flex items-center justify-center gap-3
      `,
        socialButtonsBlockButtonText: "text-white font-medium",
        socialButtonsBlockButtonArrow: "hidden",
        dividerLine: "bg-zinc-800/70 my-6",
        dividerText: "text-gray-500 text-xs sm:text-sm px-4",
        formButtonPrimary: `
        bg-gradient-to-r ${routeInfo.gradient} hover:opacity-90 
        text-black font-bold rounded-2xl transition-all duration-300 
        shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] 
        border-none text-sm sm:text-base min-h-[48px] sm:min-h-[52px]
        flex items-center justify-center
      `,
        formFieldInput: `
        bg-zinc-950/90 border border-zinc-800/70 hover:border-zinc-700/90 focus:border-cyan-500/50
        text-white placeholder:text-gray-500 rounded-2xl backdrop-blur-md
        focus:ring-2 focus:ring-cyan-500/20 focus:bg-zinc-900/90 transition-all duration-300
        text-sm sm:text-base min-h-[48px] sm:min-h-[52px] px-4
        focus:shadow-lg focus:shadow-cyan-500/10
      `,
        formFieldLabel: "text-gray-300 font-semibold text-sm sm:text-base mb-2",
        identityPreviewText: "text-gray-500 text-xs sm:text-sm",
        identityPreviewEditButton: `text-transparent bg-gradient-to-r ${routeInfo.gradient} bg-clip-text hover:opacity-80 font-medium`,
        footerActionLink: `text-transparent bg-gradient-to-r ${routeInfo.gradient} bg-clip-text hover:opacity-80 font-semibold text-sm sm:text-base`,
        footerActionText: "text-gray-500 text-xs sm:text-sm",
        alternativeMethodsBlockButton: `
        bg-zinc-950/90 hover:bg-zinc-900/95 border border-zinc-800/70 hover:border-zinc-700/90 
        text-white rounded-2xl transition-all duration-300 backdrop-blur-md font-medium
        text-sm sm:text-base hover:scale-[1.02] active:scale-[0.98] min-h-[48px] sm:min-h-[52px]
        flex items-center justify-center
      `,
        alternativeMethodsBlockButtonText: "text-white",
        otpCodeFieldInput: `
        bg-zinc-950/90 border border-zinc-800/70 hover:border-zinc-700/90 focus:border-cyan-500/50
        text-white rounded-xl backdrop-blur-md focus:ring-2 focus:ring-cyan-500/20 
        focus:bg-zinc-900/90 transition-all duration-300 text-center font-mono text-sm sm:text-base
        w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] focus:shadow-lg focus:shadow-cyan-500/10
      `,
        formResendCodeLink: `text-transparent bg-gradient-to-r ${routeInfo.gradient} bg-clip-text hover:opacity-80 font-medium text-xs sm:text-sm`,
        phoneInputBox: `
        bg-zinc-950/90 border border-zinc-800/70 hover:border-zinc-700/90 focus:border-cyan-500/50
        text-white rounded-2xl backdrop-blur-md focus:ring-2 focus:ring-cyan-500/20 
        focus:bg-zinc-900/90 transition-all duration-300 text-sm sm:text-base min-h-[48px] sm:min-h-[52px]
        focus:shadow-lg focus:shadow-cyan-500/10
      `,
        formFieldAction__password: `text-transparent bg-gradient-to-r ${routeInfo.gradient} bg-clip-text hover:opacity-80 font-medium text-xs sm:text-sm`,
        formFieldSuccessText: "text-emerald-400 text-xs sm:text-sm",
        formFieldErrorText: "text-red-400 text-xs sm:text-sm",
        alertErrorText: "text-red-400 text-xs sm:text-sm",
      },
    }),
    [routeInfo.gradient],
  )

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="fixed inset-0">
        <motion.div
          className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${routeInfo.bgGradient} opacity-30`}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className={`absolute top-10 left-10 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-r ${routeInfo.gradient} rounded-full blur-3xl opacity-10`}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={`absolute bottom-10 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-l ${routeInfo.gradient} rounded-full blur-3xl opacity-8`}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Subtle grain texture */}
      <div 
        className="fixed inset-0 opacity-[0.015] mix-blend-overlay"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          <motion.div
            className="flex flex-col items-center justify-center min-h-screen py-8"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            {/* Mobile Header */}
            <motion.div
              className="text-center space-y-4 mb-8 max-w-sm"
              variants={fadeInUp}
            >
              <motion.div 
                className="flex justify-center"
                variants={fadeInScale}
              >
                <div
                  className={`p-4 rounded-3xl bg-gradient-to-br ${routeInfo.bgGradient} border border-zinc-800/50 backdrop-blur-xl shadow-2xl shadow-black/50`}
                >
                  <IconComponent className="w-8 h-8 text-white drop-shadow-lg" />
                </div>
              </motion.div>
              
              <motion.div className="space-y-3" variants={fadeInUp}>
                <h1
                  className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${routeInfo.gradient} bg-clip-text text-transparent leading-tight tracking-tight`}
                >
                  {routeInfo.title}
                </h1>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed px-2">
                  {routeInfo.subtitle}
                </p>
              </motion.div>
            </motion.div>

            {/* Mobile Auth Form */}
            <motion.div 
              className="w-full max-w-sm"
              variants={fadeInScale}
            >
              <div className="relative">
                {/* Enhanced Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${routeInfo.gradient} opacity-15 blur-2xl rounded-3xl scale-105`}
                />

                {/* Auth Container */}
                <div className="relative bg-zinc-950/80 backdrop-blur-2xl border border-zinc-800/60 rounded-3xl p-1 shadow-2xl shadow-black/50">
                  <div className="bg-gradient-to-b from-zinc-950/95 to-black/98 rounded-3xl p-6 backdrop-blur-md">
                    {isSignUp ? (
                      <SignUp
                        appearance={clerkAppearance}
                        redirectUrl={getRedirectUrl}
                        signInUrl="/sign-in"
                        routing="path"
                        path="/sign-up"
                      />
                    ) : (
                      <SignIn
                        appearance={clerkAppearance}
                        redirectUrl={getRedirectUrl}
                        signUpUrl="/sign-up"
                        routing="path"
                        path="/sign-in"
                      />
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mobile Features Preview */}
            <motion.div
              className="mt-8 space-y-3 max-w-sm"
              variants={fadeInUp}
            >
              {routeInfo.features.slice(0, 2).map((feature, index) => {
                const FeatureIcon = feature.icon
                return (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 text-gray-400 group px-2"
                    variants={fadeInUp}
                  >
                    <div
                      className={`p-2 rounded-xl bg-gradient-to-r ${routeInfo.bgGradient} border border-zinc-800/40 backdrop-blur-sm`}
                    >
                      <FeatureIcon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium group-hover:text-white transition-colors duration-300">
                      {feature.text}
                    </span>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-20 items-center min-h-screen">
          
          {/* Desktop Content Section */}
          <motion.div
            className="text-left space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Icon */}
            <motion.div 
              className="flex justify-start"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div
                className={`p-5 rounded-3xl bg-gradient-to-br ${routeInfo.bgGradient} border border-zinc-800/50 backdrop-blur-xl shadow-2xl shadow-black/50`}
              >
                <IconComponent className="w-10 h-10 text-white drop-shadow-lg" />
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1
                className={`text-5xl xl:text-6xl 2xl:text-7xl font-bold bg-gradient-to-r ${routeInfo.gradient} bg-clip-text text-transparent leading-tight tracking-tight`}
              >
                {routeInfo.title}
              </h1>
              <p className="text-xl xl:text-2xl text-gray-300 font-medium leading-relaxed">
                {routeInfo.subtitle}
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg xl:text-xl text-gray-400 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {routeInfo.description}
            </motion.p>

            {/* Features List */}
            <motion.div
              className="space-y-4 max-w-xl"
              variants={staggerChildren}
              initial="initial"
              animate="animate"
            >
              {routeInfo.features.map((feature, index) => {
                const FeatureIcon = feature.icon
                return (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 text-gray-300 group"
                    variants={fadeInUp}
                  >
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${routeInfo.bgGradient} border border-zinc-800/40 backdrop-blur-sm shadow-lg shadow-black/20`}
                    >
                      <FeatureIcon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-medium group-hover:text-white transition-colors duration-300">
                      {feature.text}
                    </span>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Desktop Auth Form */}
          <motion.div 
            className="flex justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-full max-w-md xl:max-w-lg">
              <div className="relative">
                {/* Enhanced Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${routeInfo.gradient} opacity-20 blur-3xl rounded-3xl scale-110`}
                />

                {/* Auth Container */}
                <div className="relative bg-zinc-950/80 backdrop-blur-2xl border border-zinc-800/60 rounded-3xl p-1 shadow-2xl shadow-black/50">
                  <div className="bg-gradient-to-b from-zinc-950/95 to-black/98 rounded-3xl p-8 xl:p-10 backdrop-blur-md">
                    {isSignUp ? (
                      <SignUp
                        appearance={clerkAppearance}
                        redirectUrl={getRedirectUrl}
                        signInUrl="/sign-in"
                        routing="path"
                        path="/sign-up"
                      />
                    ) : (
                      <SignIn
                        appearance={clerkAppearance}
                        redirectUrl={getRedirectUrl}
                        signUpUrl="/sign-up"
                        routing="path"
                        path="/sign-in"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default NewsignIn;