'use client';
import { Box } from '@radix-ui/themes';
import { TextField } from '@radix-ui/themes';
import React, { ReactNode, useEffect, useState } from 'react';
import magnifyingGlass from '@/icons/magnifyingGlass.svg';
import Image from 'next/image';
import { ISearchResult } from '@/interfaces/ISearchResult';

type SearchBarSpecificProps = {
  children?: ReactNode;
  getSearchResults: (searchQuery: string) => Promise<ISearchResult[]>;
  handleRedirect: (result: ISearchResult) => void;
};

const SearchBarSpecific: React.FC<SearchBarSpecificProps> = ({
  getSearchResults,
}: SearchBarSpecificProps) => {
  const [results, setResults] = useState<ISearchResult[]>([]);
  const [query, setQuery] = useState('');
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

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
    setQuery(e.target.value);
  }

  async function handleSelect(result: ISearchResult) {
    console.log(result);
  }

  const search = async (searchQuery: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await getSearchResults(searchQuery);
      setResults(response || []);
    } catch (err) {
      console.log(err);
      setError('Failed to fetch places. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className={`w-[90vw] mt-2 rounded-full shadow-lg m-auto`}>
      <TextField.Root
        radius="full"
        className="w-full h-9 rounded-full font-poppins"
        size="3"
        placeholder="Search"
        onChange={handleChange}
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
          padding: '0',
          margin: '0',
          border: results.length > 0 ? '1px solid #ccc' : 'none',
          borderRadius: '5px',
          maxHeight: '200px',
          overflowY: 'auto',
          backgroundColor: 'white',
        }}
      >
        {results.map((result) => (
          <li
            key={result._id}
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
  );
};
export default SearchBarSpecific;
