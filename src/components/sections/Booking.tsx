import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
import { useEffect, useState } from "react";

export const Booking = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if dark mode is active
    const checkDarkMode = () => {
      const htmlElement = document.documentElement;
      const isDarkMode = htmlElement.classList.contains('dark') || 
                        window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(isDarkMode);
    };

    checkDarkMode();
    
    // Listen for changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', checkDarkMode);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener('change', checkDarkMode);
    };
  }, []);

  const sectionClasses = `${
    isDark 
      ? 'bg-gradient-to-br from-gray-900 to-black' 
      : 'bg-gradient-to-br from-gray-50 to-white'
  }`;

  const subtitleClasses = `mt-2 ${
    isDark ? 'text-gray-300' : 'text-gray-600'
  }`;

  const cardClasses = `max-w-2xl mx-auto rounded-3xl p-8 shadow-lg border ${
    isDark 
      ? 'bg-gray-800 border-gray-600' 
      : 'bg-white border-gray-200'
  }`;

  const labelClasses = `block mb-2 font-semibold ${
    isDark ? 'text-white' : 'text-gray-900'
  }`;

  const inputClasses = `w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 ${
    isDark 
      ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400' 
      : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500'
  }`;

  const selectClasses = `w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 ${
    isDark 
      ? 'border-gray-600 bg-gray-700 text-white' 
      : 'border-gray-300 bg-white text-gray-900'
  }`;

  return (
    <section id="booking" className={sectionClasses}>
      <Container>
        <div className="text-center mb-8">
          <Title>Book Your Session</Title>
          <p className={subtitleClasses}>
            Reserve your preferred time slot and facility with our easy booking system.
          </p>
        </div>
        <div className={cardClasses}>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="facility-select" className={labelClasses}>
                Select Facility
              </label>
              <select 
                id="facility-select" 
                className={selectClasses}
                style={{
                  colorScheme: isDark ? 'dark' : 'light'
                }}
              >
                <option value="">
                  Choose a facility...
                </option>
                <option value="basketball">
                  Basketball Court
                </option>
                <option value="swimming">
                  Swimming Pool
                </option>
                <option value="fitness">
                  Fitness Center
                </option>
                <option value="tennis">
                  Tennis Courts
                </option>
                <option value="football">
                  Football Field
                </option>
                <option value="track">
                  Track & Field
                </option>
              </select>
            </div>
            <div>
              <label className={labelClasses}>
                Select Date
              </label>
              <input
                type="date"
                className={inputClasses}
                placeholder="Select a date"
                title="Select a date"
                style={{
                  colorScheme: isDark ? 'dark' : 'light'
                }}
              />
            </div>
            <div>
              <label className={labelClasses}>
                Start Time
              </label>
              <input
                type="time"
                className={inputClasses}
                placeholder="Select start time"
                title="Select start time"
                style={{
                  colorScheme: isDark ? 'dark' : 'light'
                }}
              />
            </div>
            <div>
              <label className={labelClasses}>
                Duration (hours)
              </label>
              <input
                type="number"
                min="1"
                max="8"
                className={inputClasses}
                placeholder="Enter duration in hours"
                title="Duration in hours"
                style={{
                  colorScheme: isDark ? 'dark' : 'light'
                }}
              />
            </div>
            <div className="md:col-span-2">
              <button 
                type="submit"
                className={`w-full py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 hover:scale-[1.02] active:scale-[0.98] ${
                  isDark ? 'focus:ring-offset-gray-800' : 'focus:ring-offset-white'
                }`}
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