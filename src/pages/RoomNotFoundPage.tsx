import { Link } from 'react-router'

function RoomNotFoundPage() {
  return (
    <main className="page">
      <h1>Зал не найден</h1>
      <p className="subtitle subtitle--zh" lang="zh-Hans">
        未找到展厅
      </p>
      <p>Такого зала нет на выставке. Выберите зал на главной странице.</p>
      <p>
        <Link to="/">← На главную</Link>
      </p>
    </main>
  )
}

export default RoomNotFoundPage
