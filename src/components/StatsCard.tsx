import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: number | string;
  icon: LucideIcon;
  trend?: string;
  className?: string;
}

export function StatsCard({ title, value, icon: Icon, trend, className }: StatsCardProps) {
  return (
    <Card className="hover-lift">
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">{title}</p>
            <div className="flex items-center gap-2">
              <p className="text-2xl font-bold">{typeof value === 'number' ? value.toLocaleString() : value}</p>
              {trend && (
                <span className={cn("text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground", className)}>
                  {trend}
                </span>
              )}
            </div>
          </div>
          <div className={cn("p-2 rounded-lg bg-muted", className)}>
            <Icon className="h-4 w-4" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}