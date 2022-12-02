import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Collapse, Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import React, { useState } from 'react'
import AutoPlayEmbedding from '../utils/AutoPlayEmbedding';
import YoutubeEmbed from '../utils/VideoEmbedding';

const Recording = () => {
    const [open, setOpen] = useState(true);
    const [openmod3, setOpenmod3] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    const handleClickMod3 = () => {
        setOpenmod3(!open);
    };
    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
    };


    return (
        <div>

            <Grid container spacing={2} style={{ textAlign: "center", justifyContent: "left", marginTop: 2 }}>

                <Grid item xs={8}>
                    <ListItem>
                        <Typography variant="h4">
                            Intermediate Python 101 - Course Content
                        </Typography>
                    </ListItem>
                    <Divider variant='middle' textAlign="left" />
                    <ListItem>
                        <Typography variant="h5">
                            Module 1: Python Recap
                        </Typography>

                    </ListItem>
                    <ListItem>
                        <Typography variant="body">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>

                    </ListItem>
                    <ListItem>
                        <Card sx={{ maxWidth: 600, justifyContent: "center", alignItems: "center" }}>
                            <CardActionArea>
                                <CardMedia>
                                    <YoutubeEmbed embedId="kqtD5dpn9C8" />
                                </CardMedia>
                            </CardActionArea>
                        </Card>

                    </ListItem>
                    <ListItemButton onClick={handleClick}>
                        <ListItemText primary="Module 2: Python PyCharm" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <Card sx={{ maxWidth: 600, justifyContent: "center", alignItems: "center" }}>
                                    <CardActionArea>
                                        <CardMedia>
                                            <YoutubeEmbed embedId="56bPIGf4us0" />
                                        </CardMedia>
                                    </CardActionArea>
                                </Card>
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <Divider variant='middle' textAlign="left" />
                    <ListItemButton onClick={handleClickMod3}>
                        <ListItemText primary="Module 3: Python Colab" />
                        {openmod3 ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openmod3} unmountOnExit>
                        <List component="div">
                            <ListItemButton sx={{ pl: 4 }}>
                                <Card sx={{ maxWidth: 600, justifyContent: "center", alignItems: "center" }}>
                                    <CardActionArea>
                                        <CardMedia>
                                            <YoutubeEmbed embedId="inN8seMm7UI" />
                                        </CardMedia>
                                    </CardActionArea>
                                </Card>
                            </ListItemButton>
                        </List>
                    </Collapse>
                </Grid>
                <Grid item xs={4} md={4} direction="column" style={{ backgroundColor: "#ebf0ec", marginTop: 10, marginRight: 0, maxHeight: "100%", overflowY: true }}>
                    <ListItem>
                        <Typography variant="h5" marginLeft={2} fontWeight="bold">
                            User Playlist
                        </Typography>
                        
                    </ListItem>
                    <Divider variant='middle' textAlign="left" />
                    <ListItem>
                        <Card sx={{ width: 450, justifyContent: "center", alignItems: "center", marginTop: 2 }}>
                            <CardActionArea>
                                <CardMedia autoPlay>
                                    <AutoPlayEmbedding embedId="x7X9w_GIm1s" />
                                </CardMedia>
                            </CardActionArea>
                        </Card>
                    </ListItem>
                    <Divider variant='middle' textAlign="left" />
                    <ListItem>
                        <Card sx={{ width: 450, justifyContent: "center", alignItems: "center", marginTop: 2 }}>
                            <CardActionArea>
                                <CardMedia autoPlay>
                                    <AutoPlayEmbedding embedId="Y8Tko2YC5hA" />
                                </CardMedia>
                            </CardActionArea>
                        </Card>
                    </ListItem>
                    <Divider variant='middle' textAlign="left" />
                    <ListItem>
                        <Card sx={{ width: 450, justifyContent: "center", alignItems: "center", marginTop: 2 }}>
                            <CardActionArea>
                                <CardMedia autoPlay>
                                    <AutoPlayEmbedding embedId="I2wURDqiXdM" />
                                </CardMedia>
                            </CardActionArea>
                        </Card>

                    </ListItem>
                </Grid>
            </Grid>
        </div>
    )
}
export default Recording
