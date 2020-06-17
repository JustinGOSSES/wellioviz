const WellLogTemplate =  require('../well_log_templates/well_log_template');
const CaliperGR_track = require("../track_templates/CaliperGR_track")
class TripleCombo extends WellLogTemplate {
    constructor(params= {}) {
        super(params);
        this.tracks = {
            'CAL_GR': new CaliperGR_track()
        }
        this.log_template_name = 'Triple Combination'
        this.handle_params(params)
    }
}
module.exports = TripleCombo