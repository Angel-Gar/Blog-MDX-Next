const isNumber = (value: string) => !/^\d+$/.test(value);



export const getPagination = <T>(items: T[], postsPerPage = 2, currentPage: string = "1") => {

  if (!isNumber) {
    throw new Error("Not a number");
  }

  const currentPageInt = parseInt(currentPage, 10);
  const totalPosts = items.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

    if (currentPageInt > totalPages) {
    throw new Error(`Page ${currentPageInt} doesn't exists`);
  }

  const offset = (currentPageInt - 1) * postsPerPage;
  const currentPosts = items.slice(offset, offset + postsPerPage);

  return {
    currentPosts,
    totalPages
  };
};
