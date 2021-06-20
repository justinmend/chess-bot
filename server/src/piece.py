from abc import abstractmethod

class Piece:
    def __init__(self, color) -> None:
        self._color = color

    @abstractmethod
    def test_simple_move(self):
        pass

class Pawn(Piece):
    def __init__(self, color) -> None:
        super().__init__(color)
        self.name = "Pawn"

    def test_simple_move(self):
        print("I am a Pawn!")

class Rook(Piece):
    def __init__(self, color) -> None:
        super().__init__(color)
        self.name = "Rook"

    def test_simple_move(self):
        print("I am a Rook!")

class Knight(Piece):
    def __init__(self, color) -> None:
        super().__init__(color)
        self.name = "Knight"

    def test_simple_move(self):
        print("I am a Knight!")

class Bishop(Piece):
    def __init__(self, color) -> None:
        super().__init__(color)
        self.name = "Bishop"

    def test_simple_move(self):
        print("I am a Bishop!")

class Queen(Piece):
    def __init__(self, color) -> None:
        super().__init__(color)
        self.name = "Queen"

    def test_simple_move(self):
        print("I am a Queen!")

class King(Piece):
    def __init__(self, color) -> None:
        super().__init__(color)
        self.name = "King"

    def test_simple_move(self):
        print("I am a King!")