export default function formatCurrency(num: number, currency:"$" | "£" | "€" = "£") {
    return currency + num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }