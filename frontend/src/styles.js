import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navbar: {
    background: "#F3F4FC",
  },
  title: {
    fontWeight: "bold",
    color: "#012641",
  },
  form_component: {
    //margin: "3rem",
  },

  typography: {
    padding: theme.spacing(2),
  },
}));
export default useStyles;
