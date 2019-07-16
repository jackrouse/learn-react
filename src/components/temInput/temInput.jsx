import React from 'react';
const scaleNames = {
  c: '摄氏度',
  f: '华氏度'
};
export class TemInput extends React.Component{
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    // this.state = {
    //   temperature:''
    // }
  }
  handleChange(e){
    this.props.onTemChange(e.target.value)
  }
  render(){
    const tipName = scaleNames[this.props.scale]
    return (
      <div className="form">
        <div className="tip">这里是{tipName}</div>
        <input type="text" 
        value={this.props.temperature}
        onChange = {this.handleChange}
        />
      </div>
    )
  }
}