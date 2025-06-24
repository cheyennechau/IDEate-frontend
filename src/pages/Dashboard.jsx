import { useState } from "react";
import { Filter, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReviewDetails } from "@/components/ReviewDetails";

const Dashboard = () => {
  const [selectedReview, setSelectedReview] = useState("1")

  return (
    <div className="flex flex-col min-h-screen items-center">
      {/* <Header /> */}
      <main className="flex-1 container py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Code Review Dashboard</h1>
            <p className="text-muted-foreground">Manage and track your code reviews</p>
          </div>
          <Link to="/review" >
            <Button className="gap-1.5 hover:underline underline-offset-4 cursor-pointer">
              <Plus className="h-4 w-4" />
              New Review
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Recent Reviews</h2>
              <Button variant="outline" size="sm" className="gap-1.5 bg-background text-foreground">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-4 pt-4">
                <Card
                  className={`cursor-pointer ${selectedReview === "1" ? "border-primary" : ""}`}
                  onClick={() => setSelectedReview("1")}
                >
                  <CardHeader className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <CardTitle className="text-base">user-authentication</CardTitle>
                        <CardDescription>github.com/ideate/auth-service</CardDescription>
                      </div>
                      <Badge>In Progress</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between">
                    <div className="flex -space-x-2">
                      <Avatar className="border-2 border-background h-7 w-7">
                        <AvatarFallback className="text-xs bg-blue-100 text-blue-500">S</AvatarFallback>
                      </Avatar>
                      <Avatar className="border-2 border-background h-7 w-7">
                        <AvatarFallback className="text-xs bg-purple-100 text-purple-500">P</AvatarFallback>
                      </Avatar>
                      <Avatar className="border-2 border-background h-7 w-7">
                        <AvatarFallback className="text-xs bg-green-100 text-green-500">U</AvatarFallback>
                      </Avatar>
                    </div>
                    <span className="text-xs text-muted-foreground">Updated 2h ago</span>
                  </CardFooter>
                </Card>

                <Card
                  className={`cursor-pointer ${selectedReview === "2" ? "border-primary" : ""}`}
                  onClick={() => setSelectedReview("2")}
                >
                  <CardHeader className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <CardTitle className="text-base">payment-gateway</CardTitle>
                        <CardDescription>github.com/ideate/payment-service</CardDescription>
                      </div>
                      <Badge variant="outline" className="bg-background text-foreground">
                        Completed
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>100%</span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between">
                    <div className="flex -space-x-2">
                      <Avatar className="border-2 border-background h-7 w-7">
                        <AvatarFallback className="text-xs bg-blue-100 text-blue-500">S</AvatarFallback>
                      </Avatar>
                      <Avatar className="border-2 border-background h-7 w-7">
                        <AvatarFallback className="text-xs bg-purple-100 text-purple-500">P</AvatarFallback>
                      </Avatar>
                    </div>
                    <span className="text-xs text-muted-foreground">Updated 2d ago</span>
                  </CardFooter>
                </Card>

                <Card
                  className={`cursor-pointer ${selectedReview === "3" ? "border-primary" : ""}`}
                  onClick={() => setSelectedReview("3")}
                >
                  <CardHeader className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <CardTitle className="text-base">data-visualization</CardTitle>
                        <CardDescription>github.com/ideate/dashboard</CardDescription>
                      </div>
                      <Badge variant="secondary">Queued</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>0%</span>
                      </div>
                      <Progress value={0} className="h-2" />
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between">
                    <div className="flex -space-x-2">
                      <Avatar className="border-2 border-background h-7 w-7">
                        <AvatarFallback className="text-xs bg-green-100 text-green-500">U</AvatarFallback>
                      </Avatar>
                      <Avatar className="border-2 border-background h-7 w-7">
                        <AvatarFallback className="text-xs bg-purple-100 text-purple-500">P</AvatarFallback>
                      </Avatar>
                      <Avatar className="border-2 border-background h-7 w-7">
                        <AvatarFallback className="text-xs bg-blue-100 text-blue-500">S</AvatarFallback>
                      </Avatar>
                    </div>
                    <span className="text-xs text-muted-foreground">Added 5h ago</span>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="active" className="pt-4">
                {/* Active reviews would go here */}
                <div className="text-center py-8 text-muted-foreground">Showing active reviews</div>
              </TabsContent>
              <TabsContent value="completed" className="pt-4">
                {/* Completed reviews would go here */}
                <div className="text-center py-8 text-muted-foreground">Showing completed reviews</div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="lg:col-span-2">{selectedReview && <ReviewDetails reviewId={selectedReview} />}</div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;