import React from 'react';
import { Router, Route, hashHistory } from 'react-router'

export default class personal extends React.Component{
	getRound(){
		hashHistory.push("/api");
	}
	render(){
		return (
			<div>个人中心</div>
			)
	}
}