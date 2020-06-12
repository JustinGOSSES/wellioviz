const log_curve_template = require('../log_style_templates/log_curve_template');
let test_curve_data_1 = [
    {'Depth': 0.0, 'Default': 1.0},
    {'Depth': 1.0, 'Default': 0.0},
    {'Depth': 2.0, 'Default': 1.0},
    {'Depth': 4.0, 'Default': 2.0},
]

let test_curve_data_2 = [
    {'Depth': 1.0, 'RHOB': 1.0},
    {'Depth': 2.0, 'RHOB': 0.0},
    {'Depth': 3.0, 'RHOB': 1.0},
    {'Depth': 4.0, 'RHOB': 2.0},
]

test('default log curve template name is a property',  () => {
    expect(new log_curve_template()).toHaveProperty("curve_name")
    })


test('test define data function', () => {
    expect(new log_curve_template().define_data(test_curve_data_1).data[0]['Depth']).toBeLessThan(0.5)
})

test('test define curve and data function', () => {
    expect(new log_curve_template().set_curve_and_data(
        'RHOB', test_curve_data_2).data[0]['Depth']).toBeGreaterThan(0.5)
})
