import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  BookOpen,
  Users,
  Trophy,
  Coins,
  User,
  Settings,
  LogOut,
  Bell,
  ChevronDown,
  GraduationCap,
  PlusCircle,
} from "lucide-react";

interface LMSLayoutProps {
  children: React.ReactNode;
  userRole: "student" | "teacher";
  user: {
    name: string;
    email: string;
    avatar?: string;
    coins?: number;
    rank?: number;
  };
  onRoleSwitch: (role: "student" | "teacher") => void;
}

export function LMSLayout({ children, userRole, user, onRoleSwitch }: LMSLayoutProps) {
  const [notifications] = useState(3);

  const navItems = userRole === "student" 
    ? [
        { icon: BookOpen, label: "My Courses", active: true },
        { icon: Users, label: "Groups", active: false },
        { icon: Trophy, label: "Leaderboard", active: false },
        { icon: Coins, label: "Shop", active: false },
      ]
    : [
        { icon: GraduationCap, label: "Dashboard", active: true },
        { icon: BookOpen, label: "My Courses", active: false },
        { icon: Users, label: "Groups", active: false },
        { icon: PlusCircle, label: "Create", active: false },
      ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 gradient-hero rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gradient-hero">Ta'limHub</span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant={item.active ? "default" : "ghost"}
                  size="sm"
                  className={item.active ? "gradient-primary text-white" : ""}
                >
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.label}
                </Button>
              ))}
            </nav>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              {/* Role Switch */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="hidden sm:flex">
                    {userRole === "student" ? "Student" : "Teacher"}
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => onRoleSwitch("student")}>
                    <User className="h-4 w-4 mr-2" />
                    Student View
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => onRoleSwitch("teacher")}>
                    <GraduationCap className="h-4 w-4 mr-2" />
                    Teacher View
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Student Coins */}
              {userRole === "student" && (
                <div className="hidden sm:flex items-center space-x-2 px-3 py-1 rounded-full bg-warning/10 border border-warning/20">
                  <Coins className="h-4 w-4 text-warning" />
                  <span className="text-sm font-medium text-warning-foreground">
                    {user.coins?.toLocaleString() || 0}
                  </span>
                </div>
              )}

              {/* Notifications */}
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-4 w-4" />
                {notifications > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs gradient-secondary text-white border-0">
                    {notifications}
                  </Badge>
                )}
              </Button>

              {/* User Avatar */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="gradient-primary text-white">
                        {user.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <div className="flex items-center justify-start gap-2 p-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="gradient-primary text-white">
                        {user.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-medium">{user.name}</p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  {userRole === "student" && user.rank && (
                    <>
                      <DropdownMenuItem disabled>
                        <Trophy className="mr-2 h-4 w-4 text-warning" />
                        Rank #{user.rank}
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                    </>
                  )}
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {children}
      </main>
    </div>
  );
}
