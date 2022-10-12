import { isErrorMessage } from './functions.js'

const checkTypeNumber = (givenNumber) => {
  isErrorMessage(true, '.resultTypeNumber')

  if (givenNumber === '') return 'ERROR: missing parameter'

  if (isNaN(givenNumber)) {
    return 'ERROR: Invalid data type'
}

isErrorMessage(false, '.resultTypeNumber')

if (givenNumber % 2 === 0) {
    return 'GENAP'
  } else {
    return 'GANJIL'
  }
}

export default checkTypeNumber