import { BrowserRouter, Routes, Switch, Route } from 'react-router-dom';
import SignUpView from "./SignUpView";
import ItemsView from "./ItemsView";
import SignInView from "./SignInView";
import NoPage from './NoPage';

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={SignInView} />
                <Route path="*" component={NoPage} />
            </Switch>
        </BrowserRouter>
    );
}

