import AppBar from "../appBar/Appbar";
import LatestTasks from "../latestTasks/LatestTasks";
import TaskCompleted from "../taskCompleted/TaskCompleted";
import TaskList from "../taskList/TaskList";
import TaskStats from "../taskStats/TaskStats";
import NoTaskContainer from "./NoTaskContainer";

export default function DashBoardContainer(props){

    return(
        <div>
            <AppBar handleLogout={props.handleLogout}/>
            {
                props.totalTasks === 0 ?
                <NoTaskContainer 
                    refreshData={props.refreshData}
                />
                :
                <div>
                <TaskCompleted
                    taskCompleted = {props.tasksCompleted}
                    totalTasks = {props.totalTasks}
                />
    
                <LatestTasks
                    tasks = {props.latestTasks}
                />
    
                <TaskStats 
                    taskCompleted = {props.tasksCompleted}
                    totalTasks = {props.totalTasks}
                /> 

                <TaskList 
                    allTasks = {props.allTasks}
                    refreshData={props.refreshData}
                />  
                
                </div>
            }
        </div>

    );
}