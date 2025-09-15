import { useState } from "react";
import { Check, Shield, Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const AgentSelector = () => {
  const [selectedAgents, setSelectedAgents] = useState({
    security: true,
    performance: true,
    ux: true,
    architecture: false,
    documentation: false,
    testing: false,
  })

  const handleAgentToggle = (agent) => {
    setSelectedAgents((prev) => ({
      ...prev,
      [agent]: !prev[agent],
    }))
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label>Select AI Agents</Label>
        <Badge variant="outline" className="bg-background text-foreground">
          {Object.values(selectedAgents).filter(Boolean).length} Selected
        </Badge>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card className={`cursor-pointer border ${selectedAgents.security ? "border-primary" : ""}`}>
          <CardHeader className="p-4 pb-2">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                  <Shield className="h-4 w-4" />
                </div>
                <CardTitle className="text-base">Security Expert</CardTitle>
              </div>
              <Switch checked={selectedAgents.security} onCheckedChange={() => handleAgentToggle("security")} />
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <CardDescription>Identifies vulnerabilities and security risks in your code</CardDescription>
          </CardContent>
        </Card>

        <Card className={`cursor-pointer border ${selectedAgents.performance ? "border-primary" : ""}`}>
          <CardHeader className="p-4 pb-2">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-500">
                  <Zap className="h-4 w-4" />
                </div>
                <CardTitle className="text-base">Performance Optimizer</CardTitle>
              </div>
              <Switch checked={selectedAgents.performance} onCheckedChange={() => handleAgentToggle("performance")} />
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <CardDescription>Focuses on code efficiency and optimization opportunities</CardDescription>
          </CardContent>
        </Card>

        <Card className={`cursor-pointer border ${selectedAgents.ux ? "border-primary" : ""}`}>
          <CardHeader className="p-4 pb-2">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" x2="9.01" y1="9" y2="9" />
                    <line x1="15" x2="15.01" y1="9" y2="9" />
                  </svg>
                </div>
                <CardTitle className="text-base">UX Designer</CardTitle>
              </div>
              <Switch checked={selectedAgents.ux} onCheckedChange={() => handleAgentToggle("ux")} />
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <CardDescription>Evaluates user experience aspects of your frontend code</CardDescription>
          </CardContent>
        </Card>

        <Card className={`cursor-pointer border ${selectedAgents.architecture ? "border-primary" : ""}`}>
          <CardHeader className="p-4 pb-2">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                  </svg>
                </div>
                <CardTitle className="text-base">Architect</CardTitle>
              </div>
              <Switch checked={selectedAgents.architecture} onCheckedChange={() => handleAgentToggle("architecture")} />
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <CardDescription>Reviews code structure, patterns, and architectural decisions</CardDescription>
          </CardContent>
        </Card>

        <Card className={`cursor-pointer border ${selectedAgents.documentation ? "border-primary" : ""}`}>
          <CardHeader className="p-4 pb-2">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                  </svg>
                </div>
                <CardTitle className="text-base">Documentation Expert</CardTitle>
              </div>
              <Switch
                checked={selectedAgents.documentation}
                onCheckedChange={() => handleAgentToggle("documentation")}
              />
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <CardDescription>Evaluates code comments and suggests documentation improvements</CardDescription>
          </CardContent>
        </Card>

        <Card className={`cursor-pointer border ${selectedAgents.testing ? "border-primary" : ""}`}>
          <CardHeader className="p-4 pb-2">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-500">
                  <Check className="h-4 w-4" />
                </div>
                <CardTitle className="text-base">Testing Specialist</CardTitle>
              </div>
              <Switch checked={selectedAgents.testing} onCheckedChange={() => handleAgentToggle("testing")} />
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <CardDescription>Reviews test coverage and suggests testing strategies</CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AgentSelector;