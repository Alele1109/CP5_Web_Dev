import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation
} from 'react-router-dom'

import { useEffect, useState } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './routes/Home'
import Produtos from './routes/Produtos'
import Error from './routes/Error'

function Layout() {
  const location = useLocation()

  const [displayLocation, setDisplayLocation] = useState(location)
  const [phase, setPhase] = useState('enter')

  useEffect(() => {
    if (location !== displayLocation) {
      setPhase('exit')

      const timeout = setTimeout(() => {
        setDisplayLocation(location)
        setPhase('enter')
      }, 300) // tempo da animação de saída

      return () => clearTimeout(timeout)
    }
  }, [location, displayLocation])

  return (
    <>
      <Header />

      <main className={`page-transition ${phase} flex-1`}>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: 'produtos', element: <Produtos /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App