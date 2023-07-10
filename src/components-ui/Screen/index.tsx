import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface ComponentProps {
  onParams: (params: any) => void
  children: any
}

const Screen = ({ onParams, children }: ComponentProps) => {
  const params = useParams()

  useEffect(() => onParams?.(params), [params])

  return children
}


export default Screen;
