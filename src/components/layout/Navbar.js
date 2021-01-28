import React from 'react'
import "./Navbar.css"
import {Button} from '@material-ui/core';
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import Grow from "@material-ui/core/Grow";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const Navbar =() =>{
    const useStyles = makeStyles((theme) => ({
        root: {
            display: "flex"
        },
        paper: {
            marginRight: theme.spacing(2)
        }
    }));
    
    const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]); 
    return(
        <div>
        <div>
        <Button className="positionnav"
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
         <ArrowDropDownIcon/>
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                placement === "bottom" ? "center top" : "center bottom"
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem className="positionnavs" onClick={handleClose}>I'm feel so exhausted</MenuItem>
                  <MenuItem  className="positionnavs" onClick={handleClose}>Edit profile</MenuItem>
                  <MenuItem  className="positionnavs" onClick={handleClose}>Calendar</MenuItem>
                  <MenuItem  className="positionnavs" onClick={handleClose}>Groups</MenuItem>
                  <MenuItem  className="positionnavs" onClick={handleClose}>Friends</MenuItem>
                  <MenuItem  className="positionnavs" onClick={handleClose} >Log out</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Grow>
          )}
        </Popper>
      </div>
            
        </div>
    )
}
export default Navbar