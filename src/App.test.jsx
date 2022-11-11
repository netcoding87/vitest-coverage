import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import App from "./App";

it('should render heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', {name: /Vite \+ React/}))
})