export default function LatestTasks(props) {
    return(
        <div className="mb-2">
            
        <div className="card mx-auto px-3">
        <div className="card-body">
            <h5 className="card-title">Latest Created Tasks</h5>
            {generateList(props.tasks)}
        </div>
        </div>

        </div>
    );
}

const generateList = (tasks) => {
    const listStyle = {
        marginTop: '1px',
        paddingTop: '1px'
    }

    const completedTaskStyle = {
        marginTop: '1px',
        paddingTop: '1px',
        textDecoration: 'line-through'
    }
    return( 
    <ul>
        {tasks.map(task => {
            return <li style={task.completed? completedTaskStyle: listStyle}>{task.name}</li>
        })}
    </ul>
    );
}