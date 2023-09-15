const miniCssExtraxtPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry:{
        index: './src/index.js'
    },
    mode:'development',
    module:{
        rules:[
            {
                test:/\.css$/,
                use: [miniCssExtraxtPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins:[
      new miniCssExtraxtPlugin()
    ]
}