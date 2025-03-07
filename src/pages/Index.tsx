
import { Layout } from "@/components/layout/Layout";
import { ProjectOverview } from "@/components/dashboard/ProjectOverview";
import { TaskBoard } from "@/components/board/TaskBoard";
import { SprintOverview } from "@/components/sprints/SprintOverview";
import { TeamMembers } from "@/components/members/TeamMembers";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <Layout>
      <div className="space-y-8 py-4 animate-fade-in">
        <div className="flex flex-col space-y-1.5">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back to your project overview.</p>
        </div>
        
        <ProjectOverview />
        
        <Tabs defaultValue="board" className="space-y-4">
          <TabsList>
            <TabsTrigger value="board">Task Board</TabsTrigger>
            <TabsTrigger value="sprints">Sprints</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
          </TabsList>
          <TabsContent value="board" className="space-y-4 animate-fade-in">
            <TaskBoard />
          </TabsContent>
          <TabsContent value="sprints" className="space-y-4 animate-fade-in">
            <SprintOverview />
          </TabsContent>
          <TabsContent value="team" className="space-y-4 animate-fade-in">
            <TeamMembers />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Index;
