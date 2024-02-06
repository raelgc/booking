import { createBrowserRouter } from 'react-router-dom'
import Error from '../pages/Error'
import Therapist from '../pages/Therapist'
import App from '../App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },
  // TODO
  // {
  //   path: '/booking',
  //   element: <Booking />,
  //   errorElement: <Error />,
  // },
  {
    path: '/therapist/:therapistUrn',
    element: <Therapist />,
    errorElement: <Error />,
  },
])

export default router
