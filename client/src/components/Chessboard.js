import "./Chessboard.css";
import React from "react";
import Tile from "./Tile.js";
import { v4 as uuidv4 } from "uuid";

const BOARD_COL_LEN = 8, BOARD_ROW_LEN = 8

//To-do:
// Need to add a way to clean up other tile instances' selected state when
// a specific tile is selected.
// Will race condition be a problem if I clear out all the tile instances' state, then apply the
// selected state effect to a specific tile? Which one will be executed first?
// Can you call a parent function from a child component
class Chessboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { board: []};
        this.addBoardTiles();
        this.tileElement = React.createRef();
    }

    addBoardTiles = () => {
        for (let rowIdx = BOARD_ROW_LEN-1; rowIdx >= 0; rowIdx--){
            for (let colIdx = 0; colIdx < BOARD_COL_LEN; colIdx++){
                let boardcoordinates = {x: colIdx, y: rowIdx}
                let tileId = uuidv4();
                this.state.board.push(
                    <Tile key={tileId}  ref={this.tileElement}  boardcoordinates={boardcoordinates} />
                )
            }
        }
    };

    handleBoardClick = () => {
        console.log("Clicking tile!");
        this.tileElement.current.clearTileState();
    };

    render() {
        return (
            <div>
                <div onClick={this.handleBoardClick} id="chessboard" >{this.state.board}</div>
            </div>
            
        );
    }

    
}

export default Chessboard;