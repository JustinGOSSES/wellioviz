class BaseTemplate {
    constructor(params={}) {
        this.handle_params(params)
    }

    handle_params(params) {
        for (const [key, value] in Object.entries(params)){
            this[key] = value
        }
        return this
    }

    start_draw(div_id){
        let d3 = module.exports.d3;
        let noDIV = d3.select("#" + div_id).selectAll("div").remove();
        let noSVG = d3.select("#" + div_id).selectAll("svg").remove();
        return d3
    }
}
module.exports = BaseTemplate