class CurveFillTemplate {
    constructor(params={}) {
        this.curve_name = "default"
        this.fill = "no"
        this.fill_direction = "left"
        this.cutoffs = Array(0) // TODO should take values OR curve names
        this.fill_colors = Array(0)
        //Update template based on passed params
        for (const [key, value] in Object.entries(params)){
            obj[key] = value
        }
    }
}
module.exports = CurveFillTemplate