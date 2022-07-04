import React, {useState} from 'react'
import Affairs from './Affairs'
import {log} from 'util';

// types
export type AffairPriorityType = 'low' | 'high' | 'middle'// need to fix any
export type AffairType = any // need to fix any
export type FilterType = 'all' | AffairPriorityType
export type defaultAffairsType = {
    _id: number
    name: string
    priority: AffairPriorityType
}

// constants
const defaultAffairs: Array<defaultAffairsType> = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]


// pure helper functions
export const filterAffairs = (affairs: Array<defaultAffairsType>, filter: FilterType): any => { // need to fix any
    if (filter === 'all') return affairs
    else if (filter === 'low') return affairs.filter(el => el.priority === 'low')
    else if (filter === 'high') return affairs.filter(el => el.priority === 'high')
    else if (filter === 'middle') return affairs.filter(el => el.priority === 'middle')
}
export const deleteAffair = (affairs: Array<defaultAffairsType>, _id: number): Array<defaultAffairsType> => { // need to fix any
    return affairs.filter((el) => el._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<defaultAffairsType>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any


    return (
        // for beauty style
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
