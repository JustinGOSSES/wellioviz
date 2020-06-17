const LogCurveTemplate = require("./log_curve_template")

class GR extends LogCurveTemplate {
    constructor(params={}) {
        super(params);
        this.curve_name = "GR"
        // this.fill = null // TODO: GR Fill
        this.units = "API"
        this.handle_params(params)
    }
}
module.exports = GR