import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Container } from '@mui/material';
import Navbar from './Navbar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import c1 from '../asset/images/c1.jpg'
import c2 from '../asset/images/c2.jpg'
import c3 from '../asset/images/c3.jpg'
import c4 from '../asset/images/c4.jpg'
import c5 from '../asset/images/c5.jpg'
import c6 from '../asset/images/c6.jpg'
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import XMlogo from '../asset/images/XMlogo.jpg';



export default function Portfolio() {
    return (
        <>
            <Container>
                <Navbar />
                
            </Container>
            <hr/>


            <Container>


                <Grid container justify='center' spacing={3} mt={1}>
                    <Grid item lg={1}></Grid>
                    <Grid item lg={4}>
                        <Box>
                            <Box>
                                <Typography gutterBottom color='blue'>
                                    <b>OUR WORK</b>
                                </Typography>
                            </Box>
                            <Box>
                                <Typography gutterBottom variant="h5">
                                    <b>Amazing things come from collaboration. Browse our selected work.</b>
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={7}></Grid>
                </Grid>

                <Grid container justify='center' spacing={2} mt={1}>

                    <Grid item lg={1}></Grid>


                    <Grid item lg={4}>

                        <Box mt={3}>
                            <Card sx={{ width: '100%', height: '100%' }}>
                                <CardActionArea>
                                    <img src={c1} alt='' />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            XM Store
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            UI & UX Design
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Box>

                        <Box mt={3}>
                            <Card sx={{ width: '100%', height: '100%' }}>
                                <CardActionArea>
                                    <img src={c2} alt='' />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            XM Store
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            UI & UX Design
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Box>

                        <Box mt={3}>
                            <Card sx={{ width: '100%', height: '100%' }}>
                                <CardActionArea>
                                    <img src={c3} alt='' />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            XM Store
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            UI & UX Design
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Box>

                    </Grid>

                    <Grid item lg={2}></Grid>


                    <Grid item lg={4} mt={9}>

                        <Box mt={3}>
                            <Card sx={{ width: '100%', height: '100%' }}>
                                <CardActionArea>
                                    <img src={c4} alt='' />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            XM Store
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            UI & UX Design
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Box>

                        <Box mt={3}>
                            <Card sx={{ width: '100%', height: '100%' }}>
                                <CardActionArea>
                                    <img src={c5} alt='' />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            XM Store
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            UI & UX Design
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Box>

                        <Box mt={3}>
                            <Card sx={{ width: '100%', height: '100%' }}>
                                <CardActionArea>
                                    <img src={c6} alt='' />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            XM Store
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            UI & UX Design
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Box>
                    </Grid>



                    <Grid item lg={1}></Grid>

                </Grid>

            </Container>


            <Box sx={{ background: 'blue' }}>

                <Container>


                    <Grid container justify='center' spacing={3} mt={8}>
                        <Grid item lg={3}></Grid>
                        <Grid item lg={6} mt={7}>
                            <Box color={'white'}>

                                <Box textAlign='center'>
                                    <Typography variant="h4">
                                        <b>Let's make something amazing together.</b>
                                    </Typography>
                                </Box>
                                <Box textAlign='center' mt={5}>
                                    <Typography >
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                        the industry's standard dummy text ever since the 1500s.
                                    </Typography>
                                </Box>
                                <Box textAlign='center' mt={3}>
                                    <Button variant="outlined"><b>Contact Us</b></Button>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={3}></Grid>
                    </Grid>


                    <Grid container justify='center' spacing={3} mt={4}>
                        <Grid item lg={12}></Grid>

                    </Grid>


                </Container>

            </Box>


            {/* footer  start*/}
            <Box sx={{ background: 'rgb(6, 6, 34)', color: 'white' }} >
                < Container>
                    <Grid container  >

                        <Grid item lg={3}>
                            <paper>
                                <Box mt={3} mb={4} >
                                    <img src={XMlogo} alt='' />
                                </Box>
                                <Box mt={4} mb={4} >
                                    <Typography>Our technical intelligence can put you on the fast track to success.
                                        That’s the promise from XM Technologies.</Typography>
                                </Box>
                                <Box mt={4} mb={4} >
                                    <Typography>Follow us on social media!.</Typography>
                                </Box>
                                <Box sx={{ display: 'flex' }}>
                                    <Box mt={1}>
                                        <Typography><InstagramIcon /></Typography>
                                    </Box>
                                    <Box m={1}>
                                        <Typography ><FacebookIcon /></Typography>
                                    </Box>
                                    <Box m={1}>
                                        <Typography ><TwitterIcon /></Typography>
                                    </Box>
                                    <Box m={1}>
                                        <Typography ><LinkedInIcon /></Typography>
                                    </Box>
                                    <Box m={1}>
                                        <Typography ><MailOutlineIcon /></Typography>
                                    </Box>
                                </Box>
                            </paper>
                        </Grid>

                        <Grid item lg={3}>

                            <Box mt={3} mb={4} >
                                <Box >
                                    <Typography variant='h5' ><b>Navigation</b></Typography> &nbsp;
                                </Box>
                                <Box mt={2} sx={{ color: 'white' }}>
                                    <li mt={6}>
                                        <a href="" ><h4>Services</h4></a>
                                    </li>
                                    <li mt={6}>
                                        <a href=""><h4>About Us</h4></a>
                                    </li>
                                    <li mt={3}>
                                        <a href="" ><h4>Services</h4></a>
                                    </li>
                                    <li mt={3}>
                                        <a href=""><h4>Portfolio</h4></a>
                                    </li>
                                    <li mt={3}>
                                        <a href=''><h4>Jobs</h4></a>
                                    </li>
                                    <li mt={3}>
                                        <a href=""  ><h4>Contact Us</h4></a>
                                    </li>

                                </Box>
                            </Box>

                        </Grid>

                        <Grid item lg={3}>

                            <Box mt={3} mb={4} >
                                <Box >
                                    <Typography variant='h5' ><b>Services</b></Typography> &nbsp;
                                </Box>
                                <Box mt={2} sx={{ color: 'white' }}>
                                    <li mt={6}>
                                        <a href="" ><h4>Web Development</h4></a>
                                    </li>
                                    <li mt={6}>
                                        <a href=""><h4>Digital Marketing</h4></a>
                                    </li>
                                    <li mt={3}>
                                        <a href="" ><h4>Application Development</h4></a>
                                    </li>
                                    <li mt={3}>
                                        <a href=""><h4>E-Commerce Solution</h4></a>
                                    </li>
                                    <li mt={3}>
                                        <a href=''><h4>Backup & Secuirty</h4></a>
                                    </li>
                                    <li mt={3}>
                                        <a href=""  ><h4>Enterprice Software Services</h4></a>
                                    </li>
                                    <li mt={3}>
                                        <a href=""  ><h3>It Support</h3></a>
                                    </li>

                                </Box>
                            </Box>

                        </Grid>

                        <Grid item lg={3}>
                            <paper>
                                <Box mt={3} mb={4}>
                                    <Box >
                                        <Typography variant='h5' ><b>Get in touch</b></Typography> &nbsp;
                                    </Box>
                                    <Box mt={2} sx={{ display: 'flex' }}>
                                        <Typography ><b><FmdGoodIcon /></b></Typography> &nbsp;
                                        <Typography >207, Dhara trade center, Mahadev Chowk,
                                            Mota varachha, Surat 394101</Typography>
                                    </Box>
                                    <Box mt={4} sx={{ display: 'flex' }}>
                                        <Typography ><b><CallIcon /></b></Typography> &nbsp;
                                        <Typography >+91567846777</Typography>
                                    </Box>
                                    <Box mt={4} sx={{ display: 'flex' }}>
                                        <Typography ><b><MailOutlineIcon /></b></Typography> &nbsp;
                                        <Typography >abcd@gmail.com</Typography>
                                    </Box>
                                </Box>
                            </paper>
                        </Grid>

                    </Grid>
                </Container>
            </Box>
            {/* footer end */}
        </>
    );
}