import { Box, Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import "./styles.css";

export default function App() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box my={2}>
          <TextField
            name="email"
            type="text"
            placeholder="jhonny@email.com"
            variant="outlined"
            className="input-field"
            inputRef={register({
              required: true,
              pattern: /\S+@\S+\.\S+/
            })}
          />
          <Box>
            {errors.email && errors.email.type === "required" && (
              <span className="error-message">This is required field</span>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <span className="error-message">Enter a valid email</span>
            )}
          </Box>
        </Box>
        <Box mb={2}>
          <TextField
            name="password"
            type="password"
            placeholder="Password"
            variant="outlined"
            className="input-field"
            inputRef={register({
              required: true,
              minLength: 4
            })}
          />
          <Box>
            {errors.password && errors.password.type === "required" && (
              <span className="error-message">This is required field</span>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <span className="error-message">
                Minimum characters 4 required
              </span>
            )}
          </Box>
        </Box>
        <Button
          color="primary"
          type="submit"
          variant="contained"
          className="submit-button"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
