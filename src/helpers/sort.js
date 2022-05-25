export const sortByCreateDate = (lessons, quizzes) => {
  console.log("ENTRE");
  return [...lessons, ...quizzes].sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
};
