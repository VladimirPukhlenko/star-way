export const getLocationPaths = (pathname: string) => {
  const locationArr = pathname.split("/").filter((item) => item);
  return locationArr.map((locData) => ({
    title: locData[0].toUpperCase() + locData.slice(1),
    path: locData,
    isActive: locData === locationArr.at(-1),
  }));
};
