const fill_template = require('../fill_templates/curve_fill_template');

test('default fill curve template curve_name is a property',  () => {
    expect(new fill_template()).toHaveProperty("curve_name")
})
