// filepath: a:\Sports\sportsiitpkd\src\components\sections\Facilities.tsx
import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
import bas from "../../assets/Basketball.png"
import swim from "../../assets/swim.png"
import fit from "../../assets/fit.png"
import a from "../../assets/a.png"
import foot from "../../assets/foot.png"
import t from "../../assets/t.png"

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
        
        {/* Basketball Court */}
        <div className="rounded-xl overflow-hidden shadow-lg bg-box-bg">
          <img src={bas} alt="Basketball Court" className="w-full h-40 object-cover" />
          <div className="p-4 text-center text-heading-2 font-semibold">Basketball Court</div>
        </div>

        {/* Swimming Pool */}
        <div className="rounded-xl overflow-hidden shadow-lg bg-box-bg">
          <img src={swim} alt="Swimming Pool" className="w-full h-40 object-cover" />
          <div className="p-4 text-center text-heading-2 font-semibold">Swimming Pool</div>
        </div>

        {/* Fitness Center */}
        <div className="rounded-xl overflow-hidden shadow-lg bg-box-bg">
          <img src={fit} alt="Fitness Center" className="w-full h-40 object-cover" />
          <div className="p-4 text-center text-heading-2 font-semibold">Fitness Center</div>
        </div>

        {/* Tennis Courts */}
        <div className="rounded-xl overflow-hidden shadow-lg bg-box-bg">
          <img src={t} alt="Tennis Courts" className="w-full h-40 object-cover" />
          <div className="p-4 text-center text-heading-2 font-semibold">Tennis Courts</div>
        </div>

        {/* Football Field */}
        <div className="rounded-xl overflow-hidden shadow-lg bg-box-bg">
          <img src={foot} alt="Football Field" className="w-full h-40 object-cover" />
          <div className="p-4 text-center text-heading-2 font-semibold">Football Field</div>
        </div>

        {/* Track & Field */}
        <div className="rounded-xl overflow-hidden shadow-lg bg-box-bg">
          <img src={a} alt="Track & Field" className="w-full h-40 object-cover" />
          <div className="p-4 text-center text-heading-2 font-semibold">Track & Field</div>
        </div>

      </div>
    </Container>
  </section>
);