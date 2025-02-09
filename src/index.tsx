import {createRoot} from "react-dom/client";
import {Counter} from "./counter/counter";

const root = createRoot(document.getElementById('root'));
root.render(<Counter/>);