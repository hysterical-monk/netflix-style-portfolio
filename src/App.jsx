import { BrowserRouter } from "react-router-dom";
import ScrollManager from "./components/ScrollManager";
import AnimatedRoutes from "./AnimatedRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager>
        <AnimatedRoutes />
      </ScrollManager>
    </BrowserRouter>
  );
}