import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (max <= 0) {
        setProgress(0)
        return
      }

      const next = Math.min(Math.max(window.scrollY / max, 0), 1)
      setProgress(next)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span className="scroll-progress-line" style={{ transform: `scaleX(${progress})` }} />
    </div>
  )
}