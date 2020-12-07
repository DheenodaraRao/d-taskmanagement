import * as React from 'react';

import { SearchIcon } from "@primer/octicons-react";
import TaskItem from "./TaskItem";
import NewTaskPopup from "../taskPopup/NewTaskPopup";
import Popup from 'reactjs-popup';

export default function TaskList(props){
    const [isOpen, setIsOpen] = React.useState(false);
    const [searchString, setSearchString] = React.useState('');

    const taskTitleStyle = {
        color: '#537178',
        fontSize: '20px'
    }

    const searchStyle = {
        backgroundColor: '#D9DFEB',
        fontSize: '14px',
        textAlign: 'center',
    }

    const cornerRadiusStyle = {
        borderRadius: '8px'
    }

    const searchIconStyle = {
        backgroundColor: '#D9DFEB',
    }

    return(
        <div className="tasklistcontainer mt-3 mx-3">
            <p 
            style={taskTitleStyle}
            className="text-center"
            >Tasks</p>

        <div className="input-group" style={cornerRadiusStyle}> 
            <div  className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1"><SearchIcon style={searchIconStyle} size={16} /></span>
            </div>
            <input style={searchStyle} 
            onChange={e => setSearchString(e.target.value)}
            id="taskSearch" 
            type="text" 
            className="form-control mx-auto" 
            name="taskSearch" 
            placeholder="Search by Task Name" /> 
        </div>

        <button         
            onClick={() =>setIsOpen(true)}
            type="button" 
            className="btn btn-primary btn-block mt-3"
            >
            + New task
        </button>

            {generateTaskItemList(props.allTasks, props.refreshData, searchString)} 


            <Popup
                contentStyle={{ width: '80%', }}
                open={isOpen}
                modal
                closeOnDocumentClick={true}
                onClose={()=> setIsOpen(false)}>
                {close => (
                    <div>
                        <NewTaskPopup
                            close={()=> setIsOpen(false)} 
                            refreshData={props.refreshData}
                        />
                    </div>
                )}
                </Popup>

        </div>
    );
}

const generateTaskItemList = (taskList, refreshData, searchTerm) => {
    if(taskList == null){
        return <p>No Tasks Found</p>
    }
    const filteredTask = taskList.filter(t => {
        return (t.name.toLowerCase()).includes(searchTerm.toLowerCase())});

    console.log('filteredt', filteredTask);
    return(
        filteredTask.map((task) => {
            return <TaskItem refreshData={refreshData} task={task} />
        })
    );
}