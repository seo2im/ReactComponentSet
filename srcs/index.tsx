import * as React from 'react'
import ReactDOM from 'react-dom'
import Components from './Components'
import { GlobalStyle, theme } from './Styles'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const main = () => {
    return (
        <div>
            <ul>
                {Components.map((e, i) => (
                    <li key={`link_${i}`}>
                        <Link to={`/${e.name}`}>{e.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router>
                <Switch>
                    <Route exact path='/' component={main} />
                    {Components.map((e, i) => (
                        <Route key={`route_${i}`}  path={`/${e.name}`}>
                            <e.comp />
                        </Route>
                    ))}
                </Switch>
            </Router>
        </ThemeProvider>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))
