import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, ListItem, Typography } from '@mui/material'


const Webinar = () => {
    let url = `https://www.microsoft.com/en-ca/microsoft-teams/log-in`

    return (
        <Grid>
            <Grid container style={{ textAlign: "center", margin: "auto", marginTop: "2%" }}>
                <Grid item xs={3} direction="row">
                    <ListItem>
                        <Card>
                            <CardContent>
                                <CardMedia component="img"
                                    sx={{ display: 'flex', justifyContent: 'center', margin: "center", height:"250px", width:"250px", marginBottom:"5%" }}
                                    src='https://images.hdqwalls.com/download/python-logo-4k-i6-1600x1200.jpg'
                                    alt="green iguana" />
                                <Typography gutterBottom variant="h5" component="div">
                                    Hands on Python
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Course Coverage: Online
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button style={{ backgroundColor: "black", color: "white", width: "100%" }} onClick={() => { window.location.href = url; }}>Attend</Button>
                            </CardActions>
                        </Card>
                    </ListItem>
                </Grid>
                <Grid item xs={3} direction="row">
                    <ListItem>
                        <Card>
                            <CardContent>
                                <CardMedia component="img"
                                    sx={{ display: 'flex', justifyContent: 'center', margin: "center", height:"250px", width:"250px", marginBottom:"5%"  }}
                                    src='https://friconix.com/png/fi-snsuxx-java.png'
                                    alt="green iguana" />
                                <Typography gutterBottom variant="h5" component="div">
                                    Hands on Java
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Course Coverage: Online
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button style={{ backgroundColor: "black", color: "white", width: "100%" }} onClick={() => { window.location.href = url; }}>Attend</Button>
                            </CardActions>
                        </Card>
                    </ListItem>
                </Grid>
                <Grid item xs={3} direction="row">
                    <ListItem>
                        <Card>
                            <CardContent>
                                <CardMedia component="img"
                                    sx={{ display: 'flex', justifyContent: 'center', margin: "center", height:"250px", width:"250px", marginBottom:"5%"  }}
                                    src='https://d1q6f0aelx0por.cloudfront.net/icons/docker-edition-azure6.png'
                                    alt="green iguana" />
                                <Typography gutterBottom variant="h5" component="div">
                                    Hands on Docker
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Course Coverage: Online
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button style={{ backgroundColor: "black", color: "white", width: "100%" }} onClick={() => { window.location.href = url; }}>Attend</Button>
                            </CardActions>
                        </Card>
                    </ListItem>
                </Grid>
                <Grid item xs={3} direction="row">
                    <ListItem>
                        <Card>
                            <CardContent>
                                <CardMedia component="img"
                                    sx={{ display: 'flex', justifyContent: 'center', margin: "center", height:"250px", width:"250px", marginBottom:"5%"  }}
                                    src='https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png'
                                    alt="green iguana" />
                                <Typography gutterBottom variant="h5" component="div">
                                    Hands on JavaScript
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Course Coverage: Online
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button style={{ backgroundColor: "black", color: "white", width: "100%" }} onClick={() => { window.location.href = url; }}>Attend</Button>
                            </CardActions>
                        </Card>
                    </ListItem>
                </Grid>
            </Grid>
            <Grid container style={{ textAlign: "center", margin: "auto", marginTop: "2%" }}>
                <Grid item xs={3} direction="row">
                    <ListItem>
                        <Card>
                            <CardContent>
                                <CardMedia component="img"
                                    sx={{ display: 'flex', justifyContent: 'center', margin: "center", height:"250px", width:"250px", marginBottom:"5%" }}
                                    src='https://www.shareicon.net/data/512x512/2015/09/03/95034_web_512x512.png'
                                    alt="green iguana" />
                                <Typography gutterBottom variant="h5" component="div">
                                    Hands on AngularJS
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Course Coverage: Online
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button style={{ backgroundColor: "black", color: "white", width: "100%" }} onClick={() => { window.location.href = url; }}>Attend</Button>
                            </CardActions>
                        </Card>
                    </ListItem>
                </Grid>
                <Grid item xs={3} direction="row">
                    <ListItem>
                        <Card>
                            <CardContent>
                                <CardMedia component="img"
                                    sx={{ display: 'flex', justifyContent: 'center', margin: "center", height:"250px", width:"250px", marginBottom:"5%"  }}
                                    src='https://logos-world.net/wp-content/uploads/2022/01/NET-Framework-Logo.png'
                                    alt="green iguana" />
                                <Typography gutterBottom variant="h5" component="div">
                                    Hands on .NET
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Course Coverage: Online
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button style={{ backgroundColor: "black", color: "white", width: "100%" }} onClick={() => { window.location.href = url; }}>Attend</Button>
                            </CardActions>
                        </Card>
                    </ListItem>
                </Grid>
                <Grid item xs={3} direction="row">
                    <ListItem>
                        <Card>
                            <CardContent>
                                <CardMedia component="img"
                                    sx={{ display: 'flex', justifyContent: 'center', margin: "center", height:"250px", width:"250px", marginBottom:"5%"  }}
                                    src='https://miro.medium.com/max/550/1*0GlU8cmNjXQD-4IsABV1Ng.png'
                                    alt="green iguana" />
                                <Typography gutterBottom variant="h5" component="div">
                                    Hands on MERN Stack
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Course Coverage: Online
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button style={{ backgroundColor: "black", color: "white", width: "100%" }} onClick={() => { window.location.href = url; }}>Attend</Button>
                            </CardActions>
                        </Card>
                    </ListItem>
                </Grid>
                <Grid item xs={3} direction="row">
                    <ListItem>
                        <Card>
                            <CardContent>
                                <CardMedia component="img"
                                    sx={{ display: 'flex', justifyContent: 'center', margin: "center", height:"250px", width:"250px", marginBottom:"5%"  }}
                                    src='https://pronto-core-cdn.prontomarketing.com/2/wp-content/uploads/sites/1614/2019/07/21743298_1406722539365107_4308832733562613967_n.png'
                                    alt="green iguana" />
                                <Typography gutterBottom variant="h5" component="div">
                                    Hands on AWS
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Course Coverage: Online
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button style={{ backgroundColor: "black", color: "white", width: "100%" }} onClick={() => { window.location.href = url; }}>Attend</Button>
                            </CardActions>
                        </Card>
                    </ListItem>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default Webinar