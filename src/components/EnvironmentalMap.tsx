import InteractiveMap from "./InteractiveMap";

const EnvironmentalMap = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Environmental Mapping</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Real-time environmental data and community insights powered by AI monitoring
        </p>
      </div>

      {/* Interactive Map Component */}
      <InteractiveMap />
    </div>
  );
};

export default EnvironmentalMap;