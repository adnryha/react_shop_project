import React from "react";
import ReactDom from "react-dom";

const Header = (props) => {
  return (
    <h1>{props.id}Header {props.title}</h1>
  )
}

const Text = () => {
  return (
    <>
      <p>Lorem</p>
      <p>Lorem</p>
    </>
  )
}
const App = () => {
  return (
    <>
      <Header title="react" id={1} />
      <Header title="App.js" id={2} />
      <Text />
    </>

  )
}

export default App