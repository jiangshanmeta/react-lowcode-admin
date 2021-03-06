/* eslint-disable @typescript-eslint/no-var-requires */
const { override, fixBabelImports } = require('customize-cra')
const { alias, configPaths } = require('react-app-rewire-alias')

module.exports = override(
    alias(configPaths('./tsconfig.paths.json')),
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css'
    })
)
