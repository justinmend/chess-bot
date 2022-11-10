import "./Chessboard.css";
import React, { useEffect, useState } from "react";
import Tile from "./Tile.js";
import { v4 as uuidv4 } from "uuid";
import { get_mock_pieces_data } from "../mock_data/get_mock_pieces_data";
import * as BOARD from '../constants/board';

function add_pieces() {
    const pieces_data = get_mock_pieces_data()
    let boardTiles = []
    
    for (let rowIdx = BOARD.DIMENSIONS.ROW_LEN-1; rowIdx >= 0; rowIdx--){
        for (let colIdx = 0; colIdx < BOARD.DIMENSIONS.COL_LEN; colIdx++){
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