import EnhancedEducationZone from "./EnhancedEducationZone";

const EducationZone = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Learning Center</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Master environmental knowledge with AI-powered adaptive learning experiences
        </p>
      </div>

      {/* Enhanced Education Component */}
      <EnhancedEducationZone />
    </div>
  );
};

export default EducationZone;