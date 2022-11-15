import "./Chessboard.css";
import React, { useEffect, useState } from "react";
import Tile from "./Tile";
import { v4 as uuidv4 } from "uuid";
import * as BOARD from '../constants/board_enum';
import { Coordinate } from "../constants/coordinate_interface";

// function add_pieces() {
//     let boardTiles = []
    
//     for (let rowIdx = BOARD.DIMENSIONS.ROW_LEN-1; rowIdx >= 0; rowIdx--){
//         for (let colIdx = 0; colIdx < BOARD.DIMENSIONS.COL_LEN; colIdx++){
//             let boardcoordinates: Coordinate = {x: colIdx, y: rowIdx}
//             let tileId: string = uuidv4();

//             boardTiles.push(<Tile key={tileId} boardcoordinates={boardcoordinates} />)
//         }
//     }

//     return boardTiles;

// }

const Chessboard = () => {
    const [boardTilesState, setBoardTilesState] = useState<any>(null);
    const [activeTileKey, setActiveTileKey] = useState<string>("")

    // Todo:
    // Only want to allow a single tile to be highlighted/selected.
    // tile activate state currently not working properly.
    // activeTileKey state not getting set to the selected tile's tileKey?
    useEffect(() => {
        let boardTiles = []
        
        for (let rowIdx = BOARD.DIMENSIONS.ROW_LEN-1; rowIdx >= 0; rowIdx--){
            for (let colIdx = 0; colIdx < BOARD.DIMENSIONS.COL_LEN; colIdx++){
                let boardcoordinates: Coordinate = {x: colIdx, y: rowIdx}
                let tileId: string = uuidv4();
    
                boardTiles.push(<Tile key={tileId} tileKey={tileId} isActive={activeTileKey === tileId} onShow={(tileKey: string) => setActiveTileKey(tileKey)} boardcoordinates={boardcoordinates} />)
            }
        }
        setBoardTilesState(boardTiles);
    }, [])

    return (
        <div>
            <div id="chessboard">{boardTilesState}</div>
        </div>
        
    );    
}

export default Chessboard;