function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};
  let income_current_year = `income-${getCurrentYear()}`
  let gdp_current_year = `gdp-${getCurrentYear()}`
  let capita_current_year = `capita-${getCurrentYear()}`

  budget[income_current_year] = income;
  budget[gdp_current_year] = gdp;
  budget[capita_current_year] = capita;

  return budget;
}
