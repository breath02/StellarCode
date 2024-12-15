import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import StartPage from "./components/start.js";
import ProblemListPage from "./components/list.js";
import ProblemDetailPage from "./components/problemDetailPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/problem-list" element={<ProblemListPage />} />
                <Route path="/problem-detail" element={<ProblemDetailPage />} />
            </Routes>
        </Router>
    );
}

export default App;
