import type { Exhibit } from '../types.ts'
import CardImage from './CardImage.tsx'

interface ExhibitCardProps {
  exhibit: Exhibit
  onSelect: (exhibit: Exhibit) => void
}

function ExhibitCard({ exhibit, onSelect }: ExhibitCardProps) {
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
      </div>
    </article>
  )
}

export default ExhibitCard
