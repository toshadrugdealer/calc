import { v4 as uuidv4 } from "uuid";
import { CalculatorT } from "../types/calculator";

export const MAX_MONTHS = 120;

const income = [
  { id: uuidv4(), name: "Zarplata", value: 3000, type: "Зарплата" },
  { id: uuidv4(), name: "Podrabotka", value: 500, type: "Подработка" },
];
const fixedExpenses = [
  { id: uuidv4(), name: "Ipoteka", value: 500, type: "Ипотека" },
  { id: uuidv4(), name: "Podpiski", value: 10, type: "Подписки" },
];
const savings = [
  { id: uuidv4(), name: "Sberejeniya", value: 500, type: "Сбережения" },
];
const investments = [
  { id: uuidv4(), name: "Pokupka akciy", value: 300, type: "Покупка акций" },
];
const inflatingExpenses = [
  { id: uuidv4(), name: "Prodykty", value: 400, type: "Продукты" },
  { id: uuidv4(), name: "Fitnes", value: 50, type: "Фитнес" },
];

export const initCalculator: CalculatorT = {
  income,
  fixedExpenses,
  inflatingExpenses,
  savings,
  investments,
  remaining: {
    id: uuidv4(),
    name: "remaining",
    value: 3000 + 500 - 500 - 10 - 500 - 300 - 400 - 50,
    type: "Остаток",
  },
  monts: MAX_MONTHS,
  annualInflationRate: 0.12,
  annuaInvestmentRate: 0.15,
  annualIncomeIncreace: 0.05,
};
