'use client'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { FiSearch, FiX } from 'react-icons/fi'

const Searchbar = () => {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)
  const [recentSearches, setRecentSearches] = useState([])
  const inputRef = useRef(null)

  // Load recent searches from localStorage on component mount
  useEffect(() => {
    const savedSearches = localStorage.getItem('recentSearches')
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches))
    }
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (!query.trim()) return

    // Add to recent searches
    const updatedSearches = [
      query, 
      ...recentSearches.filter(item => item !== query)
    ].slice(0, 5) // Keep only 5 most recent
    
    setRecentSearches(updatedSearches)
    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches))
    
    router.push(`/list?name=${encodeURIComponent(query)}`)
  }

  const clearSearch = () => {
    setQuery('')
    inputRef.current?.focus()
  }

  const handleRecentSearchClick = (searchTerm) => {
    setQuery(searchTerm)
    router.push(`/list?name=${encodeURIComponent(searchTerm)}`)
  }

  const clearRecentSearches = () => {
    setRecentSearches([])
    localStorage.removeItem('recentSearches')
  }

  return (
    <div className="relative flex-1 max-w-2xl">
      <form
        className={`flex items-center gap-2 bg-white dark:bg-gray-800 p-2 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 ${isExpanded ? 'shadow-md' : ''}`}
        onSubmit={handleSearch}
      >
        <button 
          type="submit" 
          className="p-2 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          aria-label="Search"
        >
          <FiSearch className="w-5 h-5" />
        </button>
        
        <input
          ref={inputRef}
          type="text"
          name="name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          className="flex-1 bg-transparent outline-none text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
          onFocus={() => setIsExpanded(true)}
          onBlur={() => setTimeout(() => setIsExpanded(false), 200)}
        />
        
        {query && (
          <button
            type="button"
            onClick={clearSearch}
            className="p-1 text-gray-400 hover:text-red-500 transition-colors"
            aria-label="Clear search"
          >
            <FiX className="w-4 h-4" />
          </button>
        )}
      </form>

      {/* Recent searches dropdown */}
      {isExpanded && recentSearches.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden z-50 animate-fadeIn">
          <div className="p-3 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Recent searches</h3>
            <button
              onClick={clearRecentSearches}
              className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
            >
              Clear all
            </button>
          </div>
          
          <div className="py-2">
            {recentSearches.map((search, index) => (
              <button
                key={index}
                onClick={() => handleRecentSearchClick(search)}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
              >
                <FiSearch className="w-4 h-4 text-gray-400" />
                <span className="text-gray-700 dark:text-gray-300">{search}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Popular suggestions */}
      {isExpanded && query.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden z-50 animate-fadeIn">
          <div className="p-3 border-b border-gray-100 dark:border-gray-700">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Popular searches</h3>
          </div>
          
          <div className="py-2">
            {['T-Shirts', 'Shoes', 'Jackets', 'Accessories', 'Workout Gear'].map((item, index) => (
              <button
                key={index}
                onClick={() => handleRecentSearchClick(item)}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Searchbar