import React, { useEffect, useRef } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { Box } from '@chakra-ui/react'
import PhotosService from '@/services/PhotosService'
import ShowcaseGrid from './ShowcaseGrid'
import ShowcaseCard from './Card/ShowcaseCard'
import Preloader from '@/components/Preloader'
import useObserver from '@/hooks/useObserver'

const ShowcaseHome = () => {
  const { data, isLoading, isError, isSuccess, fetchNextPage } = useInfiniteQuery(
    ['startPhoto'],
    async ({ pageParam = 1 }) => {
      return PhotosService.start(pageParam)
    },
    {
      getNextPageParam: (lastPage, pages) => {
        return pages.length + 1
      },
    }
  )
  if(isSuccess) console.log('Data', data)

  const nativeElement = useRef(null)

  useEffect(() => {
    useObserver(fetchNextPage, nativeElement.current)
  }, [])

  return (
    <ShowcaseGrid>
      {isLoading ? (
        <Preloader />
      ) : (
        data.pages.map((page, index) => (
          <React.Fragment key={index}>

            {page.map(photo => (
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

export default ShowcaseHome
