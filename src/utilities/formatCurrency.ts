const CURRENCY_FORMATTER = new Intl.NumberFormat(
  undefined /* automatically determine format from where I am */,
  { currency: "EUR", style: "currency" }
);

export function formatCurrency(number_to_format: number) {
  return CURRENCY_FORMATTER.format(number_to_format);
}
