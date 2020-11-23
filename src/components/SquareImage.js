function SquareImage(props) {
  const found = props.found;
  let img;
  if(found) {
    img = <img src={props.source} alt="Img text" className="img-found" data-id={props.imgID} data-key={props.imgKey} onClick={props.onClick}></img>
  } else {
    img = <img src={props.source} alt="Img text" data-id={props.imgID} data-key={props.imgKey} onClick={props.onClick}></img>
  }
  return (
    img
  );
}

export default SquareImage;