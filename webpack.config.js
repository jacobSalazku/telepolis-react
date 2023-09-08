const path = require('path');
const globImporter = require('node-sass-glob-importer');
module.exports = {
  // Other Webpack configuration settings

  entry:  './src/app.js',
    
  output: {
    // Your output settings
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/, // This rule applies to .css files
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/, // This rule applies to .scss and .sass files
        use: [
          'style-loader',
          'css-loader',
          // import sass files //  interpered .scss fomes
          { loader :'sass-loader',
            options:{
                sassOptions: {
                    importer:globImporter()
                }
            }
          } 
        ],
      },
      {
        test: /\.(jpg|png|gif|svg)$/, // This rule applies to image files
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/', // Adjust the output path as needed
          },
        },
      },
    ],
  },
};