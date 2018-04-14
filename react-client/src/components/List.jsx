import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
  <h4> List </h4>
   {props.tasks.map(function(task){
   	return <h6>{task.Tasks}</h6>
   })}
  </div>
)

export default List;
 // 