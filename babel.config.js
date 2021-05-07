module.exports = function babelConfig(api) {
    api.cache(true);
    return {
        presets: [
            [`@babel/preset-env`, {'modules': false}],
            `@babel/preset-react`],
        "plugins": ["@babel/plugin-transform-runtime", "@babel/plugin-proposal-throw-expressions"],
        env: {
            test: {
                presets: [`@babel/preset-env`, `@babel/preset-react`]
            }
        }
    };
};
