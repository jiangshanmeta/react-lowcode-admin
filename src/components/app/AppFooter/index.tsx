import React from 'react'
import {
    Layout
} from 'antd'

export interface AppFooterProps {}

const AppFooter:React.FC<AppFooterProps> = () => {
    return (
        <Layout.Footer>
            <div className="text-center">
                jiangshanmeta
            </div>
        </Layout.Footer>
    )
}

export default AppFooter
