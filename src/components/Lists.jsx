import React from 'react'
import SingleList from './SingleList'

const Lists = ({list, handleDelete , handleEdit}) => {
    return (
        <div>
            {list.map((ls)=>{
               return <SingleList key={ls.id} ls={ls} handleDelete={handleDelete} handleEdit={handleEdit}/>
            })
        }
        </div>
    )
}

export default Lists
