import React from 'react'

export default class Page extends React.Component{
	constructor(props){
		super(props)
		this.state={
			pageNum:[]
		}
		/*当tab切换的时候,需要修改pageNum的值*/
		for(var i=1;i<this.props.data.showPage+1;i++){
				this.state.pageNum.push({isChecked:false,count:i,key:i})
		}
		this.handClick=(num)=>{
			if(num<1){
				num=1;
			}
			
			this.props.data.currentPage=num;
			var pageScope=this.props.data.showPage-2;
			if(num>pageScope){
				this.state.pageNum=[];
				for(var i=num-pageScope+1;i<num+pageScope;i++){
					this.state.pageNum.push({isChecked:false,count:i,key:i});
				} 
			}
			this.state.pageNum.map((li,index)=>{
				li.isChecked=false;
				if(num==li.count){
					li.isChecked=true;
				}
			})
			var tab=sessionStorage.getItem("tab");
			this.props.pageHandClick(num,tab);
		}
	}
	render(){
		return (
				<div class="page">
					<span onClick={()=>this.handClick(this.props.data.currentPage-1)}>
						上一页
					</span>
					{
						this.state.pageNum.map((li,index)=>{
							
							return <span onClick={()=>{this.handClick(li.count)}} key={li.key} className={li.isChecked ? 'active':''}>{li.count}</span>
						})
					}
					<span onClick={()=>this.handClick(this.props.data.currentPage+1)}>
						下一页
					</span>
				</div>	
			)
	}
}
