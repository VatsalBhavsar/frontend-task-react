import { useSelector } from 'react-redux'
import './CountryList.scss'
import CountryCard from './CountryCard/CountryCard'
import { useEffect, useState } from 'react'

function CountryList() {
  const {
    countries = [],
    isFetchingCountries = false,
    activeFilter = '',
  } = useSelector(store => store)

  const [countryList, setCountryList] = useState([])
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    if (activeFilter) {
      const updatedList = countries
        .filter(country => {
          const { region } = country
          if (activeFilter === 'All') return true
          return region === activeFilter
        })
        .filter(country => {
          const { name } = country
          if (searchValue)
            return name.toLowerCase().includes(searchValue.toLowerCase())
          return true
        })
      setCountryList(updatedList)
      return
    }
    setCountryList(countries)
  }, [countries, activeFilter, searchValue])

  if (isFetchingCountries)
    return <div className="list-msg">Loading countries...</div>

  return (
    <>
      <div className="search-input-container">
        <input
          className="input-default search-input"
          type="text"
          placeholder="Search by country name"
          onChange={e => setSearchValue(e.target.value)}
        />
      </div>
      {countryList.length ? (
        <div className="country-list">
          {countryList.map(country => (
            <CountryCard key={country.name} country={country} />
          ))}
        </div>
      ) : (
        <div className="list-msg">No results found</div>
      )}
    </>
  )
}

export default CountryList
