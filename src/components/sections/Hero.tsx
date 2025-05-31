// Main driver to the Website


 export const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-blue-700 text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Sports IITPKD</h1>
        <p className="text-xl mb-8">Your gateway to sports and fitness at IIT Palakkad</p>
        <a
            href="/events"
            className="bg-white text-blue-700 px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
        >
            Explore Events
        </a>
        </div>
    );
    }