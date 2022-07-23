import React from 'react'
import Articles from './components/Articles.js'
import User from './components/User.js'
import './index.css'

const App = () => {
  return (
    <div>
      <header>
        <h1>React Skeleton Loading</h1>
      </header>
      <div className='content'>
        <Articles />
        <User />
      </div>
    </div>
  )
}

export default App