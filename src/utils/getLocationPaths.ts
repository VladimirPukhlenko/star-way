export const getLocationPaths = (pathname: string) => {
  // Split the path into parts and remove any empty parts.
  const locationArr = pathname.split("/").filter((item) => item);
  // Map each part to an object with title, path, and isActive properties.
  return locationArr.map((locData) => ({
    // Capitalize the first letter and add the rest of the path as the title.
    title: locData[0].toUpperCase() + locData.slice(1),
    // Save the path part.
    path: locData,
    // Check if it's the last part of the path to determine if it's active.
    isActive: locData === locationArr[locationArr.length - 1],
  }));
};

// const examplePathname = "/home/user/profile";
// const result = getLocationPaths(examplePathname);
// console.log(result) => :
// [
//   { "title": "Home", "path": "home", "isActive": false },
//   { "title": "User", "path": "user", "isActive": false },
//   { "title": "Profile", "path": "profile", "isActive": true }
// ]
