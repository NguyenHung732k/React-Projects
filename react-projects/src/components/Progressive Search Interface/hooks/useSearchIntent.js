export default function useSearchIntent(query) {
  return {
    price: /\$\d+|under|above/i.test(query),
    brand: /(nike|adidas|apple)/i.test(query),
    color: /(red|blue|black|white)/i.test(query),
    rating: /\d\s?star/i.test(query),
  }
}