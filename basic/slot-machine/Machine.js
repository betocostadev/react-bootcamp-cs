class Machine extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props
    const winner = (s1 === s2) && (s2 === s3)

    const icon = {
      fontSize: '34px',
      border: '2px solid black',
      padding: '8px'
    }

    return (
      <div className="Machine">
        <p style={icon}>{s1} {s2} {s3}</p>
        <p
          className={winner ? 'win' : 'lose'}>
          {winner ? 'Winner!' : 'Loser!'}
        </p>
      </div>
    )
  }
}
