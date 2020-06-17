const LogCurveTemplate = require("./log_curve_template")

class CAL extends LogCurveTemplate {
    constructor(params={}) {
        super(params);
        this.curve_name = "CAL"
        this.units = "cm"
        this.stroke_type = "dash" // TODO Warning! This might not be a thing haha
        this.handle_params(params)
    }
}
module.exports = CAL