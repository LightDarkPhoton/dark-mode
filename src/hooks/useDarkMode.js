
// Might need to change this to {useLocalStorage} depending on how we originally exported. Have to test and see.
import useLocalStorage from './useLocalStorage'

const useDarkMode = (initialValue) => {
    const [someValue, setSomeValue] = useLocalStorage('Any key works here', initialValue)

    return [someValue, setSomeValue]

}

export default useDarkMode;

// Yep.