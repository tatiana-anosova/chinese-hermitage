import { Link } from 'react-router'
import type { Room } from '../types.ts'
import CardImage from './CardImage.tsx'

function RoomCard({ room }: { room: Room }) {
  return (
    <Link className="card card--link" to={`/rooms/${room.slug}`}>
      <CardImage src={room.image} alt={room.title.ru} />
      <div className="card-body">
        <h2 className="card-title">{room.title.ru}</h2>
        <p className="card-title-zh" lang="zh-Hans">
          {room.title.zh}
        </p>
        <p className="card-text">{room.description.ru}</p>
      </div>
    </Link>
  )
}

export default RoomCard
