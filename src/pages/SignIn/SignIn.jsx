import person from '../../assets/images/person.svg'
import './SignIn.scss'
import SocialMediaActions from '../../components/SocialMediaActions/SocialMediaActions'
import SignInForm from './SignInForm/SignInForm'

function SignIn() {
  return (
    <div className="container sign-in-container">
      <div className="sign-in-form">
        <p className="sign-in-header">Sign In</p>
        <p className="new-user-option">
          New user? <span>Create an account</span>
        </p>
        <SignInForm />
        <div className="sign-in-options-separator">Or Sign In With</div>
        <SocialMediaActions />
      </div>
      <div className="person-img">
        <img src={person} alt="A person with a key in hand" />
      </div>
    </div>
  )
}

export default SignIn
