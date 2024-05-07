import './index.css'

const Imagegenerator = props => {
  const {selectedItem} = props
  // console.log(selectedItem)
  return (
    <div className="image-container">
      <img
        key={selectedItem.id}
        src={selectedItem.imageUrl}
        className="selected-image"
        alt={selectedItem.category}
      />
    </div>
  )
}

export default Imagegenerator
