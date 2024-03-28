import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'

import {originals,trending,romance,action,comedy,horror} from './urls'
import './App.css'
import RowPost from './Components/RowPost/Rowpost'


function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url={trending} title='Trending'/>
      <RowPost url={originals} title='Netflix-originals' isSmall/>
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={romance} title='Romance' isSmall/>
      <RowPost url={comedy} title='Comedy' isSmall />
      <RowPost url={horror} title='Horror' isSmall />
    </div>
  )
}

export default App
