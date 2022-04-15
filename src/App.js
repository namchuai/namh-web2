import logo from "./logo.svg";
import "./App.css";

function App() {
  window.Moengage.add_first_name("Dominick");
  window.Moengage.add_last_name("Cobb");
  window.Moengage.add_email("dom@level5.com");
  window.Moengage.add_mobile("+12399999999");
  window.Moengage.add_user_name("Dominick (Dom) Cobb"); // Full name for user
  window.Moengage.add_gender("M");
  window.Moengage.add_birthday(new Date(1980, 2, 31));

  window.Moengage.add_unique_user_id("dom@level5.com");

  window.Moengage.track_event("Sample", { integration: "React" });

  console.log("Success, rendering..");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
