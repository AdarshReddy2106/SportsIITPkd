import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
import { useEffect, useState } from "react";

const events = [
	{
		date: "March 15, 2024",
		name: "Inter-College Basketball",
		time: "10:00 AM",
		location: "Main Court",
		category: "Basketball",
		participants: "16 Teams",
	},
	{
		date: "March 22, 2024",
		name: "Swimming Championship",
		time: "2:00 PM",
		location: "Aquatic Center",
		category: "Swimming",
		participants: "50+ Athletes",
	},
	{
		date: "April 5, 2024",
		name: "Football Tournament",
		time: "6:00 PM",
		location: "Main Field",
		category: "Football",
		participants: "12 Teams",
	},
];

export const Events = () => {
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

	// Removed py-16 padding to eliminate top/bottom gaps
	const sectionClasses = `py-20 ${
		isDark 
			? 'bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800' 
			: 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
	}`;

	const subtitleClasses = `text-lg mt-3 leading-relaxed ${
		isDark ? 'text-gray-300' : 'text-gray-600'
	}`;

	const cardClasses = `rounded-3xl p-8 border-2 transition-all duration-500 hover:shadow-2xl hover:scale-[1.05] hover:-translate-y-2 group backdrop-blur-sm ${
		isDark 
			? 'bg-gradient-to-br from-slate-700/80 to-slate-800/80 border-slate-600/50 hover:border-purple-400/70 hover:shadow-purple-500/20' 
			: 'bg-gradient-to-br from-white/90 to-gray-50/90 border-gray-200/50 hover:border-purple-400/70 hover:shadow-purple-300/30'
	}`;

	const dateClasses = `text-sm font-bold uppercase tracking-wider mb-4 transition-all duration-300 group-hover:text-purple-400 ${
		isDark ? 'text-purple-300' : 'text-purple-600'
	}`;

	const eventNameClasses = `text-2xl font-bold mb-4 leading-tight transition-all duration-300 group-hover:text-purple-400 ${
		isDark ? 'text-white' : 'text-gray-900'
	}`;

	const detailsClasses = `space-y-2 mb-6 ${
		isDark ? 'text-gray-300' : 'text-gray-600'
	}`;

	const detailItemClasses = `flex items-center gap-2 text-sm`;

	const categoryTagClasses = `inline-block px-4 py-2 rounded-full text-xs font-bold mb-4 uppercase tracking-wider transition-all duration-300 group-hover:scale-110 ${
		isDark 
			? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30' 
			: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-300/40'
	}`;

	const buttonClasses = `w-full py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 text-white font-bold text-lg transition-all duration-500 hover:from-purple-700 hover:via-pink-600 hover:to-purple-800 hover:shadow-2xl hover:shadow-purple-500/40 focus:outline-none focus:ring-4 focus:ring-purple-300 active:scale-95 group-hover:scale-105 transform hover:-translate-y-1 ${
		isDark ? 'focus:ring-offset-slate-800' : 'focus:ring-offset-white'
	}`;

	return (
		<section id="events" className={sectionClasses}>
			<Container>
				{/* Reduced margin bottom from mb-12 to mb-8 */}
				<div className="text-center mb-8">
					<Title>Upcoming Events</Title>
					<p className={subtitleClasses}>
						Join our exciting tournaments and competitions throughout the year. 
						Experience the thrill of competitive sports and showcase your skills.
					</p>
				</div>
				{/* Reduced gap from gap-8 to gap-4 */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{events.map((event, index) => (
						<div key={index} className={cardClasses}>
							<div className={categoryTagClasses}>
								{event.category}
							</div>
							
							<div className={dateClasses}>
								{event.date}
							</div>
							
							<h3 className={eventNameClasses}>
								{event.name}
							</h3>
							
							<div className={detailsClasses}>
								<div className={detailItemClasses}>
									<svg className="w-5 h-5 opacity-80 text-purple-400 transition-all duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									<span className="font-medium">{event.time}</span>
								</div>
								
								<div className={detailItemClasses}>
									<svg className="w-5 h-5 opacity-80 text-purple-400 transition-all duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
									</svg>
									<span className="font-medium">{event.location}</span>
								</div>
								
								<div className={detailItemClasses}>
									<svg className="w-5 h-5 opacity-80 text-purple-400 transition-all duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
									</svg>
									<span className="font-medium">{event.participants}</span>
								</div>
							</div>
							
							<button className={buttonClasses}>
								Register Now
							</button>
						</div>
					))}
				</div>
			</Container>
		</section>
		
	);
};