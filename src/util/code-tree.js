/**
 * @param codes
 * @returns {Array}
 */
const buildTree = codes => {
  const codesCopy = [...codes];
  codesCopy.forEach(code => {
    code.children = codesCopy.filter(filterCode=>filterCode.parentId === code.id);
  });

  return codesCopy.filter(code=>code.parentId == null);
};

export default buildTree;