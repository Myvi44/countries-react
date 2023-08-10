import "./style.sass"

export const Search = ({ searchResult, setSearchResult }) => {

    return (
        <div className="search">
            <input
                placeholder="Введите название страны/столицы которую ищете"
                type="text"
                value={searchResult}
                onChange={
                    (event) => setSearchResult(event.target.value)
                }
            />
        </div>
    )
}