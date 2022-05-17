import { formatInput } from "./management";

describe("formatInput", () => {
  test("Format the hard-coded input for the MultiBar component", () => {
    const input = [
      {
        title: "Data1",
        left: { color: "#007cff", value: 48 },
        right: { color: "#ffe944", value: 240 },
      },
      {
        title: "Data2",
        left: { color: "#007cff", value: 36 },
        right: { color: "#ffe944", value: 85 },
      },
      {
        title: "Data3",
        left: { color: "#007cff", value: 79 },
        right: { color: "#ffe944", value: 52 },
      },
    ];

    const output = [
      {
        title: "Data1",
        left: { color: "#007cff", value: 48 },
        right: { color: "#ffe944", value: 240 },
      },
      {
        title: "Data2",
        left: { color: "#007cff", value: 36 },
        right: { color: "#ffe944", value: 85 },
      },
      {
        title: "Data3",
        left: { color: "#007cff", value: 79 },
        right: { color: "#ffe944", value: 52 },
      },
    ];
    expect(formatInput(input)).toEqual(output);
  });

  test("Format the API data for the MultiBar component", () => {
    const input = [
      { name: "Tasks", incomplete: 48, complete: 240 },
      { name: "Sub-Tasks", incomplete: 10, complete: 80 },
      { name: "Bug Reports", incomplete: 50, complete: 75 },
    ];

    const output = [
      {
        title: "Tasks",
        left: { color: "#9ACD32", value: 48 },
        right: { color: "#ff5349", value: 240 },
      },
      {
        title: "Sub-Tasks",
        left: { color: "#9ACD32", value: 10 },
        right: { color: "#ff5349", value: 80 },
      },
      {
        title: "Bug Reports",
        left: { color: "#9ACD32", value: 50 },
        right: { color: "#ff5349", value: 75 },
      },
    ];

    expect(formatInput(input)).toEqual(output);
  });

  test("Pass undefined", () => {
    const input = undefined;
    const output: any[] = [];
    expect(formatInput(input)).toEqual(output);
  });

  test("Pass empty array", () => {
    const input = { values: [] };
    const output: any[] = [];
    expect(formatInput(input)).toEqual(output);
  });

  test("Pass non array", () => {
    const input = { values: "Hello" };
    const output: any[] = [];
    expect(formatInput(input)).toEqual(output);
  });
});
