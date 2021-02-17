export const documentCreateRangeFix = () => {
  // @ts-ignore
  global.document.createRange = () => ({
    setStart: () => {},
    setEnd: () => {},
    commonAncestorContainer: {
      nodeName: 'BODY',
      ownerDocument: document,
    },
  })
}

export function responseMock({
  data = undefined,
  status = 200,
  statusText = 'OK',
  headers = {},
  config = {},
}: {
  data?: any
  status?: number
  statusText?: string
  headers?: any
  config?: any
}) {
  return {
    data,
    status,
    statusText,
    headers,
    config,
  }
}
