import React from 'react'

const rgb = function (){
  //rgb颜色随机
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  var rgb = '('+r+','+g+','+b+')';
  return rgb;
}

const hocFn = (WrapComponent,paramsFn)=> class extends  React.Component{
  constructor(props){
    super(props)
    this.state = {
      data:paramsFn()
    }
  }
  
  changeColor = ()=>{
    this.setState(state=>{
      state.data.color = 'rgb' + rgb()
      return {
        data:state.data
      }
    })
  }

  componentDidMount(){
    document.addEventListener('scroll',this.changeColor)
  }

  componentWillUnmount(){
    document.removeEventListener(this.changeColor)
  }

  render(){
    const props = {
      ...this.props,
      changeColor:this.changeColor
    }
    return (
      <div>
        <div style={{color:this.state.data.color}}>我是高阶组件</div>
        <div>{this.props.color}</div>
        <div>{this.state.data.color}</div>
        <WrapComponent data={this.state.data} {...props} />
      </div>
    )
  }
}


class MyButton extends React.Component{
  // constructor(props){
  //   super(props)
  //   // this.state = {
  //   //   color:'red',
  //   //   backgroundColor:'yellow'
  //   // }
  //   console.log(props)
  // }
  render(){
    return(
      <button onClick={this.props.changeColor}>hoc</button>
    )
  }
}

export const MyNewButtom =  hocFn(MyButton,()=>({
  color:'blue'
}))