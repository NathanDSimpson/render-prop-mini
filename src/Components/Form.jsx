import { Component } from 'react'


class Form extends Component{
    state = {}

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }
    
    render(){
        const formData = {
            handleChange: this.handleChange,
            handleSubmit: this.handleSubmit
        }
        return this.props.render(formData)
    }
}

export default Form