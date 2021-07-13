import React from 'react'
import {
    HashRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import router, { RouterConfigItem } from '@/router'

const App:React.FC = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    {router.map(({
                        path,
                        component: Component,
                        meta
                    }) => {
                        const props:{meta:RouterConfigItem['meta']} = {
                            meta: undefined
                        }
                        if (meta) {
                            props.meta = meta
                        }

                        return (
                            <Route
                                key={path}
                                exact
                                path={path}
                            >
                                <Component {...props}/>
                            </Route>
                        )
                    })}
                </Switch>
            </Router>
        </div>
    )
}

export default App
