'use client';
import { Box } from '@radix-ui/themes';
import { TextField } from '@radix-ui/themes';
import React, { ReactNode, useEffect, useState } from 'react';
// import { Magnifying } from '@radix-ui/react-icons'
import magnifyingGlass from '@/icons/magnifyingGlass.svg';
import Image from 'next/image';
import { useAppSelector } from '@/lib/hooks';
import { ISearchResult } from '@/interfaces/ISearchResult';
import { config } from '@/config';
import axios from 'axios';

type SearchBarProps = {
  children?: ReactNode;
  visibility?: boolean;
  width?: string;
};

const SearchBar: React.FC<SearchBarProps> = ({ visibility }) => {
  const searchBarVisibility = useAppSelector(
    (state) => state.searchBarVisibility,
  );
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ISearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }
    const timeoutId = setTimeout(() => {
      search(query);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [query]);

  const search = async (query: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${config.backendURL}/api/search?searchTerm=${query}`,
      );
      setResults(response.data);
      // console.log(response);
    } catch (err: unknown) {
      console.log(err);
      setError('Failed to fetch place details. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  async function handleSelect(result: ISearchResult) {
    console.log(result);
  }
  return (
    <>
      <Box
        display={searchBarVisibility || visibility ? 'block' : 'none'}
        className={`  mt-2 rounded-full shadow-lg m-auto ${visibility ? 'w-[94vw]' : ''}`}
      >
        <TextField.Root
          radius="full"
          className={` h-9 rounded-full font-poppins`}
          size="3"
          placeholder="Search for Medicine"
          onChange={(e) => setQuery(e.target.value)}
        >
          <TextField.Slot className="">
            <Image src={magnifyingGlass} alt="search"></Image>
          </TextField.Slot>
        </TextField.Root>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <ul
          className="results-list p-2"
          style={{
            listStyle: 'none',
            zIndex: '10',
            padding: '0',
            margin: '0',
            marginTop: '1rem',
            border: results.length > 0 ? '1px solid #ccc' : 'none',
            borderRadius: '5px',
            maxHeight: '200px',
            overflowY: 'auto',
            backgroundColor: 'white',
            position: 'absolute',
            width: '94vw',
          }}
        >
          {results.map((result) => (
            <li
              key={result.id}
              onClick={() => handleSelect(result)}
              style={{
                padding: '10px',
                cursor: 'pointer',
                borderBottom: '1px solid #f0f0f0',
              }}
            >
              {result.name}
            </li>
          ))}
        </ul>
      </Box>
    </>
  );
};
export default SearchBar;
