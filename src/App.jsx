import { useState } from 'react'
import viteLogo from '/flowsurgelogo.svg'
import Header from './components/Header'
import PageContainer from './components/PageContainer'



// main container component which will hold all state
// and let data flow down to the rest of the components 

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <PageContainer/>
        
      
    </>
  )
}

export default App
