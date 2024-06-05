import './App.css'
import { FooterComponent } from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import { ListEmployeeComponents } from './components/ListEmployeeComponents'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter>
        <HeaderComponent/>
        <Routes>
          {/** http://localhost:8080/ */}
            <Route path='/' element = {<ListEmployeeComponents/>}></Route>
          {/**http://localhost:8080/employees */}
            <Route path='/employees' element = {<ListEmployeeComponents/>}></Route>
        </Routes>
        <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
