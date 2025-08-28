import { useState } from "react";
import { LMSLayout } from "@/components/LMSLayout";
import { StudentDashboard } from "@/components/StudentDashboard";
import { TeacherDashboard } from "@/components/TeacherDashboard";

const Index = () => {
  const [userRole, setUserRole] = useState<"student" | "teacher">("student");

  // Mock user data
  const mockStudent = {
    name: "Emma Thompson",
    email: "emma.thompson@email.com",
    avatar: "/student-avatar.jpg",
    coins: 1850,
    rank: 4,
    totalCourses: 12,
    completedCourses: 8,
    studyStreak: 15,
  };

  const mockTeacher = {
    name: "Dr. Sarah Wilson",
    email: "sarah.wilson@university.edu",
    avatar: "/teacher-avatar.jpg",
  };

  const currentUser = userRole === "student" ? mockStudent : mockTeacher;

  const handleRoleSwitch = (role: "student" | "teacher") => {
    setUserRole(role);
  };

  return (
    <LMSLayout
      userRole={userRole}
      user={currentUser}
      onRoleSwitch={handleRoleSwitch}
    >
      {userRole === "student" ? (
        <StudentDashboard user={mockStudent} />
      ) : (
        <TeacherDashboard user={mockTeacher} />
      )}
    </LMSLayout>
  );
};

export default Index;