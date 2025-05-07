import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
<HashRouter>
<Home />
</HashRouter>
    </>
  )
}

export default App
  {/* <Routes>
    <Route index element={<Home />} />
    <Route path="*" element={<NotFound />} />
  </Routes> */}