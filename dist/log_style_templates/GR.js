const LogCurveTemplate = require("./log_curve_template")

class GR extends LogCurveTemplate {
    constructor(params={}) {
        super(params);
        this.curve_name = "GR"
        this.fill = null // TODO: GR Fill
        this.units = "API"
        for (const [key, value] in Object.entries(params)){
            obj[key] = value
        }
    }
}
module.exports(GR)