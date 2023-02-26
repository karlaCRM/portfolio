import '@/styles/globals.css'
import {Bitter} from '@next/font/google'


const bitter = Bitter({
  subsets:['latin'],
})

export default function App({ Component, pageProps }) {
  return (
    <main className={bitter.className}>
      <Component {...pageProps} />
    </main>
  )
}