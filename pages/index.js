import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import info from '@/public/data.jsx'
import Birthday from '@/components/Birthday'
import Upcoming from '@/components/Upcoming'
import { useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

// returns true if today is person's birthday
const isBirthday = (dateString) => {
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getUTCMonth();
  const currentYear = today.getUTCFullYear();

  const date = new Date(dateString);
  const day = Math.round(date.getUTCDate() + date.getTimezoneOffset() / 60 / 24);
  const month = date.getUTCMonth();
  const year = date.getUTCFullYear();
  return (month == currentMonth && day == currentDay)


}


export default function Home() {
  const [people, setPeople] = useState(info);
  let upcomingBirthdays = [];
  let todayBirthdays = []
  for (let person of people) {
    const { birthday } = person;

    if (isBirthday(birthday)) {
      if (todayBirthdays.length === 0)
        todayBirthdays.push(person)
      else {
        for (let elem of todayBirthdays) {
          const index = todayBirthdays.findIndex(elem => elem?.id == person?.id)
          if (index == -1) {
            todayBirthdays.push(person);

          }
        }
      }
    }
    else {
      if (upcomingBirthdays.length === 0)
        upcomingBirthdays.push(person)
      else {
        for (let elem of upcomingBirthdays) {
          const index = upcomingBirthdays.findIndex(elem => elem.id == person.id)
          if (index == -1)
            upcomingBirthdays.push(person);
        }
      }
    }

  }

  const [upcoming, setUpcoming] = useState(upcomingBirthdays)
  return (
    <>
      <div className='flex flex-col lg:flex-row items-center'>
        <div className='w-1/2 mx-auto'>
          <h1 className="mt-4 p-4 text-6xl font-bold font-serif text-yellow-500 mb-4 text-center">Today's Occasions</h1>
          {todayBirthdays.map((person, index) => (<Birthday key={person.id} props={person} />))}
        </div>
        <div className='flex flex-col w-1/2 mx-auto'>
          <h1 className="mt-2 p-4 text-3xl font-bold text-yellow-700 mb-4 text-center">Upcoming Birthdays</h1>
          {upcoming.map((person, index) => (<Upcoming key={person.id} props={person} />))}
          <button className="bg-yellow-700 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mx-auto font-sans my-3" onClick={(e) => setUpcoming([])}>Clear Upcoming Reminders</button>

        </div>
      </div>

    </>
  )
}
