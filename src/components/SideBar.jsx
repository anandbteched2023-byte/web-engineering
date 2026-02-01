import { LayoutDashboard, BookOpen, Upload, User, GraduationCap } from "lucide-react";

export default function Sidebar({  }) {
  return (
    <div className="w-64 min-h-screen bg-blue-700 text-white p-5">
      <h1 className="text-2xl font-bold mb-10">LMS</h1>

      <ul className="space-y-4">
        <li className="flex items-center gap-3 px-4 py-2 hover:bg-blue-600 rounded-lg cursor-pointer">
          <LayoutDashboard size={18} />
          Dashboard
        </li>

        <li className="flex items-center gap-3 px-4 py-2 hover:bg-blue-600 rounded-lg cursor-pointer">
          <BookOpen size={18} />
          My Courses
        </li>
          <li className="flex items-center gap-3 px-4 py-2 hover:bg-blue-600 rounded-lg cursor-pointer">
            <Upload size={18} />
            Manage Uploads
          </li>

          <li className="flex items-center gap-3 px-4 py-2 hover:bg-blue-600 rounded-lg cursor-pointer">
            <GraduationCap size={18} />
            My Grades
          </li>

        <li className="flex items-center gap-3 px-4 py-2 hover:bg-blue-600 rounded-lg cursor-pointer">
          <User size={18} />
          Profile
        </li>
      </ul>
    </div>
  );
}