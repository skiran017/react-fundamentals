// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // const inputRef = React.useRef(null)
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState()

  const handleSubmit = event => {
    event.preventDefault()
    // onSubmitUsername(event.target.elements[0].value)
    onSubmitUsername(value)
  }
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input.
  // const handleChange = e => {
  //   const {value} = e.target

  //   const isValid = value === value.toLowerCase()

  //   setError(isValid ? null : 'Username must be lower case')
  // }
  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div>
  //       <label>Username:</label>
  //       {/* <input ref={inputRef} type="text" /> */}
  //       <input onChange={handleChange} type="text" />
  //       <div role="alert" style={{color: 'red'}}>
  //         {error}
  //       </div>
  //     </div>
  //     <button disabled={error ? true : false} type="submit">
  //       Submit
  //     </button>
  //   </form>
  // )
  const handleChange = e => {
    setValue(e.target.value.toLowerCase())
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        {/* <input ref={inputRef} type="text" /> */}
        <input value={value} onChange={handleChange} type="text" />
        <div role="alert" style={{color: 'red'}}>
          {error}
        </div>
      </div>
      <button disabled={error ? true : false} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
