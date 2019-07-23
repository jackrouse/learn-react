import React from 'react'
import {NewsItem} from './newsItem.js'

const getNewsList = function () {
  return import('./mock.json')
  .then(res=>{
    console.log(res.default)
    return res.default
  })
}

export class NewsList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      listData:[]
    }
  }


  componentWillMount(){
    getNewsList()
    .then(res=>{
      this.setState({
        listData:res
      })
    })
  }


  del=(index)=>{
    this.setState((state)=>{
      state.listData.splice(index,1)
      return {
        listData:state.listData
      }
    })
  }

  loaderMore=()=>{
    this.setState((state)=>{
      state.listData.push({
        title:'add',
        content:'add'
      })
      return {
        listData:state.listData
      }
      // console.log()

    })
  }
  
  render(){
    return (
      <div>
        {
          this.state.listData.map((item,index)=>{
            return <NewsItem key={index} cardData = {item} currentIndex={index} handleDel={this.del}/>
          })
        }
        <div onClick={this.loaderMore}>加载更多</div>
      </div>
    )
  }
}