Instead of using traditional vanila tools like html, css, js for creating front end web pages, we will be using React.js. here instead of manually writing all the markup on html, we have a placeholder on html, reacy will directly fetch the markup from the jsx file and render it.
To do this we have to create root and render the content into the root. Its called root, because react has to render all the markups from js, so it better be in a central location called root.
import {createRoot} from "react-dom/client";
const root = createRoot(getElementById());
root.render("some html tag");

React is a library, developed by facebook. it is composible and declarative. it contains a root dom. the app.js is the main container component under which there will be various smaller reusable componenets. components are a part of the user interface
Components can be stateless functional components and stateful class component. 
Funtional components are javascript functions which returns a HTML (jsx). class componets must have a render method which in turn returns a html
for a class to be conbsidered as a component, we write class c extends component {}. they have a property called state which can store some private data
However we ca do the same in functions too using the concept called hooks, which lets us use state and other react features without using a state.
Props are information passed to the component (similar to function parameters)
State are information maintained within the component (similar to variables defined within the function)
props are immutable while states can be changed
setState is a asynchronous function. whenever we want a task to happen after modiying the state, add that as a callback function for the setState. 
