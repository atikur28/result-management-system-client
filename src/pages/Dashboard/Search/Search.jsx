import search from '../../../assets/svg/search.svg'

const Search = ({searchTerm, setSearchTerm}) => {
 
    return (
      <div>
        
        <button
            type="button"
            className="focus:[&amp;:not(:focus-visible)]:outline-none hidden h-8 w-72 items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex">
              <img
                src={search}
                alt="Search"
                className="h-5 w-5"
                />
              <input
               type="text"
               placeholder="Search by Registration No..."
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 focus:border-none focus:outline-none "
                style={{ maxWidth: '80%' }}
              />
            </button>
      </div>
    );
};

export default Search;