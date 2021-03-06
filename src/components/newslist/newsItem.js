import React from 'react'
export class NewsItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      a:'aibng'
    }
  }

  handleClick() {
    this.setState(state=>({
      a:'xxxxxxx'
    }))
  }

  render(){
    return (
      <div className="card__item">
        <div className="card__title">{this.props.cardData.title}</div>
        <div className="card__content">{this.props.cardData.content}</div>
        <div className="card__del" onClick={()=>this.props.handleDel(this.props.currentIndex)}>X</div>
        <div onClick={this.handleClick.bind(this)}>{this.state.a}</div>
      </div>
    )
  }
}