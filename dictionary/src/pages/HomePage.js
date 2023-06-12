import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Context from '../components/Context'
import { Search } from '../components/Search'
import { useDebounce } from '../hooks/useDebounce'


const HomePage = () => {
    const [keyword, setKeyword] = useState('ask')
    const debounceSearch = useDebounce(keyword, 5000)
    
    const { isLoading, error, data} = useQuery({
       
        queryKey: ['keyword', debounceSearch],
        queryFn: () => 
            fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`).then(
            (res) => res.json(),
          ),
      })

      if (isLoading) return 'Loading...'
    
      if (error) return 'An error has occurred: ' + error.message

      console.log(data[0])
      const audioUrl = data[0].phonetics[0].audio || data[0].phonetics[1].audio || data[0].phonetics[2].audio;

      const handler=(e)=>{
        setKeyword(e.target.value);
      }

      console.log(data)

  return (
    <div>
        <Search inputHandler={handler} />
        {/* <button onClick={refetch}>search</button> */}
        {data && <Context 
        word={data[0].word} 
        phonetic={data[0].phonetic}
        meanings={data[0].meanings}
        audioUrl={audioUrl
        }
        sourceUrls={data[0].sourceUrls}
        />}
    </div>
  )
}

export default HomePage