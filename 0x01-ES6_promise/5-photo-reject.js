/**
 * uploadPhoto - a defnintely failing function
 * @fileName(string): filename of photo
 * returns: a rejected promise with a message
 */
export default function uploadPhoto(fileName) {
  return new Promise((_, reject) => reject(
    new Error(`${fileName} cannot be processed`),
  ));
}
