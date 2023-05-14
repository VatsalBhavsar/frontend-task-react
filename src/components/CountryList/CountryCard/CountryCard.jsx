import './CountryCard.scss'

function CountryCard({ country }) {
  const { name = '', region = '', flag = '' } = country
  return (
    <div className="country-card">
      <div className="country-flag">
        <img src={flag} alt={`Flag of ${name}`}></img>
      </div>
      <div className="country-info">
        <p>{name}</p>
        <span>{region}</span>
      </div>
    </div>
  )
}

export default CountryCard
