const injectGatsbyImageIntoPosts = (posts, imageSmall, imageTall) => {
  return posts.map((post) => {
    return { ...post, imageSmall: imageSmall, imageTall: imageTall };
  });
};

export const injectGatsbyImageIntoRows = (rows, imageSmall, imageTall) => {
  return rows.map((row) => {
    return row.map((post) => {
      return { ...post, imageSmall: imageSmall, imageTall: imageTall };
    });
  });
};

export default injectGatsbyImageIntoPosts;
