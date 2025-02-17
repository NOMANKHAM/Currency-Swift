import { DollarSign, Globe, Zap, Lock } from "lucide-react";
import { ReactNode } from "react";

export default function Features() {
  type Feature = {
    icon: ReactNode;
    title: string;
    description: string;
  };

  const features: Feature[] = [
    {
      icon: <DollarSign style={{ width: "3rem", height: "3rem", color: "#2563eb" }} />, // w-12 h-12 text-blue-600
      title: "Real-time Rates",
      description: "Get up-to-the-minute exchange rates for accurate conversions.",
    },
    {
      icon: <Globe style={{ width: "3rem", height: "3rem", color: "#2563eb" }} />, // w-12 h-12 text-blue-600
      title: "Multiple Currencies",
      description: "Support for over 150 global currencies.",
    },
    {
      icon: <Zap style={{ width: "3rem", height: "3rem", color: "#2563eb" }} />, // w-12 h-12 text-blue-600
      title: "Fast Conversion",
      description: "Lightning-fast currency conversion at your fingertips.",
    },
    {
      icon: <Lock style={{ width: "3rem", height: "3rem", color: "#2563eb" }} />, // w-12 h-12 text-blue-600
      title: "Secure API",
      description: "Access our secure API for integrating exchange rates into your applications.",
    },
  ];

  return (
    <section className="features" id="features">
      <h1>Our Features</h1>

        {features.map((feature, index) => (
          <div key={index} className={`card${index + 1} fcards`}>
            <span>
              {feature.icon}
              <h3>{feature.title}</h3>
              <p className="fp">{feature.description}</p>
            </span>
          </div>
        ))}
    </section>
  );
}
