import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import ListItem from './components/ListItem.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      tasks: []
    }
  }

  componentDidMount(task) {
    if(task){
    $.ajax({
      type:'POST',
      url: '/tasks', 
      data:{Tasks:task},
      success: (data) => {
       
        console.log(data)
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }
     $.ajax({
      type:'GET',
      url: '/tasks', 
      success: (data) => {
        this.setState({
          tasks: data
        })
        console.log(data)
      },
      error: (err) => {
        console.log('err', err);
      }
    });

  }

  render () {
    return (<div>
      <h1>Todo List</h1>
      <List tasks={this.state.tasks}/>
      <ListItem add={this.componentDidMount.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));