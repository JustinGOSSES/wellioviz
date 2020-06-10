function make_curve_template(data) {
    console.log('setting up template')
    let dataTable = data["data"];
    let columns = data["columns"];
    let config = data["config"];
    var output_data_table = [];
    var output_curve_templates = [];

    for (let i = 0; i < dataTable.length; i++) {
        var currentRow = {};
        for(let j = 0; j < columns.length; j++){
            currentRow[columns[j]] = dataTable[i]['items'][j]
        }
        output_data_table[i] = currentRow
    }
    var template = get_default_template(columns);
    template['data'] = output_data_table;
    return template
}

function get_default_template(columns) {
    let colorsList = ['black', 'red', 'blue', 'pink', 'grey', 'purple', 'green'];
    var templateOutput = {};
    if (columns.length > 2) {
        var multiLines = 'yes';
    } else {
        var multiLines = 'no';
    }
    var curvenames = [];
    var colors = [];
    var fills = [];
    var counter = 0;
    for(let i = 0; i < columns.length; i++){
        if (columns[i].toLowerCase().includes('depth')){
            var depthColName = columns[i];
        }
        else {
            curvenames[counter] = columns[i];
            colors[counter] = colorsList[counter];
            fills[counter] = get_fill_for_curve(columns[i])
            counter += 1;
        }
    }
    templateOutput['multipleLines'] = multiLines;
    templateOutput['curveNames'] = curvenames;
    templateOutput['curveColors'] = colors;
    templateOutput['fill'] = fills;
    templateOutput['depth_curve_name'] = depthColName;
    return templateOutput
}

function get_fill_for_curve(curve) {
    var fillObj = {};
    fillObj['curveName'] = curve;
    fillObj['cutoffs'] = Array(0);
    fillObj['fillDirection'] = 'left';
    fillObj['curve2'] = "";
    if(curve.toLowerCase().includes('gr')) {
        console.log('GR log');
        fillObj['fill'] = "yes";
        fillObj['fillColors'] = ['orange'];
    } else if(curve.toLowerCase().includes('dphi')) {
        console.log('DPHI log');
        fillObj['fill'] = "no";
        fillObj['fillColors'] = Array(0);
    } else if(curve.toLowerCase().includes('pef')) {
        console.log('pef log');
        fillObj['fill'] = "no";
        fillObj['fillColors'] = Array(0);
    } else {
        console.log('Other');
        fillObj['fill'] = "no";
        fillObj['fillColors'] = Array(0);
    }
    return fillObj
}