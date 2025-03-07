
import { CalendarIcon } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function SprintOverview() {
  // Mock data for sprints
  const sprints = [
    {
      id: 's1',
      name: 'Sprint 24',
      startDate: 'May 1, 2023',
      endDate: 'May 14, 2023',
      progress: 100,
      totalTasks: 32,
      completedTasks: 32,
      status: 'completed'
    },
    {
      id: 's2',
      name: 'Sprint 25',
      startDate: 'May 15, 2023',
      endDate: 'May 28, 2023',
      progress: 67,
      totalTasks: 24,
      completedTasks: 16,
      status: 'active'
    },
    {
      id: 's3',
      name: 'Sprint 26',
      startDate: 'May 29, 2023',
      endDate: 'Jun 11, 2023',
      progress: 0,
      totalTasks: 0,
      completedTasks: 0,
      status: 'planned'
    }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'completed': return 'text-green-500';
      case 'active': return 'text-blue-500';
      case 'planned': return 'text-muted-foreground';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-semibold tracking-tight">Sprints</h2>
      
      <div className="grid gap-5">
        {sprints.map((sprint) => (
          <Card 
            key={sprint.id} 
            className={`overflow-hidden transition-all duration-300 ${
              sprint.status === 'active' ? 'border-primary/20 shadow-md' : ''
            } hover:shadow-md`}
          >
            <CardHeader className="p-5 pb-0">
              <div className="flex items-center justify-between">
                <CardTitle>
                  <span className="text-lg">{sprint.name}</span>
                  <span className={`ml-2 text-sm font-normal ${getStatusColor(sprint.status)}`}>
                    {sprint.status.charAt(0).toUpperCase() + sprint.status.slice(1)}
                  </span>
                </CardTitle>
              </div>
            </CardHeader>
            
            <CardContent className="p-5 space-y-3">
              <div className="flex items-center text-sm text-muted-foreground">
                <CalendarIcon className="h-4 w-4 mr-2" />
                <span>{sprint.startDate} - {sprint.endDate}</span>
              </div>
              
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-sm">
                  <span>Progress</span>
                  <span className="font-medium">{sprint.progress}%</span>
                </div>
                <Progress value={sprint.progress} className="h-2" />
              </div>
            </CardContent>
            
            <CardFooter className="p-5 pt-0 text-sm text-muted-foreground">
              {sprint.completedTasks} of {sprint.totalTasks} tasks completed
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
