import * as React from 'react';

export default function Login() {

const style = {
    width: '200px'
}
  return (
    <div>

     <form>
    <div className="form-group mx-auto mt-auto mb-auto px-1 py-1" style={style}>
        <input type="text" placeholder="ID" className="form-control mt-2" aria-describedby="emailHelp" />
        <input type="text" placeholder="Name" className="form-control mt-2" aria-describedby="nameHelp" />

        <button type="button" className="btn btn-primary btn-block mt-3">
          Login
        </button>
    </div>
    </form>
    </div>
  );
}