const BaseTemplate = require("../base_template")

class WellLogTemplate extends BaseTemplate{
    constructor(params = {}) {
        super()
        this.log_template_name = "default"
        this.well_log_header = {}
        this.tracks = {}
        this.log_border_padding = 20.0
        this.pick_lines = {}
        this.other_lines = Array(0)
        this.max_width = 1000.0
        this.uniform_scroll = true
        this.vertical_scale_numerator = 30
        this.div_id = "default_well_log"
        //Update template based on passed params
        this.handle_params(params)
    }
}
module.exports = WellLogTemplate