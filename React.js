Instead of using traditional vanila tools like html, css, js for creating front end web pages, we will be using React.js. here instead of manually writing all the markup on html, we have a placeholder on html, reacy will directly fetch the markup from the jsx file and render it.
To do this we have to create root and render the content into the root. 
import {createRoot} from "react-dom/client";
const root = createRoot(getElementById());
root.render("some html tag");
