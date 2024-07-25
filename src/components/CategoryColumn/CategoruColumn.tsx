import { Grid, IconButton, Typography } from "@mui/material";
import { CategoryT } from "../../types/calculator";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Entry } from "../Entry/Entry";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { openModal } from "../../redux/slises/modal";

type CategoryColumnProps = {
  category: CategoryT;
  text: string;
};
export function CategoruColumn({ category, text }: CategoryColumnProps) {
  const entries = useAppSelector((store) => store.calculator[category]);
  const dispatch = useAppDispatch();
  return (
    <Grid container>
      <Grid key={`category ${category}`} item xs={12}>
        <Typography variant="body1">{text}</Typography>
      </Grid>
      {entries.map((entry) => (
        <Grid
          sx={{ marginBottom: "10px", marginTop: "5px" }}
          item
          xs={12}
          key={entry.id}
        >
          <Entry entry={entry} />
        </Grid>
      ))}
      <Grid key={`add ${category}`} item xs={12}>
        <IconButton
          aria-label="toggle password visibility"
          onClick={() => dispatch(openModal(category))}
          edge="end"
        >
          <AddCircleIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}
