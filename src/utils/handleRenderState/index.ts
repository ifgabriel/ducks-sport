const handleRenderState = (
  called: boolean,
  data: unknown,
  canEmpty = false,
) => {
  if (called && data === undefined) {
    return 'error'
  }

  if (called && data && canEmpty) {
    return 'empty'
  }

  if (called && data) {
    return 'view'
  }

  return 'loading'
}

export default handleRenderState
