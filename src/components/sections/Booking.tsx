import { Container } from "../shared/Container";
import { Title } from "../shared/Title";

export const Booking = () => (
  <section id="booking">
    <Container>
      <div className="text-center mb-8">
        <Title>Book Your Session</Title>
        <p className="text-heading-3 mt-2">
          Reserve your preferred time slot and facility with our easy booking system.
        </p>
      </div>
      <div className="max-w-2xl mx-auto bg-box-bg rounded-3xl p-8 shadow-lg border border-box-border">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="facility-select" className="block mb-2 text-heading-2">Select Facility</label>
            <select id="facility-select" className="w-full p-3 rounded-lg border border-box-border">
              <option>Basketball Court</option>
              <option>Swimming Pool</option>
              <option>Fitness Center</option>
              <option>Tennis Courts</option>
              <option>Football Field</option>
              <option>Track & Field</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-heading-2">Select Date</label>
            <input
              type="date"
              className="w-full p-3 rounded-lg border border-box-border"
              placeholder="Select a date"
              title="Select a date"
            />
          </div>
          <div>
            <label className="block mb-2 text-heading-2">Start Time</label>
            <input
              type="time"
              className="w-full p-3 rounded-lg border border-box-border"
              placeholder="Select start time"
              title="Select start time"
            />
          </div>
          <div>
            <label className="block mb-2 text-heading-2">Duration (hours)</label>
            <input
              type="number"
              min="1"
              max="8"
              className="w-full p-3 rounded-lg border border-box-border"
              placeholder="Enter duration in hours"
              title="Duration in hours"
            />
          </div>
          <div className="md:col-span-2">
            <button className="w-full py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold">
              Book Now
            </button>
          </div>
        </form>
      </div>
    </Container>
  </section>
);