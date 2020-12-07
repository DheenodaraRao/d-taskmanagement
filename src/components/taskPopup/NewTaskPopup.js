import * as React from 'react';
import { TaskApi } from '../../apis/TaskApi';

export default function NewTaskPopup(props){

    const [name, setName] = React.useState('');

    const style = {
        width: '90%'
    }

    const handleCreateTask = () => {
        TaskApi.createNewTask(name)
        .then((resp)=> {
            if(resp.status === 200){
                props.close();
                props.refreshData();
            }
            else{
                alert('error creating task');
            }
        })
    }
    return(

        <div className="mx-1 mt-3">
            
        <div className="card mx-auto px-3 py-3" style={style}>
        <div className="card-body">
            <h5 className="card-title">+ New Task</h5>
            <input 
                onChange={e => setName(e.target.value)}
                type="text" 
                placeholder="Task Name" 
                className="form-control mt-2" 
                aria-describedby="taskNameHelp" 
            />
            
            <button 
                onClick={handleCreateTask}
                disabled={name === ''}
                type="button" 
                className="btn btn-primary btn-block mt-3">
            + New Task
            </button>
        </div>
        </div>

        </div>

    );
}
