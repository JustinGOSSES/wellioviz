const track_template = require('../track_templates/track_template');
const log_curve_template = require('../log_style_templates/log_curve_template');

let test_curve_data = [
    {'Depth': 1.0, 'RHOB': 1.0},
    {'Depth': 2.0, 'RHOB': 0.0},
    {'Depth': 3.0, 'RHOB': 1.0},
    {'Depth': 4.0, 'RHOB': 2.0},
]
let test_curve = new log_curve_template().set_curve_and_data('RHOB', test_curve_data)

test('default track name is a property',  () => {
    expect(new track_template()).toHaveProperty("track_name")
})

test('add curve works',  () => {
    expect(new track_template().add_curve(test_curve).curves['RHOB'].curve_name).toBe("RHOB")
})
