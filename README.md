# JavaScript Code Snippets / Utility Functions


## Introduction

A collection of JavaScript utility functions for common tasks in development. These functions cover various aspects such as array manipulation, object operations, string formatting, and more. Each function is designed to be modular and reusable, providing convenience and efficiency in your code. Explore the wide range of functions to simplify your development process and enhance the functionality of your JavaScript projects.

## Table of Contents

- [Functions](#functions)
  - [Remove Duplicate Objects](#remove-duplicate-objects)
  - [Check for Array Duplicates](#check-for-array-duplicates)
  - [Add Property to Object in Array](#add-property-to-object-in-array)
  - [Add Object to Array Beginning](#add-object-to-array-beginning)
  - [Filter Array](#filter-array)
  - [Add Two Arrays](#add-two-arrays)
  - [Sum Values of Array of Objects](#sum-values-of-array-of-objects)
  - [Find Object in Array by Property](#find-object-in-array-by-property)
  - [Deep Copy an Object](#deep-copy-an-object)
  - [Sort Objects in Array by Property](#sort-objects-in-array-by-property)
  - [Remove Object from Array by Property](#remove-object-from-array-by-property)
  - [Group Objects in Array by Property](#group-objects-in-array-by-property)
  - [Convert Array of Objects to Object](#convert-array-of-objects-to-object)
  - [Capitalize First Letter of a String](#capitalize-first-letter-of-a-string)
  - [Check if Object is Empty](#check-if-object-is-empty)
  - [Convert String to Title Case](#convert-string-to-title-case)
  - [Generate Random Number within a Range](#generate-random-number-within-a-range)
  - [Remove Leading and Trailing Whitespaces from String](#remove-leading-and-trailing-whitespaces-from-string)
  - [Check if Element Exists in Array](#check-if-element-exists-in-array)
  - [Shuffle Array](#shuffle-array)
  - [Generate Unique Identifier (UUID)](#generate-unique-identifier-uuid)
  - [Truncate Text to Given Length](#truncate-text-to-given-length)
  - [Create Range of Numbers](#create-range-of-numbers)
  - [Flatten an Array](#flatten-an-array)
  - [Convert Object to Query String](#convert-object-to-query-string)
  - [Convert String to URL Slug](#convert-string-to-url-slug)
  - [Sort Array of Objects by Multiple Properties](#sort-array-of-objects-by-multiple-properties)
  - [Sum Values of Specific Key in Array of Objects](#sum-values-of-specific-key-in-array-of-objects)
  - [Convert Temperature between Celsius and Fahrenheit](#convert-temperature-between-celsius-and-fahrenheit)
  - [Deep Merge of Two Objects](#deep-merge-of-two-objects)
  - [Generate Random Password](#generate-random-password)
  - [Convert truthy falsy to boolean](#convert-truthy-falsy-to-boolean)
  - [Nested Destructuring](#nested-destructuring)

## Functions

### Remove Duplicate Objects
```javascript
const desserts = [
  { name: "Chocolate Cake", calories: 400, createdAt: "2022-09-01" },
  { name: "Ice Cream", calories: 200, createdAt: "2022-01-02" },
  { name: "Tiramisu", calories: 300, createdAt: "2021-10-03" },
  { name: "Cheesecake", calories: 600, createdAt: "2022-01-04" },
  { name: "Chocolate Cake", calories: 400, createdAt: "2022-09-01" }, // duplicate
];

const uniqueArray = (arrayData) => {
  return Array.from(new Set(arrayData.map(JSON.stringify)), JSON.parse)
}

const givenData = uniqueArray(desserts)

console.log( givenData);
```

### Check for Array Duplicates
```javascript
const hasDuplicates = (array) => {
  return new Set(array).size !== array.length;
}

const arrayWithDuplicates = [1, 2, 3, 4, 5, 3, 6];

if (hasDuplicates(arrayWithDuplicates)) {
  console.log("The array has duplicate values.");
} else {
  console.log("The array does not have any duplicate values.");
}
```

### Add Property to Object in Array
```javascript
const arrayData = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Alice" }
];
const ageArray = [10, 20, 30]

const addNewProperty = (array, property, value) => {
  return array.map((obj, index) => ({ ...obj, [property]: value[index] }));
}

console.log(addNewProperty(arrayData, "age", ageArray));
```

### Add Object to Array Beginning
```javascript
const arrayOfObjects = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Doe' }
];

const newObject = { id: 4, name: 'Mary' };
const addNewObjectToArray = (array, obj) => {
  const newArray = [...array]; 
  newArray.push(obj); 
  return newArray;
};

console.log(addNewObjectToArray(arrayOfObjects, newObject));
```

### Filter Array
```javascript
const arrayOfObjects = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Doe' }
];

const filterObjectToArray = (array, key, value) => {
  return array.filter(function (obj) {
    return obj[key] === value;
  });
}

console.log(filterObjectToArray(arrayOfObjects, 'id', 1));
```

### Add Two Arrays
```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArrays = (firstArray, secondArray) => {
  return firstArray.concat(secondArray);
}

console.log(combinedArrays(array1, array2));
```

### Sum Values of Array of Objects
```javascript
const data = [
  { id: 0, product: 'xyz', value: 10 },
  { id: 1, product: 'abc', value: 14 },
  { id: 2, product: 'def', value: 20 },
]

const addObjectValues = (data, key) => {
  return data.reduce((a, b) => a + (b[key] || 0), 0);
}

console.log(addObjectValues(data, 'value'));
```

### Find Object in Array by Property
```javascript
const data = [
  { id: 0, product: 'xyz', value: 10 },
  { id: 1, product: 'abc', value: 14 },
  { id: 2, product: 'def', value: 20 },
]

const findObjectByProperty = (array, key, value) => {
  return array.find(obj => obj[key] === value);
}

console.log(findObjectByProperty(data, 'id', 1));
```

### Deep Copy an Object
```javascript
const deepCopyObject = (obj) => {
  return JSON.parse(JSON.stringify(obj));
}

const originalObject = {
  name: 'John',
  age: 30,
  address: {
    city: 'Example City',
    country: 'Example Country'
  }
};

const copiedObject = deepCopyObject(originalObject);

// Modify the copied object without affecting the original
copiedObject.name = 'Jane';
copiedObject.address.city = 'New City';

console.log(originalObject);
console.log(copiedObject);
```

### Sort Objects in Array by Property
```javascript
const sortObjectsByProperty = (array, key) => {
  return array.sort((a, b) => a[key] - b[key]);
}

const arrayOfObjects = [
  { id: 3, name: 'Jane' },
  { id: 1, name: 'John' },
  { id: 2, name: 'Doe' }
];

const sortedArray = sortObjectsByProperty(arrayOfObjects, 'id');

console.log(sortedArray);
```

### Remove Object from Array by Property
```javascript
const removeObjectByProperty = (array, key, value) => {
  return array.filter(obj => obj[key] !== value);
}

const arrayOfObjects = [
  { id: 3, name: 'Jane' },
  { id: 1, name: 'John' },
  { id: 2, name: 'Doe' }
];

const updateArray = removeObjectByProperty(arrayOfObjects, 'id', 2);

console.log(updateArray);
```

### Group Objects in Array by Property
```javascript
const groupObjectsByProperty = (array, key) => {
  return array.reduce((acc, obj) => {
    const propertyValue = obj[key];
    acc[propertyValue] = acc[propertyValue] || [];
    acc[propertyValue].push(obj);
    return acc;
  }, {});
}

// Example Usage:
const arrayOfObjects = [
  { category: 'Fruit', name: 'Apple' },
  { category: 'Vegetable', name: 'Carrot' },
  { category: 'Fruit', name: 'Banana' },
  { category: 'Vegetable', name: 'Broccoli' },
  { category: 'Fruit', name: 'Orange' },
];

const groupedObjects = groupObjectsByProperty(arrayOfObjects, 'category');

console.log(groupedObjects);
```

### Convert Array of Objects to Object
```javascript
const arrayToObject = (array, key) => {
  return array.reduce((obj, item) => {
    obj[item[key]] = item;
    return obj;
  }, {});
}

// Example Usage:
const arrayOfObjects = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Doe' }
];

const objectByKey = arrayToObject(arrayOfObjects, 'id');

console.log(objectByKey);
```

### Capitalize First Letter of a String
```javascript
const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalizeFirstLetter('playerunknown'));
```

### Check if Object is Empty
```javascript
const isObjectEmpty = (obj) => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

// Example Usage:
const emptyObject = {};
const nonEmptyObject = { key: 'value' };

console.log(isObjectEmpty(emptyObject));        // Output: true
console.log(isObjectEmpty(nonEmptyObject));     // Output: false
```

### Convert String to Title Case
```javascript
const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

// Example Usage:
const inputString = "hello world";

const titleCaseString = toTitleCase(inputString);

console.log(titleCaseString);  // Output: Hello World
```

### Generate Random Number within a Range
```javascript
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Example Usage:
const minRange = 1;
const maxRange = 100;

const randomNumber = getRandomNumber(minRange, maxRange);

console.log(randomNumber);
```

### Remove Leading and Trailing Whitespaces from String
```javascript
const trimString = (str) => {
  return str.trim();
}

// Example Usage:
const stringWithWhitespace = "   Hello, World!   ";

const trimmedString = trimString(stringWithWhitespace);

console.log(trimmedString);  // Output: "Hello, World!"
```

### Check if Element Exists in Array
```javascript
const elementExistsInArray = (array, element) => {
  return array.includes(element);
}

// Example Usage:
const numbers = [1, 2, 3, 4, 5];
const elementToCheck1 = 3;  // Existing element
const elementToCheck2 = 6;  // Non-existing element

console.log(elementExistsInArray(numbers, elementToCheck1));  // Output: true
console.log(elementExistsInArray(numbers, elementToCheck2));  // Output: false
```

### Shuffle Array
```javascript
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
}

// Example Usage:
const arrayOfObjects = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Doe' }
];

const shuffledArray = shuffleArray(arrayOfObjects);

console.log(shuffledArray);
```

### Generate Unique Identifier (UUID)
```javascript
const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0,
      v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

console.log(generateUUID())
```

### Truncate Text to Given Length
```javascript
const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

// Example Usage:
const longText = "This is a long text that needs to be truncated.";
const shortText = "Short text.";

const truncatedLongText = truncateText(longText, 20);
const truncatedShortText = truncateText(shortText, 20);

console.log(truncatedLongText);
console.log(truncatedShortText);
```

### Create Range of Numbers
```javascript
const createNumberRange = (start, end) => {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

// Example Usage:
const numberRange = createNumberRange(1, 5);

console.log(numberRange);
```

### Flatten an Array
```javascript
const flattenArray = (array) => {
  return array.flat();
}

// Example Usage:
const nestedArray = [[1, 2, 3], [4, 5], [6, 7, 8]];

const flatArray = flattenArray(nestedArray);

console.log(flatArray);
```

### Convert Object to Query String
```javascript
const objectToQueryString = (obj) => {
  return Object.keys(obj).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`).join('&');
}

// Example Usage:
const queryParams = {
  name: 'John Doe',
  age: 30,
  city: 'Example City'
};

const queryString = objectToQueryString(queryParams);

console.log(queryString);
```

### Convert String to URL Slug
```javascript
const convertToSlug = (str) => {
  return str.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
}

// Example Usage:
const title = "Convert This String to a Slug";

const slug = convertToSlug(title);

console.log(slug);
```

### Sort Array of Objects by Multiple Properties
```javascript
const sortObjectsByProperties = (array, properties) => {
  return array.sort((a, b) => {
    for (let property of properties) {
      if (a[property] < b[property]) return -1;
      if (a[property] > b[property]) return 1;
    }
    return 0;
  });
}

// Example Usage:
const arrayOfObjects = [
  { id: 3, name: 'Jane', age: 25 },
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Doe', age: 28 }
];

const sortedArray = sortObjectsByProperties(arrayOfObjects, ['age', 'name']);

console.log(sortedArray);
```

### Sum Values of Specific Key in Array of Objects
```javascript
const sumOfArrayObjectKeys = (array, key) => {
  return array.reduce((sum, current) => sum + current[key], 0);
}

// Example Usage:
const arrayOfObjects = [
  { id: 1, name: 'John', price: 20 },
  { id: 2, name: 'Jane', price: 30 },
  { id: 3, name: 'Doe', price: 20 },
];

const total = sumOfArrayObjectKeys(arrayOfObjects, 'price');

console.log(total);  // Output: 70
```

### Convert Temperature between Celsius and Fahrenheit
```javascript
const celsiusToFahrenheit = (celsius) => {
  return celsius * 9 / 5 + 32;
}

const fahrenheitToCelsius = (fahrenheit) => {
  return (fahrenheit - 32) * 5 / 9;
}

// Example Usage:
const celsiusTemperature = 25;
const fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);

console.log(`${celsiusTemperature}°C is equal to ${fahrenheitTemperature}°F`);

const fahrenheitValue = 77;
const celsiusValue = fahrenheitToCelsius(fahrenheitValue);

console.log(`${fahrenheitValue}°F is equal to ${celsiusValue}°C`);
```

### Deep Merge of Two Objects
```javascript
const deepMerge = (target, source) => {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      if (source[key] instanceof Object && key in target) {
        deepMerge(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
}

// Example Usage:
const targetObject = {
  name: 'John',
  address: {
    city: 'Example City',
    country: 'Example Country'
  }
};

const sourceObject = {
  address: {
    country: 'Updated Country',
    zipCode: '12345'
  },
  age: 30
};

const mergedObject = deepMerge(targetObject, sourceObject);

console.log(mergedObject);
```

### Generate Random Password
```javascript
const generateRandomPassword = (length = 8) => {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

console.log(generateRandomPassword(6));
```

### Convert truthy falsy to boolean
```javascript
const convertToBoolean=(value)=> {
  return Boolean(value);
}

console.log(convertToBoolean(0));           // false
console.log(convertToBoolean(1));           // true
console.log(convertToBoolean(''));          // false
console.log(convertToBoolean('hello'));     // true
console.log(convertToBoolean(null));        // false
console.log(convertToBoolean(undefined));   // false
console.log(convertToBoolean(NaN));         // false
console.log(convertToBoolean([]));          // true
console.log(convertToBoolean({}));          // true
console.log(convertToBoolean(false));       // false
console.log(convertToBoolean(true));        // true
```

### Nested Destructuring
```javascript
const user = {
  id: 1,
  name: 'John',
  address: {
    street: '123 Main St',
    city: 'New York',
    country: 'USA'
  }
};

// Example:1
const {address:{city}}=user
console.log(city);

// Example:2
const nestedDestructuring=(obj, path, variableName) =>{
  const { [path]: nestedValue } = obj;
  const extractedValue = nestedValue[variableName];
  return extractedValue;
}

const cityName = nestedDestructuring(user, 'address', 'city');
console.log(cityName);
```

## Usage

Each utility function is designed to be self-contained, allowing you to easily copy and paste it into your JavaScript project. Explore the list of functions and integrate those that best suit your project's needs.

Feel free to customize the functions to match your specific requirements or combine them to create powerful solutions. Don't forget to check each function's individual documentation within this README for detailed usage instructions.

## Contribution

Contributions are welcome! If you have additional utility functions to share or improvements to existing ones, consider contributing to the project. Here's how you can get involved:

1. **Open an Issue:**
   - Share your ideas or report bugs by opening an issue. Provide clear details and context to help us understand your suggestion or problem.

2. **Submit a Pull Request:**
   - If you've implemented a new utility function or made improvements, submit a pull request. Ensure your changes align with the project's goals and follow the established coding standards.

3. **Provide Feedback:**
   - Your feedback is valuable! Share your thoughts on existing functions or suggest enhancements. Join discussions on open issues to contribute to the project's growth.

By contributing to this project, you help create a resource that benefits the wider community. Thank you for being a part of this collaborative effort!

**[⬆ back to top](#table-of-contents)**
