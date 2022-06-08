import React , {useState} from 'react'

function App() {
  const [count, setCount] = useState(() => {
     return 0
    })
  //  use function for use state _> the fuction will be rendered once we call the function only, its faster than a constant which
  //     will be rendered each time we update the state 'i compared it it , function is faster !'
  // count is the current state , setCount  to update the state 'const setCount: React.Dispatch<React.SetStateAction<string>>'
  // if i will use object into useState , i must update the hole object when i want t o update the state  because the updste 
  //    will over write the previouse state , dosent get merge automaticllay, so the things that dosent updated will be removed 
  // example
  // const [state, setCount] = useState({count : 0 , theme: blue}
  // state.count = 0
  // state.theme = blue
  // function decrementCount(){
    // setState(prevState => {
      //return {...prevState , count = prevState.count -1} )}}
  // Better way ====> SEPERATE THEM EACH ONE IN A SEPARETE HOOK
  // we can use multiple useState Hooks 
  function decrementCount(){
    setCount(prevCount => prevCount-1)
  }

    
  

  function increaseCount(){
    setCount(prevCount => prevCount +1 )
  }
  
  return (
    <>
    <button onClick={decrementCount}> - </button>
    <span> {count} </span>
    <button onClick={increaseCount}> + </button>
    </>
  )
}

export default App