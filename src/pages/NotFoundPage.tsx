import { Link } from 'react-router'

interface NotFoundPageProps {
  title?: string
  titleZh?: string
}

function NotFoundPage({
  title = 'Страница не найдена',
  titleZh = '未找到页面',
}: NotFoundPageProps) {
  return (
    <main className="page">
      <h1>{title}</h1>
      <p className="subtitle subtitle--zh" lang="zh-Hans">
        {titleZh}
      </p>
      <p>
        <Link to="/">← На главную</Link>
      </p>
    </main>
  )
}

export default NotFoundPage
