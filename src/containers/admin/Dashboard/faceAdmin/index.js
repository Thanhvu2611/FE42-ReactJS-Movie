import {
  Button,
  makeStyles,
  Menu,
  MenuItem,
  Typography,
  Box,
} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { PropTypes } from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { actSignOut } from '../../containers/Auth/module/actions';
import { TextTranslation } from '../../containers/Language/TextTranslation';

const useStyles = makeStyles((theme) => ({
  iconButton: {
    '&:hover': {
      backgroundColor: 'none',
    },
  },
  name: {
    paddingLeft: 5,
  },
  profileLink: {
    width: '100%',
    textAlign: 'center',
    color: theme.palette.text.primary,
    '&:hover': {
      textDecoration: 'none',
      color: theme.palette.text.primary,
    },
  },
  link: {
    color: theme.palette.secondary.main,
    fontSize: 12,
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  signInLink: {
    display: 'flex',
    alignItems: 'center',
  },
}));

export function NavbarUserInfo({ name }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    setAnchorEl(null);
    // Set isSignin false
    dispatch(actSignOut());
  };

  return (
    <>
      <Button
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
        className={classes.iconButton}
      >
        <AccountCircle />
        <Typography className={classes.name}>{name}</Typography>
      </Button>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        disableScrollLock={Boolean(true)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link className={classes.profileLink} to="/profile">
            <TextTranslation id="components.Navbar.Profile" />
          </Link>
        </MenuItem>
        <MenuItem onClick={handleSignOut}>
          <TextTranslation id="components.Navbar.SignOut" />
        </MenuItem>
      </Menu>
    </>
  );
}

export const NavbarUserInfoLink = ({ name }) => {
  const classes = useStyles();
  return (
    <Box marginY="5px">
      <Box display="flex" justifyContent="center" alignItems="center">
        <AccountCircle fontSize="large" />
        <Typography className={classes.name}>{name}</Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Link className={classes.link} to="/profile">
          <TextTranslation id="components.Navbar.Profile" />
        </Link>
      </Box>
    </Box>
  );
};

export const NavbarSignInLink = () => {
  const classes = useStyles();
  return (
    <Box display="flex" justifyContent="center" marginY="10px">
      <Link className={`${classes.signInLink} ${classes.link}`} to="/sign-in">
        <AccountCircle fontSize="large" />
        <Typography className={classes.name}>
          <TextTranslation id="components.Navbar.SignIn" />
        </Typography>
      </Link>
    </Box>
  );
};

NavbarUserInfo.propTypes = {
  name: PropTypes.any,
};

NavbarUserInfoLink.propTypes = {
  name: PropTypes.any,
};