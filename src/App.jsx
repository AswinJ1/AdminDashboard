import React from 'react'

import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Main from './components/Main'
const App = () => {
  return (
   <>
   <Header></Header>
   <Sidebar className="hidden md:block" ></Sidebar>
   <Main></Main>
 
   
   </>
  )
}

export default App
