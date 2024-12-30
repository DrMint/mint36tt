const shift = [0, 3.875]

module.exports = {
  body: ({x, y, r, pin1, pin2, pin3, GND}) =>`
        (module "MSK12C02" (layer "F.Cu") (tedit 6238BB47)
            (at ${x} ${-y} ${r})
            (attr smd)

            (fp_line (start ${2.76 + shift[0]} ${6.46 - shift[1]}) (end ${2.76 + shift[0]} ${7.25 - shift[1]}) (layer "F.SilkS") (width 0.15))
            (fp_line (start ${-0.2 + shift[0]} ${7.25 - shift[1]}) (end ${-0.2 + shift[0]} ${0.5 - shift[1]}) (layer "F.SilkS") (width 0.15))
            (fp_line (start ${2.77 + shift[0]} ${1.03 - shift[1]}) (end ${2.77 + shift[0]} ${0.5 - shift[1]}) (layer "F.SilkS") (width 0.15))
            (fp_line (start ${2.77 + shift[0]} ${4.96 - shift[1]}) (end ${2.77 + shift[0]} ${5.54 - shift[1]}) (layer "F.SilkS") (width 0.15))
            (fp_line (start ${2.77 + shift[0]} ${1.99 - shift[1]}) (end ${2.77 + shift[0]} ${4.03 - shift[1]}) (layer "F.SilkS") (width 0.15))
            
            (pad "" np_thru_hole circle (at ${1.35 + shift[0]} ${5.25 - shift[1]}) (size 0.9 0.9) (drill 0.9) (layers *.Cu *.Mask))
            (pad "" np_thru_hole circle (at ${1.4 + shift[0]} ${2.25 - shift[1]}) (size 0.9 0.9) (drill 0.9) (layers *.Cu *.Mask))
            (pad "1" smd rect (at ${3.2 + shift[0]} ${1.5 - shift[1]} ${r + 90}) (size 0.7 1) (layers "F.Cu" "F.Paste" "F.Mask") ${pin1})
            (pad "2" smd rect (at ${3.2 + shift[0]} ${4.5 - shift[1]} ${r + 90}) (size 0.7 1) (layers "F.Cu" "F.Paste" "F.Mask") ${pin2})
            (pad "3" smd rect (at ${3.2 + shift[0]} ${6 - shift[1]} ${r + 90}) (size 0.7 1) (layers "F.Cu" "F.Paste" "F.Mask") ${pin3})
            (pad "GND" smd rect (at ${1.3 + shift[0]} ${7.85 - shift[1]} ${r}) (size 2.8 1) (layers "F.Cu" "F.Paste" "F.Mask") ${GND})
            (pad "GND" smd rect (at ${1.3 + shift[0]} ${-0.1 - shift[1]} ${r}) (size 2.8 1) (layers "F.Cu" "F.Paste" "F.Mask") ${GND})

            (property label_1 "MSK12C02"
                (at 0.4 0)
                (layer "F.SilkS")
                (effects (font (size 0.6 0.6) (thickness 0.15)))
            )

            (property label_2 "BAT+"
                (at ${3.2 + shift[0] + 0.75} ${4.5 - shift[1]} 90)
                (layer "F.SilkS")
                (effects (font (size 0.4 0.4) (thickness 0.15)) (justify right))
            )

            (property label_3 "VBAT"
                (at ${3.2 + shift[0] + 0.75} ${1.5 - shift[1]} 90)
                (layer "F.SilkS")
                (effects (font (size 0.4 0.4) (thickness 0.15)) (justify right))
            )

            (property label_4 "GND"
                (at ${1.3 + shift[0]} ${9 - shift[1]} 90)
                (layer "F.SilkS")
                (effects (font (size 0.5 0.5) (thickness 0.15)))
            )

            (property label_5 "GND"
                (at ${1.3 + shift[0]} ${-1.25 - shift[1]} 90)
                (layer "F.SilkS")
                (effects (font (size 0.5 0.5) (thickness 0.15)))
            )

            (model "\${KIPRJMOD}/../3d-models/MSK12C02.step"
                (offset (xyz ${1.3 - shift[0]} ${-3.85 + shift[1]} 0))
                (scale (xyz 1 1 1))
                (rotate (xyz -90 0 90))
            )
        )`
};
