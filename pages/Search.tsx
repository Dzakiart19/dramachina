
import React, { useState, useEffect } from 'react';
import { apiService } from '../services/api';
import { Drama } from '../types';
import MovieCard from '../components/MovieCard';
import { Search as SearchIcon, Loader2, TrendingUp, X } from 'lucide-react';

const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Drama[]>([]);
  const [popularSearches, setPopularSearches] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    const loadInit = async () => {
      try {
        const pops = await apiService.getPopularSearch();
        setPopularSearches(pops);
      } catch (e) {
        console.error(e);
      }
    };
    loadInit();
  }, []);

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setSearched(true);
    try {
      const data = await apiService.searchDramas(query);
      setResults(data);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setLoading(false);
    }
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setSearched(false);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Search Bar */}
      <div className="max-w-3xl mx-auto mb-16">
        <h1 className="text-3xl md:text-4xl font-black text-white text-center mb-8">
          Cari drama <span className="text-blue-500">favorit</span> Anda
        </h1>
        <form onSubmit={handleSearch} className="relative">
          <input 
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari berdasarkan judul, penulis, atau kata kunci..."
            className="w-full bg-slate-900 border-2 border-slate-800 rounded-2xl py-5 px-6 pl-14 text-white focus:outline-none focus:border-blue-500 transition-all text-lg shadow-xl"
          />
          <SearchIcon className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500" size={24} />
          {query && (
            <button 
              type="button"
              onClick={clearSearch}
              className="absolute right-20 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
            >
              <X size={20} />
            </button>
          )}
          <button 
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-4 py-3 rounded-xl transition-colors"
          >
            Search
          </button>
        </form>

        {!searched && popularSearches.length > 0 && (
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="text-slate-500 flex items-center gap-1 text-sm mr-2">
              <TrendingUp size={16} /> Populer:
            </span>
            {popularSearches.slice(0, 6).map((tag, i) => (
              <button
                key={i}
                onClick={() => {
                  setQuery(tag);
                  // We need to wait for state update or pass it directly
                  const performSearch = async () => {
                    setLoading(true);
                    setSearched(true);
                    const data = await apiService.searchDramas(tag);
                    setResults(data);
                    setLoading(false);
                  };
                  performSearch();
                }}
                className="bg-slate-800/50 hover:bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm border border-slate-700 transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Results */}
      <div className="min-h-[40vh]">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="animate-spin text-blue-500 mb-4" size={48} />
            <p className="text-slate-400">Mencari di arsip drama...</p>
          </div>
        ) : searched ? (
          <div>
            <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
               <h2 className="text-2xl font-bold text-white">
                 Hasil Pencarian {query && <span>untuk "{query}"</span>}
               </h2>
               <span className="text-slate-500">{results.length} hasil ditemukan</span>
            </div>
            {results.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {results.map((drama) => (
                  <MovieCard key={drama.bookId} drama={drama} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-slate-500 text-xl">Tidak ada drama yang sesuai dengan pencarian Anda.</p>
                <button 
                  onClick={clearSearch}
                  className="mt-4 text-blue-500 hover:underline"
                >
                  Coba cari drama lain
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 opacity-40">
            <SearchIcon size={80} className="text-slate-700 mb-4" />
            <p className="text-slate-600 font-medium text-xl">Masukkan judul untuk menjelajahi koleksi kami</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
