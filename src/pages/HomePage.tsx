import { Link } from 'react-router'

function HomePage() {
  return (
    <main className="page">
      <h1>Китайское искусство в Эрмитаже</h1>
      <p className="subtitle">
        Виртуальная выставка с аудиогидом на русском и китайском языках
      </p>
      <p>
        <Link to="/rooms/demo">Перейти в демонстрационный зал →</Link>
      </p>
      <p className="disclaimer">
        Это независимый учебный школьный проект. Он не является официальным
        сайтом Государственного Эрмитажа и не связан с музеем.
      </p>
    </main>
  )
}

export default HomePage
