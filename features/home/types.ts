export type Category = {
  id: string;
  name: string;
  taskCount: number;
  image: any;
};
export type Task = {
  id: string;
  name: string;
  dueDate: string;          
  image: any;               
  progress: number;         
};
