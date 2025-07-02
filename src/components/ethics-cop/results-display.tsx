"use client";

import { AlertTriangle, Bot, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { HarmfulPromptDetectionOutput } from "@/ai/flows/harmful-prompt-detection";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type Results = {
  harmDetection: HarmfulPromptDetectionOutput;
  modelResponse: string;
};

type ResultsDisplayProps = {
  results: Results | null;
  isLoading: boolean;
};

export function ResultsDisplay({ results, isLoading }: ResultsDisplayProps) {
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Analysis Results</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Skeleton className="h-6 w-1/4" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-3/4" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-1/2" />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!results) {
    return (
      <Card className="flex items-center justify-center h-full border-dashed">
        <CardContent className="text-center text-muted-foreground p-8">
          <Bot className="mx-auto h-12 w-12 mb-4" />
          <p>Your analysis results will appear here.</p>
        </CardContent>
      </Card>
    );
  }

  const { harmDetection, modelResponse } = results;

  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>Analysis Results</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
            {harmDetection.isHarmful ? (
              <AlertTriangle className="h-5 w-5 text-destructive" />
            ) : (
              <ShieldCheck className="h-5 w-5 text-success" />
            )}
            Harm Detection
          </h3>
          <div
            className={cn(
              "p-4 rounded-lg border",
              harmDetection.isHarmful ? "bg-destructive/10 border-destructive/20" : "bg-success/10 border-success/20"
            )}
          >
            <div className="flex items-center gap-2 mb-2">
              <Badge variant={harmDetection.isHarmful ? "destructive" : "secondary"} className={cn(!harmDetection.isHarmful && 'bg-success text-success-foreground')}>
                {harmDetection.isHarmful ? "Harmful" : "Safe"}
              </Badge>
              <p className={cn("font-medium", harmDetection.isHarmful ? 'text-destructive' : 'text-success')}>
                Prompt classified as {harmDetection.isHarmful ? "potentially harmful" : "safe"}.
              </p>
            </div>
            <p className="text-sm text-muted-foreground">{harmDetection.reason}</p>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
            <Bot className="h-5 w-5 text-primary" />
            Model Response
          </h3>
          <div className="p-4 rounded-lg bg-background border whitespace-pre-wrap font-mono text-sm leading-relaxed">
            {modelResponse}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
