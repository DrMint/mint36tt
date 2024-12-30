const shift = 1;
const labelShift = 1;

module.exports = {
  body: ({
    x,
    y,
    r,
    BATM,
    BATP,
    P1,
    P2,
    P3,
    P4,
    P5,
    P6,
    P7,
    P8,
    P9,
    P10,
    P11,
    VCC,
    GND,
    VUSB,
    RST,
    CLK,
    DIO,
  }) => `
(module "XIAO-nRF52840"
	(layer "F.Cu")
	
    (at ${x} ${-y} ${r})

	(attr through_hole)

	(fp_line
		(start -8.89 8.509)
		(end -8.89 -8.636)
		(stroke
			(width 0.15)
			(type solid)
		)
		(layer "F.SilkS")
	)
	(fp_line
		(start -6.985 10.414)
		(end 6.985 10.414)
		(stroke
			(width 0.15)
			(type solid)
		)
		(layer "F.SilkS")
	)
	(fp_line
		(start -4.495 -10.541)
		(end -4.491272 -11.551272)
		(stroke
			(width 0.15)
			(type solid)
		)
		(layer "F.SilkS")
	)
	(fp_line
		(start -3.991272 -12.051)
		(end 4.004 -12.051)
		(stroke
			(width 0.15)
			(type solid)
		)
		(layer "F.SilkS")
	)
	(fp_line
		(start 4.504 -11.551)
		(end 4.504 -10.541)
		(stroke
			(width 0.15)
			(type solid)
		)
		(layer "F.SilkS")
	)
	(fp_line
		(start 6.985 -10.541)
		(end -6.985 -10.541)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "F.SilkS")
	)
	(fp_line
		(start 6.985 -10.541)
		(end -6.985 -10.541)
		(stroke
			(width 0.15)
			(type solid)
		)
		(layer "F.SilkS")
	)
	(fp_line
		(start 8.89 8.509)
		(end 8.89 -8.636)
		(stroke
			(width 0.15)
			(type solid)
		)
		(layer "F.SilkS")
	)
	(fp_arc
		(start -8.89 -8.636)
		(mid -8.332038 -9.983038)
		(end -6.985 -10.541)
		(stroke
			(width 0.15)
			(type solid)
		)
		(layer "F.SilkS")
	)
	(fp_arc
		(start -6.985 10.414)
		(mid -8.332038 9.856038)
		(end -8.89 8.509)
		(stroke
			(width 0.15)
			(type solid)
		)
		(layer "F.SilkS")
	)
	(fp_arc
		(start -4.491272 -11.551272)
		(mid -4.344728 -11.90464)
		(end -3.991272 -12.051)
		(stroke
			(width 0.15)
			(type default)
		)
		(layer "F.SilkS")
	)
	(fp_arc
		(start 4.004 -12.051)
		(mid 4.357524 -11.904524)
		(end 4.504 -11.551)
		(stroke
			(width 0.15)
			(type default)
		)
		(layer "F.SilkS")
	)
	(fp_arc
		(start 6.985 -10.541)
		(mid 8.332038 -9.983038)
		(end 8.89 -8.636)
		(stroke
			(width 0.15)
			(type solid)
		)
		(layer "F.SilkS")
	)
	(fp_arc
		(start 8.89 8.509)
		(mid 8.332038 9.856038)
		(end 6.985 10.414)
		(stroke
			(width 0.15)
			(type solid)
		)
		(layer "F.SilkS")
	)
	(pad "1" thru_hole circle
		(at -7.62 -7.62 180)
		(size 1.524 1.524)
		(drill 0.889)
		(layers "*.Cu" "*.Mask")
		(remove_unused_layers no)
		(net ${P1.net} "${P1.name}")
	)
	(pad "2" thru_hole circle
		(at -7.62 -5.08 180)
		(size 1.524 1.524)
		(drill 0.889)
		(layers "*.Cu" "*.Mask")
		(remove_unused_layers no)
		(net ${P2.net} "${P2.name}")
	)
	(pad "3" thru_hole circle
		(at -7.62 -2.54 180)
		(size 1.524 1.524)
		(drill 0.889)
		(layers "*.Cu" "*.Mask")
		(remove_unused_layers no)
		(net ${P3.net} "${P3.name}")
	)
	(pad "4" thru_hole circle
		(at -7.62 0 180)
		(size 1.524 1.524)
		(drill 0.889)
		(layers "*.Cu" "*.Mask")
		(remove_unused_layers no)
		(net ${P4.net} "${P4.name}")
	)
	(pad "5" thru_hole circle
		(at -7.62 2.54 180)
		(size 1.524 1.524)
		(drill 0.889)
		(layers "*.Cu" "*.Mask")
		(remove_unused_layers no)
		(net ${P5.net} "${P5.name}")
	)
	(pad "6" thru_hole circle
		(at -7.62 5.08 180)
		(size 1.524 1.524)
		(drill 0.889)
		(layers "*.Cu" "*.Mask")
		(remove_unused_layers no)
		(net ${P6.net} "${P6.name}")
	)
	(pad "7" thru_hole circle
		(at -7.62 7.62 180)
		(size 1.524 1.524)
		(drill 0.889)
		(layers "*.Cu" "*.Mask")
		(remove_unused_layers no)
		(net ${P7.net} "${P7.name}")
	)
	(pad "8" thru_hole circle
		(at 7.62 7.62)
		(size 1.524 1.524)
		(drill 0.889)
		(layers "*.Cu" "*.Mask")
		(remove_unused_layers no)
		(net ${P8.net} "${P8.name}")
	)
	(pad "9" thru_hole circle
		(at 7.62 5.08)
		(size 1.524 1.524)
		(drill 0.889)
		(layers "*.Cu" "*.Mask")
		(remove_unused_layers no)
		(net ${P9.net} "${P9.name}")
	)
	(pad "10" thru_hole circle
		(at 7.62 2.54)
		(size 1.524 1.524)
		(drill 0.889)
		(layers "*.Cu" "*.Mask")
		(remove_unused_layers no)
		(net ${P10.net} "${P10.name}")
	)
	(pad "11" thru_hole circle
		(at 7.62 0)
		(size 1.524 1.524)
		(drill 0.889)
		(layers "*.Cu" "*.Mask")
		(remove_unused_layers no)
		(net ${P11.net} "${P11.name}")
	)
	(pad "12" thru_hole circle
		(at 7.62 -2.54)
		(size 1.524 1.524)
		(drill 0.889)
		(layers "*.Cu" "*.Mask")
		(remove_unused_layers no)
		(net ${VCC.net} "${VCC.name}")
	)
	(pad "13" thru_hole circle
		(at 7.62 -5.08)
		(size 1.524 1.524)
		(drill 0.889)
		(layers "*.Cu" "*.Mask")
		(remove_unused_layers no)
		(net ${GND.net} "${GND.name}")
	)
	(pad "14" thru_hole circle
		(at 7.62 -7.62)
		(size 1.524 1.524)
		(drill 0.889)
		(layers "*.Cu" "*.Mask")
		(remove_unused_layers no)
		(net ${VUSB.net} "${VUSB.name}")
	)
	(pad "15" thru_hole circle
		(at -1.27 -8.572 90)
		(size 1.397 1.397)
		(drill 1.016)
		(layers *.Cu *.SilkS *.Mask)
		(net ${DIO.net} "${DIO.name}")
	)
	(pad "16" thru_hole circle
		(at 1.27 -8.572 90)
		(size 1.397 1.397)
		(drill 1.016)
		(layers *.Cu *.SilkS *.Mask)
		(net ${CLK.net} "${CLK.name}")
	)
	(pad "17" thru_hole circle
		(at -1.27 -6.032 90)
		(size 1.397 1.397)
		(drill 1.016)
		(layers *.Cu *.SilkS *.Mask)
		(net ${RST.net} "${RST.name}")
	)
	(pad "18" thru_hole circle
		(at 1.27 -6.032 90)
		(size 1.397 1.397)
		(drill 1.016)
		(layers *.Cu *.SilkS *.Mask)
		(net ${GND.net} "${GND.name}")
	)
	(pad "19" thru_hole circle
		(at -4.445 -0.317 180)
		(size 1.397 1.397)
		(drill 1.016)
		(layers *.Cu *.SilkS *.Mask)
		(net ${BATP.net} "${BATP.name}")
	)
	(pad "20" thru_hole circle
		(at -4.445 -2.222 180)
		(size 1.397 1.397)
		(drill 1.016)
		(layers *.Cu *.SilkS *.Mask)
		(net ${BATM.net} "${BATM.name}")
	)

	(fp_line 
		(start -0.8382 -8.826)
		(end 0.8382 -8.826)
		(layer "Edge.Cuts")
		(width 0.12)
	)
	(fp_line 
		(start -0.8382 -5.778)
		(end 0.8382 -5.778)
		(layer "Edge.Cuts")
		(width 0.12)
	)
	(fp_line 
		(start 1.524 -6.4638)
		(end 1.524 -8.1402)
		(layer "Edge.Cuts")
		(width 0.12)
	)
	(fp_line 
		(start -4.0132 -2.476)
		(end -2.413 -2.476)
		(layer "Edge.Cuts")
		(width 0.12)
	)
	(fp_line 
		(start -2.413 -0.063)
		(end -4.0132 -0.063)
		(layer "Edge.Cuts")
		(width 0.12)
	)
	(fp_line 
		(start -4.699 -0.7488)
		(end -4.699 -1.7902)
		(layer "Edge.Cuts")
		(width 0.12)
	)
	(fp_line 
		(start -2.032 -2.095)
		(end -2.032 -0.444)
		(layer "Edge.Cuts")
		(width 0.12)
	)
	(fp_line 
		(start -1.524 -6.4638)
		(end -1.524 -8.1402)
		(layer "Edge.Cuts")
		(width 0.12)
	)

	(fp_arc
		(start -4.699 -0.7488)
		(mid -4.095391 -0.666609)
		(end -4.0132 -0.063)
		(width 0.12)
		(layer "Edge.Cuts")
	)
	(fp_arc
		(start -4.0132 -2.476)
		(mid -4.095391 -1.872391)
		(end -4.699 -1.7902)
		(width 0.12)
		(layer "Edge.Cuts")
	)
	(fp_arc
		(start -2.413 -2.476)
		(mid -2.143592 -2.364408)
		(end -2.032 -2.095)
		(width 0.12)
		(layer "Edge.Cuts")
	)
	(fp_arc
		(start -2.032 -0.444)
		(mid -2.143592 -0.174592)
		(end -2.413 -0.063)
		(width 0.12)
		(layer "Edge.Cuts")
	)
	(fp_arc
		(start -1.524 -6.4638)
		(mid -0.920391 -6.381609)
		(end -0.8382 -5.778)
		(width 0.12)
		(layer "Edge.Cuts")
	)
	(fp_arc
		(start -0.8382 -8.826)
		(mid -0.920391 -8.222391)
		(end -1.524 -8.1402)
		(width 0.12)
		(layer "Edge.Cuts")
	)
	(fp_arc
		(start 0.8382 -5.778)
		(mid 0.920391 -6.381609)
		(end 1.524 -6.4638)
		(width 0.12)
		(layer "Edge.Cuts")
	)
	(fp_arc
		(start 1.524 -8.1402)
		(mid 0.920391 -8.222391)
		(end 0.8382 -8.826)
		(width 0.12)
		(layer "Edge.Cuts")
	)

	(property label_1 "${P1.label}"
		(at ${-7.62 + shift} -7.62)
		(layer "B.SilkS")
		(effects (font (size 0.5 0.5) (thickness 0.15)) (justify right mirror))
	)
	(property label_2 "${P2.label}"
		(at ${-7.62 + shift} -5.08)
		(layer "B.SilkS")
		(effects (font (size 0.5 0.5) (thickness 0.15)) (justify right mirror))
	)
	(property label_3 "${P3.label}"
		(at ${-7.62 + shift} -2.54)
		(layer "B.SilkS")
		(effects (font (size 0.5 0.5) (thickness 0.15)) (justify right mirror))
	)
	(property label_4 "${P4.label}"
		(at ${-7.62 + shift} 0)
		(layer "B.SilkS")
		(effects (font (size 0.5 0.5) (thickness 0.15)) (justify right mirror))
	)
	(property label_5 "${P5.label}"
		(at ${-7.62 + shift} 2.54)
		(layer "B.SilkS")
		(effects (font (size 0.5 0.5) (thickness 0.15)) (justify right mirror))
	)
	(property label_6 "${P6.label}"
		(at ${-7.62 + shift} 5.08)
		(layer "B.SilkS")
		(effects (font (size 0.5 0.5) (thickness 0.15)) (justify right mirror))
	)
	(property label_7 "${P7.label}"
		(at ${-7.62 + shift} 7.62)
		(layer "B.SilkS")
		(effects (font (size 0.5 0.5) (thickness 0.15)) (justify right mirror))
	)
	(property label_8 "${P8.label}"
		(at ${7.62 - shift} 7.62)
		(layer "B.SilkS")
		(effects (font (size 0.5 0.5) (thickness 0.15)) (justify left mirror))
	)
	(property label_9 "${P9.label}"
		(at ${7.62 - shift} 5.08)
		(layer "B.SilkS")
		(effects (font (size 0.5 0.5) (thickness 0.15)) (justify left mirror))
	)
	(property label_10 "${P10.label}"
		(at ${7.62 - shift} 2.54)
		(layer "B.SilkS")
		(effects (font (size 0.5 0.5) (thickness 0.15)) (justify left mirror))
	)
	(property label_11 "${P11.label}"
		(at ${7.62 - shift} 0)
		(layer "B.SilkS")
		(effects (font (size 0.5 0.5) (thickness 0.15)) (justify left mirror))
	)
	(property label_12 "${VCC.label}"
		(at ${7.62 - shift} -2.54)
		(layer "B.SilkS")
		(effects (font (size 0.5 0.5) (thickness 0.15)) (justify left mirror))
	)
	(property label_13 "${GND.label}"
		(at ${7.62 - shift} -5.08)
		(layer "B.SilkS")
		(effects (font (size 0.5 0.5) (thickness 0.15)) (justify left mirror))
	)
	(property label_14 "${VUSB.label}"
		(at ${7.62 - shift} -7.62)
		(layer "B.SilkS")
		(effects (font (size 0.5 0.5) (thickness 0.15)) (justify left mirror))
	)

	(property label_15 "${BATM.label}"
		(at ${-4.8 + shift} ${-2.54 - shift / 2})
		(layer "B.SilkS")
		(effects (font (size 0.5 0.5) (thickness 0.15)) (justify right mirror))
	)
	(property label_16 "${BATP.label}"
		(at ${-4.8 + shift} ${0 + shift / 2})
		(layer "B.SilkS")
		(effects (font (size 0.5 0.5) (thickness 0.15)) (justify right mirror))
	)

	(property label_dio "${DIO.label}"
		(at ${-1.27 - shift} -8.572)
		(layer "B.SilkS")
		(effects (font (size 0.5 0.5) (thickness 0.15)) (justify left mirror))
	)
	(property label_rst "${RST.label}"
		(at ${-1.27 - shift} -6.032)
		(layer "B.SilkS")
		(effects (font (size 0.5 0.5) (thickness 0.15)) (justify left mirror))
	)

	(property label_clk "${CLK.label}"
		(at ${1.27 + shift} -8.572)
		(layer "B.SilkS")
		(effects (font (size 0.5 0.5) (thickness 0.15)) (justify right mirror))
	)
	(property label_gnd "${GND.label}"
		(at ${1.27 + shift} -6.032)
		(layer "B.SilkS")
		(effects (font (size 0.5 0.5) (thickness 0.15)) (justify right mirror))
	)

	(property label_front "XIAO"
		(at 0 ${3 + labelShift})
		(layer "F.SilkS")
		(effects (font (size 1.25 1.25) (thickness 0.25)))
	)
	(property label_front2 "nRF52840"
		(at 0 ${5 + labelShift})
		(layer "F.SilkS")
		(effects (font (size 0.75 0.75) (thickness 0.15)))
	)
	(property label_front3 "or"
		(at 0 ${5.9 + labelShift})
		(layer "F.SilkS")
		(effects (font (size 0.5 0.5) (thickness 0.1)))
	)
	(property label_front4 "RP2040"
		(at 0 ${7 + labelShift})
		(layer "F.SilkS")
		(effects (font (size 0.8 0.8) (thickness 0.15)))
	)


	(model "\${KIPRJMOD}/../3d-models/XIAO-nRF52840.step"
        (offset
            (xyz -3 38.5 7.4)
        )
        (scale
            (xyz 1 1 1)
        )
        (rotate
            (xyz 90 180 0)
        )
    )
)`,
};
