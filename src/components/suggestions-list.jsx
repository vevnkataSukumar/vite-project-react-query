// import React from 'react'

function Suggestionslist({
    suggestions=[],
    highlight,
    dataKey,
    onSuggestionClick,
}) {

    const getHighlightedText = (text, highlight) => {
        const parts = text.split(new RegExp(`(${highlight})`, "gi"));
        return (
            <span>
                {parts.map((part, index) => {
                    return part.toLowerCase() === highlight.toLowerCase() ? (<b key={index}>{part}</b>) : (part) 
                })}
            </span>
        );
    }

  return (
    <>
        {suggestions?.map((suggestion) => {
            const postData = dataKey ? suggestion[dataKey] : suggestion;
            return (
                <li key={suggestion.id} className='suggestion-item' onClick={() => onSuggestionClick(suggestion)}>
                    {getHighlightedText(postData, highlight)}
                </li>
            )
        })}
    </>
  )
}

export default Suggestionslist;