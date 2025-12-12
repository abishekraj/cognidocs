import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

/**
 * Main Application Component.
 * Manages the state of the To-Do list, including adding, deleting, and updating items.
 * @extends React.Component
 */
class App extends React.Component {
  /**
   * Creates an instance of App.
   * @param {Object} props - The properties passed to the component.
   */
  constructor(props){
    super(props);
    /**
     * Component state.
     * @property {Array<Object>} items - List of to-do items.
     * @property {Object} currentItem - The current item being typed.
     * @property {string} currentItem.text - The text of the current item.
     * @property {string} currentItem.key - The unique key of the current item.
     */
    this.state = {
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  /**
   * Adds a new item to the list.
   * Prevents default form submission behavior.
   * @param {Event} e - The form submission event.
   */
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:''
      }
    })
    }
  }
  /**
   * Handles input changes for the current item.
   * Updates the state with the current text and a generated key.
   * @param {Event} e - The input change event.
   */
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  /**
   * Deletes an item from the list by its key.
   * @param {string|number} key - The unique key of the item to delete.
   */
  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })

  }
  /**
   * Updates the text of an existing item.
   * @param {string} text - The new text for the item.
   * @param {string|number} key - The unique key of the item to update.
   */
  setUpdate(text,key){
    console.log("items:"+this.state.items);
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
        console.log(item.key +"    "+key)
        item.text= text;
      }
    })
    this.setState({
      items: items
    })
    
   
  }
 /**
  * Renders the App component.
  * Includes the input form and the list of items.
  * @returns {JSX.Element} The rendered component.
  */
 render(){
  return (
    <div className="App">
      <header>
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="Enter task" value= {this.state.currentItem.text} onChange={this.handleInput}></input>
          <button type="submit">Add</button>
        </form>
        <p>{this.state.items.text}</p>
        
          <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
        
      </header>
    </div>
  );
 }
}


export default App;
