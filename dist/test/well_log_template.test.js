const log_template = require('../well_log_templates/well_log_template');

test('default well log name is a property',  () => {
    expect(new log_template()).toHaveProperty("log_template_name")
})