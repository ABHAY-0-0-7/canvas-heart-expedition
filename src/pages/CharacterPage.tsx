import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface CharacterPageProps {
  name: string;
  imagePath: string;
}

const CharacterPage = ({ name, imagePath }: CharacterPageProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${imagePath})`,
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <button
          onClick={() => navigate("/")}
          className="absolute top-8 left-8 text-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2"
        >
          <ArrowLeft className="w-6 h-6" />
          Back
        </button>

        <div className="text-center space-y-8 animate-in fade-in zoom-in duration-1000">
          <h1 className="text-6xl md:text-8xl font-bold text-foreground drop-shadow-2xl">
            {name}
          </h1>
          
          <div className="relative">
            <p className="text-7xl md:text-9xl font-black text-primary drop-shadow-[0_0_50px_rgba(168,85,247,0.8)] tracking-wider animate-pulse">
              TRY HARDER!
            </p>
            <div className="absolute inset-0 blur-3xl opacity-50 bg-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
