export default function formatCurrency(num: number, currency:"$" | "£" | "€" = "£") {
    return '$' + num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }