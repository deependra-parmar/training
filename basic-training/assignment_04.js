// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format

function unflatten(obj) {
  let result = {};

  for (const key in obj) {
    const keys = key.split(".");
    let temp = result;

    keys.forEach((part, index) => {
      if (!temp[part]) {
        temp[part] = isNaN(keys[index + 1]) ? {} : [];
      }

      if (index === keys.length - 1) {
        temp[part] = obj[key];
      }

      temp = temp[part];
    });
  }

  return result;
}
