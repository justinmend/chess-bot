import "./Chessboard.css";
import React, { useEffect, useState } from "react";
import Tile from "./Tile.js";
import { v4 as uuidv4 } from "uuid";

const BOARD_COL_LEN = 8, BOARD_ROW_LEN = 8

function createBoardTiles (){
    let boardTiles = []
    for (let rowIdx = BOARD_ROW_LEN-1; rowIdx >= 0; rowIdx--){
        for (let colIdx = 0; colIdx < BOARD_COL_LEN; colIdx++){
            let boardcoordinates = {x: colIdx, y: rowIdx}
            let tileId = uuidv4();
            boardTiles.push(
                <Tile key={tileId}  boardcoordinates={boardcoordinates}/>
            );
        }
    }
    return boardTiles;
}

// Todo:
// Where to handle setting a tile to the "selected" state when tile is clicked/selected?
// What about toggling? How to also handle clearing the selected state of a specific tile?
function toggleTileSelectedState (){
    
}

function Chessboard(){
    const [boardTilesState, setBoardTilesState] = useState(createBoardTiles());

    // Todo:
    const cleanupTilesState = () => {
        // boardTilesState.forEach(tile => {
        //     console.log("tile: " + tile.key + " coordinates: " + tile.props.boardcoordinates.x);
        // })

    }

    return (
        <div>
            <div id="chessboard">{boardTilesState}</div>
        </div>
        
    );    
}

export default Chessboard;