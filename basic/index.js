class HelloClass extends React.Component {
  render() {
    return (
      <div>
        <h2>Hello there! I'm a class based component</h2>
        <p>Historically only Class based components could render more advanced features like:</p>
        <ul>
          <li>State</li>
          <li>Lifecycle Methods</li>
        </ul>
      </div>
    )
  }
}

const Hello = () => {
  return (
    <div>
      <h2>Hello there! I'm a function based component</h2>
      <p>But now, with React <strong>Hooks</strong> you can write functional components using advanced methods.</p>
    </div>
  )
}

const Mood = () => {
  const moods = [ 'Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid', 'Happy']

  const getMood = () => {
    return moods[Math.floor(Math.random() * moods.length)]
  }

  return (
    <div>
      <p>My mood is {getMood()}</p>
    </div>
  )
}

class App extends React.Component {
  render() {
    return (
      <div>
        <HelloClass />
        <Hello />
        <Mood />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'))
