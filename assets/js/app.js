import { resetResult, getInputValue, setTextContent } from './functions.js'
import changeWord from './soal1.js'
import checkTypeNumber from './soal2.js'


// SOAL 1
document.querySelector('.btnChangeWord').addEventListener('click', () => {
    const result = changeWord(
      getInputValue('.selectedText'),
      getInputValue('.changedText'),
      getInputValue('.text')
    )
  
    setTextContent('.resultText', result)
  })

//SOAL 2
document.querySelector('.btnCheckTypeNumber').addEventListener('click', () => {
  const result = checkTypeNumber(getInputValue('.givenNumber'))
  setTextContent('.resultTypeNumber', result)
})

resetResult('.resetChangeWord', '.resetText')
resetResult('.resetCheckTypeNumber', '.resultTypeNumber')