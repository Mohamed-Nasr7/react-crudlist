import React, {Component} from 'react';


class List extends Component {


    state={
        flag: 0
    }

    toggleFlag =(id)=>{
        this.setState({
            flag: id
        });
    }


    editList =(item) =>{
        return(
            <div className="editform">
                <span>{item.name}</span>
                <button className="delete" onClick={()=>this.props.delete(item.id)}>Delete</button>
                <button className="edit" onClick={()=>this.toggleFlag(item.id)}>Edit</button>
    
            </div>
        )
    
    }

    
    updateItem =(id) =>{
        this.props.update(id, this.input.value);
        this.toggleFlag(0);
    }


    updateForm =(item)=>{
        return(
            <form onSubmit={()=>this.updateItem(item.id)} className="updateform">
                <input type="text" ref={(v)=>{this.input = v}} defaultValue={item.name} />
                <button>Update</button>
                
            </form>
        )
    }

    

    render(){

        return (
            this.props.courses.map((item)=>{

                if(item.id === this.state.flag){

                    return(
                        <div key = {item.id} className="form-container" >
                            {this.updateForm(item)}
                            
                        </div>
                    ) 
                }
                
                else{
                    return (
                        <div key = {item.id} className="form-container">
                            {this.editList(item)}
                            
                        </div>
                    )
                }
                
            })
            
            
        )
        

    }

}

export default List;



