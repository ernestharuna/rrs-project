import { useState } from "react"

export default function SearchBox({ onSearch }) {

    const [query, setQuery] = useState('');
    const handleSearch = () => {
        onSearch(query)
    }
    return (
        <>
            {/* <form className="d-flex" role="search"> */}
            <div className="d-flex">
                <input className="form-control me-2 rounded-0 py-2" type="search" placeholder="Search Title or Author" aria-label="Search Title or Autho"
                    value={query} onChange={e => setQuery(e.target.value)}
                />
                <button className="btn btn-dark rounded-0 px-4 " type="submit" onClick={handleSearch}>
                    Search
                </button>
            </div>
        </>
    )
}
