import { assetUrl } from '../utils/assetUrl.ts'

interface CardImageProps {
  src?: string
  alt: string
  className?: string
}

function CardImage({ src, alt, className = 'card-image' }: CardImageProps) {
  if (!src) {
    return (
      <div className={`${className} image-placeholder`} aria-hidden="true">
        <span>Изображение появится позже</span>
        <span lang="zh-Hans">图片待添加</span>
      </div>
    )
  }

  return (
    <img className={className} src={assetUrl(src)} alt={alt} loading="lazy" />
  )
}

export default CardImage
