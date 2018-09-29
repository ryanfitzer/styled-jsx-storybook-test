module.exports = {
  webpack: ( config, { defaultLoaders } ) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    config.module.rules.push(
      {
        test: /\.css$/,
        use: [
          defaultLoaders.babel,
          {
            loader: require( 'styled-jsx/webpack' ).loader
          }
        ]
      }
    );

    return config
  }
}
