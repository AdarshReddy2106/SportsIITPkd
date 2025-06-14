import { Container } from "../shared/Container";
import { Title } from "../shared/Title";

export const Booking = () => {
  return (
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
              <label htmlFor="facility-select" className="block mb-2 text-heading-2 text-gray-900 dark:text-white">
                Select Facility
              </label>
              <select 
                id="facility-select" 
                className="w-full p-3 rounded-lg border border-box-border bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                style={{
                  colorScheme: 'light dark'
                }}
              >
                <option value="" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                  Choose a facility...
                </option>
                <option value="basketball" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                  Basketball Court
                </option>
                <option value="swimming" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                  Swimming Pool
                </option>
                <option value="fitness" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                  Fitness Center
                </option>
                <option value="tennis" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                  Tennis Courts
                </option>
                <option value="football" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                  Football Field
                </option>
                <option value="track" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                  Track & Field
                </option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-heading-2 text-gray-900 dark:text-white">
                Select Date
              </label>
              <input
                type="date"
                className="w-full p-3 rounded-lg border border-box-border bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Select a date"
                title="Select a date"
                style={{
                  colorScheme: 'light dark'
                }}
              />
            </div>
            <div>
              <label className="block mb-2 text-heading-2 text-gray-900 dark:text-white">
                Start Time
              </label>
              <input
                type="time"
                className="w-full p-3 rounded-lg border border-box-border bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Select start time"
                title="Select start time"
                style={{
                  colorScheme: 'light dark'
                }}
              />
            </div>
            <div>
              <label className="block mb-2 text-heading-2 text-gray-900 dark:text-white">
                Duration (hours)
              </label>
              <input
                type="number"
                min="1"
                max="8"
                className="w-full p-3 rounded-lg border border-box-border bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter duration in hours"
                title="Duration in hours"
                style={{
                  colorScheme: 'light dark'
                }}
              />
            </div>
            <div className="md:col-span-2">
              <button 
                type="submit"
                className="w-full py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};