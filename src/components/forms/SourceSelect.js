import { useQuery } from '@apollo/client'
const { UNIQUE_SOURCES, QUESTION_SET_BY_DIFFICULTY, QUESTION_SET_BY_SOURCE } = require('../../queries')
const { useState } = require('react')

const SourceSelect = ({setCurrentSource}) => {
    
    const result = useQuery(UNIQUE_SOURCES)

    if (result.loading) {
        return <div>loading...</div>
    }


    return (
        <>
        <label htmlFor='certamen-source'> Source:        </label>
        <div className='source-select'>
        <select className='source-select__input' id='certamen-source' onChange={(e) => setCurrentSource(e.target.value)}>
        {
        result.data.uniqueSources.map((source) => {
            return (
                // make a better solution for keys later (array indices not advisable)
                <option value={source} key={result.data.uniqueSources.indexOf(source)}>
                    {source}
                </option>
            );
        })} 
        </select>
        </div>
        </>
    )




// make the query
// make a set of the sources    
    
}
    
    export default SourceSelect