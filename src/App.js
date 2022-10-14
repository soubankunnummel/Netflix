import React from 'react'
import NavBar from './Combonents/NaveBar/NavBar'
import {actions,originals,comedy} from './Combonents/urls'
import "./App.css"
import Banner from './Combonents/Banner/Banner'
import RowPost from './Combonents/RowPost/RowPost'



function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={actions} title='Action' isSmall />
      <RowPost url={comedy} title='comedy' isSmall />
    </div>
  )
}

export default App
