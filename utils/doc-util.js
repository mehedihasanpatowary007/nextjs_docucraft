export const getDocumentsByAuthor = (docs, author) => {
  return docs.filter(
    (doc) => encodeURIComponent(doc.author.toLowerCase()) === author.toLowerCase()
  );
};

export const getDocumentsByCategories = (docs, category) => {
  return docs.filter(
    (doc) => doc.category.toLowerCase() === category.toLowerCase()
  );
};

export const getDocumentsByTags = (docs, tag) => {
  return docs.filter((doc) => doc.tags.some((inputTag) => inputTag.toLowerCase() === tag.toLowerCase()));
};
