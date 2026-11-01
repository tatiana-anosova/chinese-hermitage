import { useCallback, useState } from 'react'
import { Link, useParams } from 'react-router'
import Disclaimer from '../components/Disclaimer.tsx'
import ExhibitCard from '../components/ExhibitCard.tsx'
import ExhibitDetails from '../components/ExhibitDetails.tsx'
import { getExhibitsByRoom, getRoomBySlug } from '../data/index.ts'
import type { Exhibit } from '../types.ts'
import RoomNotFoundPage from './RoomNotFoundPage.tsx'

function RoomPage() {
  const { slug = '' } = useParams()
  const room = getRoomBySlug(slug)
  const [selectedExhibit, setSelectedExhibit] = useState<Exhibit | null>(null)
  const closeDetails = useCallback(() => setSelectedExhibit(null), [])

  if (!room) {
    return <RoomNotFoundPage />
  }

  const roomExhibits = getExhibitsByRoom(room.id)

  return (
    <main className="page">
      <p className="back-link">
        <Link to="/">← На главную</Link>
      </p>
      <h1>{room.title.ru}</h1>
      <p className="subtitle subtitle--zh" lang="zh-Hans">
        {room.title.zh}
      </p>
      <p className="intro">{room.description.ru}</p>
      <p className="intro intro--zh" lang="zh-Hans">
        {room.description.zh}
      </p>
      {roomExhibits.length > 0 ? (
        <div className="card-grid">
          {roomExhibits.map((exhibit) => (
            <ExhibitCard
              key={exhibit.id}
              exhibit={exhibit}
              onSelect={setSelectedExhibit}
            />
          ))}
        </div>
      ) : (
        <p>В этом зале пока нет экспонатов.</p>
      )}
      <Disclaimer />
      {selectedExhibit && (
        <ExhibitDetails
          key={selectedExhibit.id}
          exhibit={selectedExhibit}
          onClose={closeDetails}
        />
      )}
    </main>
  )
}

export default RoomPage
