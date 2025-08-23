"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { FaGithub, FaGitlab, FaSignOutAlt, FaUser, FaSpinner } from "react-icons/fa"
import { SiHuggingface } from "react-icons/si"
import { useAuth, useSignIn, useUser } from "@clerk/clerk-react"

interface AuthComponentProps {
  className?: string
  redirectTo?: string
}

const Customauth: React.FC<AuthComponentProps> = ({ className = "", redirectTo = "/" }) => {
  const { isSignedIn, signOut } = useAuth()
  const { signIn, isLoaded } = useSignIn()
  const { user } = useUser()
  const [isLoading, setIsLoading] = useState<string | null>(null)
  const [isSignUp, setIsSignUp] = useState(false)

  const handleSSOSignIn = async (provider: "oauth_github" | "oauth_gitlab" | "oauth_huggingface") => {
    if (!isLoaded) return
    setIsLoading(provider)
    try {
      await signIn.authenticateWithRedirect({
        strategy: provider,
        redirectUrl: "/sso-callback",
        redirectUrlComplete: redirectTo,
      })
    } catch (error) {
      console.error("Sign in error:", error)
      setIsLoading(null)
    }
  }

  const handleSignOut = async () => {
    setIsLoading("signout")
    try {
      await signOut()
    } catch (error) {
      console.error("Sign out error:", error)
    } finally {
      setIsLoading(null)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
  }

  const buttonVariants = {
    hover: { scale: 1.02, transition: { duration: 0.2, ease: "easeInOut" } },
    tap: { scale: 0.98, transition: { duration: 0.1 } },
  }

  if (isSignedIn && user) {
    return (
      <motion.div
        className={`w-full pt-10 max-w-md mx-auto p-8 bg-black border border-zinc-800 rounded-4xl shadow-2xl ${className}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center mb-8" variants={itemVariants}>
          <div className="w-20 h-20 mx-auto mb-4 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-700">
            {user.imageUrl ? (
              <img
                src={user.imageUrl || "/placeholder.svg"}
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
            ) : (
              <FaUser className="text-zinc-400 text-2xl" />
            )}
          </div>
          <h2 className="text-2xl font-bold text-zinc-100 mb-2">Welcome back!</h2>
          <p className="text-zinc-400 text-sm">{user.emailAddresses[0]?.emailAddress || user.username || "User"}</p>
        </motion.div>

        <motion.button
          onClick={handleSignOut}
          disabled={isLoading === "signout"}
          className="w-full bg-zinc-900 hover:bg-zinc-800 text-zinc-100 font-semibold py-4 px-6 rounded-xl border border-zinc-700 hover:border-zinc-600 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          {isLoading === "signout" ? (
            <FaSpinner className="animate-spin text-lg" />
          ) : (
            <FaSignOutAlt className="text-lg" />
          )}
          {isLoading === "signout" ? "Signing out..." : "Sign Out"}
        </motion.button>
      </motion.div>
    )
  }

  return (
    <motion.div
      className={`w-full max-w-md mx-auto p-8 bg-black border border-zinc-800 rounded-4xl shadow-2xl ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="flex mb-6 bg-zinc-900 rounded-full p-1" variants={itemVariants}>
        <button
          onClick={() => setIsSignUp(false)}
          className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 ${
            !isSignUp ? "bg-[#ff9100] text-black shadow-sm" : "text-white hover:text-zinc-100"
          }`}
        >
          Sign In
        </button>
        <button
          onClick={() => setIsSignUp(true)}
          className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 ${
            isSignUp ? "bg-[#ff9100] text-black shadow-sm" : "text-white hover:text-zinc-100"
          }`}
        >
          Sign Up
        </button>
      </motion.div>

      <motion.div className="text-center mb-8" variants={itemVariants}>
        <h1 className="text-3xl font-semibold text-blue-500  mb-2">{isSignUp ? "Create your Account" : "Welcome Back !"}</h1>
        <p className="text-zinc-400">{isSignUp ? "Sign up to get started" : "Sign in to continue with your account"}</p>
      </motion.div>

      <motion.div className="space-y-4" variants={itemVariants}>
        <motion.button
          onClick={() => handleSSOSignIn("oauth_github")}
          disabled={isLoading === "oauth_github" || !isLoaded}
          className="w-full bg-zinc-900 hover:bg-zinc-800 text-zinc-100 font-semibold py-2 px-4 rounded-full  transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          {isLoading === "oauth_github" ? (
            <FaSpinner className="animate-spin text-lg" />
          ) : (
            <FaGithub className="text-blue-500 text-lg" />
          )}
          {isLoading === "oauth_github" ? "Connecting..." : `${isSignUp ? "Sign up" : "Continue"} with GitHub`}
        </motion.button>

        <motion.button
          onClick={() => handleSSOSignIn("oauth_gitlab")}
          disabled={isLoading === "oauth_gitlab" || !isLoaded}
          className="w-full bg-zinc-900 hover:bg-zinc-800 text-zinc-100 font-semibold py-2 px-4 rounded-full  transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          {isLoading === "oauth_gitlab" ? (
            <FaSpinner className="animate-spin text-lg" />
          ) : (
            <FaGitlab className="text-blue-500 text-lg" />
          )}
          {isLoading === "oauth_gitlab" ? "Connecting..." : `${isSignUp ? "Sign up" : "Continue"} with GitLab`}
        </motion.button>

        <motion.button
          onClick={() => handleSSOSignIn("oauth_huggingface")}
          disabled={isLoading === "oauth_huggingface" || !isLoaded}
          className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-medium py-2 px-4 rounded-full transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          {isLoading === "oauth_huggingface" ? (
            <FaSpinner className="animate-spin text-lg" />
          ) : (
            <SiHuggingface className="text-lg text-blue-500 w-6 h-6" />
          )}
          {isLoading === "oauth_huggingface"
            ? "Connecting..."
            : `${isSignUp ? "Sign up" : "Sign in"} with Hugging Face`}
        </motion.button>
      </motion.div>

      <motion.div className="mt-8 text-center" variants={itemVariants}>
        <p className="text-zinc-500 text-xs">
          By {isSignUp ? "signing up" : "signing in"}, you agree to our Terms of Service and Privacy Policy
        </p>
      </motion.div>
    </motion.div>
  )
}

export default Customauth
