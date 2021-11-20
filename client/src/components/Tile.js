import "./Tile.css";
import React from "react";
import Piece from "./Piece.js"

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

// To-do:
// Convert Tile component to functional component.
class Tile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tileSelectedColor: "",
            tileColor: get_tile_color(this.props.boardcoordinates)
        };

        
    }

    // To-do:
    // Need to allow user to select piece and move it.
    // Highlight the piece to notify user selected the piece to move.
    // Do we want the user to specifically select the tile or the piece in order to
    // move the piece? Tile?
    // When selected change the tile color to yellow?
    
    // What about when the user selects a different tile? Will need to 
    // unhighlight the current tile.
    // How to clear out the selected state for the other tiles?
    // When user clicks on a tile, clear out all the tiles state first then apply
    // selected tile effect?

    // selectTile = () =>{
    //     console.log("Current selected state: " + this.props.isSelected);
    //     this.setState({isSelected: !this.state.isSelected});
    //     if (!this.state.isSelected){
    //         this.setState({tileSelectedColor: "selected-tile"});
    //     } else {
    //         this.setState({tileSelectedColor: ""});
    //     }
    // };

    selectTile = () =>{
        // Can you watch/hook props
    }

    render() {
        if (this.state.tileColor === "black") {
            return (<span className={`tile black-tile ${this.state.tileSelectedColor}`}><Piece boardcoordinates={this.props.boardcoordinates}/></span>);
         } else {
             return (<span className={`tile white-tile ${this.state.tileSelectedColor}`}><Piece boardcoordinates={this.props.boardcoordinates}/></span>);
         }
    }

    
}

export default Tile;

