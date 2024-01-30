import './index.css'

const ThumbnailItem = props => {
  const {imgData, selectImage, selectedImageId} = props
  const {thumbnailUrl, thumbnailAltText} = imgData

  const isSelectedImage =
    selectedImageId === imgData.id ? 'selected-image1' : ''

  const clickThumbnail = () => {
    selectImage(imgData)
  }

  return (
    <li>
      <button type="button" onClick={clickThumbnail}>
        <img
          className={`image1 ${isSelectedImage}`}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem