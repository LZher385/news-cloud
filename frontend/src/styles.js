import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // Navbar
  navbar: {
    background: "#F3F4FC",
  },
  toolbar: {},
  title: {
    fontWeight: "bold",
    color: "#012641",
    marginLeft: "1rem",
  },

  // Queriesform
  form: {
    textAlign: "center",
    height: "10vh",
  },
  formComponent: {
    margin: "0 3rem",
  },
  submitButton: {
    margin: "0 3rem",
  },
  queriesFormTitle: {
    margin: "5px",
  },
  typography: {
    padding: theme.spacing(2),
  },

  // WordCloud
  wordCloudOuterContainer: {
    background: "#422E75",
    width: "100%",
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  wordCloud: {
    //paddingTop: "5vh",
    //paddingBottom: "5vh",
    width: "90vw",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    overflow: "auto",
  },
  loading: {
    display: "flex",
    fontSize: 20,
    justifyContent: "center",
  },

  // KeywordData
  dialogContent: {
    background: "#422E75",
  },
  card: {
    margin: "10px 0",
  },
  cardImage: {
    height: "170px",
  },
}));
export default useStyles;
