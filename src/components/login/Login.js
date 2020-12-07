import * as React from 'react';
import { TaskApi } from '../../apis/TaskApi';
import { Constants } from '../../constants/Constant';

export default function Login(props) {

const [id, setID] = React.useState('');
const [name, setName] = React.useState('');

const handleLogin = () => {
  TaskApi.login(id,name).then((resp) => {
    if(resp.status === 200){
      localStorage.setItem(Constants.TOKEN, resp.data.token.token);
      localStorage.setItem(Constants.NAME, name);
      props.handleSuccessLogin();
    }
    else{
      alert('Login Failed');
    }
  }, (err)=> {
    alert(err);
})
}

const style = {
    width: '200px'
}
  return (
    <div>

     <form>
    <div className="form-group mx-auto mt-auto mb-auto px-1 py-1" style={style}>
        <input 
        onChange={e => setID(e.target.value)}
        type="text" 
        placeholder="ID" 
        className="form-control mt-2" 
        aria-describedby="emailHelp" />
        <input 
          onChange={e => setName(e.target.value)}
          type="text" 
          placeholder="Name" 
          className="form-control mt-2" 
          aria-describedby="nameHelp" />

        <button 
          onClick={handleLogin}
          type="button" 
          className="btn btn-primary btn-block mt-3"
        >
          Login
        </button>
    </div>
    </form>
    </div>
  );
}