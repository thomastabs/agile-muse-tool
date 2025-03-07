
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function TeamMembers() {
  // Mock data for team members
  const members = [
    {
      id: 'm1',
      name: 'Alex Johnson',
      role: 'Product Owner',
      imgUrl: '',
      initials: 'AJ',
      taskCount: 8,
      status: 'available'
    },
    {
      id: 'm2',
      name: 'Sarah Miller',
      role: 'Scrum Master',
      imgUrl: '',
      initials: 'SM',
      taskCount: 5,
      status: 'busy'
    },
    {
      id: 'm3',
      name: 'David Chen',
      role: 'Frontend Developer',
      imgUrl: '',
      initials: 'DC',
      taskCount: 7,
      status: 'available'
    },
    {
      id: 'm4',
      name: 'Emma Watson',
      role: 'Backend Developer',
      imgUrl: '',
      initials: 'EW',
      taskCount: 6,
      status: 'away'
    },
    {
      id: 'm5',
      name: 'Ryan Park',
      role: 'UI/UX Designer',
      imgUrl: '',
      initials: 'RP',
      taskCount: 4,
      status: 'available'
    }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'available': return 'bg-green-500';
      case 'busy': return 'bg-red-500';
      case 'away': return 'bg-amber-500';
      default: return 'bg-muted';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-semibold tracking-tight">Team Members</h2>
      
      <div className="grid gap-5">
        {members.map((member) => (
          <Card key={member.id} className="overflow-hidden transition-all duration-300 hover:shadow-md">
            <CardContent className="p-5">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={member.imgUrl} />
                    <AvatarFallback className="bg-primary/10 text-primary">{member.initials}</AvatarFallback>
                  </Avatar>
                  <span className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full ring-2 ring-white ${getStatusColor(member.status)}`} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{member.name}</p>
                  <p className="text-sm text-muted-foreground truncate">{member.role}</p>
                </div>
                
                <Badge variant="outline" className="ml-auto">
                  {member.taskCount} tasks
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
