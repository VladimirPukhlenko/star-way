// Function to join location data with specified separator
const joiner = (locData: string, separator: string = "-") => {
  let path = "";

  // Splitting the location data into an array based on the separator
  const locDataArr = locData.split(separator);

  // Checking if the location data contains a separator
  if (locDataArr.length > 1) {
    // Capitalizing the first part of the location data
    const firstPart = locDataArr[0][0].toUpperCase() + locDataArr[0].slice(1);

    // Joining the parts together with spaces
    path = firstPart + " " + locDataArr.slice(1).join(" ");
  } else {
    // Capitalizing the first letter of the location data name
    path = locData[0].toUpperCase() + locData.slice(1);
  }

  return path;
};

// Function to get location paths from a pathname
export const getLocationPaths = (pathname: string, separator: string = "-") => {
  // Splitting the pathname into an array based on '/'
  const locationArr = pathname.split("/").filter((item) => item);

  // Mapping each location data to an object containing title, path, and isActive properties
  return locationArr.map((locData) => ({
    // Getting the title by calling the joiner function
    title: joiner(locData, separator),
    // Keeping the original path
    path: locData,
    // Checking if the current location data matches the last part of the pathname
    isActive: locData === locationArr[locationArr.length - 1],
  }));
};

// const examplePathname1 = "/home/favorite-user/my-favorire-profile";
// const result1 = getLocationPaths(examplePathname1);
// console.log(result1) => :
// [
//   { title: 'Home', path: 'home', isActive: false },
//   { title: 'Favorite user', path: 'favorite-user', isActive: false },
//   {
//     title: 'My favorire profile',
//     path: 'my-favorire-profile',
//     isActive: true
//   }
// ]

// ----------------------------------------------------------

// const examplePathname2 = "/home/user/profile";
// const result2 = getLocationPaths(examplePathname2);
// console.log(result2) => :
// [
//   { title: 'Home', path: 'home', isActive: false },
//   { title: 'User', path: 'user', isActive: false },
//   { title: 'Profile', path: 'profile', isActive: true }
// ]
