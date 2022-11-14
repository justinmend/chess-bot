import "./Chessboard.css";
import React, { useEffect, useState } from "react";
import Tile from "./Tile";
import { v4 as uuidv4 } from "uuid";
import * as BOARD from '../constants/board_enum';
import { Coordinate } from "../constants/coordinate_interface";

function add_pieces() {
    let boardTiles = []
    
    for (let rowIdx = BOARD.DIMENSIONS.ROW_LEN-1; rowIdx >= 0; rowIdx--){
        for (let colIdx = 0; colIdx < BOARD.DIMENSIONS.COL_LEN; colIdx++){
            let boardcoordinates: Coordinate = {x: colIdx, y: rowIdx}
            let tileId: string = uuidv4();

            boardTiles.push(<Tile key={tileId} boardcoordinates={boardcoordinates} />)
        }
    }

    return boardTiles;

}

const Chessboard = () => {
    const [boardTilesState, setBoardTilesState] = useState(add_pieces());

    // Todo:
    // How to reset other tile's state if any tile's state changes?
    // useEffect(() => {
    //     const new_pieces = add_pieces()
    //     if (boardTilesState !== new_pieces){
    //         setBoardTilesState(new_pieces)
    //     }
        
    // }, [boardTilesState])

    return (
        <div>
            <div id="chessboard">{boardTilesState}</div>
        </div>
        
    );    
}

export default Chessboard;