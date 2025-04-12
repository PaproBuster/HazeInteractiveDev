"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DiscIcon as Discord, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function ComingSoonPage() {
  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-950 to-black opacity-80" />

      {/* Main content - centered */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">Coming Soon</h1>
          <p className="text-xl md:text-2xl text-white/80">Thank you for your patience</p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-indigo-800 hover:bg-indigo-700 text-white px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
          >
            <Link href="https://discord.com" target="_blank" rel="noopener noreferrer">
              <Discord className="mr-2 h-5 w-5" />
              Join our Discord
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-black/30 backdrop-blur-sm border-indigo-800/50 hover:bg-black/50 text-white px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
          >
            <Link href="https://www.roblox.com/groups" target="_blank" rel="noopener noreferrer">
              <Users className="mr-2 h-5 w-5" />
              Roblox Group
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Footer - absolute bottom */}
      <motion.div
        className="relative z-10 w-full py-6 text-center text-white/60 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <p>© {new Date().getFullYear()} • All Rights Reserved</p>
      </motion.div>

      {/* Animated particles - completely independent */}
      <Particles />
    </div>
  )
}

function Particles() {
  return (
    <>
      {[...Array(60)].map((_, i) => {
        const size = Math.random() * 6 + 1
        const duration = Math.random() * 30 + 20
        const initialX = Math.random() * 100
        const initialY = Math.random() * 100

        return (
          <motion.div
            key={i}
            className="fixed rounded-full bg-white z-0"
            style={{
              width: size,
              height: size,
              left: `${initialX}%`,
              top: `${initialY}%`,
            }}
            animate={{
              y: [0, Math.random() * -200 - 50, 0],
              x: [0, (Math.random() - 0.5) * 200, 0],
              opacity: [0.1, Math.random() * 0.5 + 0.3, 0.1],
            }}
            transition={{
              duration: duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 10,
            }}
          />
        )
      })}
    </>
  )
}
