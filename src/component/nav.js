import React from 'react';
import { Router, Route, Link } from 'react-router'


export default class nav extends React.Component{
	componentDidMount(){
	}
	componentWillMount(){
		
	}
	render(){
		return (
			<div className="wrap">
				<div className="header">
					<Link to="/home">主页</Link>
					<Link to="/about">关于</Link>
					<Link to="/api">api</Link>
					<Link to="/login">登录</Link>
					<Link to="/reg">注册</Link>
				</div>
				<div className="content">
					{this.props.children}
				</div>
			</div>
			
			)
	}
}