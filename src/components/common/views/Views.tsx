
import React from 'react'
import {
    AnyObject,
    AllOptional
} from '@/types'

type ViewsProps<T extends Record<string, unknown>, K extends keyof T, U extends {value: T[K]}> = (AllOptional<Omit<U, 'value'>> extends true? {
    record: T
    field: K
    component: {
        Component: React.FC<U>
        config?: Omit<U, 'value'>
    }
} : {
    record: T
    field: K
    component: {
        Component: React.FC<U>
        config: Omit<U, 'value'>
    }
}) | {
    record: T
    field: K
}

export default function Views<T extends AnyObject, K extends keyof T, U extends { value: T[K]}> (props: ViewsProps<T, K, U>): React.ReactNode {
    const {
        record,
        field
    } = props
    const value = record[field]
    if ('component' in props) {
        const Component = props.component.Component
        const props2 = {
            value,
            ...(props.component.config ?? null)
        } as U
        return <Component {...props2} />
    }

    return <span>{value}</span>
}
