import random
from color import Color
from player import Player
from piece import Pawn, Rook, Knight, Bishop, Queen, King

class GameState:
    def __init__(self, board, player1, player2) -> None:
        self.board = board
        self.player1 = player1
        self.player2 = player2

        self.set_player_colors()
        # White always goes first.
        self._game_color = Color.PLAYER_WHITE

    def set_player_colors(self):
        # Randomly select who goes first between human and bot.
        coin = random.uniform(0,1)

        if coin:
            self.player1.set_player_color(Color.PLAYER_WHITE)
            self.player2.set_player_color(Color.PLAYER_BLACK)
        else:
            self.player1.set_player_color(Color.PLAYER_BLACK)
            self.player2.set_player_color(Color.PLAYER_WHITE)

    def update_turn(self):
        # Change game color when players' switch turns
        if self._game_color == Color.PLAYER_WHITE:
            self._game_color = Color.PLAYER_BLACK
        else:
            self._game_color = Color.PLAYER_WHITE

class ChessGame:
    BOARD_ROW_SIZE = 8
    BOARD_COL_SIZE = 8

    def __init__(self) -> None:
        self.board = []
        self.create_board()
        self.create_pieces()
        self.humanPlayer = Player()
        self.robotPlayer = Player()
        self.state = GameState(self.board, self.humanPlayer, self.robotPlayer)

    def create_board(self):
        # Create 2d board
        self.board = [[0 for row in range(self.BOARD_ROW_SIZE)] for col in range(self.BOARD_COL_SIZE)]

    def create_pieces(self):
        # Are the pieces tied to the player? No?
        self.add_white_pieces(Color.PIECE_WHITE)
        self.add_black_pieces(Color.PIECE_BLACK)
    
    def add_white_pieces(self, color):
        WHT_PAWNS_ROW = 6
        WHT_ROOKS_ROW = WHT_KNIGHTS_ROW = WHT_BISHOPS_ROW = WHT_QUEEN_ROW = WHT_KING_ROW = 7

        self.add_pawns(color, WHT_PAWNS_ROW)
        self.add_rooks(color, WHT_ROOKS_ROW)
        self.add_knights(color, WHT_KNIGHTS_ROW)
        self.add_bishops(color, WHT_BISHOPS_ROW)
        self.add_queen(color, WHT_QUEEN_ROW)
        self.add_king(color, WHT_KING_ROW)

    def add_black_pieces(self, color):
        BLK_PAWNS_ROW = 1
        BLK_ROOKS_ROW = BLK_KNIGHTS_ROW = BLK_BISHOPS_ROW = BLK_QUEEN_ROW = BLK_KING_ROW = 0

        self.add_pawns(color, BLK_PAWNS_ROW)
        self.add_rooks(color, BLK_ROOKS_ROW)
        self.add_knights(color, BLK_KNIGHTS_ROW)
        self.add_bishops(color, BLK_BISHOPS_ROW)
        self.add_queen(color, BLK_QUEEN_ROW)
        self.add_king(color, BLK_KING_ROW)

    def add_pawns(self, color, row_idx):
        for col in range(self.BOARD_COL_SIZE):
            self.board[row_idx][col] = Pawn(color)

    def add_rooks(self, color, row_idx):
        self.board[row_idx][0] = Rook(color)
        self.board[row_idx][7] = Rook(color)

    def add_knights(self, color, row_idx):
        self.board[row_idx][1] = Knight(color)
        self.board[row_idx][6] = Knight(color)

    def add_bishops(self, color, row_idx):
        self.board[row_idx][2] = Bishop(color)
        self.board[row_idx][5] = Bishop(color)

    def add_queen(self, color, row_idx):
        self.board[row_idx][3] = Queen(color)

    def add_king(self, color, row_idx):
        self.board[row_idx][4] = King(color)
