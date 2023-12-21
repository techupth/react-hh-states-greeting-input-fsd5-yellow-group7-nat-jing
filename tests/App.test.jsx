import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App";
import { expect } from "vitest";
import fs from "fs";
import path from "path";

describe("React-State : App", () => {
  it("ยังไม่ได้ใช้ useState() หรือ ยังใส่ไม่ครบ", async () => {
    render(<App />);

    const exercisePath = path.join(process.cwd(), "src/App.jsx");
    const data = await fs.readFileSync(exercisePath, "utf8");
    const regex = /useState/g;

    const found = data.match(regex);
    expect(found.length).toBe(3);
  });

  it("ยังไม่ใส่ function onClick ที่ปุ่ม 'Update text'", async () => {
    render(<App />);

    const textToType = "Hello, World!";
    await userEvent.type(screen.getByRole("textbox"), textToType);

    fireEvent.click(screen.getByRole("button", { name: "Update text" }));

    const inputContent = screen.getByText("Hello, World!");
    expect(inputContent).toBeInTheDocument;
  });
});
