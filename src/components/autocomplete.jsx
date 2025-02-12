import React from 'react';
import './style.css';
import Suggestionslist from './suggestions-list';
import { debounce } from 'lodash';

function Autocomplete({
    placeholder,
    fetchSuggestions,
    dataKey,
    customLoading='Loading...',
    staticData,
    onSelect=() => {},
    onChange=() => {},
    onBlur=() => {},
    onFocus=() => {},
    customStyles={},
}) {
    const [input, setInput] = React.useState("");
    const [loading, setLoading] = React.useState();
    const [suggestions, setSuggestions] = React.useState();
    const [error, setError] = React.useState();

    console.log(suggestions);

    const handleInpputChange = (e) => {
        setInput(e.target.value);
        onChange(e.target.value);
    };

    const filterData = (data, key) => {
        return data?.filter((item) => item[dataKey]?.toLowerCase()?.includes(key?.toLowerCase()));
    };

    const getSuggestions = async (query) => {
        setError(null);
        setLoading(true);
        try {
            let result;
            if (staticData) {
                result = staticData?.filter((item) => item?.title?.toLowerCase()?.includes(query?.toLowerCase()))
            } else if (fetchSuggestions) {
                result = await fetchSuggestions();
            }
            setSuggestions(filterData(result, query));
        } catch (err) {
            console.log(err);
            setError('Failed fetch the results');
            setSuggestions([]);
        } finally {
            setLoading(false);
        }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getDebounceMethod = React.useCallback(debounce(getSuggestions, 300), []);

    React.useEffect(() => {
      if (input?.length > 1) {
        getDebounceMethod(input);
      } else {
        setSuggestions([]);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [input]);

    const handleSuggestionClick = (post) => {
        setInput(dataKey? post[dataKey] : post);
        onSelect(post);
        setSuggestions([]);
    };
    
  return (
    <div  className="container">
        <input 
            type={'text'}
            style={customStyles}
            value={input}
            placeholder={placeholder}
            onChange={handleInpputChange}
            onBlur={onBlur}
            onFocus={onFocus}
        />
        {suggestions && suggestions?.length > 0 && <ul className='suggestions-list'>
            {error && <div className="error">{error}</div>}
            {loading && <div className="loading">{customLoading}</div>}
            <Suggestionslist
                dataKey={dataKey}
                highlight={input}
                suggestions={suggestions}
                onSuggestionClick={handleSuggestionClick}
            />
        </ul>}
    </div>
  )
}

export default Autocomplete