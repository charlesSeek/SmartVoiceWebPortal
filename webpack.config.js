var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const VENDOE_LIBS = [
	'antd','lodash','redux','react-redux','react-dom','react-input-range',
	'redux-form','redux-thunk','react','react-social-icons','react-burger-menu',
  'react-router'
];

module.exports = {
  entry: {
  	bundle:'./src/index.js',
  	vendor:VENDOE_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module:{
  	rules:[
  		{
  			use:'babel-loader',
  			test:/\.js$/,
  			exclude:/node_modules/

  		},
  		{
  			loader: ExtractTextWebpackPlugin.extract({
          loader:'css-loader'
        }),
  			test:/\.css$/
  		},
      {
        use:[
          {
            loader:'file-loader',
            options:{
              name:'[hash].[ext]'
            }
          },
          'image-webpack-loader'
        ],
        test:/\.(gif|png|jpe?g|svg|pdf)$/
      }
  	]
  },
  plugins:[
  	new webpack.optimize.CommonsChunkPlugin({
  		name:'vendor'
  	}),
  	new HtmlWebpackPlugin({
  		template:'src/index.html'
  	}),
    new ExtractTextWebpackPlugin('style.css')
  ]
};
