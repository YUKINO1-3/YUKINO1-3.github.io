import { useState } from "react";

type Algorithm = "bubble" | "insertion";
type TraceStep = { values: number[]; description: string };

const startingValues = [5, 2, 8, 1, 6];

function bubbleTrace(values: number[]): TraceStep[] {
  const working = [...values];
  const steps: TraceStep[] = [];
  for (let end = working.length - 1; end > 0; end -= 1) {
    for (let index = 0; index < end; index += 1) {
      const description = `Comparing positions ${index + 1} and ${index + 2}`;
      if (working[index] > working[index + 1]) {
        [working[index], working[index + 1]] = [
          working[index + 1],
          working[index],
        ];
      }
      steps.push({ values: [...working], description });
    }
  }
  return steps;
}

function insertionTrace(values: number[]): TraceStep[] {
  const working = [...values];
  const steps: TraceStep[] = [];
  for (let index = 1; index < working.length; index += 1) {
    const candidate = working[index];
    let position = index;
    while (position > 0) {
      const description = `Comparing ${working[position - 1]} with ${candidate}`;
      if (working[position - 1] <= candidate) {
        steps.push({ values: [...working], description });
        break;
      }
      working[position] = working[position - 1];
      position -= 1;
      working[position] = candidate;
      steps.push({ values: [...working], description });
    }
  }
  return steps;
}

const traces: Record<Algorithm, TraceStep[]> = {
  bubble: bubbleTrace(startingValues),
  insertion: insertionTrace(startingValues),
};

export default function SortingBars() {
  const [algorithm, setAlgorithm] = useState<Algorithm>("bubble");
  const [step, setStep] = useState(0);
  const trace = traces[algorithm];
  const current =
    step === 0
      ? { values: startingValues, description: "Ready to sort" }
      : trace[step - 1];

  return (
    <section
      className="sorting-demo"
      aria-label="Sorting algorithm demonstration"
    >
      <label>
        Algorithm
        <select
          value={algorithm}
          onChange={(event) => {
            setAlgorithm(event.target.value as Algorithm);
            setStep(0);
          }}
        >
          <option value="bubble">Bubble sort</option>
          <option value="insertion">Insertion sort</option>
        </select>
      </label>
      <p aria-live="polite">
        Step {step} of {trace.length}
      </p>
      <p>{current.description}</p>
      <div className="sorting-bars">
        {current.values.map((value, index) => (
          <span key={index} style={{ height: `${value * 1.5}rem` }}>
            <span className="visually-hidden">
              Position {index + 1}: {value}
            </span>
          </span>
        ))}
      </div>
      <div className="sorting-controls">
        <button
          type="button"
          disabled={step === 0}
          onClick={() => setStep(step - 1)}
        >
          Previous step
        </button>
        <button
          type="button"
          disabled={step === trace.length}
          onClick={() => setStep(step + 1)}
        >
          Next step
        </button>
        <button type="button" onClick={() => setStep(0)}>
          Reset
        </button>
      </div>
    </section>
  );
}
