import { useState, useEffect } from 'react'

function App() {
  const [mounted, setMounted] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Subtle grain overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Ambient glow */}
      <div
        className={`absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full transition-all duration-[2000ms] ease-out ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
        style={{
          background: 'radial-gradient(circle, rgba(255,107,53,0.08) 0%, rgba(255,107,53,0.02) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Main content */}
      <main className="relative z-10 text-center px-6">
        {/* Small accent line */}
        <div
          className={`w-12 h-[2px] bg-gradient-to-r from-transparent via-[#ff6b35] to-transparent mx-auto mb-8 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 w-12' : 'opacity-0 w-0'}`}
        />

        {/* Hello */}
        <h1
          className={`font-light tracking-[0.3em] text-[#4a4a4a] text-xs md:text-sm uppercase mb-4 transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          Hello
        </h1>

        {/* World */}
        <div
          className={`relative transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <h2
            className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#f5f5f5] tracking-tight cursor-default select-none transition-all duration-500"
            style={{
              textShadow: hovered
                ? '0 0 80px rgba(255,107,53,0.3), 0 0 120px rgba(255,107,53,0.1)'
                : '0 0 60px rgba(255,107,53,0.15)',
            }}
          >
            World
          </h2>

          {/* Underline accent */}
          <div
            className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#ff6b35] to-transparent transition-all duration-700 ${hovered ? 'w-full opacity-100' : 'w-0 opacity-0'}`}
          />
        </div>

        {/* Subtle tagline */}
        <p
          className={`mt-12 text-[#3a3a3a] text-xs md:text-sm tracking-[0.2em] uppercase transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          Welcome to the beginning
        </p>
      </main>

      {/* Decorative corner elements */}
      <div className={`fixed top-6 left-6 w-8 h-8 border-l border-t border-[#222] transition-all duration-1000 delay-700 ${mounted ? 'opacity-100' : 'opacity-0'}`} />
      <div className={`fixed top-6 right-6 w-8 h-8 border-r border-t border-[#222] transition-all duration-1000 delay-700 ${mounted ? 'opacity-100' : 'opacity-0'}`} />
      <div className={`fixed bottom-16 left-6 w-8 h-8 border-l border-b border-[#222] transition-all duration-1000 delay-700 ${mounted ? 'opacity-100' : 'opacity-0'}`} />
      <div className={`fixed bottom-16 right-6 w-8 h-8 border-r border-b border-[#222] transition-all duration-1000 delay-700 ${mounted ? 'opacity-100' : 'opacity-0'}`} />

      {/* Footer */}
      <footer
        className={`fixed bottom-0 left-0 right-0 py-4 text-center transition-all duration-700 delay-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}
      >
        <p className="text-[#2a2a2a] text-[10px] md:text-xs tracking-wider">
          Requested by <span className="text-[#3a3a3a]">@web-user</span> · Built by <span className="text-[#3a3a3a]">@clonkbot</span>
        </p>
      </footer>
    </div>
  )
}

export default App
