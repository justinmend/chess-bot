import * as BOARD from '../constants/board_enum';
import * as INIT from '../constants/piece_enum';

const mock_pieces_data = [];

function map_mock_pieces_data() {
    map_pawn_images();
    map_rook_images();
    map_knight_images();
    map_bishop_images();
    map_queen_images();
    map_king_images();
}
function map_pawn_images() {
    for (let colIdx = 0; colIdx < BOARD.DIMENSIONS.COL_LEN; colIdx++) {
        mock_pieces_data.push({ image: "./Chess_pdt60.png", x: colIdx, y: INIT.SETUP.BLACK_PWN_ROW_IDX });
        mock_pieces_data.push({ image: "./Chess_plt60.png", x: colIdx, y: INIT.SETUP.WHITE_PWN_ROW_IDX });
    }
}
function map_rook_images() {
    mock_pieces_data.push({ image: "./Chess_rdt60.png", x: 0, y: 7 });
    mock_pieces_data.push({ image: "./Chess_rdt60.png", x: 7, y: 7 });

    mock_pieces_data.push({ image: "./Chess_rlt60.png", x: 0, y: 0 });
    mock_pieces_data.push({ image: "./Chess_rlt60.png", x: 7, y: 0 });
}
function map_knight_images() {
    mock_pieces_data.push({ image: "./Chess_ndt60.png", x: 1, y: 7 });
    mock_pieces_data.push({ image: "./Chess_ndt60.png", x: 6, y: 7 });

    mock_pieces_data.push({ image: "./Chess_nlt60.png", x: 1, y: 0 });
    mock_pieces_data.push({ image: "./Chess_nlt60.png", x: 6, y: 0 });
}
function map_bishop_images() {
    mock_pieces_data.push({ image: "./Chess_bdt60.png", x: 2, y: 7 });
    mock_pieces_data.push({ image: "./Chess_bdt60.png", x: 5, y: 7 });

    mock_pieces_data.push({ image: "./Chess_blt60.png", x: 2, y: 0 });
    mock_pieces_data.push({ image: "./Chess_blt60.png", x: 5, y: 0 });
}
function map_queen_images() {
    mock_pieces_data.push({ image: "./Chess_qdt60.png", x: 3, y: 7 });
    mock_pieces_data.push({ image: "./Chess_qlt60.png", x: 3, y: 0 });
}
function map_king_images() {
    mock_pieces_data.push({ image: "./Chess_kdt60.png", x: 4, y: 7 });
    mock_pieces_data.push({ image: "./Chess_klt60.png", x: 4, y: 0 });
}

map_mock_pieces_data();

export function get_mock_pieces_data() {
    return mock_pieces_data;
}
