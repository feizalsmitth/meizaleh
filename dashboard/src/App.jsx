import React, { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

// Mock data for AI employees
const aiEmployees = [
  {
    id: 1,
    name: 'Vibe Assistant (VA)',
    role: 'AI Personal Assistant',
    team: 'Executive',
    status: 'Active',
    tasksCompleted: 42,
    avatar: '🤖',
  },
  {
    id: 2,
    name: 'AI Chief Strategist (ACS)',
    role: 'Strategic Decision-Making',
    team: 'Executive',
    status: 'Active',
    tasksCompleted: 28,
    avatar: '🧠',
  },
  {
    id: 3,
    name: 'AI Lead Developer (ALD)',
    role: 'AI Model Training',
    team: 'Development',
    status: 'Idle',
    tasksCompleted: 35,
    avatar: '💻',
  },
  {
    id: 4,
    name: 'AI Content Strategist (ACSt)',
    role: 'Content Planning',
    team: 'Content Creation',
    status: 'Active',
    tasksCompleted: 22,
    avatar: '📝',
  },
  {
    id: 5,
    name: 'AI Sales Director (ASD)',
    role: 'Sales & Client Acquisition',
    team: 'Sales & Marketing',
    status: 'Offline',
    tasksCompleted: 18,
    avatar: '💼',
  },
];

// Mock data for performance metrics
const performanceData = [
  { name: 'Mon', tasks: 12, completed: 8 },
  { name: 'Tue', tasks: 15, completed: 10 },
  { name: 'Wed', tasks: 10, completed: 6 },
  { name: 'Thu', tasks: 18, completed: 14 },
  { name: 'Fri', tasks: 20, completed: 16 },
];

// Mock data for team distribution
const teamDistributionData = [
  { name: 'Executive', value: 3 },
  { name: 'Development', value: 5 },
  { name: 'Content Creation', value: 4 },
  { name: 'Operations', value: 3 },
  { name: 'Sales & Marketing', value: 3 },
];

// Mock data for financial overview
const financialData = [
  { name: 'Jan', revenue: 4000, expenses: 2400 },
  { name: 'Feb', revenue: 3000, expenses: 1398 },
  { name: 'Mar', revenue: 2000, expenses: 980 },
  { name: 'Apr', revenue: 2780, expenses: 3908 },
  { name: 'May', revenue: 1890, expenses: 4800 },
  { name: 'Jun', revenue: 2390, expenses: 3800 },
];

// Mock data for recent tasks
const recentTasks = [
  {
    id: 1,
    task: 'Develop AI Model for Client X',
    assignedTo: 'AI Lead Developer (ALD)',
    status: 'In Progress',
    deadline: '2026-09-10',
  },
  {
    id: 2,
    task: 'Create Social Media Content for Q3',
    assignedTo: 'AI Content Strategist (ACSt)',
    status: 'Completed',
    deadline: '2026-09-05',
  },
  {
    id: 3,
    task: 'Analyze Market Trends for Q4',
    assignedTo: 'AI Chief Strategist (ACS)',
    status: 'Pending',
    deadline: '2026-09-15',
  },
];

// Main Dashboard Component
const AIDashboard = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [taskInput, setTaskInput] = useState('');
  const [assignedTo, setAssignedTo] = useState('');

  // Handle assigning a new task
  const handleAssignTask = () => {
    if (!taskInput || !assignedTo) {
      alert('Please fill in all fields!');
      return;
    }
    // Logic to assign task (mock)
    console.log(`Task "${taskInput}" assigned to ${assignedTo}`);
    setTaskInput('');
    setAssignedTo('');
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Vibe AI Solutions</h1>
          <p className="text-gray-600">Welcome, Boss (Feizal Onyango)</p>
        </div>
        <div className="flex items-center space-x-4">
          <Button onClick={() => setIsDialogOpen(true)}>
            Assign New Task
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Settings</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total AI Employees</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{aiEmployees.length}</div>
            <p className="text-xs text-gray-500">Active AI workforce</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tasks Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {aiEmployees.reduce((sum, emp) => sum + emp.tasksCompleted, 0)}
            </div>
            <p className="text-xs text-gray-500">This week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,450</div>
            <p className="text-xs text-gray-500">This month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-gray-500">In progress</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Performance Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="tasks" fill="#3b82f6" name="Tasks Assigned" />
                <Bar dataKey="completed" fill="#10b981" name="Tasks Completed" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Team Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={teamDistributionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8b5cf6"
                  dataKey="value"
                  nameKey="name"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {teamDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'][index % 5]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Financial Overview */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Financial Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={financialData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#3b82f6" name="Revenue" />
              <Line type="monotone" dataKey="expenses" stroke="#ef4444" name="Expenses" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* AI Employees Table */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>AI Employees</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Team</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Tasks Completed</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {aiEmployees.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell className="flex items-center">
                    <Avatar className="mr-2">
                      <AvatarFallback>{employee.avatar}</AvatarFallback>
                    </Avatar>
                    {employee.name}
                  </TableCell>
                  <TableCell>{employee.role}</TableCell>
                  <TableCell>{employee.team}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        employee.status === 'Active'
                          ? 'bg-green-100 text-green-800'
                          : employee.status === 'Idle'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {employee.status}
                    </span>
                  </TableCell>
                  <TableCell>{employee.tasksCompleted}</TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedEmployee(employee)}
                    >
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Recent Tasks Table */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Recent Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Task</TableHead>
                <TableHead>Assigned To</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Deadline</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentTasks.map((task) => (
                <TableRow key={task.id}>
                  <TableCell>{task.task}</TableCell>
                  <TableCell>{task.assignedTo}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        task.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : task.status === 'In Progress'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {task.status}
                    </span>
                  </TableCell>
                  <TableCell>{task.deadline}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Assign Task Dialog */}
      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Assign New Task</AlertDialogTitle>
            <AlertDialogDescription>
              Assign a new task to one of your AI employees.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Task Description</label>
              <Input
                type="text"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                placeholder="Enter task description"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Assign To</label>
              <select
                className="w-full p-2 border rounded"
                value={assignedTo}
                onChange={(e) => setAssignedTo(e.target.value)}
              >
                <option value="">Select an AI Employee</option>
                {aiEmployees.map((employee) => (
                  <option key={employee.id} value={employee.name}>
                    {employee.name} ({employee.role})
                  </option>
                ))}
              </select>
            </div>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setIsDialogOpen(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleAssignTask}>
              Assign Task
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Employee Details Dialog */}
      <AlertDialog open={!!selectedEmployee} onOpenChange={() => setSelectedEmployee(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{selectedEmployee?.name}</AlertDialogTitle>
            <AlertDialogDescription>
              <div className="space-y-2">
                <p>
                  <strong>Role:</strong> {selectedEmployee?.role}
                </p>
                <p>
                  <strong>Team:</strong> {selectedEmployee?.team}
                </p>
                <p>
                  <strong>Status:</strong> {selectedEmployee?.status}
                </p>
                <p>
                  <strong>Tasks Completed:</strong> {selectedEmployee?.tasksCompleted}
                </p>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setSelectedEmployee(null)}>
              Close
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AIDashboard;
