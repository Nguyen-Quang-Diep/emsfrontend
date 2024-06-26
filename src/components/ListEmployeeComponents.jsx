import  {useEffect, useState} from 'react'
import { listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

export const ListEmployeeComponents = () => {
    
    const [employees, setEmployees] = useState([])

    const navigation  = useNavigate()

    useEffect(() =>{
        listEmployees().then((response) =>{
            setEmployees(response.data);
        }).catch(error =>{
            console.error(error)
        })
    }, [])

    function addNewEmployee(){
        navigation('/add-employee')
    }

    function updateEmployee(id){
        navigation(`/edit-employee/${id}}`)
    }


    return (
       <div className='container'>
        <h2 className="text-center">List of Employee</h2>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}>ADD NEW EMPLOYEE</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First name</th>
                    <th>Employee Last name</th>
                    <th>Employee Email Id</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee =>

                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
       </div>
  )
}
export default ListEmployeeComponents
