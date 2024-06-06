import { useState } from "react"
import { createEmployee } from "../services/EmployeeService"
import { useNavigate } from "react-router-dom"

export const EmployeeComponent = () => {
    const [firstName,setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const [error,setError] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    const navigator = useNavigate()

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const handleLastName = (e) => {
        setLastName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const saveEmployee = (e) => {

        e.preventDefault();

        if(validateForm()){
            const employee = {firstName , lastName, email}
            console.log(employee)
            createEmployee(employee).then((response) =>{
                console.log(response.data);
                navigator('/employees')
            })
        }
        
    }

    function validateForm(){
        let valid = true

        const errorCopy = {... error}

        if(firstName.trim()){
            errorCopy.firstName = ''
        }else{
            errorCopy.firstName = 'First Name is Required'
            valid = false
        }

        if(lastName.trim()){
            errorCopy.lastName = ''
        }else{
            errorCopy.lastName = 'Last Name is Required'
            valid = false
        }

        if(email.trim()){
            errorCopy.email = ''
        }else {
            errorCopy.email = 'email is required'
            valid = false
        }

        setError(errorCopy)

        return valid
    }

  return (
    <div className="container">
        <br />
        <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
                <h2 className="text-center">Add Employee</h2>
                <div className="card-body">
                    <form>
                        <div className="form-group mb-2">
                            <label className="form-label">First Name:</label>
                            <input type="text" placeholder="Enter Employee First Name"
                                name="firstName"
                                value={firstName}
                                className={`form-control ${error.firstName ? 'is-invalid' : ''}`}
                                onChange={handleFirstName}
                                />
                            {error.firstName && <div className="invalid-feedback">{error.firstName}</div>}
                        </div>

                        <div className="form-group mb-2">
                            <label className="form-label">Last Name:</label>
                            <input type="text" placeholder="Enter Employee Last Name"
                                name="lastName"
                                value={lastName}
                                className={`form-control ${error.lastName ? 'is-invalid' : ''}`}
                                onChange={handleLastName}
                                />
                            {error.lastName && <div className="invalid-feedback">{error.lastName}</div>}
                        </div>

                        <div className="form-group mb-2">
                            <label className="form-label">Email:</label>
                            <input type="email" placeholder="Enter Employee's Email"
                                name="email"
                                value={email}
                                className={`form-control ${error.email ? 'is-invalid' : ''}`}
                                onChange={handleEmail}
                                />
                            {error.email && <div className="invalid-feedback">{error.email}</div>}
                        </div>

                        <button className="btn btn-success" onClick={saveEmployee}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmployeeComponent
