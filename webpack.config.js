const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'bipsin',
    projectName: 'demo-page2',
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    devServer: {
      allowedHosts: 'all',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
    // modify the webpack config however you'd like to by adding to this object
  });
};
