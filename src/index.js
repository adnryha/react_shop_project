import React from "react";
import ReactDom from "react-dom";

const Header = () => {
  return (
    <h1>Header</h1>
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
      <Header />
      <Text />
    </>

  )
}

ReactDom.render(<App />, document.getElementById('root')); 