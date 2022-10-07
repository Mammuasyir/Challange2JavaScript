import {isErrorMessage} from './functions.js'

const changeWord = (selectedText, changedText, text) => {
    isErrorMessage(true, '.resultText')

    if (selectedText === '' || changedText === '' || text === '')
    return 'ERROR: missing parameter'
    
    if (!text.includes(selectedText)){
    return 'ERROR: selected text not found'
    }

    isErrorMessage(false, '.resultText')

    return text.replace(selectedText, changedText)
}

export default changeWord