import React from 'react'
import '../asset/css/style.css'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import icon1 from '../asset/images/icon1.jpg';
import icon2 from '../asset/images/icon2.jpg';
import icon4 from '../asset/images/icon4.jpg';
import icon5 from '../asset/images/icon5.jpg';
import service2 from '../asset/images/service2.jpg'
import service3 from '../asset/images/service3.jpg'
import service4 from '../asset/images/service4.jpg'
import { Button, Typography } from '@mui/material';
import c1 from '../asset/images/c1.jpg';
import c2 from '../asset/images/c2.jpg';
import c3 from '../asset/images/c3.jpg';
import c4 from '../asset/images/c4.jpg';
import c5 from '../asset/images/c5.jpg';
import c6 from '../asset/images/c6.jpg';
import c7 from '../asset/images/c7.jpg';
import c8 from '../asset/images/c6.jpg';
import c9 from '../asset/images/c9.jpg';
import c10 from '../asset/images/c10.jpg';
import c11 from '../asset/images/c11.jpg';
import c12 from '../asset/images/c12.jpg';
import TextField from '@mui/material/TextField';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import XMlogo from '../asset/images/XMlogo.jpg';
import half from '../asset/images/half.jpg';
import Navbar from './Navbar';


export default function Service() {
    return (

        <>

            <Navbar />


            <Box className="mainimg">
                <Grid container justifyContent='center'>
                    <Grid item lg={2}></Grid>
                    <Grid item lg={5} mt={11}>
                        <Box mt={2} color='white'>
                            <Box mt={8} >
                                <Typography variant="h4" ><b>Cutting-Edge IT Solutions: Empowering Your Digital Transformation</b></Typography>
                            </Box>
                            <Box mt={4}>
                                <Typography variant="subtitle"><b>Unlocking Business Potential Through Expert IT Solutions. Seamlessly tailored for growth.</b></Typography>
                            </Box>

                            <Box mt={4}>
                                <Button variant='contained'>Contact Us</Button>
                            </Box>
                        </Box>

                    </Grid>
                    <Grid item lg={5}></Grid>
                </Grid>

                <Grid container justifyContent='center' mt={10} >
                    <Grid item lg={12} m={8}></Grid>
                </Grid>
            </Box>


            <Container>
                <Grid container justifyContent='center'>

                    <Box mt={6}>
                        <Typography variant="h4" justifyContent='center'><b className='circle'>Our Services</b></Typography>
                    </Box>

                </Grid>

                <Grid container justifyContent='center'>
                    <Grid item lg={3}></Grid>
                    <Grid item lg={6}>
                        <Box mt={2} textAlign='center'>
                            <Typography variant="subtitle" >We offer professional web design services at affordable rates
                                to help your business attract more visitors and keep them on your site!</Typography>
                        </Box>
                    </Grid>
                    <Grid item lg={3}></Grid>
                </Grid>



                <Grid container justify='center' spacing={3} mt={2}>
                    <Grid item lg={4} >
                        <paper>
                            <Card variant="outlined" sx={{ marginTop: '20px', width: '100%', height: '100%', textAlign: 'center' }}>
                                <Box p={3} m={1}>
                                    <div>
                                        <img src={icon1} alt='' />
                                    </div>
                                    <Box mt={2}>
                                        <Typography variant="h4">Webdeveloper</Typography>
                                    </Box>
                                    <Box mt={4}>
                                        <Typography variant="subtitle">
                                            Online impressions take time. It's exactly what you need. We build your dream website using Node, Angular, PHP, and Laravel.
                                        </Typography>
                                    </Box>
                                    <Box mt={4}>
                                        <Button variant="outlined">Outlined</Button>
                                    </Box>
                                </Box>
                            </Card>
                        </paper>
                    </Grid>

                    <Grid item lg={4}>
                        <paper>
                            <Card variant="outlined" sx={{ marginTop: '20px', width: '100%', height: '100%', textAlign: 'center' }}>
                                <Box p={3} m={1}>
                                    <div>
                                        <img src={icon2} alt='' />
                                    </div>
                                    <Box mt={2}>
                                        <Typography variant="h4">Digital Marketing</Typography>
                                    </Box>
                                    <Box mt={4}>
                                        <Typography variant="subtitle">
                                            Online impressions take time. It's exactly what you need. We build your dream website using Node, Angular, PHP, and Laravel.
                                        </Typography>
                                    </Box>
                                    <Box mt={4}>
                                        <Button variant="contained">Contained</Button>
                                    </Box>
                                </Box>
                            </Card>
                        </paper>
                    </Grid>

                    <Grid item lg={4}>
                        <paper>
                            <Card variant="outlined" sx={{ marginTop: '20px', width: '100%', height: '100%', textAlign: 'center' }}>
                                <Box p={3} m={1}>
                                    <div>
                                        <img src={icon5} alt='' />
                                    </div>
                                    <Box mt={2}>
                                        <Typography variant="h4">Application Development</Typography>
                                    </Box>
                                    <Box mt={4}>
                                        <Typography variant="subtitle">
                                            Online impressions take time. It's exactly what you need. We build your dream website using Node, Angular, PHP, and Laravel.
                                        </Typography>
                                    </Box>
                                    <Box mt={4}>
                                        <Button variant="outlined">Outlined</Button>
                                    </Box>
                                </Box>
                            </Card>
                        </paper>
                    </Grid>

                </Grid>


                <Grid container justify='center' spacing={3} mt={1}>
                    <Grid item lg={4}>
                        <paper>
                            <Card variant="outlined" sx={{ marginTop: '20px', width: '100%', height: '100%', textAlign: 'center' }}>
                                <Box p={3} m={1}>
                                    <div>
                                        <img src={icon4} alt='' />
                                    </div>
                                    <Box mt={2}>
                                        <Typography variant="h4">E-Commerce Solution</Typography>
                                    </Box>
                                    <Box mt={4}>
                                        <Typography variant="subtitle">
                                            Online impressions take time. It's exactly what you need. We build your dream website using Node, Angular, PHP, and Laravel.
                                        </Typography>
                                    </Box>
                                    <Box mt={4}>
                                        <Button variant="outlined">Outlined</Button>
                                    </Box>
                                </Box>
                            </Card>
                        </paper>
                    </Grid>

                    <Grid item lg={4}>
                        <paper>
                            <Card variant="outlined" sx={{ marginTop: '20px', width: '100%', height: '100%', textAlign: 'center' }}>
                                <Box p={3} m={1}>
                                    <div>
                                        <img src={icon4} alt='' />
                                    </div>
                                    <Box mt={2}>
                                        <Typography variant="h4">Backup & Secuirty</Typography>
                                    </Box>
                                    <Box mt={6}>
                                        <Typography variant="subtitle">
                                            Online impressions take time. It's exactly what you need. We build your dream website using Node, Angular, PHP, and Laravel.
                                        </Typography>
                                    </Box>
                                    <Box mt={4}>
                                        <Button variant="outlined">Outlined</Button>
                                    </Box>
                                </Box>
                            </Card>
                        </paper>
                    </Grid>

                    <Grid item lg={4}>

                        <Card variant="outlined" sx={{ marginTop: '20px', width: '100%', height: '100%', textAlign: 'center' }}>
                            <Box p={3} m={1}>
                                <div>
                                    <img src={icon5} alt='' />
                                </div>
                                <Box mt={2}>
                                    <Typography variant="h4">IT Support</Typography>
                                </Box>
                                <Box mt={4}>
                                    <Typography variant="subtitle">
                                        Online impressions take time. It's exactly what you need. We build your dream website using Node, Angular, PHP, and Laravel.
                                    </Typography>
                                </Box>
                                <Box mt={4}>
                                    <Button variant="outlined">Outlined</Button>

                                </Box>
                            </Box>
                        </Card>

                    </Grid>

                </Grid>


                <Grid container justifyContent='center' spacing={3} mt={1}>

                    <Grid item lg={4}>

                    </Grid>

                    <Grid item lg={4}>

                        <Card variant="outlined" sx={{ marginTop: '20px', width: '100%', height: '100%', textAlign: 'center' }}>
                            <Box p={3} m={1}>
                                <div>
                                    <img src={icon4} alt='' />
                                </div>

                                <Box>
                                    <Box mt={2}>
                                        <Typography variant="h4">Enterprice Software Services</Typography>
                                    </Box>
                                    <Box mt={4}>
                                        <Typography variant="subtitle" >
                                            Online impressions take time. It's exactly what you need. We build your dream website using Node, Angular, PHP, and Laravel.
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box mt={4}>
                                    <Button variant="outlined">Outlined</Button>
                                </Box>
                            </Box>
                        </Card>

                    </Grid>

                    <Grid item lg={4}>

                    </Grid>

                </Grid>
            </Container>

            <Box className="main-container">
                <Box sx={{ background: 'rgb(6, 6, 34)', }}>
                    <Container>
                        <Grid container justifyContent='center' mt={5} spacing={2}>

                            <Grid item lg={6} mt={14}>
                                <Box mt={2} color='white'>
                                    <Box mt={5} >
                                        <Typography variant="h6" color='blue'>The Human Element</Typography>
                                    </Box>
                                    <Box mt={4}>
                                        <Typography variant="h3"><b>What's our secret? Great people.</b></Typography>
                                    </Box>

                                    <Box mt={4}>
                                        <Typography variant="subtitle"><b>Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                            , when an unknown printer took a galley of type and scrambled it to make a type specimen book</b></Typography>
                                    </Box>

                                    <Box mt={4}>
                                        <Typography variant="subtitle"><b>Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                        </b></Typography>
                                    </Box>

                                    <Box mt={5}>
                                        <Button variant='outlined'>Find Out More</Button>
                                    </Box>
                                </Box>

                            </Grid>
                            <Grid item lg={6}>

                                <Box className="img3">
                                    <Grid container justifyContent='center' spacing={2}>

                                        <Grid item lg={7} >
                                        </Grid>

                                        <Grid item lg={6} spacing={2} mt={15} >
                                            {/* <Box ml={30}>
                                                <img src={half} alt='' />
                                            </Box> */}

                                            <Card sx={{ marginTop: '3px', textAlign: 'center' }}>
                                                <Box>
                                                    <div>
                                                        <img src={service2} alt='' style={{ width: '100%', height: '100%' }} />
                                                    </div>
                                                </Box>
                                            </Card>

                                        </Grid>

                                        <Grid item lg={6}  >

                                            <Card sx={{ textAlign: 'center' }}>
                                                <Box>
                                                    <div>
                                                        <img src={service3} alt='' style={{ width: '100%', height: '100%' }} />
                                                    </div>
                                                </Box>
                                            </Card>

                                            <Card sx={{ marginTop: '15px', textAlign: 'center' }}>
                                                <Box>
                                                    <div>
                                                        <img src={service4} alt='' style={{ width: '100%', height: '100%' }} />
                                                    </div>
                                                </Box>
                                            </Card>
                                        </Grid>

                                    </Grid>
                                </Box>

                            </Grid>
                        </Grid>

                    </Container>

                </Box>

            </Box>


            <Container>
                <Grid container justifyContent='center' mt={15}>
                    <Grid item lg={3}></Grid>
                    <Grid item lg={6}>
                        <Box mt={5} textAlign='center'>
                            <Typography variant="h4" justifyContent='center'><b className='circle'>How it is going?</b></Typography>
                        </Box>
                    </Grid>
                    <Grid item lg={3}></Grid>
                </Grid>

                <Grid container justifyContent='center'>
                    <Grid item lg={3}></Grid>
                    <Grid item lg={6}>
                        <Box mt={2} textAlign='center'>
                            <Typography variant="subtitle" >We offer professional web
                                design services at affordable rates to help your business
                                attract more visitors and keep them on your site!</Typography>
                        </Box>
                    </Grid>
                    <Grid item lg={3}></Grid>
                </Grid>

                <Grid container justifyContent='center'>

                    <Grid item lg={4} >
                        <paper>
                            <Box p={3} mt={3}>

                                <Typography variant="h4">Info gathering</Typography>
                                <Typography variant="subtitle" className='fir1'>
                                    Need a good understanding of what are your business goals and dreams.
                                </Typography>

                            </Box>
                        </paper>
                    </Grid>

                    <Grid item lg={4} >
                        <paper>
                            <Box p={3} mt={3}>

                                <Typography variant="h4">Planning</Typography>
                                <Typography variant="subtitle" className='fir2'>
                                    We will help you to decide what technologies should be implemented.
                                </Typography>

                            </Box>
                        </paper>
                    </Grid>

                    <Grid item lg={4} >
                        <paper>
                            <Box p={3} mt={3}>

                                <Typography variant="h4">Design</Typography>
                                <Typography variant="subtitle" className='fir3'>
                                    It’s time to determine the look and feel of your site.
                                </Typography>

                            </Box>
                        </paper>
                    </Grid>

                </Grid>

                <Grid container justifyContent='center'>

                    <Grid item lg={2}></Grid>

                    <Grid item lg={4}>
                        <paper>
                            <Box mt={3}>

                                <Typography variant="h4">Development</Typography>
                                <Typography variant="subtitle" className='fir4'>
                                    Writing valid HTML / CSS code that complies to current web standards.
                                </Typography>

                            </Box>
                        </paper>
                    </Grid>

                    <Grid item lg={4}>
                        <paper>
                            <Box mt={3}>
                                {/* <Card variant="outlined"></Card>    */}
                                <Typography variant="h4">Testing And Lounch</Typography>
                                <Typography variant="subtitle" className='fir5'>
                                    Testing of the complete functionality of forms and scripts etc.
                                </Typography>

                            </Box>
                        </paper>
                    </Grid>

                    <Grid item lg={2}></Grid>

                </Grid>
            </Container>


            <Box sx={{ background: 'rgb(6, 6, 34)' }} mt={9} >
                <Container >

                    <Grid container justifyContent='center' spacing={2} mt={1} mb={4}>
                        <Grid item lg={2}>
                            <paper>

                            </paper>
                        </Grid>

                        <Grid item lg={8}>
                            <paper>
                                <Box mt={4} textAlign='center' color='white'>
                                    <Box ><Typography variant="h4"><b>OUR WORK</b></Typography></Box>
                                    <Box mt={2}><Typography><b>A variety of creative capabilities under one roof</b></Typography></Box>
                                </Box>
                            </paper>
                        </Grid>

                        <Grid item lg={2}>
                            <paper>

                            </paper>
                        </Grid>

                    </Grid>

                </Container>

                <Box >
                    <Grid container spacing={2} >

                        <Grid item lg={3} mt={8} >
                            <paper>

                                <Card variant="outlined" sx={{ marginTop: '20px', textAlign: 'center' }}>
                                    <Box>
                                        <div>
                                            <img src={c1} alt='' style={{ width: '100%', height: '100%' }} />
                                        </div>
                                    </Box>
                                </Card>

                                <Card variant="outlined" sx={{ marginTop: '10px', textAlign: 'center' }}>
                                    <Box >
                                        <div>
                                            <img src={c2} alt='' style={{ width: '100%', height: '100%' }} />
                                        </div>
                                    </Box>
                                </Card>

                                <Card variant="outlined" sx={{ marginTop: '10px', textAlign: 'center' }}>
                                    <Box >
                                        <div>
                                            <img src={c3} alt='' style={{ width: '100%', height: '100%' }} />
                                        </div>
                                    </Box>
                                </Card>

                            </paper>
                        </Grid>

                        <Grid item lg={3} >
                            <paper>

                                <Card variant="outlined" sx={{ marginTop: '20px', textAlign: 'center' }}>
                                    <Box >
                                        <div>
                                            <img src={c4} alt='' style={{ width: '100%', height: '100%' }} />
                                        </div>
                                    </Box>
                                </Card>

                                <Card variant="outlined" sx={{ marginTop: '10px', textAlign: 'center' }}>
                                    <Box >
                                        <div>
                                            <img src={c5} alt='' style={{ width: '100%', height: '100%' }} />
                                        </div>
                                    </Box>
                                </Card>

                                <Card variant="outlined" sx={{ marginTop: '10px', textAlign: 'center' }}>
                                    <Box >
                                        <div>
                                            <img src={c6} alt='' style={{ width: '100%', height: '100%' }} />
                                        </div>
                                    </Box>
                                </Card>

                            </paper>
                        </Grid>

                        <Grid item lg={3} mt={8}>
                            <paper>

                                <Card variant="outlined" sx={{ marginTop: '20px', textAlign: 'center' }}>
                                    <Box>
                                        <div>
                                            <img src={c7} alt='' style={{ width: '100%', height: '100%' }} />
                                        </div>
                                    </Box>
                                </Card>

                                <Card variant="outlined" sx={{ marginTop: '10px', textAlign: 'center' }}>
                                    <Box >
                                        <div>
                                            <img src={c8} alt='' style={{ width: '100%', height: '100%' }} />
                                        </div>
                                    </Box>
                                </Card>

                                <Card variant="outlined" sx={{ marginTop: '10px', textAlign: 'center' }}>
                                    <Box >
                                        <div>
                                            <img src={c9} alt='' style={{ width: '100%', height: '100%' }} />
                                        </div>
                                    </Box>
                                </Card>

                            </paper>
                        </Grid>

                        <Grid item lg={3} >
                            <paper>

                                <Card variant="outlined" sx={{ marginTop: '20px', textAlign: 'center' }}>
                                    <Box >
                                        <div>
                                            <img src={c10} alt='' style={{ width: '100%', height: '100%' }} />
                                        </div>
                                    </Box>
                                </Card>

                                <Card variant="outlined" sx={{ marginTop: '10px', textAlign: 'center' }}>
                                    <Box >
                                        <div>
                                            <img src={c11} alt='' style={{ width: '100%', height: '100%' }} />
                                        </div>
                                    </Box>
                                </Card>

                                <Card variant="outlined" sx={{ marginTop: '10px', textAlign: 'center' }}>
                                    <Box >
                                        <div>
                                            <img src={c12} alt='' style={{ width: '100%', height: '100%' }} />
                                        </div>
                                    </Box>
                                </Card>

                            </paper>
                        </Grid>


                    </Grid>

                    <Container>
                        <Box >
                            <Grid container justifyContent='center' spacing={2} mt={1} >
                                <Grid item lg={3}>
                                    <paper>

                                    </paper>
                                </Grid>

                                <Grid item lg={6}>
                                    <paper>
                                        <Box mt={8} textAlign='center' color='white'>
                                            <Typography variant="h5"><b>Intelligent Websites That Work Overtime For Marketing Results</b></Typography>
                                        </Box>
                                    </paper>
                                </Grid>

                                <Grid item lg={3}>
                                    <paper>

                                    </paper>
                                </Grid>

                            </Grid>
                        </Box>

                        <Grid container justifyContent='center' spacing={2} mt={4} >
                            <Grid item lg={12}>
                                <paper>

                                </paper>
                            </Grid>
                        </Grid>

                    </Container>


                </Box>
            </Box>

            <Box>
                <Box sx={{ color: 'white' }} className="dot">
                    {/* <Container> */}
                    <Grid container justifyContent='center' mt={8}>


                        <Grid item lg={3}>
                            <paper>
                                <Box mt={4} mb={4} textAlign='center'>
                                    <Typography variant="h4"><b>Contact</b></Typography>
                                </Box>
                            </paper>
                        </Grid>

                        <Grid item lg={3}>
                            <paper>
                                <Box mt={4} mb={4} textAlign='center'>
                                    <Box sx={{ display: 'flex' }}>
                                        <Typography ><b><CallIcon /></b></Typography> &nbsp;
                                        <Typography v><b>+91244566774</b></Typography>
                                    </Box>
                                    <Box mt={2} textAlign='center' sx={{ display: 'flex' }}>
                                        <Typography ><b><MailOutlineIcon /></b></Typography> &nbsp;
                                        <Typography ><b>abcde@gmail.com</b></Typography>
                                    </Box>
                                </Box>
                            </paper>
                        </Grid>

                        <Grid item lg={3}>
                            <paper>
                                <Box mt={4} mb={4} textAlign='center'>

                                    <Box mt={2} textAlign='center' sx={{ display: 'flex' }}>
                                        <Typography ><b><FmdGoodIcon /></b></Typography>
                                        <Typography ><b></b>207, Dhara trade center, Mahadev Chowk,
                                            Mota varachha, Surat 394101</Typography>
                                    </Box>
                                </Box>
                            </paper>
                        </Grid>

                        <Grid item lg={3}>
                            <paper>
                                <Box mt={4} mb={4} justifyContent='center' sx={{ display: 'flex' }}>
                                    <Box m={1}>
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

                    </Grid>
                    {/* </Container> */}
                </Box>


                <Container>
                    <Grid container justifyContent='center' mb={7}>
                        <Grid item lg={2}>
                            <paper>

                            </paper>
                        </Grid>

                        <Grid item lg={8} className='pink'>
                            <paper>
                                <Card variant="outlined" sx={{ width: '100%', height: '100%', textAlign: 'center', boxShadow: 'initial' }} >
                                    <Box p={3} className='card2'>

                                        <Box>
                                            <Box mt={2}>
                                                <Typography variant="h4"><b className='circle'>Still have questions?</b></Typography>
                                            </Box>
                                            <Box mt={4}>
                                                <Typography variant="subtitle" >
                                                    We’re ready to answer your questions and jump start your project
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <form>
                                            <Grid container justifyContent='center' mb={2}>
                                                <Grid item lg={2}></Grid>

                                                <Grid item lg={8}>

                                                    <Box m={3} sx={{ display: 'flex' }}>

                                                        <Box sx={{ Width: '100%' }} >
                                                            <TextField type='text' fullWidth label="Name" id="fullWidth" />
                                                        </Box>

                                                        <Box ml={3} sx={{ Width: '100%' }}>
                                                            <TextField type='text' fullWidth label="Email" id="fullWidth" />
                                                        </Box>

                                                        <Box ml={3} sx={{ Width: '100%' }}>
                                                            <TextField type='Password' fullWidth label="Password" id="fullWidth" />
                                                        </Box>

                                                    </Box>


                                                </Grid>

                                                <Grid item lg={2}></Grid>
                                            </Grid>
                                            <Grid container justifyContent='center' mb={2}>
                                                <Grid item lg={2}></Grid>
                                                <Grid item lg={8}>
                                                    <Box sx={{ Width: '100%' }}>
                                                        <TextField type='area' fullWidth label="Your Message" />
                                                    </Box>
                                                </Grid>
                                                <Grid item lg={2}></Grid>
                                            </Grid>
                                            <Box>
                                                <Button variant='contained'>Send Message</Button>
                                            </Box>
                                        </form>
                                    </Box>
                                </Card>
                            </paper>
                        </Grid>

                        <Grid item lg={2}>
                           
                        </Grid>

                    </Grid>
                </Container>
            </Box>

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
    )
}
