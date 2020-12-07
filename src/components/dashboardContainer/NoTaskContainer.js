import * as React from 'react';
import NewTaskPopup from "../taskPopup/NewTaskPopup"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
export default function NoTaskContainer(props){

    const [isOpen, setIsOpen] = React.useState(false);

    const taskTitleStyle = {
        color: '#537178',
        fontSize: '20px'
    }

    return(
            <div className=" mb-2">
                
                <div className="card mx-auto px-3">
                <div className="card-body">
                <p 
                    style={taskTitleStyle}
                    className="text-center"
                    >No Task Found</p>
                    
                    <button 
                    
                    onClick={() =>setIsOpen(true)}
                    type="button" 
                    className="btn btn-primary btn-block mt-3"
                    >
                        + New task
                    </button>
                    
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
                </div>
            </div>
    );
} 