// Importing top-level components
import Header from "./components/Header.jsx";
import Quiz from "./components/Quiz.jsx";

// Root component of the application
function App() {
  // Renders the Header and Quiz components inside the main layout
  return (
    <>
      <Header />
      <main>
        <Quiz />
      </main>
    </>
  );
}

// Export App so it can be used in main.jsx
export default App;
