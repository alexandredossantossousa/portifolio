const path = require("path")
module.exports = {
    mode:"development",
    entry:"./main.js",
    output:{
        path: path.resolve(__dirname, "src", "assets", "js"),
        filename:"bundle.js"
    },
    module:{
        rules:[{
            exclude:/node_modules/,
            test:/\.js$/,
            use:{
                loader:"babel-loader",
                options:{
                    presets:["@babel/env"]
                }
            }
        }]
    },
    devtool:"source-map"
}