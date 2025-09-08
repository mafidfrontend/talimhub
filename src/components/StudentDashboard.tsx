import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CourseCard } from "./CourseCard";
import { StatsCard } from "./StatsCard";
import {
  BookOpen,
  Clock,
  Trophy,
  Award,
  Bell,
} from "lucide-react";

interface StudentDashboardProps {
  user: {
    name: string;
    email: string;
    avatar?: string;
    rank: number;
    totalCourses: number;
    completedCourses: number;
    studyStreak: number;
  };
}

export function StudentDashboard({ user }: StudentDashboardProps) {

  // Mock data
  const myCourses = [
    {
      id: "1",
      title: "Advanced React Development",
      description: "Master React with hooks, context, and performance optimization",
      instructor: "Sarah Wilson",
      thumbnail: "/react-course.jpg",
      duration: "12 hours",
      students: 1250,
      rating: 4.8,
      price: 0,
      level: "Advanced" as const,
      progress: 75,
      isPurchased: true,
      isCompleted: false,
    },
    {
      id: "2", 
      title: "Python for Data Science",
      description: "Complete guide to data analysis with Python, pandas, and NumPy",
      instructor: "Dr. Michael Chen",
      thumbnail: "/python-course.jpg",
      duration: "18 hours",
      students: 890,
      rating: 4.9,
      price: 0,
      level: "Intermediate" as const,
      progress: 100,
      isPurchased: true,
      isCompleted: true,
    },
    {
      id: "3",
      title: "UI/UX Design Fundamentals", 
      description: "Learn design principles and create beautiful user experiences",
      instructor: "Emily Rodriguez",
      thumbnail: "/design-course.jpg",
      duration: "8 hours",
      students: 2100,
      rating: 4.7,
      price: 0,
      level: "Beginner" as const,
      progress: 30,
      isPurchased: true,
      isCompleted: false,
    }
  ];

  const availableCourses = [
    {
      id: "4",
      title: "Node.js Backend Development",
      description: "Build scalable backend applications with Node.js and Express",
      instructor: "Alex Johnson",
      thumbnail: "/nodejs-course.jpg",
      duration: "15 hours",
      students: 967,
      rating: 4.6,
      price: 150,
      level: "Intermediate" as const,
      isPurchased: false,
    },
    {
      id: "5",
      title: "Machine Learning Basics",
      description: "Introduction to ML algorithms and practical applications",
      instructor: "Dr. Lisa Park",
      thumbnail: "/python-course.jpg", 
      duration: "20 hours",
      students: 1567,
      rating: 4.8,
      price: 200,
      level: "Advanced" as const,
      isPurchased: false,
    }
  ];

  const recentActivity = [
    { type: "course_complete", course: "Python for Data Science", coins: 50, time: "2 hours ago" },
    { type: "lesson_complete", course: "Advanced React Development", coins: 10, time: "1 day ago" },
    { type: "streak_milestone", course: null, coins: 25, time: "3 days ago" },
    { type: "quiz_passed", course: "UI/UX Design Fundamentals", coins: 15, time: "5 days ago" },
  ];

  const completionRate = Math.round((user.completedCourses / user.totalCourses) * 100);

  return (
    <div className="space-y-6">

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatsCard
          title="Jami Kurslar"
          value={user.totalCourses}
          icon={BookOpen}
          trend="+2 shu oy"
        />
        <StatsCard
          title="Tugatilgan"
          value={user.completedCourses}
          icon={Award}
          trend={`${completionRate}% ko'rsatkich`}
          className="text-success"
        />
        <StatsCard
          title="O'qish Soatlari"
          value="127"
          icon={Clock}
          trend="+5.2 shu hafta"
          className="text-warning"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Course Banner */}
          <div className="rounded-xl gradient-primary p-6 text-white">
            <h2 className="text-xl font-bold mb-2">📚 Yangi Kurslar</h2>
            <p className="text-white/90 mb-4">Eng so'nggi va mashhur kurslar bilan bilimingizni oshiring</p>
            <Button className="bg-white text-primary hover:bg-white/90">
              Barcha Kurslar
            </Button>
          </div>

          {/* Available Courses */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Mavjud Kurslar
                </CardTitle>
                <Button size="sm" variant="outline">
                  Barchasini Ko'rish
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {availableCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    onEnroll={(courseId) => console.log("Enroll in:", courseId)}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* My Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                Mening Natijam
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">{user.studyStreak}</div>
                  <p className="text-sm text-muted-foreground">kunlik o'qish</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-success mb-1">{user.completedCourses}</div>
                  <p className="text-sm text-muted-foreground">tugatilgan kurs</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-warning mb-1">127</div>
                  <p className="text-sm text-muted-foreground">soat o'qildi</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Announcements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-secondary" />
                E'lonlar
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                <p className="text-sm font-medium text-primary mb-1">Yangi React kursi!</p>
                <p className="text-xs text-muted-foreground">Bugun yangi React kursi qo'shildi. Endi ro'yxatdan o'tishingiz mumkin.</p>
              </div>
              
              <div className="p-3 rounded-lg bg-success/10 border border-success/20">
                <p className="text-sm font-medium text-success mb-1">Chegirma!</p>
                <p className="text-xs text-muted-foreground">Barcha kurslar uchun 30% chegirma. Faqat shu hafta!</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}