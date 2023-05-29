import { useState } from 'react'
import Layout from '@/components/Layout/Layout'
import { IconContext } from 'react-icons'
import Showcase from './components/Showcase/Showcase'
import Context from '@/Context'
import ShowcaseHome from '@/components/Showcase/ShowcaseHome'

const App = () => {
  const [searchQuery, setSearchQuery] = useState('')
  console.log(typeof(searchQuery))

  const search = queryString => setSearchQuery(queryString)

  const contextValue = {
    searchQuery,
    search
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
