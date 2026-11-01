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
