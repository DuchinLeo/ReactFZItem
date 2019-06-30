// 引入 waepack基础配置属性
const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias
} = require('customize-cra');

const path = require('path');




module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),

  // 配置less
  addLessLoader(),

  // 配置路径的别名
  addWebpackAlias({
    '@': path.resolve(__dirname, './src')
  })
);
