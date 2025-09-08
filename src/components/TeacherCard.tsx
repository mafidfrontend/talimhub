import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Star } from "lucide-react";

interface TeacherCardProps {
	name: string;
	specialty: string;
	rating: number;
	courses: number;
	students: number;
	avatar?: string;
}

export function TeacherCard({ name, specialty, rating, courses, students, avatar }: TeacherCardProps) {
	return (
		<Card className="p-4 flex items-center gap-4 hover:shadow-md transition-shadow">
			<div className="w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
				{avatar ? (
					<img src={avatar} alt={name} className="w-full h-full object-cover" />
				) : (
					<span className="text-primary font-semibold text-lg">{name[0]}</span>
				)}
			</div>
			<div className="flex-1 min-w-0">
				<div className="font-medium truncate">{name}</div>
				<div className="text-sm text-muted-foreground truncate">{specialty}</div>
				<div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
					<span className="flex items-center gap-1"><Star className="h-3 w-3 text-warning fill-warning" /> {rating}</span>
					<span>{courses} kurs</span>
					<span className="flex items-center gap-1"><Users className="h-3 w-3" /> {students.toLocaleString()} talaba</span>
				</div>
			</div>
			<Button size="sm" variant="outline">Ko'rish</Button>
		</Card>
	);
}


