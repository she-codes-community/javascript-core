// demo_run.js — strict, self-contained test runner (no frameworks)
// Requires: package.json with { "type": "module" }

import { validateName, validateSeats, parseCoupon } from "./registration.js";

// -------- Test Harness (minimal) --------
function pass(title) { console.log(`✅ PASS: ${title}`); }
function fail(title, detail) {
  console.error(`❌ FAIL: ${title}`);
  if (detail) console.error("   →", detail);
}

function runCase({ title, fn, expect }) {
  try {
    const out = fn();
    if (expect?.throws) {
      fail(title, `Expected to throw ${fmtThrow(expect.throws)}, but no error was thrown.`);
      return false;
    }
    if (expect?.ok === true) {
      pass(title);
      return true;
    }
    // Optional value checks for success cases
    if (expect?.validate && !expect.validate(out)) {
      fail(title, `Returned value validation failed.`);
      return false;
    }
    pass(title);
    return true;
  } catch (err) {
    if (!expect?.throws) {
      fail(title, `Unexpected throw: ${err.name}: ${err.message}`);
      return false;
    }
    // We expect a throw — check type and (optionally) message
    const okName = !expect.throws.name || err.name === expect.throws.name;
    const okMsg  = !expect.throws.message || err.message === expect.throws.message;
    if (okName && okMsg) {
      pass(title);
      return true;
    }
    const expected = fmtThrow(expect.throws);
    const actual = `${err.name}${err.message ? `: ${err.message}` : ""}`;
    fail(title, `Expected ${expected}, but got ${actual}`);
    return false;
  }
}

function fmtThrow(t) {
  return t.message ? `${t.name}: "${t.message}"` : t.name || "an error";
}

// -------- Test Cases --------
const cases = [
  // -------- validateName --------
  {
    title: "validateName: ok",
    fn: () => validateName("Alice"),
    expect: { ok: true }
  },
  {
    title: "validateName: empty string → Error('Name is required')",
    fn: () => validateName("   "),
    expect: { throws: { name: "Error", message: "Name is required" } }
  },
  {
    title: "validateName: too short → RangeError",
    fn: () => validateName("A"),
    expect: { throws: { name: "RangeError", message: "Name is too short" } }
  },
  {
    title: "validateName: wrong type → TypeError",
    fn: () => validateName(42),
    expect: { throws: { name: "TypeError", message: "Name must be a string" } }
  },

  // -------- validateSeats --------
  {
    title: "validateSeats: ok",
    fn: () => validateSeats(2, 10),
    expect: { ok: true }
  },
  {
    title: "validateSeats: requested <= 0 → RangeError",
    fn: () => validateSeats(0, 5),
    expect: { throws: { name: "RangeError", message: "Requested seats must be greater than zero" } }
  },
  {
    title: "validateSeats: requested > available → Error",
    fn: () => validateSeats(6, 5),
    expect: { throws: { name: "Error", message: "Not enough seats available" } }
  },
  {
    title: "validateSeats: wrong types → TypeError",
    fn: () => validateSeats("2", 5),
    expect: { throws: { name: "TypeError", message: "Seat counts must be numbers" } }
  },

  // -------- parseCoupon --------
  {
    title: "parseCoupon: ok returns object with code",
    fn: () => parseCoupon('{"code":"WELCOME10"}'),
    expect: {
      ok: true,
      validate: (out) => typeof out === "object" && out !== null && out.code === "WELCOME10"
    }
  },
  {
    title: "parseCoupon: empty → Error('Coupon JSON is empty')",
    fn: () => parseCoupon(""),
    expect: { throws: { name: "Error", message: "Coupon JSON is empty" } }
  },
  {
    // Important: JSON.parse message is engine-specific — only check the type
    title: "parseCoupon: invalid JSON → SyntaxError (from JSON.parse)",
    fn: () => parseCoupon("{ invalid }"),
    expect: { throws: { name: "SyntaxError" } }
  }
];

// -------- Runner --------
let passed = 0;
for (const c of cases) {
  const ok = runCase(c);
  if (ok) passed += 1;
}
const total = cases.length;
const failed = total - passed;

console.log("\n──────── Summary ────────");
console.log(`Total: ${total}  Passed: ${passed}  Failed: ${failed}`);
if (failed > 0) {
  process.exitCode = 1;
}
