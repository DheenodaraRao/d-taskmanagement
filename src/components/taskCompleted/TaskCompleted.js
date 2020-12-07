export default function TaskCompleted(props) {
    return(
        <div className=" mb-2">
            
        <div className="card mx-auto px-3">
        <div className="card-body">
            <h5 className="card-title">Task Completed</h5>
            <p>{props.taskCompleted}/{props.totalTasks}</p>
        </div>
        </div>

        </div>
    );
}