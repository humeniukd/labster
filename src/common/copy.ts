export const copyToClipboard = (text: string) => {
  const textArea = document.createElement('textarea')
  textArea.style.position = 'fixed'
  textArea.style.top = '0'
  textArea.style.left = '0'
  textArea.style.width = '2em'
  textArea.style.height = '2em'
  textArea.style.padding = '0'
  textArea.style.border = 'none'
  textArea.style.outline = 'none'
  textArea.style.boxShadow = 'none'
  textArea.style.background = 'transparent'
  textArea.value = text

  document.body.appendChild(textArea)
  textArea.select()

  try {
    document.execCommand('copy')
  } catch (err) {
    console.info('Oops, unable to copy')
  }

  document.body.removeChild(textArea)
}
