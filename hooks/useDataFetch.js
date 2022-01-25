import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

function useDataFetch(element) {
  const { data, error, mutate } = useSWR(`/api/${element}/find`, fetcher)
  // const { mutate } = useSWR(`/api/${element}/create`, fetcher)
  return { data, error, mutate }
}

export { useDataFetch }
