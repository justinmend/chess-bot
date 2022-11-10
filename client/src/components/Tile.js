import "./Tile.css";
import React, { useState } from "react";
import Piece from "./Piece.js";
import { v4 as uuidv4 } from "uuid";
import * as TILE from '../constants/tile';

function get_tile_color(coordinate){
    if ((coordinate.x % 2 === 0 && coordinate.y % 2 === 0) || (coordinate.x % 2 !== 0 && coordinate.y % 2 !== 0)){
        return TILE.COLOR.BLACK
    } else {
        return TILE.COLOR.WHITE
    }
}

function get_tile_selected_color(isSelected){
    if (isSelected === true) {
        return "selected-tile"
    } else {
        return ""
    }
}

function get_piece(pieces_data, boardcoordinates){
    let pieceId = uuidv4()
    for (let piece of pieces_data) {
        if (piece.x === boardcoordinates.x && piece.y === boardcoordinates.y) {
            return (
                <Piece key={pieceId} pieceimage={piece.image} piececoordinates={{x: piece.x, y: piece.y}} />
            );
        }
    };    
}

function Tile (props) {
    const [tileSelectedColor, setTileSelectedColor] = useState(get_tile_selected_color(props.isSelected))
    const [tileColor, setTileColor] = useState(get_tile_color(props.boardcoordinates))
    const [piece, setPiece] = useState(get_piece(props.pieces_data, props.boardcoordinates))

    return (
        <span className={`tile ${tileColor}-tile ${tileSelectedColor}`}>{piece}</span>
    );
}

export default Tile;