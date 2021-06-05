import axios from 'axios'
import React, { useState } from 'react';

function App() {

const [secret, setSecret] = useState(null);

const testGet = () => {
  axios.get('/hey')
  .then((res) => {setSecret(res.data)})
  .catch(err => console.log(err))
}

  return (
    <div >
      <p>Hello from react</p>
      <button onClick={testGet}>GET</button>
      {secret? <p>The secret is {secret}</p>:null}
    </div>
  );
}

export default App;
