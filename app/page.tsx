import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { time } from "console";

const events = [
  { image: '/images/event1.png', title: 'Event 1', slug: 'event-1', location: 'New York', date: '2024-07-15', time: '10:00 AM' },
  { image: '/images/event2.png', title: 'Event 2', slug: 'event-2', location: 'San Francisco', date: '2024-08-20', time: '2:00 PM' },
  { image: '/images/event3.png', title: 'Event 3', slug: 'event-3', location: 'Chicago', date: '2024-09-10', time: '9:00 AM' },
  { image: '/images/event4.png', title: 'Event 4', slug: 'event-4', location: 'Los Angeles', date: '2024-10-05', time: '1:00 PM' },
  { image: '/images/event5.png', title: 'Event 5', slug: 'event-5', location: 'Seattle', date: '2024-11-12', time: '11:00 AM' },
  { image: '/images/event6.png', title: 'Event 6', slug: 'event-6', location: 'Boston', date: '2024-12-01', time: '3:00 PM' },
];

export default function Home() {
  return (
    <section className="">
      <h1 className="text-center">The Hub for Every FA <br /> Even you can't mess </h1>
      <p className="text-center mt-5">Hackathons, Meetup, and conference, All in one Place</p>

      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {events.map((event) => (
            <li key={event.title} className="list-none">
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
