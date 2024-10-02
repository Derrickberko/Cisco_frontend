import Banner from './banner';
import Exhibit from './exhitbit';
import './App.css';
import IPFetcher from './ipfech';
import LatencyMonitor from './latencyMonitor';

function App() {
  return (
    <div>
      <Banner />

      <Exhibit title="Public IPv4 Address">
        <IPFetcher version="v4" />
      </Exhibit>

      <Exhibit title="Public IPv6 Address">
        <IPFetcher version="v6" />
      </Exhibit>

      <Exhibit title="Packet Latency">
        <LatencyMonitor />
      </Exhibit>
    </div>
  );
}

export default App;
