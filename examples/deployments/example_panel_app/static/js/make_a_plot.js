async function plot_log(div_id) {
    let ShaleSiltCutOff = 80
    let SiltSandCutOff = 55
    var fileUrltoWellLog = "https://gist.githubusercontent.com/JustinGOSSES/2685e588d5c2f2a0ba1591ec7b9c9421/raw/415fe8a2f27dc7621f06f60ffd40a62c0d55a0f0/00-01-01-095-19W4-0.las"
    var fetched = await fetch(fileUrltoWellLog)
    var well_as_string = await fetched.text()
    var well_json_01_01_095_19W4 = wellio.las2json(well_as_string)
    let depth_curve_name = "DEPT"
    let three_things_2 = wellioviz.fromJSONofWEllGetThingsForPlotting(well_json_01_01_095_19W4, depth_curve_name)
    let curve_names2 = Array(6) ["DEPT", "GR", "CALI", "NPHI", "DPHI", "ILD"]
    let uwi2 = "00/01-01-095-19W4/0"
    let well_log_curves_reformatted_for_d3_2 = three_things_2["well_log_curves_reformatted_for_d3"]
    var example_template = wellioviz.curveBoxTemplateExamples("example")
    var gr_plot_template_noFill = wellioviz.minimumDataIntoTemplateFunc(example_template, well_log_curves_reformatted_for_d3_2, [uwi2], ["CALI"], ["black"], [""], [
        {
            "curve_name": "GR",
            "fill": "no",
            "fill_direction": "left",
            "cutoffs": [0, ShaleSiltCutOff, SiltSandCutOff],
            "fill_colors": ["gray", "orange", "yellow"],
            "curve2": ""
        }], "well_holder_1A", 200, 700, "DEPT")
    var resd_plot_template_1 = wellioviz.minimumDataIntoTemplateFunc(example_template, well_log_curves_reformatted_for_d3_2, [uwi2], ['ILD'], ["RED"], [""], [
        {
            "curve_name": "ILD",
            "fill": "yes",
            "fill_direction": "left",
            "cutoffs": [5, 10, 25],
            "fill_colors": ["#ffe6e6", "#ffb3b3", "red"],
            "curve2": "ILD"
        }], "well_holder_1B", 200, 700, "DEPT")
    var poro_plot_template_1 = wellioviz.minimumDataIntoTemplateFunc(example_template, well_log_curves_reformatted_for_d3_2, [uwi2], ["NPHI", "DPHI"], ["purple", "pink"], [""], [{
        "curve_name": "NPHI",
        "fill": "yes",
        "fill_direction": "between",
        "cutoffs": [0],
        "fill_colors": ["lightblue"],
        "curve2": "DPHI"
    },
        {
            "curve_name": "DPHI",
            "fill": "no",
            "fill_direction": "left",
            "cutoffs": [],
            "fill_colors": [],
            "curve2": ""
        }
    ], "well_holder_1C", 200, 700, "DEPT")
    var gr_plot_template_1 = wellioviz.minimumDataIntoTemplateFunc(example_template, well_log_curves_reformatted_for_d3_2, [uwi2], ["GR"], ["black"], [""],
        [{
            "curve_name": "GR",
            "fill": "yes",
            "fill_direction": "right",
            "cutoffs": [0, ShaleSiltCutOff, SiltSandCutOff],
            "fill_colors": ["yellow", "orange", "gray"],
            "curve2": ""
        }], "well_holder_1D", 200, 700, "DEPT")
    wellioviz.multipleLogPlot(div_id, [gr_plot_template_noFill, gr_plot_template_1, resd_plot_template_1, poro_plot_template_1], true)
}