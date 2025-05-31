// filepath: a:\Sports\sportsiitpkd\src\components\sections\Facilities.tsx
import { Container } from "../shared/Container";
import { Title } from "../shared/Title";

const facilities = [
  { name: "Basketball Court", img: "basketball.jpg" },
  { name: "Swimming Pool", img: "swimming.jpg" },
  { name: "Fitness Center", img: "fitness.jpg" },
  { name: "Tennis Courts", img: "tennis.jpg" },
  { name: "Football Field", img: "football.jpg" },
  { name: "Track & Field", img: "track.jpg" },
];

export const Facilities = () => (
  <section>
    <Container>
      <div className="text-center mb-8">
        <Title>Our Facilities</Title>
        <p className="text-heading-3 mt-2">
          Take a look at our state-of-the-art sports facilities and training grounds.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {facilities.map((f, i) => (
          <div key={i} className="rounded-xl overflow-hidden shadow-lg bg-box-bg">
            <img src={`/assets/facilities/${f.img}`} alt={f.name} className="w-full h-40 object-cover" />
            <div className="p-4 text-center text-heading-2 font-semibold">{f.name}</div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);