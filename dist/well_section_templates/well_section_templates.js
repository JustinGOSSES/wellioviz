let BaseTemplate = require("../base_template");

class WellSectionTemplate extends BaseTemplate{
    constructor(params={}) {
        super()
        this.template_name = 'default'
        this.well_section_header = {}
        this.uniform_scale = true
        this.use_uniform_padding = true
        this.padding = 50.0
        this.uniform_scroll = true
        this.horizontal_scale_numerator = 100
        this.vertical_scale_numerator = 50
        this.log_template_to_use = null // TODO: Fill this in??
        this.well_data = Array(0)
        this.div_id = "well_section_default"
        //Update template based on passed params
        this.handle_params(params)
    }

}

module.exports = WellSectionTemplate