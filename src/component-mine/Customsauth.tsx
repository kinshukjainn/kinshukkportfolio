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
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94], staggerChildren: 0.08 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] } },
  }

  const buttonVariants = {
    hover: { scale: 1.01, transition: { duration: 0.15, ease: "easeOut" } },
    tap: { scale: 0.99, transition: { duration: 0.1 } },
  }

  if (isSignedIn && user) {
    return (
      <motion.div
        className={`w-full pt-10 max-w-md mx-auto p-8 bg-neutral-900 backdrop-blur-xl  rounded-md shadow-lg shadow-black/5 ${className}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          background: 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.9) 100%)',
        }}
      >
        <motion.div className="text-center mb-8" variants={itemVariants}>
          <div className="w-20 h-20 mx-auto mb-4 bg-[#181818] rounded-md flex items-center justify-center  shadow-sm">
            {user.imageUrl ? (
              <img
                src={user.imageUrl || "/placeholder.svg"}
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
            ) : (
              <FaUser className="text-gray-100 text-2xl" />
            )}
          </div>
          <h2 className="text-2xl font-semibold text-white  mb-2">Welcome back!</h2>
          <p className="text-gray-100 text-sm">{user.emailAddresses[0]?.emailAddress || user.username || "User"}</p>
        </motion.div>

        <motion.button
          onClick={handleSignOut}
          disabled={isLoading === "signout"}
          className="w-full bg-white/70 hover:bg-white/90 text-gray-700 font-medium py-4 px-6 rounded-xl border border-gray-200/60 hover:border-gray-300/60 hover:shadow-md transition-all duration-200 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          {isLoading === "signout" ? (
            <FaSpinner className="animate-spin text-lg text-blue-100" />
          ) : (
            <FaSignOutAlt className="text-lg text-red-100" />
          )}
          {isLoading === "signout" ? "Signing out..." : "Sign Out"}
        </motion.button>
      </motion.div>
    )
  }

  return (
    <motion.div
      className={`w-full max-w-md mx-auto p-8 bg-neutral-900 backdrop-blur-xl  rounded-md shadow-lg shadow-black/5 ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="flex mb-6  rounded-md  p-1 backdrop-blur-sm" variants={itemVariants}>
        <button
          onClick={() => setIsSignUp(false)}
          className={`flex-1 py-2.5 px-4 rounded-md text-xl font-medium transition-all outline-none   duration-200 ${
            !isSignUp
              ? "underline  text-yellow-500 shadow-sm "
              : "text-gray-100 cursor-pointer hover:text-gray-100"
          }`}
        >
            LOGIN
        </button>
        <button
          onClick={() => setIsSignUp(true)}
          className={`flex-1 py-2.5 px-4 rounded-md text-xl font-medium transition-all outline-none duration-200 outline-0 ${
            isSignUp
              ? "underline   text-yellow-500 shadow-sm "
              : "text-gray-100 cursor-pointer hover:text-gray-100"
          }`}
        >
          SIGN UP
        </button>
      </motion.div>

      <motion.div className="text-center mb-8" variants={itemVariants}>
        <h1 className="text-3xl font-semibold text-white  mb-2">
          {isSignUp ? "Create your Account" : "Welcome Back !"}
        </h1>
        <p className="text-gray-100">{isSignUp ? "Sign up to get started" : "Login to continue with your account"}</p>
      </motion.div>

      <motion.div className="space-y-3" variants={itemVariants}>
        <motion.button
          onClick={() => handleSSOSignIn("oauth_github")}
          disabled={isLoading === "oauth_github" || !isLoaded}
          className="w-full bg-[#303030] text-white font-medium py-2 px-2 rounded-md   transition-all duration-200 flex items-center justify-center gap-3 disabled:opacity-50 cursor-pointer backdrop-blur-sm"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          {isLoading === "oauth_github" ? (
            <FaSpinner className="animate-spin text-lg text-blue-500" />
          ) : (
            <FaGithub className="text-white text-lg" />
          )}
          {isLoading === "oauth_github" ? "Connecting..." : `${isSignUp ? "Sign up" : "Login"} via GitHub`}
        </motion.button>

        <motion.button
          onClick={() => handleSSOSignIn("oauth_gitlab")}
          disabled={isLoading === "oauth_gitlab" || !isLoaded}
          className="w-full bg-[#303030] text-white font-medium py-2 px-2 rounded-md   transition-all duration-200 flex items-center justify-center gap-3 disabled:opacity-50 cursor-pointer backdrop-blur-sm"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          {isLoading === "oauth_gitlab" ? (
            <FaSpinner className="animate-spin text-lg text-blue-500" />
          ) : (
            <FaGitlab className="text-white text-lg" />
          )}
          {isLoading === "oauth_gitlab" ? "Connecting..." : `${isSignUp ? "Sign up" : "Login"} via GitLab`}
        </motion.button>

        <motion.button
          onClick={() => handleSSOSignIn("oauth_huggingface")}
          disabled={isLoading === "oauth_huggingface" || !isLoaded}
          className="w-full bg-[#303030] text-white font-medium py-2 px-2 rounded-md   transition-all duration-200 flex items-center justify-center gap-3 disabled:opacity-50 cursor-pointer backdrop-blur-sm"

          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          {isLoading === "oauth_huggingface" ? (
            <FaSpinner className="animate-spin text-lg text-blue-500" />
          ) : (
            <SiHuggingface className="text-lg text-white w-6 h-6" />
          )}
          {isLoading === "oauth_huggingface"
            ? "Connecting..."
            : `${isSignUp ? "Sign up" : "Login"} via Hugging Face`}
        </motion.button>
      </motion.div>

      <motion.div className="mt-8 text-center" variants={itemVariants}>
        <p className="text-gray-200 text-xs">
          By {isSignUp ? "signing up" : "signing in"}, you agree to our Terms of Service and Privacy Policy
        </p>
      </motion.div>
    </motion.div>
  )
}

export default Customauth