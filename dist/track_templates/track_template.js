const BaseTemplate = require("../base_template")
const log_curve_template = require('../log_style_templates/log_curve_template');

class TrackTemplate extends BaseTemplate{
    constructor(params={}) {
        super()
        this.track_template_name = "default"
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
        this.depth_curve = "DEPT"
        this.track_dimensions = {"height": 500, "width": 260}
        this.scale_numerator = 2
        this.margin = {"top": 10, "right": 10, "bottom": 30, "left": 60}
        this.title = {"text": "default", "font": "16px"}
        this.div_id = "default_track"
        this.curves = {}
        // TODO: look at other potential track level variables
        this.handle_params(params)
    }

    add_curve(curve) {
        this.curves[curve.curve_name] = curve
        return this
    }

    load_log(logs_dict) {
        console.log('setting up track data')
        var curves_with_data = {}
        this.depth_curve = this.get_depth_track_name(logs_dict['CURVE_INFORMATION_BLOCK'])
        for (const [key, value] in Object.entries(this.curves)){
            // Check if the curve is in the well log
            // TODO: Put curve aliasing here!!
            if(key in Object.keys(logs_dict['CURVE_INFORMATION_BLOCK'])){
                // Load the curve
                let formatted_log = this.format_log(logs_dict['CURVES'], key)
                curves_with_data[key] = value.set_curve_and_data(key, formatted_log)
            } else {
                curves_with_data[key] = value
            }

        }
        this.curves = curves_with_data
        return this
    }
    /**
     * convertWellJSONToObj is a function that takes in wellio style JSON of all LAS file well log information,
     * array of curves names, and a string for UWI
     * and returns the data array of objects that D3.js likes for data used in plotting.
     * @param {object} curve_dict wellio style curves
     * @param {string} curve_name the name of the curve to format
     * @returns {array} returns array of objects that contain key:value pairs of curve name and value at each depth. Depth is also a key:value pair.
     */
    format_log(curve_dict, curve_name){
        let depth = curve_dict[this.depth_curve];
        let curve = curve_dict[curve_name]
        let curve_data = [];
        curve_data.push(curve_dict[curve_name]);
        var array_of_object;
        array_of_object = [];
        for (let eachPt = 0; eachPt < depth.length; eachPt++) {
            let obj = {};
            obj[this.depth_curve] = parseFloat(curve_data[0][eachPt]);
            obj[curve_name] = parseFloat(curve_data[1][eachPt])


            array_of_object.push(obj);
        }
        return array_of_object
    }

    get_depth_track_name(curve_info){
        return Object.keys(curve_info)[0]
    }

}
module.exports = TrackTemplate