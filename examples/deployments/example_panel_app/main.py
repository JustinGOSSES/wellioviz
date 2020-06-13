from bokeh.plotting import curdoc
import panel as pn
print('in panel doc setup')
# pn.extension(
#         js_files={
#             # 'wellio': main_dir + '/dist/index.js',
#             # 'd3': 'https://d3js.org/d3.v5.min.js',
#             # 'wellioviz': main_dir + "/node_modules/wellioviz/dist/index.js",
#             # 'wellio': main_dir + "/docs/js/bundle.js",
#             # 'my_gist': "make_a_plot.js",
#             # 'my_test2': "./static/js/test_bokeh.js"
#         },
#         # css_file=main_dir + "../docs/css/main.css"
#     )

print('creating column')
main_column = pn.Column(width=900)
test_html = pn.panel('<h1> Hi select a log file! </h1>')
main_column.append(test_html)
main_column.append(pn.widgets.FileInput(accept='.LAS,.json,.las', name='File Input'))
main_column.append(pn.panel("<script> plot_log(\"current_log\") </script>"))
print('trying to add to doc')
main_column.servable()
doc = curdoc()
