import React from 'react'

const SingleList = ({ls , handleDelete , handleEdit}) => {
    return (
        <div>
            <br/>
            <div style={{backgroundColor:'beige'}}>
                <h2 onDoubleClick={()=>handleEdit(ls.id)}>{ls.text}</h2>
            </div>
            <button className="btn-xs" onClick={()=>handleDelete(ls.id)}>Delete</button>
        </div>
    )
}

export default SingleList
