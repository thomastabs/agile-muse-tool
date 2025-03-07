
import { useState } from 'react';
import { MoreHorizontal, MessageSquare, Paperclip } from 'lucide-react';
import { 
  Card, 
  CardContent,
  CardFooter
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

type Priority = 'low' | 'medium' | 'high';

type TaskProps = {
  id: string;
  title: string;
  description?: string;
  priority: Priority;
  assignee?: {
    name: string;
    initials: string;
  };
  comments?: number;
  attachments?: number;
};

export function TaskCard({ task }: { task: TaskProps }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const getPriorityColor = (priority: Priority) => {
    switch(priority) {
      case 'high': return 'bg-red-100 text-red-600 hover:bg-red-200';
      case 'medium': return 'bg-amber-100 text-amber-600 hover:bg-amber-200';
      case 'low': return 'bg-green-100 text-green-600 hover:bg-green-200';
      default: return 'bg-muted';
    }
  };

  return (
    <Card 
      className="group cursor-pointer transition-all duration-300 ease-in-out hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-4 pb-2">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <Badge className={`text-xs font-normal ${getPriorityColor(task.priority)}`}>
              {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
            </Badge>
            <h3 className="font-medium leading-tight mt-1.5 text-base">{task.title}</h3>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity p-1 -mr-1 rounded-md hover:bg-muted">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Task actions</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-36 animate-fade-in">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Move</DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        {task.description && (
          <p className="text-sm text-muted-foreground mt-3 line-clamp-2">
            {task.description}
          </p>
        )}
      </CardContent>
      
      <CardFooter className="p-4 pt-2 flex items-center justify-between text-muted-foreground">
        <div className="flex items-center space-x-3 text-xs">
          {task.comments != null && (
            <div className="flex items-center">
              <MessageSquare className="h-3.5 w-3.5 mr-1" />
              <span>{task.comments}</span>
            </div>
          )}
          
          {task.attachments != null && (
            <div className="flex items-center">
              <Paperclip className="h-3.5 w-3.5 mr-1" />
              <span>{task.attachments}</span>
            </div>
          )}
        </div>
        
        {task.assignee && (
          <Avatar className="h-6 w-6">
            <AvatarFallback className="text-xs bg-primary/10 text-primary">
              {task.assignee.initials}
            </AvatarFallback>
          </Avatar>
        )}
      </CardFooter>
    </Card>
  );
}
