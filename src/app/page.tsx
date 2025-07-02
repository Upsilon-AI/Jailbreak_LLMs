"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/ethics-cop/site-header";
import { PromptForm } from "@/components/ethics-cop/prompt-form";
import { ResultsDisplay, type Results } from "@/components/ethics-cop/results-display";
import { DefenseLayers } from "@/components/ethics-cop/defense-layers";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const [results, setResults] = useState<Results | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1 container mx-auto p-4 md:p-8">
        <div className="grid gap-12">
          <section className="grid md:grid-cols-2 gap-8 items-start">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold font-headline text-primary">Jailbreak LLM</h1>
              <p className="text-muted-foreground">
                Enter a prompt and select a model to test its response. The system will analyze for harmful content and generate a response.
              </p>
              <PromptForm setResults={setResults} setIsLoading={setIsLoading} isLoading={isLoading} />
            </div>
            <ResultsDisplay results={results} isLoading={isLoading} />
          </section>
          <Separator />
          <DefenseLayers />
        </div>
      </main>
      <footer className="text-center p-4 text-sm text-muted-foreground">
        Jailbreak LLM &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
}
