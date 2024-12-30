module.exports = {
  body: ({ x, y, r, from, to }) => `
    (footprint "JSP-2pin"
		(layer "F.Cu")
		(at ${x} ${-y} ${r})
		(attr smd)

		(pad "1" thru_hole circle
			(at -1.7 0 ${r})
			(size 1.524 1.524)
			(drill 0.889)
			(layers "*.Cu" "*.Mask")
			${to}
		)

		(property label_1 "-"
            (at -1.7 -2 ${r})
            (layer "F.SilkS")
            (effects (font (size 1.25 1.25) (thickness 0.25)))
        )

		(property label_1B "-"
            (at -1.7 -2 ${r})
            (layer "B.SilkS")
            (effects (font (size 1.25 1.25) (thickness 0.25)) (justify mirror))
        )

		(property label_3 "BAT-"
            (at -1.7 1.75 ${r})
            (layer "F.SilkS")
            (effects (font (size 0.5 0.5) (thickness 0.15)))
        )

		(property label_3B "BAT-"
            (at -1.7 1.75 ${r})
            (layer "B.SilkS")
            (effects (font (size 0.5 0.5) (thickness 0.15)) (justify mirror))
        )

		(pad "2" thru_hole circle
			(at 1.7 0 ${r})
			(size 1.524 1.524)
			(drill 0.889)
			(layers "*.Cu" "*.Mask")
			${from}
		)

		(property label_2 "+"
            (at 1.7 -2 ${r})
            (layer "F.SilkS")
            (effects (font (size 1.25 1.25) (thickness 0.25)))
        )

		(property label_2B "+"
            (at 1.7 -2 ${r})
            (layer "B.SilkS")
            (effects (font (size 1.25 1.25) (thickness 0.25)) (justify mirror))
        )

		(property label_4 "VBAT"
            (at 1.7 1.75 ${r})
            (layer "F.SilkS")
            (effects (font (size 0.5 0.5) (thickness 0.15)))
        )

		(property label_4B "VBAT"
            (at 1.7 1.75 ${r})
            (layer "B.SilkS")
            (effects (font (size 0.5 0.5) (thickness 0.15)) (justify mirror))
        )
    )
  `,
};
