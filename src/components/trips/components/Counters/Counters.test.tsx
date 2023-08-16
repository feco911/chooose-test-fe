import { screen } from "@testing-library/react";
import { render } from "../../../../test-utils";
import Counters from "./Counters";

test("renders singular day text", () => {
    render(<Counters numberOfCountries={1} numberOfDays={1} />);
    const dayTextElement = screen.getByText(/day/i);
    expect(dayTextElement).toBeInTheDocument();
    const daysTextElement = screen.queryByText(/days/i);
    expect(daysTextElement).not.toBeInTheDocument();
});

test("renders plural days text", () => {
    render(<Counters numberOfCountries={1} numberOfDays={2} />);
    const daysTextElement = screen.getByText(/days/i);
    expect(daysTextElement).toBeInTheDocument();
});

test("renders singular country text", () => {
    render(<Counters numberOfCountries={1} numberOfDays={1} />);
    const dayTextElement = screen.getByText(/country/i);
    expect(dayTextElement).toBeInTheDocument();
    const daysTextElement = screen.queryByText(/Countries/i);
    expect(daysTextElement).not.toBeInTheDocument();
});

test("renders plural Countries text", () => {
    render(<Counters numberOfCountries={2} numberOfDays={1} />);
    const daysTextElement = screen.getByText(/Countries/i);
    expect(daysTextElement).toBeInTheDocument();
});

