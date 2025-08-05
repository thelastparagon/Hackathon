import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import PlantDoctor from "@/components/PlantDoctor";
import CommunityTracker from "@/components/CommunityTracker";
import EducationZone from "@/components/EducationZone";
import EnvironmentalMap from "@/components/EnvironmentalMap";
import { Camera, Users, BookOpen, Map, Leaf, Shield, Globe, Award, Coins } from "lucide-react";
import heroPlant from "@/assets/hero-plant.jpg";
import plantCollection from "@/assets/plant-collection.jpg";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const features = [
    {
      icon: Camera,
      title: "AI Plant Doctor",
      description: "Instantly identify plants and diagnose health issues with 95% accuracy",
      highlight: "95% Accuracy",
      credits: "+50 credits per scan"
    },
    {
      icon: Users,
      title: "Community Actions",
      description: "Track environmental impact and earn credits for verified conservation efforts",
      highlight: "Verified Impact",
      credits: "+100 credits per tree planted"
    },
    {
      icon: BookOpen,
      title: "Adaptive Learning",
      description: "Personalized educational content with interactive simulations and quizzes",
      highlight: "AI-Powered",
      credits: "+75 credits per course completed"
    },
    {
      icon: Map,
      title: "Environmental Mapping",
      description: "Real-time environmental data with interactive monitoring and action tracking",
      highlight: "Live Data",
      credits: "+25 credits per area monitored"
    }
  ];

  const stats = [
    { label: "Plants Identified", value: "50K+", icon: Leaf },
    { label: "Community Actions", value: "25K+", icon: Shield },
    { label: "Areas Monitored", value: "500+", icon: Globe },
    { label: "Eco Warriors", value: "10K+", icon: Award }
  ];

  const renderSection = () => {
    switch (activeSection) {
      case "plant-doctor":
        return <PlantDoctor />;
      case "community":
        return <CommunityTracker />;
      case "education":
        return <EducationZone />;
      case "mapping":
        return <EnvironmentalMap />;
      default:
        return (
          <div className="space-y-20">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-hero"></div>
              
              <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                        Green
                        <span className="block bg-gradient-primary bg-clip-text text-transparent">
                          Guardian
                        </span>
                      </h1>
                      <p className="text-xl md:text-2xl text-muted-foreground max-w-lg">
                        Reconnect with nature through AI-powered plant care, community action tracking, and gamified environmental learning.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        variant="guardian" 
                        size="xl"
                        onClick={() => setActiveSection("plant-doctor")}
                      >
                        <Camera className="w-5 h-5" />
                        Try AI Plant Doctor
                      </Button>
                      <Button 
                        variant="outline" 
                        size="xl"
                        onClick={() => setActiveSection("community")}
                      >
                        <Users className="w-5 h-5" />
                        Join Community
                      </Button>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-6 pt-8">
                      {stats.slice(0, 2).map((stat, index) => (
                        <div key={index} className="text-center">
                          <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                          <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative">
                    <div className="relative">
                      <img
                        src={heroPlant}
                        alt="Beautiful plant"
                        className="w-full h-auto rounded-2xl shadow-elegant"
                      />
                      <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-xl shadow-glow">
                        <div className="text-center">
                          <div className="text-2xl font-bold">98%</div>
                          <div className="text-sm">Plant Health</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="container mx-auto px-4">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-4xl font-bold text-foreground">Powerful Features</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Everything you need to become an environmental guardian and plant care expert
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="p-8 hover:shadow-elegant transition-shadow">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                          <feature.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                          <span className="text-sm text-primary font-medium">{feature.highlight}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                      <div className="flex items-center gap-2 text-sm">
                        <Coins className="w-4 h-4 text-warning" />
                        <span className="text-warning font-medium">{feature.credits}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Community Impact Section */}
            <section className="bg-muted py-20">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-foreground">
                      Join Our Growing Community
                    </h2>
                    <p className="text-xl text-muted-foreground">
                      Be part of a global movement of environmental guardians making real impact through verified actions and shared knowledge.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-6">
                      {stats.slice(2).map((stat, index) => (
                        <div key={index} className="text-center">
                          <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                          <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    <Button 
                      variant="guardian" 
                      size="lg"
                      onClick={() => setActiveSection("community")}
                    >
                      Start Your Impact Journey
                    </Button>
                  </div>

                  <div className="relative">
                    <img
                      src={plantCollection}
                      alt="Plant collection"
                      className="w-full h-auto rounded-2xl shadow-elegant"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="container mx-auto px-4 text-center">
              <Card className="p-12 bg-gradient-hero border-primary">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-foreground">
                    Ready to Become a Green Guardian?
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Start your journey with AI-powered plant identification and join thousands making a real environmental impact.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      variant="guardian" 
                      size="xl"
                      onClick={() => setActiveSection("plant-doctor")}
                    >
                      Start Identifying Plants
                    </Button>
                    <Button 
                      variant="outline" 
                      size="xl"
                      onClick={() => setActiveSection("education")}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </Card>
            </section>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="ml-0 md:ml-24 transition-all duration-300">
        <div className="p-4 md:p-8">
          {/* Navigation Bar for sections */}
          {activeSection !== "home" && (
            <div className="mb-8">
              <Button
                variant="ghost"
                onClick={() => setActiveSection("home")}
                className="text-muted-foreground hover:text-foreground"
              >
                ← Back to Home
              </Button>
            </div>
          )}
          
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default Index;
