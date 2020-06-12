const TrackTemplate = require("./track_template")

class DefaultSubTrack extends TrackTemplate {
    constructor(params = {}) {
        super(params);
        this.track_template_name = 'default'
        this.show_well_name = false
        this.show_depth_type = false
        this.independent_scale = false
        this.div_id = 'sub_track'
        for (const [key, value] in Object.entries(params)){
            obj[key] = value
        }
    }

}
module.exports = DefaultSubTrack