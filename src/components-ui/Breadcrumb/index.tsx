import { useCallback } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

type Params = {
  name: string
  value: string
}

const Breadcrumb = () => {
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()

  const getAllSearchParams = useCallback(() => {
    const params = []

    for (const [param, value] of searchParams.entries()) {
      if (value) {
        params.push({ name: param, value })
      }
    }

    return params.reverse()
  }, [searchParams])

  return (
    <ul className="container mx-auto flex items-center py-4 overflow-x-auto whitespace-nowrap">
      {getAllSearchParams().map((param, index) => (
        <li key={index} className='flex items-center text-gray-600'>
          {index > 0 && <span className="mx-5 text-gray-400">/</span>}
          <div className='bg-white rounded flex gap-4 items-center justify-center px-4 py-1'>
            <Link
              to={{
                pathname: location.pathname,
                search: `?${param.name}=${param.value}`,
              }}
              className="text-gray-600 hover:text-orange-500"
            >
              {param.value}
            </Link>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Breadcrumb
