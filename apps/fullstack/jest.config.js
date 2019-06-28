module.exports = {
  name: 'fullstack',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/fullstack',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
