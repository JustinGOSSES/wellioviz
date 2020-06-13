const DefaultSubTrack = require("./default_sub_track")
const GR = require("../log_style_templates/GR")
const CAL = require("../log_style_templates/CAL")

class CaliperGRTrack extends DefaultSubTrack {
    constructor(params = {}) {
        super(params);
        this.track_template_name = 'CAL_GR'
        this.div_id = 'cal_gr_track'
        this.title = {"text": "CAL - GR", "font": "16px"}
        this.curves = {'GR': new GR, 'CAL': new CAL}
        this.handle_params(params)
    }

}
module.exports = CaliperGRTrack