import Link from 'next/link';
import Image from 'next/image';
import React from 'react'

interface Props {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

const EventCard = ({ title, image, slug, location, date, time }: Props) => {
  return (
    <Link href={`/events/${slug}`} id='event-card'>
      <Image src={image} className="poster" alt={title} width={410} height={300} />
      <div className='flex flex-row gap-2'>
        <Image src="/icons/pin.svg" alt="location" width={14} height={14} />
        <p className='location'>{location}</p>

      </div>
      <p className='title'>{title}</p>
      <div className='datetime'>
        <div>
          <Image src="/icons/calendar.svg" alt="date" width={14} height={14} />
          <span className='date'>{date}</span>
        </div>
        <div>
          <Image src="/icons/clock.svg" alt="time" width={14} height={14} />
          <span className='date'>{time}</span>
        </div>
      </div>
    </Link>
  )
}

export default EventCard