
import { motion } from 'framer-motion'
import { forwardRef } from 'react'

const Container = forwardRef(function Container({ className = '', children }, ref) {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </motion.div>
  )
})

export default Container
