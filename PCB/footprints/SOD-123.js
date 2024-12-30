module.exports = {
    body: ({x, y, r, from, to}) => `
      (footprint "SOD-123"
          (layer "F.Cu")
          (at ${x} ${-y} ${r})
          (attr smd)
  
          
          (fp_line
              (start -0.75 0)
              (end -0.35 0)
              (stroke
                  (width 0.1)
                  (type solid)
              )
              (layer "B.SilkS")
              (uuid "6ca35575-e874-437e-9d65-365bffe1f11a")
          )
          (fp_line
              (start -0.35 0)
              (end -0.35 -0.55)
              (stroke
                  (width 0.1)
                  (type solid)
              )
              (layer "B.SilkS")
              (uuid "de4d6855-9f6a-4403-bff7-0f55bc6a2112")
          )
          (fp_line
              (start -0.35 0)
              (end -0.35 0.55)
              (stroke
                  (width 0.1)
                  (type solid)
              )
              (layer "B.SilkS")
              (uuid "28c43b2a-f12d-480f-ab61-51676e98196c")
          )
          (fp_line
              (start -0.35 0)
              (end 0.25 -0.4)
              (stroke
                  (width 0.1)
                  (type solid)
              )
              (layer "B.SilkS")
              (uuid "79e29f2d-a052-4486-911f-c25003ac40d1")
          )
          (fp_line
              (start 0.25 -0.4)
              (end 0.25 0.4)
              (stroke
                  (width 0.1)
                  (type solid)
              )
              (layer "B.SilkS")
              (uuid "64385577-c14c-4ec0-94bc-0eba4bd727de")
          )
          (fp_line
              (start 0.25 0)
              (end 0.75 0)
              (stroke
                  (width 0.1)
                  (type solid)
              )
              (layer "B.SilkS")
              (uuid "268dcbfa-fef4-4be2-bf1b-c19e0d6a32ac")
          )
          (fp_line
              (start 0.25 0.4)
              (end -0.35 0)
              (stroke
                  (width 0.1)
                  (type solid)
              )
              (layer "B.SilkS")
              (uuid "00e8de86-5247-404b-b774-adb936af72e1")
          )
          
  
        
          (pad "1" smd rect
              (at 1.65 0 ${r})
              (size 0.9 1.2)
              (layers "B.Cu" "B.Paste" "B.Mask")
              ${from}
              (uuid "5bbd7253-22b4-47a4-89aa-7eb69991d213")
          )
          (pad "2" smd rect
              (at -1.65 0 ${r})
              (size 0.9 1.2)
              (layers "B.Cu" "B.Paste" "B.Mask")
              ${to}
              (uuid "c77cee4c-9925-4c56-90cb-2fbcc9764529")
          )
          
          
          (model "\${KIPRJMOD}/../3d-models/SOD-123.step"
              (offset
                  (xyz 0 0 -1.6)
              )
              (scale
                  (xyz 1 1 1)
              )
              (rotate
                  (xyz -180 0 0)
              )
          )
      )`,
  };
  