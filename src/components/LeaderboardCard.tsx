import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Coins } from "lucide-react";

interface LeaderboardCardProps {
  currentUserRank: number;
}

export function LeaderboardCard({ currentUserRank }: LeaderboardCardProps) {
  // Mock leaderboard data
  const leaderboard = [
    {
      rank: 1,
      name: "Alex Chen",
      avatar: "/avatar-1.jpg",
      coins: 2850,
      badge: "Learning Champion",
      isCurrentUser: false,
    },
    {
      rank: 2,
      name: "Sarah Johnson",
      avatar: "/avatar-2.jpg", 
      coins: 2720,
      badge: "Course Master",
      isCurrentUser: false,
    },
    {
      rank: 3,
      name: "Miguel Rodriguez",
      avatar: "/avatar-3.jpg",
      coins: 2650,
      badge: "Knowledge Seeker",
      isCurrentUser: false,
    },
    {
      rank: 4,
      name: "Emma Wilson",
      avatar: "/avatar-4.jpg",
      coins: 2580,
      badge: "Dedicated Learner",
      isCurrentUser: currentUserRank === 4,
    },
    {
      rank: 5,
      name: "David Park",
      avatar: "/avatar-5.jpg",
      coins: 2520,
      badge: "Rising Star",
      isCurrentUser: currentUserRank === 5,
    },
  ];

  // Add current user if not in top 5
  if (currentUserRank > 5) {
    leaderboard.push({
      rank: currentUserRank,
      name: "You",
      avatar: "",
      coins: 1850,
      badge: "Climbing Up",
      isCurrentUser: true,
    });
  }

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-4 w-4 text-warning" />;
      case 2:
        return <Medal className="h-4 w-4 text-slate-400" />;
      case 3:
        return <Award className="h-4 w-4 text-amber-600" />;
      default:
        return <span className="text-sm font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getRankBg = (rank: number) => {
    switch (rank) {
      case 1:
        return "gradient-coins";
      case 2:
        return "bg-slate-100";
      case 3:
        return "bg-amber-100";
      default:
        return "bg-muted";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-warning" />
          Leaderboard
          <Badge variant="secondary" className="ml-auto">Weekly</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {leaderboard.map((user, index) => (
          <div
            key={user.rank}
            className={`flex items-center gap-3 p-3 rounded-lg transition-smooth hover-lift ${
              user.isCurrentUser 
                ? "bg-primary/10 border border-primary/20 ring-2 ring-primary/10" 
                : "bg-muted/30 hover:bg-muted/50"
            }`}
          >
            {/* Rank Badge */}
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getRankBg(user.rank)}`}>
              {getRankIcon(user.rank)}
            </div>

            {/* User Info */}
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className={user.isCurrentUser ? "gradient-primary text-white" : ""}>
                  {user.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className={`text-sm font-medium truncate ${user.isCurrentUser ? "text-primary" : ""}`}>
                    {user.name}
                    {user.isCurrentUser && (
                      <span className="ml-1 text-xs text-primary">(You)</span>
                    )}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground">{user.badge}</p>
              </div>
            </div>

            {/* Coins */}
            <div className="flex items-center gap-1 text-right">
              <Coins className="h-3 w-3 text-warning" />
              <span className="text-sm font-semibold text-warning">
                {user.coins.toLocaleString()}
              </span>
            </div>
          </div>
        ))}

        {/* View Full Leaderboard */}
        <div className="pt-3 border-t">
          <button className="w-full text-sm text-primary hover:text-primary/80 transition-colors font-medium">
            View Full Leaderboard →
          </button>
        </div>
      </CardContent>
    </Card>
  );
}