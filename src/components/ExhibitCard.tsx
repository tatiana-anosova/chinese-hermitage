import type { Exhibit, Room } from '../types.ts'
import CardImage from './CardImage.tsx'

interface ExhibitCardProps {
  exhibit: Exhibit
  room?: Room
  onSelect: (exhibit: Exhibit) => void
}

function ExhibitCard({ exhibit, room, onSelect }: ExhibitCardProps) {
  return (
    <article className="card card--link">
      <CardImage src={exhibit.image} alt={exhibit.title.ru} />
      <div className="card-body">
        <h2 className="card-title">
          <button
            type="button"
            className="card-button"
            aria-haspopup="dialog"
            onClick={() => onSelect(exhibit)}
          >
            {exhibit.title.ru}
          </button>
        </h2>
        <p className="card-title-zh" lang="zh-Hans">
          {exhibit.title.zh}
        </p>
        {room && (
          <p className="card-text">
            Зал: {room.title.ru} / <span lang="zh-Hans">{room.title.zh}</span>
          </p>
        )}
      </div>
    </article>
  )
}

export default ExhibitCard
