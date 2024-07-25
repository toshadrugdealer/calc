export type EntryT = {
  id: string;
  value: number;
  type: string;
  name: string;
};
export const CATEGORIES = [
  "income",
  "fixedExpenses",
  "inflatingExpenses",
  "savings",
  "investments",
] as const;

export const CATEGORIES_WITH_TEXT = [
  { value: "income", text: "Доходы" },
  { value: "fixedExpenses", text: "Фикс расходы" },
  { value: "inflatingExpenses", text: "Растущие расходы" },
  { value: "savings", text: "Сбережения" },
  { value: "investments", text: "Инвестиции" },
] as const;
export type CategoryT = (typeof CATEGORIES)[number];
export type CalculatorT = {
  monts: number;
  income: EntryT[];
  fixedExpenses: EntryT[];
  inflatingExpenses: EntryT[];
  savings: EntryT[];
  investments: EntryT[];
  remaining: EntryT;
  annualInflationRate: number;
  annuaInvestmentRate: number;
  annualIncomeIncreace: number;
};
export function keyIsArrayCategory(key: string): key is CategoryT {
  return CATEGORIES.includes(key as CategoryT);
}
