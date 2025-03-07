
import { useState } from 'react';
import { Home, Kanban, Users, Clock, X, ChevronRight } from 'lucide-react';
import { cn } from "@/lib/utils";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [activeItem, setActiveItem] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'board', label: 'Task Board', icon: Kanban },
    { id: 'sprints', label: 'Sprints', icon: Clock },
    { id: 'team', label: 'Team', icon: Users },
  ];

  return (
    <>
      {/* Backdrop on mobile */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition-opacity duration-200 lg:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed left-0 top-0 z-50 h-full w-[280px] bg-white border-r border-border shadow-md transition-transform duration-300 ease-in-out lg:relative lg:shadow-none lg:z-0",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex h-16 items-center justify-between px-6 border-b">
          <div className="flex items-center space-x-2">
            <div className="h-6 w-6 rounded-md bg-primary"></div>
            <span className="font-semibold text-lg">Scrum Tool</span>
          </div>
          <button 
            className="rounded-full p-1 hover:bg-muted lg:hidden button-hover"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close sidebar</span>
          </button>
        </div>
        
        <nav className="space-y-1 p-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={cn(
                "flex w-full items-center space-x-3 rounded-md px-3 py-2 text-sm transition-colors button-hover",
                activeItem === item.id 
                  ? "bg-primary/10 text-primary font-medium" 
                  : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"
              )}
              onClick={() => setActiveItem(item.id)}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
              {activeItem === item.id && (
                <ChevronRight className="ml-auto h-4 w-4" />
              )}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}
