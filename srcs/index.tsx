import * as React from 'react'
import ReactDOM from 'react-dom'
import Components from './Components'
import { GlobalStyle, Theme } from './Styles'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import DarkMode, { useTheme } from './Components/DarkMode/DarkMode'

const main = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={`/DarkMode`}>DarkMode</Link>
                </li>
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
    const [ theme, changeTheme ] = useTheme()

    return (
        <ThemeProvider theme={Theme[theme] ? Theme[theme] : Theme['light']}>
            <GlobalStyle />
            <Router>
                <Switch>
                    <Route exact path='/' component={main} />
                    {Components.map((e, i) => {
                        <Route key={`route_${i}`}  path={`/${e.name}`}>
                            <e.comp />
                        </Route>
                    })}
                    <Route path={`/DarkMode`}>
                        <DarkMode changeTheme={changeTheme} />
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))
