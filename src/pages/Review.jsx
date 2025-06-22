import React from "react"
import { Link } from "react-router-dom";

import { useState } from "react"
import { ArrowLeft, Code2, Github, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { AgentSelector } from "@/components/AgentSelector"

import Header from "@/components/Header"

export default function Review() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false)
      window.location.href = "/dashboard"
    }, 2000)
  }

  return (
    <div className="flex flex-col min-h-screen items-center">
      <main className="flex-1 container py-12">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Start a New Code Review</h1>
            <p className="text-muted-foreground">Submit your code for review by our specialized AI agents</p>
          </div>
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
  )
}
