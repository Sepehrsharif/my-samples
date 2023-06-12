import React from 'react'

const Context = ({word, phonetic, meanings, audioUrl, sourceUrls }) => {

  return (
    <div>
        <h1>{word}</h1>
        <p>{phonetic}</p>
        <audio controls>
            <source src={audioUrl} type="audio/ogg"></source>
        </audio>
        {meanings.map(item => {
            return (
            <>
            <li>{item.partOfSpeech}</li>
            {item.synonyms.length !== 0 && <p>synonyms: {item.synonyms}</p>}
            {item.definitions.map(def => {
                return (
                <>
                    <li>{def.definition}</li>
                    {def.example != null && <p><b>example:</b> {def.example}</p>}
                </>
                )
            })}
            </>
            )
        })}

        <a href={sourceUrls}>{sourceUrls}</a>
    </div>
  )
}

export default Context