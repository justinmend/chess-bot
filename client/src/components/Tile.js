import "./Tile.css";
import React from "react";

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

function get_tile_selected_color(isSelected){
    if (isSelected === true) {
        return "selected-tile"
    } else {
        return ""
    }
}

class Tile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tileSelectedColor: get_tile_selected_color(this.props.isSelected),
            tileColor: get_tile_color(this.props.boardcoordinates),
        };
    }

    render() {
        return (
            <span className={`tile ${this.state.tileColor}-tile ${this.state.tileSelectedColor}`}>
                {this.props.children}
            </span>
            );
    }
}

export default Tile;

