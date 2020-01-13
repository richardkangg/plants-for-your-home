import React from 'react'
// import './layout/Form.css'

const Form = (props) => {
    const { onChange, onSubmit, onClick } = props
    const { name } = props.formData
    return (
        <form className="mainform" autocomplete="off" onSubmit={(e) => onSubmit(e)}>
            <h3>NEW PLANT SHELF</h3>
            <input
                value={name}
                name='name'
                required={true}
                onChange={e => onChange(e)}
                placeholder="Your Name"
            />
            <button onClick={onClick}>
                Submit
            </button>
        </form>
    )
}

export default Form;