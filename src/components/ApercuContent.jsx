import React, { useState, useEffect } from 'react'
import { Button, Card, CardActions, CardContent, CardHeader, Grid, Typography, makeStyles } from "@material-ui/core";
import { AttachMoney, Group, LocalHospital, LocalHotel, } from "@material-ui/icons";
import { Link } from 'react-router-dom';
import axios from 'axios';
import ElementsBase from "../base/ElementsBase"


const useStyles = makeStyles((theme) => ({
    griddash: {
        display: "flex",
        [theme.breakpoints.down("sm")]: {
            display: "block"
        },
    },
    stat: {
        [theme.breakpoints.down("sm")]: {
            maxWidth: "100%",
            marginTop: "10px"
        }
    },
    courb: {
        [theme.breakpoints.down("sm")]: {
            maxWidth: "100%",
            marginTop: "10px"
        }
    },
    courbStatist: {
        display: "flex",
        [theme.breakpoints.down("sm")]: {
            display: "block"
        },
    },
}));


function ApercuContent() {
    const classes = useStyles();

    const url = ElementsBase && ElementsBase.url;

    const [clients, setClients] = useState([]);


    useEffect(() => {
        axios.get(url + 'clients')
            .then(resp => {
                setClients(resp.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [url]);


    return (
        <div className='contentDashboardEvaluate'>
            <Grid sm={4} xs={4} className={classes.stat} item={true} id="stat">
                <Card>
                    <CardHeader
                        title="Hôpitaux"
                        avatar={
                            <LocalHospital />
                        }
                        subheader="Nombre total des hôpitaux"
                    />
                    <div className="d-flex">
                        <CardContent>
                            <Typography variant="h5" style={{ color: "#fff" }}>0.00</Typography>
                        </CardContent>
                        <CardActions>
                            <Link to="/hopitaux">
                                <Button
                                    className='btn-voir-tout'
                                    variant="contained"
                                    size="small"
                                    style={{
                                        backgroundColor: "#0c50a2",
                                        color: "#fff",
                                    }}>V<span className="span" style={{ textTransform: "lowercase" }}>oir tout</span></Button>
                            </Link>
                        </CardActions>
                    </div>
                </Card>
            </Grid>
            <Grid sm={4} xs={4} item={true} className={classes.stat} id="stat">
                <Card>
                    <CardHeader
                        title="Médecins"
                        avatar={
                            <Group />
                        }
                        subheader="Nombre total de médecins"
                    />
                    <div className="d-flex">
                        <CardContent>
                            <Typography variant="h5" style={{ color: "#fff" }}>
                                $0.00
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to="/medecins">
                                <Button
                                    className='btn-voir-tout'
                                    variant="contained"
                                    size="small" style={{ backgroundColor: "#0c50a2", color: "#fff" }}>
                                    V<span className="span" style={{ textTransform: "lowercase" }}>oir tout</span>
                                </Button>
                            </Link>
                        </CardActions>
                    </div>
                </Card>
            </Grid>

            <Grid sm={4} xs={4} item={true} className={classes.stat} id="stat">
                <Card>
                    <CardHeader
                        title="Clients"
                        avatar={
                            <LocalHotel />
                        }
                        subheader="Nombre total des clients"
                    />
                    <div className="d-flex">
                        <CardContent>
                            <Typography variant="h5" style={{ color: "#555" }}>
                                {clients ? clients.taille : <i className='fa fa-spinner fa-pulse'></i>}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to="/clients">
                                <Button
                                    className='btn-voir-tout'
                                    variant="contained"
                                    size="small"
                                    style={{ backgroundColor: "#0c50a2", color: "#fff" }}>
                                    V<span className="span" style={{ textTransform: "lowercase" }}>oir tout</span>
                                </Button>
                            </Link>
                        </CardActions>
                    </div>
                </Card>
            </Grid>

            <Grid sm={4} xs={4} item={true} className={classes.stat} id="stat">
                <Card>
                    <CardHeader
                        title="Revenus"
                        avatar={
                            <AttachMoney />
                        }
                        subheader="Revenus journaliers"
                    />
                    <div className="d-flex">
                        <CardContent>
                            <Typography variant="h5" style={{ color: "#555" }}>
                                0
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to="/revenus">
                                <Button
                                    className='btn-voir-tout'
                                    variant="contained"
                                    size="small"
                                    style={{ backgroundColor: "#0c50a2", color: "#fff" }}>
                                    V<span className="span" style={{ textTransform: "lowercase" }}>oir tout</span>
                                </Button>
                            </Link>
                        </CardActions>
                    </div>
                </Card>
            </Grid>
        </div>
    )
}

export default ApercuContent