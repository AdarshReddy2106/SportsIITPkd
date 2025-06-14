import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
import { useEffect, useState } from "react";

export const Contact = () => {
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
      : 'bg-gradient-to-br from-gray-50 to-gray-100'
  }`;

  const subtitleClasses = `mt-2 ${
    isDark ? 'text-gray-300' : 'text-gray-600'
  }`;

  const cardClasses = `rounded-3xl p-6 border shadow-lg ${
    isDark 
      ? 'bg-gray-800 border-gray-600' 
      : 'bg-white border-gray-200'
  }`;

  const titleClasses = `font-semibold mb-2 ${
    isDark ? 'text-white' : 'text-gray-800'
  }`;

  const textClasses = `mb-2 ${
    isDark ? 'text-gray-300' : 'text-gray-600'
  }`;

  const inputClasses = `p-3 rounded-lg border outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${
    isDark 
      ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400' 
      : 'border-gray-200 bg-white text-gray-800 placeholder-gray-500'
  }`;

  const textareaClasses = `p-3 rounded-lg border outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 min-h-[120px] resize-none ${
    isDark 
      ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400' 
      : 'border-gray-200 bg-white text-gray-800 placeholder-gray-500'
  }`;

  return (
    <section id="contact" className={sectionClasses}>
      <Container>
        <div className="text-center mb-8">
          <Title>Get In Touch</Title>
          <p className={subtitleClasses}>
            Have questions? We're here to help you get started on your sports journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={cardClasses}>
            <div className={titleClasses}>Contact Information</div>
            <div className={textClasses}>Address: IIT Palakkad, Kerala, India - 678623</div>
            <div className={textClasses}>Phone: +91 4923 232 300</div>
            <div className={textClasses}>Email: sports@iitpkd.ac.in</div>
          </div>
          <form className={`${cardClasses} flex flex-col gap-4`}>
            <input 
              className={inputClasses}
              placeholder="Name" 
              type="text"
            />
            <input 
              className={inputClasses}
              placeholder="Email" 
              type="email"
            />
            <textarea 
              className={textareaClasses}
              placeholder="Message" 
            />
            <button 
              type="submit"
              className="py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-purple-500/25 hover:scale-[1.02] active:scale-[0.98]"
            >
              Send Message
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};