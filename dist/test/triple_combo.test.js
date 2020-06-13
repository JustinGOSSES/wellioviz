let TripleCombo = require("../well_log_templates/triple_combo_template")
let wellio = require('wellio')
let log_test = wellio.loadLAS("./dist/test/test_assets/00-01-01-073-05W5-0.LAS")
let log = wellio.las2json(log_test)
test('default track name is a property',  () => {
    expect(new TripleCombo()).toHaveProperty("log_template_name")
})

test('load a log into triple combo template',  () => {
    expect(new TripleCombo().load_log(log).well_log_header['WELL']).toBe("CHEVRON MGSU 1 MITSUE 01-01")
})