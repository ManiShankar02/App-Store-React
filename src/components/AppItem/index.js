import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="items">
      <img className="image" src={imageUrl} alt={appName} />
      <p className="para">{appName}</p>
    </li>
  )
}

export default AppItem
