import { IconButton, Input, InputAdornment, InputLabel } from "@mui/material";
import { EntryT } from "../../types/calculator";
import ClearIcon from "@mui/icons-material/Clear";
import { useAppDispatch } from "../../redux/hooks";
import { changeEntryValue, deleteEntry } from "../../redux/slises/calculator";

type EntryProps = {
  entry: EntryT;
};
export function Entry({ entry }: EntryProps) {
  const dispath = useAppDispatch();
  return (
    <>
      <InputLabel htmlFor="input-with-icon-adornment">{entry.type}</InputLabel>
      <Input
        id="input-with-icon-adornment"
        value={entry.value}
        name={entry.name}
        onChange={(e) => {
          const newValue = Number(e.target.value);
          if (Number.isNaN(newValue)) return;
          dispath(changeEntryValue({ ...entry, value: newValue }));
        }}
        endAdornment={
          <InputAdornment position="start">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => dispath(deleteEntry(entry.id))}
              edge="end"
            >
              {entry.name !== "remaining" ? <ClearIcon /> : null}
            </IconButton>
          </InputAdornment>
        }
      ></Input>
    </>
  );
}
