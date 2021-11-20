import "./Chessboard.css";
import React, { useEffect, useState } from "react";
import Tile from "./Tile.js";
import { v4 as uuidv4 } from "uuid";

const BOARD_COL_LEN = 8, BOARD_ROW_LEN = 8

//To-do:
// Need to add a way to clean up other tile instances' selected state when
// a specific tile is selected.
// Will race condition be a problem if I clear out all the tile instances' state, then apply the
// selected state effect to a specific tile? Which one will be executed first?
// Can you call a parent function from a child component

function createBoardTiles (){
    let boardTiles = []
    for (let rowIdx = BOARD_ROW_LEN-1; rowIdx >= 0; rowIdx--){
        for (let colIdx = 0; colIdx < BOARD_COL_LEN; colIdx++){
            let boardcoordinates = {x: colIdx, y: rowIdx}
            let tileId = uuidv4();
            boardTiles.push(
                <Tile key={tileId}  boardcoordinates={boardcoordinates} setTileSelectedState={setTileSelectedState}/>
            );
        }
    }
    return boardTiles;
}

function setTileSelectedState (){
    console.log("Setting tile's selected state");
    // Do I need the tile key inorder to specify which tile to update?
    
}

function Chessboard(){
    const [boardTilesState, setBoardTilesState] = useState(createBoardTiles());

    const cleanupTilesState = () => {
        // Object.keys(boardTiles).map(key => {
        //     console.log(boardTiles[key]);
        // })
        // boardTilesState.forEach(tile => {
        //     console.log("tile: " + tile.key + " coordinates: " + tile.props.boardcoordinates.x);
        // })

        console.log("cleaning up tiles");
        // Set isSelected to false for all tiles?

    }

    const selectTile = () => {
        // Do I need to create a new board again?
        // Clean up other tile states
        // Update currently selected tiles state of isSelected to true.
        
        console.log("Tile Selected");
    }

    return (
        <div>
            <div id="chessboard" onClick={cleanupTilesState}>{boardTilesState}</div>
        </div>
        
    );    
}

export default Chessboard;