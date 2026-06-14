'use client'

import { motion } from 'framer-motion'
import { useRef, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import {
  Play, Pause, Volume2, VolumeX, Maximize, Minimize,
  Volume1,
} from 'lucide-react'

function formatTime(s: number) {
  if (isNaN(s)) return '0:00'
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  return `${m}:${sec.toString().padStart(2, '0')}`
}

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  const [started, setStarted] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [volume, setVolume] = useState(1)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [fullscreen, setFullscreen] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [scrubbing, setScrubbing] = useState(false)
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const resetHideTimer = useCallback(() => {
    setShowControls(true)
    if (hideTimer.current) clearTimeout(hideTimer.current)
    hideTimer.current = setTimeout(() => {
      if (playing) setShowControls(false)
    }, 2500)
  }, [playing])

  useEffect(() => {
    return () => { if (hideTimer.current) clearTimeout(hideTimer.current) }
  }, [])

  useEffect(() => {
    if (playing) resetHideTimer()
    else setShowControls(true)
  }, [playing, resetHideTimer])

  const handlePlay = () => {
    if (!videoRef.current) return
    if (!started) setStarted(true)
    videoRef.current.play()
  }

  const togglePlay = () => {
    if (!videoRef.current) return
    if (!started) { setStarted(true); videoRef.current.play(); return }
    if (playing) videoRef.current.pause()
    else videoRef.current.play()
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    const next = !muted
    videoRef.current.muted = next
    setMuted(next)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return
    const val = parseFloat(e.target.value)
    videoRef.current.volume = val
    setVolume(val)
    setMuted(val === 0)
    videoRef.current.muted = val === 0
  }

  const handleTimeUpdate = () => {
    if (!videoRef.current || scrubbing) return
    setCurrentTime(videoRef.current.currentTime)
  }

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return
    setDuration(videoRef.current.duration)
  }

  const seekTo = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current || !progressRef.current) return
    const rect = progressRef.current.getBoundingClientRect()
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    videoRef.current.currentTime = ratio * duration
    setCurrentTime(ratio * duration)
  }

  const toggleFullscreen = async () => {
    if (!containerRef.current) return
    if (!document.fullscreenElement) {
      await containerRef.current.requestFullscreen()
      setFullscreen(true)
    } else {
      await document.exitFullscreen()
      setFullscreen(false)
    }
  }

  useEffect(() => {
    const handler = () => setFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', handler)
    return () => document.removeEventListener('fullscreenchange', handler)
  }, [])

  const progress = duration ? (currentTime / duration) * 100 : 0

  const VolumeIcon = muted || volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-[#C8181B]/20 text-[#FF6B6B] text-sm font-semibold rounded-full mb-4">
            Watch Us Work
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white">See It in Action</h2>
          <p className="mt-4 text-lg text-white/60 max-w-xl mx-auto">
            Watch how Amar Energy solar water heaters are built and installed across India.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Player container */}
          <div
            ref={containerRef}
            className="relative rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/10 select-none"
            style={{ aspectRatio: '16/9' }}
            onMouseMove={resetHideTimer}
            onMouseLeave={() => { if (playing) setShowControls(false) }}
          >
            {/* Thumbnail — shown before first play */}
            {!started && (
              <div className="absolute inset-0 z-10">
                <Image
                  src="/video-thumbnail.jpg"
                  alt="Video thumbnail"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Big YouTube-style play button */}
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 flex items-center justify-center group"
                  aria-label="Play video"
                >
                  <div className="w-20 h-14 rounded-2xl bg-[#C8181B] group-hover:bg-[#ff0000] flex items-center justify-center shadow-2xl transition-all duration-200 group-hover:scale-110">
                    <Play className="w-7 h-7 text-white fill-white ml-1" />
                  </div>
                </button>
              </div>
            )}

            {/* Video element */}
            <video
              ref={videoRef}
              src="/video.mp4"
              className="w-full h-full object-cover"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onClick={togglePlay}
            />

            {/* Center play/pause flash on click (YouTube style) */}
            {started && (
              <div
                className="absolute inset-0 cursor-pointer"
                onClick={togglePlay}
              />
            )}

            {/* Controls bar */}
            {started && (
              <div
                className={`absolute bottom-0 inset-x-0 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              >
                {/* Gradient bg */}
                <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                <div className="relative px-4 pb-3 pt-10">
                  {/* Progress bar */}
                  <div
                    ref={progressRef}
                    className="relative h-1 rounded-full bg-white/30 cursor-pointer mb-3 group/prog"
                    onClick={seekTo}
                    onMouseDown={() => setScrubbing(true)}
                    onMouseUp={() => setScrubbing(false)}
                  >
                    {/* Buffered / filled */}
                    <div
                      className="absolute inset-y-0 left-0 bg-[#C8181B] rounded-full transition-all"
                      style={{ width: `${progress}%` }}
                    />
                    {/* Thumb */}
                    <div
                      className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#C8181B] opacity-0 group-hover/prog:opacity-100 transition-opacity shadow-md"
                      style={{ left: `calc(${progress}% - 6px)` }}
                    />
                  </div>

                  {/* Bottom row */}
                  <div className="flex items-center gap-3">
                    {/* Play/Pause */}
                    <button
                      onClick={togglePlay}
                      className="text-white hover:text-white/80 transition-colors"
                      aria-label={playing ? 'Pause' : 'Play'}
                    >
                      {playing
                        ? <Pause className="w-5 h-5 fill-white" />
                        : <Play className="w-5 h-5 fill-white" />}
                    </button>

                    {/* Volume */}
                    <div className="flex items-center gap-1.5 group/vol">
                      <button onClick={toggleMute} className="text-white hover:text-white/80 transition-colors" aria-label="Toggle mute">
                        <VolumeIcon className="w-5 h-5" />
                      </button>
                      <input
                        type="range"
                        min={0} max={1} step={0.05}
                        value={muted ? 0 : volume}
                        onChange={handleVolumeChange}
                        className="w-0 group-hover/vol:w-20 transition-all duration-200 accent-[#C8181B] cursor-pointer"
                        aria-label="Volume"
                      />
                    </div>

                    {/* Time */}
                    <span className="text-white/80 text-xs font-mono ml-1">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>

                    {/* Spacer */}
                    <div className="flex-1" />

                    {/* Fullscreen */}
                    <button
                      onClick={toggleFullscreen}
                      className="text-white hover:text-white/80 transition-colors"
                      aria-label="Toggle fullscreen"
                    >
                      {fullscreen
                        ? <Minimize className="w-5 h-5" />
                        : <Maximize className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
