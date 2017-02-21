import React, {Component, PropTypes} from 'react';
import { Router, Route, Link,hashHistory } from 'react-router'
import Page from '../components/Page.js'

import '../../public/css/style.css'


export default class home extends React.Component{
	constructor(props){
		super(props)
		this.state = {
            list: [],//列表数据
            currentPage:1,//当前页
            showPage:6,//显示的页数
            testData:[
				{tab:"all",text:"全部",id:1,isChecked:true},
				{tab:"good",text:"精华",id:2,isChecked:false},
				{tab:"share",text:"分享",id:3,isChecked:false},
				{tab:"ask",text:"问答",id:5,isChecked:false},
				{tab:"job",text:"招聘",id:4,isChecked:false}
			]
        };
	}
	PageClick(page,tab){
		var _that=this;
		fetch('https://cnodejs.org/api/v1/topics?page='+page+'&limit=10&tab='+tab,{
	   	   methods:'get'
	    }).then(function(res){
	   		return res.text();
	    }).then(function(res){
	    	var res=JSON.parse(res).data;
	    	_that.setState({
		    		list:res
	    	})
	    }).catch(function(){
	   	  console.log("数据获取错误");
	    })
	}
	componentDidMount(){
		console.log("hello")
		sessionStorage.setItem('tab','all')
		this.PageClick(1,'all');
	}
	getList(){
		return (
				<div className="menu">
				   {
				   	 this.state.testData.map((li,index)=>{
				   	 	return <Menu tabItem={this.state.testData} item={li} pageHandClick={(page,tab)=>this.PageClick(page,tab)} />
				   	 })
				   }
				</div>
			)
	}
	render(){
				return (
						<div className="content">
						
							{
								this.getList()
							}
							<div className="detailList">
							    <ul>
								  {
								  	this.state.list.map(function(li,index){
								  		return <List item={li}/>
								  	})
								  }
								 </ul>
							</div>
							<div className="page">
								
									 <Page pageHandClick={(page,tab)=>this.PageClick(page,tab)} data={this.state}/>
									
									
								
							</div>
						</div>
					)
			}
	
	
}

class Menu extends Component{
	constructor(props){
		super(props);
        this.MenuClick=()=>{
        	sessionStorage.setItem('tab',this.props.item.tab)
        	this.props.tabItem.map((li,index)=>{
        		li.isChecked=false
        	})
        	this.props.item.isChecked=true;
        	this.props.pageHandClick(1,this.props.item.tab)
        }
	}
	render(){
		return (
			<a onClick={this.MenuClick} className={this.props.item.isChecked ? "active" :''}>{this.props.item.text}</a>
		)
	}
}

class List extends Component{
	constructor(props){
		super(props);
		this.handClick=()=>{
			sessionStorage.setItem('tab',this.props.item.tab)
		}
	}
     render(){

     	return (
     			<li>
     				{
     				  <span onClick={this.handClick}>{this.props.item.title}</span>
     			     }
     			</li>
     	)
     }

}


