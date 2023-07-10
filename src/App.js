import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contacts from './components/Contacts'
import About from './components/About'
import Home from './components/Home'
import NotFound from './components/NotFound'
import MainLayout from './layouts/MainLayout'
import './App.css'
import SingleCourse from './components/SingleCourse'
import Courses from './components/Courses'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="courses" element={<Courses />} />
            <Route path="courses/:slug" element={<SingleCourse />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
