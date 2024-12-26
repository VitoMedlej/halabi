"use client"
import FAQ from '@/Components/FAQ/FAQ'
import { Container, Box, Typography, Divider } from '@mui/material'
import React from 'react'

const text = [
    `Located in Bauchrieh, Lebanon, Al Halabi Rent a Car is your trusted partner for premium car rental services. Whether you're seeking affordable economy cars or luxury vehicles, we offer a wide range of options to meet your needs. Explore our fleet and enjoy hassle-free car rentals tailored for your convenience.`,
    `At Al Halabi in Bauchrieh, excellence drives everything we do. From top-tier customer service to a meticulously maintained car fleet, we prioritize your comfort and satisfaction. Rent with confidence and travel Lebanon in style.`,
    `Discover why Al Halabi Rent a Car in Bauchrieh is the preferred choice for car rentals in Lebanon. With competitive rates, reliable vehicles, and unmatched service, we ensure a seamless rental experience for every journey.`,
    `Our commitment to sustainability and customer satisfaction sets us apart. Located in Bauchrieh, Al Halabi Rent a Car is proud to provide eco-friendly and efficient vehicle options. Book today and explore Lebanon with ease.`
];
const Index = () => {
  return (
    <Container maxWidth='lg' className='auto' sx={{mx:1,py:4}}>
           <Typography sx={{mb:1,mx:'auto',fontSize:'2.5em',fontWeight:'600'}} className=" center text-center">
            ABOUT US
        </Typography>
        <Box sx={{width:'100%',height:'400px'}}>
            <img src="https://ucarecdn.com/42db8a52-041f-4b79-8bfb-5c10a3a3c4fd/Al halabi green011.jpg" alt="" className="img contain" />
        </Box>
    
        <Box sx={{my:4}}>
                {
                    text.map(i=>{
                            return <Typography key={i} sx={{maxWidth:'md',py:1}} className='auto text-center'>{i}</Typography>
                    })
                } 
        </Box>
        <Divider></Divider>
        <Typography sx={{pt:4, mb:1,mx:'auto',fontSize:'2.5em',fontWeight:'600'}} className=" center text-center">
            Frequently Asked Questions
        </Typography>
            <FAQ/>
    </Container>
  )
}

export default Index