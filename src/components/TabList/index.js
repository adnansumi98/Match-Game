import './index.css'

const TabList = props => {
  const {tabsList, handleClickTab} = props

  return (
    <ul className="tab-container">
      {tabsList.map(each => (
        <li key={each.tabId}>
          <button
            value={each.tabId}
            className="tab-button"
            type="button"
            onClick={handleClickTab}
          >
            {each.displayText}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default TabList
