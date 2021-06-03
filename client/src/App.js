import axios from 'axios'

function App() {

const testGet = () => {
  axios.get('/hey')
  .then((res) => console.log(res))
  .catch(err => console.log(err))
}

  return (
    <div >
      <p>Hello from react</p>
      <button onClick={testGet}>GET</button>
    </div>
  );
}

export default App;
