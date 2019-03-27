


/**
 *Mutably deletes an element from a list if it has an 'id' property
 *
 * @param {*} arr
 * @param {*} id
 * @returns arr
 */
export const deleteElementFromArrayById = (arr, id) => {
  return arr.splice(arr.findIndex(function (i) {
    return i.id === id;
  }), 1)
}
