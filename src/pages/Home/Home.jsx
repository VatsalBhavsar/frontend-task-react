import { useDispatch } from 'react-redux'
import CountryList from '../../components/CountryList/CountryList'
import Header from '../../components/Header/Header'
import { useEffect } from 'react'
import { fetchCountries } from '../../store/actions'
import Footer from '../../components/Footer/Footer'
import MobileMenu from '../../components/MobileMenu/MobileMenu'

function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])

  return (
    <>
      <div className="container">
        <Header />
        <CountryList />
        <Footer />
      </div>
      <MobileMenu />
    </>
  )
}

export default Home
