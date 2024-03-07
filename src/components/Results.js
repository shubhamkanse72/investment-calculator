import { calculateInvestmentResults } from "../util/investment.js";

export default function Results({ input }) {
  const resultData = calculateInvestmentResults(input);
  return <p>Results...</p>;
}
