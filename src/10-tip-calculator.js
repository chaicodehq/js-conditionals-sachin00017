/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {

  let tipMoney, totalBill;

  if (billAmount <= 0) {
    return null;
  }
  if (serviceRating < 1 || serviceRating > 5 || !Number.isInteger(serviceRating)) {
    return null;
  }
  let tipPercent = serviceRating * 5;
  tipMoney = (billAmount / 100) * tipPercent;
  totalBill = billAmount + tipMoney;
  return {
    tipPercentage: tipPercent,
    tipAmount: Number(tipMoney.toFixed(2)),
    totalAmount: Number(totalBill.toFixed(2))
  };
}





// if (serviceRating === 5) {
//   tipMoney = (billAmount / 100) * 25;
//   totalBill = billAmount + tipMoney;
//   return {
//     tipPercentage: 25,
//     tipAmount: tipMoney,
//     totalAmount: totalBill
//   };
// } else if (serviceRating === 4) {
//   tipMoney = (billAmount / 100) * 20;
//   totalBill = billAmount + tipMoney;
//   return {
//     tipPercentage: 20,
//     tipAmount: tipMoney,
//     totalAmount: totalBill
//   };
// } else if (serviceRating === 3) {
//   tipMoney = (billAmount / 100) * 15;
//   totalBill = billAmount + tipMoney;
//   return {
//     tipPercentage: 15,
//     tipAmount: tipMoney,
//     totalAmount: totalBill
//   };
// } else if (serviceRating === 2) {
//   tipMoney = (billAmount / 100) * 10;
//   totalBill = billAmount + tipMoney;
//   return {
//     tipPercentage: 10,
//     tipAmount: tipMoney,
//     totalAmount: totalBill
//   };
// } else if (serviceRating === 1) {
//   tipMoney = (billAmount / 100) * 5;
//   totalBill = billAmount + tipMoney;
//   return {
//     tipPercentage: 5,
//     tipAmount: tipMoney,
//     totalAmount: totalBill
//   };
// }
