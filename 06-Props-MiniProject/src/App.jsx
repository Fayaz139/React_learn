import JobCard from './components/Card';

function App() {

  const jobData = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Stripe",
    location: "Remote",
    type: "Full-time",
    salary: "$140k - $180k",
    logo: "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg",
    postedDate: "2h ago"
  },
  {
    id: 2,
    title: "Frontend Engineer",
    company: "Vercel",
    location: "NYC / Hybrid",
    type: "Full-time",
    salary: "$120k - $160k",
    logo: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
    postedDate: "1d ago"
  },
  {
    id: 3,
    title: "React Specialist",
    company: "Airbnb",
    location: "Remote",
    type: "Part-time",
    salary: "$90 - $110 /hr",
    logo: "https://www.vectorlogo.zone/logos/airbnb/airbnb-icon.svg",
    postedDate: "3d ago"
  },
  {
    id: 4,
    title: "Backend Engineer",
    company: "Supabase",
    location: "Singapore",
    type: "Full-time",
    salary: "$90k - $130k",
    logo: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg",
    postedDate: "5h ago"
  },
  {
    id: 5,
    title: "UI/UX Designer",
    company: "Figma",
    location: "San Francisco",
    type: "Full-time",
    salary: "$130k - $170k",
    logo: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    postedDate: "2d ago"
  },
  {
    id: 6,
    title: "Content Creator",
    company: "Discord",
    location: "Remote",
    type: "Part-time",
    salary: "$40 - $60 /hr",
    logo: "https://www.vectorlogo.zone/logos/discord/discord-icon.svg",
    postedDate: "1w ago"
  },
  {
    id: 7,
    title: "DevOps Engineer",
    company: "GitHub",
    location: "Remote",
    type: "Full-time",
    salary: "$150k - $190k",
    logo: "https://www.vectorlogo.zone/logos/github/github-icon.svg",
    postedDate: "4h ago"
  },
  {
    id: 8,
    title: "Product Manager",
    company: "Slack",
    location: "Vancouver",
    type: "Full-time",
    salary: "$140k - $175k",
    logo: "https://www.vectorlogo.zone/logos/slack/slack-icon.svg",
    postedDate: "6h ago"
  },
  {
    id: 9,
    title: "Technical Writer",
    company: "DigitalOcean",
    location: "Remote",
    type: "Part-time",
    salary: "$50 - $75 /hr",
    logo: "https://www.vectorlogo.zone/logos/digitalocean/digitalocean-icon.svg",
    postedDate: "2d ago"
  },
  {
    id: 10,
    title: "Junior Developer",
    company: "Postman",
    location: "Bangalore",
    type: "Full-time",
    salary: "₹18L - ₹25L",
    logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    postedDate: "1d ago"
  }
];

  return (
   <>
   <div className='text-white text-center mt-4'>
    Total Jobs: {jobData.length}
   </div>
    <div className="max-w-7xl mx-auto px-4 py-12">
  {/* The Grid Parent */}
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
    {jobData.map((job) => (
      <JobCard key={job.id} job={job} />
    ))}
  </div>
</div>
   </>
  )
}

export default App
