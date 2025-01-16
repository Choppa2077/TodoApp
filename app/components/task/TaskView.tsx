import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const TaskView = () => {
  return (
    <Card
      className="w-[550px] rounded-2xl border-none"
      style={{ backgroundColor: 'rgb(22, 22, 22)' }}
    >
      <CardHeader>
        <CardTitle className="text-white">Tasks</CardTitle>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
};

export default TaskView;
