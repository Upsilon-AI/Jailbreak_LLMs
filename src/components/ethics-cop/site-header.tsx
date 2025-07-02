import { Shield } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="bg-card border-b sticky top-0 z-40">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold text-primary font-headline">
            Jailbreak LLM
          </h1>
        </div>
      </div>
    </header>
  );
}
