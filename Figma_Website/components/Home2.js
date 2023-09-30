import * as React from 'react';
import '../asset/css/style.css'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'; 
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import circle1 from '../asset/images/circle1.jpg';
import phone from '../asset/images/phone.jpg';
import circle4 from '../asset/images/circle4.jpg';
import circle2 from '../asset/images/circle2.jpg';
import circle3 from '../asset/images/circle3.jpg';
import Container from '@mui/material/Container';
import Dani5 from '../asset/images/Dani5.jpg';
import Dmarc4 from '../asset/images/Dmarc4.jpg'
import indeed2 from '../asset/images/indeed2.jpg'
import Sallie6 from '../asset/images/Sallie6.jpg'
import Human1 from '../asset/images/Human1.jpg'
import Stanlee3 from '../asset/images/Stanlee3.jpg'
import Card from '@mui/material/Card';
import icon1 from '../asset/images/icon1.jpg';
import icon2 from '../asset/images/icon2.jpg';
import icon4 from '../asset/images/icon4.jpg';
import icon5 from '../asset/images/icon5.jpg';
import removebg from '../asset/images/removebg.jpg';
import Mask1 from '../asset/images/Mask(1).jpg';
import Mask2 from '../asset/images/Mask(2).jpg';
import Mask3 from '../asset/images/Mask(3).jpg';
import XMlogo from '../asset/images/XMlogo.jpg';
import TextField from '@mui/material/TextField';
import StarBorder from '@mui/icons-material/StarBorder';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GradeIcon from '@mui/icons-material/Grade';
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
import Navbar from './Navbar';







export default function Home2() {

  return (
    <>
      <Navbar />
      <hr />
      {/* first part start */}

      <Box sx={{ flexGrow: 1 }}>
        <Grid xs={12} container spacing={2} >

          <Grid item xs={12} sm={4} lg={2}>
            <Box mt={4}>
              <img src={circle1} alt='' />
            </Box>
          </Grid>

          <Grid item xs={12} sm={4} lg={3} mt={7}>
            <Box sx={{ marginTop: '30px' }}>
              <h1>Web Design And Development Company</h1>
            </Box >
            <Box sx={{ textAlign: 'right', marginRight: '50px' }}><img src={circle4} alt='' /></Box>
            <Box>
              <Typography>
                We create clean and creative websites that are professional and help
                you generate more visitors  and revenue.
              </Typography>
              <Box mt={2}>
                <Button variant="contained" className='btn'>Contact Us</Button>
              </Box>
              <Box sx={{ textAlign: 'right', marginRight: '50px' }}><img src={circle3} alt='' /></Box>
              <Box sx={{ textAlign: 'left', marginRight: '50px' }}><img src={circle2} alt='' /></Box>

            </Box>
          </Grid>

          <Grid item xs={12} sm={4} lg={7} >
            <div className=''>
              <img src={phone} alt='' style={{ width: '100%', height: '100%' }} />
            </div>
          </Grid>

        </Grid>

      </Box>

      {/* fisrt part end*/}

      {/* second part start */}

      <Container >
        <Grid container justifyContent='center' mb={8}>

          <Grid item lg={2}>
            <paper>
              <div>
                <img src={Dani5} alt='' />
              </div>
            </paper>
          </Grid>

          <Grid item lg={2}>
            <paper>
              <div>
                <img src={Sallie6} alt='' />
              </div>
            </paper>
          </Grid>

          <Grid item lg={2}>
            <paper>
              <div>
                <img src={indeed2} alt='' />
              </div>
            </paper>
          </Grid>

          <Grid item lg={2}>
            <paper>
              <div>
                <img src={Stanlee3} alt='' />
              </div>
            </paper>
          </Grid>

          <Grid item lg={2}>
            <paper>
              <div>
                <img src={Human1} alt='' />
              </div>
            </paper>
          </Grid>

          <Grid item lg={2}>
            <paper>
              <div>
                <img src={Dmarc4} alt='' />
              </div>
            </paper>
          </Grid>

        </Grid>
      </Container>

      {/* second part end */}



      {/* third part start */}

      <Container>
        <Grid container justifyContent='center'>
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
          <Grid item lg={4}>
            <paper>
              <Box p={3} mt={3}>

                <Typography variant="h4">Info gathering</Typography>
                <Typography variant="subtitle" className='fir1'>
                  Need a good understanding of what are your business goals and dreams.
                </Typography>

              </Box>
            </paper>
          </Grid>

          <Grid item lg={4}>
            <paper>
              <Box p={3} mt={3}>

                <Typography variant="h4">Planning</Typography>
                <Typography variant="subtitle" className='fir2'>
                  We will help you to decide what technologies should be implemented.
                </Typography>

              </Box>
            </paper>
          </Grid>

          <Grid item lg={4}>
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

        </Grid>
      </Container>

      {/* third part end */}

      {/* fourth part start */}



      <Container>
        <Grid container justifyContent='center'>

          <Box mt={8}>
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
                  <box mt={2}>
                    <Typography variant="h4">Backup & Secuirty</Typography>
                  </box>
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
            </paper>
          </Grid>

        </Grid>

        <Grid container justifyContent='center' spacing={3} mt={1}>
          <Grid item lg={4}>
            <paper>

            </paper>
          </Grid>

          <Grid item lg={4}>
            <paper>
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
            </paper>
          </Grid>

          <Grid item lg={4}>
            <paper>

            </paper>
          </Grid>

        </Grid>

      </Container>



      {/* fouth part end */}
      <Box>
        <Box sx={{ background: 'rgb(6, 6, 34)' }} mt={8}>
          <Container>
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
            <Box m={4} textAlign='center'>
              <Button variant='contained'>View More Work</Button>
            </Box>
            <Grid container spacing={2} >
            <Grid item lg={12} mt={2}>

            </Grid>
            </Grid>

          </Box>

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
                    <div className='cardpic'>
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
      </Box>


      <Container>
        <Grid container justifyContent='center' spacing={2} mt={1} mb={4}>
          <Grid item lg={2}>
            <paper>

            </paper>
          </Grid>

          <Grid item lg={8}>
            <paper>
              <Box mt={8} textAlign='center'>
                <Typography variant="h4"><b>Intelligent Websites That Work Overtime For Marketing Results</b></Typography>
              </Box>
            </paper>
          </Grid>

          <Grid item lg={2}>
            <paper>

            </paper>
          </Grid>

        </Grid>
      </Container>


      <Box sx={{ background: 'black', color: 'white' }} justifyContent='center' >
        <Grid container >

          <Grid item lg={2}>
            <paper>
              <Box mt={3} mb={3} textAlign='center'>

              </Box>
            </paper>
          </Grid>

          <Grid item lg={2}>
            <paper>
              <Box mt={4} mb={4} textAlign='center'>
                <Box>
                  <Typography variant="h4"><b>25+</b></Typography>
                </Box>
                <Box mt={2} textAlign='center'>
                  <Typography variant="h6"><b>Year OF Experience</b></Typography>
                </Box>
              </Box>
            </paper>
          </Grid>

          <Grid item lg={2}>
            <paper>
              <Box mt={4} mb={4} textAlign='center'>
                <Box>
                  <Typography variant="h4"><b>38+</b></Typography>
                </Box>
                <Box mt={2} textAlign='center'>
                  <Typography variant="h6"><b>Expert Of team Member</b></Typography>
                </Box>
              </Box>
            </paper>
          </Grid>

          <Grid item lg={2}>
            <paper>
              <Box mt={4} mb={4} textAlign='center'>
                <Box>
                  <Typography variant="h4"><b>3K+</b></Typography>
                </Box>
                <Box mt={2} textAlign='center'>
                  <Typography variant="h6"><b>Project complete</b></Typography>
                </Box>
              </Box>
            </paper>
          </Grid>

          <Grid item lg={2}>
            <paper>
              <Box mt={4} mb={4} textAlign='center'>
                <Box>
                  <Typography variant="h4"><b>99%</b></Typography>
                </Box>
                <Box mt={2} textAlign='center'>
                  <Typography variant="h6"><b>Clients Satisfied</b></Typography>
                </Box>
              </Box>
            </paper>
          </Grid>

          <Grid item lg={2}>
            <paper>
              <Box mt={4} mb={4} textAlign='center'>

              </Box>
            </paper>
          </Grid>


        </Grid>
      </Box>



      <Container justifyContent='center'>
        <Grid container spacing={2} mt={1}>
          <Grid item lg={2}>
            <paper>

            </paper>
          </Grid>

          <Grid item lg={8}>
            <paper>
              <Box mt={5} textAlign='center'>
                <Typography variant="h6"><a href='#'>OUR SERVICES</a></Typography>
              </Box>

              <Box mt={4} textAlign='center'>
                <Typography variant="h4"><b>What We Offer</b></Typography>
              </Box>
            </paper>
          </Grid>

          <Grid item lg={2}>
            <paper>

            </paper>
          </Grid>

        </Grid>


        <Grid container justifyContent='center' spacing={2} mt={1} mb={4}>

          <Grid item lg={3} mt={7}>

            <Box mt={8}>

              <Box mt={4}>
                <Box mt={3} textAlign='right'>
                  <Typography variant="h5"><b>Awesome Ideas</b></Typography>
                </Box>

                <Box mt={1}>
                  <Typography ><b>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</b></Typography>
                </Box>
              </Box>

              <Box mt={3}>
                <Box mt={3} textAlign='right'>
                  <Typography variant="h5" ><b>Web Solution</b></Typography>
                </Box>
                <Box mt={1}>
                  <Typography ><b>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</b></Typography>
                </Box>
              </Box>

            </Box>

          </Grid>

          <Grid item lg={6}>

            <Box mt={1} textAlign='center'>
              <div className='remove'>
                <img src={removebg} alt='' />
              </div>
            </Box>

          </Grid>

          <Grid item lg={3} mt={7}>

            <Box mt={8}>

              <Box mt={4}>
                <Box mt={3} >
                  <Typography variant="h5"><b>Planning</b></Typography>
                </Box>

                <Box mt={1}>
                  <Typography ><b>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</b></Typography>
                </Box>
              </Box>

              <Box mt={3}>
                <Box mt={3} >
                  <Typography variant="h5" ><b>Client Market</b></Typography>
                </Box>
                <Box mt={1}>
                  <Typography ><b>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</b></Typography>
                </Box>
              </Box>

            </Box>


          </Grid>

        </Grid>
      </Container>



      <Box sx={{ color: 'white' }} mt={7} className="dot">
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
        <Grid className='pink' container justifyContent='center' mb={7}>
          <Grid item lg={2}>
            <paper>

            </paper>
          </Grid>

          <Grid item lg={8}>
            <paper>
              <Card  variant="outlined" sx={{ width: '100%', height: '100%', textAlign: 'center', boxShadow: 'initial' }} >
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
            <paper>

            </paper>
          </Grid>

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