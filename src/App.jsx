
import { Suspense } from 'react'
import './App.css'
import Scene from './components/Scene'
import Labels from './components/Labels'

function App() {

  return (
    <>
    <div id='bg_container' className="container">
      <div className="wrapper">
        <Labels />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </div>
    </div>
    </>
  )
}

export default App
