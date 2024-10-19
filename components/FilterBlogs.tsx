import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { X } from 'lucide-react'
import { FilterDropdown } from './FilterDropdown'

type FilterType = 'contentType' | 'resourceType' | 'keywords' | 'website' | 'pdf' | 'youtube' | 'docs'

interface FilterBlogsProps {
  contentTypeFilter: string[]
  resourceTypeFilter: string[]
  keywordsFilter: string[]
  websiteFilter: string[]
  pdfFilter: string[]
  youtubeFilter: string[]
  docsFilter: string[]
  handleFilterChange: (filterType: FilterType, value: string) => void
  clearAllFilters: () => void
}

export const FilterBlogs: React.FC<FilterBlogsProps> = ({
  contentTypeFilter,
  resourceTypeFilter,
  keywordsFilter,
  websiteFilter,
  pdfFilter,
  youtubeFilter,
  docsFilter,
  handleFilterChange,
  clearAllFilters
}) => {
  const [showClearAll, setShowClearAll] = useState(false)

  useEffect(() => {
    const hasActiveFilters = [
      contentTypeFilter,
      resourceTypeFilter,
      keywordsFilter,
      websiteFilter,
      pdfFilter,
      youtubeFilter,
      docsFilter
    ].some(filter => filter.length > 0)

    setShowClearAll(hasActiveFilters)
  }, [contentTypeFilter, resourceTypeFilter, keywordsFilter, websiteFilter, pdfFilter, youtubeFilter, docsFilter])

  const handleClearAll = () => {
    clearAllFilters()
    setShowClearAll(false)
  }

  return (
    <div className="p-4 border-t">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Filter Blogs</h3>
        {showClearAll && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClearAll}
            className="text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200 ease-in-out"
          >
            <X className="mr-1 h-4 w-4" />
            Clear All
          </Button>
        )}
      </div>
      <div className="space-y-2">
        <FilterDropdown
          title="Content Type"
          options={['Technology', 'Productivity', 'Lifestyle']}
          selected={contentTypeFilter}
          onSelect={(value) => handleFilterChange('contentType', value)}
          onRemove={(value) => handleFilterChange('contentType', value)}
        />
        <FilterDropdown
          title="Resource Type"
          options={['Website', 'PDF', 'YouTube', 'Docs']}
          selected={resourceTypeFilter}
          onSelect={(value) => handleFilterChange('resourceType', value)}
          onRemove={(value) => handleFilterChange('resourceType', value)}
        />
        <FilterDropdown
          title="Keywords"
          options={['AI', 'Machine Learning', 'Web Development', 'Data Science']}
          selected={keywordsFilter}
          onSelect={(value) => handleFilterChange('keywords', value)}
          onRemove={(value) => handleFilterChange('keywords', value)}
        />
        <FilterDropdown
          title="Select Website"
          options={['Website 1', 'Website 2', 'Website 3']}
          selected={websiteFilter}
          onSelect={(value) => handleFilterChange('website', value)}
          onRemove={(value) => handleFilterChange('website', value)}
          visible={resourceTypeFilter.includes('Website')}
        />
        <FilterDropdown
          title="Select PDFs"
          options={['PDF 1', 'PDF 2', 'PDF 3']}
          selected={pdfFilter}
          onSelect={(value) => handleFilterChange('pdf', value)}
          onRemove={(value) => handleFilterChange('pdf', value)}
          visible={resourceTypeFilter.includes('PDF')}
        />
        <FilterDropdown
          title="Select YouTube Links"
          options={['YouTube 1', 'YouTube 2', 'YouTube 3']}
          selected={youtubeFilter}
          onSelect={(value) => handleFilterChange('youtube', value)}
          onRemove={(value) => handleFilterChange('youtube', value)}
          visible={resourceTypeFilter.includes('YouTube')}
        />
        <FilterDropdown
          title="Select Google Docs"
          options={['Doc 1', 'Doc 2', 'Doc 3']}
          selected={docsFilter}
          onSelect={(value) => handleFilterChange('docs', value)}
          onRemove={(value) => handleFilterChange('docs', value)}
          visible={resourceTypeFilter.includes('Docs')}
        />
      </div>
    </div>
  )
}
