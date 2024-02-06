import { Link } from 'react-router-dom'

const URNS = ['urn:ruuby:therapist:157459628-1', 'urn:ruuby:therapist:359389571-1', 'urn:ruuby:therapist:717824573-1']

function App() {
  return (
    <>
      <h1>Therapists</h1>
      <ul>
        {URNS.map((urn) => (
          <li key={`${urn}`}><Link to={`/therapist/${urn}`}>{urn}</Link></li>
        ))}
      </ul>
    </>
  )
}

export default App
