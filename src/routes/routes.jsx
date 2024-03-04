import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import Store from '../pages/store'
import Contact from '../pages/contact'

// named export
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/store',
    element: <Store />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
])

// export default router
