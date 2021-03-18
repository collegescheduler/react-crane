const flattenOptions = (options, allowSelectAll, allOption) => {
  if (!options) {
    return null
  }

  let flatOptions = []
  options.forEach((option) => {
    if (option.options && Array.isArray(option.options)) {
      flatOptions = flatOptions.concat(option.options)
    }
  })

  if (allowSelectAll && flatOptions && flatOptions.length > 0) {
    flatOptions.unshift(allOption)
  }

  return flatOptions && flatOptions.length > 0 ? flatOptions : options
}

export default flattenOptions
