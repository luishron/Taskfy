//Para crear un filtro para ordenar las tareas por fecha, puedes utilizar la función de ordenamiento sort de JavaScript en el array de tareas. Esta función acepta una función de comparación como argumento, que se utiliza para determinar el orden en que se deben ordenar los elementos del array.

//En este caso, puedes crear una función de comparación que compare las fechas de cada tarea y ordene el array de acuerdo a esas fechas. Por ejemplo:

const sortTasksByDate = (tasks) => {
  return tasks.sort((a, b) => {
    // Si la fecha de la tarea A es anterior a la fecha de la tarea B,
    // entonces A debe estar antes que B en el array ordenado
    if (a.date < b.date) {
      return -1;
    }
    // Si la fecha de la tarea A es posterior a la fecha de la tarea B,
    // entonces A debe estar después que B en el array ordenado
    if (a.date > b.date) {
      return 1;
    }
    // Si las fechas de A y B son iguales, no se debe cambiar el orden de las tareas
    return 0;
  });
};

//Luego, puedes utilizar esta función para ordenar el array de tareas cada vez que se agregue o modifique una tarea, o cuando se cambie el filtro seleccionado:

const handleChangeFilter = (filter) => {
  // Ordena las tareas de acuerdo al filtro seleccionado
  const sortedTasks = sortTasksByDate(tasks);

  // Actualiza el estado con el array de tareas ordenado
  setTasks(sortedTasks);
  setFilter(filter);
};

const handleAddTask = (task) => {
  const newTasks = [...tasks, task];

  // Ordena las tareas de acuerdo al filtro seleccionado
  const sortedTasks = sortTasksByDate(newTasks);

  // Actualiza el estado con el array de tareas ordenado
  setTasks(sortedTasks);
};

const handleUpdateTask = (updatedTask) => {
  const newTasks = tasks.map((task) => {
    if (task.id === updatedTask.id) {
      return updatedTask;
    }
    return task;
  });

  // Ordena las tareas de acuerdo al filtro seleccionado
  const sortedTasks = sortTasksByDate(newTasks);

  // Actualiza el estado con el array de tareas ordenado
  setTasks(sortedTasks);
};
