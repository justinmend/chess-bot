import "./Tile.css";
import React from "react";
import Piece from "./Piece.js";
import { v4 as uuidv4 } from "uuid";

const colorEnum = {
    WHITE_TILE: "white",
    BLACK_TILE: "black"
}

function get_tile_color(coordinate){
    if ((coordinate.x % 2 === 0 && coordinate.y % 2 === 0) || (coordinate.x % 2 !== 0 && coordinate.y % 2 !== 0)){
        return colorEnum.BLACK_TILE
    } else {
        return colorEnum.WHITE_TILE
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

class Tile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tileSelectedColor: get_tile_selected_color(this.props.isSelected),
            tileColor: get_tile_color(this.props.boardcoordinates),
            piece: get_piece(this.props.pieces_data, this.props.boardcoordinates)
        };
    }

    render() {
        return (
            <span className={`tile ${this.state.tileColor}-tile ${this.state.tileSelectedColor}`}>{this.state.piece}</span>
        );
    }
}

export default Tile;