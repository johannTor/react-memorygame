function Menu(props) {

  return(
    <div>
      <h2>Match the images!</h2>
      <button type="button" className="primary-btn" onClick={props.onClick}>Start</button>
    </div>
  );
}

export default Menu;