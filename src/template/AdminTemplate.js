import React, { Fragment } from "react";
import { NavLink, Link, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import ListItemText from "@material-ui/core/ListItemText";
import { userLogin } from "../services/config/setting";
import { dangXuatAction } from "../containers/admin/auth/modules/actions";
import { FormatBoldRounded } from "@material-ui/icons";
import Popper from "@material-ui/core/Popper";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { Button, MenuList } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import styled from "styled-components";

const DivIconButton = styled.div`
  .MuiIconButton-root {
    border-radius: 0;
  }
`;
const DivList = styled.div`
  .MuiListItemText-root span {
    font-size: 18px;
    font-weight: 600;
    transition: all 0.5s;
  }
  span:hover {
    color: #108f3e;
  }
`;

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,

    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function AdminLayout(props) {
  let userName = JSON.parse(localStorage.getItem("userName"));
  let userAdmin = JSON.parse(localStorage.getItem("userAdmin"));

  //console.log(userName);
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen1((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen1(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  //Avatar
  const [open1, setOpen1] = React.useState(false);
  const user = useSelector((state) => state.authReducer.user);

  //console.log(user);
  const dispatch = useDispatch();

  const LogOut = () => {
    dispatch(dangXuatAction());
  };

  const renderLogin = () => {
    const { taiKhoan } = userAdmin;
    if (userName) {
      return (
        <Fragment>
          <div
            className="login_link"
            ref={anchorRef}
            aria-controls={open1 ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            style={{
              cursor: "pointer",
              zIndex: "1000000",
              position: "absolute",
              top: 2,
              right: 5,
            }}
          >
            <img
              className="mx-auto"
              src="/img/logo/user.png"
              alt="user"
              style={{ width: 45, height: 45, borderRadius: 50 }}
            />
            <span className="login__text mx-auto">Hi! {userName}</span>
          </div>
          <Popper
            open={open1}
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
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open1}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={handleClose}>
                        <Link to={`/admin/adduser/${taiKhoan}`}>
                          <i className="fa fa-user mr-1"></i>
                          Cập Nhật Thông Tin
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={LogOut}>
                        <i className="fa fa-sign-out-alt mr-1">Logout</i>
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Fragment>
      );
    }
  };

  return (
    <Fragment>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
          style={{
            zIndex: "100",
          }}
        >
          <Toolbar style={{ backgroundColor: "rgba(50,50,50,0.9)" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h7" noWrap>
              <NavLink
                to="/admin/movie"
                className="logo"
                style={{ textDecoration: "none" }}
              >
                {/* <img
                  src="/img/logo/logo.jpg"
                  alt="logo"
                  style={{ width: 50, height: 50, borderRadius: "50% " }}
                /> */}
                <span
                  style={{
                    fontFamily: '"Staatliches", cursive',
                    color: "#60c5ef",
                    fontSize: "1.5rem",
                  }}
                >
                  Cyber Admin
                </span>
              </NavLink>
            </Typography>
            <Typography style={{ align: "right" }}>{renderLogin()}</Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
          style={{
            zIndex: "99",
          }}
        >
          <div className={classes.toolbar}>
            <DivIconButton>
              <IconButton onClick={handleDrawerClose} className="header">
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
                <span>Dashboard</span>
              </IconButton>
            </DivIconButton>
          </div>
          <Divider />
          <DivList>
            <List>
              <NavLink
                to="/admin/movie"
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItem button key="Quản lý phim">
                  <LocalMoviesIcon style={{ marginRight: 32 }} />
                  <ListItemText primary="Quản lý phim" />
                </ListItem>
              </NavLink>
              <NavLink
                to="/admin/user"
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItem button key="Thành viên">
                  <PeopleAltIcon style={{ marginRight: 32 }} />
                  <ListItemText primary="Thành viên" />
                </ListItem>
              </NavLink>
            </List>

            <Divider />
            <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
              <ListItem button key="Về trang chủ">
                <ExitToAppIcon style={{ marginRight: 32 }} />
                <ListItemText primary="Về trang chủ" />
              </ListItem>
            </NavLink>
          </DivList>
        </Drawer>
        <main
          className={classes.content}
          style={{ padding: "0px", paddingTop: "80px", paddingLeft: "250px" }}
        >
          <div className={classes.toolbar} />
          <Typography paragraph>{props.children}</Typography>
        </main>
      </div>
    </Fragment>
  );
}

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        if (localStorage.getItem("userAdmin")) {
          return (
            <AdminLayout>
              <Component {...propsComponent} />
            </AdminLayout>
          );
        }
        return <Redirect to="/auth" />;
      }}
    />
  );
}

// function AdminLayout(props) {
//   return (
//     <div className="row">
//       <div className="col-sm-2">
//         <Dashboard />
//       </div>
//       <div className="col-sm-10">
//         {props.children}
//       </div>
//     </div>
//   )
// }

// export default function AdminTemplate({ Component, ...props }) {
//   return (
//     <div>
//       <Route
//         {...props}
//         render={propsComponent => {
//           if (localStorage.getItem("userAdmin")) {
//             return (
//               <AdminLayout>
//                 <Component {...propsComponent} />
//               </AdminLayout>
//             );
//           }
//           return <Redirect to="/auth" />
//         }}
//       />
//     </div>
//   )
// }
