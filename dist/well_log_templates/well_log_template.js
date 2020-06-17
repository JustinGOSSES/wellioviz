const BaseTemplate = require("../base_template")

class WellLogTemplate extends BaseTemplate{
    constructor(params = {}) {
        super()
        this.log_template_name = "default"
        this.well_log_header = {}
        this.header_height = 50.0
        this.tracks = {}
        this.log_border_padding = 20.0
        this.pick_lines = {}
        this.other_lines = Array(0)
        this.max_width = 1000.0
        this.uniform_scroll = true
        this.vertical_scale_numerator = 30
        this.log_max_depth = 20000.0
        this.log_min_depth = 0.0
        this.div_id = "default_well_log"
        this.units = "metric"
        this.depth_curve_name = "DEPT"
        //Update template based on passed params
        this.handle_params(params)
    }

    load_log(log_dict) {
        console.log('loading log into template')
        var tracks_with_data = {}
        for (let track in this.tracks){
            // Extract Data for each log and load into the track
            tracks_with_data[track] = this.tracks[track].load_log(log_dict)
        }
        // setup well log header
        this.well_log_header['WELL'] = this.get_well_name(log_dict['WELL INFORMATION BLOCK'])
        this.well_log_header['UWI'] = this.get_well_uwi(log_dict['WELL INFORMATION BLOCK'])
        // get depth limits
        this.log_max_depth = this.get_max_depth(log_dict['WELL INFORMATION BLOCK'])
        this.log_min_depth = this.get_min_depth(log_dict['WELL INFORMATION BLOCK'])
        this.depth_curve_name = this.get_depth_track_name(log_dict['CURVE INFORMATION BLOCK'])
        return this
    }

    draw(div_id) {
        let d3 = this.start_draw(div_id)
        let drawn_tracks;
        drawn_tracks = [];
        let counter = 0
        // Well Header
        this.draw_track_header(div_id)

        for (let track in this.tracks) {
            let curvebox_holder = d3.select("#" + div_id).append("div");
            curvebox_holder.style("vertical-align", "middle")
                .attr("id", div_id + "curvebox_holder" + i);
            // TODO Handle alias-ing of well name or a backup string of some kind
            let track_div_id = div_id + this.well_log_header['WELL'] + track + counter
            let drawn_template = this.tracks[track].draw(track_div_id)
            drawn_tracks.push(drawn_template)
            counter += 1
        }
        // TODO Handle non-track related drawing here


        // Draw Tops



        return drawn_tracks
        console.log('starting here')
    }

    draw_track_header(div_id){
        let svg_header = 'track_header' + div_id
        let svg_holder = d3.select("#" + div_id).append("div")
            .attr("class", "svg_holder")
            .style("overflow-x", "auto");
        svg_header = d3.select("#" + svg_header).append("svg");
        svg_header.attr("class", "header");

        // TODO: Compute Width of log before here
        svg_header.attr("width", width)
            .attr("height", this.header_height);
        svg_header.append("g");
        svg_header.style("display", "block");

        svg_header.append("text")
            .attr("x", (margin.left) / 2)
            .attr("y", "1em")
            .attr("text-anchor", "middle")
            .style("font-size", "10px")
            .style("text-decoration", "underline")
            .text(this.depth_curve_name); // TODO: Add units and such
    }

    get_depth_track_name(curve_info){
        return Object.keys(curve_info)[0]
    }

    get_well_name(well_info){
        return well_info['WELL']['DATA']
    }

    get_well_uwi(well_info){
        return well_info['UWI']['DATA']
    }

    get_max_depth(well_info) {
        return parseFloat(well_info['STRT']['DATA'])
    }

    get_min_depth(well_info) {
        return parseFloat(well_info['STOP']['DATA'])
    }
}
module.exports = WellLogTemplate