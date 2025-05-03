
import { FileText, Search, Highlighter, Trash2 } from "lucide-react";

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="flex flex-col items-start p-6 bg-background rounded-lg border shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Centralized Text Viewer",
      description: "Browse and organize all text types in your Revit model from a single intuitive interface."
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Global Find & Replace",
      description: "Quickly locate and update text across your entire project with confidence and precision."
    },
    {
      icon: <Highlighter className="w-6 h-6" />,
      title: "Text Highlighting",
      description: "Instantly visualize where specific text appears in your drawings for faster quality control."
    },
    {
      icon: <Trash2 className="w-6 h-6" />,
      title: "Text Type Purging",
      description: "Clean up your models by removing unused text types, reducing file size and improving performance."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for BIM Professionals</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our plugin streamlines text management workflows in Revit, saving you time and reducing errors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Feature 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
