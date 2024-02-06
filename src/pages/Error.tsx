import { ReactElement } from 'react'
import { useRouteError } from 'react-router-dom'

interface RouterError {
  statusText?: string
  message?: string
}

function Error(): ReactElement {
  const error: RouterError = useRouteError() as RouterError
  console.error(error)

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default Error
