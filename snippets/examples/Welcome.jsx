function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
  }
  
  function App() {
    return (
      <div>
        <Welcome name="Name" />
        <Welcome name="Name" />
        <Welcome name="Name" />
      </div>
    )
  }
  
  ReactDOM.render(<App />, document.getElementById('root'))
  