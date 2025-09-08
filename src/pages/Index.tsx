import { LMSLayout } from "@/components/LMSLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EnhancedCourseCard, type EnhancedCourse } from "@/components/EnhancedCourseCard";
import { TeacherCard } from "@/components/TeacherCard";
import { BookOpen, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
	const navigate = useNavigate();
	const availableCourses: EnhancedCourse[] = [
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
			originalPrice: 149000,
		},
		{
			id: "5",
			title: "Machine Learning Basics",
			category: "Data Science",
			level: "Advanced",
			instructor: "Dr. Lisa Park",
			thumbnail: "/python-course.jpg", 
			hours: 20,
			students: 15670,
			lessons: 120,
			rating: 4.8,
			price: 200000,
			originalPrice: 259000,
		},
		{
			id: "6",
			title: "UI/UX Design Masterclass",
			category: "Design",
			level: "Intermediate",
			instructor: "Sarah Johnson",
			thumbnail: "/design-course.jpg",
			hours: 42,
			students: 89234,
			lessons: 98,
			rating: 4.9,
			price: 129000,
			originalPrice: 169000,
		}
	];

	return (
		<LMSLayout>
			<div className="space-y-6">
				<div className="rounded-xl gradient-primary p-6 text-white">
					<h1 className="text-2xl font-bold mb-2">Ta'limHubga xush kelibsiz</h1>
					<p className="text-white/90 mb-4">Eng so'nggi va mashhur kurslar bilan bilimingizni oshiring</p>
					<Button className="bg-white text-primary hover:bg-white/90" onClick={() => navigate("/courses")}>
						Kurslarni Ko'rish
					</Button>
				</div>

				{/* Teachers Row */}
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<Users className="h-5 w-5 text-primary" />
							Ustozlar
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="flex gap-4 overflow-x-auto pb-2">
							<div className="min-w-[280px]"><TeacherCard name="Sardor Xolmatov" specialty="React Developer" rating={4.9} courses={12} students={28500} /></div>
							<div className="min-w-[280px]"><TeacherCard name="Malika Karimova" specialty="UI/UX Designer" rating={4.8} courses={8} students={19300} /></div>
							<div className="min-w-[280px]"><TeacherCard name="Bobur Rahimov" specialty="Node.js Developer" rating={4.9} courses={15} students={23100} /></div>
							<div className="min-w-[280px]"><TeacherCard name="Nilufar Tosheva" specialty="Python Developer" rating={4.7} courses={10} students={16750} /></div>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<div className="flex items-center justify-between">
							<CardTitle className="flex items-center gap-2">
								<BookOpen className="h-5 w-5 text-primary" />
								Mavjud Kurslar
							</CardTitle>
							<Button size="sm" variant="outline" onClick={() => navigate("/courses")}>
								Barchasini Ko'rish
							</Button>
						</div>
					</CardHeader>
					<CardContent>
						<div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
							{availableCourses.map((course) => (
								<div key={course.id} className="min-w-[320px] snap-start">
									<EnhancedCourseCard course={course} />
								</div>
							))}
						</div>
					</CardContent>
				</Card>
			</div>
		</LMSLayout>
	);
};

export default Index;