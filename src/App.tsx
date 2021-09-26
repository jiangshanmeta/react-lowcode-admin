import React from 'react'
import {
    HashRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import {
    Layout
} from 'antd'

import AppHeader from '@/components/app/AppHeader'
import AppFooter from '@/components/app/AppFooter'

import router, { RouterConfigItem } from '@/router'

import styles from './App.module.scss'

const App:React.FC = () => {
    return (
        <Router>
            <Layout className={styles.AppPage}>
                <AppHeader/>
                <Layout>
                    <Layout.Sider>Sider</Layout.Sider>
                    <Layout.Content className={styles.AppMain}>
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
                    </Layout.Content>
                </Layout>
                <AppFooter/>
            </Layout>
        </Router>

    )
}

export default App
