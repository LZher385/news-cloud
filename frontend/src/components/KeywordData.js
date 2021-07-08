import React from "react";
import useStyles from "../styles";
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';


export default function KeywordData({ showKeywordModal, setShowKeywordModal, keywordObj }) {
  // const classes = useStyles();
  const { titles, urls, descriptions, urlToImages } = keywordObj;
  const open = showKeywordModal;
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>

      <Popover
        id={id}
        open={open}
        //anchorEl={keywordObj.currentTarget}  //this thing doesn't work
        onClose={() => setShowKeywordModal(false)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {titles.map((title, index) => {

          const [anchorEl, setAnchorEl] = React.useState(null);
          const handlePopoverOpen = (event) => {
            setAnchorEl(event.currentTarget);
            console.log('hovering')
          };

          const handlePopoverClose = () => {
            setAnchorEl(null);
          };

          const infoOpen = Boolean(anchorEl);

          return (
            <div>
              <a
              href={`${urls[index]}`}
              aria-owns={infoOpen ? 'mouse-over-popover' : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}>
                {title}
              </a>

              <Popover
              id="mouse-over-popover"
              open={infoOpen}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              onClose={handlePopoverClose}
              disableRestoreFocus>
                <h3>{title}</h3>
                <img alt={`${title}`} src={`${urlToImages[index]}`} />
                <div>{`${descriptions[index]}`}</div>
              </Popover>
              
            </div>
          );
        })}
      </Popover>
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
//   );
// };

