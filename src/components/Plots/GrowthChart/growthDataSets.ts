import { CalculatorT } from "../../../types/calculator";

export function growthDataSets(calculator: CalculatorT) {
  const {
    investments,
    monts,
    annuaInvestmentRate,
    fixedExpenses,
    inflatingExpenses,
    annualInflationRate,
    income,
    annualIncomeIncreace,
  } = calculator;

  const totalIncome = income.reduce((acc, entry) => acc + entry.value, 0);

  const newMonthlyInvestments = investments.reduce(
    (acc, entry) => acc + entry.value,
    0
  );
  const newMonthlyFixed = fixedExpenses.reduce(
    (acc, entry) => acc + entry.value,
    0
  );
  const newMonthlyInflating = inflatingExpenses.reduce(
    (acc, entry) => acc + entry.value,
    0
  );
  const montlyIncome: number[] = [totalIncome];
  const totalInvestedArr: number[] = [newMonthlyInvestments];
  const montlyGrowth: number[] = [0];
  const montlyExpenses: number[] = [newMonthlyFixed + newMonthlyInflating];
  const monthlyInflatingValues: number[] = [newMonthlyInflating];
  for (let index = 1; index < monts; index++) {
    const growth = totalInvestedArr[index - 1] * (annuaInvestmentRate / 12);
    montlyGrowth.push(growth);
    totalInvestedArr.push(
      totalInvestedArr[index - 1] + growth + newMonthlyInvestments
    );
    monthlyInflatingValues.push(
      monthlyInflatingValues[index - 1] * (1 + annualInflationRate / 12)
    );
    montlyExpenses.push(newMonthlyFixed + monthlyInflatingValues[index]);
    montlyIncome.push(
      montlyIncome[index - 1] * (1 + annualIncomeIncreace / 12)
    );
  }

  return [
    {
      label: "Ежемесячный рост инвестиции",
      data: montlyGrowth,
      borderWidth: 1,
    },
    {
      label: "Расходы",
      data: montlyExpenses,
      borderWidth: 1,
    },
    {
      label: "Зарплата",
      data: montlyIncome,
      borderWidth: 1,
    },
  ];
}
