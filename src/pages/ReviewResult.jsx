import { useState, useEffect } from "react";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Card, CardFooter
// import {
//   Check,
//   Code,
//   Download,
//   ExternalLink,
//   MessageSquare,
//   ThumbsDown,
//   ThumbsUp,
// } from "lucide-react";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Progress } from "@/components/ui/progress";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Textarea } from "@/components/ui/textarea";

const formatReviewText = (text, type = "general") => {
  const lines = text.split(/\n\s*/).filter(item => item.trim() !== "");

  if (type === "summary") {
    return (
      <div className="space-y-4 text-muted-foreground">
        <div className="bg-blue-50 border border-blue-100 p-4 rounded">
          <h4 className="font-semibold mb-2">🔐 Security Review</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Covers a wide range of utility functions to ensure reliability and correctness.</li>
            <li>Uses <code className="bg-blue-100 text-blue-700 px-1 py-0.5 rounded text-sm font-mono">pytest</code> with parameterized tests for broad input coverage.</li>
            <li>Ensures quality and robustness across scenarios.</li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-100 p-4 rounded">
          <h4 className="font-semibold mb-2">🎨 UX Review</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Organized and readable with clear naming and structured tests.</li>
            <li>Follows <code className="bg-blue-100 text-blue-700 px-1 py-0.5 rounded text-sm font-mono">PEP8</code> and good documentation practices.</li>
            <li>Modular and maintainable design supports scalability.</li>
          </ul>
        </div>

        <div className="bg-purple-50 border border-purple-100 p-4 rounded">
          <h4 className="font-semibold mb-2">⚡ Performance Review</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Minimize unnecessary imports and test fixture usage.</li>
            <li>Optimize I/O operations and leverage caching effectively.</li>
            <li>Enable parallel test execution for speed improvements.</li>
          </ul>
        </div>
      </div>
    );
  }

  const introLines = [];
  const suggestionItems = [];
  let isInSuggestions = false;
  let isPastSuggestions = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const isSuggestionLine = /^\d+\.\s+(\*\*.+\*\*:)/.test(line);

    if (isSuggestionLine) {
      isInSuggestions = true;
    } else if (isInSuggestions && !isSuggestionLine) {
      isPastSuggestions = true;
    }

    if (!isInSuggestions && !isPastSuggestions) {
      introLines.push(line);
    } else if (isInSuggestions && !isPastSuggestions) {
      suggestionItems.push(line);
    }
  }

  return (
    <div className="space-y-4">
      {introLines.length > 0 && (
        <div className="text-muted-foreground space-y-1">
          {introLines.map((line, i) => (
            <p key={`intro-${i}`}>{line}</p>
          ))}
        </div>
      )}
      {suggestionItems.length > 0 && (
        <ol className="list-decimal pl-5 space-y-2">
          {suggestionItems.map((item, index) => {
            const cleanItem = item.replace(/\*\*(.+?)\*\*/g, "$1");
            const cleaned = cleanItem.replace(/^\d+\.\s*/, "");
            const parts = cleaned.split(":");
            const titlePart = parts[0] ? `<code class=\"bg-blue-100 text-blue-700 px-1 py-0.5 rounded text-sm font-mono\">${parts[0].trim()}</code>` : "";
            const rest = parts[1] ? parts.slice(1).join(":") : "";
            const highlighted = rest.replace(/`([^`]+)`/g, '<code class="bg-blue-100 text-blue-700 px-1 py-0.5 rounded text-sm font-mono">$1</code>');
            return (
              <li key={index} className="mb-1 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: `${titlePart}: ${highlighted}` }} />
            );
          })}
        </ol>
      )}
    </div>
  );
};

const ReviewDetails = ({ reviewId }) => {
  const [activeTab, setActiveTab] = useState("discussion")
  const [comment, setComment] = useState("")
  const [review, setReview] = useState(null)

  useEffect(() => {
    const stored = localStorage.getItem("latestReview")
    if (stored) {
      setReview(JSON.parse(stored))
    }
  }, [])

  if (!review) return <div className="text-muted-foreground">No review data found.</div>

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
    <>
      <CardHeader>
        <CardTitle>Latest Code Review</CardTitle>
        <CardDescription>Generated by Claude</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold text-lg">🔐 Security Suggestions</h3>
          {formatReviewText(review.security)}
        </div>
        <div>
          <h3 className="font-semibold text-lg">🎨 UX Suggestions</h3>
          {formatReviewText(review.ux)}
        </div>
        <div>
          <h3 className="font-semibold text-lg">⚡ Performance Suggestions</h3>
          {formatReviewText(review.performance)}
        </div>
        <div className="bg-muted p-4 rounded">
          <h3 className="font-semibold">📌 Summary</h3>
          {formatReviewText(review.summary, "summary")}
        </div>
      </CardContent>
    </>
  );
};

export default ReviewDetails;