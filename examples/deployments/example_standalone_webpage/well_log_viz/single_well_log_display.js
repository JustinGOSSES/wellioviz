function renderCore(sfdata) {
    if ( resizing )
    {
        return;
    }

    console.log('Entering Render Core')

    // Extract the columns
    var columns = sfdata.columns;

    // Extract the data array section
    var chartdata = sfdata.data;

    // Extract the config section
    var config = sfdata.config;

    // count the marked rows in the data set, needed later for marking rendering logic
    var markedRows = 0;
    for ( var i = 0; i < chartdata.length; i++ )
    {
        if ( chartdata[i].hints.marked )
        {
            markedRows = markedRows + 1;
        }
    }
    // var width = window.innerWidth;
    // var height = window.innerHeight;
    singleWellDisplay("#js_chart")
}

function makeDisplayWithJson(rootNode, jsonFile, width, height) {
     d3.json(jsonFile).then(function(data){
        var template = make_curve_template(data);
        // var width = window.innerWidth;
        // var height = window.innerHeight;
        template['width'] = width;
        template['height'] = height;
        template['margin'] = {top: 40, right: 3, bottom: 100, left: 40};
        return CurveBox([template], rootNode)
    });

}

function singleWellDisplay(rootNode, config) {
    curve_template = make_curve_template(config);
    CurveBox(curve_template, rootNode);
}