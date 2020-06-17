const well_section_template = require('../well_section_templates/well_section_templates');

test('default well section template is a property',  () => {
    expect(new well_section_template()).toHaveProperty("template_name")
})