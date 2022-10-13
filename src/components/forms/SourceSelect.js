import { useQuery } from '@apollo/client'
const { UNIQUE_SOURCES } = require('../../queries')

const SourceSelect = ({setCurrentSource}) => {
    
    const result = useQuery(UNIQUE_SOURCES)

    if (result.loading) {
        return <div>loading...</div>
    }


    return (
        <>
        <label htmlFor='certamen-source'> Source:        </label>
        <div className='source-select'>
        <select className='input-per60' id='certamen-source' onChange={(e) => setCurrentSource(e.target.value)}>
        {
        result.data.uniqueSources.map((source) => {
            return (
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