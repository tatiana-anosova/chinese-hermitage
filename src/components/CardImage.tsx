interface CardImageProps {
  src?: string
  alt: string
}

function CardImage({ src, alt }: CardImageProps) {
  if (!src) {
    return (
      <div className="card-image card-image--placeholder" aria-hidden="true">
        <span>Изображение появится позже</span>
        <span lang="zh-Hans">图片待添加</span>
      </div>
    )
  }

  return <img className="card-image" src={src} alt={alt} loading="lazy" />
}

export default CardImage
