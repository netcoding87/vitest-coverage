import { render, screen } from "@testing-library/react";
import { Component } from "./Component";

it('should not render content', () => {
    render(<Component>Content</Component>)
    expect(screen.getByRole('button', {name: /Expand/}))
    expect(screen.queryByText(/Content/)).toBeNull()
})