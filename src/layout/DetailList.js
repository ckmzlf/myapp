import React from 'react';

export default class DetailList extends React.Component{


	render(){
		return (
				<div className="detailList">列表页,测试的文字
					{
						console.log(this.props.item)
					}
				</div>
			)
	}        
		
}