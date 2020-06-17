// Base sort of abstract template, specialized templates can override pieces of this
const fill_template = require('../fill_templates/curve_fill_template');
const BaseTemplate = require("../base_template")

class LogCurveTemplate extends BaseTemplate {
    // const obj = {}
    // Define Default Settings Values
    constructor(params={}) {
        super();
        this.curve_name = "default"
        this.color = "black"
        this.stroke_type = "solid"
        this.stroke_linecap = "butt"
        this.stroke_width = 1.0
        this.stroke_transparency = 1.0
        this.fill = new fill_template()
        this.units = "unkn"
        this.depth_limits = {"min": "autocalculate", "max": "autocalculate"}
        this.curve_limits = {"min": -100000, "max":3} // TODO: This needs to be looked at more
        this.data = Array(0)
        this.data_id = ""
        this.well_name = "default"
        this.uwi14 = "00000000000000"
        this.isLinear = true // false sets to a log scale
        this.depth_type = "MD"
        this.depth_units = "meter"
        // Define Template Functions
        // TODO: decide if null are handled here or at load validation
        //Update template based on passed params
        this.handle_params(params)
    }
    // Simple function to set the data that is associated with this curve
    define_data(data) {
        // Add data to a template
        // TODO: Validation step here??
        this.data = data
        return this
    }
    // Function change the target curve name and data for the instance of curve template
    set_curve_and_data(curve_name, data, params={}){
        this.define_data(data)
        this.curve_name = curve_name
        //Update template based on passed params
        this.handle_params(params)
        return this
    }

}

module.exports = LogCurveTemplate;