import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import heartOfCanvas from "@/assets/heart-of-canvas.jpg";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heartOfCanvas})`,
        }}
      />
      
      {/* Magical Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/80" />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: i % 3 === 0 ? 'hsl(270 60% 55%)' : i % 3 === 1 ? 'hsl(180 55% 50%)' : 'hsl(45 90% 60%)',
              opacity: Math.random() * 0.7 + 0.3,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <Button
          onClick={() => navigate("/")}
          variant="ghost"
          className="absolute top-8 left-8 text-foreground hover:text-primary transition-colors duration-300"
        >
          <ArrowLeft className="w-6 h-6 mr-2" />
          Return Home
        </Button>

        <div className="max-w-4xl mx-auto text-center space-y-12 animate-in fade-in zoom-in duration-1500">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold text-primary drop-shadow-[0_0_80px_rgba(168,85,247,0.9)] animate-pulse">
              Prima Materia
            </h1>
            
            <div className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>

          <div className="backdrop-blur-md bg-background/60 border border-primary/30 rounded-2xl p-8 md:p-12 shadow-[var(--shadow-elegant)]">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed">
              The raw, unformed pigment from which the Canvas was first created.
            </p>
            <p className="text-xl md:text-2xl text-foreground leading-relaxed mt-6">
              If the <span className="text-secondary font-bold">Heart</span> is the engine,
              the <span className="text-accent font-bold">Prima Materia</span> is the primordial fuel or clay.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-8 italic">
              "From formless matter springs all creation, guided by the pulse of the Heart..."
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <div className="px-6 py-3 rounded-full border border-primary/50 bg-primary/10 text-primary font-medium">
              ✨ Discovery Complete
            </div>
            <div className="px-6 py-3 rounded-full border border-secondary/50 bg-secondary/10 text-secondary font-medium">
              🎨 Expedition 33
            </div>
            <div className="px-6 py-3 rounded-full border border-accent/50 bg-accent/10 text-accent-foreground font-medium">
              💫 The Canvas Awaits
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
