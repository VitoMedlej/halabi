"use client"
import { Container, Typography, Box } from '@mui/material'
import Link from 'next/link'
import React from 'react'


const text = [
    `We understand that our customers value privacy, which is why we have implemented strict policies to ensure that your personal information is handled securely and responsibly. We collect customer data to enhance your rental experience and to keep you informed about our services, promotions, and exclusive offers.`,
    `Occasionally, we may send emails with updates about our car rental services, including special deals, discounts, and important information we believe will benefit you. We may also share basic details with our trusted delivery or service agents solely for the purpose of providing seamless rental services.`,
    `If you prefer not to receive these communications, you can easily opt out at any time. We will never sell, rent, or share your personal information with third parties. Your privacy is our priority, and we are committed to handling your data responsibly.`
];
const Index = () => {
  return (
    <Container sx={{mx:1,mt:24}} maxWidth='lg' >
        <Typography component='h1' sx={{mb:1,fontWeight:600,fontSize:'2em'}}>
           Privacy Policy
        </Typography>
        <Box>
            {
                text.map(i=>{
                    return <Typography sx={{maxWidth:'md',my:1}} key={i}>
                        {i}
                    </Typography>
                })
            }
        </Box>
        <Box>
            <Link href='/info/terms-and-conditions'>
                Terms and conditions
            </Link>
        </Box>
    </Container>
  )
}

export default Index