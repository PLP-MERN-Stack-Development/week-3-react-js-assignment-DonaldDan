import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskManager from "./components/TaskManager/TaskManager";
import Navbar from "./components/ui/navigation-menu";
import Footer from "./components/ui/footer";
import { ThemeProvider } from "./context/ThemeContext.jsx";
// import Posts from "./pages/Posts"; // Optional future route

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar />

        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<h1 className="text-center text-2xl">Welcome to TaskHub</h1>} />
            <Route path="/tasks" element={<TaskManager />} />
            {/* <Route path="/posts" element={<Posts />} /> */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
