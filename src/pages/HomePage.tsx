import { useCallback, useState } from 'react'
import Disclaimer from '../components/Disclaimer.tsx'
import ExhibitCard from '../components/ExhibitCard.tsx'
import ExhibitDetails from '../components/ExhibitDetails.tsx'
import RoomCard from '../components/RoomCard.tsx'
import SearchBox from '../components/SearchBox.tsx'
import { getRoomById, rooms, searchExhibits } from '../data/index.ts'
import type { Exhibit } from '../types.ts'

function HomePage() {
  const [query, setQuery] = useState('')
  const [selectedExhibit, setSelectedExhibit] = useState<Exhibit | null>(null)
  const closeDetails = useCallback(() => setSelectedExhibit(null), [])

  const isSearching = query.trim() !== ''
  const results = searchExhibits(query)

  return (
    <main className="page">
      <h1>Китайское искусство в Эрмитаже</h1>
      <p className="subtitle">
        Виртуальная выставка с аудиогидом на русском и китайском языках
      </p>
      <p className="intro">
        Добро пожаловать на виртуальную выставку китайского искусства из
        коллекции Государственного Эрмитажа. Экспонаты собраны в тематические
        залы. У каждого экспоната будут описание и аудиогид на русском и
        китайском языках. Выберите зал, чтобы начать осмотр.
      </p>
      <SearchBox value={query} onChange={setQuery} />
      <p className="search-status" role="status">
        {isSearching &&
          (results.length > 0
            ? `Найдено экспонатов: ${results.length}`
            : 'Экспонаты не найдены. Попробуйте другой запрос.')}
      </p>
      {isSearching ? (
        results.length > 0 && (
          <div className="card-grid">
            {results.map((exhibit) => (
              <ExhibitCard
                key={exhibit.id}
                exhibit={exhibit}
                room={getRoomById(exhibit.roomId)}
                onSelect={setSelectedExhibit}
              />
            ))}
          </div>
        )
      ) : (
        <div className="card-grid">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
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

export default HomePage
