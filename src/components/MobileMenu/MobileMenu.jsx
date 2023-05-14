import { Link } from 'react-router-dom'
import './MobileMenu.scss'
import closeIcon from '../../assets/icons/close.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveFilter, setIsMobileMenuOpen } from '../../store/actions'
import { useEffect } from 'react'

function MobileMenu() {
  const {
    isMobileMenuOpen = false,
    activeFilter = '',
    regionFilters = [],
  } = useSelector(store => store)
  const dispatch = useDispatch()

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset'
    return () => {
      if (isMobileMenuOpen) dispatch(setIsMobileMenuOpen(false))
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen, dispatch])

  return (
    <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'visible' : ''}`}>
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="close-icon">
          <img
            src={closeIcon}
            alt="Close icon"
            onClick={() => dispatch(setIsMobileMenuOpen(false))}
          />
        </div>
        <div className="menu-items">
          <div className="filters">
            {regionFilters.map(filter => {
              return (
                <span
                  key={filter}
                  className={activeFilter === filter ? 'active-filter' : null}
                  onClick={() => {
                    dispatch(setIsMobileMenuOpen(false))
                    dispatch(setActiveFilter(filter))
                  }}
                >
                  {filter}
                </span>
              )
            })}
          </div>
          <Link className="logout-action" to={'/'}>
            Logout
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
