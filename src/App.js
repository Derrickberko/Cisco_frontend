import Banner from './banner';
import Exhibit from './exhitbit';
import './App.css';

function App() {
  return (
    <div>
      <Banner />  {/* Include the Banner at the top */}
      <Exhibit title="First Exhibit">  {/* Use the Exhibit component */}
        <p>This is the content for the first exhibit.</p>
      </Exhibit>
      <Exhibit title="Second Exhibit">
        <p>This is the content for the second exhibit.</p>
      </Exhibit>
    </div>
  );
}

export default App;
