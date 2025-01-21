import React from 'react'

import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Main from './components/Main'
const App = () => {
  return (
   <>
 
 <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-grow"> {/* This ensures the main content takes available space */}
          <Main />
        </div>
      </div>
   
   </>
  )
}

export default App
