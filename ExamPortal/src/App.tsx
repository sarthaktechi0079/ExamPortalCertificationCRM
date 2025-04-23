import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen, Settings, ShieldAlert } from "lucide-react";

const Dashboard: React.FC = () => {
  const stats = [
    { title: "Students", value: 6, icon: <Users size={32} className="text-blue-500" />, color: "bg-blue-500" },
    { title: "Tests", value: 30, icon: <BookOpen size={32} className="text-green-500" />, color: "bg-green-500" },
    { title: "Administrators", value: 8, icon: <Settings size={32} className="text-yellow-500" />, color: "bg-yellow-500" },
    { title: "Super Administrator", value: 1, icon: <ShieldAlert size={32} className="text-red-500" />, color: "bg-red-500" },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white min-h-screen p-5">
        <h2 className="text-xl font-semibold mb-6">Softcrayons</h2>
        <nav>
          <ul className="space-y-2">
            <li className="bg-blue-700 p-2 rounded">Dashboard</li>
            <li>Users</li>
            <li>Classes</li>
            <li>Tests</li>
            <li>Results</li>
            <li className="mt-4">Log out</li>
          </ul>
        </nav>
      </aside>

      {/* Main Dashboard */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className={`${stat.color} text-white p-4 rounded-md shadow-md`}>
              <CardContent className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{stat.title}</h3>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
                {stat.icon}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
