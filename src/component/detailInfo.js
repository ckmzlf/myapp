import React from 'react';
import { Router, Route, hashHistory } from 'react-router'

export default class detailInfo extends React.Component{
	getRound(){
		hashHistory.push("/api");
	}
	render(){
		return (
			<div>页面内容详细</div>
			)
	}
}