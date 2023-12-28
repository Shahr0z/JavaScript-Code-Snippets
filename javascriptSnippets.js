
    // Remove duplicate items from array
    const uniqueArray = ( arrayData ) => {
        return Array.from(new Set(arrayData.map(JSON.stringify)), JSON.parse)
    }

    // Check if Array Contains Duplicates
    const hasDuplicates = (array) => {
        return new Set(array).size !== array.length;
    }

    // Add New Property in Object Array 
    const addNewProperty = (array, property, value) => {
        return array.map((obj, index) => ({ ...obj, [property]: value[index] }));
    }

    //Add new object to array
    const addNewObjectToArray = (array,obj) => {
        const newArray = [...array];
        newArray.push(obj); 
        return newArray;
    }

    // Filter object by key
    const filterObjectToArray = (array, key, value) => {
        return array.filter(function (obj) {
            return obj[key] === value;
        });
    }

    //Add two Arrays
    const concatArrays = (firstArray, secondArray) => {
        return firstArray.concat(secondArray);
    }

    // Add values of the array of objects
    const addObjectValues = (data, key) => {
        return data.reduce((a, b) => a + (b[key] || 0), 0);
    }

    // Find object by id from array of objects
    const findObjectByProperty = (array, key, value) => {
        return array.find(obj => obj[key] === value);
    }

    // Deep Copy an Object
    const deepCopyObject = (obj) => {
        return JSON.parse(JSON.stringify(obj));
    }

    //Sort Objects in Array by Property
    const sortObjectsByProperty = (array, key) => {
        return array.sort((a, b) => a[key] - b[key]);
    }

    //Remove Object from Array by Property
    const removeObjectByProperty = (array, key, value) => {
        return array.filter(obj => obj[key] !== value);
    }

    // Group Objects in Array by Property
    const groupObjectsByProperty = (array, key) => {
        return array.reduce((acc, obj) => {
          const propertyValue = obj[key];
          acc[propertyValue] = acc[propertyValue] || [];
          acc[propertyValue].push(obj);
          return acc;
        }, {});
    }

    // Convert Array of Objects to Object
    const arrayToObject = (array, key) => {
        return array.reduce((obj, item) => {
          obj[item[key]] = item;
          return obj;
        }, {});
    }

    // Capitalize the First Letter of a String
    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // Check if Object is Empty
    const isObjectEmpty = (obj) => {
        return Object.keys(obj).length === 0 && obj.constructor === Object;
    }

    // Convert String to Title Case
    const toTitleCase = (str) => {
        return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    }

    // Generate Random Number within a Range
    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // Remove Leading and Trailing Whitespaces from String
    const trimString = (str) => {
        return str.trim();
    }

    // Check if Element Exists in Array
    const elementExistsInArray = (array, element) => {
        return array.includes(element);
    }

    // Shuffle Array
    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    }

    // Generate a Unique Identifier (UUID)
    const generateUUID = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0,
                v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    // Truncate Text to a Given Length
    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    }

    // Create a Range of Numbers
    const createNumberRange = (start, end) => {
        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    }

    // Flatten an Array (Convert Nested Array to a Flat Array)
    const flattenArray = (array) => {
      return array.flat();
    }

    // Convert Object to Query String
    const objectToQueryString = (obj) => {
      return Object.keys(obj).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`).join('&');
    }

    // Convert a String to a URL Slug
    const convertToSlug = (str) => {
      return str.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    }

    // Used to sort an array of objects based on multiple properties
    const sortObjectsByProperties = (array, properties) => {
        return array.sort((a, b) => {
            for (let property of properties) {
                if (a[property] < b[property]) return -1;
                if (a[property] > b[property]) return 1;
            }
            return 0;
        });
    }

    // Summing up the values of a specific key in an array of objects
    const sumOfArrayObjectKeys = (array, key) => {
      return array.reduce((sum, current) => sum + current[key], 0);
    }

    // Convert Temperature between Celsius and Fahrenheit
    const celsiusToFahrenheit = (celsius) => {
      return celsius * 9 / 5 + 32;
    }

    const fahrenheitToCelsius = (fahrenheit) => {
      return (fahrenheit - 32) * 5 / 9;
    }

    // Deep Merge of Two Objects
    const deepMergeTwoObjects = (target, source) => {
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

    // Generate a Random Password
    const generateRandomPassword = (length = 8) => {
      const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let password = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
      }
      return password;
    }
