
import React from 'react'
import {
    AnyObject,
    AllOptional
} from '@/types'

type ViewsProps<T extends AnyObject, K extends keyof T, U extends {value: T[K]}> = {
    record: T
    field: K
} | {
    record: T
    field: K
    component: (AllOptional<Omit<U, 'value'>> extends true? {
        Component: React.FC<U>
        config?: Omit<U, 'value'>
    }:{
        Component: React.FC<U>
        config: Omit<U, 'value'>
    })
}

export default function Views<
    T extends AnyObject,
    K extends keyof T,
    U extends { value: T[K]}
> (props: ViewsProps<T, K, U>): React.ReactNode {
    const {
        record,
        field
    } = props
    const value = record[field]
    if ('component' in props) {
        const {
            Component,
            config = {}
        } = props.component

        const propsData = {
            value,
            ...config
        } as U
        return <Component {...propsData} />
    }

    return <span>{value}</span>
}
// 测试类型用的
// const record = {
//     name: 'name-123',
//     id: 'id-21'
// }

// const ComponentWithoutOtherProp: React.FC<{value: string}> = ({ value }) => {
//     return <span>{value}</span>
// }

// const ComponentWithConfig: React.FC<{value: string, suffix: string}> = ({ value, suffix }) => {
//     return <span>{value}{suffix}</span>
// }

// const ComponentWithoptionalConfig: React.FC<{value: string, suffix?: string}> = ({ value, suffix = 114 }) => {
//     return <span>{value}{suffix}</span>
// }

// Views({
//     record,
//     field: 'id',
//     component: {
//         Component: ComponentWithoutOtherProp
//     }
// })
// Views({
//     record,
//     field: 'id',
//     component: {
//         Component: ComponentWithConfig,
//         config: {
//             suffix: '--'
//         }
//     }
// })
// Views({
//     record,
//     field: 'id',
//     component: {
//         Component: ComponentWithoptionalConfig,
//         config: {
//             suffix: '--'
//         }
//     }
// })
