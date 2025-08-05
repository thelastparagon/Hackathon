import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Layers, 
  Filter, 
  AlertTriangle, 
  CheckCircle, 
  Info, 
  TrendingUp,
  TreePine,
  Droplets,
  Wind,
  Sun,
  Thermometer
} from "lucide-react";

const InteractiveMap = () => {
  const [selectedLayer, setSelectedLayer] = useState("health");
  const [selectedMarker, setSelectedMarker] = useState<any>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const mapLayers = [
    { id: "health", name: "Plant Health", icon: CheckCircle, color: "text-success" },
    { id: "pollution", name: "Air Quality", icon: Wind, color: "text-warning" },
    { id: "temperature", name: "Temperature", icon: Thermometer, color: "text-destructive" },
    { id: "moisture", name: "Soil Moisture", icon: Droplets, color: "text-primary" },
    { id: "activity", name: "Community Activity", icon: TrendingUp, color: "text-accent" }
  ];

  const environmentalMarkers = [
    {
      id: 1,
      name: "Central Park",
      type: "park",
      x: 30,
      y: 25,
      health: 95,
      airQuality: 85,
      temperature: 22,
      moisture: 78,
      activity: 25,
      data: {
        treesPlanted: 150,
        co2Absorbed: "2.3 tons/year",
        biodiversityIndex: 0.89,
        lastMaintenance: "2 days ago"
      }
    },
    {
      id: 2,
      name: "Riverside Gardens",
      type: "garden",
      x: 60,
      y: 45,
      health: 78,
      airQuality: 72,
      temperature: 24,
      moisture: 65,
      activity: 12,
      data: {
        treesPlanted: 85,
        co2Absorbed: "1.8 tons/year",
        biodiversityIndex: 0.75,
        lastMaintenance: "1 week ago"
      }
    },
    {
      id: 3,
      name: "Downtown Square",
      type: "urban",
      x: 75,
      y: 65,
      health: 45,
      airQuality: 55,
      temperature: 28,
      moisture: 40,
      activity: 8,
      data: {
        treesPlanted: 32,
        co2Absorbed: "0.9 tons/year",
        biodiversityIndex: 0.45,
        lastMaintenance: "3 weeks ago"
      }
    },
    {
      id: 4,
      name: "Green Valley",
      type: "forest",
      x: 20,
      y: 70,
      health: 92,
      airQuality: 95,
      temperature: 20,
      moisture: 85,
      activity: 18,
      data: {
        treesPlanted: 320,
        co2Absorbed: "5.2 tons/year",
        biodiversityIndex: 0.95,
        lastMaintenance: "ongoing"
      }
    }
  ];

  const getMarkerColor = (health: number) => {
    if (health >= 80) return "bg-success";
    if (health >= 60) return "bg-primary";
    if (health >= 40) return "bg-warning";
    return "bg-destructive";
  };

  const getMarkerIcon = (type: string) => {
    switch (type) {
      case "park": return "🏞️";
      case "garden": return "🌺";
      case "forest": return "🌲";
      case "urban": return "🏢";
      default: return "📍";
    }
  };

  const getLayerValue = (marker: any, layer: string) => {
    switch (layer) {
      case "health": return marker.health;
      case "pollution": return 100 - marker.airQuality;
      case "temperature": return marker.temperature;
      case "moisture": return marker.moisture;
      case "activity": return marker.activity;
      default: return marker.health;
    }
  };

  return (
    <div className="space-y-6">
      {/* Map Controls */}
      <div className="flex flex-wrap gap-3 justify-center">
        {mapLayers.map((layer) => (
          <Button
            key={layer.id}
            variant={selectedLayer === layer.id ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedLayer(layer.id)}
            className="flex items-center gap-2"
          >
            <layer.icon className={`w-4 h-4 ${selectedLayer === layer.id ? '' : layer.color}`} />
            {layer.name}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Interactive Map */}
        <div className="lg:col-span-2">
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Live Environmental Map</h3>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" onClick={() => setZoomLevel(Math.min(3, zoomLevel + 0.5))}>
                    🔍+
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setZoomLevel(Math.max(0.5, zoomLevel - 0.5))}>
                    🔍-
                  </Button>
                </div>
              </div>

              {/* Map Canvas */}
              <div className="relative h-96 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 rounded-xl overflow-hidden border-2 border-border">
                {/* Grid Background */}
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                {/* Map Features - Rivers, Roads */}
                <svg className="absolute inset-0 w-full h-full">
                  {/* River */}
                  <path
                    d="M 0,200 Q 100,180 200,200 T 400,220"
                    stroke="hsl(var(--primary))"
                    strokeWidth="8"
                    fill="none"
                    opacity="0.6"
                  />
                  {/* Roads */}
                  <path
                    d="M 0,100 L 400,120"
                    stroke="hsl(var(--muted-foreground))"
                    strokeWidth="3"
                    opacity="0.4"
                  />
                  <path
                    d="M 150,0 L 180,400"
                    stroke="hsl(var(--muted-foreground))"
                    strokeWidth="3"
                    opacity="0.4"
                  />
                </svg>

                {/* Environmental Markers */}
                {environmentalMarkers.map((marker) => (
                  <div
                    key={marker.id}
                    className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 group"
                    style={{
                      left: `${marker.x}%`,
                      top: `${marker.y}%`,
                      transform: `scale(${zoomLevel})`
                    }}
                    onClick={() => setSelectedMarker(marker)}
                  >
                    {/* Marker */}
                    <div className={`w-8 h-8 rounded-full ${getMarkerColor(getLayerValue(marker, selectedLayer))} 
                      flex items-center justify-center shadow-lg transition-all hover:scale-125 group-hover:animate-pulse-glow`}>
                      <span className="text-sm">{getMarkerIcon(marker.type)}</span>
                    </div>

                    {/* Data Overlay */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-background border 
                      border-border rounded-lg px-3 py-2 text-xs whitespace-nowrap shadow-elegant opacity-0 
                      group-hover:opacity-100 transition-opacity z-10">
                      <div className="font-medium">{marker.name}</div>
                      <div className="text-muted-foreground">
                        {selectedLayer}: {getLayerValue(marker, selectedLayer)}
                        {selectedLayer === "temperature" ? "°C" : "%"}
                      </div>
                    </div>

                    {/* Pulse Animation for High Activity */}
                    {marker.activity > 15 && (
                      <div className="absolute inset-0 rounded-full bg-primary opacity-20 animate-ping"></div>
                    )}
                  </div>
                ))}

                {/* Heat Map Overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  {environmentalMarkers.map((marker) => (
                    <div
                      key={`heat-${marker.id}`}
                      className="absolute rounded-full pointer-events-none"
                      style={{
                        left: `${marker.x - 10}%`,
                        top: `${marker.y - 10}%`,
                        width: '20%',
                        height: '20%',
                        background: `radial-gradient(circle, ${
                          getLayerValue(marker, selectedLayer) > 70 
                            ? 'hsl(var(--success) / 0.1)' 
                            : getLayerValue(marker, selectedLayer) > 40
                              ? 'hsl(var(--warning) / 0.1)'
                              : 'hsl(var(--destructive) / 0.1)'
                        } 0%, transparent 70%)`
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Map Legend */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-success rounded-full"></div>
                    <span>Excellent (80%+)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span>Good (60-79%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-warning rounded-full"></div>
                    <span>Fair (40-59%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-destructive rounded-full"></div>
                    <span>Poor (0-39%)</span>
                  </div>
                </div>
                <div className="text-muted-foreground">
                  Zoom: {zoomLevel}x
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Details Panel */}
        <div className="space-y-6">
          {selectedMarker ? (
            <Card className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <span className="text-2xl">{getMarkerIcon(selectedMarker.type)}</span>
                    {selectedMarker.name}
                  </h3>
                  <Badge variant="secondary" className="mt-1">
                    {selectedMarker.type.charAt(0).toUpperCase() + selectedMarker.type.slice(1)}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-muted-foreground">Health</span>
                    <div className="font-semibold text-success">{selectedMarker.health}%</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Air Quality</span>
                    <div className="font-semibold">{selectedMarker.airQuality}%</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Temperature</span>
                    <div className="font-semibold">{selectedMarker.temperature}°C</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Moisture</span>
                    <div className="font-semibold text-primary">{selectedMarker.moisture}%</div>
                  </div>
                </div>

                <div className="space-y-3 pt-2 border-t">
                  <h4 className="font-medium">Environmental Impact</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Trees Planted</span>
                      <span className="font-semibold text-success">{selectedMarker.data.treesPlanted}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>CO₂ Absorbed</span>
                      <span className="font-semibold">{selectedMarker.data.co2Absorbed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Biodiversity</span>
                      <span className="font-semibold text-primary">{selectedMarker.data.biodiversityIndex}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Last Maintenance</span>
                      <span className="text-muted-foreground">{selectedMarker.data.lastMaintenance}</span>
                    </div>
                  </div>
                </div>

                <Button variant="guardian" className="w-full">
                  <TreePine className="w-4 h-4" />
                  Plant Trees Here
                </Button>
              </div>
            </Card>
          ) : (
            <Card className="p-6">
              <div className="text-center space-y-3">
                <MapPin className="w-12 h-12 text-muted-foreground mx-auto" />
                <p className="text-muted-foreground">
                  Click on a map marker to view detailed environmental data and take action
                </p>
              </div>
            </Card>
          )}

          {/* Real-time Stats */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Live Statistics</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Active Monitors</span>
                <span className="font-semibold text-primary">{environmentalMarkers.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Average Health</span>
                <span className="font-semibold text-success">
                  {Math.round(environmentalMarkers.reduce((acc, m) => acc + m.health, 0) / environmentalMarkers.length)}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Total Trees</span>
                <span className="font-semibold text-success">
                  {environmentalMarkers.reduce((acc, m) => acc + m.data.treesPlanted, 0)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Community Actions</span>
                <span className="font-semibold text-primary">
                  {environmentalMarkers.reduce((acc, m) => acc + m.activity, 0)}
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;