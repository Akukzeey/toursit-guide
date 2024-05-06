'use client'
import { useRouter } from 'next/navigation';
import { useState } from "react";

export default function Navbar() {
    const [searchTerm,setSearchTerm]=useState('')
    const router = useRouter();
    const [searchError, setSearchError] = useState('');

    const handleOnChange = (e) => {
      setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!searchTerm.trim()) {
            setSearchError("Please enter a search term");
            return;
        }
        setSearchError('');
        router.push(`/search/${searchTerm}`);
    };

    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href='/'>Tour guide</a>
                <form className="d-flex" role="search" onSubmit={handleSubmit} >
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        onChange={handleOnChange}
                        value={searchTerm}
                    />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                {searchError && <div className="text-danger">{searchError}</div>}
            </div>
        </nav>
    );
}
