const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./tsconfig.json')

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  passWithNoTests: true,
  snapshotSerializers: ['jest-serializer-path'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}),
}
