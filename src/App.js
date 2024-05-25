import './App.css';
import Student from './components/Student';

function App() {
  return (
    <div className="App">
      <h1>Props in react</h1>
      <Student name={'Zohaib'} email='zohaib@gmail.com' />
      <Student name={'Akhtar'} email='akhtar@gmail.com' />
    </div>
  );
}

export default App;
