import { useEffect, useRef } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { Chart } from "chart.js/auto";
import { growthDataSets } from "./growthDataSets";

export function GrowthChart() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const calculator = useAppSelector((store) => store.calculator);
  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current;
    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: new Array(calculator.monts).fill(null).map((_, i) => `${i}`),
        datasets: growthDataSets(calculator),
      },
    });
    return () => chart.destroy();
  }, [calculator]);
  return <canvas ref={canvasRef} id="growth-chart"></canvas>;
}
