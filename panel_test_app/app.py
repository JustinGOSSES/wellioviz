import panel as pn


if __name__ == "__main__":

    #              css_files=['https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.1/mapbox-gl.css'])
    current_file = __file__.split('/')
    docs_files = current_file[:-2]
    main_dir = current_file[:-2]
    docs_files.append('docs')
    docs_path = '/'.join(docs_files)
    main_dir = '/'.join(main_dir)
    with open(docs_path + '/well_viz_html.html', 'r', encoding='utf-8') as html_file:
        index_html = html_file.read()
    pn.extension('d3', js_files={'wellio': main_dir + '/dist/index.js'})
    main_column = pn.Column(width=900)
    main_column.append(pn.panel(index_html))
    main_column.show()
