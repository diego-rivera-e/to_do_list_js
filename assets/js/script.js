    const btnAgregar = document.querySelector('#newTask');
    const task = document.querySelector('#newTask');
    const tbodyTasks  = document.querySelector('#tasks');
    const tasksList =[];
    const totalTask = document.querySelector('#totalTasks');
    const taskReady = document.querySelector('#taskReady')

      btnAgregar.addEventListener('keypress', function(e){
        if(e.keyCode ===13){
          addTask();
        }
      });

    const addTask = () => {
        if(task.value === '' ){
            alert('DEBE INGRESAR UNA TAREAAAAA!!');
            return;
        }

        const newTask = {
            id: tasksList.length +1,
            name: task.value,
            status: false
        };

        tasksList.push(newTask);
        updateList();
      }

    const updateList =() => {
        let html='';
        let countTaskReady = 0;
        for(let task of tasksList){
          if(task.status){
            countTaskReady++
          }
            html += `
            <tr class="${task.status ? 'bg-success': 'bg-light'}">
                <td>${task.id}</td>
                <td>${task.name}</td>
                <td class="text-right"> <button onclick ="updateStatus(${task.id})" class="btn  btn-${task.status ? 'success' : 'warning'}">${task.status ? 'Realizada' : 'Pendiente'}</button></td>
                <td class="text-right"> <button onclick  ="deleteTask(${task.id})" class="btn btn-danger" id="btnEliminar">Eliminar</button></td>
            <tr/>
            `;
        }
        task.value = '';
        tbodyTasks.innerHTML = html;
        totalTask.innerHTML = tasksList.length;
        taskReady.innerHTML = countTaskReady;

      }


const updateStatus =(taskId) =>{
  const index= tasksList.findIndex(task => task.id === taskId);
  if( tasksList[index].status === false){
    tasksList[index].status = true;
  }else{
    tasksList[index].status = false;
  }
  updateList();
}

const deleteTask = (taskId) =>{
  const confirmation = confirm ('¿Estas seguro de eliminar la tarea????');
  if(confirmation){
  const index= tasksList.findIndex(task => task.id === taskId);
  tasksList.splice(index, 1);
  updateList();
}
}
