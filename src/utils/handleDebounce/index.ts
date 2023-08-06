const handleDebounce = (fn: () => void, time = 700) => {
    let timer = 0 as any

    console.log('timer')
    timer = setTimeout(fn, time)

    clearTimeout(timer)

    return timer
}

export default handleDebounce