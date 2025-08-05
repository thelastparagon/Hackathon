import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CreditsRewardsSystem from "./CreditsRewardsSystem";
import { Camera, Award, Users, MapPin, TrendingUp, Calendar, Coins, Gift } from "lucide-react";

const CommunityTracker = () => {
  const [points, setPoints] = useState(1247);
  const [level, setLevel] = useState(3);
  const [showCreditsSystem, setShowCreditsSystem] = useState(false);

  if (showCreditsSystem) {
    return (
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Credits & Rewards</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Earn credits for environmental actions and exchange them for eco-friendly rewards
          </p>
          <Button 
            variant="outline" 
            onClick={() => setShowCreditsSystem(false)}
          >
            ← Back to Community
          </Button>
        </div>
        <CreditsRewardsSystem />
      </div>
    );
  }

  const recentActions = [
    {
      id: 1,
      user: "Sarah M.",
      action: "Planted 5 trees",
      location: "Central Park",
      points: 250,
      time: "2 hours ago",
      verified: true
    },
    {
      id: 2,
      user: "Mike R.",
      action: "Cleaned park area",
      location: "Riverside Trail",
      points: 150,
      time: "5 hours ago",
      verified: true
    },
    {
      id: 3,
      user: "Emma L.",
      action: "Plant care routine",
      location: "Home Garden",
      points: 75,
      time: "1 day ago",
      verified: true
    }
  ];

  const achievements = [
    { name: "Tree Planter", description: "Planted 10 trees", icon: "🌳" },
    { name: "Care Expert", description: "30 days plant care", icon: "🌱" },
    { name: "Community Hero", description: "Verified 50 actions", icon: "🏆" }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Community Actions</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Track environmental actions and earn rewards for making a difference
        </p>
      </div>

      {/* User Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <Card className="p-6 text-center">
          <div className="space-y-2">
            <TrendingUp className="w-8 h-8 text-primary mx-auto" />
            <h3 className="text-2xl font-bold text-foreground">{points}</h3>
            <p className="text-muted-foreground">Total Points</p>
          </div>
        </Card>
        
        <Card className="p-6 text-center">
          <div className="space-y-2">
            <Award className="w-8 h-8 text-primary mx-auto" />
            <h3 className="text-2xl font-bold text-foreground">Level {level}</h3>
            <p className="text-muted-foreground">Green Guardian</p>
          </div>
        </Card>
        
        <Card className="p-6 text-center">
          <div className="space-y-2">
            <Users className="w-8 h-8 text-primary mx-auto" />
            <h3 className="text-2xl font-bold text-foreground">12</h3>
            <p className="text-muted-foreground">Actions This Month</p>
          </div>
        </Card>
      </div>

      {/* Action Tracking */}
      <Card className="p-8 max-w-2xl mx-auto">
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">Record New Action</h3>
            <p className="text-muted-foreground">Take before/after photos to verify your environmental impact</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Button variant="guardian" size="lg">
              <Camera className="w-5 h-5" />
              Tree Planting
            </Button>
            <Button variant="outline" size="lg">
              <Camera className="w-5 h-5" />
              Area Cleanup
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setShowCreditsSystem(true)}
            >
              <Coins className="w-5 h-5" />
              View Credits
            </Button>
          </div>
        </div>
      </Card>

      {/* Recent Community Actions */}
      <div className="max-w-4xl mx-auto space-y-6">
        <h3 className="text-2xl font-semibold text-foreground">Recent Community Actions</h3>
        
        <div className="space-y-4">
          {recentActions.map((action) => (
            <Card key={action.id} className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold">
                      {action.user.split(' ')[0][0]}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{action.user}</h4>
                    <p className="text-muted-foreground">{action.action}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{action.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-right space-y-2">
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    +{action.points} pts
                  </Badge>
                  {action.verified && (
                    <Badge variant="secondary" className="bg-success text-success-foreground block">
                      Verified ✓
                    </Badge>
                  )}
                  <p className="text-sm text-muted-foreground">{action.time}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="max-w-4xl mx-auto space-y-6">
        <h3 className="text-2xl font-semibold text-foreground">Your Achievements</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-elegant transition-shadow">
              <div className="space-y-3">
                <div className="text-4xl">{achievement.icon}</div>
                <h4 className="font-semibold text-foreground">{achievement.name}</h4>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setShowCreditsSystem(true)}
                >
                  <Gift className="w-4 h-4" />
                  View Rewards
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityTracker;