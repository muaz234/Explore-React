import React, { Component } from  'react';


class List extends Component {
render(){
  return(
<div className="List">
{this.props.title}
{this.props.user}
</div>
  )  
}


}


export default List;