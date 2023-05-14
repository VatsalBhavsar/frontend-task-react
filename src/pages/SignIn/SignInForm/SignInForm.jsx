import { useNavigate } from 'react-router-dom'
import './SignInForm.scss'
import { useState } from 'react'

function SignInForm() {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!username) {
      setError('Username cannot be empty')
      return
    }
    if (!password) {
      setError('Password cannot be empty')
      return
    }
    setError('')
    navigate('/home')
  }

  const ErrorMsg = () => {
    if (!error) return
    return <p className="error-msg">{error}</p>
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input-default"
        type="text"
        placeholder="Username of email"
        onChange={e => setUsername(e.target.value)}
      ></input>
      <input
        className="input-default"
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      ></input>
      <div className="checkbox">
        <input id="one" type="checkbox" />
        <span className="check"></span>
        <label htmlFor="one">Keep me signed in</label>
      </div>
      <button className="button-default">Sign In</button>
      <ErrorMsg />
    </form>
  )
}

export default SignInForm
