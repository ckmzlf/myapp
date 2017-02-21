import React from 'react';

export default class DetailList extends React.Component{


	render(){
		return (
				<div className="detailList">列表页
					{
						console.log(this.props.item)
					}
				</div>
			)
	}        
		
}