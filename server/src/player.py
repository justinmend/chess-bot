class Player:
    def __init__(self) -> None:
        # Protected member
        self._color = None

    def set_player_color(self, color):
        self._color = color

    def get_player_color(self):
        return self._color