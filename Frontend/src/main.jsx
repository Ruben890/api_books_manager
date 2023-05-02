import ReactDOM from "react-dom/client";
import Router from "./Routes/routers";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import "bootstrap-icons/font/bootstrap-icons.css";
import { store } from "./app/store";
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
    <Provider store={store}>
        <Router />
    </Provider>

)