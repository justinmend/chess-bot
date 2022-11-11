import React, { useState } from "react";
import { Coordinate } from "./Coordinate";
import "./Piece.css";

type Props = {
    pieceimage: string,
    piececoordinates: Coordinate, 
}

const Piece = ({ pieceimage, piececoordinates }: Props) => {
    const [coordinates, setCoordinates] = useState<Coordinate>({x: piececoordinates.x, y: piececoordinates.y})

    if (pieceimage !== null) {
        return (<img className="chess-piece" src={pieceimage} alt=""></img>);
    } else {
        return (null);
    }
       
};

export default Piece;