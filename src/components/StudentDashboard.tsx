import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CourseCard } from "./CourseCard";
import { LeaderboardCard } from "./LeaderboardCard";
import { StatsCard } from "./StatsCard";
import {
  BookOpen,
  Clock,
  Trophy,
  TrendingUp,
  Play,
  Coins,
  Star,
  Target,
  Award
} from "lucide-react";

interface StudentDashboardProps {
  user: {
    name: string;
    email: string;
    avatar?: string;
    coins: number;
    rank: number;
    totalCourses: number;
    completedCourses: number;
    studyStreak: number;
  };
}

export function StudentDashboard({ user }: StudentDashboardProps) {
  const [activeTab, setActiveTab] = useState("overview");

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
      {/* Welcome Header */}
      <div className="rounded-xl gradient-hero p-6 text-white animate-fade-in">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">
              Welcome back, {user.name.split(' ')[0]}! 🎓
            </h1>
            <p className="text-blue-100 mb-4">
              You're doing great! Keep up the learning momentum.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Target className="h-4 w-4" />
                <span>{user.studyStreak} day streak</span>
              </div>
              <div className="flex items-center gap-1">
                <Trophy className="h-4 w-4" />
                <span>Rank #{user.rank}</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 bg-white/20 rounded-lg px-3 py-2">
              <Coins className="h-5 w-5 text-yellow-300" />
              <span className="font-bold text-lg">{user.coins.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatsCard
          title="Total Courses"
          value={user.totalCourses}
          icon={BookOpen}
          trend="+2 this month"
        />
        <StatsCard
          title="Completed"
          value={user.completedCourses}
          icon={Award}
          trend={`${completionRate}% rate`}
          className="text-success"
        />
        <StatsCard
          title="Study Streak"
          value={user.studyStreak}
          icon={Target}
          trend="Personal best!"
          className="text-warning"
        />
        <StatsCard
          title="Total Coins"
          value={user.coins}
          icon={Coins}
          trend="+125 this week"
          className="text-primary"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Continue Learning */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-5 w-5 text-primary" />
                Continue Learning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {myCourses.filter(course => !course.isCompleted).map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    userRole="student"
                    onEnroll={() => {}}
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Available Courses */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-secondary" />
                Discover New Courses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {availableCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    userRole="student"
                    onEnroll={(courseId) => console.log("Enroll in:", courseId)}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Leaderboard */}
          <LeaderboardCard currentUserRank={user.rank} />

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-success" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover-lift">
                  <div className="w-8 h-8 rounded-full gradient-success flex items-center justify-center flex-shrink-0">
                    {activity.type === "course_complete" && <Award className="h-4 w-4 text-white" />}
                    {activity.type === "lesson_complete" && <BookOpen className="h-4 w-4 text-white" />}
                    {activity.type === "streak_milestone" && <Target className="h-4 w-4 text-white" />}
                    {activity.type === "quiz_passed" && <Star className="h-4 w-4 text-white" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">
                        {activity.type === "course_complete" && "Course Completed!"}
                        {activity.type === "lesson_complete" && "Lesson Finished"}
                        {activity.type === "streak_milestone" && "Streak Milestone"}
                        {activity.type === "quiz_passed" && "Quiz Passed"}
                      </p>
                      <Badge className="gradient-coins text-white border-0 coin-bounce">
                        +{activity.coins}
                      </Badge>
                    </div>
                    {activity.course && (
                      <p className="text-xs text-muted-foreground truncate">
                        {activity.course}
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Study Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                This Week's Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Daily Goal</span>
                  <span className="text-primary font-medium">75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Weekly Goal</span>
                  <span className="text-success font-medium">90%</span>
                </div>
                <Progress value={90} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Course Completion</span>
                  <span className="text-warning font-medium">{completionRate}%</span>
                </div>
                <Progress value={completionRate} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}