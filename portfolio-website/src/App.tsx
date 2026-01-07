import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1> Tracy Goldman </h1>
      <h4> Software Engineer | Game Developer | Writer </h4>
      <h4> Based in NYC </h4>
    </div>
    <div>
      <h2> About Me </h2>
      <p> I am a software engineer specializing in backend passionate about best code practices and building exciting and innovative projects. 
        I am excited by designing software architecture and seeing cool projects come to fruition. 

        I currently work at HBO Max. I work on the backend with internal tools, enabling merchandisers and stakeholders to prioritize media like episodes or movies.
      </p>
    </div>
    <div>
      <h2> Job Experience </h2>
    </div>
    <div>
      <h2> Projects </h2>
    </div>
    </>
  )
}

export default App
