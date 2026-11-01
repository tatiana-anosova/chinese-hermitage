import type { Exhibit, Room } from '../types.ts'
import roomsData from './rooms.json'
import exhibitsData from './exhibits.json'

export const rooms: Room[] = roomsData
export const exhibits: Exhibit[] = exhibitsData

export function getRoomBySlug(slug: string): Room | undefined {
  return rooms.find((room) => room.slug === slug)
}

export function getExhibitsByRoom(roomId: string): Exhibit[] {
  return exhibits.filter((exhibit) => exhibit.roomId === roomId)
}

export function getRoomById(id: string): Room | undefined {
  return rooms.find((room) => room.id === id)
}

// Case-insensitive partial match on the Russian and Chinese titles.
export function searchExhibits(query: string): Exhibit[] {
  const normalizedQuery = query.trim().toLocaleLowerCase('ru')
  if (!normalizedQuery) {
    return []
  }

  return exhibits.filter(({ title }) =>
    [title.ru, title.zh].some((text) =>
      text.toLocaleLowerCase('ru').includes(normalizedQuery),
    ),
  )
}
