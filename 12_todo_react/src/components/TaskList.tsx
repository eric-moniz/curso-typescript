import { ITask } from '../interfaces/Task';

import styles from './TaskList.module.css';

interface Props {
  taskList: ITask[];
}

const TaskList = ({ taskList }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map(task => (
          <div key={task.id}>
            <p>{task.title}</p>
            <p>{task.difficulty}</p>
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas</p>
      )}
    </>
  );
};

export default TaskList;
