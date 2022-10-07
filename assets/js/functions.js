// function for styling result
const isErrorMessage = (isError, query) => {
    const result = document.querySelector(query)
  
    if (isError) {
      result.style.color = 'red'
    } else {
      result.style.color = 'lightgreen'
    }
  }
  
  // function for reset result
  const resetResult = (btnQuery, resultQuery) => {
    document.querySelector(btnQuery).addEventListener('click', () => {
      document.querySelector(resultQuery).textContent = null
    })
  }
  
  // function to get input value
  const getInputValue = (query) => {
    return document.querySelector(query).value
  }
  
  // function to set text content
  const setTextContent = (query, content) => {
    document.querySelector(query).textContent = content
    console.log('result', content)
  }

export { isErrorMessage, resetResult, getInputValue, setTextContent, }