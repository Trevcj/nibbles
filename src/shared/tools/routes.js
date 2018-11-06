import Homepage from '../components/homepage/Homepage'
import Flow from '../components/quoteFlo/flow'
import { fetchQuoteFlo } from './quoteFloAPI'

const routes =  [
  {
    path: '/',
    exact: true,
    component: Homepage,
  },
  {
    path: '/flow/:id',
    component: Flow,
    fetchInitialData: (path = '') => fetchQuoteFlo(path.split('/').pop())
  }
  // {
  //   path: '/popular/:id',
  //   component: Grid,
  //   fetchInitialData: (path = '') => fetchRatings(path.split('/').pop())
  // }
]

export default routes