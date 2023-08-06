import { useCallback } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const Breadcrumb = () => {
    const location = useLocation()
    const [searchParams] = useSearchParams()

    const getAllSearchParams = useCallback(() => {
        const params = []

        for (const [param, value] of searchParams.entries()) {
            params.push({ name: param, value: value })
        }

        return params.reverse()

    }, [searchParams])


    return (
        <ul className="container mx-auto flex items-center py-4 overflow-x-auto whitespace-nowrap">
            {getAllSearchParams().map((param, index) => (
                <li key={index}>
                    {index > 0 && <span className="mx-5 text-gray-500">/</span>}
                    <Link
                        to={{ pathname: location.pathname, search: `?${param.name}=${param.value}` }}
                        className="text-gray-600 hover:underline"
                    >
                        {param.value}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default Breadcrumb