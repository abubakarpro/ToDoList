import React from 'react'


const Form = ({handleSubmit , handleChange , text}) => {

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-2">
                    <input className="form-control" type='text' value={text} onChange={handleChange}></input>
                    <button className="btn btn-primary mb-2" type='submit'>Add</button>
                </div>
            </form>         
        </>
    )
}

export default Form
