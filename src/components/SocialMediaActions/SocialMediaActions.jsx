import googleIcon from '../../assets/icons/google.svg'
import facebookIcon from '../../assets/icons/facebook.svg'
import linkedInIcon from '../../assets/icons/linkedin.svg'
import twitterIcon from '../../assets/icons/twitter.svg'
import './SocialMediaActions.scss'

function SocialMediaActions() {
  return (
    <div className="social-media-actions">
      <img src={googleIcon} alt="Google icon" />
      <img src={facebookIcon} alt="Facebook icon" />
      <img src={linkedInIcon} alt="LinkedIn icon" />
      <img src={twitterIcon} alt="Twitter icon" />
    </div>
  )
}

export default SocialMediaActions
