import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Lock } from "lucide-react";

const TheHeartOfTheCanvas = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [attempts, setAttempts] = useState(0);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Intentionally vulnerable to brute-force for CTF purposes
    if (username === "admin" && password === "PrimaMateria") {
      toast({
        title: "Access Granted",
        description: "Welcome to the Heart of the Canvas...",
      });
      setTimeout(() => {
        navigate("/success");
      }, 1000);
    } else {
      setAttempts(prev => prev + 1);
      toast({
        title: "Access Denied",
        description: `Invalid credentials. Attempt ${attempts + 1}`,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-ethereal)]" />
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/20 animate-pulse"
            style={{
              width: `${Math.random() * 4}px`,
              height: `${Math.random() * 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <Card className="w-full max-w-md relative z-10 border-primary/50 shadow-[var(--shadow-elegant)]">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
            <Lock className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold">The Heart of the Canvas</CardTitle>
          <CardDescription className="text-base">
            Only those who understand the prima materia may enter
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border-primary/30 focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-primary/30 focus:border-primary"
              />
            </div>
            
            <div className="text-sm text-muted-foreground italic border-l-2 border-accent pl-4 py-2 bg-accent/10">
              Hint: The username is "admin"
            </div>

            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--shadow-glow)]"
            >
              Access the Heart
            </Button>
          </form>

          {attempts > 0 && (
            <div className="mt-4 text-center text-sm text-muted-foreground">
              Failed attempts: {attempts}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TheHeartOfTheCanvas;
