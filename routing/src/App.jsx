import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import RootLayout from './layouts/RootLayout'

import Home from './pages/Home'
import PageOne from './pages/PageOne'
import PageTwo from './pages/PageTwo'
import PageThree from './pages/PageThree'
import NotFound from './pages/NotFound'

import MyImage from './components/MyImage'
import Detail from './components/Detail'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route path='/' element={<Home />} />
      <Route path='page-one' element={<PageOne />} />
      <Route path='page-two' element={<PageTwo />}>
        <Route path='details' element={<Detail />} />
        <Route path='image' element={<MyImage />} />
      </Route>
      <Route path='page-three' element={<PageThree />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
