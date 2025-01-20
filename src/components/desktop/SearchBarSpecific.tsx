'use client';
import { Box } from '@radix-ui/themes';
import { TextField } from '@radix-ui/themes';
import React, { ReactNode, useEffect, useState } from 'react';
import magnifyingGlass from '@/icons/magnifyingGlass.svg';
import Image from 'next/image';
import { ISearchResult } from '@/interfaces/ISearchResult';
import axios from 'axios';
import { config } from '@/config';
import { useRouter } from 'next/navigation';

type SearchBarSpecificProps = {
  children?: ReactNode;
  getSearchResults?: (searchQuery: string) => Promise<ISearchResult[]>;
};

const SearchBarSpecific: React.FC<
  SearchBarSpecificProps
> = ({}: SearchBarSpecificProps) => {
  const [results, setResults] = useState<ISearchResult[]>([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

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
    if (result.category === 'service') {
      router.push(`/issue/service/${result.id}`);
    } else {
      router.push(`/medicine/${result.id}`);
    }
  }

  const search = async (searchQuery: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${config.backendURL}/api/search?searchTerm=${searchQuery}`,
      );
      // console.log(response);
      setResults(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError('Failed to fetch places. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className={`w-[50vw] mt-2 rounded-full shadow-lg `}>
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

      <ul
        className="results-list p-2 drop-shadow-md"
        style={{
          listStyle: 'none',
          padding: '0',
          margin: '0',
          marginTop: '2vh',
          border: results.length > 0 ? '1px solid #ccc' : 'none',
          borderRadius: '5px',
          maxHeight: '200px',
          overflowY: 'auto',
          backgroundColor: 'white',
          position: 'absolute',
          width: '50vw',
          boxShadow: '-moz-initial',
        }}
      >
        {loading && <li>Loading...</li>}
        {error && <li style={{ color: 'red' }}>{error}</li>}
        {results.map((result) => (
          <li
            key={result.id}
            onClick={() => handleSelect(result)}
            style={{
              padding: '10px',
              cursor: 'pointer',
              borderBottom: '1px solid #f0f0f0',

              background: '',
              width: 'full',
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
