import { useState } from 'react'
import Header from './components/header'
import ShowMore from './components/ShowMore'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

function App() {

  return (
    <div className='App'>
      <Header/>
      <ShowMore />
    </div>
  )
}

export default App
