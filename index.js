export const PETAL = "Identity-Gold";
export const INVARIANT = "IDENTITY_STATIONARY";
export function verify(input) {
  if (!input || typeof input !== "object") {
    return {
      pass: false,
      stationary: false,
      signal: "identity:INVALID_INPUT",
      reason: "input must be an object"
    };
  }
  const stationary =
    input.repo === "Riverbraid-Identity-Gold" &&
    input.petal === "Identity-Gold" &&
    input.ring === 1 &&
    input.invariant === "IDENTITY_STATIONARY";
  return {
    pass: true,
    stationary,
    signal: stationary ? "identity:STATIONARY" : "identity:DRIFT",
    reason: stationary
      ? "Identity fields match stationary declaration"
      : "One or more identity fields drift from stationary declaration"
  };
}
