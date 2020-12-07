import { TaskApi } from "../../apis/TaskApi"

export default function TaskItem(props) {

    const handleUpdateCompletion = () => {
        TaskApi.updateTask(props.task._id, props.task.name, !props.task.completed)
        .then((resp) => {
            if(resp.status === 200){
                console.log(resp);
                props.refreshData();
            }
            
        }, (err)=> {
            alert(err);
        })
    }

    const deleteTask = () => {
        TaskApi.deleteTask(props.task._id)
        .then((resp)=> {
            if(resp.status === 200){
                props.refreshData();
            }
        }, (err)=> {
            alert(err);
        })
    }


    const style = {
        fontSize: '20px',
        color: '#5285EC'
    }

    const completedTaskStyle = {
        fontSize: '20px',
        color: '#537178',
        textDecoration: 'line-through'
    }

    const checkBoxStyle = {
        width: '19px',
        height: '19px'
    }
    return(
        <div className="d-flex flex-row ml-3">
        <div className="p-2">
            <input
            onChange={e => handleUpdateCompletion()} 
            style={checkBoxStyle}
            checked={props.task.completed}
                className="form-check-input" 
                type="checkbox" 
                value="" /> 
        </div>

        <div 
            className="p-2 align-self-center" 
            style={props.task.completed? completedTaskStyle: style}>
                {props.task.name}
        </div>
        <div className="p-2 align-self-center ml-auto">
            <button type="button" className="btn btn-primary btn-sm">
                Edit
            </button>
        </div>

        <div className="p-2 align-self-center">
            <button 
                type="button" 
                onClick={() => deleteTask()}
                className="btn btn-primary btn-sm">
                    Delete
            </button>
        </div>
        </div>
    );
}