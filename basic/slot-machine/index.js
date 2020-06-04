class App extends React.Component {
  render() {
    const choices = ['🍒', '🍎', '🍊', '💩']
    const setRandom = () => {
      return choices[Math.floor(Math.random() * choices.length)]
    }

    return (
      <div>
        <h1>Slot Machines!</h1>
        <Machine
          s1={setRandom()}
          s2={setRandom()}
          s3={setRandom()}
        />
        <Machine
          s1="💩"
          s2="💩"
          s3="💩"
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
