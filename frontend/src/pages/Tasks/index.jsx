import { useEffect } from 'react';
import isAuthenticated from '../../utils/isAuthenticated';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import requestApi from '../../utils/requestApi';
import Task from '../../components/Task';
import CreateTask from '../../components/createTask';

function Tasks() {
  const navigate = useNavigate();
  const token = localStorage.getItem('tokenEbytr') || '';
  const [tasks, setTasks] = useState([]);
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const authenticated = async () => {
    const response = await isAuthenticated();

    if(response) navigate('/');
  };

  const getTasks = async () => {
    const options = {
      method: 'GET',
      headers: { authorization: token },
      url: `${BASE_URL}/tasks`,
    };

    const response = await requestApi(options);

    if (response.error) console.log('Algo deu errado');
    else setTasks(response.data);
  };
  
  useEffect(() => {
    authenticated();
    getTasks();
  }, []);

  return (
    <section style={{
      width: '800px',
      margin: 'auto'
    }}>
      { tasks.map((task) => <Task
        key={ task.id }
        task={ task }
      /> )}

      <CreateTask />
    </section>
  );
}

export default Tasks;