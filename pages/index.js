import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import info from '@/public/data.jsx'
import Birthday from '@/components/UpcomingBirthday'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  console.log(info)
  return (
    <>
      <div className='flex'>
        <div className='w-1/2'>
          <h1 className="mt-4 text-3xl font-bold text-gray-800 mb-4 text-center">Today's Occasions</h1>

          {info.map((person, index) => (<Birthday props={person} />))}

        </div>
        <div className='w-1/2'>
          <h1 className="mt-4  text-3xl font-bold text-gray-800 mb-4 text-center">Upcoming Birthday</h1>
          {info.map((person, index) => (<Birthday props={person} />))}

        </div>
      </div>
      {/* Calling Birthday component on each person */}


    </>
  )
}
