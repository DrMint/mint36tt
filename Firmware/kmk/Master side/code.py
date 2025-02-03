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

# [Combos]

from kmk.modules.combos import Combos, Chord
combos = Combos()
keyboard.modules.append(combos)

combos.combos = [
    # Chord((KC.BSPC, KC.SPC), KC.ENTER, timeout=50),
]

# [Holdtap]

from kmk.modules.holdtap import HoldTap
holdtap = HoldTap()
keyboard.modules.append(holdtap)

LCTL = KC.HT(KC.A, KC.LCTRL, prefer_hold=False)
LGUI = KC.HT(KC.S, KC.LGUI, prefer_hold=False)
LALT = KC.HT(KC.D, KC.LALT, prefer_hold=False)
LSFT = KC.HT(KC.F, KC.LSFT, prefer_hold=False)
 
RSFT = KC.HT(KC.J, KC.RSFT, prefer_hold=False)
RALT = KC.HT(KC.K, KC.RALT, prefer_hold=False)
RGUI = KC.HT(KC.L, KC.RGUI, prefer_hold=False)
RCTL = KC.HT(KC.SCLN, KC.RCTRL, prefer_hold=False)

# [Layers]

from kmk.modules.layers import Layers
keyboard.modules.append(Layers())

BSPACE = KC.LT(1, KC.BSPACE)
SPACE = KC.LT(2, KC.SPACE)

# ------------------------------------------------------------------------------

keymap = [
    
    # (0) Alpha layer
    [
        KC.Q,     KC.W,     KC.E,      KC.R,      KC.T,                                      KC.Y,     KC.U,       KC.I,     KC.O,      KC.P,

        LCTL,     LGUI,     LALT,      LSFT,      KC.G,                                      KC.H,     RSFT,       RALT,     RGUI,      RCTL,

        KC.Z,     KC.X,     KC.C,      KC.V,      KC.B,                                      KC.N,     KC.M,     KC.COMM,   KC.DOT,   KC.SLSH,

                                      KC.ESC,    BSPACE,   KC.TAB,            KC.ENTER,      SPACE,   KC.DEL
    ],


    # (1) Num layer
    [
        KC.NO,    KC.NO,    KC.NO,    KC.NO,      KC.NO,                                    KC.NO,   KC.KP_7,   KC.KP_8,   KC.KP_9,   KC.KP_MINUS,

        KC.NO,    KC.NO,    KC.NO,    KC.NO,      KC.NO,                           KC.KP_ASTERISK,   KC.KP_4,   KC.KP_5,   KC.KP_6,   KC.KP_PLUS,

        KC.NO,    KC.NO,    KC.NO,    KC.NO,      KC.NO,                              KC.KP_SLASH,   KC.KP_1,   KC.KP_2,   KC.KP_3,   KC.KP_ENTER,

                                      KC.NO,      KC.NO,    KC.NO,            KC.SPACE,   KC.KP_0,  KC.KP_DOT
    ],

    # (2) Nav layer
    [
        KC.NO,    KC.NO,    KC.UP,    KC.NO,      KC.NO,                                    KC.NO,     KC.NO,     KC.NO,     KC.NO,     KC.NO,

        KC.NO,   KC.LEFT,  KC.DOWN,  KC.RIGHT,    KC.NO,                                    KC.NO,     KC.NO,     KC.NO,     KC.NO,     KC.NO,

        KC.NO,    KC.NO,    KC.NO,    KC.NO,      KC.NO,                                    KC.NO,     KC.NO,     KC.NO,     KC.NO,     KC.NO,

                                      KC.NO,      KC.NO,    KC.NO,              KC.NO,      KC.NO,     KC.NO
    ],
]



# ------------------------------------------------------------------------------

# [Split]

split = Split(
    split_side=side,
    split_type=SplitType.UART,
    data_pin=board.TX,
    data_pin2=board.RX,
    use_pio=True
)
keyboard.modules.append(split)

indexes = [
     4,  3,  2,  1,  0,             9,  8,  7,  6,  5,
    14, 13, 12, 11, 10,            19, 18, 17, 16, 15,
    24, 23, 22, 21, 20,            29, 28, 27, 26, 25,
                32, 31, 30,    35, 34, 33
]

indexesLut = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    None,
    None,
    None,
    None,
    33,
    34,
    35,
]

keyboard.keymap = [[layer[indexes[index]] if index != None else KC.TRNS for index in indexesLut] for layer in keymap]

led = neopixel.NeoPixel(board.NEOPIXEL, 1)
led.brightness = 0.05
led[0] = (255, 0, 0)

if __name__ == "__main__":
    keyboard.go()
