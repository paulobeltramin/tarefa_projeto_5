import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Globals } from './Styles/Globals'
import Formulario from './pages/formulario/Formulario'
import { store } from './Store'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Provider store={store}>
        <Globals />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/formulario" element={<Formulario />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}
export default App
