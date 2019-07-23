import React from 'react'
const themes = {
  dark:{
    color:'rgba(0,0,0,.5)'
  },
  light:{
    color:'yellow'
  }
}
const themeContext = React.createContext({
  theme:themes.dark,
  toggle:()=>{
    console.log(themeContext)
    // this.setState(state=>({
    //   theme:
    //   state.theme === themes.dark
    //   ?themes.light
    //   :themes.dark
    // }))
  }
})

export class ProvideTest extends React.Component {
  
  constructor(props){
    super(props)
    this.toggle = ()=>{
      this.setState(state=>({
        theme:
        state.theme === themes.dark
        ?themes.light
        :themes.dark
      }))
    }
    this.state={
      theme:themes.light,
      toggle:this.toggle
    }
  }

  render(){
    return (
      <div>
        <themeContext.Provider value={this.state}>
          <Tools/>
          <BttonTool/>
          <themeContext.Consumer>
            {
              ({theme,toggle})=>{
                return (
                  <button onClick={toggle} style={{backgroundColor:theme.color}}>toggleColor</button>
                )
              }
            }
          </themeContext.Consumer>
        </themeContext.Provider>

        <ThemeButtom/>
      </div>
    )
  }
}

export class ThemeButtom extends React.Component{
  static contextType  = themeContext
  render(){
    const themecolor = this.context
    return(
      <div>
        <button onClick={themecolor.toggle} style={{backgroundColor:themecolor.theme.color}}>toggleColor</button>
      </div>
    )
  }
}


function BttonTool() {
  return (
    <div>
      <ThemeButtom/> 
    </div>
  )
}


function Tools() {
  return (
    <div>
      <BttonTool/>
    </div>
  )
}

