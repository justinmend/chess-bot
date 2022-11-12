import "./Tile.css";
import React, { useEffect, useState } from "react";
import Piece from "./Piece";
import { v4 as uuidv4 } from "uuid";
import * as TILE from '../constants/tile_enum';
import { Coordinate } from "../constants/coordinate_interface";
import { IPiece } from "../constants/piece_interface";

type Props = {
    boardcoordinates: Coordinate,
    pieces_data: IPiece[]
}

function get_tile_color(coordinate: Coordinate){
    if ((coordinate.x % 2 === 0 && coordinate.y % 2 === 0) || (coordinate.x % 2 !== 0 && coordinate.y % 2 !== 0)){
        return TILE.COLOR.BLACK
    } else {
        return TILE.COLOR.WHITE
    }
}

function get_tile_selected_color(isSelected: boolean){
    if (isSelected === true) {
        return "selected-tile"
    } else {
        return ""
    }
}

function get_piece(pieces_data: IPiece[], boardcoordinates: Coordinate){
    let pieceId = uuidv4()
    for (let piece of pieces_data) {
        if (piece.x === boardcoordinates.x && piece.y === boardcoordinates.y) {
            return (
                <Piece key={pieceId} pieceimage={piece.image} piececoordinates={{x: piece.x, y: piece.y}} />
            );
        }
    };    
}

const Tile = ({pieces_data, boardcoordinates}: Props) => {
    const [isSelected, toggleSelection] = useState(false)
    const [tileSelectedColor, setTileSelectedColor] = useState("")
    const [tileColor, setTileColor] = useState(get_tile_color(boardcoordinates))
    const [piece, setPiece] = useState(get_piece(pieces_data, boardcoordinates))

    useEffect(() => {
        setTileSelectedColor(get_tile_selected_color(isSelected))
    }, [isSelected])

    return (
        <span className={`tile ${tileColor}-tile ${tileSelectedColor}`} onClick={() => toggleSelection(!isSelected)} >{piece}</span>
    );
}

export default Tile;