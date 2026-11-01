import { useEffect, useRef, useState } from 'react'
import type { MouseEvent, PointerEvent } from 'react'
import type { Exhibit, Language } from '../types.ts'
import AudioGuide from './AudioGuide.tsx'
import CardImage from './CardImage.tsx'

const languages: { value: Language; label: string; lang: string }[] = [
  { value: 'ru', label: 'Русский', lang: 'ru' },
  { value: 'zh', label: '中文', lang: 'zh-Hans' },
]

const sourceLinkLabels = {
  ru: 'Запись на сайте Эрмитажа',
  zh: '艾尔米塔什博物馆网站上的记录',
}

interface ExhibitDetailsProps {
  exhibit: Exhibit
  onClose: () => void
}

function ExhibitDetails({ exhibit, onClose }: ExhibitDetailsProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const pointerDownOnBackdrop = useRef(false)
  const [language, setLanguage] = useState<Language>('ru')

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) {
      return
    }

    const previouslyFocused = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // showModal() makes the rest of the page inert and closes on Escape.
    dialog.showModal()
    closeButtonRef.current?.focus()
    dialog.addEventListener('close', onClose)

    return () => {
      dialog.removeEventListener('close', onClose)
      if (dialog.open) {
        dialog.close()
      }
      document.body.style.overflow = previousOverflow
      previouslyFocused?.focus()
    }
  }, [onClose])

  // The dialog itself has no padding, so a click on it is a click on the backdrop.
  const handlePointerDown = (event: PointerEvent<HTMLDialogElement>) => {
    pointerDownOnBackdrop.current = event.target === event.currentTarget
  }

  const handleClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (pointerDownOnBackdrop.current && event.target === event.currentTarget) {
      onClose()
    }
  }

  // Invisible elements at both ends of the dialog keep Tab focus inside it
  // instead of letting it move on to the browser's address bar.
  const focusEdge = (edge: 'first' | 'last') => {
    const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
      'button, a[href], audio[controls]',
    )
    if (focusable && focusable.length > 0) {
      focusable[edge === 'first' ? 0 : focusable.length - 1].focus()
    }
  }

  const titleId = `exhibit-title-${exhibit.id}`

  return (
    <dialog
      ref={dialogRef}
      className="exhibit-details"
      aria-labelledby={titleId}
      onPointerDown={handlePointerDown}
      onClick={handleClick}
    >
      <div tabIndex={0} onFocus={() => focusEdge('last')} />
      <div className="exhibit-details-content">
        <button
          ref={closeButtonRef}
          type="button"
          className="exhibit-details-close"
          aria-label="Закрыть / 关闭"
          onClick={onClose}
        >
          ×
        </button>
        <CardImage
          src={exhibit.image}
          alt={exhibit.title.ru}
          className="exhibit-details-image"
        />
        <div className="exhibit-details-body">
          <h2 id={titleId} className="exhibit-details-title">
            {exhibit.title.ru}
          </h2>
          <p className="exhibit-details-title-zh" lang="zh-Hans">
            {exhibit.title.zh}
          </p>
          <div className="language-switcher" role="group" aria-label="Язык / 语言">
            {languages.map(({ value, label, lang }) => (
              <button
                key={value}
                type="button"
                lang={lang}
                aria-pressed={language === value}
                onClick={() => setLanguage(value)}
              >
                {label}
              </button>
            ))}
          </div>
          <p
            className="exhibit-details-description"
            lang={language === 'zh' ? 'zh-Hans' : 'ru'}
          >
            {exhibit.description[language]}
          </p>
          <AudioGuide src={exhibit.audio[language]} language={language} />
          {exhibit.sourceUrl && (
            <p
              className="exhibit-details-source"
              lang={language === 'zh' ? 'zh-Hans' : 'ru'}
            >
              <a href={exhibit.sourceUrl} target="_blank" rel="noopener noreferrer">
                {sourceLinkLabels[language]} ↗
              </a>
            </p>
          )}
        </div>
      </div>
      <div tabIndex={0} onFocus={() => focusEdge('first')} />
    </dialog>
  )
}

export default ExhibitDetails
