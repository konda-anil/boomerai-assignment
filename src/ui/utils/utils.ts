export const getProgressClassName = (score: number) => {
    if (score <= 3.4) return "green";
    if (score <= 6.9) return "yellow";
    return "red";
};