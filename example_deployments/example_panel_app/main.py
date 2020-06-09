from bokeh.plotting import curdoc
from bokeh.models import Button, CustomJS
from bokeh.application.handlers.directory import DirectoryHandler
import panel as pn

pn.extension(
        js_files={
            # 'wellio': main_dir + '/dist/index.js',
            # 'd3': 'https://d3js.org/d3.v5.min.js',
            # 'wellioviz': main_dir + "/node_modules/wellioviz/dist/index.js",
            # 'wellio': main_dir + "/docs/js/bundle.js",
            # 'my_gist': "make_a_plot.js",
            # 'my_test2': "./static/js/test_bokeh.js"
        },
        # css_file=main_dir + "../docs/css/main.css"
    )
with open('panel_idx.html', 'r', encoding='utf-8') as html_file:
    index_html = html_file.read()
main_column = pn.Column(width=900)
main_column.append(pn.panel(index_html))
curdoc().append(main_column)

# button = Button(label='Click Me')
# button.callback = CustomJS(code=""" alert($) """)
#
# curdoc().add_root(button)
