import camelCase from "lodash/camelCase";

const requireModule = require.context(".", true, /\.js$/);
const modules = {};

requireModule.keys().forEach(fileName => {
    if (fileName === "./index.js") return;

    let moduleName = camelCase(fileName.replace(/(\.\/|\.js)/g, ""));

    moduleName = moduleName ? moduleName.replace(/index/gi, "") : moduleName;

    modules[moduleName] = {
        namespaced: true,
        ...requireModule(fileName)
    };
});

export default modules;