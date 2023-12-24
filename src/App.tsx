import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ContactList from './pages/Lists'
import SideBar from './pages/SideBar'
import { Globals } from './Styles/Globals'
import Formulario from './Components/Formulario'
import { Provider } from 'react-redux'
import { store } from './Store'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <ContactList/>
  },

  {
    path:'/formulario',
    element:<Formulario/>
  }
])

function App() {
  return (
    <>
  <Provider store={store}>
  <Globals />
      <main>
        <SideBar />
        <RouterProvider router={routes} />
      </main>
  </Provider>
    </>
  )
}

export default App
