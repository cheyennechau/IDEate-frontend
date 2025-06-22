import { useState } from "react"
import {
  Check,
  Code,
  Download,
  ExternalLink,
  MessageSquare,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export function ReviewDetails({ reviewId }) {
  const [activeTab, setActiveTab] = useState("discussion")
  const [comment, setComment] = useState("")

  const reviewData = {
    "1": {
      title: "user-authentication",
      repo: "github.com/ideate/auth-service",
      status: "In Progress",
      progress: 75,
      description: "Authentication service with JWT implementation",
      agents: ["security", "performance", "ux"],
      issues: [
        {
          id: "SEC-001",
          title: "Insecure JWT secret storage",
          severity: "High",
          agent: "security",
          description:
            "JWT secret is hardcoded in the source code. This should be moved to environment variables.",
          file: "src/auth/jwt.ts",
          line: "42-45",
        },
        {
          id: "PERF-002",
          title: "Inefficient token validation",
          severity: "Medium",
          agent: "performance",
          description:
            "The token validation process performs redundant checks that could be optimized.",
          file: "src/middleware/auth.ts",
          line: "78-92",
        },
        {
          id: "UX-003",
          title: "Unclear error messages",
          severity: "Low",
          agent: "ux",
          description:
            "Authentication error messages are too technical for end users. Consider providing more user-friendly messages.",
          file: "src/controllers/auth.ts",
          line: "124-136",
        },
      ],
      discussion: [
        {
          id: "1",
          agent: "security",
          message:
            "I've identified a critical security issue with how JWT secrets are stored...",
          timestamp: "2h ago",
        },
        {
          id: "2",
          agent: "performance",
          message:
            "While reviewing the token validation logic, I noticed several redundant checks...",
          timestamp: "1h 45m ago",
        },
        {
          id: "3",
          agent: "security",
          message:
            "I agree with the performance concerns, but we need to be careful not to compromise security...",
          timestamp: "1h 30m ago",
        },
        {
          id: "4",
          agent: "ux",
          message:
            "The error messages returned to users during authentication failures are too technical...",
          timestamp: "1h ago",
        },
      ],
    },
    "2": {
      title: "payment-gateway",
      repo: "github.com/ideate/payment-service",
      status: "Completed",
      progress: 100,
      description: "Payment processing service integration",
      agents: ["security", "performance"],
      issues: [],
      discussion: [],
    },
    "3": {
      title: "data-visualization",
      repo: "github.com/ideate/dashboard",
      status: "Queued",
      progress: 0,
      description: "Dashboard data visualization components",
      agents: ["ux", "performance", "security"],
      issues: [],
      discussion: [],
    },
  }

  const review = reviewData[reviewId]

  if (!review) return <div>Review not found</div>

  const getAgentColor = (agent) => {
    switch (agent) {
      case "security":
        return "bg-blue-100 text-blue-500"
      case "performance":
        return "bg-purple-100 text-purple-500"
      case "ux":
        return "bg-green-100 text-green-500"
      default:
        return "bg-gray-100 text-gray-500"
    }
  }

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "High":
        return "bg-red-100 text-red-500 border-red-200"
      case "Medium":
        return "bg-orange-100 text-orange-500 border-orange-200"
      case "Low":
        return "bg-yellow-100 text-yellow-500 border-yellow-200"
      default:
        return "bg-gray-100 text-gray-500 border-gray-200"
    }
  }

  const getAgentInitial = (agent) => agent.charAt(0).toUpperCase()

  const handleCommentSubmit = (e) => {
    e.preventDefault()
    setComment("")
  }

  return (
    <Card className="h-full">
      {/* ...No changes to JSX content... */}
    </Card>
  )
}
