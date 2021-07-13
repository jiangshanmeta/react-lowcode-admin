
import React from 'react'
import { useHistory } from 'react-router'

const MetaPageList:React.FC<{
    meta:{aaa:string}
}> = ({
    meta
}) => {
    const history = useHistory()
    return (
        <div>
            1 {JSON.stringify(meta)}
            <button onClick={() => history.push('/create')}>111</button>
        </div>
    )
}

export default MetaPageList
