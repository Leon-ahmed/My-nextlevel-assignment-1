  function multiplyValue(value: number, multiplier?: number): number {
  return value * (multiplier ?? 2);
}

 

 function processInput(inp: string | number | boolean): string | number {
  if (typeof inp === "string") {
    return inp.trim().toLowerCase();
  }

  if (typeof inp === "number") {
    return inp * 10;
  }

  return inp ? "Active" : "Inactive";
}

 