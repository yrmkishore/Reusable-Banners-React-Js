import './index.css'

const BannerCardItem = props => {
  const {cardDetails} = props
  const {headerText, description, className} = cardDetails
  return (
    <li className={`${className} banner-card`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="discription">{description}</p>
        <button type="button" className="btn">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
