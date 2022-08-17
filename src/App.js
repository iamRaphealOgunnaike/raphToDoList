import React, { Component } from 'react';
import './Style.css'


export class App extends Component {
  constructor(props){
    super(props);
    this.state={
      newItems:'',
      list:[]
    }

  }

  updateInput(key, value){
    //update react state
    this.setState({
      [key]:value
    });
  }
  addItem(){ 
    //create item with unique id
    const newItem ={
      id:1 + Math.random(),
      value: this.state.newItem.slice()
    };

    //copy of current list of items
    const list =[...this.state.list];

    // add new item to the list
    list.push(newItem);

    // update state with new list and reset new item input
    this.setState ({
      list,
      newItem:''
    });

  }
  deleteItem(id){
    //copy current list of  items
    const list = [...this.state.list];

    //filter out item being deleted
    const updatedList = list.filter(item=> item.id !== id);


    this.setState({list: updatedList});

  }

  render() {
    return (
      <div className='App'>
        <div className="todo-app">
        <h2>To Do List App</h2>
        <div className='iTem'>
          Add an Item ...
          <br/>
          <input 
          className='todo-input'
          type="text"  
          placeholder='Type Item here....' 
          value={this.state.newItem} 
          onChange={e =>this.updateInput('newItem', e.target.value)}/>
          <button onClick={()=>this.addItem()} className='addBtn'>
            Add
          </button >
          <br />
          
          <ul>
          {this.state.list.map(item => {
            return(
              <li key={item.id} className='todo-item'>
                  {item.value}
                  <button 
                  onClick={() =>this.deleteItem(item.id)} className='deleBtn'>
                    <span>x</span>
                  </button>
              </li>
            )
          })}
          </ul>
        </div>
        </div>
        

        
      </div>
    )
  }
}

export default App
