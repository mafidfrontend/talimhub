import { LMSLayout } from "@/components/LMSLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Filter, Users } from "lucide-react";
import { EnhancedCourseCard, type EnhancedCourse } from "@/components/EnhancedCourseCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useMemo, useState } from "react";
import { TeacherCard } from "@/components/TeacherCard";

const Courses = () => {
	const [level, setLevel] = useState<string>("All");
	const [category, setCategory] = useState<string>("All");

	const courses: EnhancedCourse[] = [
		{
			id: "1",
			title: "Complete Web Development Bootcamp",
			category: "Web Development",
			level: "Advanced",
			instructor: "Dr. Angela Yu",
			thumbnail: "/react-course.jpg",
			hours: 40,
			students: 152847,
			lessons: 156,
			rating: 4.8,
			price: 89900,
			originalPrice: 199900,
			progress: 75,
		},
		{
			id: "2",
			title: "UI/UX Design Masterclass",
			category: "Design",
			level: "Intermediate",
			instructor: "Sarah Johnson",
			thumbnail: "/design-course.jpg",
			hours: 42,
			students: 89234,
			lessons: 98,
			rating: 4.9,
			price: 69900,
		},
		{
			id: "3",
			title: "Python for Data Science",
			category: "Data Science",
			level: "Intermediate",
			instructor: "Dr. Michael Chen",
			thumbnail: "/python-course.jpg",
			hours: 18,
			students: 89000,
			lessons: 120,
			rating: 4.9,
			price: 129900,
			originalPrice: 159900,
		},
		{
			id: "4",
			title: "Node.js Backend Development",
			category: "Web Development",
			level: "Intermediate",
			instructor: "Alex Johnson",
			thumbnail: "/nodejs-course.jpg",
			hours: 15,
			students: 9670,
			lessons: 86,
			rating: 4.6,
			price: 110000,
		},
		{
			id: "5",
			title: "Advanced React Development",
			category: "Web Development",
			level: "Advanced",
			instructor: "Sarah Wilson",
			thumbnail: "/react-course.jpg",
			hours: 24,
			students: 45210,
			lessons: 140,
			rating: 4.7,
			price: 149000,
			originalPrice: 199000,
		},
		{
			id: "6",
			title: "Data Analyst Starter Program",
			category: "Data Science",
			level: "Beginner",
			instructor: "Emily Rodriguez",
			thumbnail: "/python-course.jpg",
			hours: 28,
			students: 23340,
			lessons: 75,
			rating: 4.6,
			price: 99000,
		},
		{
			id: "7",
			title: "UI Animation & Micro-Interactions",
			category: "Design",
			level: "Intermediate",
			instructor: "Alex Johnson",
			thumbnail: "/design-course.jpg",
			hours: 12,
			students: 12345,
			lessons: 44,
			rating: 4.8,
			price: 119000,
		}
	];

	const filtered = useMemo(() => {
		return courses.filter((c) => (level === "All" || c.level === level) && (category === "All" || c.category === category));
	}, [courses, level, category]);

	return (
		<LMSLayout>
			<Card>
				<CardHeader>
					<div className="flex items-center justify-between gap-4 flex-wrap">
						<CardTitle className="flex items-center gap-2">
							<BookOpen className="h-5 w-5 text-primary" />
							Barcha Kurslar
						</CardTitle>
						<div className="flex items-center gap-3">
							<div className="flex items-center gap-2">
								<Filter className="h-4 w-4 text-muted-foreground" />
								<span className="text-sm text-muted-foreground">Filterlar:</span>
							</div>
							<Select value={category} onValueChange={setCategory}>
								<SelectTrigger className="w-40">
									<SelectValue placeholder="Kategoriya" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="All">Barchasi</SelectItem>
									<SelectItem value="Web Development">Web Development</SelectItem>
									<SelectItem value="Design">Design</SelectItem>
									<SelectItem value="Data Science">Data Science</SelectItem>
								</SelectContent>
							</Select>
							<Select value={level} onValueChange={setLevel}>
								<SelectTrigger className="w-40">
									<SelectValue placeholder="Daraja" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="All">Barchasi</SelectItem>
									<SelectItem value="Beginner">Beginner</SelectItem>
									<SelectItem value="Intermediate">Intermediate</SelectItem>
									<SelectItem value="Advanced">Advanced</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{filtered.map((course) => (
							<EnhancedCourseCard key={course.id} course={course} />
						))}
					</div>
				</CardContent>
			</Card>

			{/* Teachers Section */}
			<Card className="mt-6">
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<Users className="h-5 w-5 text-primary" />
						Ustozlar
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
						<TeacherCard name="Sardor Xolmatov" specialty="React Developer" rating={4.9} courses={12} students={28500} />
						<TeacherCard name="Malika Karimova" specialty="UI/UX Designer" rating={4.8} courses={8} students={19300} />
						<TeacherCard name="Bobur Rahimov" specialty="Node.js Developer" rating={4.9} courses={15} students={23100} />
						<TeacherCard name="Nilufar Tosheva" specialty="Python Developer" rating={4.7} courses={10} students={16750} />
					</div>
				</CardContent>
			</Card>
		</LMSLayout>
	);
};

export default Courses;


