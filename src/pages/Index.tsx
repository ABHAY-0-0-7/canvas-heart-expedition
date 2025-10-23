import { Link } from "react-router-dom";
import heroImage from "@/assets/expedition-hero.jpg";

const Index = () => {
  const characters = [
    { name: "Gustave", path: "/Gustave" },
    { name: "Maelle", path: "/Maelle" },
    { name: "Lune", path: "/Lune" },
    { name: "Sciel", path: "/Sciel" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-ethereal)]" />
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-7xl md:text-9xl font-bold mb-8 text-foreground drop-shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Expedition 33
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-16 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
            Four artists. One mystical canvas. An adventure beyond imagination.
          </p>

          {/* Character Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            {characters.map((character) => (
              <Link
                key={character.name}
                to={character.path}
                className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary transition-all duration-500 hover:shadow-[var(--shadow-glow)] hover:scale-105"
              >
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {character.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
