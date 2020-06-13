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

    load_log(log_dict) {
        console.log('loading log into template')
        var tracks_with_data = {}
        for (const [key, value] in Object.entries(this.tracks)){
            // Extract Data for each log and load into the track
            tracks_with_data[key] = track.load_log(log_dict)
        }
        // setup well log header

        return this
    }

    get_depth_track_name(curve_info){
        return Object.keys(curve_info)[0]
    }
}
module.exports = WellLogTemplate