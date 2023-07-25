import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  rootRadio: {
    color: "default !important",
    "&.Mui-checked": {
      color: "#3330E4 !important",
    },
  },
  mainLabel: {
    color: "#06283D !important",
    fontFamily: "Poppins !important",
    fontWeight: "400 !important",
    fontSize: "22px !important",
    marginBottom: "15px",
  },
  main: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
}));
export default function QuizForm() {
  const [value, setValue] = React.useState("under");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <FormControl>
        <FormLabel
          id="demo-row-radio-buttons-group-label"
          className={classes.mainLabel}
        >
          2.Are You?*
        </FormLabel>
        <RadioGroup
          onChange={handleChange}
          value={value}
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="under"
            control={<Radio className={classes.rootRadio} />}
            label="Business Owner"
          />
          <FormControlLabel
            value="over"
            control={<Radio className={classes.rootRadio} />}
            label="Tax Professional"
          />
          <FormControlLabel
            value="unknow"
            control={<Radio className={classes.rootRadio} />}
            label="Beneficial Owner"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
