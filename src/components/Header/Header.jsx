import { Link } from 'react-router-dom'
import menuIcon from '../../assets/icons/menu.svg'
import './Header.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveFilter, setIsMobileMenuOpen } from '../../store/actions'

function Header() {
  const dispatch = useDispatch()
  const { activeFilter = '', regionFilters = [] } = useSelector(store => store)

  return (
    <header className="header">
      <div className="header-title">Countries</div>
      <div className="header-actions">
        <div className="header-actions-desktop">
          <div className="filters">
            {regionFilters.map(filter => {
              return (
                <span
                  key={filter}
                  className={activeFilter === filter ? 'active-filter' : null}
                  onClick={() => dispatch(setActiveFilter(filter))}
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
        <div className="header-actions-mobile">
          <img
            src={menuIcon}
            alt="Menu icon"
            onClick={() => dispatch(setIsMobileMenuOpen(true))}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
