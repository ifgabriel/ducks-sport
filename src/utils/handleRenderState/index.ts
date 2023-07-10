const handleRenderState = (isFetched: boolean, data: unknown, canEmpty = false) => {
  if (isFetched && data === undefined) {
    return "error"
  }

  if (isFetched && data && canEmpty) {
    return "empty"
  }

  if (isFetched && data) {
    return "view"
  }

  return 'loading'
}

export default handleRenderState