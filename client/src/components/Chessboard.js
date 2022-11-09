import "./Chessboard.css";
import React, { useEffect, useState } from "react";
import Tile from "./Tile.js";
import { v4 as uuidv4 } from "uuid";

const BOARD_COL_LEN = 8, BOARD_ROW_LEN = 8
const BLACK_PWN_ROW_IDX = 6
const WHITE_PWN_ROW_IDX = 1
const mock_pieces_data = []

// Todo: Move mock data creation do seperate file
function map_mock_pieces_data(){
    map_pawn_images()
    map_rook_images()
    map_knight_images()
    map_bishop_images()
    map_queen_images()
    map_king_images()
}

function map_pawn_images(){
    for (let colIdx = 0;  colIdx < BOARD_COL_LEN; colIdx++) {
        mock_pieces_data.push({image: "./Chess_pdt60.png", x: colIdx, y: BLACK_PWN_ROW_IDX})
        mock_pieces_data.push({image: "./Chess_plt60.png", x: colIdx, y: WHITE_PWN_ROW_IDX})
    }
}

function map_rook_images(){
    mock_pieces_data.push({image: "./Chess_rdt60.png", x: 0, y: 7})
    mock_pieces_data.push({image: "./Chess_rdt60.png", x: 7, y: 7})

    mock_pieces_data.push({image: "./Chess_rlt60.png", x: 0, y: 0})
    mock_pieces_data.push({image: "./Chess_rlt60.png", x: 7, y: 0})
}

function map_knight_images() {
    mock_pieces_data.push({image: "./Chess_ndt60.png", x: 1, y: 7})
    mock_pieces_data.push({image: "./Chess_ndt60.png", x: 6, y: 7})

    mock_pieces_data.push({image: "./Chess_nlt60.png", x: 1, y: 0})
    mock_pieces_data.push({image: "./Chess_nlt60.png", x: 6, y: 0})
}

function map_bishop_images() {
    mock_pieces_data.push({image: "./Chess_bdt60.png", x: 2, y: 7})
    mock_pieces_data.push({image: "./Chess_bdt60.png", x: 5, y: 7})

    mock_pieces_data.push({image: "./Chess_blt60.png", x: 2, y: 0})
    mock_pieces_data.push({image: "./Chess_blt60.png", x: 5, y: 0})
}

function map_queen_images() {
    mock_pieces_data.push({image: "./Chess_qdt60.png", x: 3, y: 7})
    mock_pieces_data.push({image: "./Chess_qlt60.png", x: 3, y: 0})
}

function map_king_images() {
    mock_pieces_data.push({image: "./Chess_kdt60.png", x: 4, y: 7})
    mock_pieces_data.push({image: "./Chess_klt60.png", x: 4, y: 0})
}

map_mock_pieces_data()

function get_mock_pieces_data(){
    return mock_pieces_data
}

function add_pieces() {
    const pieces_data = get_mock_pieces_data()
    let boardTiles = []
    
    for (let rowIdx = BOARD_ROW_LEN-1; rowIdx >= 0; rowIdx--){
        for (let colIdx = 0; colIdx < BOARD_COL_LEN; colIdx++){
            let boardcoordinates = {x: colIdx, y: rowIdx}
            let tileId = uuidv4();

            boardTiles.push(<Tile key={tileId}  pieces_data={pieces_data} boardcoordinates={boardcoordinates} isSelected={false}/>)

        }
    }

    return boardTiles;

}

function Chessboard(){
    const [boardTilesState, setBoardTilesState] = useState(add_pieces());

    return (
        <div>
            <div id="chessboard">{boardTilesState}</div>
        </div>
        
    );    
}

export default Chessboard;