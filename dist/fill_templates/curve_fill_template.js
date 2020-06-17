const BaseTemplate = require("../base_template")

class CurveFillTemplate extends BaseTemplate{
    constructor(params={}) {
        super();
        this.curve_name = "default"
        this.fill = "no"
        this.fill_direction = "left"
        this.cutoffs = Array(0) // TODO should take values OR curve names
        this.fill_colors = Array(0)
        //Update template based on passed params
        this.handle_params(params)
    }
}
module.exports = CurveFillTemplate