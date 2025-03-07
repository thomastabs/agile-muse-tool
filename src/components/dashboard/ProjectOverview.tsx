
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, ListChecks, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export function ProjectOverview() {
  const stats = [
    { 
      title: "Days Left", 
      value: "8", 
      subtext: "In current sprint", 
      icon: Clock, 
      color: "text-blue-500"
    },
    { 
      title: "Tasks", 
      value: "24", 
      subtext: "8 completed", 
      icon: ListChecks, 
      color: "text-indigo-500"
    },
    { 
      title: "Blockers", 
      value: "2", 
      subtext: "Need attention", 
      icon: AlertTriangle, 
      color: "text-amber-500"
    },
    { 
      title: "Completed", 
      value: "67%", 
      subtext: "Sprint progress", 
      icon: CheckCircle2, 
      color: "text-green-500"
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 animate-fade-in">
      {stats.map((stat, index) => (
        <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-md">
          <CardHeader className="p-4 pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground mt-1">{stat.subtext}</p>
            {stat.title === "Completed" && (
              <Progress value={67} className="h-1.5 mt-2" />
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
