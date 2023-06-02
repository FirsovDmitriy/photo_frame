import { useEffect, useState } from 'react'
import Layout from '@/components/Layout/Layout'
import { IconContext } from 'react-icons'
import Showcase from './components/Showcase/Showcase'
import Context from '@/Context'
import ShowcaseHome from '@/components/Showcase/ShowcaseHome'

const App = () => {

  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchQuery = queryString => setSearchQuery(queryString)

  const contextValue = {
    searchQuery,
    handleSearchQuery
  }

  return (
    <IconContext.Provider value={{ size: '20px' }}>
      <Context.Provider value={ contextValue }>
        <Layout>
          {searchQuery != '' ? (
            <Showcase />
          ) : (
            <ShowcaseHome />
          )}
          
        </Layout>
      </Context.Provider>
    </IconContext.Provider>
  )
}

export default App
