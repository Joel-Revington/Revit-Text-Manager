
import { Check } from "lucide-react";

const Benefits = () => {
  const benefitsList = [
    {
      title: "For Architects",
      benefits: [
        "Maintain consistent drawing standards across projects",
        "Quickly update text to reflect design changes",
        "Reduce time spent on text-related QA/QC tasks"
      ]
    },
    {
      title: "For BIM Managers",
      benefits: [
        "Enforce company text standards across teams",
        "Easily audit text usage throughout the model",
        "Clean up legacy text types in existing projects"
      ]
    },
    {
      title: "For QA Teams",
      benefits: [
        "Find inconsistencies between drawings",
        "Highlight specific text for focused reviews",
        "Document text compliance with standards"
      ]
    }
  ];

  return (
    <section id="benefits" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits for Your Entire Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how Revit Text Manager helps different roles in your organization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefitsList.map((item, index) => (
            <div key={index} className="bg-background rounded-lg border p-6 h-full shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary">{item.title}</h3>
              <ul className="space-y-3">
                {item.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 mt-1 text-secondary">
                      <Check className="h-5 w-5" />
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
