import logo from "../assets/logo.png"
import demoUser from "../assets/demo-user.png"
import bg from "../assets/bg.png"

const team = [
    { name: "Shirin Akter", role: "Editor-in-Chief", img: "https://randomuser.me/api/portraits/women/29.jpg" },
    { name: "Jhankar Mahbub", role: "Tech Lead", img: "https://randomuser.me/api/portraits/men/85.jpg" },
    { name: "Laila Rahman", role: "Senior Reporter", img: "https://randomuser.me/api/portraits/women/15.jpg" },
    { name: "Aminul Islam", role: "Business Analyst", img: "https://randomuser.me/api/portraits/men/55.jpg" },
]

export default function About() {
    return (
        <div className="space-y-8">
            <div className="relative rounded-xl overflow-hidden">
                <img src={bg} alt="About Dragon News" className="w-full h-56 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center p-8">
                    <div>
                        <h1 className="text-4xl font-bold text-white">About Dragon News</h1>
                        <p className="text-gray-300 mt-2 max-w-xl">Journalism Without Fear or Favour</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-md p-6 border border-base-300">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Our Mission</h2>
                    <p className="text-accent leading-relaxed">
                        Dragon News is committed to delivering accurate, unbiased, and timely news coverage
                        to the people of Bangladesh. We believe in journalism that serves the public interest,
                        holds power accountable, and gives voice to the voiceless. Our team of dedicated
                        journalists works around the clock to bring you the stories that matter.
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6 border border-base-300">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Our Vision</h2>
                    <p className="text-accent leading-relaxed">
                        To be the most trusted source of news in Bangladesh, known for our integrity,
                        depth of coverage, and commitment to journalistic excellence. We aim to empower
                        our readers with the knowledge they need to make informed decisions and engage
                        meaningfully in the democratic process.
                    </p>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-base-300">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Categories We Cover</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {["Breaking News", "Business", "Technology", "Health", "Sports", "Entertainment", "Science", "Politics", "Education", "Lifestyle"].map(cat => (
                        <span key={cat} className="bg-base-200 text-accent font-semibold px-4 py-2 rounded-lg text-center text-sm">
                            {cat}
                        </span>
                    ))}
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-base-300">
                <h2 className="text-xl font-semibold text-gray-700 mb-6">Our Team</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {team.map(member => (
                        <div key={member.name} className="text-center">
                            <img src={member.img} alt={member.name} className="w-20 h-20 rounded-full object-cover mx-auto mb-3" />
                            <p className="font-semibold text-gray-700">{member.name}</p>
                            <p className="text-sm text-accent">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-primary text-base-200 rounded-xl p-6 text-center">
                <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
                <p>Email: contact@dragonnews.com</p>
                <p>Phone: +880-2-1234567</p>
                <p className="mt-2 text-sm opacity-80">Dhaka, Bangladesh</p>
            </div>
        </div>
    )
}
