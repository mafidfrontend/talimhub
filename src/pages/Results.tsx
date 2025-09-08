import { LMSLayout } from "@/components/LMSLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Star } from "lucide-react";

const Results = () => {
	return (
		<LMSLayout>
			<div className="space-y-6">
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<Trophy className="h-5 w-5 text-warning" />
							Natijalar
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-muted-foreground">
							Bu sahifada yetakchilar jadvali va umumiy natijalar ko'rsatiladi.
						</p>
						<div className="mt-4 space-y-3">
							<div className="p-3 rounded-lg border flex items-center justify-between">
								<span className="font-medium">1. Dilshodbek</span>
								<span className="text-sm text-muted-foreground flex items-center gap-1"><Star className="h-4 w-4 text-warning" /> 9800 ball</span>
							</div>
							<div className="p-3 rounded-lg border flex items-center justify-between">
								<span className="font-medium">2. Nilufar</span>
								<span className="text-sm text-muted-foreground flex items-center gap-1"><Star className="h-4 w-4 text-warning" /> 9200 ball</span>
							</div>
							<div className="p-3 rounded-lg border flex items-center justify-between">
								<span className="font-medium">3. Jamshid</span>
								<span className="text-sm text-muted-foreground flex items-center gap-1"><Star className="h-4 w-4 text-warning" /> 9050 ball</span>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</LMSLayout>
	);
};

export default Results;


