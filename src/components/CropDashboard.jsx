import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { 
  Sprout, 
  TrendingUp, 
  CloudRain, 
  MessageCircle, 
  Bell,
  Wallet,
  BarChart3,
  Camera,
  Calendar
} from "lucide-react";
import heroImage from "@/assets/hero-farming.jpg";

const CropDashboard = () => {
  const cropData = [
    { name: "Rice", yield: "4.2T/ha", profit: "₹45,000", status: "Excellent" },
    { name: "Wheat", yield: "3.8T/ha", profit: "₹38,000", status: "Good" },
    { name: "Sugarcane", yield: "85T/ha", profit: "₹120,000", status: "Very Good" }
  ];

  const schemes = [
    { title: "PM-KISAN Yojana", amount: "₹6,000", deadline: "15 days left" },
    { title: "Crop Insurance", amount: "₹50,000", deadline: "Available now" }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <img 
          src={heroImage} 
          alt="Agricultural landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-primary-foreground">
            <h1 className="text-5xl font-bold mb-6">
              Welcome to <span className="text-accent">CropGuru</span>
            </h1>
            <p className="text-xl mb-8 opacity-90">
              AI-powered farming solutions for 250+ million Indian farmers. 
              Optimize yields, predict earnings, and grow sustainably.
            </p>
            <div className="flex gap-4">
              <Button variant="accent" size="lg" className="gap-2">
                <Sprout className="h-5 w-5" />
                Start Prediction
              </Button>
              <Button variant="secondary" size="lg" className="gap-2">
                <MessageCircle className="h-5 w-5" />
                Ask AI Assistant
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <section className="container mx-auto px-4 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card border-0 bg-gradient-primary text-primary-foreground">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-primary-foreground/80 text-sm">Total Earnings</p>
                  <p className="text-2xl font-bold">₹2,03,000</p>
                </div>
                <Wallet className="h-8 w-8 opacity-80" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0 bg-gradient-harvest text-accent-foreground">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-accent-foreground/80 text-sm">Avg Yield</p>
                  <p className="text-2xl font-bold">4.1 T/ha</p>
                </div>
                <TrendingUp className="h-8 w-8 opacity-80" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0 bg-gradient-earth text-earth-foreground">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-earth-foreground/80 text-sm">Land Area</p>
                  <p className="text-2xl font-bold">12.5 acres</p>
                </div>
                <BarChart3 className="h-8 w-8 opacity-80" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Weather</p>
                  <p className="text-2xl font-bold text-foreground">28°C</p>
                </div>
                <CloudRain className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Crop Predictions */}
          <div className="lg:col-span-2">
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sprout className="h-5 w-5 text-primary" />
                  Crop Yield Predictions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cropData.map((crop, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                          <Sprout className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{crop.name}</h3>
                          <p className="text-sm text-muted-foreground">Yield: {crop.yield}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-accent">{crop.profit}</p>
                        <Badge variant="secondary" className="mt-1">
                          {crop.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-6">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  View Detailed Analysis
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Assistant */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  AI Assistant
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Ask me anything about farming, crops, weather, or schemes!
                </p>
                <Button variant="primary" className="w-full">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            {/* Government Schemes */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-accent" />
                  Available Schemes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {schemes.map((scheme, index) => (
                    <div key={index} className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                      <h4 className="font-semibold text-sm text-foreground">{scheme.title}</h4>
                      <p className="text-accent font-bold">{scheme.amount}</p>
                      <p className="text-xs text-muted-foreground">{scheme.deadline}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Tools */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle>Quick Tools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Camera className="h-4 w-4" />
                  Crop Disease Detection
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <CloudRain className="h-4 w-4" />
                  Weather Forecast
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Calendar className="h-4 w-4" />
                  Farming Calendar
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CropDashboard;