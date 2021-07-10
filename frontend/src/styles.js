import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navbar: {
    background: "#F3F4FC",
  },
  toolbar: {},
  title: {
    fontWeight: "bold",
    color: "#012641",
    marginLeft: "1rem",
  },
  form_component: {
    //margin: "3rem",
  },
  typography: {
    padding: theme.spacing(2),
  },
  wordCloudOuterContainer: {
    background: "#422E75",
    width: "100%",
    height: "75vh",
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
    display:'flex',
    fontSize:20,
    justifyContent:'center',
  }
}));
export default useStyles;
