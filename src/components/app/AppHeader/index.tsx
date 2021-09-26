import React from 'react'
import {
    Layout,
    Row,
    Col
} from 'antd'
import styles from './index.module.scss'
import classnames from 'classnames'

export interface AppHeaderProps {}

const AppHeader: React.FC<AppHeaderProps> = () => {
    return (
        <Layout.Header className={styles.adminHeader}>
            <Row justify="space-between">
                <Col span={6}>
                    <div className={styles.adminHeaderText}>admin系统</div>
                </Col>
                <Col span={4}>
                    <div className={classnames(styles.adminHeaderText, 'text-right')}>渡边早季</div>
                </Col>
            </Row>
        </Layout.Header>
    )
}

export default AppHeader
