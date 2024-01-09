import SearchBox from "../ui/SearchBox";
import axiosClient from "../interceptor";
import { useState } from "react";

export default function Home() {
    const [results, setResults] = useState([])

    const handleSearch = async (query) => {
        console.log('Search query:', query);
        await axiosClient.get(`/posts?_limit=10&q=${query}`)
            .then((res) => {
                setResults(res.data)
            })
            .catch(() => alert('Something went wrong!'))
    }

    return (
        <div className="container">
            <div className="mt-5">
                <h1 className="font-monospace">Search Repository</h1>
                <SearchBox onSearch={handleSearch} />

                <div className="mt-3">
                    <hr className="mt-4" />
                    <>
                        {results.length > 0 ?
                            (<section>
                                <h2 className="fs-5 text-secondary">Search results</h2>
                                {results.map((result) => (
                                    <div key={result.id} className="p-2 border shadow-sm rounded-1 mb-2">
                                        <p className="m-0 fw-semibold text-secondary">Title</p>
                                        <span className="fw-bold m-0">
                                            {result.title}
                                        </span>
                                    </div>
                                ))}
                            </section>) :
                            (<>
                                <p className="font-monospace fst-italics">
                                    Search result is empty <br />
                                    <span className="text-secondary">
                                        Try searching weird words like "et", "est" . . .  :)
                                    </span>
                                </p>
                            </>)
                        }
                    </>
                </div>
            </div>
        </div>
    )
}
