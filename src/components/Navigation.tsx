import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Camera, Users, BookOpen, Map, Home, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: Home, label: "Home", id: "home" },
    { icon: Camera, label: "Plant Doctor", id: "plant-doctor" },
    { icon: Users, label: "Community", id: "community" },
    { icon: BookOpen, label: "Learn", id: "education" },
    { icon: Map, label: "Map", id: "mapping" },
  ];

  return (
    <>
      {/* Mobile Navigation Toggle */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <Button
          variant="floating"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="shadow-elegant"
        >
          {isOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Navigation Sidebar */}
      <nav
        className={`fixed left-0 top-0 h-full w-20 md:w-24 bg-background border-r border-border z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex flex-col items-center py-8 space-y-8">
          {/* Logo */}
          <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
            <span className="text-2xl font-bold text-primary-foreground">🌱</span>
          </div>

          {/* Navigation Items */}
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="icon-lg"
                className="hover:bg-primary hover:text-primary-foreground group"
                title={item.label}
              >
                <item.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </Button>
            ))}
          </div>
        </div>
      </nav>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;