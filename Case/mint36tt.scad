include <./components/kailh-choc-v1.scad>
include <./components/cfx-caps.scad>

// include <./common.scad>

// Width: 117.5mm
// Height: 91mm
// Thickness: 14.7mm (14.0mm without the rubber feets)


/* [3D printing] */
kerf = 0.50;

/* [Keycaps & switches] */
Enable_switches = true;
Enable_caps = true;
Keycap_color = "#ffffffaa";
Thumb_cluster_color = "#eeeeee";

/* [Shell] */
Wall_thickness = 2.0;
Shell_size = [111.7, 81.575];
Shell_position = [-71.2, -53.675];
Shell_color = "#555555";

/* [Upper shell] */
Enable_upper_shell = true;
Upper_shell_thickness = 2.5;
Upper_shell_height = 8.8;
Enable_magnets = true;
Upper_shell_magnet_thickness = 0.5;
Magnet_height = 5.0;
Magnet_diameter = 5.0;

/* [Lower shell] */
Enable_lower_shell = true;
Lower_shell_thickness = 1.8;

/* [Rubber feet] */
Enable_rubber_feet = true;
Rubber_diameter = 8.0;
Rubber_height = 2.5;
Rubber_sinking = 2.5;

/* [Plate] */
Enable_plate = true;
Plate_thumb_size = [116.7, 22.875];
Plate_thickness = 2.2;

/* [Screws] */
Enable_screws = true;
Screw_hole_radius = 1;
Screw_hole_distance = 1.5;
Countersink_height = 1.2;
Countersink_diameter = 3.5;
Screw_spacer_radius = 3.1/2;

/* [Microcontroller] */
Enable_microcontroller = true;
Micro_size = [17.8, 21, 1.26];
Micro_size_with_USB = 22.7;
Micro_position = [-68, 7.75, -1];

/* [Battery] */
Enable_battery = true;
Battery_size = [18, 20, 6];
Battery_position = [-20.1, -42.95];

/* [PCB] */
Enable_PCB = true;
PCB_thickness = 1.6;
Enable_sockets = true;
Enable_TTRS = true;
TTRS_position = [28.35, 12.5, -5.2];

/* [Debug] */
Debug_splay = 0.0; // [0:1:32]
Debug_text_distance = 70;
Debug_text_shift = 15;
Enable_debug_text = false;


module keys(withoutThumb=false, cutout=false, batteryCutout=false) {
    if (cutout) translate([-ku, ku]) capSize(16.8, 16.8) children();
    translate([0, ku]) capSize(16.8, 16.8) capColor(Keycap_color) children();
    translate([0, 0]) capSize(16.8, 16.8) capColor(Keycap_color) children();
    translate([0, -ku]) capSize(16.8, 16.8) capColor(Keycap_color) children();
    
    translate([ku, ku]) capSize(16.8, 16.8) capColor(Keycap_color) children();
    translate([ku, 0]) capSize(16.8, 16.8) capColor(Keycap_color) children();
    translate([ku, -ku]) capSize(16.8, 16.8) capColor(Keycap_color) children();
    
    rotate(3) translate([-18.5, 4]) {
        if (cutout) translate([ku, 0]) capSize(16.8, 16.8) children();
        translate([0, ku]) capSize(16.8, 16.8) capColor(Keycap_color) children();
        translate([0, 0]) capSize(16.8, 16.8) capColor(Keycap_color) children();
        translate([0, -ku]) capSize(16.8, 16.8) capColor(Keycap_color) children();
    }
    
    rotate(8) translate([-37.58, -2]) {
        if (cutout) translate([ku, ku]) capSize(16.8, 16.8) children();
        if (cutout) translate([ku, 0]) capSize(16.8, 16.8) children();
        if (batteryCutout) translate([1.25, ku * 2]) rotate(-8) capSize(16.8, 16.8) children();
        translate([0, ku]) capSize(16.8, 16.8) capColor(Keycap_color) children();
        translate([0, 0]) capSize(16.8, 16.8) capColor(Keycap_color) children();
        translate([0, -ku]) capSize(16.8, 16.8) capColor(Keycap_color) children();
    }
    
    rotate(18) translate([-58.79, -10.5]) {
        if (cutout) translate([ku, ku / 2]) rotate(-5) capSize(16.8, 16.8) children();
        if (cutout) translate([ku / 2, 0]) capSize(16.8, 16.8) children();
        if (batteryCutout) translate([0, -ku * 2]) capSize(16.8, 16.8) children();
        if (batteryCutout) translate([-ku, -ku]) capSize(16.8, 16.8) children();
        if (batteryCutout) translate([-ku, 0]) capSize(16.8, 16.8) children();
        if (batteryCutout) translate([-ku, ku]) capSize(16.8, 16.8) children();
        if (batteryCutout) translate([ku, ku]) capSize(16.8, 16.8) children();
        translate([0, ku]) capSize(16.8, 16.8) capColor(Keycap_color) children();
        translate([0, 0]) capSize(16.8, 16.8) capColor(Keycap_color) children();
        translate([0, -ku]) capSize(16.8, 16.8) capColor(Keycap_color) children();
    }
    
    if (!withoutThumb) rotate(0) translate([ku, -35.65 - gap]) {
        if (cutout) rotate(45) translate([5, 0]) capSize(16.8, 16.8) children();
        translate([ku, -5.475]) capSize(21.35, 16.8) rotate(-90) capColor(Thumb_cluster_color) children();
        translate([0, -3.1]) capSize(26.1, 16.8) rotate(90) capColor(Thumb_cluster_color) children();
        translate([-ku, -3.1]) capSize(26.1, 16.8) rotate(90) capColor(Thumb_cluster_color) children();
    }
}

module screwPositions() {
    translate([Shell_position.x + Shell_size.x - Screw_hole_radius * 2 - Screw_hole_distance, Shell_position.y + Shell_size.y - Screw_hole_radius * 2 - Screw_hole_distance]) children();
    translate([Shell_position.x + Shell_size.x - Screw_hole_radius * 2 - Screw_hole_distance, -26.9 + Screw_hole_distance]) children();
    translate([Shell_position.x + Screw_hole_radius * 2 + Screw_hole_distance, Shell_position.y + Screw_hole_radius * 2 + Screw_hole_distance]) children();
    translate([Micro_position.x + Micro_size.x + 0.1 + Screw_hole_distance, Shell_position.y + Shell_size.y - Screw_hole_radius * 2 - Screw_hole_distance]) children();
}

module magnetPositions() {
    translate([34, -1]) children();
    translate([-16.7, -30]) children();
    translate([-41, 24]) children();
    translate([-65, -40]) children();
}

module rubberFeetPositions() {
    translate([26, -40]) children();
    translate([33.5, 13]) children();
    translate([-63.5, 20]) children();
    translate([-63.5, -40]) children();
}

half();
*translate([120, 0, 0]) half(flip=true);


/* [Hidden] */
zshift = $preview ? 0.01 : 0;
base_size = 16.5;
gap = 1.0;
ku = base_size + gap;
$fn = 64;

module condMirror(flip) {
    if (flip) {
        mirror([1, 0, 0]) children();
    } else {
        children();
    }
}

module condFlip(flip) {
    if (flip) {
        rotate(180) children();
    } else {
        children();
    }
}

module hotswap() {
    color("#333333") linear_extrude(1.8) {
        difference() {
            union() {
                translate([-2.05 + 1.5, 3.65 + 1.5]) offset(delta=1.5, chamfer=true) square([4.75 - 3, 4.65 - 3]);
                translate([2.7 + 1, 3.65 - 2.2 + 1]) offset(1) square([9.55 - 4.75 - 2, 4.65 - 2]);
                translate([5, 1.45]) square([2.7, 0.7]);
                translate([1.15, 2.05]) difference() {
                    square([2, 4]);
                    color("red") circle(1.6);
                } 

                translate([3.5, 6.9]) difference() {
                    translate([-2, -2]) square([2, 2]);
                    color("red") circle(0.8);
                }
            }
            translate([0, 5.9]) circle(0.5);
            translate([5, 5.9 - 2.2]) circle(0.5);
        }
    }
    
    color("#dddddd") linear_extrude(1.8) {    
        translate([7.5, 2.9]) square([2.0, 1.68]);
        translate([-4.05, 2.9 + 2.2]) square([2.0, 1.68]);
    }
}

module upperShellEmptySpaces() {
    offset(-1.6) difference() {
        translate(Shell_position) offset(1) square(Shell_size);
        keys(cutout=true, batteryCutout=true) offset(delta=1) cap_2d();
        translate([-9.4, -55]) square([55, 25.2]);
    }
}

module switches(flip) {
    translate([0, 0, -0.1 * Debug_splay]) {
        keys() rotate(180) condMirror(flip) kailthChocV1();
        if (Enable_debug_text) color("#90b48b") rotate([90, 0, 0]) {
            translate([Debug_text_distance, 4 + Debug_text_shift]) text("Kailh Choc v1", size=4);
            translate([Debug_text_distance, -4 + Debug_text_shift]) text("Ambients Twilight", size=5);
        }
    }
}

module caps() {
    translate([0, 0, Debug_splay * 2]) {
        keys() translate([0, 0, 2.5 + zshift]) cfxCap();
        if (Enable_debug_text) color(Thumb_cluster_color) rotate([90, 0, 0]) translate([Debug_text_distance, Debug_text_shift]) text("Chocfox CFX", size=7);
    }
}

module ioCutouts() {
    translate([Micro_position.x, Micro_position.y, 1.5]) translate([4.5, -1.5 + Micro_size.y + (Micro_size_with_USB - Micro_size.y), -1]) rotate([90]) linear_extrude(height = 7.4)  offset(r=1.6 + kerf * 2) square([6, 0.3]);
    
    translate([TTRS_position.x - 1.32, TTRS_position.y, 2.2]) translate([4.5, -1.5 + Micro_size.y + (Micro_size_with_USB - Micro_size.y), -1.9]) rotate([90]) linear_extrude(height = 7.4)  offset(r=2.5 + kerf * 2) square([0.1, 0.1]);
}

module upperShell() {
    translate([0, 0, Debug_splay * 3.5]) {
        color(Shell_color) difference() {
             translate([0, 0, 0]) linear_extrude(Upper_shell_height, convexity=10)  difference() {
                offset(r=1) union() {
                    keys(withoutThumb=true) offset(delta=Wall_thickness) cap_2d();
                    translate(Shell_position) square(Shell_size);
                }
                keys(cutout=true) offset(delta=1) cap_2d();
                translate([-9.4, -55]) square([55, 25.2]);
                screwPositions() circle(Screw_hole_radius + kerf / 2);
            }
            
            translate([0, 0, -zshift]) linear_extrude(Upper_shell_height - Upper_shell_magnet_thickness) magnetPositions() circle(Magnet_diameter / 2 + kerf);
            
            translate([0, 0, -zshift]) linear_extrude(Upper_shell_height - Upper_shell_thickness) offset(delta=kerf / 2) upperShellEmptySpaces();
            
            translate([0, 0, Upper_shell_height + zshift - Countersink_height]) screwPositions() cylinder(Countersink_height, Countersink_diameter / 2 + kerf, Countersink_diameter / 2 + kerf);
            
            translate([0, 0, -zshift]) screwPositions() cylinder(Upper_shell_height - Upper_shell_thickness, Screw_spacer_radius + kerf, Screw_spacer_radius + kerf);
            
            ioCutouts();
            
        }
        color(Shell_color) translate([0, 0, Upper_shell_height - Upper_shell_magnet_thickness - Magnet_height]) linear_extrude(Magnet_height) difference() {
            magnetPositions() circle(Magnet_diameter / 2 + 1);
            magnetPositions() circle(Magnet_diameter / 2 + kerf);
        }
        if (Enable_debug_text) color("#888888") rotate([90, 0, 0]) translate([Debug_text_distance, Debug_text_shift]) text("Upper shell", size=8);
    }
}

module magnets() {
    translate([0, 0, Debug_splay * 2.9]) color("#55aaff") {
        translate([0, 0, Upper_shell_height - Magnet_height - Upper_shell_magnet_thickness]) magnetPositions() linear_extrude(Magnet_height) circle(Magnet_diameter / 2);
        if (Enable_debug_text) rotate([90, 0, 0]) translate([Debug_text_distance, 2 + Debug_text_shift]) text("Magnets", size=5);
    }
}

module battery() {
    color("#ee55ee") translate([0, 0, Debug_splay * 2.8]) {
        translate([Battery_position.x + Battery_size.x / 2, Battery_position.y - Battery_size.y / 2]) rotate(90) cube(Battery_size);
        if (Enable_debug_text) rotate([90, 0, 0]) translate([Debug_text_distance, -4 + Debug_text_shift]) text("Battery", size=5);
    }
}

module microController() {
    translate([0, 0, Debug_splay * 0.5]) {
        translate([Micro_position.x, Micro_position.y, 1.0 - Plate_thickness + Micro_size.z + Micro_position.z]) scale([1, 1, -1]) {
            color("#333333") linear_extrude(height = Micro_size.z) offset(r=1.5) square([Micro_size.x - 3, Micro_size.y - 3]);
            color("#999999") translate([4.5, -1.5 + Micro_size.y + (Micro_size_with_USB - Micro_size.y), -1.7]) rotate([90]) linear_extrude(height = 7.4) difference() {
                offset(r=1.5) square([6, 0.2]);
                offset(r=1.2) square([6, 0.2]);
            };
            color("#333333") translate([4.5, -1.5 + Micro_size.y + (Micro_size_with_USB - Micro_size.y), -1.7]) rotate([90]) linear_extrude(height = 7.4) offset(r=0.2) square([6, 0.2]);
            color("#333333") translate([7.5, 14, -3]) linear_extrude(3) square([9.1, 2], center=true);
            color("#999999") translate([1, 2, -1.75]) cube([12.75, 10.75, 1.75]);
            color("#e1a95f") translate([-0.1, -0.5, -0.1]) linear_extrude(1.5) for (i = [0:7]) {
                translate([-1.5, i * 2.5, 0]) square([1.5, 1]);
                translate([15, i * 2.5, 0]) square([1.5, 1]);
            }
        }
        if (Enable_debug_text) color("#aaaaaa") rotate([90, 0, 0]) {
            translate([Debug_text_distance, 8 + Debug_text_shift]) text("Seeed XIAO", size=5);
            translate([Debug_text_distance, 2 + Debug_text_shift]) text("nRF52840 (BLE)", size=4);
        }
    }
}

module plate(flip) {
    translate([0, 0, -Debug_splay * 1]) {
        color(Shell_color) translate([0, 0, -Plate_thickness]) difference() {
            linear_extrude(Plate_thickness, convexity=10) offset(delta=-kerf) difference() {
                offset(1 - Wall_thickness) union() {
                    keys(withoutThumb=true) offset(delta=Wall_thickness) cap_2d();
                    translate(Shell_position) square(Shell_size);
                    translate(Shell_position) square(Plate_thumb_size);
                }
                screwPositions() circle(Screw_spacer_radius + kerf * 3);
                upperShellEmptySpaces();
            }
            linear_extrude(Plate_thickness + zshift) keys() square(13.80 + kerf, center=true);
            translate([0, 0, -zshift]) linear_extrude(0.9) keys() square(14.50 + kerf, center=true);
        }
        if (Enable_debug_text) color("#888888") rotate([90, 0, 0]) translate([Debug_text_distance, -2 + Debug_text_shift]) text("Plate", size=8);
    }
}

module lowerShell(flip) {
    translate([0, 0, -Debug_splay * 3]) { 
       translate([0, 0, -Plate_thickness - PCB_thickness - Lower_shell_thickness]) {
            color(Shell_color) difference() {
                linear_extrude(PCB_thickness + Lower_shell_thickness + Plate_thickness - zshift * 10, convexity=10) difference() {
                    offset(1) union() {
                        keys(withoutThumb=true) offset(delta=Wall_thickness) cap_2d();
                        translate(Shell_position) square(Shell_size);
                        translate(Shell_position) square(Plate_thumb_size);
                    }
                    offset(1 - Wall_thickness) union() {
                        keys(withoutThumb=true) offset(delta=Wall_thickness) cap_2d();
                        translate(Shell_position) square(Shell_size);
                        translate(Shell_position) square(Plate_thumb_size);
                    }
                }
                translate([0, 0, + Plate_thickness + PCB_thickness + Lower_shell_thickness]) ioCutouts();
            }
             
       
            color(Shell_color) difference() {
                linear_extrude(Lower_shell_thickness, convexity=10) difference() {
                    offset(1 - Wall_thickness) {
                        keys(withoutThumb=true) offset(delta=Wall_thickness) cap_2d();
                        translate(Shell_position) square(Shell_size);
                        translate(Shell_position) square(Plate_thumb_size);
                    }
                    offset(kerf) keys() condMirror(flip) {
                        projection() hotswap();
                        circle(3.4 / 2);
                        translate([5.5, 0]) circle(1.9 / 2);
                        translate([-5.5, 0]) circle(1.9 / 2);
                    }
                    screwPositions() circle(Screw_hole_radius + kerf / 2);
                }
                translate([0, 0, -zshift]) screwPositions() cylinder(Countersink_height, Countersink_diameter / 2 + kerf, Countersink_diameter / 2 + kerf);
                translate([0, 0, -zshift - Rubber_height + Rubber_sinking]) linear_extrude(Rubber_height) offset(kerf) rubberFeetPositions() circle(Rubber_diameter / 2);
            }
            if (Enable_debug_text) color("#888888") rotate([90, 0, 0]) translate([Debug_text_distance, -4 + Debug_text_shift]) text("Lower shell", size=8);
        }
        
        
    }
}
                

module rubberFeet() {
    translate([0, 0, - Debug_splay * 4]) {
        color("#FFFFFF66") translate([0, 0, -Plate_thickness - PCB_thickness - Lower_shell_thickness + zshift + min(Rubber_sinking, Lower_shell_thickness)]) rubberFeetPositions() mirror([0, 0, 1]) linear_extrude(Rubber_height, scale=0.85) circle(Rubber_diameter / 2);
        if (Enable_debug_text) color("#CCCCCC") rotate([90, 0, 0]) translate([Debug_text_distance, -14 + Debug_text_shift]) text("Rubber feet", size=5);
    }
}

module PCB() {
    color("#335533") translate([0, 0, -Plate_thickness - PCB_thickness - Debug_splay * 1.6]) {
        linear_extrude(PCB_thickness) difference() {
            offset(1 - Wall_thickness - kerf * 2) union() {
                keys(withoutThumb=true) offset(delta=Wall_thickness) cap_2d();
                translate(Shell_position) square(Shell_size);
                translate(Shell_position) square(Plate_thumb_size);
            }
            screwPositions() circle(Screw_spacer_radius + kerf);
            keys() rotate(180) {
                circle(3.4 / 2);
                translate([-Pin_gap / 2, 0]) circle(1.9 / 2);
                translate([Pin_gap / 2, 0]) circle(1.9 / 2);
                translate([0, -5.9]) circle(1.5);
                translate([-5, -3.8]) circle(1.5);
                translate([5, -3.8]) circle(1.5);
            }
        }
        if (Enable_debug_text) rotate([90, 0, 0]) translate([Debug_text_distance, -4 + Debug_text_shift]) text("PCB", size=8);
    }
}

module sockets(flip) {
    translate([0, 0, -Debug_splay * 2.5]) {
        keys() translate([0, 0, -Plate_thickness - PCB_thickness - 1.8]) condMirror(flip)  hotswap();
        if (Enable_debug_text) color("#dddddd") rotate([90, 0, 0]) translate([Debug_text_distance, -7 + Debug_text_shift]) text("Hotswap sockets", size=6);
    }
}

module screws() {
    color("#e1a95f") screwPositions()  {
        // Models from https://www.printables.com/model/127873-m2-conical-screws-hex-head-and-nut-2mm-27mm+
        translate([-15, 0, -Plate_thickness - PCB_thickness - Lower_shell_thickness - Debug_splay * 3.6]) import("./components/m2-screw-6mm.stl");
        translate([0, 0, 1 + Debug_splay * 1.3]) scale([0.6, 0.6, 6]) rotate([90, 0]) import("./components/m2-standoff.stl");
        translate([15, 0, Upper_shell_height + Debug_splay * 4]) rotate([0, 180]) import("./components/m2-screw-6mm.stl");
    }
}

module debug() {
    if (Enable_debug_text) {
        color("#e1a95f") rotate([90, 0, 0]) translate([Debug_text_distance, 2 + Debug_splay * 4 + Debug_text_shift]) text("M2 screws", size=5);
        color("#e1a95f") rotate([90, 0, 0]) translate([Debug_text_distance, -6 - Debug_splay * 3.6 + Debug_text_shift]) text("M2 screws", size=5);
        color("#e1a95f") rotate([90, 0, 0]) translate([Debug_text_distance, Debug_splay * 1.3 + Debug_text_shift]) text("M2 standoffs", size=5);
    }
        
    screwPositions() color("#e1a95f15") translate([0, 0, -Debug_splay * 3.8]) cylinder(Debug_splay * 8, 0.5, 0.5);
    magnetPositions() color("#55aaff33") translate([0, 0, Debug_splay * 3]) cylinder(Debug_splay, 0.5, 0.5);
    translate(Battery_position) color("#ee55ee33") translate([0, 0, Debug_splay * 2.8]) cylinder(Debug_splay * 1.2, 0.5, 0.5);
    rubberFeetPositions() color("#ffffff15") translate([0, 0, -5 -Debug_splay * 4]) cylinder(Debug_splay, 0.5, 0.5);
}

module ttrs() {
    translate([0, 0, -Debug_splay * 1.4]) {
        color("#333333") translate(TTRS_position) rotate([90, 0, 90]) import("./components/ttrs-jack.stl");
        if (Enable_debug_text) color("#666666") rotate([90, 0, 0]) translate([Debug_text_distance, -2 + Debug_text_shift]) text("TRRS jack", size=6);
    }
}

module half(flip=false) {
    condMirror(flip) {
        if (Enable_switches) switches(flip);
        if (Enable_caps) caps();
        if (Enable_upper_shell) upperShell();
        if (Enable_magnets) magnets();
        if (Enable_battery) battery();
        if (Enable_microcontroller) microController();
        if (Enable_plate) plate(flip);
        if (Enable_lower_shell) lowerShell(flip);
        if (Enable_PCB) PCB();
        if (Enable_sockets) sockets(flip);
        if (Enable_screws) screws();
        if (Enable_rubber_feet) rubberFeet();
        if (Enable_TTRS) ttrs();
        debug();
    } 
}
