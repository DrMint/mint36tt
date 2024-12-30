//@ts-check

import PG1350 from "./footprints/PG1350.js";
import SOD123 from "./footprints/SOD-123.js";
import XIAO from "./footprints/XIAO-nRF52840.js";
import MSK12C02 from "./footprints/MSK12C02.js";
import PJ320A from "./footprints/PJ320A.js";
import JSP2 from "./footprints/JSP-2.js";
import LiPo601818 from "./footprints/LiPo-601818.js";

import fs from "fs/promises";
import { existsSync } from "fs";

import {
  Box,
  Point,
  Polygon,
  BooleanOperations,
  Vector,
} from "@flatten-js/core";

const boardName = "Mint36tt";
const boardMaker = "Dr_Mint";
const rev = "0.2";

const base_size = 16.5;
const gap = 1.0;
const ku = base_size + gap;

const Shell_size = [111.7, 81.575];
const Shell_position = [-71.2, -53.675];
const Plate_thumb_size = [116.7, 22.875];

const Wall_thickness = 2.0;
const kerf = 0.5;

const capSize = 16.8;

const degsToRadians = (deg) => (deg ?? 0) * (Math.PI / 180);

const halfShift = [-50, -80];
const globalShift = [148, 0];

const generateKey = (
  name,
  column,
  row,
  position,
  translation = [0, 0],
  rotation = 0,
  orientation = 0
) => ({
  point: new Point(position[0], position[1])
    .translate(new Vector(translation[0], translation[1]))
    .rotate(degsToRadians(rotation))
    .translate(new Vector(halfShift[0], halfShift[1])),
  orientation: { deg: orientation, rad: degsToRadians(orientation) },
  name,
  column,
  row,
});

const nets = {
  C0: 10,
  C1: 11,
  C2: 12,
  C3: 13,
  C4: 14,
  R0: 20,
  R1: 21,
  R2: 22,
  R3: 23,
  index2_top: 1020,
  index2_home: 1021,
  index2_bottom: 1022,
  index_top: 1120,
  index_home: 1121,
  index_bottom: 1122,
  middle_top: 1220,
  middle_home: 1221,
  middle_bottom: 1222,
  ring_top: 1320,
  ring_home: 1321,
  ring_bottom: 1322,
  pinky_top: 1420,
  pinky_home: 1421,
  pinky_bottom: 1422,
  thumb_inner: 1023,
  thumb_home: 1123,
  thumb_outer: 1223,
  TX: 1,
  RX: 2,
  VCC: 3,
  RST: 4,
  BATM: 5,
  BATP: 6,
  CLK: 7,
  DIO: 8,
  GND: 9,
  VUSB: 999,
  VBAT: 998,
};

const points = [
  generateKey("index2_top", "C0", "R0", [ku, ku]),
  generateKey("index2_home", "C0", "R1", [ku, 0]),
  generateKey("index2_bottom", "C0", "R2", [ku, -ku]),

  generateKey("index_top", "C1", "R0", [0, ku]),
  generateKey("index_home", "C1", "R1", [0, 0]),
  generateKey("index_bottom", "C1", "R2", [0, -ku]),

  generateKey("middle_top", "C2", "R0", [0, ku], [-18.5, 4], 3, 3),
  generateKey("middle_home", "C2", "R1", [0, 0], [-18.5, 4], 3, 3),
  generateKey("middle_bottom", "C2", "R2", [0, -ku], [-18.5, 4], 3, 3),

  generateKey("ring_top", "C3", "R0", [0, ku], [-37.58, -2], 8, 8),
  generateKey("ring_home", "C3", "R1", [0, 0], [-37.58, -2], 8, 8),
  generateKey("ring_bottom", "C3", "R2", [0, -ku], [-37.58, -2], 8, 8),

  generateKey("pinky_top", "C4", "R0", [0, ku], [-58.79, -10.5], 18, 18),
  generateKey("pinky_home", "C4", "R1", [0, 0], [-58.79, -10.5], 18, 18),
  generateKey("pinky_bottom", "C4", "R2", [0, -ku], [-58.79, -10.5], 18, 18),

  // 89.999999 instead of 90 to avoid labels going haywire
  generateKey(
    "thumb_outer",
    "C0",
    "R3",
    [ku, -5.475],
    [ku, -35.65 - gap],
    0,
    89.999999
  ),
  generateKey(
    "thumb_home",
    "C1",
    "R3",
    [0, -3.1],
    [ku, -35.65 - gap],
    0,
    89.999999
  ),
  generateKey(
    "thumb_inner",
    "C2",
    "R3",
    [-ku, -3.1],
    [ku, -35.65 - gap],
    0,
    89.999999
  ),
];

const screws = [[36.5, 10], [36.5, -25], [-67, -49.5], [-36, 24], [-13, -30]];
const magnets = [[34, 4], [-19, -29], [-65, 1], [-65, -40]]

const cutoutsPoints = [
  generateKey("", "", "", [-ku, ku]),
  generateKey("", "", "", [-ku, 0]),
  generateKey("", "", "", [0, -ku * 2]),
  generateKey("", "", "", [ku, -ku * 2]),
  generateKey("", "", "", [ku, ku], [-37.58, -2], 8, 8),
  generateKey("", "", "", [ku, 0], [-37.58, -2], 8, 8),
  generateKey("", "", "", [ku, ku / 2], [-58.79, -10.5], 18, 18 - 5),
  generateKey("", "", "", [0, -ku * 2], [-58.79, -10.5], 18, 18),
  generateKey("", "", "", [7, 0], [ku, -35.65 - gap], 0, 45),
];

const offset = (box, offset) =>
  new Box(
    box.xmin - offset,
    box.ymin - offset,
    box.xmax + offset,
    box.ymax + offset
  );

const outlineRectangle = new Polygon(
  offset(
    new Box(
      Shell_position[0],
      Shell_position[1],
      Shell_position[0] + Shell_size[0],
      Shell_position[1] + Shell_size[1]
    ).translate(new Vector(halfShift[0], halfShift[1])),
    1 - Wall_thickness - kerf * 2
  )
);

const plateThumb = new Polygon(
  offset(
    new Box(
      Shell_position[0],
      Shell_position[1],
      Shell_position[0] + Plate_thumb_size[0],
      Shell_position[1] + Plate_thumb_size[1]
    ).translate(new Vector(halfShift[0], halfShift[1])),
    1 - Wall_thickness - kerf * 2
  )
);

let edgeCutsPolygon = outlineRectangle;
edgeCutsPolygon = BooleanOperations.unify(edgeCutsPolygon, plateThumb);
points.forEach(
  ({ point, orientation }) =>
    (edgeCutsPolygon = BooleanOperations.unify(
      edgeCutsPolygon,
      new Polygon(
        offset(new Box(point.x, point.y, point.x, point.y), capSize / 2)
      ).rotate(orientation.rad, point)
    ))
);
const edgeCuts = [...edgeCutsPolygon.edges.values()].map(({ shape }) => shape);

const outlineTopThickness = 0.15;

let outlineTopPolygon = edgeCutsPolygon.clone();
[...points, ...cutoutsPoints].forEach(
  ({ point, orientation }) =>
    (outlineTopPolygon = BooleanOperations.subtract(
      outlineTopPolygon,
      new Polygon(
        offset(
          new Box(point.x, point.y, point.x, point.y),
          capSize / 2 + 1 + outlineTopThickness / 2
        )
      ).rotate(orientation.rad, point)
    ))
);
outlineTopPolygon = BooleanOperations.subtract(
  outlineTopPolygon,
  new Polygon(
    offset(
      new Box(-9.4, -55, -9.4 + 55, -55 + 25.2),
      outlineTopThickness / 2
    ).translate(new Vector(halfShift[0], halfShift[1]))
  )
);

const outlineTop = [...outlineTopPolygon.edges.values()].map(
  ({ shape }) => shape
);

const generateHalf = (sign, suffix, netShift, halfLabel) => `
  ${Object.entries(nets)
    .map(([label, id]) => `(net ${id + netShift} "${label}${suffix}")`)
    .join("\n")}

  ${points
    .map(({ point: { x, y }, orientation, column, row, name }) =>
      PG1350.body({
        x: sign * x + globalShift[0],
        y: y - globalShift[1],
        r: sign * orientation.deg,
        rightText: `${column}, ${row}`,
        leftText: name,
        from: `(net ${nets[name] + netShift} "${name}${suffix}")`,
        to: `(net ${nets[column] + netShift} "${column}${suffix}")`,
      })
    )
    .join("\n\n")}


  ${points
    .map(({ point, orientation, name, row }) => {
      const { x, y } = point.translate(
        new Vector(0, -4).rotate(orientation.rad)
      );

      return SOD123.body({
        x: sign * x + globalShift[0],
        y: y - globalShift[1],
        r: sign * orientation.deg,
        from: `(net ${nets[name] + netShift} "${name}${suffix}")`,
        to: `(net ${nets[row] + netShift} "${row}${suffix}")`,
      });
    })
    .join("\n\n")}


  ${screws.map((screw) => {
    const x = sign * (screw[0] + halfShift[0]) + globalShift[0];
    const y = -(screw[1] + halfShift[1] + globalShift[1]);
    const radius = 1.6;

    return `(gr_circle
      (center ${x} ${y})
      (end ${x + radius} ${y})
      (stroke
        (width 0.2)
        (type default)
      )
      (fill none)
      (layer "Edge.Cuts")
    )`;
  }).join("\n\n")}

  ${magnets.map((screw) => {
    const x = sign * (screw[0] + halfShift[0]) + globalShift[0];
    const y = -(screw[1] + halfShift[1] + globalShift[1]);
    const radius = 2.5;

    return `(gr_circle
      (center ${x} ${y})
      (end ${x + radius} ${y})
      (stroke
        (width 0.2)
        (type dot)
      )
      (fill none)
      (layer "F.SilkS")
    )`;
  }).join("\n\n")}


  ${edgeCuts
    .map(
      ({ start, end }) =>
        `(gr_line (start ${sign * start.x + globalShift[0]} ${
          -start.y - globalShift[1]
        }) (end ${sign * end.x + globalShift[0]} ${
          -end.y - globalShift[1]
        }) (layer Edge.Cuts) (stroke (width 0.15) (type default)))`
    )
    .join("\n\n")}


  ${outlineTop
    .map(
      ({ start, end }) =>
        `(gr_line (start ${sign * start.x + globalShift[0]} ${
          -start.y - globalShift[1]
        }) (end ${sign * end.x + globalShift[0]} ${
          -end.y - globalShift[1]
        }) (layer F.SilkS) (stroke (width ${outlineTopThickness})))`
    )
    .join("\n\n")}

  ${XIAO.body({
    x: sign * (-60.2 + halfShift[0]) + globalShift[0],
    y: 15.3 + halfShift[1] + globalShift[1],
    r: 0,
    P1: { net: nets.C0 + netShift, name: "C0" + suffix, label: "C0" },
    P2: { net: nets.C1 + netShift, name: "C1" + suffix, label: "C1" },
    P3: { net: nets.C2 + netShift, name: "C2" + suffix, label: "C2" },
    P4: { net: nets.C3 + netShift, name: "C3" + suffix, label: "C3" },
    P5: { net: nets.C4 + netShift, name: "C4" + suffix, label: "C4" },
    P6: { net: nets.R3 + netShift, name: "R3" + suffix, label: "R3" },
    P7: { net: nets.TX + netShift, name: "TX" + suffix, label: "TX" },
    P8: { net: nets.RX + netShift, name: "RX" + suffix, label: "RX" },
    P9: { net: nets.R0 + netShift, name: "R0" + suffix, label: "R0" },
    P10: { net: nets.R1 + netShift, name: "R1" + suffix, label: "R1" },
    P11: { net: nets.R2 + netShift, name: "R2" + suffix, label: "R2" },
    VCC: { net: nets.VCC + netShift, name: "VCC" + suffix, label: "VCC" },
    RST: { net: nets.RST + netShift, name: "RST" + suffix, label: "RST" },
    BATM: { net: nets.BATM + netShift, name: "BATM" + suffix, label: "BAT-" },
    BATP: { net: nets.BATP + netShift, name: "BATP" + suffix, label: "BAT+" },
    GND: { net: nets.GND + netShift, name: "GND" + suffix, label: "GND" },
    VUSB: { net: nets.VUSB + netShift, name: "VUSB" + suffix, label: "VUSB" },
    CLK: { net: nets.CLK + netShift, name: "CLK" + suffix, label: "CLK" },
    DIO: { net: nets.DIO + netShift, name: "DIO" + suffix, label: "DIO" },
  })}

  ${MSK12C02.body({
    x: sign * (-45 + halfShift[0]) + globalShift[0],
    y: 25.645 + halfShift[1] + globalShift[1],
    r: -90,
    pin3: "",
    pin2: `(net ${nets.BATP + netShift} "BATP${suffix}")`,
    pin1: `(net ${nets.VBAT + netShift} "VBAT${suffix}")`,
    GND: `(net ${nets.GND + netShift} "GND${suffix}")`,
  })}

  ${PJ320A.body({
    x: sign * (32 + halfShift[0]) + globalShift[0],
    y: 26 + halfShift[1] + globalShift[1],
    r: 0,
    TX: `(net ${nets.TX + netShift} "TX${suffix}")`,
    RX: `(net ${nets.RX + netShift} "RX${suffix}")`,
    VCC: `(net ${nets.VCC + netShift} "VCC${suffix}")`,
    GND: `(net ${nets.GND + netShift} "GND${suffix}")`,
  })}

  ${JSP2.body({
    x: sign * (-33 + halfShift[0]) + globalShift[0],
    y: -40 + halfShift[1] + globalShift[1],
    r: 90,
    from: `(net ${nets.VBAT + netShift} "VBAT${suffix}")`,
    to: `(net ${nets.BATM + netShift} "BATM${suffix}")`,
  })}

  ${LiPo601818.body({
    x: sign * (-19.5 + halfShift[0]) + globalShift[0],
    y: -42.675 + halfShift[1] + globalShift[1],
    r: 0,
  })}

  (gr_text "${boardName}"
		(at ${sign * (32 + halfShift[0]) + globalShift[0]} ${
  6 - halfShift[1] - globalShift[1]
} ${sign * 90})
		(layer "F.SilkS")
		(effects
			(font
				(size 2 2)
				(thickness 0.4)
			)
		)
	)

  (gr_text "${halfLabel}"
		(at ${sign * (34.5 + halfShift[0]) + globalShift[0]} ${
  6 - halfShift[1] - globalShift[1]
} ${sign * 90})
		(layer "F.SilkS")
		(effects
			(font
				(size 1 1)
				(thickness 0.15)
			)
		)
	)

   (gr_text "${boardName}"
		(at ${sign * (32 + halfShift[0]) + globalShift[0]} ${
  6 - halfShift[1] - globalShift[1]
} ${sign * 90})
		(layer "B.SilkS")
		(effects
			(font
				(size 2 2)
				(thickness 0.4)
			)
      (justify mirror)
		)
	)

  (gr_text "${halfLabel}"
		(at ${sign * (34.5 + halfShift[0]) + globalShift[0]} ${
  6 - halfShift[1] - globalShift[1]
} ${sign * 90})
		(layer "B.SilkS")
		(effects
			(font
				(size 1 1)
				(thickness 0.15)
			)
      (justify mirror)
		)
	)

  (gr_rect
		(start ${sign * (31 + halfShift[0]) + globalShift[0] - sign * 0.1} ${
  17.69 - halfShift[1] - globalShift[1]
})
		(end ${sign * (31.8 + halfShift[0]) + globalShift[0] - sign * 0.1} ${
  21.98 - halfShift[1] - globalShift[1]
})
		(stroke
			(width 0.2)
			(type solid)
		)
		(fill solid)
		(layer "F.SilkS")
	)

  (gr_rect
		(start ${sign * (34.5 + halfShift[0]) + globalShift[0] - sign * 0.15} ${
  17.69 - halfShift[1] - globalShift[1]
})
		(end ${sign * (35.3 + halfShift[0]) + globalShift[0] - sign * 0.1} ${
  21.98 - halfShift[1] - globalShift[1]
})
		(stroke
			(width 0.2)
			(type solid)
		)
		(fill solid)
		(layer "F.SilkS")
	)

  (gr_text "F"
		(at ${sign * (33 + halfShift[0]) + globalShift[0]} ${
  20 - halfShift[1] - globalShift[1]
})
		(layer "F.SilkS" knockout)
		(effects
			(font
				(size 3 3)
				(thickness 1)
			)
		)
	)

  (gr_rect
		(start ${sign * (31 + halfShift[0]) + globalShift[0] - sign * 0.2} ${
  17.69 - halfShift[1] - globalShift[1]
})
		(end ${sign * (31.8 + halfShift[0]) + globalShift[0] - sign * 0.2} ${
  21.98 - halfShift[1] - globalShift[1]
})
		(stroke
			(width 0.2)
			(type solid)
		)
		(fill solid)
		(layer "B.SilkS")
	)

  (gr_rect
		(start ${sign * (34.5 + halfShift[0]) + globalShift[0]} ${
  17.69 - halfShift[1] - globalShift[1]
})
		(end ${sign * (35.3 + halfShift[0]) + globalShift[0]} ${
  21.98 - halfShift[1] - globalShift[1]
})
		(stroke
			(width 0.2)
			(type solid)
		)
		(fill solid)
		(layer "B.SilkS")
	)

  (gr_text "B"
		(at ${sign * (33 + halfShift[0]) + globalShift[0]} ${
  20 - halfShift[1] - globalShift[1]
})
		(layer "B.SilkS" knockout)
		(effects
			(font
				(size 3 3)
				(thickness 1)
			)
      (justify mirror)
		)
	)

  (gr_text "Rev: ${rev}"
		(at ${sign * (33 + halfShift[0]) + globalShift[0]} ${
  15 - halfShift[1] - globalShift[1]
})
		(layer "B.SilkS")
		(effects
			(font
				(size 0.8 0.8)
				(thickness 0.15)
			)
      (justify mirror)
		)
	)

  (gr_text "By: ${boardMaker}"
		(at ${sign * (33 + halfShift[0]) + globalShift[0]} ${
  15 - halfShift[1] - globalShift[1]
})
		(layer "F.SilkS")
		(effects
			(font
				(size 0.7 0.7)
				(thickness 0.15)
			)
		)
	)
  
`;

const result = `
(kicad_pcb
  (version 20240108)
  (general
    (thickness 1.6)
    (legacy_teardrops no)
  )
  (paper "A4")
  (title_block
    (title "${boardName}")
    (date "${new Date().toLocaleString("se").split(" ")[0]}")
    (rev "${rev}")
    (company "${boardMaker}")
  )

  (layers
    (0 "F.Cu" signal)
    (31 "B.Cu" signal)
    (32 "B.Adhes" user "B.Adhesive")
    (33 "F.Adhes" user "F.Adhesive")
    (34 "B.Paste" user)
    (35 "F.Paste" user)
    (36 "B.SilkS" user "B.Silkscreen")
    (37 "F.SilkS" user "F.Silkscreen")
    (38 "B.Mask" user)
    (39 "F.Mask" user)
    (40 "Dwgs.User" user "User.Drawings")
    (41 "Cmts.User" user "User.Comments")
    (42 "Eco1.User" user "User.Eco1")
    (43 "Eco2.User" user "User.Eco2")
    (44 "Edge.Cuts" user)
    (45 "Margin" user)
    (46 "B.CrtYd" user "B.Courtyard")
    (47 "F.CrtYd" user "F.Courtyard")
    (48 "B.Fab" user)
    (49 "F.Fab" user)
  )

  (setup
    (pad_to_mask_clearance 0.05)
    (allow_soldermask_bridges_in_footprints no)
    (pcbplotparams
      (layerselection 0x00010fc_ffffffff)
      (plot_on_all_layers_selection 0x0000000_00000000)
      (disableapertmacros no)
      (usegerberextensions no)
      (usegerberattributes yes)
      (usegerberadvancedattributes yes)
      (creategerberjobfile yes)
      (dashed_line_dash_ratio 12.000000)
      (dashed_line_gap_ratio 3.000000)
      (svgprecision 4)
      (plotframeref no)
      (viasonmask no)
      (mode 1)
      (useauxorigin no)
      (hpglpennumber 1)
      (hpglpenspeed 20)
      (hpglpendiameter 15.000000)
      (pdf_front_fp_property_popups yes)
      (pdf_back_fp_property_popups yes)
      (dxfpolygonmode yes)
      (dxfimperialunits yes)
      (dxfusepcbnewfont yes)
      (psnegative no)
      (psa4output no)
      (plotreference yes)
      (plotvalue yes)
      (plotfptext yes)
      (plotinvisibletext no)
      (sketchpadsonfab no)
      (subtractmaskfromsilk no)
      (outputformat 1)
      (mirror no)
      (drillshape 1)
      (scaleselection 1)
      (outputdirectory "")
    )
  )

  ${generateHalf(1, "_L", 0, "Left Side")}
  ${generateHalf(-1, "_R", 10_000, "Right Side")}

)
`;

if (!existsSync("./kicad")) {
  await fs.mkdir("./kicad");
}
await fs.writeFile("./kicad/mint36tt.kicad_pcb", result);
