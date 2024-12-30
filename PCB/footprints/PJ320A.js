module.exports = {
  body: ({x, y, r, RX, GND, VCC, TX}) => {
    return `

      (module "MJ-4PP-9_1side" (layer "F.Cu") (tedit 5F8C8304)
        (at ${x} ${-y} ${r})

        (attr through_hole)
        
        (fp_text user "PJ320A"
          (at -1.5 5 90)
          (layer "F.SilkS")
          (effects
            (font (size 1 1)
            (thickness 0.20))
          )
        )

        (fp_text user "TRRS"
          (at 0 5 90)
          (layer "F.SilkS")
          (effects
            (font (size 0.8 0.8)
            (thickness 0.15))
          )
        )
            
        (fp_line (start 2.9 9.17) (end 2.9 7.4) (layer "F.SilkS") (width 0.15))
        (fp_line (start -2.9 0.15) (end 2.9 0.15) (layer "F.SilkS") (width 0.15))
        (fp_line (start -2.91 10.67) (end -2.91 0.15) (layer "F.SilkS") (width 0.15))
        (fp_line (start 2.9 0.15) (end 2.9 2.23) (layer "F.SilkS") (width 0.15))
        (fp_line (start 2.9 11.49) (end 2.9 11.9) (layer "F.SilkS") (width 0.15))
        (fp_line (start 2.9 4.34) (end 2.9 5.23) (layer "F.SilkS") (width 0.15))
        (fp_line (start 2.9 11.9) (end -1 11.9) (layer "F.SilkS") (width 0.15))
        
        (pad "" np_thru_hole circle
          (at 0 1.5)
          (size 1.2 1.2)
          (drill 1.2)
          (layers *.Cu *.Mask)
        )

        (pad "" np_thru_hole circle
          (at 0 8.5)
          (size 1.2 1.2)
          (drill 1.2)
          (layers *.Cu *.Mask)
        )
        
        (pad "A" thru_hole oval
          (at -2.1 11.8)
          (size 1.7 2.5)
          (drill oval 1 1.5)
          (layers *.Cu "*.Mask")
          (clearance 0.15)
          ${TX}
        )

        (property label_1 "TX"
            (at -2.1 13.8)
            (layer "F.SilkS")
            (effects (font (size 0.5 0.5) (thickness 0.15)))
        )

        (property label_1B "TX"
            (at -2.1 13.8)
            (layer "B.SilkS")
            (effects (font (size 0.5 0.5) (thickness 0.15)) (justify mirror))
        )

        (pad "B" thru_hole oval
          (at 2.1 3.3)
          (size 1.7 2.5)
          (drill oval 1 1.5)
          (layers *.Cu "*.Mask")
          ${RX}
        )

        (property label_2 "RX"
            (at 3.3 3.3)
            (layer "F.SilkS")
            (effects (font (size 0.5 0.5) (thickness 0.15)) (justify left))
        )

        (property label_2B "RX"
            (at 3.3 3.3)
            (layer "B.SilkS")
            (effects (font (size 0.5 0.5) (thickness 0.15)) (justify right mirror))
        )

        (pad "C" thru_hole oval
          (at 2.1 6.3)
          (size 1.7 2.5)
          (drill oval 1 1.5)
          (layers *.Cu "*.Mask")
          ${GND}
        )

        (property label_3 "GND"
            (at 3.3 6.3)
            (layer "F.SilkS")
            (effects (font (size 0.5 0.5) (thickness 0.15)) (justify left))
        )

        (property label_3B "GND"
            (at 3.3 6.3)
            (layer "B.SilkS")
            (effects (font (size 0.5 0.5) (thickness 0.15)) (justify right mirror))
        )

        (pad "D" thru_hole oval
          (at 2.1 10.3)
          (size 1.7 2.5)
          (drill oval 1 1.5)
          (layers *.Cu "*.Mask")
          (clearance 0.15)
          ${VCC}
        )

        (property label_4 "VCC"
            (at 3.3 10.3)
            (layer "F.SilkS")
            (effects (font (size 0.5 0.5) (thickness 0.15)) (justify left))
        )

        (property label_4B "VCC"
            (at 3.3 10.3)
            (layer "B.SilkS")
            (effects (font (size 0.5 0.5) (thickness 0.15)) (justify right mirror))
        )

        (model "\${KIPRJMOD}/../3d-models/PJ320A.step"
            (offset (xyz 0 -8.5 0))
            (scale (xyz 1 1 1))
            (rotate (xyz 0 0 0))
        )
    )`;
  },
};
