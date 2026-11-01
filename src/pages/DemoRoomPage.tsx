import { Link } from 'react-router'

function DemoRoomPage() {
  return (
    <main className="page">
      <h1>Демонстрационный зал</h1>
      <p>
        Это временная страница для проверки навигации. Здесь пока нет
        экспонатов.
      </p>
      <p>
        <Link to="/">← На главную</Link>
      </p>
    </main>
  )
}

export default DemoRoomPage
