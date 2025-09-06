import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CourseCard } from "./CourseCard";
import { StatsCard } from "./StatsCard";
import {
  BookOpen,
  Users,
  DollarSign,
  TrendingUp,
  PlusCircle,
  Video,
  UserCheck,
  MessageSquare,
  Eye,
  Download
} from "lucide-react";

interface TeacherDashboardProps {
  user: {
    name: string;
    email: string;
    avatar?: string;
  };
}

export function TeacherDashboard({ user }: TeacherDashboardProps) {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock teacher stats
  const teacherStats = {
    totalCourses: 8,
    totalStudents: 3420,
    monthlyRevenue: 15680,
    completionRate: 87,
  };

  // Mock courses data
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
      price: 199,
      level: "Advanced" as const,
      revenue: 8420,
      completionRate: 76,
    },
    {
      id: "2",
      title: "JavaScript Fundamentals",
      description: "Complete guide to modern JavaScript ES6+ features and best practices",
      instructor: "Sarah Wilson",
      thumbnail: "/nodejs-course.jpg",
      duration: "8 hours",
      students: 890,
      rating: 4.9,
      price: 99,
      level: "Beginner" as const,
      revenue: 4320,
      completionRate: 91,
    },
    {
      id: "3",
      title: "React Native Mobile Apps",
      description: "Build cross-platform mobile applications with React Native",
      instructor: "Sarah Wilson", 
      thumbnail: "/react-course.jpg",
      duration: "15 hours",
      students: 567,
      rating: 4.7,
      price: 249,
      level: "Intermediate" as const,
      revenue: 2940,
      completionRate: 68,
    }
  ];

  const recentActivity = [
    { type: "new_student", course: "Advanced React Development", count: 15, time: "2 hours ago" },
    { type: "course_completed", course: "JavaScript Fundamentals", count: 8, time: "5 hours ago" },
    { type: "review_received", course: "React Native Mobile Apps", rating: 5, time: "1 day ago" },
    { type: "revenue_milestone", course: "Advanced React Development", amount: 1000, time: "2 days ago" },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="rounded-xl gradient-hero p-6 text-white animate-fade-in">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">
              Xush kelibsiz, {user.name.split(' ')[0]}! 👨‍🏫
            </h1>
            <p className="text-blue-100 mb-4">
              Sizning kurslaringiz ta'sir qilyapti! Mana o'qituvchilik ko'rsatkichlaringiz.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                <span>{teacherStats.totalCourses} kurs</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{teacherStats.totalStudents.toLocaleString()} talaba</span>
              </div>
            </div>
          </div>
          <Button className="bg-white/20 text-white hover:bg-white/30 border-white/30">
            <PlusCircle className="h-4 w-4 mr-2" />
            Kurs Yaratish
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatsCard
          title="Jami Kurslar"
          value={teacherStats.totalCourses}
          icon={BookOpen}
          trend="+2 shu oy"
          className="text-primary"
        />
        <StatsCard
          title="Jami Talabalar"
          value={teacherStats.totalStudents}
          icon={Users}
          trend="+156 shu hafta"
          className="text-success"
        />
        <StatsCard
          title="Oylik Daromad"
          value={`$${teacherStats.monthlyRevenue.toLocaleString()}`}
          icon={DollarSign}
          trend="+12% o'tgan oyga nisbatan"
          className="text-warning"
        />
        <StatsCard
          title="O'rtacha Tugatish"
          value={`${teacherStats.completionRate}%`}
          icon={TrendingUp}
          trend="+5% shu oy"
          className="text-secondary"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* My Courses */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Mening Kurslarim
                </CardTitle>
                <Button size="sm">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Yangi Kurs
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {myCourses.map((course) => (
                  <div key={course.id} className="border rounded-lg p-4 hover-lift">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-4 flex-1">
                        <div className="w-20 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                          <BookOpen className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm mb-1 truncate">{course.title}</h4>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              {course.students} talaba
                            </div>
                            <div className="flex items-center gap-1">
                              <DollarSign className="h-3 w-3" />
                              ${course.revenue.toLocaleString()} daromad
                            </div>
                            <div className="flex items-center gap-1">
                              <TrendingUp className="h-3 w-3" />
                              {course.completionRate}% tugatish
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">
                          ⭐ {course.rating}
                        </Badge>
                        <Button size="sm" variant="ghost">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Tezkor Amallar</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <Button variant="outline" className="h-20 flex-col gap-2">
                  <Video className="h-5 w-5" />
                  <span className="text-xs">Upload Video</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2">
                  <Users className="h-5 w-5" />
                  <span className="text-xs">Manage Groups</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2">
                  <MessageSquare className="h-5 w-5" />
                  <span className="text-xs">View Messages</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2">
                  <Download className="h-5 w-5" />
                  <span className="text-xs">Export Data</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
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
                  <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                    {activity.type === "new_student" && <UserCheck className="h-4 w-4 text-white" />}
                    {activity.type === "course_completed" && <BookOpen className="h-4 w-4 text-white" />}
                    {activity.type === "review_received" && <MessageSquare className="h-4 w-4 text-white" />}
                    {activity.type === "revenue_milestone" && <DollarSign className="h-4 w-4 text-white" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">
                        {activity.type === "new_student" && `${activity.count} New Students`}
                        {activity.type === "course_completed" && `${activity.count} Completions`}
                        {activity.type === "review_received" && "5-Star Review!"}
                        {activity.type === "revenue_milestone" && "Revenue Milestone"}
                      </p>
                      {activity.type === "revenue_milestone" && (
                        <Badge className="gradient-success text-white border-0">
                          +${activity.amount}
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground truncate">
                      {activity.course}
                    </p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Performance Insights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                This Month's Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 rounded-lg bg-success/10 border border-success/20">
                <div className="flex items-center gap-2 text-success mb-1">
                  <TrendingUp className="h-4 w-4" />
                  <span className="font-medium text-sm">Great Performance!</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Your completion rates are 15% above average
                </p>
              </div>
              
              <div className="p-3 rounded-lg bg-warning/10 border border-warning/20">
                <div className="flex items-center gap-2 text-warning mb-1">
                  <Users className="h-4 w-4" />
                  <span className="font-medium text-sm">Growing Audience</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  +156 new students this week
                </p>
              </div>

              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                <div className="flex items-center gap-2 text-primary mb-1">
                  <MessageSquare className="h-4 w-4" />
                  <span className="font-medium text-sm">High Engagement</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  4.8 average rating across all courses
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}