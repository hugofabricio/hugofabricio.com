import { useRouter } from 'next/router'

const usePagination = () => {
  const router = useRouter()

  const handler = (page: any) => {
    const currentPath = router.pathname
    const currentQuery = router.query

    currentQuery.page = page.selected + 1

    router.push({ pathname: currentPath, query: currentQuery })
  }

  return { handler }
}

export default usePagination
