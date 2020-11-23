function Results(props) {
  return(
    <div className="results">
      <h2>Completed!</h2>
      <h2>It took you {props.turns} turns!</h2>
      <button type="button" className="primary-btn" onClick={props.onClick}>Retry?</button>
    </div>
  );
}

export default Results;