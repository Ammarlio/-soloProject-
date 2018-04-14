import React from 'react';

class ListItem extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			task:''
		}
		this.onChange=this.onChange.bind(this)
		this.click=this.click.bind(this)
	}
	onChange(e){
		this.setState({
			task:e.target.value
		})
	}
	click(){
		this.props.add(this.state.task)
	}
	render(){
		return(
  <div>
 	<input value ={this.state.task} onChange ={this.onChange}/>
 	<button onClick={this.click}>add task </button>
  </div>
  )
	}
}

export default ListItem;