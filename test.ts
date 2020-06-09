import { assertEquals, assertThrows } from "./test_deps.ts";
import { isOdd } from "./mod.ts";

Deno.test("isOdd", function (): void {
  assertEquals(isOdd(0), false);
  assertEquals(isOdd(2), false);
  assertEquals(isOdd(1), true);
  assertEquals(isOdd(3), true);
  assertEquals(isOdd(-1), true);
  assertEquals(isOdd(-3), true);
  assertEquals(isOdd(1.0e0), true);
  assertThrows((): void => {
    isOdd(2e53);
  });
});
