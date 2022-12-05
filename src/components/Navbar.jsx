import { AppBar, Avatar, Badge, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { Mail, Notifications, SettingsPower } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    tooBar: {
        display: "flex",
        justifyContent: 'space-between',
        backgroundColor: '#172242',
        border: "1px solid #14213d"
    },
    logoLg: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    },
    logoSm: {
        display: "block",
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    icons: {
        display: "flex",
        alignItems: "center"
    },
    badge: {
        marginRight: theme.spacing(2),
    },
    logout: {
        marginLeft: theme.spacing(1),
        cursor: "pointer"
    },
    logo: {
        width: "40px",
        height: "40px",
        borderRadius: '50%'
    }
}));

const Navbar = () => {

    const classes = useStyles();

    const logo = './logo.png';

    return (
        <>
            <AppBar position="fixed">
                <Toolbar className={classes.tooBar}>
                    <Typography variant="h6" component="h6" className={classes.logoLg}>
                        <img className={classes.logo} src={logo ? logo : <i className="fa fa-spinner fa-pulse"></i>} alt="Logo" /> ONYO-BT SUR
                    </Typography>
                    <Typography variant="h6" component="h2" className={classes.logoSm}>
                        <img className={classes.logo} src={logo ? logo : <i className="fa fa-spinner fa-pulse"></i>} alt="Logo" /> ONYO-BT SUR
                    </Typography>
                    <div className={classes.icons}>
                        <Badge badgeContent={4} color="secondary" overlap="rectangular" className={classes.badge}>
                            <Mail />
                        </Badge>
                        <Link to='/annonces'>
                            <Badge badgeContent={"6"} overlap="rectangular" style={{ color: "#fff" }} color="secondary" className={classes.badge}>
                                <Notifications />
                            </Badge>
                        </Link>
                        <Avatar style={{ backgroundColor: "#555" }} src="s" />
                        <SettingsPower className={classes.logout} />
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;