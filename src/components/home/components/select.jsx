import React, { useContext,useEffect} from 'react'
import  classNames  from 'classnames'
// const themes = {
//   light: {
//     foreground: "#000000",
//     background: "#eeeeee"
//   },
//   dark: {
//     foreground: "#ffffff",
//     background: "#222222"
//   }
// };


const ThemeContext = React.createContext({

});

export function SelectOption(props){
  const theme = useContext(ThemeContext)
  const label = props.label
  const value = props.value


  // const initStatus = theme.selectedValue === value

  // const [active,setActive] = useState(initStatus)
  useEffect(() => {
    // Update the document title using the browser API
  });
  console.log(theme)
  const toggle = ()=>{
    // setActive(!active);
    let res = {value,label}
    if(theme.userCancel){
      res = value===theme.selectedValue? '':{value,label}
    }
    theme.onChange(res)
  }
  const className = classNames(
    'select__item',
    props.className,
    {active:value===theme.selectedValue}
  )
  return (
    <div onClick={toggle} className={className}>
      {props.children}
    </div>
  )
} 


export function SelectWrap(props) {
  const {selectedValue, onChange,userCancel,className,children,...rest} = props;
  const name = classNames(
    'select__wrap',
    className,
  )
  return (
    <ThemeContext.Provider value={
        {
          // label,
          // value,
          userCancel,
          selectedValue,
          onChange,
        }
      }>
      <div className={name} {...rest}>
        {children}
      </div>
    </ThemeContext.Provider>
    )
}