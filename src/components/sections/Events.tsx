// filepath: a:\Sports\sportsiitpkd\src\components\sections\Events.tsx
import { Container } from "../shared/Container";
import { Title } from "../shared/Title";

const events = [
  {
    date: "March 15, 2024",
    name: "Inter-College Basketball",
    time: "10:00 AM",
    location: "Main Court",
  },
  {
    date: "March 22, 2024",
    name: "Swimming Championship",
    time: "2:00 PM",
    location: "Aquatic Center",
  },
  {
    date: "April 5, 2024",
    name: "Football Tournament",
    time: "6:00 PM",
    location: "Main Field",
  },
];

export const Events = () => (
  <section>
    <Container>
      <div className="text-center mb-8">
        <Title>Upcoming Events</Title>
        <p className="text-heading-3 mt-2">
          Join our exciting tournaments and competitions throughout the year.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((e, i) => (
          <div key={i} className="rounded-xl bg-box-bg border border-box-border p-6">
            <div className="text-heading-2 font-semibold">{e.date}</div>
            <div className="mt-2">{e.name}</div>
            <div className="mt-2 text-heading-3">{e.time}</div>
            <div className="text-heading-3">{e.location}</div>
            <button className="mt-4 w-full py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold">
              Register Now
            </button>
          </div>
        ))}
      </div>
    </Container>
  </section>
);