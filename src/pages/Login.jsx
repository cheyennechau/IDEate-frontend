import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Eye, EyeOff, Github } from "lucide-react"

import { Button } from "../components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card"
import { Input } from "../components/ui/Input"
import { Label } from "../components/ui/Label"
import { Separator } from "../components/ui/Separator"

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login
    setTimeout(() => {
      setIsLoading(false)
      navigate("/review")
    }, 1500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="flex flex-col items-center space-y-2">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="IDEate Logo" className="h-10 w-auto" />
            <span className="text-2xl font-bold">IDEate</span>
          </div>
          <p className="text-muted-foreground text-center">Multi-Agent Code Review Enhancer</p>
        </div>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Welcome back</CardTitle>
            <CardDescription className="text-center">
              Sign in to your account to continue reviewing code with AI agents
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="bg-background text-foreground">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button variant="outline" className="bg-background text-foreground">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300" />
                  <Label htmlFor="remember" className="text-sm font-normal">
                    Remember me
                  </Label>
                </div>
                <Button variant="link" className="px-0 font-normal">
                  Forgot password?
                </Button>
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>
            </form>

            <div className="text-center text-sm">
              {"Don't have an account? "}
              <Button variant="link" className="px-0 font-normal" onClick={() => navigate("/")}>
                Sign up
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-xs text-blue-500">
          By signing in, you agree to our{" "}
          <Button variant="link" className="px-0 text-xs">
            Terms of Service
          </Button>{" "}
          and{" "}
          <Button variant="link" className="px-0 text-xs">
            Privacy Policy
          </Button>
        </div>
      </div>
    </div>
  )
}
