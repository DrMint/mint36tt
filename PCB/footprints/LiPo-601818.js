module.exports = {
    body: ({ x, y, r }) => `
      (footprint "601818"
          (layer "F.Cu")
          (at ${x} ${-y} ${r})
  
          (fp_line
            (start -10 9)
            (end -10 -9)
            (stroke
                (width 0.15)
                (type solid)
            )
            (layer "F.SilkS")
          )

          (fp_line
            (start -10 -9)
            (end 10 -9)
            (stroke
                (width 0.15)
                (type solid)
            )
            (layer "F.SilkS")
          )

          (fp_line
            (start 10 -9)
            (end 10 9)
            (stroke
                (width 0.15)
                (type solid)
            )
            (layer "F.SilkS")
          )

          (fp_line
            (start 10 9)
            (end -10 9)
            (stroke
                (width 0.15)
                (type solid)
            )
            (layer "F.SilkS")
          )

          (property label_1 "601818 LiPo"
            (at 0 0)
            (layer "F.SilkS")
            (effects (font (size 1.25 1.25) (thickness 0.25)))
          )
      )
    `,
  };
  