import { Container, makeStyles, Typography } from "@material-ui/core";
import {
    Dashboard, People, AttachMoney, Airplay, DevicesOther, PhoneAndroid, Store,
     Settings, Reorder, AllInclusive, LocationCity, Person, LocalHospital, LocalPharmacy
} from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import "../css/Leftbar.css"

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(1),
        backgroundColor: "#0e172a",
        height: "100vh",
        color: '#333',
        position: "fixed",
        width: "16.5%",
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(1.5),
            fontSize: "18px",
            cursor: 'pointer',
        },
    },
    text: {
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    icon: {
        marginRight: theme.spacing(1),
        marginTop: "auto",
        [theme.breakpoints.up("sm")]: {
            fontSize: "18px"
        }
    }
}));

const Leftbar = () => {

    const classes = useStyles();

    return (
        <div className="leftbar">
            <Container className={classes.container} id="conatiner">
                <div className={classes.item}>
                    <NavLink to="/dashboard" className="d-flex">
                        <Dashboard className={classes.icon} id="icon" />
                        <Typography className={classes.text} >
                            Dashboard
                        </Typography>
                    </NavLink>
                </div>

                <div className={classes.item}>
                    <div className="d-flex">
                        <Typography style={{ textAlign: "center", marginTop: "12px" }}>
                            COMPTE
                        </Typography>
                    </div>
                </div>
                <div className={classes.item}>
                    <NavLink to="/balance" className="d-flex">
                        <Airplay className={classes.icon} id="icon" />
                        <Typography className={classes.text}>
                            Balance
                        </Typography>
                    </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/affiliation" className="d-flex">
                        <People className={classes.icon} id="icon" />
                        <Typography className={classes.text}>
                            Afiiliation
                        </Typography>
                    </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/settlemnt" className="d-flex">
                        <AllInclusive className={classes.icon} id="icon" />
                        <Typography className={classes.text}>
                            Settlement
                        </Typography>
                    </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/transactions" className="d-flex">
                        <Reorder className={classes.icon} id="icon" />
                        <Typography className={classes.text}>
                            Transactions
                        </Typography>
                    </NavLink>
                </div>

                <div className={classes.item}>
                    <div className="d-flex">
                        <Typography style={{ textAlign: "center", marginTop: "12px" }}>
                            SERVICES
                        </Typography>
                    </div>
                </div>

                <div className={classes.item}>
                    <NavLink to="/modepayement" className="d-flex">
                        <AttachMoney className={classes.icon} id="icon" />
                        <Typography className={classes.text}>
                            Envoyer l'argent
                        </Typography>
                    </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/cartevirtuelle" className="d-flex">
                        <DevicesOther className={classes.icon} id="icon" />
                        <Typography className={classes.text}>
                            Cartes virtuelles
                        </Typography>
                    </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/rechargeMobile" className="d-flex">
                        <PhoneAndroid className={classes.icon} id="icon" />
                        <Typography className={classes.text}>
                            Recharge mobile
                        </Typography>
                    </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/manip" className="d-flex">
                        <Store className={classes.icon} id="icon" />
                        <Typography className={classes.text}>
                            Marketplace
                        </Typography>
                    </NavLink>
                </div>

                <div className={classes.item}>
                    <div className="d-flex">
                        <Typography style={{ textAlign: "center", marginTop: "12px" }}>
                            ADMINISTRATION
                        </Typography>
                    </div>
                </div>
                <div className={classes.item}>
                    <NavLink to="/clients" className="d-flex">
                        <Person className={classes.icon} id="icon" />
                        <Typography className={classes.text}>
                             Clients
                        </Typography>
                    </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/manip" className="d-flex">
                        <LocalPharmacy className={classes.icon} id="icon" />
                        <Typography className={classes.text}>
                            Médecins
                        </Typography>
                    </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/manip" className="d-flex">
                        <LocalHospital className={classes.icon} id="icon" />
                        <Typography className={classes.text}>
                            Hôpitaux
                        </Typography>
                    </NavLink>
                </div>

                <div className={classes.item}>
                    <div className="d-flex">
                        <Typography style={{ textAlign: "center", marginTop: "12px" }}>
                            CONFIGURATIONS
                        </Typography>
                    </div>
                </div>
                <div className={classes.item}>
                    <NavLink to="/manip" className="d-flex">
                        <Settings className={classes.icon} id="icon" />
                        <Typography className={classes.text}>
                            Paramètres
                        </Typography>
                    </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/manip" className="d-flex">
                        <LocationCity className={classes.icon} id="icon" />
                        <Typography className={classes.text}>
                            Localisation
                        </Typography>
                    </NavLink>
                </div>
            </Container>
        </div>
    );
}

export default Leftbar;