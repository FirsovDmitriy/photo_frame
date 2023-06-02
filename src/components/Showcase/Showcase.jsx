import React, { useEffect, useRef, useContext } from 'react'
import { Box, } from '@chakra-ui/react'
import ShowcaseCard from './Card/ShowcaseCard'
import { useInfiniteQuery } from '@tanstack/react-query'
import PhotosService from '@/services/PhotosService'
import Preloader from '../Preloader'
import Context from '@/Context'
import useObserver from '@/hooks/useObserver'
import ShowcaseGrid from './ShowcaseGrid'

const Showcase = () => {
  const { searchQuery } = useContext(Context)

  const { data, fetchNextPage, isLoading, isError, isSuccess } =
    useInfiniteQuery(
      ['photos', searchQuery],
      async ({ pageParam = 1 }) => {
        return PhotosService.getAll(pageParam, searchQuery)
      },
      {
        getNextPageParam: (lastPage, pages) => {
          return pages.length + 1
        },
      }
    )

  const nativeElement = useRef(null)

  useEffect(() => {
    useObserver(fetchNextPage, nativeElement.current)
  }, [])

  return (
    <ShowcaseGrid>
      {isLoading ? (
        <Preloader />
      ) : (
        data.pages?.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((photo) => (
              <ShowcaseCard
                item={ photo }
                key={ photo.id }
              />
            ))}
          </React.Fragment>
        ))
      )}
      <Box
        w='100%'
        h='10'
        ref={ nativeElement }
      />
    </ShowcaseGrid>
  )
}

export default Showcase
