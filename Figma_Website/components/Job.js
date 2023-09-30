import React from 'react'
import { Box, Grid, Container, Typography, Button } from '@mui/material'
import Navbar from './Navbar'
import Group from '../asset/images/Group.jpg'
import job3 from '../asset/images/job3.jpg'
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Card from '@mui/material/Card'
import XMlogo from '../asset/images/XMlogo.jpg';
import Image1 from '../asset/images/image1.jpg'
import Image2 from '../asset/images/image2.jpg'
import Image3 from '../asset/images/image3.jpg'
import Image4 from '../asset/images/image4.jpg'
import Image5 from '../asset/images/image5.jpg'
import Image6 from '../asset/images/image6.jpg'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea'




export default function Job() {
    return (

        <>
            <Navbar />
            <hr />

            <Box sx={{ color: 'white' }} className="dot">
                <Container>
                    <Grid container justifyContent='center'>


                        <Grid item lg={2} >

                        </Grid>

                        <Grid item lg={4} mt={12}>
                            <Box>
                                <Typography variant='h3'><b>We Are Always Looking For Talent</b></Typography>
                            </Box>
                            <Box display='flex' mt={4}>
                                <Box >
                                    <Button variant='contained' sx={{ backgroud: 'white' }} >Wo We Are</Button>
                                </Box>
                                <Box ml={4}>
                                    <Button variant='contained' sx={{ backgroud: 'white' }} >Contact Us</Button>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item lg={4}>

                        </Grid>

                        <Grid item lg={2}>

                        </Grid>

                    </Grid>


                    <Grid container justifyContent='center' mt={10}>
                        <Grid item lg={12} ></Grid>
                    </Grid>
                </Container>
            </Box>

            <Container>
                <Grid container justifyContent='center' mt={6} spacing={2}>

                    {/* <Grid item lg={2} ></Grid> */}

                    <Grid item lg={6} mt={8}>
                        <Box>
                            <Typography variant='h5'>
                                <b> Be a part of future of work.</b>
                            </Typography>
                        </Box>
                        <Box mt={6}>
                            <Typography >
                                Stop wasting your time, hire our in-house software developers that are
                                tested and experienced to start working on your projects. No more going through
                                hundred of applications, interviewing dozen of candidates, and having to keep tabs on
                                everyone. Every developer
                                you hire from us is assigned a project manager to make sure you have a
                                great experience with our amazing developers.
                            </Typography>
                        </Box>
                        <Box mt={3}>
                            <Button variant='outlined'  >Apply Now</Button>
                        </Box>
                    </Grid>
                    <Grid item lg={6} >
                        <img src={Group} alt='' />
                    </Grid>


                </Grid>
            </Container>

   


            <Box sx={{ color: 'white' }} className="back">
                <Container>
                    <Grid container justifyContent='center'>
                    <Grid item lg={3} mt={8}></Grid>
                        <Grid item lg={6} mt={8}>
                            <Box>
                            <Typography variant='h5' textAlign={'center'}  color='white'>Hiring developers to work for you!</Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={3} mt={3}></Grid>
                    </Grid>
                    <Grid container justifyContent='center' mt={10}>
                        <Grid item lg={12} mt={12}></Grid>
                    </Grid>
                </Container>
            </Box>



            <Container className='node'>
                <Grid container justify='center' spacing={3}>
                    <Grid item lg={4} >

                        <Card variant="outlined" sx={{  width: '100%', height: '100%', textAlign: 'center' }} className='card3'>
                           <Container>
                            <Box p={3}>
                                <div>
                                    <img src={Image1} alt='' />
                                </div>
                                <Box mt={2}>
                                    <Typography variant="h4">React.js Developer</Typography>
                                </Box>
                                <Box mt={4}>
                                    <Typography variant="subtitle">
                                        In 2-4 business days we will find the ideal in-house developer for you and we will send you an overview of their experience similar to this.
                                    </Typography>
                                    <hr />
                                </Box>

                            </Box>

                            <Box textAlign={'left'}>
                                <Typography><b>Expert in</b></Typography>

                                <Grid Specing={2} mt={1}>

                                    <Stack direction="row" spacing={1}>
                                        <Grid item lg={4}>
                                            <Chip label="React.js" variant="outlined" />
                                        </Grid>
                                        <Grid item lg={4}>
                                            <Chip label="Node.js" variant="outlined" />
                                        </Grid>
                                        <Grid item lg={4}>
                                            <Chip label="CSS" variant="outlined" />
                                        </Grid>
                                        <Grid item lg={4}>
                                            <Chip label="Angular JS" variant="outlined" />
                                        </Grid>


                                    </Stack>
                                </Grid>

                                <Grid Specing={2} mt={1}>
                                    <Grid item lg={4}>
                                        <Chip label="React Native" variant="outlined" />
                                    </Grid>
                                </Grid>

                                <Grid Specing={2} mt={2}>
                                    <Typography><b>Also Worked With</b></Typography>


                                    <Stack direction="row" spacing={1} mt={1}>
                                        <Grid item lg={4}>
                                            <Chip label="Angular" variant="outlined" />
                                        </Grid>
                                        <Grid item lg={4}>
                                            <Chip label="Vue.js" variant="outlined" />
                                        </Grid>
                                        <Grid item lg={4}>
                                            <Chip label="PHP" variant="outlined" />
                                        </Grid>
                                        <Grid item lg={4}>

                                        </Grid>
                                    </Stack>
                                </Grid>

                                <Grid Specing={2} mt={1} display={'flex'}>
                                    <Grid item lg={6}>
                                        <Typography><b>Experience</b></Typography>
                                        <Typography variant='Subtitle'>6 years</Typography>

                                    </Grid>
                                    <Grid item lg={6}>
                                        <Typography><b>Availability</b></Typography>
                                        <Typography variant='Subtitle'>Full Time</Typography>

                                    </Grid>
                                </Grid>
                            </Box>
                            </Container>
                            <CardActionArea>
                                <CardContent className='con' >

                                    <Typography gutterBottom variant="h6" color='blue' >
                                        Apply As A React.js Developer →
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                            
                        </Card>

                    </Grid>

                    <Grid item lg={4}>
                        <paper>
                            <Card variant="outlined" sx={{  width: '100%', height: '100%', textAlign: 'center' }} className='card3'>
                            <Container>
                                <Box p={3} >
                                    <div>
                                        <img src={Image2} alt='' />
                                    </div>
                                    <Box mt={2}>
                                        <Typography variant="h4">Node.js developer</Typography>
                                    </Box>
                                    <Box mt={4}>
                                        <Typography variant="subtitle">
                                            In 2-4 business days we will find the ideal in-house developer for you and we will send you an overview of their experience similar to this.
                                        </Typography>
                                        <hr />
                                    </Box>

                                </Box>

                                <Box textAlign={'left'} >
                                    <Typography><b>Expert in</b></Typography>

                                    <Grid Specing={2} mt={1}>

                                        <Stack direction="row" spacing={1}>
                                            <Grid item lg={4}>
                                                <Chip label="React.js" variant="outlined" />
                                            </Grid>
                                            <Grid item lg={4}>
                                                <Chip label="Node.js" variant="outlined" />
                                            </Grid>
                                            <Grid item lg={4}>
                                                <Chip label="CSS" variant="outlined" />
                                            </Grid>
                                            <Grid item lg={4}>
                                                <Chip label="Angular JS" variant="outlined" />
                                            </Grid>


                                        </Stack>
                                    </Grid>

                                    <Grid Specing={2} mt={1}>
                                        <Grid item lg={4}>
                                            <Chip label="React Native" variant="outlined" />
                                        </Grid>
                                    </Grid>

                                    <Grid Specing={2} mt={2}>
                                        <Typography><b>Also Worked With</b></Typography>


                                        <Stack direction="row" spacing={1} mt={1}>
                                            <Grid item lg={4}>
                                                <Chip label="Angular" variant="outlined" />
                                            </Grid>
                                            <Grid item lg={4}>
                                                <Chip label="Vue.js" variant="outlined" />
                                            </Grid>
                                            <Grid item lg={4}>
                                                <Chip label="PHP" variant="outlined" />
                                            </Grid>
                                            <Grid item lg={4}>

                                            </Grid>
                                        </Stack>
                                    </Grid>

                                    <Grid Specing={2} mt={1} display={'flex'}>
                                        <Grid item lg={6}>
                                            <Typography><b>Experience</b></Typography>
                                            <Typography variant='Subtitle'>6 years</Typography>

                                        </Grid>
                                        <Grid item lg={6}>
                                            <Typography><b>Availability</b></Typography>
                                            <Typography variant='Subtitle'>Full Time</Typography>

                                        </Grid>
                                    </Grid>
                                </Box>
                                </Container>
                                <CardActionArea>
                                    <CardContent className='con' >

                                        <Typography gutterBottom variant="h6" color='blue' >
                                            Apply As A React.js Developer →
                                        </Typography>

                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </paper>
                    </Grid>

                    <Grid item lg={4}>
                        <paper>
                            <Card variant="outlined" sx={{  width: '100%', height: '100%', textAlign: 'center' }} className='card3'>
                               <Container>
                                <Box p={3}>
                                    <div>
                                        <img src={Image3} alt='' />
                                    </div>
                                    <Box mt={2}>
                                        <Typography variant="h4">Python Developer</Typography>
                                    </Box>
                                    <Box mt={4}>
                                        <Typography variant="subtitle">
                                            In 2-4 business days we will find the ideal in-house developer for you and we will send you an overview of their experience similar to this.
                                        </Typography>
                                        <hr />
                                    </Box>

                                </Box>

                                <Box textAlign={'left'} >
                                    <Typography><b>Expert in</b></Typography>

                                    <Grid Specing={2} mt={1}>

                                        <Stack direction="row" spacing={1}>
                                            <Grid item lg={4}>
                                                <Chip label="React.js" variant="outlined" />
                                            </Grid>
                                            <Grid item lg={4}>
                                                <Chip label="Node.js" variant="outlined" />
                                            </Grid>
                                            <Grid item lg={4}>
                                                <Chip label="CSS" variant="outlined" />
                                            </Grid>
                                            <Grid item lg={4}>
                                                <Chip label="Angular JS" variant="outlined" />
                                            </Grid>


                                        </Stack>
                                    </Grid>

                                    <Grid Specing={2} mt={1}>
                                        <Grid item lg={4}>
                                            <Chip label="React Native" variant="outlined" />
                                        </Grid>
                                    </Grid>

                                    <Grid Specing={2} mt={2}>
                                        <Typography><b>Also Worked With</b></Typography>


                                        <Stack direction="row" spacing={1} mt={1}>
                                            <Grid item lg={4}>
                                                <Chip label="Angular" variant="outlined" />
                                            </Grid>
                                            <Grid item lg={4}>
                                                <Chip label="Vue.js" variant="outlined" />
                                            </Grid>
                                            <Grid item lg={4}>
                                                <Chip label="PHP" variant="outlined" />
                                            </Grid>
                                            <Grid item lg={4}>

                                            </Grid>
                                        </Stack>
                                    </Grid>

                                    <Grid Specing={2} mt={1} display={'flex'}>
                                        <Grid item lg={6}>
                                            <Typography><b>Experience</b></Typography>
                                            <Typography variant='Subtitle'>6 years</Typography>

                                        </Grid>
                                        <Grid item lg={6}>
                                            <Typography><b>Availability</b></Typography>
                                            <Typography variant='Subtitle'>Full Time</Typography>

                                        </Grid>
                                    </Grid>
                                </Box>
                                </Container>
                                <CardActionArea>
                                    <CardContent className='con' >

                                        <Typography gutterBottom variant="h6" color='blue' >
                                            Apply As A React.js Developer →
                                        </Typography>

                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </paper>
                    </Grid>

                </Grid>


                <Grid container justify='center' spacing={3} mt={1}>
                    <Grid item lg={4}>
                        <paper>
                            <Card variant="outlined" sx={{ width: '100%', height: '100%', textAlign: 'center' }} className='card3'>
                                <Container>
                                <Box p={3} >
                                    <div>
                                        <img src={Image4} alt='' />
                                    </div>
                                    <Box mt={2}>
                                        <Typography variant="h4">Android Developer</Typography>
                                    </Box>
                                    <Box mt={6}>
                                        <Typography variant="subtitle">
                                            In 2-4 business days we will find the ideal in-house developer for you and we will send you an overview of their experience similar to this.
                                        </Typography>
                                        <hr />
                                    </Box>

                                </Box>

                                <Box textAlign={'left'} >
                                    <Typography><b>Expert in</b></Typography>

                                    <Grid Specing={2} mt={1}>

                                        <Stack direction="row" spacing={1}>
                                            <Grid item lg={4}>
                                                <Chip label="React.js" variant="outlined" />
                                            </Grid>
                                            <Grid item lg={4}>
                                                <Chip label="Node.js" variant="outlined" />
                                            </Grid>
                                            <Grid item lg={4}>
                                                <Chip label="CSS" variant="outlined" />
                                            </Grid>
                                            <Grid item lg={4}>
                                                <Chip label="Angular JS" variant="outlined" />
                                            </Grid>


                                        </Stack>
                                    </Grid>

                                    <Grid Specing={2} mt={1}>
                                        <Grid item lg={4}>
                                            <Chip label="React Native" variant="outlined" />
                                        </Grid>
                                    </Grid>

                                    <Grid Specing={2} mt={2}>
                                        <Typography><b>Also Worked With</b></Typography>


                                        <Stack direction="row" spacing={1} mt={1}>
                                            <Grid item lg={4}>
                                                <Chip label="Angular" variant="outlined" />
                                            </Grid>
                                            <Grid item lg={4}>
                                                <Chip label="Vue.js" variant="outlined" />
                                            </Grid>
                                            <Grid item lg={4}>
                                                <Chip label="PHP" variant="outlined" />
                                            </Grid>
                                            <Grid item lg={4}>

                                            </Grid>
                                        </Stack>
                                    </Grid>

                                    <Grid Specing={2} mt={1} display={'flex'}>
                                        <Grid item lg={6}>
                                            <Typography><b>Experience</b></Typography>
                                            <Typography variant='Subtitle'>6 years</Typography>

                                        </Grid>
                                        <Grid item lg={6}>
                                            <Typography><b>Availability</b></Typography>
                                            <Typography variant='Subtitle'>Full Time</Typography>

                                        </Grid>
                                    </Grid>
                                </Box>
                               </Container>
                                <CardActionArea>
                                    <CardContent className='con' >

                                        <Typography gutterBottom variant="h6" color='blue' >
                                            Apply As A React.js Developer →
                                        </Typography>

                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </paper>
                    </Grid>

                    <Grid item lg={4}>
                        <paper>
                            <Card variant="outlined" sx={{ width: '100%', height: '100%', textAlign: 'center' }} className='card3'>
                                <Container>
                                <Box p={3}>
                                    <div>
                                        <img src={Image5} alt='' />
                                    </div>
                                    <Box mt={1}>
                                        <Typography variant="h4">iOS Developer</Typography>
                                    </Box>
                                    <Box mt={9}>
                                        <Typography variant="subtitle">
                                            In 2-4 business days we will find the ideal in-house developer for you and we will send you an overview of their experience similar to this.
                                        </Typography>
                                        <hr />
                                    </Box>

                                </Box>

                                <Box textAlign={'left'} >
                                    <Typography><b>Expert in</b></Typography>

                                    <Grid Specing={2} mt={1}>

                                        <Stack direction="row" spacing={1}>
                                            <Grid item lg={4}>
                                                <Chip label="React.js" variant="outlined" />
                                            </Grid>
                                            <Grid item lg={4}>
                                                <Chip label="Node.js" variant="outlined" />
                                            </Grid>
                                            <Grid item lg={4}>
                                                <Chip label="CSS" variant="outlined" />
                                            </Grid>
                                            <Grid item lg={4}>
                                                <Chip label="Angular JS" variant="outlined" />
                                            </Grid>


                                        </Stack>
                                    </Grid>

                                    <Grid Specing={2} mt={1}>
                                        <Grid item lg={4}>
                                            <Chip label="React Native" variant="outlined" />
                                        </Grid>
                                    </Grid>

                                    <Grid Specing={2} mt={2}>
                                        <Typography><b>Also Worked With</b></Typography>


                                        <Stack direction="row" spacing={1} mt={1}>
                                            <Grid item lg={4}>
                                                <Chip label="Angular" variant="outlined" />
                                            </Grid>
                                            <Grid item lg={4}>
                                                <Chip label="Vue.js" variant="outlined" />
                                            </Grid>
                                            <Grid item lg={4}>
                                                <Chip label="PHP" variant="outlined" />
                                            </Grid>
                                            <Grid item lg={4}>

                                            </Grid>
                                        </Stack>
                                    </Grid>

                                    <Grid Specing={2} mt={1} display={'flex'}>
                                        <Grid item lg={6}>
                                            <Typography><b>Experience</b></Typography>
                                            <Typography variant='Subtitle'>6 years</Typography>

                                        </Grid>
                                        <Grid item lg={6}>
                                            <Typography><b>Availability</b></Typography>
                                            <Typography variant='Subtitle'>Full Time</Typography>

                                        </Grid>
                                    </Grid>
                                </Box>
                              </Container>
                                <CardActionArea>
                                    <CardContent className='con' >

                                        <Typography gutterBottom variant="h6" color='blue' >
                                            Apply As A React.js Developer →
                                        </Typography>

                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </paper>
                    </Grid>

                    <Grid item lg={4}>
                        <paper>
                            <Card variant="outlined" sx={{ width: '100%', height: '100%', textAlign: 'center' }} className='card3'>
                                 <Container>
                                <Box p={3} >
                                    <div>
                                        <img src={Image6} alt='' />
                                    </div>
                                    <Box mt={3}>
                                        <Typography variant="h4">UX UI Designer</Typography>
                                    </Box>
                                    <Box mt={9}>
                                        <Typography variant="subtitle">
                                            In 2-4 business days we will find the ideal in-house developer for you and we will send you an overview of their experience similar to this.
                                        </Typography>
                                        <hr />
                                    </Box>

                                </Box>

                                <Box textAlign={'left'} >
                                    <Typography><b>Expert in</b></Typography>

                                    <Grid Specing={2} mt={1}>

                                        <Stack direction="row" spacing={1}>
                                            <Grid item lg={4}>
                                                <Chip label="React.js" variant="outlined" />
                                            </Grid>
                                            <Grid item lg={4}>
                                                <Chip label="Node.js" variant="outlined" />
                                            </Grid>
                                            <Grid item lg={4}>
                                                <Chip label="CSS" variant="outlined" />
                                            </Grid>
                                            <Grid item lg={4}>
                                                <Chip label="Angular JS" variant="outlined" />
                                            </Grid>


                                        </Stack>
                                    </Grid>

                                    <Grid Specing={2} mt={1}>
                                        <Grid item lg={4}>
                                            <Chip label="React Native" variant="outlined" />
                                        </Grid>
                                    </Grid>

                                    <Grid Specing={2} mt={2}>
                                        <Typography><b>Also Worked With</b></Typography>


                                        <Stack direction="row" spacing={1} mt={1}>
                                            <Grid item lg={4}>
                                                <Chip label="Angular" variant="outlined" />
                                            </Grid>
                                            <Grid item lg={4}>
                                                <Chip label="Vue.js" variant="outlined" />
                                            </Grid>
                                            <Grid item lg={4}>
                                                <Chip label="PHP" variant="outlined" />
                                            </Grid>
                                            <Grid item lg={4}>

                                            </Grid>
                                        </Stack>
                                    </Grid>

                                    <Grid Specing={2} mt={1} display={'flex'}>
                                        <Grid item lg={6}>
                                            <Typography><b>Experience</b></Typography>
                                            <Typography variant='Subtitle'>6 years</Typography>

                                        </Grid>
                                        <Grid item lg={6}>
                                            <Typography><b>Availability</b></Typography>
                                            <Typography variant='Subtitle'>Full Time</Typography>

                                        </Grid>
                                    </Grid>
                                </Box>
                               </Container>
                                <CardActionArea>
                                    <CardContent className='con' >

                                        <Typography gutterBottom variant="h6" color='blue' >
                                            Apply As A React.js Developer →
                                        </Typography>

                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </paper>
                    </Grid>

                </Grid>

            </Container>

            {/* end */}

            <Box className="job">
                <Container>
                    <Grid container justifyContent='center' mt={6} spacing={2}>

                        {/*<Grid item lg={2} ></Grid> */}


                        <Grid item lg={5} >
                            <img src={job3} alt='' />
                        </Grid>

                        <Grid item lg={2} ></Grid>


                        <Grid item lg={5} mt={8}>
                            <Box>
                                <Typography variant='h6' color='blue'>
                                    XM Technologies
                                </Typography>
                            </Box>
                            <Box mt={2}>
                                <Typography variant='h5'>
                                    <b> Ready to be part of our team?</b>
                                </Typography>
                            </Box>
                            <Box mt={6}>
                                <Typography >
                                    Are you creatively curious or curiously creative
                                    too? Join our network to work with us, grow with us and make wonderful things together.
                                </Typography>
                            </Box>
                            <Box mt={3}>
                                <Button variant='outlined' >Apply Now</Button>
                            </Box>
                        </Grid>


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
    )
}
