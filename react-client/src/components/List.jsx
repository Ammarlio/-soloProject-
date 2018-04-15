import React from 'react';
import ListItem from './ListItem.jsx';
const List = (props) => (
  <div>
 	
   {props.tasks.map(function(task){
   	return <h6 id="list">{task.Tasks}</h6>
   })}
  </div>
)

export default List;
 // render: function() {
//   var tmp = [];
//   for (var i = 0; i < this.props.level; i++) {
//     tmp.push(i);
//   }
//   var indents = tmp.map(function (i) {
//     return (
//       <span className='indent'></span>
//     );
//   });

//   return (
//     ...
//     {indents}
//     "Some text value"
//     ...
//   );
// }