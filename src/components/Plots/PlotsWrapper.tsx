import { Grid, Slider, Stack } from "@mui/material";
import { MAX_MONTHS } from "../../utils/initCalculator";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { changeMonths } from "../../redux/slises/calculator";
import { InvestmentsChart } from "./InvestmentsChart/InvestmentsChart";
import { GrowthChart } from "./GrowthChart/GrowthChart";

export function PlotsWrapper() {
  const months = useAppSelector((store) => store.calculator.monts);
  const dispatch = useAppDispatch();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <InvestmentsChart />
        <GrowthChart />
      </Grid>
      <Grid item xs={12}>
        <Stack spacing={2} direction="row" sx={{ m: 5 }} alignItems="center">
          <Slider
            size="small"
            aria-label="Small"
            valueLabelDisplay="auto"
            value={months}
            onChange={(_, value) => {
              const newValue = Array.isArray(value) ? value[0] : value;
              if (Number.isNaN(newValue)) return;
              dispatch(changeMonths(newValue));
            }}
            max={MAX_MONTHS}
            marks={[
              { value: 0, label: "0" },
              { value: MAX_MONTHS, label: MAX_MONTHS },
            ]}
          />
        </Stack>
      </Grid>
    </Grid>
  );
}
