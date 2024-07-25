import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { investmentsDataSets } from "./investmentsDataSets";

export function InvestmentsChart() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const calculator = useAppSelector((store) => store.calculator);
  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current;
    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: new Array(calculator.monts).fill(null).map((_, i) => `${i}`),
        datasets: investmentsDataSets(calculator),
      },
    });
    return () => chart.destroy();
  }, [calculator]);
  return <canvas ref={canvasRef} id="investments-chart"></canvas>;
}
