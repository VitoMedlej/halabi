import Navbar from '@/Components/Navbar/Navbar'
import '../Styles/Styles.css'
import '../Styles/qty.css'
import Footer from '@/Components/Footer/Footer'
import Sidebar from '@/Components/Sidebar/Sidebar'
import ScrollToTop from '@/Components/ScrollToTop/ScrollToTop'
import QuickCart from '@/Components/Shared/QuickCart/QuickCart'
import ContextWrapper from '@/context/Contexts'
import ContactSection from '@/Components/ContactSection/ContactSection'

export const metadata = {
    title: 'Al halabi  - Car Rental Agency in Lebanon ',
    description: 'Explore Al Halabi Rent a Car in Lebanon. Affordable economy cars, luxury options, and a seamless rental experience await. Book your ride today',
    icons: {
        icon: `https://ucarecdn.com/1520c0d1-bd9e-4be7-9f74-255a3e5bc352/Blacklogo.png`
    }
}

export default function RootLayout({children} : {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;700;900&display=swap" rel="stylesheet"/>
            </head>

            <body className=''>

                <ContextWrapper>
                    <Navbar/>
                    <Sidebar cates={undefined}/>
                    <QuickCart/>
                    <ScrollToTop/>
                    <main >

                     {children}
                    </main>
                    <ContactSection/>
                    <Footer/>
                </ContextWrapper>
            </body>
        </html>
    )
}
