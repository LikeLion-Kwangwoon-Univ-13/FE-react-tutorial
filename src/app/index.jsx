import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./(root)";
import { Session1, Session2, Session3, Session4 } from "./sessions";
import Session from "../components/sessions";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Root />} />
        <Route path="/sessions" element={<Session.Layout />}>
          <Route path="1" element={<Session1 />} />
          <Route path="2" element={<Session2 />} />
          <Route path="3" element={<Session3 />} />
          <Route path="4" element={<Session4 />} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}
