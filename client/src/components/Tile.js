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

class Tile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tileSelectedColor: "",
            tileColor: get_tile_color(this.props.boardcoordinates)
        };
    }

    // Note: Old version - reference only - not working
    // selectTile = () =>{
    //     console.log("Current selected state: " + this.props.isSelected);
    //     this.setState({isSelected: !this.state.isSelected});
    //     if (!this.state.isSelected){
    //         this.setState({tileSelectedColor: "selected-tile"});
    //     } else {
    //         this.setState({tileSelectedColor: ""});
    //     }
    // };

    // Todo
    selectTile = () =>{
        // Can you watch/hook props?
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

