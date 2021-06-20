import "./Piece.css";
import React from "react";

const BOARD_COL_LEN = 8, BOARD_ROW_LEN = 8
const BLACK_PWN_ROW_IDX = 6
const WHITE_PWN_ROW_IDX = 1

const pieces = []

function map_piece_images(){
    map_pawn_images()
    map_rook_images()
    map_knight_images()
    map_bishop_images()
    map_queen_images()
    map_king_images()
}

function map_pawn_images(){
    for (let colIdx = 0;  colIdx < BOARD_COL_LEN; colIdx++) {
        pieces.push({image: "./Chess_pdt60.png", x: colIdx, y: BLACK_PWN_ROW_IDX})
        pieces.push({image: "./Chess_plt60.png", x: colIdx, y: WHITE_PWN_ROW_IDX})
    }
}

function map_rook_images(){
    pieces.push({image: "./Chess_rdt60.png", x: 0, y: 7})
    pieces.push({image: "./Chess_rdt60.png", x: 7, y: 7})

    pieces.push({image: "./Chess_rlt60.png", x: 0, y: 0})
    pieces.push({image: "./Chess_rlt60.png", x: 7, y: 0})
}

function map_knight_images() {
    pieces.push({image: "./Chess_ndt60.png", x: 1, y: 7})
    pieces.push({image: "./Chess_ndt60.png", x: 6, y: 7})

    pieces.push({image: "./Chess_nlt60.png", x: 1, y: 0})
    pieces.push({image: "./Chess_nlt60.png", x: 6, y: 0})
}

function map_bishop_images() {
    pieces.push({image: "./Chess_bdt60.png", x: 2, y: 7})
    pieces.push({image: "./Chess_bdt60.png", x: 5, y: 7})

    pieces.push({image: "./Chess_blt60.png", x: 2, y: 0})
    pieces.push({image: "./Chess_blt60.png", x: 5, y: 0})
}

function map_queen_images() {
    pieces.push({image: "./Chess_qdt60.png", x: 3, y: 7})
    pieces.push({image: "./Chess_qlt60.png", x: 3, y: 0})
}

function map_king_images() {
    pieces.push({image: "./Chess_kdt60.png", x: 4, y: 7})
    pieces.push({image: "./Chess_klt60.png", x: 4, y: 0})
}

map_piece_images();

class Piece extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            image: null
        };
        this.addPieceImages();
    }

    addPieceImages = () => {
        pieces.forEach((piece) => {
            if (piece.x === this.props.boardcoordinates.x && piece.y === this.props.boardcoordinates.y){
                this.state.image = piece.image;
            }
        });
    }


    render(){
        return (<img className="chess-piece" src={this.state.image} alt=""></img>);
    }
    
    
}

export default Piece;

