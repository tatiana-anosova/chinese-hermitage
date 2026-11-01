import type { Exhibit } from '../types.ts'
import CardImage from './CardImage.tsx'

function ExhibitCard({ exhibit }: { exhibit: Exhibit }) {
  return (
    <article className="card">
      <CardImage src={exhibit.image} alt={exhibit.title.ru} />
      <div className="card-body">
        <h2 className="card-title">{exhibit.title.ru}</h2>
        <p className="card-title-zh" lang="zh-Hans">
          {exhibit.title.zh}
        </p>
      </div>
    </article>
  )
}

export default ExhibitCard
