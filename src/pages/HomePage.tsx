import Disclaimer from '../components/Disclaimer.tsx'
import RoomCard from '../components/RoomCard.tsx'
import { rooms } from '../data/index.ts'

function HomePage() {
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
      <div className="card-grid">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
      <Disclaimer />
    </main>
  )
}

export default HomePage
