export type Language = 'ru' | 'zh'

export interface LocalizedText {
  ru: string
  zh: string
}

export interface Room {
  id: string
  slug: string
  title: LocalizedText
  description: LocalizedText
  image?: string
}

export interface Exhibit {
  id: string
  slug: string
  roomId: string
  title: LocalizedText
  description: LocalizedText
  image?: string
  audio: {
    ru?: string
    zh?: string
  }
  sourceUrl?: string
}
