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
}
module.exports(BaseTemplate)