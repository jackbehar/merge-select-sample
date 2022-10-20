module.exports = {
  components: {
    categories: [
      {
        name: 'Select Example',
        include: [
          'src/components/SelectSample/SelectSample.js',
          'src/components/SelectSampleOption/SelectSampleOption.js',
        ]
      },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: 'uxpin.webpack.config.js',
  },
  name: 'material-ui-uxpin'
};