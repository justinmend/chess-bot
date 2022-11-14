import "./Tile.css";
import React, { useEffect, useState } from "react";
import Piece from "./Piece";
import { v4 as uuidv4 } from "uuid";
import * as TILE from '../constants/tile_enum';
import { Coordinate } from "../constants/coordinate_interface";
import { IPiece } from "../constants/piece_interface";
import { get_mock_pieces_data } from "../mock_data/get_mock_pieces_data";

type Props = {
    boardcoordinates: Coordinate
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

function get_piece(boardcoordinates: Coordinate){
    const pieces_data: IPiece[] = get_mock_pieces_data()
    let result_piece = null

    for (let piece of pieces_data) {
        if (piece.x === boardcoordinates.x && piece.y === boardcoordinates.y) {
           result_piece = <Piece pieceimage={piece.image} piececoordinates={{x: piece.x, y: piece.y}} />
           break;
        }
    }; 
    
    return (result_piece)
}

//Todo:
// How to notify and update selected state of other tiles and clear them out
// whenever we select a tile?
function useTileOccupiedStatus(tileCoordinate: Coordinate){
    const [isTileOccuppied, setIsTileOccupied] = useState<boolean>(false)

    useEffect(() => {
        const piece = get_piece(tileCoordinate)
        if (piece !== null) {
            setIsTileOccupied(true)
        } else {
            setIsTileOccupied(false)
        }
        
    }, [isTileOccuppied])

    return isTileOccuppied
}

const Tile = ({boardcoordinates}: Props) => {
    const [tileSelectedColor, setTileSelectedColor] = useState("")
    const [tileColor, setTileColor] = useState(get_tile_color(boardcoordinates))
    const [piece, setPiece] = useState(get_piece(boardcoordinates))
    const isOccuppied = useTileOccupiedStatus(boardcoordinates)
    const [isSelected, setIsTileSelected] = useState(false)
    

    const select_tile = () => {
        if (isOccuppied === true) {
            setIsTileSelected(!isSelected)
        }
    }

    useEffect(() => {
        setTileSelectedColor(get_tile_selected_color(isSelected))
    }, [isSelected])

    return (
        <span className={`tile ${tileColor}-tile ${tileSelectedColor}`} onClick={select_tile}>{piece}</span>
    );
}

export default Tile;