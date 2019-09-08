import React from 'react';

const AddCourse = (prop) => {

    
    return(
        <form className="addform" onSubmit={prop.add}>
            
            <input type="text" onChange={prop.inputChange} value={prop.inputVal} className="add" placeholder="add a course.."/>

            <button type="submit" className="add-button"> Add</button>

        </form>
    )


}


export default AddCourse;