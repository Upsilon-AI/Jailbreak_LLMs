import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Ban, FileText, Bot } from "lucide-react";

const defenseItems = [
  {
    icon: Shield,
    title: "Toxicity Filter",
    description: "Detects and flags hate speech, harassment, and other toxic language.",
  },
  {
    icon: Ban,
    title: "Unethical Request Blocker",
    description: "Identifies prompts that ask for instructions on illegal or unethical activities.",
  },
  {
    icon: FileText,
    title: "PII Shield",
    description: "Scans for and protects personally identifiable information in prompts.",
  },
  {
    icon: Bot,
    title: "Jailbreak Attempt Detection",
    description: "Recognizes attempts to bypass safety filters or manipulate the AI model.",
  },
];

export function DefenseLayers() {
  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold font-headline text-primary">Layered Defense System</CardTitle>
          <p className="text-muted-foreground">
            Our multi-layered approach to AI safety ensures comprehensive protection. This system is configurable via internal interfaces.
          </p>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {defenseItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 rounded-lg bg-background border transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
