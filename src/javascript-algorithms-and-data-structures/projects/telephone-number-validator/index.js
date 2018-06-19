const telephoneCheck = (telephone) => {
  const countryCodeRegex = /(1\s?)?/
  const areaCodeRegex = /([0-9]{3}(\s|-)?|\([0-9]{3}\)\s?)/
  const centralOfficeCodeRegex = /[0-9]{3}(\s|-)?/
  const lineNumberRegex = /[0-9]{4}/
  const USTelephoneRegex = new RegExp(`^${countryCodeRegex.source}${areaCodeRegex.source}${centralOfficeCodeRegex.source}${lineNumberRegex.source}$`)

  return USTelephoneRegex.test(telephone)
}

export default telephoneCheck
