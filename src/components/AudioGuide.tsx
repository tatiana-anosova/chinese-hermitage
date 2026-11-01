import { useEffect, useRef, useState } from 'react'
import type { Language } from '../types.ts'
import { assetUrl } from '../utils/assetUrl.ts'

const labels = {
  ru: {
    title: 'Аудиогид',
    unavailable: 'Аудиогид на русском языке пока недоступен.',
  },
  zh: {
    title: '语音导览',
    unavailable: '中文语音导览暂不可用。',
  },
}

interface AudioGuideProps {
  src?: string
  language: Language
}

function AudioGuide({ src, language }: AudioGuideProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [failedSrc, setFailedSrc] = useState<string>()
  const url = src ? assetUrl(src) : undefined
  const isAvailable = url !== undefined && url !== failedSrc

  useEffect(() => {
    const audio = audioRef.current
    return () => audio?.pause()
  }, [url])

  return (
    <section className="audio-guide" lang={language === 'zh' ? 'zh-Hans' : 'ru'}>
      <h3 className="audio-guide-title">{labels[language].title}</h3>
      {isAvailable ? (
        <audio
          key={url}
          ref={audioRef}
          className="audio-guide-player"
          controls
          preload="metadata"
          src={url}
          onError={() => setFailedSrc(url)}
        />
      ) : (
        <p className="audio-guide-unavailable">{labels[language].unavailable}</p>
      )}
    </section>
  )
}

export default AudioGuide
