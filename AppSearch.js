import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Button,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel
} from "@material-ui/core";
import "./styles.css";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const handleChange = event => {
  setAge(event.target.value);
};

class AppSearch extends Component {
  render() {
    return (
      <div className="AppSearch">
        <h1>Bloc Recherche</h1>
        <Container maxWidth="sm">
          <FormControl variant="outlined">
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Aller-retour</em>
              </MenuItem>
              <MenuItem value={10}>
                <em>Aller-simple</em>
              </MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="outlined">
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>1 passager</em>
              </MenuItem>
              <MenuItem value={10}>
                <em>2 passagers</em>
              </MenuItem>
              <MenuItem value={20}>
                <em>2 passagers et 1 enfant</em>
              </MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="outlined">
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Classe économique</em>
              </MenuItem>
              <MenuItem value={10}>
                <em>Classe Affaires</em>
              </MenuItem>
              <MenuItem value={20}>
                <em>Première classe</em>
              </MenuItem>
            </Select>
          </FormControl>

          <form noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Départ" variant="outlined" />

            <TextField
              id="outlined-basic"
              label="Destination"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Date Départ"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Date Retour"
              variant="outlined"
            />
          </form>

          <Button variant="contained" color="primary">
            Rechercher
          </Button>
        </Container>
      </div>
    );
  }
}

export default AppSearch;
