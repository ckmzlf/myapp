import React from 'react';
import { Router, Route, hashHistory } from 'react-router'

export default class about extends React.Component{
	getRound(){
		hashHistory.push("/api");
	}
	render(){
		return (
			<div>关于<h1 onClick={this.getRound}>跳转</h1></div>
			)
	}
}