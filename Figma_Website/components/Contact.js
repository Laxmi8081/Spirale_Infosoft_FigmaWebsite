import { Typography, Box, Grid, Container } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { Label } from '@mui/icons-material'
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import XMlogo from '../asset/images/XMlogo.jpg';

export default function Contact() {
    return (

        <>

            <Navbar />

            <Box className="contact">
                <Grid container justifyContent='center'>
                    <Grid item lg={3}></Grid>
                    <Grid item lg={6} mt={3}>
                        <Box mt={2} textAlign='center'>
                            <Box mt={8} >
                                <Typography variant="h4" ><b>Contact Us</b></Typography>
                            </Box>
                            <Box mt={3}>
                                <Typography variant="subtitle"><b>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</b></Typography>
                            </Box>

                        </Box>

                    </Grid>
                    <Grid item lg={3}></Grid>
                </Grid>

                <Grid container justifyContent='center' mt={10} >
                    <Grid item lg={12} mt={8}></Grid>
                </Grid>
            </Box>


                <Container>
                    <Grid container justifyContent='center' Specing={2}>

                        {/* <Grid item lg={1}></Grid> */}
                        <Grid item lg={8}>

                            <Box p={3} >

                                <form>
                                    <Box>
                                        <Grid container justifyContent='center' mb={2}>
                                            <Box m={3} sx={{ display: 'flex' }}>

                                                <Grid item lg={6}>
                                                    <Box ml={3} sx={{ Width: '100%' }} >
                                                        <label >Fisrt Name</label>
                                                        <TextField type='text' fullWidth label="fname" id="fullWidth" required />
                                                    </Box>
                                                    <Box ml={3} sx={{ Width: '100%' }} mt={2}>
                                                        <label >Email</label>
                                                        <TextField type='text' fullWidth label="Email" id="fullWidth" required />
                                                    </Box>
                                                </Grid>
                                                <Grid item lg={6}>
                                                    <Box ml={3} sx={{ Width: '100%' }}>
                                                        <label >Last Name</label>
                                                        <TextField type='Password' fullWidth label="lname" id="fullWidth" required />
                                                    </Box>
                                                    <Box ml={3} sx={{ Width: '100%' }} mt={2}>
                                                        <label >Phone No.</label>
                                                        <TextField type='Password' fullWidth label="Phone Number" id="fullWidth" required />
                                                    </Box>

                                                </Grid>
                                            </Box>
                                        </Grid>
                                        <Grid container justifyContent='center' mb={2} Specing={2}>
                                            {/* <Grid item lg={1}></Grid> */}
                                            <Grid item lg={10} >
                                                <Box ml={3} sx={{ Width: '100%' }}>
                                                    <label>Stret Name </label>
                                                    <TextField type='area' fullWidth label="Write Your Message" id="fullWidth" required />
                                                </Box>
                                                <Box mt={3}>
                                                    <Button variant='contained'>Submit Form</Button>
                                                </Box>
                                            </Grid>
                                            {/* <Grid item lg={1}></Grid> */}
                                        </Grid>

                                    </Box>
                                </form>
                            </Box>


                        </Grid>

                        <Grid item lg={4}>
                            <Box mt={2} >

                                <Box mt={8} sx={{ display: 'flex' }}>
                                    <Typography ><b><CallIcon /></b></Typography> &nbsp; &nbsp;
                                    <Typography >Phone: +111 234 567 898<br />
                                        Mobile: +222 457 869 124</Typography>
                                </Box>
                                <Box mt={4} sx={{ display: 'flex' }}>
                                    <Typography ><b><FmdGoodIcon /></b></Typography> &nbsp; &nbsp;
                                    <Typography >207, Dhara trade center, Mahadev Chowk,
                                        Mota varachha, Surat 394101</Typography>
                                </Box>

                                <Box mt={4} sx={{ display: 'flex' }}>
                                    <Typography ><b><MailOutlineIcon /></b></Typography> &nbsp; &nbsp;
                                    <Typography >contact@legendarychiropractor.com <br/>
                                        support@legendarychiropractor.com</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        {/* <Grid item lg={1}></Grid>  */}

                    </Grid>
                </Container>

            {/* footer  start*/}

            <Box sx={{ background: 'rgb(6, 6, 34)', color: 'white' }} mt={7}>
                < Container>
                    <Grid container mt={8} >

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
                                        <Typography variant='h5' ><b>Get in Touch</b></Typography> &nbsp;
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
    )
}
