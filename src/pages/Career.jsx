import { FaMapMarkerAlt, FaClock, FaBriefcase } from "react-icons/fa"

const openings = [
    {
        title: "Senior News Reporter",
        department: "Editorial",
        type: "Full-time",
        location: "Dhaka",
        deadline: "Aug 15, 2026",
        description: "We are looking for an experienced news reporter to cover national politics and current affairs. You will be responsible for investigating stories, conducting interviews, and writing compelling news articles.",
    },
    {
        title: "Frontend Developer",
        department: "Technology",
        type: "Full-time",
        location: "Dhaka",
        deadline: "Aug 30, 2026",
        description: "Join our tech team to build and maintain the Dragon News platform. You should have strong experience with React, modern CSS, and a passion for creating fast, accessible web experiences.",
    },
    {
        title: "Digital Marketing Specialist",
        department: "Marketing",
        type: "Full-time",
        location: "Remote",
        deadline: "Sep 01, 2026",
        description: "Drive our digital presence across social media, SEO, and email campaigns. You will help grow our readership and engagement through data-driven marketing strategies.",
    },
    {
        title: "Photojournalist Intern",
        department: "Editorial",
        type: "Internship",
        location: "Dhaka",
        deadline: "Jul 30, 2026",
        description: "An excellent opportunity for aspiring photojournalists to gain hands-on experience. You will accompany senior reporters on assignments and build your portfolio with real news photography.",
    },
]

export default function Career() {
    return (
        <div className="space-y-8">
            <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-6 sm:p-8 text-base-200">
                <h1 className="text-2xl sm:text-3xl font-bold">Join the Dragon News Team</h1>
                <p className="mt-2 opacity-90 max-w-2xl text-sm sm:text-base">
                    Help us shape the future of journalism in Bangladesh. We are always looking for
                    talented, passionate individuals who believe in the power of truth.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl shadow-md p-5 border border-base-300 text-center">
                    <p className="text-3xl font-bold text-secondary">50+</p>
                    <p className="text-accent font-semibold mt-1">Team Members</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-5 border border-base-300 text-center">
                    <p className="text-3xl font-bold text-secondary">12</p>
                    <p className="text-accent font-semibold mt-1">Departments</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-5 border border-base-300 text-center">
                    <p className="text-3xl font-bold text-secondary">6</p>
                    <p className="text-accent font-semibold mt-1">Offices Nationwide</p>
                </div>
            </div>

            <h2 className="text-xl font-semibold text-gray-700">Open Positions</h2>

            <div className="space-y-4">
                {openings.map(job => (
                    <div key={job.title} className="bg-white rounded-xl shadow-md p-6 border border-base-300">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-gray-800">{job.title}</h3>
                                <p className="text-sm text-accent font-medium">{job.department}</p>
                                <p className="text-gray-600 text-sm mt-2 leading-relaxed">{job.description}</p>
                                <div className="flex flex-wrap gap-4 mt-3 text-sm text-accent">
                                    <span className="flex items-center gap-1"><FaBriefcase className="text-secondary" /> {job.type}</span>
                                    <span className="flex items-center gap-1"><FaMapMarkerAlt className="text-secondary" /> {job.location}</span>
                                    <span className="flex items-center gap-1"><FaClock className="text-secondary" /> Apply by {job.deadline}</span>
                                </div>
                            </div>
                            <button className="bg-secondary hover:bg-secondary/90 text-white px-6 py-2 rounded-lg font-semibold whitespace-nowrap">
                                Apply Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-base-200 rounded-xl p-6 text-center">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">Didn't find the right role?</h2>
                <p className="text-accent text-sm mb-4">Send us your resume and we will keep you in mind for future openings.</p>
                <button className="bg-primary text-base-200 px-8 py-2 rounded-lg font-semibold">Send Resume</button>
            </div>
        </div>
    )
}
