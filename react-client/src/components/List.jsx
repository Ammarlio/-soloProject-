import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
  <h4> List </h4>
   {props.tasks.map(function(task){
   	return <h3>{task.Tasks}</h3>
   })}
  </div>
)

export default List;
 // 