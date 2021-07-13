import React, { lazy } from 'react'

export interface RouterConfigItem {
    path:string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component:React.FC<any>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    meta?:any;
}

const router:RouterConfigItem[] = [
    {
        path: '/',
        component: lazy(() => import('@/pages/common/MetaPageList')),
        meta: {
            aaa: '66'
        }
    },
    {
        path: '/create',
        component: lazy(() => import('@/pages/common/MetaPageCreate'))
    },
    {
        path: '/edit',
        component: lazy(() => import('@/pages/common/MetaPageEdit'))
    },
    {
        path: '/info',
        component: lazy(() => import('@/pages/common/MetaPageInfo')),
        meta: {
            aaa: 111
        }
    }
]

export default router
