import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import info from '@/public/data.jsx'
import Birthday from '@/components/Birthday'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  console.log(info)
  return (
    <>
      {info.map((person, index) => (<Birthday props={person} />))}
      {/* <Birthday props={info[0]} /> */}





    </>
  )
}
