import board
from kmk.kmk_keyboard import KMKKeyboard
from kmk.keys import KC
from kmk.scanners import DiodeOrientation
from kmk.modules.split import Split, SplitSide, SplitType
from storage import getmount
import neopixel

print("Starting Mint36tt")

side = SplitSide.LEFT if str(getmount('/').label)[-1] == "L" else SplitSide.RIGHT

print("Board pins:", dir(board))
print("Side:", "RIGHT" if side == SplitSide.RIGHT else "LEFT")

keyboard = KMKKeyboard()
keyboard.col_pins = (board.D0, board.D1, board.D2, board.D3, board.D4)
keyboard.row_pins = (board.D8, board.D9, board.D10, board.D5)
keyboard.diode_orientation = DiodeOrientation.COL2ROW

split = Split(
    split_side=side,
    split_type=SplitType.UART,
    data_pin=board.TX,
    data_pin2=board.RX,
    use_pio=True
)
keyboard.modules.append(split)

if __name__ == "__main__":
    keyboard.go()
