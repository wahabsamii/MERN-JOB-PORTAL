import { Card, CardContent } from "./card"; // Adjust the path

import { Calendar, Clock } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "11 Tips to Help You Get New Clients Through Cold Calling",
    date: "13th Sep 2023",
    readTime: "5 min read",
    category: "Arts",
    image: "https://source.unsplash.com/random/400x300/?office,meeting",
    author: "Google",
  },
  {
    id: 2,
    title: "DigitalOcean launches first Canadian data centre in Toronto",
    date: "29th Nov 2023",
    readTime: "5 min read",
    category: "Illustration",
    image: "https://source.unsplash.com/random/400x300/?workspace,team",
    author: "Facebook",
  },
  {
    id: 3,
    title: "Using Banner Stands To Increase Trade Show Traffic",
    date: "29th Dec 2023",
    readTime: "5 min read",
    category: "Music",
    image: "https://source.unsplash.com/random/400x300/?coworking,office",
    author: "Linkedin",
  },
];

export default function BlogSection() {
  return (
    <section className="py-12 px-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Latest Blog or News</h2>
        <p className="text-gray-500 mt-2">
          Search all the open positions on the web. Get your own personalized salary estimate.
          Read reviews on over 30000+ companies worldwide.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Card key={blog.id} className="overflow-hidden shadow-lg rounded-xl">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <CardContent className="p-5">
              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                {blog.category}
              </span>
              <div className="flex items-center text-gray-500 text-sm my-2">
                <Calendar size={14} className="mr-1" /> {blog.date}
                <Clock size={14} className="ml-3 mr-1" /> {blog.readTime}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{blog.title}</h3>
              <p className="mt-3 text-blue-600 font-medium cursor-pointer">Read Now →</p>
              <p className="text-gray-400 text-sm mt-1">By {blog.author}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
