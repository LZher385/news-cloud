import React from "react";
import useStyles from "../styles";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";

export default function KeywordData({
  showKeywordModal,
  setShowKeywordModal,
  keywordObj,
}) {
  const classes = useStyles();
  const { titles, urls, descriptions, urlToImages, keyword } = keywordObj;
  const open = showKeywordModal;

  return (
    <div>
      <Dialog open={open}>
        <DialogTitle id="scroll-dialog-title">{keyword}</DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
            {titles.map((title, index) => {
              return (
                <Card className={classes.card}>
                  <CardContent>
                    <CardMedia
                      className={classes.cardImage}
                      image={`${urlToImages[index]}`}
                      title={`${title}`}
                    />
                    <Typography>
                      <Link href={`${urls[index]}`} color="blue">
                        {title}
                      </Link>
                    </Typography>
                    <Typography>{`${descriptions[index]}`}</Typography>
                  </CardContent>
                </Card>
              );
            })}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowKeywordModal(false)} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

// import React from 'react';
// import Popover from '@material-ui/core/Popover';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   popover: {
//     pointerEvents: 'none',
//   },
//   paper: {
//     padding: theme.spacing(1),
//   },
// }));

// export default function MouseOverPopover() {
//   const classes = useStyles();
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handlePopoverOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handlePopoverClose = () => {
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);

//   return (
//     <div>
//       <Typography
//         aria-owns={open ? 'mouse-over-popover' : undefined}
//         aria-haspopup="true"
//         onMouseEnter={handlePopoverOpen}
//         onMouseLeave={handlePopoverClose}
//       >
//         Hover with a Popover.
//       </Typography>
//       <Popover
//         id="mouse-over-popover"
//         open={open}
//         anchorEl={anchorEl}
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'left',
//         }}
//         transformOrigin={{
//           vertical: 'top',
//           horizontal: 'left',
//         }}
//         onClose={handlePopoverClose}
//         disableRestoreFocus
//       >
//         <Typography>I use Popover.</Typography>
//       </Popover>
//     </div>
//   );
// }

// const KeywordData = ({ showKeywordModal, setShowKeywordModal, keywordObj }) => {
//   const classes = useStyles();

//   const { keyword, titles, urls, descriptions, urlToImages } = keywordObj;

//   return (
//     <div>
//       <button onClick={() => setShowKeywordModal(false)}>Close</button>
//       {titles.map((title, index) => {
//         return (

//           <div>
//             <a href={`${urls[index]}`}>{title}</a>
//             <img alt={`${title}`} src={`${urlToImages[index]}`} />
//             <div>{`${descriptions[index]}`}</div>
//           </div>
//         );
//       })}
//     </div>
