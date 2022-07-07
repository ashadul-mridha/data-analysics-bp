import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from "@mui/material";
import { useForm } from "react-hook-form";
import useContextHook from "../../hooks/useContext";

export default function StepOne({ nextFormStep }) {
  const { setFormValues } = useContextHook();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setFormValues(data);
    nextFormStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Grid container py={2}>
          <Grid lg={6}>
            <Typography sx={{fontSize: '2rem', color: '#000'}} variant="h4">Hello</Typography>
            <TextField
            sx={{
              fontWeight: 700,
              fontSize: 2,
            }}
              fullWidth={true}
              size={"learge"}
              color={"primary"}
              id="standard-basic"
              label="Frist Name"
              variant="standard"
            />
          </Grid>
          <Grid lg={6}>
            <TextField
              fullWidth={true}
              id="standard-basic"
              label="Last Name"
              variant="standard"
            />
          </Grid>
          <Grid lg={6}>
            <TextField
              fullWidth={true}
              id="standard-basic"
              label="Phone"
              variant="standard"
            />
          </Grid>
          <Grid lg={6}>
            <TextField
              fullWidth={true}
              id="standard-basic"
              label="Email"
              variant="standard"
            />
          </Grid>
          <Grid lg={6}>
            <TextField
              fullWidth={true}
              id="standard-basic"
              label="Busniess Name"
              variant="standard"
            />
          </Grid>
          <Grid lg={6}>
            <TextField
              fullWidth={true}
              id="standard-basic"
              label="Busniess Industry"
              variant="standard"
            />
          </Grid>
          <Grid lg={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid lg={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Roll</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Container>

      <input type="submit" />
    </form>
  );
}
