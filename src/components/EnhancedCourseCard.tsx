import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Clock, Users, BookOpen } from "lucide-react";

export interface EnhancedCourse {
	id: string;
	title: string;
	category: string;
	level: "Beginner" | "Intermediate" | "Advanced";
	instructor: string;
	thumbnail: string;
	hours: number;
	students: number;
	lessons: number;
	rating: number;
	price: number; // current price in so'm
	originalPrice?: number; // optional crossed price
	progress?: number; // 0-100 if already enrolled
}

interface Props {
	course: EnhancedCourse;
	onEnroll?: (courseId: string) => void;
}

export function EnhancedCourseCard({ course, onEnroll }: Props) {
	const handleClick = () => {
		if (course.progress === undefined && onEnroll) onEnroll(course.id);
	};

	return (
		<Card className="overflow-hidden hover:shadow-lg transition-shadow">
			<div className="relative">
				<img src={course.thumbnail} alt={course.title} className="w-full h-48 object-cover" />
				{/* top-left progress / badge */}
				{typeof course.progress === "number" && (
					<div className="absolute top-3 left-3 bg-emerald-600 text-white text-xs px-2 py-1 rounded-full">
						{course.progress}%
					</div>
				)}
				{/* top-right discount badge */}
				{course.originalPrice && course.originalPrice > course.price && (
					<div className="absolute top-3 right-3 bg-rose-600 text-white text-xs px-2 py-1 rounded-full">
						-{Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}%
					</div>
				)}
				{/* teacher strip */}
				<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-black/0 p-3 text-white">
					<div className="text-sm font-medium">{course.instructor}</div>
					<div className="mt-1 flex items-center gap-4 text-xs opacity-90">
						<span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {course.hours} soat</span>
						<span className="flex items-center gap-1"><Users className="h-4 w-4" /> {course.students.toLocaleString()} talaba</span>
					</div>
				</div>
			</div>

			<div className="p-4">
				<div className="mb-2">
					<span className="text-xs px-2 py-1 rounded-full bg-muted mr-2">{course.category}</span>
					<span className="text-xs px-2 py-1 rounded-full bg-muted">{course.level}</span>
				</div>
				<h3 className="font-semibold leading-snug line-clamp-2">{course.title}</h3>
				<div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
					<Star className="h-4 w-4 text-warning fill-warning" />
					<span>{course.rating.toFixed(1)}</span>
					<span>•</span>
					<span className="flex items-center gap-1"><BookOpen className="h-4 w-4" /> {course.lessons} dars</span>
				</div>

				<div className="mt-4 flex items-center justify-between">
					<div>
						<div className="text-lg font-bold">{course.price.toLocaleString()} so'm</div>
						{course.originalPrice && (
							<div className="text-xs text-muted-foreground line-through">{course.originalPrice.toLocaleString()} so'm</div>
						)}
					</div>
					{typeof course.progress === "number" ? (
						<Button className="bg-primary text-white" size="sm">Continue Watching</Button>
					) : (
						<Button variant="outline" size="sm" onClick={handleClick}>Enroll Now</Button>
					)}
				</div>
			</div>
		</Card>
	);
}


