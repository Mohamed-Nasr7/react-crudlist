import React from 'react';
import './App.css';
import List from './components/List';
import AddCourse from './components/AddCourse';

class App extends React.Component {


  state ={
    courses: [
      {
        id: 1,
        name: "React"
      },
      {
        id: 2,
        name: "JS"
      },
      {
        id: 3,
        name: "Sass"
      },
      {
        id: 4,
        name: "HTML"
      },
    ],
    current:''
  }



  inputChange = (e) =>{
    this.setState({current: e.target.value}) 
  }

  add = (e) =>{
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    current === '' ? alert("The input box is empty..!"): 
    courses.unshift({id:Math.random(), name:current});
    this.setState({
      courses,
      current:''
    })

  }  


  deleteItem = (id) =>{
    let courses = this.state.courses.filter(course=>{
      return course.id !== id
    })
    this.setState({courses})

  }


  updateItem = (id, name) =>{
    let oldCourses = this.state.courses;
    let newCourses = oldCourses.map(course=>{
      if(course.id === id) course.name = name;
      return course
    })
    this.setState({
      courses: newCourses
    })
  }


  render(){

    return (
      <div className="App">

        <h1 className="head">Courses List</h1>

        <AddCourse inputChange={this.inputChange} add={this.add} inputVal={this.state.current}/>

        <List courses={this.state.courses} delete={this.deleteItem} update={this.updateItem}/>
        
      </div>
    );

  }
}

export default App;
