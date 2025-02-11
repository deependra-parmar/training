// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(obj) {
    let result = {};
  
    for (const key in obj) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        if (Array.isArray(obj[key])) {
          obj[key].forEach((item, index) => {
            const temp = flatten(item);
            for (const nestedKey in temp) {
              result[`${key}.${index}.${nestedKey}`] = temp[nestedKey];
            }
          });
        } else {
          const temp = flatten(obj[key]);
          for (const nestedKey in temp) {
            result[`${key}.${nestedKey}`] = temp[nestedKey];
          }
        }
      } else {
        result[key] = obj[key];
      }
    }
  
    return result;
  }