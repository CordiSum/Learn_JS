import { Component } from 'react'

import './employers-add-form.scss';

class EmployeesAddForm extends Component {
    
    state = {
        name: '',
        salary: ''
    }


    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        if (this.state.name.lenght < 3 || !this.state.salary) return
        this.props.onAdd(this.state.name, this.state.salary)
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const { name, salary } = this.state

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={name}
                        onChange={this.onValueChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange} />

                    <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

function Profile({name, surname, link}) {
    return (
      <div>
         <h1>My name is {name}, surname - {surname}</h1>
         <a href={link} >My profile</a>
      </div>
    )
  }
   
  <Profile name={{firstName: 'John'}} surname='Smith' link='facebook.com'/>

export default EmployeesAddForm;