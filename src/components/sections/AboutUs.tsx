import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import About from "../../assets/about.png"; // Adjust the path as necessary

const stats = [
	{
		value: "15+",
		label: "Sports Offered",
		color: "text-pink-400",
	},
	{
		value: "500+",
		label: "Active Members",
		color: "text-cyan-300",
	},
	{
		value: "50+",
		label: "Tournaments",
		color: "text-pink-400",
	},
	{
		value: "24/7",
		label: "Facility Access",
		color: "text-green-400",
	},
];

export const AboutUs = () => {
	return (
		<section id="about" className="bg-[#101014] py-10 sm:py-14 md:py-16">
			<Container className="flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-16 items-center">
				{/* Left: Text and Stats */}
				<div className="w-full md:w-7/12 lg:w-1/2 flex flex-col justify-center">
					<div className="text-3xl sm:text-4xl font-bold mb-4 text-white">
						<Title>About Sports IITPKD</Title>
					</div>
					<Paragraph className="text-base sm:text-lg mb-6 sm:mb-8 text-gray-200">
						At IIT Palakkad Sports Council, we believe in fostering excellence
						through sports. Our mission is to provide world-class facilities and
						opportunities for students to excel in their chosen sports while
						maintaining academic excellence.
					</Paragraph>
					<div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-xl w-full">
						{stats.map((stat) => (
							<div
								key={stat.label}
								className="bg-[#18181e] rounded-xl p-4 sm:p-6 flex flex-col items-center shadow-md border border-[#23232b] w-full"
							>
								<span
									className={`text-2xl sm:text-3xl font-bold ${stat.color}`}
								>
									{stat.value}
								</span>
								<span className="text-gray-300 mt-2 text-sm sm:text-base text-center">
									{stat.label}
								</span>
							</div>
						))}
					</div>
				</div>
				{/* Right: Image */}
				<div className="w-full md:w-5/12 lg:w-1/2 flex justify-center mt-8 md:mt-0">
					<div className="w-full max-w-xs sm:max-w-md h-48 sm:h-80 md:h-96 relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg bg-[#18181e] flex items-center justify-center">
						<img
							src={About}
							className="w-full h-full object-cover"
							alt="About Our Mission"
						/>
					</div>
				</div>
			</Container>
		</section>
	);
};