import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, Upload, Scan, CheckCircle, AlertTriangle, Info } from "lucide-react";
import plantImage from "@/assets/hero-plant.jpg";

const PlantDoctor = () => {
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleScan = () => {
    setScanning(true);
    // Simulate AI processing
    setTimeout(() => {
      setResult({
        plant: "Monstera Deliciosa",
        health: "Healthy",
        confidence: 94,
        issues: [],
        care: {
          watering: "Water when top 2 inches of soil are dry",
          light: "Bright, indirect sunlight",
          humidity: "40-60% humidity preferred"
        }
      });
      setScanning(false);
    }, 2000);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">AI Plant Doctor</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Identify plants and diagnose health issues with our advanced AI system
        </p>
      </div>

      {/* Camera Interface */}
      <Card className="p-8 max-w-2xl mx-auto">
        <div className="space-y-6">
          {!result && !scanning && (
            <div className="text-center space-y-6">
              <div className="relative">
                <img
                  src={plantImage}
                  alt="Plant to scan"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-overlay rounded-lg" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Scan className="w-16 h-16 text-primary animate-pulse" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button variant="guardian" size="lg" onClick={handleScan}>
                  <Camera className="w-5 h-5" />
                  Take Photo
                </Button>
                <Button variant="outline" size="lg">
                  <Upload className="w-5 h-5" />
                  Upload Image
                </Button>
              </div>
            </div>
          )}

          {scanning && (
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-full flex items-center justify-center animate-pulse">
                <Scan className="w-10 h-10 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Analyzing Plant...</h3>
                <p className="text-muted-foreground">Our AI is examining your plant</p>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-primary h-2 rounded-full w-3/4 animate-pulse"></div>
              </div>
            </div>
          )}

          {result && (
            <div className="space-y-6">
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground">{result.plant}</h3>
                <p className="text-muted-foreground">Confidence: {result.confidence}%</p>
              </div>

              <div className="grid gap-4">
                <Card className="p-4 border-success">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <div>
                      <h4 className="font-semibold text-success">Plant Health: {result.health}</h4>
                      <p className="text-sm text-muted-foreground">No issues detected</p>
                    </div>
                  </div>
                </Card>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    Care Instructions
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                      <span className="text-primary">💧</span>
                      <div>
                        <p className="font-medium">Watering</p>
                        <p className="text-sm text-muted-foreground">{result.care.watering}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                      <span className="text-primary">☀️</span>
                      <div>
                        <p className="font-medium">Light</p>
                        <p className="text-sm text-muted-foreground">{result.care.light}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                      <span className="text-primary">💨</span>
                      <div>
                        <p className="font-medium">Humidity</p>
                        <p className="text-sm text-muted-foreground">{result.care.humidity}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Button 
                variant="outline" 
                className="w-full" 
                onClick={() => setResult(null)}
              >
                Scan Another Plant
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default PlantDoctor;