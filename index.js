const {deepStrictEqual} = require("assert")
, result = Object.fromEntries(
  Object.entries(process.env)
  .filter(e => e[0].includes("_package_config_"))
)

deepStrictEqual(result, {
  npm_package_config_array_0: 'item1',
  npm_package_config_array_1: 'item2',
  npm_package_config_array_2: 'item3'
})
