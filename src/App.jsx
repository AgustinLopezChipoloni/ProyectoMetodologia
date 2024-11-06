import { useState } from 'react'
import Login from './Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className ="App">
       <div>
      <Login />
    </div>
    </div>
  )
}

export default App
