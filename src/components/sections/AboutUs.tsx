import { Container } from "../shared/Container";
import About from "../../assets/about.png";
import { useState, useEffect } from "react";

const stats = [
    {
        value: "15+",
        label: "Sports Offered",
        lightBg: "bg-pink-50",
        darkBg: "bg-pink-900/30",
        lightText: "text-pink-600",
        darkText: "text-pink-400",
        lightBorder: "border-pink-200",
        darkBorder: "border-pink-700",
    },
    {
        value: "500+",
        label: "Active Members", 
        lightBg: "bg-cyan-50",
        darkBg: "bg-cyan-900/30",
        lightText: "text-cyan-600",
        darkText: "text-cyan-400",
        lightBorder: "border-cyan-200",
        darkBorder: "border-cyan-700",
    },
    {
        value: "50+",
        label: "Tournaments",
        lightBg: "bg-purple-50",
        darkBg: "bg-purple-900/30",
        lightText: "text-purple-600",
        darkText: "text-purple-400",
        lightBorder: "border-purple-200",
        darkBorder: "border-purple-700",
    },
    {
        value: "24/7",
        label: "Facility Access",
        lightBg: "bg-green-50",
        darkBg: "bg-green-900/30",
        lightText: "text-green-600",
        darkText: "text-green-400",
        lightBorder: "border-green-200",
        darkBorder: "border-green-700",
    },
];

export const AboutUs = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check for dark mode
        const checkDarkMode = () => {
            const darkMode = document.documentElement.classList.contains('dark') || 
                           window.matchMedia('(prefers-color-scheme: dark)').matches;
            setIsDark(darkMode);
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

    const sectionStyle = {
        backgroundColor: isDark ? '#0f0f23' : '#f9fafb',
        minHeight: '100vh',
        transition: 'all 0.5s ease',
    };


    const paragraphStyle = {
        color: isDark ? '#d1d5db' : '#374151',
    };

    return (
        <section
            id="about"
            style={sectionStyle}
            className="py-16 md:py-20 relative overflow-hidden"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-20">
                <div 
                    className="absolute top-20 left-10 w-72 h-72 rounded-full filter blur-xl animate-pulse"
                    style={{
                        background: isDark 
                            ? 'linear-gradient(135deg, #ec4899, #8b5cf6, #3b82f6)'
                            : 'linear-gradient(135deg, #fce7f3, #e0e7ff, #dbeafe)',
                        mixBlendMode: isDark ? 'screen' : 'multiply',
                    }}
                ></div>
                <div 
                    className="absolute top-40 right-20 w-96 h-96 rounded-full filter blur-xl animate-pulse"
                    style={{
                        background: isDark 
                            ? 'linear-gradient(135deg, #06b6d4, #3b82f6, #8b5cf6)'
                            : 'linear-gradient(135deg, #cffafe, #dbeafe, #e0e7ff)',
                        mixBlendMode: isDark ? 'screen' : 'multiply',
                        animationDelay: '2s',
                    }}
                ></div>
                <div 
                    className="absolute -bottom-20 left-20 w-80 h-80 rounded-full filter blur-xl animate-pulse"
                    style={{
                        background: isDark 
                            ? 'linear-gradient(135deg, #10b981, #059669, #047857)'
                            : 'linear-gradient(135deg, #dcfce7, #bbf7d0, #a7f3d0)',
                        mixBlendMode: isDark ? 'screen' : 'multiply',
                        animationDelay: '4s',
                    }}
                ></div>
            </div>
            
            <Container className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center relative z-10">
                {/* Text Content */}
                <div className="w-full lg:w-1/2 space-y-8">
                    <div className="space-y-4">
                        <h2 
						className={`text-4xl lg:text-5xl font-bold leading-tight bg-clip-text text-transparent transition-all duration-300 ${
							isDark 
							? 'bg-gradient-to-r from-white via-gray-200 to-white' 
							: 'bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800'
						}`}
						>
						About Sports IITPKD
						</h2>
                        <div 
                            className="w-24 h-1 rounded-full"
                            style={{
                                background: 'linear-gradient(90deg, #ec4899, #8b5cf6)',
                            }}
                        ></div>
                    </div>
                    
                    <p 
                        className="text-lg leading-relaxed font-medium"
                        style={paragraphStyle}
                    >
                        At IIT Palakkad Sports Council, we believe in fostering excellence
                        through sports. Our mission is to provide world-class facilities and
                        opportunities for students to excel in their chosen sports while
                        maintaining academic excellence.
                    </p>
                    
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-6 mt-10">
                        {stats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className="group relative overflow-hidden rounded-2xl p-6 border-2 backdrop-blur-sm transform transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-2 cursor-pointer"
                                style={{
                                    backgroundColor: isDark ? 
                                        (stat.value === "15+" ? 'rgba(131, 24, 67, 0.3)' :
                                         stat.value === "500+" ? 'rgba(22, 78, 99, 0.3)' :
                                         stat.value === "50+" ? 'rgba(88, 28, 135, 0.3)' :
                                         'rgba(20, 83, 45, 0.3)') :
                                        (stat.value === "15+" ? '#fdf2f8' :
                                         stat.value === "500+" ? '#ecfeff' :
                                         stat.value === "50+" ? '#faf5ff' :
                                         '#f0fdf4'),
                                    borderColor: isDark ?
                                        (stat.value === "15+" ? '#be185d' :
                                         stat.value === "500+" ? '#0891b2' :
                                         stat.value === "50+" ? '#7c3aed' :
                                         '#059669') :
                                        (stat.value === "15+" ? '#fbbf24' :
                                         stat.value === "500+" ? '#06b6d4' :
                                         stat.value === "50+" ? '#8b5cf6' :
                                         '#10b981'),
                                    boxShadow: isDark ? '0 20px 25px -5px rgba(0, 0, 0, 0.5)' : '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                                    animationDelay: `${index * 150}ms`,
                                }}
                            >
                                {/* Gradient overlay on hover */}
                                <div 
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                                    style={{
                                        background: isDark ? 
                                            'linear-gradient(135deg, rgba(255,255,255,0.05), transparent)' :
                                            'linear-gradient(135deg, rgba(255,255,255,0.8), transparent)',
                                    }}
                                ></div>
                                
                                <div className="relative z-10 text-center space-y-3">
                                    <div 
                                        className="text-3xl lg:text-4xl font-bold transition-all duration-300 group-hover:scale-110"
                                        style={{
                                            color: isDark ?
                                                (stat.value === "15+" ? '#f472b6' :
                                                 stat.value === "500+" ? '#22d3ee' :
                                                 stat.value === "50+" ? '#a78bfa' :
                                                 '#34d399') :
                                                (stat.value === "15+" ? '#db2777' :
                                                 stat.value === "500+" ? '#0891b2' :
                                                 stat.value === "50+" ? '#7c3aed' :
                                                 '#059669'),
                                        }}
                                    >
                                        {stat.value}
                                    </div>
                                    <div 
                                        className="text-sm lg:text-base font-semibold uppercase tracking-wide"
                                        style={{
                                            color: isDark ? '#9ca3af' : '#6b7280',
                                        }}
                                    >
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                    <div className="relative group">
                        {/* Main image container */}
                        <div 
                            className="relative w-80 h-96 lg:w-96 lg:h-[500px] rounded-3xl overflow-hidden border"
                            style={{
                                backgroundColor: isDark ? '#1f2937' : '#f3f4f6',
                                borderColor: isDark ? '#374151' : '#e5e7eb',
                                boxShadow: isDark ? 
                                    '0 25px 50px -12px rgba(0, 0, 0, 0.8)' : 
                                    '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                            }}
                        >
                            {/* Image */}
                            <img
                                src={About}
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                alt="About Our Mission"
                                style={{
                                    filter: isDark ? 'brightness(0.8) contrast(1.1)' : 'brightness(1)',
                                }}
                            />
                            
                            {/* Overlay */}
                            <div 
                                className="absolute inset-0"
                                style={{
                                    background: isDark ? 
                                        'linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.1), transparent)' :
                                        'linear-gradient(to top, rgba(0,0,0,0.2), transparent)',
                                }}
                            ></div>
                        </div>
                        
                        {/* Floating decorative elements
                        <div 
                            className="absolute -top-4 -right-4 w-8 h-8 rounded-full animate-bounce opacity-80"
                            style={{
                                background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
                                animationDelay: '1s',
                            }}
                        ></div>
                        <div 
                            className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full animate-bounce opacity-80"
                            style={{
                                background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                                animationDelay: '2s',
                            }}
                        ></div> */}
                        
                        {/* Background glow */}
                        <div 
                            className="absolute inset-0 rounded-3xl blur-2xl -z-10 group-hover:blur-3xl transition-all duration-500"
                            style={{
                                background: isDark ?
                                    'linear-gradient(135deg, rgba(236,72,153,0.3), rgba(139,92,246,0.3), rgba(6,182,212,0.3))' :
                                    'linear-gradient(135deg, rgba(236,72,153,0.2), rgba(139,92,246,0.2), rgba(6,182,212,0.2))',
                            }}
                        ></div>
                    </div>
                </div>
            </Container>
        </section>
    );
};