/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig')

module.exports = {

  preset: 'ts-jest',

  // 自动清除mock
  clearMocks: true,

  // 开启覆盖率
  collectCoverage: true,
  // 指定生成覆盖率报告文件存放位置
  coverageDirectory: 'coverage',
  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',
  // moduleDirectories: ['node_modules', 'src']
  /* moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  } */
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/'
  })
}
