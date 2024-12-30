module.exports = {
  body: ({ x, y, r, leftText, rightText, from, to }) => `
    (footprint "PG1350"
		(layer "F.Cu")
		(at ${x} ${-y} ${r})
		(attr smd)

		(property "name" "${leftText}"
			(at -6.7 6.3 ${r})
			(layer "F.SilkS")
			(uuid "6eb56df0-9328-4915-b49f-822d87375171")
			(effects
				(font
					(size 0.6 0.6)
					(thickness 0.125)
				)
				(justify left)
			)
		)
		(property "coord" "${rightText}"
			(at 6.7 6.3 ${r})
			(layer "F.SilkS")
			(uuid "da3ea6c3-638e-4959-b894-ca574ddaeced")
			(effects
				(font
					(size 0.6 0.6)
					(thickness 0.125)
				)
				(justify right)
			)
		)
		(property "name_b" "${leftText}"
			(at 6.7 6.3 ${r})
			(layer "B.SilkS")
			(uuid "ec3a91a1-165c-4114-94ed-c7ea7a50d7e8")
			(effects
				(font
					(size 0.6 0.6)
					(thickness 0.125)
				)
				(justify left mirror)
			)
		)
		(property "coord_b" "${rightText}"
			(at -6.7 6.3 ${r})
			(layer "B.SilkS")
			(uuid "b130710e-7c1e-41c6-8fa3-a2985fd15abe")
			(effects
				(font
					(size 0.6 0.6)
					(thickness 0.125)
				)
				(justify right mirror)
			)
		)


		(fp_line
			(start -7 -7)
			(end -7 -6)
			(stroke
				(width 0.15)
				(type solid)
			)
			(layer "B.SilkS")
			(uuid "19634a6f-76d5-4e01-868d-6407b443bfca")
		)
		(fp_line
			(start -7 -7)
			(end -6 -7)
			(stroke
				(width 0.15)
				(type solid)
			)
			(layer "B.SilkS")
			(uuid "d0c74d03-739c-47a2-ba5a-54edd453283c")
		)
		(fp_line
			(start -7 7)
			(end -7 6)
			(stroke
				(width 0.15)
				(type solid)
			)
			(layer "B.SilkS")
			(uuid "7563fdd0-d927-4b14-a122-847bb127bb50")
		)
		(fp_line
			(start -7 7)
			(end -6 7)
			(stroke
				(width 0.15)
				(type solid)
			)
			(layer "B.SilkS")
			(uuid "2d6f5b8c-4b6d-48a8-9324-7820b4ac1430")
		)
		(fp_line
			(start -2.002598 -7.663912)
			(end -1.502598 -8.163912)
			(stroke
				(width 0.15)
				(type solid)
			)
			(layer "B.SilkS")
			(uuid "867e3ea1-41fc-4256-9d8e-80ec4015095b")
		)
		(fp_line
			(start -2.002598 -4.213912)
			(end -2.002598 -7.663912)
			(stroke
				(width 0.15)
				(type solid)
			)
			(layer "B.SilkS")
			(uuid "58e5deac-46cd-4031-8e40-ed3f6afa991d")
		)
		(fp_line
			(start -2.002598 -4.163912)
			(end -1.502598 -3.663912)
			(stroke
				(width 0.15)
				(type solid)
			)
			(layer "B.SilkS")
			(uuid "e0560f1e-ab06-46fd-820c-a929adfd9120")
		)
		(fp_line
			(start -1.502598 -8.163912)
			(end 1.497402 -8.163912)
			(stroke
				(width 0.15)
				(type solid)
			)
			(layer "B.SilkS")
			(uuid "fdfa0184-01ac-49e5-8419-a42c34bf475c")
		)
		(fp_line
			(start -1.502598 -3.663912)
			(end 0.997402 -3.663912)
			(stroke
				(width 0.15)
				(type solid)
			)
			(layer "B.SilkS")
			(uuid "b7e12383-5945-4f45-ba5e-b99fc29eeb2f")
		)
		(fp_line
			(start 1.497402 -8.163912)
			(end 1.997402 -7.663912)
			(stroke
				(width 0.15)
				(type solid)
			)
			(layer "B.SilkS")
			(uuid "8cb35b56-e7c7-457a-a258-46fee7f0cd6c")
		)
		(fp_line
			(start 1.997402 -6.663912)
			(end 1.997402 -7.663912)
			(stroke
				(width 0.15)
				(type solid)
			)
			(layer "B.SilkS")
			(uuid "342cbac0-e3b4-4a6e-bdd9-1a15f33b4a93")
		)
		(fp_line
			(start 2.497402 -2.163912)
			(end 2.497402 -1.463912)
			(stroke
				(width 0.15)
				(type solid)
			)
			(layer "B.SilkS")
			(uuid "9b03b0bf-3244-4640-b793-608b06fc3a9a")
		)
		(fp_line
			(start 2.497402 -1.463912)
			(end 7.3 -1.463912)
			(stroke
				(width 0.15)
				(type solid)
			)
			(layer "B.SilkS")
			(uuid "bd076f47-9b28-4d73-83a4-2637e735f2ab")
		)
		(fp_line
			(start 6 7)
			(end 7 7)
			(stroke
				(width 0.15)
				(type solid)
			)
			(layer "B.SilkS")
			(uuid "d8efb48e-22b1-429e-89bc-3c559438e681")
		)
		(fp_line
			(start 6.997402 -6.163912)
			(end 2.497402 -6.163912)
			(stroke
				(width 0.15)
				(type solid)
			)
			(layer "B.SilkS")
			(uuid "e52fd693-9567-4b60-92a8-70bf592e697e")
		)
		(fp_line
			(start 7 -1.7)
			(end 7 -6.15)
			(stroke
				(width 0.15)
				(type solid)
			)
			(layer "B.SilkS")
			(uuid "92af4f2b-a83b-4dbd-bbd9-f9cffcd9dc1a")
		)
		(fp_line
			(start 7 -1.7)
			(end 7.3 -1.7)
			(stroke
				(width 0.15)
				(type default)
			)
			(layer "B.SilkS")
			(uuid "ac6d9bb1-4926-42f4-a125-783321f419da")
		)
		(fp_line
			(start 7 6)
			(end 7 7)
			(stroke
				(width 0.15)
				(type solid)
			)
			(layer "B.SilkS")
			(uuid "b92e7686-330a-430f-9777-6996313071db")
		)
		(fp_line
			(start 7.3 -1.7)
			(end 7.3 -1.5)
			(stroke
				(width 0.15)
				(type default)
			)
			(layer "B.SilkS")
			(uuid "77a13959-ff5f-49ae-89de-87429186bb00")
		)
		(fp_arc
			(start 0.998633 -3.664088)
			(mid 2.060648 -3.221442)
			(end 2.498609 -2.157486)
			(stroke
				(width 0.15)
				(type solid)
			)
			(layer "B.SilkS")
			(uuid "905bb5c7-99a8-4fe6-b632-df20f267cf51")
		)
		(fp_arc
			(start 2.53025 -6.165084)
			(mid 2.158492 -6.309191)
			(end 1.997528 -6.673964)
			(stroke
				(width 0.15)
				(type solid)
			)
			(layer "B.SilkS")
			(uuid "e493e899-4393-4413-b729-478197f64d3c")
		)
		(fp_line
			(start -7 -6)
			(end -7 -7)
			(stroke
				(width 0.15)
				(type solid)
			)
			(layer "F.SilkS")
			(uuid "34ac2296-8dd1-49b7-b246-b2c26dfac011")
		)
		(fp_line
			(start -7 7)
			(end -7 6)
			(stroke
				(width 0.15)
				(type solid)
			)
			(layer "F.SilkS")
			(uuid "74ceac5f-3048-4d55-a17c-f9316ae817da")
		)
		(fp_line
			(start -7 7)
			(end -6 7)
			(stroke
				(width 0.15)
				(type solid)
			)
			(layer "F.SilkS")
			(uuid "76e50add-1253-4040-a976-a58675767ef1")
		)
		(fp_line
			(start -6 -7)
			(end -7 -7)
			(stroke
				(width 0.15)
				(type solid)
			)
			(layer "F.SilkS")
			(uuid "da93a5b3-7406-4f85-8e5b-cbeda5a26db6")
		)
		(fp_line
			(start 6 7)
			(end 7 7)
			(stroke
				(width 0.15)
				(type solid)
			)
			(layer "F.SilkS")
			(uuid "a4e3fce3-928b-464d-a842-5e5321a6dc2a")
		)
		(fp_line
			(start 7 -7)
			(end 6 -7)
			(stroke
				(width 0.15)
				(type solid)
			)
			(layer "F.SilkS")
			(uuid "9c17b21e-5c76-48e2-8c1c-4571e7410325")
		)
		(fp_line
			(start 7 -7)
			(end 7 -6)
			(stroke
				(width 0.15)
				(type solid)
			)
			(layer "F.SilkS")
			(uuid "80f07629-0ccb-49f1-ad62-f843d470e39c")
		)
		(fp_line
			(start 7 6)
			(end 7 7)
			(stroke
				(width 0.15)
				(type solid)
			)
			(layer "F.SilkS")
			(uuid "91de2d81-ed55-44f1-a88e-8028eab71cc7")
		)
		(pad "" np_thru_hole circle
			(at -5.5 0)
			(size 1.7018 1.7018)
			(drill 1.7018)
			(layers "*.Cu" "*.Mask")
			(uuid "bcc51fba-8516-4cce-9cda-a61d02c7d92f")
		)
		(pad "" np_thru_hole circle
			(at 0 -5.95)
			(size 3 3)
			(drill 3)
			(layers "*.Cu" "*.Mask")
			(uuid "1e2c01a5-4560-4f9f-8dbb-7effef3f6c1f")
		)
		(pad "" np_thru_hole circle
			(at 0 -5.95)
			(size 3 3)
			(drill 3)
			(layers "*.Cu" "*.Mask")
			(uuid "cde38bd2-0dd7-4a9e-a300-933739e1490d")
		)
		(pad "" np_thru_hole circle
			(at 0 0)
			(size 3.429 3.429)
			(drill 3.429)
			(layers "*.Cu" "*.Mask")
			(uuid "6da4d344-b27f-4aa7-8e17-9d17dd4fc238")
		)
		(pad "" np_thru_hole circle
			(at 5 -3.75)
			(size 3 3)
			(drill 3)
			(layers "*.Cu" "*.Mask")
			(uuid "f30f8280-30cc-41b5-b1d2-913827bee2ec")
		)
		(pad "" np_thru_hole circle
			(at 5.5 0)
			(size 1.7018 1.7018)
			(drill 1.7018)
			(layers "*.Cu" "*.Mask")
			(uuid "904715e0-ab0e-49f2-b132-bae35a1f2153")
		)
		(pad "1" smd rect
			(at -3.275 -5.95 ${r})
			(size 2.6 2.6)
			(layers "B.Cu" "B.Paste" "B.Mask")
			${from}
			(uuid "ec1bc261-569e-45ec-8000-cf0cbd86b783")
		)
		(pad "2" smd rect
			(at 8.275 -3.75 ${r})
			(size 2.6 2.6)
			(layers "B.Cu" "B.Paste" "B.Mask")
			${to}
			(uuid "a42ff4e4-5a79-444e-9f3a-257c11ad0cac")
		)
		(model "\${KIPRJMOD}/../3d-models/PG1350-hotswap.step"
			(offset
				(xyz -5 3.75 -1.75)
			)
			(scale
				(xyz 1 1 1)
			)
			(rotate
				(xyz -90 0 180)
			)
		)
		(model "\${KIPRJMOD}/../3d-models/PG1350-switch.step"
			(offset
				(xyz 0 0 2.2)
			)
			(scale
				(xyz 1 1 1)
			)
			(rotate
				(xyz 0 0 180)
			)
		)
	)`,
};
