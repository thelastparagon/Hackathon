import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Coins, 
  Gift, 
  TreePine, 
  Award, 
  Star, 
  ShoppingCart, 
  Wallet,
  TrendingUp,
  Leaf,
  Recycle,
  Heart
} from "lucide-react";

const CreditsRewardsSystem = () => {
  const [userCredits, setUserCredits] = useState(2847);
  const [selectedReward, setSelectedReward] = useState<any>(null);

  const creditEarningActions = [
    {
      action: "Plant a Tree",
      credits: 100,
      icon: TreePine,
      description: "Plant and verify with before/after photos",
      multiplier: "2x on weekends",
      frequency: "Daily"
    },
    {
      action: "Area Cleanup",
      credits: 75,
      icon: Recycle,
      description: "Clean public areas and document impact",
      multiplier: "3x for large areas",
      frequency: "Unlimited"
    },
    {
      action: "Plant Care",
      credits: 25,
      icon: Leaf,
      description: "Daily plant maintenance and monitoring",
      multiplier: "1.5x for 7-day streaks",
      frequency: "Daily"
    },
    {
      action: "Education Complete",
      credits: 50,
      icon: Award,
      description: "Complete educational modules and quizzes",
      multiplier: "2x for perfect scores",
      frequency: "Per module"
    }
  ];

  const rewardCategories = [
    {
      category: "Eco Products",
      icon: Gift,
      items: [
        { name: "Bamboo Water Bottle", credits: 500, image: "🥤", inStock: true },
        { name: "Organic Seed Kit", credits: 300, image: "🌱", inStock: true },
        { name: "Solar Phone Charger", credits: 800, image: "🔋", inStock: true },
        { name: "Eco-Friendly Tote Bag", credits: 250, image: "👜", inStock: false }
      ]
    },
    {
      category: "Digital Rewards",
      icon: Star,
      items: [
        { name: "Premium App Features", credits: 1000, image: "⭐", inStock: true },
        { name: "Custom Plant Avatar", credits: 150, image: "🎨", inStock: true },
        { name: "Exclusive Badges", credits: 200, image: "🏆", inStock: true },
        { name: "Ad-Free Experience", credits: 600, image: "🚫", inStock: true }
      ]
    },
    {
      category: "Donations",
      icon: Heart,
      items: [
        { name: "Plant 10 Trees", credits: 500, image: "🌳", inStock: true },
        { name: "Support Wildlife", credits: 750, image: "🦋", inStock: true },
        { name: "Ocean Cleanup", credits: 600, image: "🌊", inStock: true },
        { name: "Reforestation Project", credits: 1200, image: "🌲", inStock: true }
      ]
    },
    {
      category: "Experiences",
      icon: TrendingUp,
      items: [
        { name: "Virtual Garden Tour", credits: 400, image: "🏞️", inStock: true },
        { name: "Expert Plant Consultation", credits: 800, image: "👨‍🌾", inStock: true },
        { name: "Community Event Access", credits: 300, image: "🎪", inStock: true },
        { name: "Masterclass Access", credits: 1000, image: "🎓", inStock: false }
      ]
    }
  ];

  const recentTransactions = [
    { action: "Planted 3 trees", credits: 300, type: "earned", time: "2 hours ago" },
    { action: "Bamboo Water Bottle", credits: -500, type: "spent", time: "1 day ago" },
    { action: "Completed Plant Care Course", credits: 100, type: "earned", time: "3 days ago" },
    { action: "Weekend Cleanup Bonus", credits: 150, type: "earned", time: "5 days ago" }
  ];

  const nextLevelCredits = 3000;
  const currentLevelProgress = (userCredits / nextLevelCredits) * 100;

  const handleRewardPurchase = (item: any) => {
    if (userCredits >= item.credits && item.inStock) {
      setUserCredits(userCredits - item.credits);
      setSelectedReward(item);
    }
  };

  return (
    <div className="space-y-8">
      {/* Credits Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 text-center bg-gradient-primary text-primary-foreground">
          <div className="space-y-2">
            <Wallet className="w-8 h-8 mx-auto" />
            <h3 className="text-3xl font-bold">{userCredits.toLocaleString()}</h3>
            <p className="opacity-90">Green Credits</p>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Level Progress</span>
              <Badge variant="secondary">Level 4</Badge>
            </div>
            <Progress value={currentLevelProgress} className="h-3" />
            <p className="text-sm text-muted-foreground">
              {nextLevelCredits - userCredits} credits to Level 5
            </p>
          </div>
        </Card>
        
        <Card className="p-6 text-center">
          <div className="space-y-2">
            <TrendingUp className="w-8 h-8 text-primary mx-auto" />
            <h3 className="text-2xl font-bold text-foreground">+425</h3>
            <p className="text-muted-foreground">Credits This Week</p>
          </div>
        </Card>
      </div>

      {/* Earning Credits */}
      <Card className="p-8">
        <h2 className="text-2xl font-bold text-foreground mb-6">Earn Green Credits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {creditEarningActions.map((action, index) => (
            <Card key={index} className="p-6 hover:shadow-elegant transition-shadow">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <action.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">{action.action}</h3>
                    <p className="text-2xl font-bold text-primary">+{action.credits} credits</p>
                  </div>
                </div>

                <p className="text-muted-foreground">{action.description}</p>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Frequency:</span>
                    <span className="font-medium">{action.frequency}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Bonus:</span>
                    <span className="font-medium text-primary">{action.multiplier}</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  Start Earning
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Rewards Store */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Rewards Store</h2>
        
        {rewardCategories.map((category, categoryIndex) => (
          <Card key={categoryIndex} className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <category.icon className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">{category.category}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.items.map((item, itemIndex) => (
                  <Card 
                    key={itemIndex} 
                    className={`p-4 text-center transition-all hover:shadow-card ${
                      !item.inStock ? 'opacity-50' : 'hover:scale-105'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="text-3xl">{item.image}</div>
                      <h4 className="font-medium text-foreground text-sm">{item.name}</h4>
                      <div className="flex items-center justify-center gap-1">
                        <Coins className="w-4 h-4 text-primary" />
                        <span className="font-bold text-primary">{item.credits}</span>
                      </div>
                      
                      {!item.inStock ? (
                        <Badge variant="secondary" className="w-full">
                          Out of Stock
                        </Badge>
                      ) : userCredits >= item.credits ? (
                        <Button 
                          variant="guardian" 
                          size="sm" 
                          className="w-full"
                          onClick={() => handleRewardPurchase(item)}
                        >
                          <ShoppingCart className="w-3 h-3" />
                          Redeem
                        </Button>
                      ) : (
                        <Button variant="outline" size="sm" className="w-full" disabled>
                          Need {item.credits - userCredits} more
                        </Button>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Transaction History */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {recentTransactions.map((transaction, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  transaction.type === 'earned' ? 'bg-success text-success-foreground' : 'bg-warning text-warning-foreground'
                }`}>
                  {transaction.type === 'earned' ? '+' : '-'}
                </div>
                <div>
                  <p className="font-medium text-foreground">{transaction.action}</p>
                  <p className="text-sm text-muted-foreground">{transaction.time}</p>
                </div>
              </div>
              <div className={`font-bold ${
                transaction.type === 'earned' ? 'text-success' : 'text-warning'
              }`}>
                {transaction.type === 'earned' ? '+' : ''}{transaction.credits} credits
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Success Modal */}
      {selectedReward && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <Card className="p-8 max-w-md mx-4 text-center">
            <div className="space-y-4">
              <div className="text-6xl">{selectedReward.image}</div>
              <h3 className="text-2xl font-bold text-foreground">Congratulations!</h3>
              <p className="text-muted-foreground">
                You've successfully redeemed <strong>{selectedReward.name}</strong> for {selectedReward.credits} credits!
              </p>
              <div className="flex items-center justify-center gap-1 text-primary">
                <Coins className="w-5 h-5" />
                <span className="font-bold">Remaining: {userCredits.toLocaleString()} credits</span>
              </div>
              <Button 
                variant="guardian" 
                onClick={() => setSelectedReward(null)}
                className="w-full"
              >
                Continue Earning
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default CreditsRewardsSystem;