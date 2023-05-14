import SocialMediaActions from '../SocialMediaActions/SocialMediaActions'
import './Footer.scss'

function Footer() {
  return (
    <div className="footer">
      <SocialMediaActions />
      <p>example@email.com</p>
      <p>Copyright &#169; 2023 Name. All rights reserved</p>
    </div>
  )
}

export default Footer
