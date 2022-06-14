import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-Body">
        <header className="App-header">Funnel Rolodex (MiniDash)</header>
        <div className="App-Card">
          <div className="Job-Detail-Section">
            <h2>Youtube Strategy</h2>
            <img src="https://picsum.photos/200" alt="job" />
            <p>
              <b>Price:</b> 49.99
            </p>
            <p>
              <b>Orders Active:</b> 3
            </p>
            <p>
              <b>Orders Completed:</b> 4
            </p>
          </div>
          <div className="Jobs-Section">
            <h3 className="Jobs-Header">Jobs in System</h3>
            <hr />
            <p className="Job-Title">Expert funnel builder - 5HR Pack</p>
            <p className="Job-Title">Expert funnel builder - 5HR Pack</p>
          </div>
        </div>
        <div className="App-Footer">
          <button className="App-Link">Previous</button>
          <button className="App-Link">Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
