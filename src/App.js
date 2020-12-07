
import './App.css';
import React from 'react';
import LatestTasks from './components/latestTasks/LatestTasks';
import Login from './components/login/Login';
import TaskCompleted from './components/taskCompleted/TaskCompleted';
import TaskItem from './components/taskList/TaskItem';
import TaskList from './components/taskList/TaskList';
import NewTaskPopup from './components/taskPopup/NewTaskPopup';
import TaskStats from './components/taskStats/TaskStats';
import DashBoardContainer from './components/dashboardContainer/DashBoardContainer';
import { Constants } from './constants/Constant';
import { TaskApi } from './apis/TaskApi';


function App() {

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [taskCompleted, setTaskCompleted] = React.useState(0);
  const [taskTotal, setTaskTotal] = React.useState(0);
  const [latestTasks, setLatestTasks] = React.useState([]);
  const [allTasks, setAllTasks] = React.useState([]);

  React.useEffect(() => {
    const loggedIn = localStorage.getItem(Constants.TOKEN);
    if(loggedIn){
      getDashboardDetails();
      getAllTasksDetails();
      setIsLoggedIn(true);
    }
    else{
      setIsLoggedIn(false);
    }
  }, []);

  const getDashboardDetails = () => {
    console.log('resp 1');

      TaskApi.getDashboardData().then((resp)=> {
        if(resp.status === 200){
          setTaskCompleted(resp.data.tasksCompleted);
          setTaskTotal(resp.data.totalTasks);
          setLatestTasks(resp.data.latestTasks);
        }
      }, (err)=> {
        alert(err);
    })
  }

  const getAllTasksDetails = () => {
    TaskApi.getAllTask().then((resp)=> {
      setAllTasks(resp.data.tasks);
    }, (err)=> {
      alert(err);
  })
  }

  const refreshData = () => {
    getDashboardDetails();
    getAllTasksDetails();
  }

  const updateIsLoggedIn = () => {
    refreshData();
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    localStorage.removeItem(Constants.NAME);
    localStorage.removeItem(Constants.TOKEN);
    setIsLoggedIn(false);

  }
  
  return (
    <div className="">
      {
        !isLoggedIn ? 
        <Login 
          handleSuccessLogin = {updateIsLoggedIn}
        />
        :
        <DashBoardContainer 
          refreshData  ={refreshData}
          tasksCompleted = {taskCompleted}
          totalTasks = {taskTotal}
          latestTasks = {latestTasks}
          allTasks = {allTasks}
          handleLogout = {handleLogout}
        />
      }

    </div>
  );
}

export default App;
