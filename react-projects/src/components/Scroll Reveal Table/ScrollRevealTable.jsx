import RevealTable from "./RevealTable";

const ScrollRevealTable = () => {
  const sampleData = Array.from({ length: 50 }).map((_, i) => ({
    id: i + 1,
    name: `Employee ${i + 1}`,
    email: `employee${i + 1}@company.com`,
  }));

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 p-10">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        Scroll Reveal Table
      </h1>
      <RevealTable data={sampleData} />
    </div>
  );
}

export default ScrollRevealTable