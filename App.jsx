const Router = ReactRouterDOM.HashRouter
const { Switch, Route } = ReactRouterDOM

import Home from './pages/Home.jsx';
import BookPage from './pages/BookPage.jsx';
import Navbar from './cmps/Navbar.jsx';

const { createBrowserHistory } = History;
const history = createBrowserHistory();

class App extends React.Component {
    render() {
        return (
            <main>
                <nav>
                </nav>
                <Router history={history}>
                    <Navbar></Navbar>
                    <Switch>
                        <Route exact component={Home} path="/" />
                        <Route exact component={BookPage} path="/book/" />
                        <Route exact component={BookPage} path="/book/:id" />
                    </Switch>
                </Router>
            </main>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)