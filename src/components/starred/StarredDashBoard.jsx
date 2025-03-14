import { useAuth } from "@/context/AuthContext";
import { useData } from "@/context/DataContext";
import { CodeSquare } from "lucide-react";
import { useState } from "react";
export const StarredDashBoard = () => {
  const [reminders, setReminders] = useState([
    {
      id: 1,
      name: "Two Sum",
      link: "https://leetcode.com/problems/two-sum/",
      level: "Easy",
      deadline: "2025-03-20",
      setDate: "2025-03-10",
      done: false,
    },
    {
      id: 2,
      name: "Median of Two Sorted Arrays",
      link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
      level: "Hard",
      deadline: "2025-03-22",
      setDate: "2025-03-12",
      done: false,
    },
  ]);
  const {user}=useAuth();
  const {questions}=useData();
  const {findQuesDetails}=useData();
  
  console.log(user,questions,findQuesDetails())
  // console.log("ye hahh",user.starred)
  const starredDetails=user.starred.map((ques)=>findQuesDetails(ques))
  // console.log("starredDetails",starredDetails)

  return (
    <div className="container mx-auto mt-20 p-4">
      <h1 className="text-2xl font-bold mb-4">Starred Dashboard</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Question Name</th>
              <th className="border border-gray-300 px-4 py-2">Link</th>
              <th className="border border-gray-300 px-4 py-2">Level</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {starredDetails.map((reminder) => (
              <tr
                key={reminder.id}
                className={`${
                  reminder.done ? "bg-green-100" : "bg-white"
                } hover:bg-gray-50`}
              >
                <td className="border border-gray-300 px-4 py-2">
                  {reminder.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <a
                    href={reminder.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Open Link
                  </a>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <span
                    className={`px-2 py-1 text-sm rounded ${
                      reminder.level === "easy"
                        ? "bg-green-200"
                        : reminder.level === "medium"
                        ? "bg-yellow-200"
                        : "bg-red-200"
                    }`}
                  >
                    {reminder.level}
                  </span>
                </td>
  
                <td className="border border-gray-300 px-4 py-2">
                  {reminder.done ? (
                    <span className="text-green-500">Completed</span>
                  ) : (
                    <button
                      onClick={() => markAsDone(reminder.id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-200"
                    >
                     Remove 
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// export default ReminderDashboard;
