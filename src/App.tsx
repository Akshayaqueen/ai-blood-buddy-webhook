import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>AI Blood Buddy</h1>
      <p>Welcome to your donor care dashboard.</p>
      <nav>
        <Link to="/onboarding">Onboarding</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/chatbot">Chatbot</Link>
      </nav>
    </div>
  );
}

export default App;
