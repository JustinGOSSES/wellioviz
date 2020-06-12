
const log_curve_template = require('../log_style_templates/log_curve_template');

class TrackTemplate {
    constructor(params={}) {
        this.track_name = "default"
        this.show_well_name = true
        this.show_depth_type = false
        this.show_curves_units = true
        this.show_null = false
        this.show_track_title = false
        this.grid_lines = true
        this.independent_scale = true
        this.mouse_over = true
        this.mouse_over_depth_only = false
        this.grid_color = "#D3D3D3"
        this.grid_stroke_width = 0.2
        this.track_dimensions = {"height": 500, "width": 260}
        this.scale_denominator = 2
        this.margin = {"top": 10, "right": 10, "bottom": 30, "left": 60}
        this.title = {"text": "default", "font": "16px"}
        this.div_id = "default_track"
        this.curves = {}
        // TODO: look at other potential track level variables
        for (const [key, value] in Object.entries(params)){
            obj[key] = value
        }
    }

    add_curve(curve) {
        this.curves[curve.curve_name] = curve
        return this
    }

}
module.exports = TrackTemplate