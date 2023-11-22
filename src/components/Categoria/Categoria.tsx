import { useEffect, useState } from "react";
import { Task } from "../../types/Task";
import { Container, Row } from "react-bootstrap";
import CategoriaSelector from "../CategoriaSelector/CategoriaSelector";
import CategoriasTareas from "../CategoriasTareas/CategoriasTareas";
import { TaskService } from "../../services/TaskService";

const Categoria = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  
useEffect(() => {
  const fetchTask = async () => {
    const taskData = await TaskService.getAllTask();
    setTasks(taskData);
  };

  fetchTask();
}, []); 

useEffect (() => {
  if (selectedCategory) {
    const filtered = tasks.filter(task => task.estado.toUpperCase() === selectedCategory.toUpperCase());
    setFilteredTasks(filtered);
  } else {
    setFilteredTasks(tasks);
  }
}, [selectedCategory, tasks]);

 
  return (
    <Container>
      <Row className='d-flex justify-content-center'>
        <CategoriaSelector onSelectedCategory={setSelectedCategory} />
        <CategoriasTareas tasks={filteredTasks.length > 0 ? filteredTasks : tasks} />
      </Row>
    </Container>
  )
}

export default Categoria