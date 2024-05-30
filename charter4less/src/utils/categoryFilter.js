/* Filter function to filter categories based on the type of category 

@param {Array} categories - An array of category objects
@param {String} filterType - The type of category to filter by. Default is "all"
Returns {Array} - An array of category objects that match the filterType
*/

export default function filterCategories(categories, filterType = "all") {

  if (!Array.isArray(categories)) {
    return [];
  }

  // This is the order which the categories will be displayed if there is no filter
  const categoryOrder = [
    "tools",
    "equipment",
    "vehicles",
    "electronics",
    "apparel & accessories",
    "event & party supplies",
    "utensils",
    "spaces",
  ];

  const sortCategories = (a, b) => {
    const indexA = categoryOrder.indexOf(a.type);
    const indexB = categoryOrder.indexOf(b.type);

    if (indexA === -1) return 1;
    if (indexB === -1) return -1;

    return indexA - indexB;
  };

  if (filterType === "all") {
    return categories.sort(sortCategories);
  }

  return categories.filter((category) => category.type === filterType);
} 