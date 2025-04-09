
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import About from "../components/About"; // ✅ default import

test("it is exported as a default export", () => {
  expect(() => render(<About />)).not.toThrow();
});

