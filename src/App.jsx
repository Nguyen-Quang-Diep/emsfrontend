import './App.css'
import EmployeeComponent from './components/EmployeeComponent'
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
          {/**http://localhost:8080/add-employee */}
            <Route path='/add-employee' element = {<EmployeeComponent/>}></Route>
          {/**http://localhost:8080/edit-employee/1*/}
            <Route path='/edit-employee/:id' element ={<EmployeeComponent/>}></Route>
            
        </Routes>
        <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
