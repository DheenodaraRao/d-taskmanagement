import { PieChart } from 'react-minimal-pie-chart';

export default function TaskStats(props){

    const defaultLabelStyle = {
        fontSize: '3px',
        textAlign: 'center',
        fontFamily: 'sans-serif',
      };

    return(
        <div className="">
            
        <div className="card mx-auto px-3">
        <div className="card-body">
 
        <PieChart
            radius = {30}
            label={({ dataEntry }) => dataEntry.title}
            labelStyle={defaultLabelStyle}
            defaultLabelStyle={defaultLabelStyle}
            data={[
                { title: 'Completed', value: props.taskCompleted, color: '#5285EC' },
                { title: 'Pending', value: (props.totalTasks - props.taskCompleted), color: '#E8ECEC' },
            ]}
        />
        </div>
        </div>

        </div>
    );
}