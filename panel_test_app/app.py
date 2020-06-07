import panel as pn


if __name__ == "__main__":


    current_file = __file__.split('/')
    docs_files = current_file[:-2]
    main_dir = current_file[:-2]

    docs_files.append('docs')
    docs_path = '/'.join(docs_files)
    main_dir = '/'.join(main_dir)
    css_file = main_dir + '/docs/css/main.css'
    with open('panel_idx.html', 'r', encoding='utf-8') as html_file:
        index_html = html_file.read()
    pn.extension(js_files={
         'd3': "https://d3js.org/d3.v5.min.js",
         'wellio': main_dir + '/dist/index.js',
         'vkbeautify': main_dir + "/docs/js/vkbeautify.js",
         'wellioviz':  main_dir + "/node_modules/wellioviz/dist/index.js",
         'make_a_plot': main_dir + '/panel_test_app/make_a_plot.js',
         'g3': main_dir + 'dist/index.js',
         'g3p2': main_dir + '/docs/js/call_plots.js',
         'main': main_dir + '/docs/js/main.js"',
         'las_to_json': main_dir + '/docs/js/bundle.js'
        },

        css_file=css_file
                 )
    main_column = pn.Column(width=900)
    main_column.append(pn.pane.HTML(index_html))
    main_column.show()
