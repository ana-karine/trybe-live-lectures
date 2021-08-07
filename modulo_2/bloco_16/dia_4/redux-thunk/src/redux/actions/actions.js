// export function updateMeme(dataAPI) {
//   return { type:'UPDATE', data: dataAPI }
// }

function arrayMemes(resposta) {
  return { type:'UPDATE', data: resposta }
}

export function updateMeme(dataAPI) {
  return (dispatch) => {
    dataAPI.then(resposta => dispatch(arrayMemes(resposta)))
  }
}
