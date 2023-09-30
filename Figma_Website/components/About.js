import React from 'react'
import Half from '../asset/images/half.jpg'
import { Box, Container } from '@mui/system'
import { Button, Grid, Typography } from '@mui/material'
import Navbar from './Navbar'
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GradeIcon from '@mui/icons-material/Grade';
import Abo from '../asset/images/abo.jpg';
import Mask1 from '../asset/images/Mask(1).jpg';
import Mask2 from '../asset/images/Mask(2).jpg';
import Mask3 from '../asset/images/Mask(3).jpg';
import Card from '@mui/material/Card'
import XMlogo from '../asset/images/XMlogo.jpg'



export default function About() {
    return (
        <>
            <Navbar />

            <Box className="full">
                <Grid container justifyContent='center'>
                    <Grid item lg={2}></Grid>
                    <Grid item lg={5} mt={20}>

                    </Grid>
                    <Grid item lg={5}></Grid>
                </Grid>

                <Grid container justifyContent='center' mt={10} >
                    <Grid item lg={12} mt={15}></Grid>
                </Grid>

                <Grid container justifyContent='center' mt={10} >
                    <Grid item lg={12} mt={15}></Grid>
                </Grid>
            </Box>

            <Box >
                <Container>
                    <Grid container justifyContent='center' mt={6} spacing={2}>

                        <Grid item lg={6} >
                            <div sx={{ width: '100%', height: '100%' }}>
                                <img src={Abo} alt='' />
                            </div>
                        </Grid>

                        <Grid item lg={6} mt={8}>
                            <Box>
                                <Typography variant='h6' color='blue'>
                                    XM Technologies
                                </Typography>
                            </Box>
                            <Box mt={2}>
                                <Typography variant='h5'>
                                    <b>More About Our Success Stories</b>
                                </Typography>
                            </Box>
                            <Box mt={6}>
                                <Typography >
                                    Positive pleasure-oriented goals are much more powerful motivators
                                    than negative fear-based ones. Although each is
                                    successful separately, the right combination of both is the most
                                    powerful motivational force known to humankind.
                                </Typography>
                            </Box>

                            <Box mt={6}>
                                <Typography >
                                    We are committed to deliver the best Quality IT Products with Passion
                                    & Prompt Services. Our highly experienced, creative and versatile development
                                    team has both the capability and aptitude to create innovative and technologically
                                    advanced mobile apps. We believe in frank working environments.
                                </Typography>
                            </Box>
                        </Grid>

                    </Grid>
                </Container>
            </Box>

            <Container>
                <Grid container justifyContent='center' >

                    <Box mt={6}>
                        <Typography variant="h4" justifyContent='center'><b className='circle'>Our XM</b></Typography>
                    </Box>

                </Grid>

                <Grid container justifyContent='center' >

                    <Box mt={6}>
                        <Typography mt={1}>
                            Our highly experienced, creative and versatile development team has both the
                            capability and aptitude to create innovative and technologically advanced mobile apps.
                            We believe in frank working environments.</Typography>
                        <Typography mt={1}>The first impression sometimes does it all. Too simple or too hazy outlook fails to
                            impress the individuals and thus might result in lack of traffic or make them switch over to
                            other similar websites. Our team of well-experienced web designers and web developer’s lead by experts are they’re to work on the designs and development of websites based on customers’ requirement and specification.
                        </Typography>
                        <Typography mt={1}>We carry out planning, and detail outline of the work, before moving onto the final task.
                            At this stage, our ideas are presented to the client and measures are taken to be assured that the
                            customer is satisfied with the ideas. A study is alongside made to make sure that the website would
                            be successful in bringing visitors and potential customers. Our work considers the use of all the latest
                            technologies. Bringing out the best through the use of them is what we look for. Once the website is ready
                            with the designs, layouts and all, it is bound to amaze all. At SkyPearl iNfotech™ our work would dazzle the eyes.
                        </Typography>
                        <Typography mt={1}>Our products are intended for web developers or webmasters who want to spend a little investment to add
                            significant value to their projects, create high-end Web applications as well as to speed up their development time.
                            At SkyPearl iNfotech™, we always try to win new grounds by stretching our limits. Let us be a pivotal aspect in your
                            software development venture to experience our professional and technical reach.</Typography>
                    </Box>

                </Grid>

            </Container >

            <Box sx={{ background: 'rgb(6, 6, 34)' }} mt={8}>
                <Container>

                    <Grid container justifyContent='center' >
                        <Box mt={3}>
                            <Typography variant="h4" textAlign='center' color='white'><b>Our Version</b></Typography>
                        </Box>
                    </Grid>


                    <Grid container  color='white' spacing={2} mt={1} >

                    <Grid item lg={1} mt={2}></Grid>

                        <Grid item lg={5} mt={2}>

                            <Box mt={4}>
                                <Typography  variant="h5">
                                For the People
                                </Typography>
                            </Box>

                            <Box mt={13}>
                               <Typography variant="h5">
                               For Process
                                </Typography>
                            </Box>

                            <Box mt={12}>
                                <Typography  variant="h5">
                                For the Clients
                                </Typography>
                            </Box>

                        </Grid>


                        <Grid item lg={5} mt={2} >

                            <Box mt={4}>
                                <Typography variant="body2" >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                 when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </Typography>
                            </Box>

                            <Box mt={7}>
                                <Typography variant="body2" >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                 when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </Typography>
                            </Box>

                            <Box mt={7}>
                                <Typography variant="body2" >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                 when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item lg={1} mt={2}></Grid>
                    

                    </Grid>

                    <Grid container justifyContent='center' >
                        <Grid item lg={12} mt={7}>
                              
                        </Grid>
                    </Grid>

                </Container>
            </Box>


           

      <Container>

        <Grid container justifyContent='center' spacing={2} mt={1}>
          <Grid item lg={2}>

          </Grid>

          <Grid item lg={8}>
            <paper>
              <Box mt={5} textAlign='center'>
                <Typography variant="h4"><b className='circle'>Testimonials</b></Typography>
              </Box>

              <Box mt={2} textAlign='center'>
                <Typography variant="h6">What our Customers are Saying</Typography>
              </Box>
            </paper>
          </Grid>

          <Grid item lg={2}>

          </Grid>

        </Grid>

        <Grid container justify='center' spacing={2} mt={1}>
          <Grid item lg={4}>
            <paper>
              <Card variant="outlined" sx={{ marginTop: '20px', width: '100%', height: '100%', textAlign: 'center' }}>
                <Box p={3} m={1}>
                  <div className='cardpic' mt={3}>
                    <img src={Mask1} alt='' />
                  </div>
                  <Box mt={2}>
                    <Typography variant="h5">Tim Brown</Typography>
                  </Box>
                  <Box mt={2}>
                    <Typography >Aora Company</Typography>
                  </Box>
                  <Box mt={4}>
                    <Typography variant="subtitle">
                      Can say about these guys only good words. After we build a website the
                      customer's flow is quite stable and our SEO results growing.
                    </Typography>
                  </Box>

                  <Box mt={4} color="#FFEF00">
                    <GradeIcon />
                    <GradeIcon />
                    <GradeIcon />
                    <GradeIcon />
                    <GradeIcon />
                  </Box>
                </Box>
              </Card>
            </paper>
          </Grid>

          <Grid item lg={4}>
            <paper>
              <Card variant="outlined" sx={{ marginTop: '20px', width: '100%', height: '100%', textAlign: 'center' }}>
                <Box p={3} m={1}>
                  <div className='cardpic'>
                    <img src={Mask2} alt='' />
                  </div>
                  <Box mt={2}>
                    <Typography variant="h5">Michael Vice</Typography>
                  </Box>
                  <Box mt={2}>
                    <Typography>Bowl Room</Typography>
                  </Box>
                  <Box mt={4}>
                    <Typography variant="subtitle">
                      High-quality WordPress theme and the team who is behind the project had helped me a lot. 100% recommended.
                    </Typography>
                  </Box>
                  <Box mt={6} color="#FFEF00">
                    <GradeIcon />
                    <GradeIcon />
                    <GradeIcon />
                    <GradeIcon />
                    <GradeIcon />
                  </Box>
                </Box>
              </Card>
            </paper>
          </Grid>

          <Grid item lg={4}>
            <paper>
              <Card variant="outlined" sx={{ marginTop: '20px', width: '100%', height: '100%', textAlign: 'center' }}>
                <Box p={3} m={1}>
                  <div className='cardpic'>
                    <img src={Mask3} alt='' />
                  </div>
                  <Box mt={2}>
                    <Typography variant="h5">Lucy Raymond</Typography>
                  </Box>
                  <Box mt={2}>
                    <Typography >Ive Logistic</Typography>
                  </Box>
                  <Box mt={4}>
                    <Typography variant="subtitle">
                      Worked with the company last 5 years and can rate the support on 5 stars as well as documentation.
                    </Typography>
                  </Box>
                  <Box mt={6} color="#FFEF00">
                    <GradeIcon />
                    <GradeIcon />
                    <GradeIcon />
                    <GradeIcon />
                    <GradeIcon />

                  </Box>
                </Box>
              </Card>
            </paper>
          </Grid>

        </Grid>
      </Container>


       {/* footer  start*/}
       <Box sx={{ background: 'rgb(6, 6, 34)', color: 'white' }} mt={9}>
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
