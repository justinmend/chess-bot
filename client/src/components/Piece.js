import "./Piece.css";

function Piece(props) {
    if (props.pieceimage !== null) {
        return (<img className="chess-piece" src={props.pieceimage} piececoordinates={props.piececoordinates} alt=""></img>);
    } else {
        return (null);
    }
       
}

export default Piece;

