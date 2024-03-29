import React, {useState} from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import FooterComponent from '../FooterComponent/FooterComponent'
import './default.css'
import { DarkMode } from '../DarkModeComponent/DarkMode'


const DefaultComponent = ({children}) => {
  const [isDark, setIsDark] = useState(false);
  return (
    <div>
        <HeaderComponent/>
        <DarkMode isChecked={isDark} handleChange={() => setIsDark(!isDark)}/>
        <div className='App' data-theme={isDark ? "dark" : "light"}>
          <diV className= 'title'>
          {children}
          </diV>  
          
        </div>  
        <FooterComponent/> 
    </div>
  )
}

export default DefaultComponent