import { resetResult, getInputValue, setTextContent } from './functions.js'
import changeWord from './soal1.js'


// SOAL 1
document.querySelector('.btnChangeWord').addEventListener('click', () => {
    const result = changeWord(
      getInputValue('.selectedText'),
      getInputValue('.changedText'),
      getInputValue('.text')
    )
  
    setTextContent('.resultText', result)
  })

resetResult('.resetChangeWord', '.resetText')