import React from 'react'
import './styles/Form.css'

const Form = (props) => {
    const { onChange, onSubmit, onClick } = props
    const { name } = props.formData
    return (
        <form className="mainForm" autocomplete="off" onSubmit={(e) => onSubmit(e)}>
            <h2>NEW PLANT SHELF</h2>
            <h3>YOUR NAME</h3>
            <input
                value={name}
                name='name'
                required={true}
                onChange={e => onChange(e)}
                // placeholder="Your Name"
            />
            <button onClick={onClick}>
                SUBMIT
            </button>
        </form>
    )
}

export default Form;