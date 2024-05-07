import './index.css'

const TabList = props => {
  const {tabsList, handleClickTab} = props

  return (
    <div className="tab-container">
      {tabsList.map(each => (
        <button
          key={each.tabId}
          value={each.tabId}
          className="tab-button"
          type="button"
          onClick={handleClickTab}
        >
          {each.displayText}
        </button>
      ))}
    </div>
  )
}

export default TabList
