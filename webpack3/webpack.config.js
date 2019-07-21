const path = require('path')
module.exports = {
  entry: './app/index.js', // ����ļ�
  output: {
    path: path.resolve(__dirname, 'build'), // ����ʹ�þ��Ե�ַ������ļ���
    filename: "bundle.js" // ���������ļ����ļ���
  },
  module: {
    rules: [
      {
        // js 文件才使用 babel
        test: /\.js$/,
        // 使用哪个 loader
        use: 'babel-loader',
        // 不包括路径
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  }
}

