import { Container, Grid, Typography } from "@mui/material";
import { CATEGORIES_WITH_TEXT } from "./types/calculator";
import { CategoruColumn } from "./components/CategoryColumn/CategoruColumn";
import { useAppSelector } from "./redux/hooks";
import { Entry } from "./components/Entry/Entry";
import { AddEntryModal } from "./components/AddEntryModal/AddEntryModal";
import { PlotsWrapper } from "./components/Plots/PlotsWrapper";

function App() {
  const entry = useAppSelector((store) => store.calculator.remaining);
  console.log(123);
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <PlotsWrapper />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {CATEGORIES_WITH_TEXT.map((category) => (
          <Grid key={category.value} item xs={4}>
            <CategoruColumn category={category.value} text={category.text} />
          </Grid>
        ))}
        <Grid key="remaining" item xs={4}>
          <Grid container>
            <Grid key="category remaining" item xs={12}>
              <Typography variant="body1">Остаток</Typography>
            </Grid>
            <Grid item xs={12} key={entry.id}>
              <Entry entry={entry} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <AddEntryModal />
    </Container>
  );
}

export default App;
