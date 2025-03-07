
import { Plus } from 'lucide-react';
import { TaskCard } from './TaskCard';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// Mock data for tasks
const columns = [
  {
    id: 'todo',
    title: 'To Do',
    count: 4,
    tasks: [
      {
        id: 't1',
        title: 'Update user authentication flow',
        description: 'Implement new security measures for the login process',
        priority: 'high',
        assignee: { name: 'Alex Johnson', initials: 'AJ' },
        comments: 3,
        attachments: 2
      },
      {
        id: 't2',
        title: 'Design system documentation',
        priority: 'medium',
        assignee: { name: 'Sarah Miller', initials: 'SM' },
        comments: 1
      },
      {
        id: 't3',
        title: 'API integration for payment gateway',
        priority: 'high',
        assignee: { name: 'David Chen', initials: 'DC' }
      },
      {
        id: 't4',
        title: 'Accessibility improvements',
        priority: 'medium',
        description: 'Update focus states and screen reader support',
        comments: 2
      }
    ]
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    count: 3,
    tasks: [
      {
        id: 't5',
        title: 'Implement dark mode support',
        priority: 'medium',
        assignee: { name: 'Ryan Park', initials: 'RP' },
        comments: 4,
        attachments: 1
      },
      {
        id: 't6',
        title: 'Performance optimization',
        description: 'Reduce bundle size and improve load times',
        priority: 'high',
        assignee: { name: 'Emma Watson', initials: 'EW' },
        comments: 2
      },
      {
        id: 't7',
        title: 'Refactor component library',
        priority: 'low',
        assignee: { name: 'Sarah Miller', initials: 'SM' }
      }
    ]
  },
  {
    id: 'review',
    title: 'Review',
    count: 2,
    tasks: [
      {
        id: 't8',
        title: 'Fix bugs in checkout process',
        description: 'Address issues with validation and payment flow',
        priority: 'high',
        assignee: { name: 'Alex Johnson', initials: 'AJ' },
        comments: 7
      },
      {
        id: 't9',
        title: 'Add unit tests for core modules',
        priority: 'medium',
        assignee: { name: 'David Chen', initials: 'DC' },
        attachments: 3
      }
    ]
  },
  {
    id: 'done',
    title: 'Done',
    count: 3,
    tasks: [
      {
        id: 't10',
        title: 'Update documentation',
        priority: 'low',
        assignee: { name: 'Emma Watson', initials: 'EW' },
        comments: 2,
        attachments: 1
      },
      {
        id: 't11',
        title: 'Set up CI/CD pipeline',
        description: 'Configure GitHub Actions for automatic deployment',
        priority: 'medium',
        assignee: { name: 'Ryan Park', initials: 'RP' }
      },
      {
        id: 't12',
        title: 'Refactor API client',
        priority: 'low',
        assignee: { name: 'Sarah Miller', initials: 'SM' },
        comments: 3
      }
    ]
  }
];

export function TaskBoard() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight">Task Board</h2>
        <Button className="button-hover">
          <Plus className="h-4 w-4 mr-2" />
          New Task
        </Button>
      </div>
      <Separator />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-[calc(100vh-280px)] overflow-hidden">
        {columns.map((column) => (
          <div key={column.id} className="flex flex-col bg-muted/30 rounded-lg p-4 h-full">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <h3 className="font-medium">{column.title}</h3>
                <div className="ml-2 bg-muted inline-flex items-center justify-center rounded-full w-5 h-5">
                  <span className="text-xs font-medium">{column.count}</span>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-7 w-7">
                <Plus className="h-4 w-4" />
                <span className="sr-only">Add task</span>
              </Button>
            </div>
            
            <div className="space-y-3 overflow-y-auto flex-1 pr-1">
              {column.tasks.map((task) => (
                <div key={task.id} className="animate-slide-in-up opacity-0" style={{ animationDelay: '0.05s', animationFillMode: 'forwards' }}>
                  <TaskCard task={task} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
