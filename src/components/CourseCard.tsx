import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Clock, 
  Users, 
  Star, 
  Play, 
  BookOpen, 
  Coins,
  Lock,
  Trophy
} from "lucide-react";

interface CourseCardProps {
  course: {
    id: string;
    title: string;
    description: string;
    instructor: string;
    thumbnail: string;
    duration: string;
    students: number;
    rating: number;
    price: number;
    level: "Beginner" | "Intermediate" | "Advanced";
    progress?: number;
    isPurchased?: boolean;
    isCompleted?: boolean;
  };
  userRole: "student" | "teacher";
  onEnroll?: (courseId: string) => void;
  onEdit?: (courseId: string) => void;
}

export function CourseCard({ course, userRole, onEnroll, onEdit }: CourseCardProps) {
  const levelColors = {
    Beginner: "bg-success/10 text-success-foreground border-success/20",
    Intermediate: "bg-warning/10 text-warning-foreground border-warning/20", 
    Advanced: "bg-destructive/10 text-destructive-foreground border-destructive/20"
  };

  const handleAction = () => {
    if (userRole === "teacher" && onEdit) {
      onEdit(course.id);
    } else if (userRole === "student" && onEnroll) {
      onEnroll(course.id);
    }
  };

  return (
    <Card className="course-card group overflow-hidden">
      {/* Thumbnail */}
      <div className="relative overflow-hidden">
        <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement!.innerHTML = `
                <div class="w-full h-full gradient-hero flex items-center justify-center">
                  <BookOpen class="h-12 w-12 text-white" />
                </div>
              `;
            }}
          />
        </div>
        
        {/* Course Status Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <Badge className={levelColors[course.level]}>{course.level}</Badge>
          {course.isCompleted && (
            <Badge className="bg-success text-success-foreground">
              <Trophy className="h-3 w-3 mr-1" />
              Completed
            </Badge>
          )}
        </div>

        {/* Price Badge */}
        {userRole === "student" && !course.isPurchased && (
          <div className="absolute top-3 right-3">
            <Badge className="gradient-coins text-white border-0 flex items-center gap-1">
              <Coins className="h-3 w-3" />
              {course.price}
            </Badge>
          </div>
        )}

        {/* Play Button Overlay */}
        {course.isPurchased && (
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
            <Button
              size="icon"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full gradient-primary text-white hover-glow"
            >
              <Play className="h-5 w-5 ml-0.5" fill="currentColor" />
            </Button>
          </div>
        )}

        {/* Lock for Unpurchased */}
        {userRole === "student" && !course.isPurchased && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="bg-black/60 rounded-full p-3">
              <Lock className="h-5 w-5 text-white" />
            </div>
          </div>
        )}
      </div>

      <CardContent className="p-4">
        {/* Course Title & Description */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
            {course.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {course.description}
          </p>
          <p className="text-xs text-muted-foreground">by {course.instructor}</p>
        </div>

        {/* Course Stats */}
        <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{course.students}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-warning text-warning" />
            <span>{course.rating}</span>
          </div>
        </div>

        {/* Progress Bar (for purchased courses) */}
        {course.isPurchased && course.progress !== undefined && (
          <div className="mt-4 space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Progress</span>
              <span className="text-primary font-medium">{course.progress}%</span>
            </div>
            <Progress value={course.progress} className="h-2" />
          </div>
        )}
      </CardContent>

      <CardFooter className="p-4 pt-0">
        {userRole === "student" ? (
          course.isPurchased ? (
            <Button 
              className="w-full gradient-primary text-white hover-glow" 
              onClick={handleAction}
            >
              {course.progress === 100 ? "Review Course" : "Continue Learning"}
            </Button>
          ) : (
            <Button 
              className="w-full" 
              variant="outline"
              onClick={handleAction}
            >
              <Coins className="h-4 w-4 mr-2" />
              Enroll for {course.price} coins
            </Button>
          )
        ) : (
          <Button 
            className="w-full" 
            variant="outline" 
            onClick={handleAction}
          >
            Edit Course
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}