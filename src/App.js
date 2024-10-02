import Banner from './banner';
import Exhibit from './exhitbit';
import './App.css';
import IPFetcher from './ipfech';

function App() {
  return (
    <div>
      <Banner />  {/* Include the Banner at the top */}
      <Exhibit title="Public IPv4 Address">  {/* Use the Exhibit component */}
        <IPFetcher version='v4' />
      </Exhibit>

      <Exhibit title="Public IPv^ Address">
      <IPFetcher version = "v6" />
      </Exhibit>
    </div>
  );
}

export default App;
