import { useState } from "react"
import { ArrowLeft, Code2, Github, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { AgentSelector } from "@/components/AgentSelector"

const Review = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(""); // Clear previous errors

    const repoUrl = document.getElementById("repo-url").value;
    const branch = document.getElementById("branch").value || "main";
    const filePath = document.getElementById("file-path").value;

    console.log("Submitting review:", { repoUrl, branch, filePath });

    try {
      const res = await fetch("http://localhost:8000/api/review", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          repo_url: repoUrl,
          file_path: filePath,
          branch: branch,
        }),
      });

      console.log("Response status:", res.status);
      
      if (!res.ok) {
        const errorText = await res.text();
        console.error("API error:", errorText);
        throw new Error(`API Error: ${res.status} - ${errorText}`);
      }
      
      const data = await res.json();
      console.log("Review data received:", data);

      // Save review in localStorage
      localStorage.setItem("latestReview", JSON.stringify(data));

      // Navigate to dashboard
      window.location.href = "/dashboard";
    } catch (err) {
      console.error("Review failed:", err);
      
      // Set user-friendly error message
      if (err.message.includes("Failed to fetch")) {
        setError("Cannot connect to server. Make sure the backend is running on port 8000.");
      } else if (err.message.includes("CORS")) {
        setError("CORS error. Check server configuration.");
      } else {
        setError(`Review failed: ${err.message}`);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center">
      <main className="flex-1 container py-12">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Start a New Code Review</h1>
            <p className="text-muted-foreground">Submit your code for review by specialized AI agents</p>
          </div>
          
          {/* Error Message Display */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}
          
          <Tabs defaultValue="github" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="github">GitHub Repository</TabsTrigger>
              <TabsTrigger value="upload">Upload Code</TabsTrigger>
            </TabsList>
            <TabsContent value="github" className="space-y-4 pt-4">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="repo-url">GitHub Repository URL</Label>
                  <div className="flex gap-2">
                    <Input
                      id="repo-url"
                      placeholder="https://github.com/username/repository"
                      className="flex-1"
                      required
                    />
                    <Button variant="outline" type="button" className="gap-1.5 bg-background text-foreground">
                      <Github className="h-4 w-4" />
                      Browse
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">Enter the full URL to your GitHub repository</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="branch">Branch</Label>
                  <Input id="branch" placeholder="main" defaultValue="main" />
                  <p className="text-sm text-muted-foreground">Specify which branch to review (defaults to main)</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="file-path">File to Review</Label>
                  <Input
                    id="file-path"
                    placeholder="e.g. src/main.py"
                    className="flex-1"
                    required
                  />
                  <p className="text-sm text-muted-foreground">Provide the exact path to the Python file you want reviewed</p>
                </div>

                <div className="space-y-2">
                  <Label>Review Scope</Label>
                  <RadioGroup defaultValue="full" className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="full" id="full" />
                      <Label htmlFor="full" className="font-normal">
                        Full Repository
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="changes" id="changes" />
                      <Label htmlFor="changes" className="font-normal">
                        Recent Changes
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="specific" id="specific" />
                      <Label htmlFor="specific" className="font-normal">
                        Specific Files
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <AgentSelector />

                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Any specific concerns or areas to focus on..."
                    className="min-h-[100px]"
                  />
                </div>

                <div className="flex justify-end">
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Start Review"}
                  </Button>
                </div>
              </form>
            </TabsContent>
            <TabsContent value="upload" className="space-y-4 pt-4">
              <form onSubmit={handleSubmit} className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center justify-center space-y-2 border-2 border-dashed rounded-lg p-12">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                        <Upload className="h-6 w-6" />
                      </div>
                      <div className="space-y-1 text-center">
                        <p className="text-sm font-medium">Drag & drop your files here</p>
                        <p className="text-xs text-muted-foreground">
                          Supports .js, .jsx, .ts, .tsx, .py, .java, .go, .rb, .php, and more
                        </p>
                      </div>
                      <Button variant="outline" size="sm" className="mt-2 bg-background text-foreground">
                        Browse Files
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <AgentSelector />

                <div className="space-y-2">
                  <Label htmlFor="notes-upload">Additional Notes</Label>
                  <Textarea
                    id="notes-upload"
                    placeholder="Any specific concerns or areas to focus on..."
                    className="min-h-[100px]"
                  />
                </div>

                <div className="flex justify-end">
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Start Review"}
                  </Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Review;