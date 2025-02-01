export const getYears = (from: number = 2015) => {
  const currentYear = new Date().getFullYear();
  return Array.from({ length: currentYear - from - 1 }, (_, i) =>
    String(from + i)
  );
};
