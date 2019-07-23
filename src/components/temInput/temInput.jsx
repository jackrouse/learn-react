import React from 'react';
const scaleNames = {
  c: '摄氏度',
  f: '华氏度'
};
export class TemInput extends React.Component{
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.inputDom = React.createRef()
    // this.state = {
    //   temperature:''
    // }
  }
  handleChange(e){
    this.props.onTemChange(e.target.value)
  }

  componentDidMount(){
    if(this.props.scale==='c'){
      this.inputDom.current.focus()
    }
  }
    
  render(){
    const tipName = scaleNames[this.props.scale]
    return (
      <div className="form">
        <div className="tip">这里是{tipName}</div>
        <div>{JSON.stringify({...this.props})}</div>
        <TextTip {...this.props}/>
        <input type="text"
        ref={this.inputDom}
        value={this.props.temperature}
        onChange = {this.handleChange}
        />
      </div>
    )
  }
}


function TextTip (props){
  return (
    <div>
      {props.scale}
      {props.temperature}
    </div>
  )
}