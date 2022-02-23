import '../styles/globals.scss'
import '../styles/Home.module.scss'
import '../styles/main.scss'
import '../styles/blogpage.scss'
import '../styles/Likebtn.scss'
import '../styles/main.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Footer from '../components/Footer'
import '../styles/footer.scss'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <ThemeProvider attribute="class">
                <Component {...pageProps} />
                <Footer />
            </ThemeProvider>
        </>
    )
}

export default MyApp
