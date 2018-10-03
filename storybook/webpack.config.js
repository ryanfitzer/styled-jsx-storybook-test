const path = require( 'path' );

module.exports = {
    module: {
        rules: [
            {
                test: /\.(jsx?|css)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    root: '../',
                    plugins: [
                        'styled-jsx/babel',
                        // https://github.com/tleunen/babel-plugin-module-resolver#readme
                        [ 'module-resolver',
                            {
                            // https://github.com/tleunen/babel-plugin-module-resolver/blob/master/DOCS.md#cwd
                                cwd: 'babelrc',
                                // https://github.com/tleunen/babel-plugin-module-resolver/blob/master/DOCS.md#alias
                                alias: {
                                    '@storybook': './storybook/node_modules/@storybook'
                                }
                            },
                            'storybook-settings'
                        ]
                    ]
                }
            },
            {
                test: /\.css$/,
                include: path.resolve( __dirname, '../' ),
                use: [
                    {
                        loader: require( 'styled-jsx/webpack' ).loader
                    }
                ]
            }
        ]
    }
};
