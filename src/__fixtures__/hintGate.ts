/**
 * GENERATED — niet met de hand aanpassen. Poort voor de detectielaag.
 *
 * Per hinttekst uit de corpus de formats die erbij horen (grondwaarheid uit de spec).
 * De test eist dat `detectFormat()` nooit een ánder formaat aanwijst dan hier staat:
 * niet-resolveerbaar mag, verkeerd gokken niet. `n` is het aantal corpusrijen met deze
 * hinttekst; samen zijn dat de 2.897 gestructureerde rijen.
 *
 * corpus-sha256: train cb8ac52bc3161778…, validation 32b9d7f3b2acd169…, iid 233d35bccdf13576…, ood 8ff0add817a82e05…, blind dc630c4fe5dd2aac…, safety 086bd89c5162e8ff…
 */
export type HintGateRow = { hint: string; keys: readonly string[]; n: number };

export const HINT_GATE: readonly HintGateRow[] = [
  {
    hint: "a asset code starting with AST and then the year, then eight characters mixing letters and digits (without separators)",
    keys: ["asset|AST|alnum8||2025|opt"],
    n: 1,
  },
  {
    hint: "a asset code starting with AST and then the year, then nine characters mixing letters and digits (without separators)",
    keys: ["asset|AST|alnum9||2024|opt", "asset|AST|alnum9||2026|opt"],
    n: 4,
  },
  {
    hint: "a asset code starting with AST- and then the year, then eight digits (parts separated by hyphens)",
    keys: ["asset|AST|digits8|-|2024|opt"],
    n: 2,
  },
  {
    hint: "a asset code starting with AST- and then the year, then nine digits (parts separated by hyphens)",
    keys: ["asset|AST|digits9|-|2027|opt"],
    n: 1,
  },
  {
    hint: "a asset code starting with AST- and then the year, then two letters and five digits (parts separated by hyphens)",
    keys: ["asset|AST|letters2,digits5|-|2027|opt"],
    n: 1,
  },
  {
    hint: "a asset code starting with AST. and then the year, then eight digits (parts separated by dots)",
    keys: ["asset|AST|digits8|.|2025|opt"],
    n: 1,
  },
  {
    hint: "a asset code starting with AST. and then the year, then three digits (parts separated by dots)",
    keys: ["asset|AST|digits3|.|2025|opt"],
    n: 1,
  },
  {
    hint: "a asset code starting with AST. and then the year, then two letters and five digits (parts separated by dots)",
    keys: ["asset|AST|letters2,digits5|.|2027|opt"],
    n: 2,
  },
  {
    hint: "a asset code starting with AST. and then three digits (parts separated by dots)",
    keys: ["asset|AST|digits3|.|-|req"],
    n: 2,
  },
  {
    hint: "a asset code starting with AST/ and then the year, then five digits (parts separated by slashes)",
    keys: ["asset|AST|digits5|/|2027|opt"],
    n: 1,
  },
  {
    hint: "a asset code starting with AST/ and then the year, then seven digits (parts separated by slashes)",
    keys: ["asset|AST|digits7|/|2026|opt"],
    n: 2,
  },
  {
    hint: "a asset code starting with AST/ and then the year, then two letters and five digits (parts separated by slashes)",
    keys: ["asset|AST|letters2,digits5|/|2026|opt"],
    n: 3,
  },
  {
    hint: "a asset code starting with MID and then the year, then eight characters mixing letters and digits (without separators)",
    keys: ["asset|MID|alnum8||2024|opt"],
    n: 1,
  },
  {
    hint: "a asset code starting with MID and then the year, then nine characters mixing letters and digits (without separators)",
    keys: ["asset|MID|alnum9||2024|opt"],
    n: 1,
  },
  {
    hint: "a asset code starting with MID and then the year, then nine digits (without separators)",
    keys: ["asset|MID|digits9||2024|opt"],
    n: 1,
  },
  {
    hint: "a asset code starting with MID and then the year, then seven digits (without separators)",
    keys: ["asset|MID|digits7||2025|opt"],
    n: 3,
  },
  {
    hint: "a asset code starting with MID and then the year, then six digits (without separators)",
    keys: ["asset|MID|digits6||2027|opt"],
    n: 1,
  },
  {
    hint: "a asset code starting with MID- and then the year, then nine digits (parts separated by hyphens)",
    keys: ["asset|MID|digits9|-|2024|opt"],
    n: 1,
  },
  {
    hint: "a asset code starting with MID- and then the year, then seven characters mixing letters and digits (parts separated by hyphens)",
    keys: ["asset|MID|alnum7|-|2024|opt"],
    n: 2,
  },
  {
    hint: "a asset code starting with MID- and then the year, then six characters mixing letters and digits (parts separated by hyphens)",
    keys: ["asset|MID|alnum6|-|2027|opt"],
    n: 1,
  },
  {
    hint: "a asset code starting with MID- and then the year, then three digits (parts separated by hyphens)",
    keys: ["asset|MID|digits3|-|2024|opt"],
    n: 1,
  },
  {
    hint: "a asset code starting with MID- and then the year, then two letters and five digits (parts separated by hyphens)",
    keys: ["asset|MID|letters2,digits5|-|2026|opt"],
    n: 1,
  },
  {
    hint: "a asset code starting with MID. and then four digits (parts separated by dots)",
    keys: ["asset|MID|digits4|.|-|req"],
    n: 3,
  },
  {
    hint: "a asset code starting with MID. and then the year, then eight digits (parts separated by dots)",
    keys: ["asset|MID|digits8|.|2025|opt"],
    n: 2,
  },
  {
    hint: "a asset code starting with MID. and then the year, then four digits (parts separated by dots)",
    keys: ["asset|MID|digits4|.|2025|opt"],
    n: 1,
  },
  {
    hint: "a asset code starting with MID/ and then six characters mixing letters and digits (parts separated by slashes)",
    keys: ["asset|MID|alnum6|/|-|req"],
    n: 1,
  },
  {
    hint: "a asset code starting with MID/ and then the year, then seven characters mixing letters and digits (parts separated by slashes)",
    keys: ["asset|MID|alnum7|/|2026|opt"],
    n: 1,
  },
  {
    hint: "a asset code starting with MID/ and then the year, then two letters and five digits (parts separated by slashes)",
    keys: ["asset|MID|letters2,digits5|/|2024|opt"],
    n: 1,
  },
  {
    hint: "a asset code starting with MID/ and then three digits (parts separated by slashes)",
    keys: ["asset|MID|digits3|/|-|req"],
    n: 1,
  },
  {
    hint: "a asset code starting with OBJ and then the year, then nine characters mixing letters and digits (without separators)",
    keys: ["asset|OBJ|alnum9||2025|opt"],
    n: 1,
  },
  {
    hint: "a asset code starting with OBJ and then the year, then nine digits (without separators)",
    keys: ["asset|OBJ|digits9||2024|opt"],
    n: 1,
  },
  {
    hint: "a asset code starting with OBJ and then the year, then six digits (without separators)",
    keys: ["asset|OBJ|digits6||2027|opt"],
    n: 1,
  },
  {
    hint: "a asset code starting with OBJ- and then five digits (parts separated by hyphens)",
    keys: ["asset|OBJ|digits5|-|-|req"],
    n: 1,
  },
  {
    hint: "a asset code starting with OBJ- and then seven characters mixing letters and digits (parts separated by hyphens)",
    keys: ["asset|OBJ|alnum7|-|-|req"],
    n: 1,
  },
  {
    hint: "a asset code starting with OBJ- and then the year, then four digits (parts separated by hyphens)",
    keys: ["asset|OBJ|digits4|-|2024|opt"],
    n: 2,
  },
  {
    hint: "a asset code starting with OBJ- and then the year, then seven characters mixing letters and digits (parts separated by hyphens)",
    keys: ["asset|OBJ|alnum7|-|2026|opt"],
    n: 2,
  },
  {
    hint: "a asset code starting with OBJ- and then the year, then two letters and five digits (parts separated by hyphens)",
    keys: ["asset|OBJ|letters2,digits5|-|2026|opt"],
    n: 2,
  },
  {
    hint: "a asset code starting with OBJ. and then five digits (parts separated by dots)",
    keys: ["asset|OBJ|digits5|.|-|req"],
    n: 2,
  },
  {
    hint: "a asset code starting with OBJ. and then the year, then eight characters mixing letters and digits (parts separated by dots)",
    keys: ["asset|OBJ|alnum8|.|2026|opt"],
    n: 2,
  },
  {
    hint: "a asset code starting with OBJ. and then the year, then seven characters mixing letters and digits (parts separated by dots)",
    keys: ["asset|OBJ|alnum7|.|2025|opt"],
    n: 1,
  },
  {
    hint: "a asset code starting with OBJ. and then the year, then two letters and five digits (parts separated by dots)",
    keys: ["asset|OBJ|letters2,digits5|.|2024|opt"],
    n: 1,
  },
  {
    hint: "a asset code starting with OBJ/ and then four digits (parts separated by slashes)",
    keys: ["asset|OBJ|digits4|/|-|req"],
    n: 1,
  },
  {
    hint: "a asset code starting with OBJ/ and then the year, then ten digits (parts separated by slashes)",
    keys: ["asset|OBJ|digits10|/|2026|opt"],
    n: 1,
  },
  {
    hint: "a batch code starting with BATCH and then the year, then nine digits (without separators)",
    keys: ["batch|BATCH|digits9||2025|opt"],
    n: 1,
  },
  {
    hint: "a batch code starting with BATCH and then the year, then seven characters mixing letters and digits (without separators)",
    keys: ["batch|BATCH|alnum7||2024|opt"],
    n: 2,
  },
  {
    hint: "a batch code starting with BATCH and then the year, then ten digits (without separators)",
    keys: ["batch|BATCH|digits10||2027|opt"],
    n: 2,
  },
  {
    hint: "a batch code starting with BATCH- and then the year, then eight characters mixing letters and digits (parts separated by hyphens)",
    keys: ["batch|BATCH|alnum8|-|2027|opt"],
    n: 2,
  },
  {
    hint: "a batch code starting with BATCH- and then the year, then nine characters mixing letters and digits (parts separated by hyphens)",
    keys: ["batch|BATCH|alnum9|-|2025|opt"],
    n: 1,
  },
  {
    hint: "a batch code starting with BATCH- and then the year, then seven digits (parts separated by hyphens)",
    keys: ["batch|BATCH|digits7|-|2026|opt"],
    n: 1,
  },
  {
    hint: "a batch code starting with BATCH- and then the year, then three digits (parts separated by hyphens)",
    keys: ["batch|BATCH|digits3|-|2027|opt"],
    n: 1,
  },
  {
    hint: "a batch code starting with BATCH. and then the year, then eight digits (parts separated by dots)",
    keys: ["batch|BATCH|digits8|.|2026|opt"],
    n: 1,
  },
  {
    hint: "a batch code starting with BATCH. and then the year, then nine digits (parts separated by dots)",
    keys: ["batch|BATCH|digits9|.|2027|opt"],
    n: 1,
  },
  {
    hint: "a batch code starting with BATCH. and then two digits and two letters and two digits (parts separated by dots)",
    keys: ["batch|BATCH|digits2,letters2,digits2|.|-|req"],
    n: 2,
  },
  {
    hint: "a batch code starting with BATCH/ and then the year, then eight digits (parts separated by slashes)",
    keys: [
      "batch|BATCH|digits8|/|2025|opt",
      "batch|BATCH|digits8|/|2026|opt",
      "batch|BATCH|digits8|/|2027|opt",
    ],
    n: 4,
  },
  {
    hint: "a batch code starting with BATCH/ and then the year, then five digits (parts separated by slashes)",
    keys: ["batch|BATCH|digits5|/|2025|opt"],
    n: 1,
  },
  {
    hint: "a batch code starting with BATCH/ and then the year, then nine characters mixing letters and digits (parts separated by slashes)",
    keys: ["batch|BATCH|alnum9|/|2025|opt"],
    n: 2,
  },
  {
    hint: "a batch code starting with BATCH/ and then the year, then ten digits (parts separated by slashes)",
    keys: ["batch|BATCH|digits10|/|2026|opt"],
    n: 1,
  },
  {
    hint: "a batch code starting with BATCH/ and then the year, then two letters and five digits (parts separated by slashes)",
    keys: ["batch|BATCH|letters2,digits5|/|2024|opt"],
    n: 1,
  },
  {
    hint: "a batch code starting with CH and then the year, then nine characters mixing letters and digits (without separators)",
    keys: ["batch|CH|alnum9||2026|opt"],
    n: 2,
  },
  {
    hint: "a batch code starting with CH and then the year, then seven characters mixing letters and digits (without separators)",
    keys: ["batch|CH|alnum7||2025|opt"],
    n: 1,
  },
  {
    hint: "a batch code starting with CH and then the year, then six digits (without separators)",
    keys: ["batch|CH|digits6||2025|opt"],
    n: 2,
  },
  {
    hint: "a batch code starting with CH- and then ten digits (parts separated by hyphens)",
    keys: ["batch|CH|digits10|-|-|req"],
    n: 1,
  },
  {
    hint: "a batch code starting with CH- and then the year, then six characters mixing letters and digits (parts separated by hyphens)",
    keys: ["batch|CH|alnum6|-|2026|opt"],
    n: 2,
  },
  {
    hint: "a batch code starting with CH- and then two letters and five digits (parts separated by hyphens)",
    keys: ["batch|CH|letters2,digits5|-|-|req"],
    n: 2,
  },
  {
    hint: "a batch code starting with CH. and then seven digits (parts separated by dots)",
    keys: ["batch|CH|digits7|.|-|req"],
    n: 1,
  },
  {
    hint: "a batch code starting with CH. and then the year, then eight characters mixing letters and digits (parts separated by dots)",
    keys: ["batch|CH|alnum8|.|2024|opt"],
    n: 1,
  },
  {
    hint: "a batch code starting with CH/ and then seven digits (parts separated by slashes)",
    keys: ["batch|CH|digits7|/|-|req"],
    n: 2,
  },
  {
    hint: "a batch code starting with CH/ and then the year, then nine characters mixing letters and digits (parts separated by slashes)",
    keys: ["batch|CH|alnum9|/|2024|opt"],
    n: 1,
  },
  {
    hint: "a batch code starting with CH/ and then three digits (parts separated by slashes)",
    keys: ["batch|CH|digits3|/|-|req"],
    n: 1,
  },
  {
    hint: "a batch code starting with LOT- and then the year, then five digits (parts separated by hyphens)",
    keys: ["batch|LOT|digits5|-|2024|opt"],
    n: 1,
  },
  {
    hint: "a batch code starting with LOT- and then the year, then four digits (parts separated by hyphens)",
    keys: ["batch|LOT|digits4|-|2026|opt"],
    n: 1,
  },
  {
    hint: "a batch code starting with LOT- and then the year, then seven characters mixing letters and digits (parts separated by hyphens)",
    keys: ["batch|LOT|alnum7|-|2024|opt"],
    n: 1,
  },
  {
    hint: "a batch code starting with LOT- and then the year, then two letters and two digits and two letters (parts separated by hyphens)",
    keys: ["batch|LOT|letters2,digits2,letters2|-|2026|opt"],
    n: 1,
  },
  {
    hint: "a batch code starting with LOT. and then the year, then four characters mixing letters and digits and four digits (parts separated by dots)",
    keys: ["batch|LOT|alnum4,digits4|.|2026|opt"],
    n: 1,
  },
  {
    hint: "a batch code starting with LOT. and then the year, then seven characters mixing letters and digits (parts separated by dots)",
    keys: ["batch|LOT|alnum7|.|2026|opt"],
    n: 2,
  },
  {
    hint: "a batch code starting with LOT. and then the year, then seven digits (parts separated by dots)",
    keys: ["batch|LOT|digits7|.|2024|opt"],
    n: 1,
  },
  {
    hint: "a batch code starting with LOT. and then the year, then six characters mixing letters and digits (parts separated by dots)",
    keys: ["batch|LOT|alnum6|.|2026|opt"],
    n: 1,
  },
  {
    hint: "a batch code starting with LOT. and then the year, then three digits (parts separated by dots)",
    keys: ["batch|LOT|digits3|.|2027|opt"],
    n: 1,
  },
  {
    hint: "a batch code starting with LOT. and then the year, then two letters and five digits (parts separated by dots)",
    keys: ["batch|LOT|letters2,digits5|.|2027|opt"],
    n: 1,
  },
  {
    hint: "a batch code starting with LOT/ and then five digits (parts separated by slashes)",
    keys: ["batch|LOT|digits5|/|-|req"],
    n: 3,
  },
  {
    hint: "a batch code starting with LOT/ and then the year, then nine digits (parts separated by slashes)",
    keys: ["batch|LOT|digits9|/|2025|opt"],
    n: 2,
  },
  {
    hint: "a batch code starting with LOT/ and then the year, then seven digits (parts separated by slashes)",
    keys: ["batch|LOT|digits7|/|2024|opt"],
    n: 2,
  },
  {
    hint: "a case code starting with CASE and then the year, then eight digits (without separators)",
    keys: ["case|CASE|digits8||2025|opt"],
    n: 2,
  },
  {
    hint: "a case code starting with CASE and then the year, then four digits (without separators)",
    keys: ["case|CASE|digits4||2025|opt"],
    n: 1,
  },
  {
    hint: "a case code starting with CASE and then the year, then six digits (without separators)",
    keys: ["case|CASE|digits6||2024|opt"],
    n: 1,
  },
  {
    hint: "a case code starting with CASE- and then the year, then six digits (parts separated by hyphens)",
    keys: ["case|CASE|digits6|-|2027|opt"],
    n: 1,
  },
  {
    hint: "a case code starting with CASE- and then the year, then two letters and five digits (parts separated by hyphens)",
    keys: ["case|CASE|letters2,digits5|-|2024|opt"],
    n: 2,
  },
  {
    hint: "a case code starting with CASE- and then two letters and five digits (parts separated by hyphens)",
    keys: ["case|CASE|letters2,digits5|-|-|req"],
    n: 1,
  },
  {
    hint: "a case code starting with CASE. and then eight digits (parts separated by dots)",
    keys: ["case|CASE|digits8|.|-|req"],
    n: 1,
  },
  {
    hint: "a case code starting with CASE. and then five digits (parts separated by dots)",
    keys: ["case|CASE|digits5|.|-|req"],
    n: 1,
  },
  {
    hint: "a case code starting with CASE. and then the year, then nine digits (parts separated by dots)",
    keys: ["case|CASE|digits9|.|2025|opt"],
    n: 1,
  },
  {
    hint: "a case code starting with CASE. and then the year, then six characters mixing letters and digits (parts separated by dots)",
    keys: ["case|CASE|alnum6|.|2025|opt"],
    n: 1,
  },
  {
    hint: "a case code starting with CASE. and then the year, then six digits (parts separated by dots)",
    keys: ["case|CASE|digits6|.|2025|opt", "case|CASE|digits6|.|2026|opt"],
    n: 2,
  },
  {
    hint: "a case code starting with CASE. and then the year, then two letters and five digits (parts separated by dots)",
    keys: ["case|CASE|letters2,digits5|.|2025|opt"],
    n: 2,
  },
  {
    hint: "a case code starting with CASE/ and then the year, then nine characters mixing letters and digits (parts separated by slashes)",
    keys: ["case|CASE|alnum9|/|2027|opt"],
    n: 1,
  },
  {
    hint: "a case code starting with CASE/ and then the year, then two letters and five digits (parts separated by slashes)",
    keys: ["case|CASE|letters2,digits5|/|2025|opt"],
    n: 1,
  },
  {
    hint: "a case code starting with DOSS and then five digits (without separators)",
    keys: ["case|DOSS|digits5||-|req"],
    n: 1,
  },
  {
    hint: "a case code starting with DOSS and then the year, then eight digits (without separators)",
    keys: ["case|DOSS|digits8||2027|opt"],
    n: 2,
  },
  {
    hint: "a case code starting with DOSS and then the year, then five digits (without separators)",
    keys: ["case|DOSS|digits5||2027|opt"],
    n: 1,
  },
  {
    hint: "a case code starting with DOSS and then the year, then seven characters mixing letters and digits (without separators)",
    keys: ["case|DOSS|alnum7||2026|opt"],
    n: 2,
  },
  {
    hint: "a case code starting with DOSS- and then the year, then five digits (parts separated by hyphens)",
    keys: ["case|DOSS|digits5|-|2027|opt"],
    n: 3,
  },
  {
    hint: "a case code starting with DOSS- and then the year, then nine digits (parts separated by hyphens)",
    keys: ["case|DOSS|digits9|-|2026|opt"],
    n: 2,
  },
  {
    hint: "a case code starting with DOSS- and then three digits (parts separated by hyphens)",
    keys: ["case|DOSS|digits3|-|-|req"],
    n: 1,
  },
  {
    hint: "a case code starting with DOSS. and then eight digits (parts separated by dots)",
    keys: ["case|DOSS|digits8|.|-|req"],
    n: 1,
  },
  {
    hint: "a case code starting with DOSS. and then seven characters mixing letters and digits (parts separated by dots)",
    keys: ["case|DOSS|alnum7|.|-|req"],
    n: 1,
  },
  {
    hint: "a case code starting with DOSS. and then the year, then seven digits (parts separated by dots)",
    keys: ["case|DOSS|digits7|.|2025|opt"],
    n: 2,
  },
  {
    hint: "a case code starting with DOSS. and then the year, then six characters mixing letters and digits (parts separated by dots)",
    keys: ["case|DOSS|alnum6|.|2024|opt"],
    n: 4,
  },
  {
    hint: "a case code starting with DOSS/ and then the year, then eight digits (parts separated by slashes)",
    keys: ["case|DOSS|digits8|/|2027|opt"],
    n: 1,
  },
  {
    hint: "a case code starting with DOSS/ and then the year, then ten digits (parts separated by slashes)",
    keys: ["case|DOSS|digits10|/|2027|opt"],
    n: 1,
  },
  {
    hint: "a case code starting with DOSS/ and then two letters and five digits (parts separated by slashes)",
    keys: ["case|DOSS|letters2,digits5|/|-|req"],
    n: 1,
  },
  {
    hint: "a case code starting with ZD and then eight characters mixing letters and digits (without separators)",
    keys: ["case|ZD|alnum8||-|req"],
    n: 2,
  },
  {
    hint: "a case code starting with ZD and then five digits (without separators)",
    keys: ["case|ZD|digits5||-|req"],
    n: 1,
  },
  {
    hint: "a case code starting with ZD and then nine characters mixing letters and digits (without separators)",
    keys: ["case|ZD|alnum9||-|req"],
    n: 1,
  },
  {
    hint: "a case code starting with ZD and then the year, then three digits (without separators)",
    keys: ["case|ZD|digits3||2025|opt"],
    n: 1,
  },
  {
    hint: "a case code starting with ZD- and then the year, then four digits (parts separated by hyphens)",
    keys: ["case|ZD|digits4|-|2025|opt"],
    n: 1,
  },
  {
    hint: "a case code starting with ZD- and then the year, then nine characters mixing letters and digits (parts separated by hyphens)",
    keys: ["case|ZD|alnum9|-|2025|opt"],
    n: 2,
  },
  {
    hint: "a case code starting with ZD- and then the year, then nine digits (parts separated by hyphens)",
    keys: ["case|ZD|digits9|-|2025|opt"],
    n: 2,
  },
  {
    hint: "a case code starting with ZD- and then the year, then seven digits (parts separated by hyphens)",
    keys: ["case|ZD|digits7|-|2027|opt"],
    n: 1,
  },
  {
    hint: "a case code starting with ZD- and then the year, then two letters and five digits (parts separated by hyphens)",
    keys: ["case|ZD|letters2,digits5|-|2027|opt"],
    n: 1,
  },
  {
    hint: "a case code starting with ZD. and then the year, then eight digits (parts separated by dots)",
    keys: ["case|ZD|digits8|.|2026|opt"],
    n: 1,
  },
  {
    hint: "a case code starting with ZD. and then the year, then five digits (parts separated by dots)",
    keys: ["case|ZD|digits5|.|2025|opt"],
    n: 2,
  },
  {
    hint: "a case code starting with ZD/ and then nine digits (parts separated by slashes)",
    keys: ["case|ZD|digits9|/|-|req"],
    n: 1,
  },
  {
    hint: "a case code starting with ZD/ and then the year, then six characters mixing letters and digits (parts separated by slashes)",
    keys: ["case|ZD|alnum6|/|2024|opt"],
    n: 1,
  },
  {
    hint: "a incident number starting with INC and then the year, then five digits (without separators)",
    keys: ["ticket|INC|digits5||2024|opt"],
    n: 1,
  },
  {
    hint: "a incident number starting with INC and then the year, then four digits (without separators)",
    keys: ["ticket|INC|digits4||2024|opt", "ticket|INC|digits4||2027|opt"],
    n: 3,
  },
  {
    hint: "a incident number starting with INC and then the year, then nine characters mixing letters and digits (without separators)",
    keys: ["ticket|INC|alnum9||2026|opt"],
    n: 1,
  },
  {
    hint: "a incident number starting with INC and then the year, then ten digits (without separators)",
    keys: ["ticket|INC|digits10||2024|opt"],
    n: 2,
  },
  {
    hint: "a incident number starting with INC and then the year, then three digits (without separators)",
    keys: ["ticket|INC|digits3||2024|opt"],
    n: 2,
  },
  {
    hint: "a incident number starting with INC- and then eight digits (parts separated by hyphens)",
    keys: ["ticket|INC|digits8|-|-|req"],
    n: 1,
  },
  {
    hint: "a incident number starting with INC- and then seven characters mixing letters and digits (parts separated by hyphens)",
    keys: ["ticket|INC|alnum7|-|-|req"],
    n: 2,
  },
  {
    hint: "a incident number starting with INC- and then the year, then eight characters mixing letters and digits (parts separated by hyphens)",
    keys: ["ticket|INC|alnum8|-|2027|opt"],
    n: 1,
  },
  {
    hint: "a incident number starting with INC- and then the year, then seven characters mixing letters and digits (parts separated by hyphens)",
    keys: ["ticket|INC|alnum7|-|2026|opt"],
    n: 1,
  },
  {
    hint: "a incident number starting with INC- and then the year, then two letters and five digits (parts separated by hyphens)",
    keys: ["ticket|INC|letters2,digits5|-|2024|opt"],
    n: 1,
  },
  {
    hint: "a incident number starting with INC. and then the year, then five digits (parts separated by dots)",
    keys: ["ticket|INC|digits5|.|2025|opt"],
    n: 1,
  },
  {
    hint: "a incident number starting with INC. and then three digits (parts separated by dots)",
    keys: ["ticket|INC|digits3|.|-|req"],
    n: 1,
  },
  {
    hint: "a incident number starting with INC/ and then six digits (parts separated by slashes)",
    keys: ["ticket|INC|digits6|/|-|req"],
    n: 1,
  },
  {
    hint: "a incident number starting with INC/ and then the year, then ten digits (parts separated by slashes)",
    keys: ["ticket|INC|digits10|/|2026|opt"],
    n: 3,
  },
  {
    hint: "a incident number starting with INC/ and then the year, then three digits (parts separated by slashes)",
    keys: ["ticket|INC|digits3|/|2024|opt", "ticket|INC|digits3|/|2025|opt"],
    n: 3,
  },
  {
    hint: "a incident number starting with SD and then six digits (without separators)",
    keys: ["ticket|SD|digits6||-|req"],
    n: 1,
  },
  {
    hint: "a incident number starting with SD and then ten digits (without separators)",
    keys: ["ticket|SD|digits10||-|req"],
    n: 1,
  },
  {
    hint: "a incident number starting with SD and then the year, then eight digits (without separators)",
    keys: ["ticket|SD|digits8||2027|opt"],
    n: 3,
  },
  {
    hint: "a incident number starting with SD- and then the year, then five digits (parts separated by hyphens)",
    keys: ["ticket|SD|digits5|-|2025|opt"],
    n: 1,
  },
  {
    hint: "a incident number starting with SD- and then the year, then nine characters mixing letters and digits (parts separated by hyphens)",
    keys: ["ticket|SD|alnum9|-|2025|opt"],
    n: 1,
  },
  {
    hint: "a incident number starting with SD- and then the year, then six characters mixing letters and digits (parts separated by hyphens)",
    keys: ["ticket|SD|alnum6|-|2024|opt"],
    n: 1,
  },
  {
    hint: "a incident number starting with SD- and then the year, then six digits (parts separated by hyphens)",
    keys: ["ticket|SD|digits6|-|2024|opt"],
    n: 1,
  },
  {
    hint: "a incident number starting with SD. and then the year, then eight characters mixing letters and digits (parts separated by dots)",
    keys: ["ticket|SD|alnum8|.|2025|opt"],
    n: 1,
  },
  {
    hint: "a incident number starting with SD. and then the year, then four digits (parts separated by dots)",
    keys: ["ticket|SD|digits4|.|2027|opt"],
    n: 1,
  },
  {
    hint: "a incident number starting with SD. and then the year, then nine digits (parts separated by dots)",
    keys: ["ticket|SD|digits9|.|2024|opt"],
    n: 1,
  },
  {
    hint: "a incident number starting with SD. and then the year, then seven characters mixing letters and digits (parts separated by dots)",
    keys: ["ticket|SD|alnum7|.|2027|opt"],
    n: 1,
  },
  {
    hint: "a incident number starting with SD. and then the year, then six digits (parts separated by dots)",
    keys: ["ticket|SD|digits6|.|2025|opt"],
    n: 1,
  },
  {
    hint: "a incident number starting with SD/ and then the year, then nine digits (parts separated by slashes)",
    keys: ["ticket|SD|digits9|/|2025|opt"],
    n: 1,
  },
  {
    hint: "a incident number starting with SD/ and then the year, then seven characters mixing letters and digits (parts separated by slashes)",
    keys: ["ticket|SD|alnum7|/|2027|opt"],
    n: 2,
  },
  {
    hint: "a incident number starting with SD/ and then the year, then six characters mixing letters and digits (parts separated by slashes)",
    keys: ["ticket|SD|alnum6|/|2024|opt"],
    n: 1,
  },
  {
    hint: "a incident number starting with TKT and then the year, then eight characters mixing letters and digits (without separators)",
    keys: ["ticket|TKT|alnum8||2027|opt"],
    n: 3,
  },
  {
    hint: "a incident number starting with TKT and then the year, then four digits (without separators)",
    keys: ["ticket|TKT|digits4||2027|opt"],
    n: 1,
  },
  {
    hint: "a incident number starting with TKT- and then the year, then six digits (parts separated by hyphens)",
    keys: ["ticket|TKT|digits6|-|2024|opt"],
    n: 1,
  },
  {
    hint: "a incident number starting with TKT. and then the year, then eight digits (parts separated by dots)",
    keys: ["ticket|TKT|digits8|.|2024|opt"],
    n: 1,
  },
  {
    hint: "a incident number starting with TKT. and then the year, then nine digits (parts separated by dots)",
    keys: ["ticket|TKT|digits9|.|2026|opt"],
    n: 1,
  },
  {
    hint: "a incident number starting with TKT. and then the year, then seven characters mixing letters and digits (parts separated by dots)",
    keys: ["ticket|TKT|alnum7|.|2026|opt"],
    n: 1,
  },
  {
    hint: "a incident number starting with TKT. and then the year, then two letters and five digits (parts separated by dots)",
    keys: ["ticket|TKT|letters2,digits5|.|2026|opt"],
    n: 1,
  },
  {
    hint: "a incident number starting with TKT/ and then nine characters mixing letters and digits (parts separated by slashes)",
    keys: ["ticket|TKT|alnum9|/|-|req"],
    n: 1,
  },
  {
    hint: "a incident number starting with TKT/ and then the year, then eight characters mixing letters and digits (parts separated by slashes)",
    keys: ["ticket|TKT|alnum8|/|2025|opt"],
    n: 2,
  },
  {
    hint: "a incident number starting with TKT/ and then the year, then four digits (parts separated by slashes)",
    keys: ["ticket|TKT|digits4|/|2025|opt"],
    n: 2,
  },
  {
    hint: "a incident number starting with TKT/ and then the year, then ten digits (parts separated by slashes)",
    keys: ["ticket|TKT|digits10|/|2025|opt"],
    n: 3,
  },
  {
    hint: "a licence number starting with LIC- and then the year, then eight digits (parts separated by hyphens)",
    keys: ["licence|LIC|digits8|-|2027|opt"],
    n: 1,
  },
  {
    hint: "a licence number starting with LIC. and then the year, then nine characters mixing letters and digits (parts separated by dots)",
    keys: ["licence|LIC|alnum9|.|2027|opt"],
    n: 2,
  },
  {
    hint: "a licence number starting with VERG and then seven characters mixing letters and digits (without separators)",
    keys: ["licence|VERG|alnum7||-|req"],
    n: 1,
  },
  {
    hint: "a licence number starting with VERG. and then the year, then eight digits (parts separated by dots)",
    keys: ["licence|VERG|digits8|.|2026|opt"],
    n: 1,
  },
  {
    hint: "a licence number starting with VERG/ and then the year, then three digits (parts separated by slashes)",
    keys: ["licence|VERG|digits3|/|2027|opt"],
    n: 1,
  },
  {
    hint: "a permit number starting with PER. and then the year, then four characters mixing letters and digits and four digits (parts separated by dots)",
    keys: ["permit|PER|alnum4,digits4|.|2024|opt"],
    n: 1,
  },
  {
    hint: "a permit number starting with PER. and then the year, then two letters and five digits (parts separated by dots)",
    keys: ["permit|PER|letters2,digits5|.|2024|opt"],
    n: 1,
  },
  {
    hint: "a permit number starting with VGM. and then the year, then eight characters mixing letters and digits (parts separated by dots)",
    keys: ["permit|VGM|alnum8|.|2025|opt"],
    n: 1,
  },
  {
    hint: "a project code starting with P and then seven characters mixing letters and digits (without separators)",
    keys: ["project|P|alnum7||-|req"],
    n: 2,
  },
  {
    hint: "a project code starting with P and then six characters mixing letters and digits (without separators)",
    keys: ["project|P|alnum6||-|req"],
    n: 1,
  },
  {
    hint: "a project code starting with P and then the year, then seven digits (without separators)",
    keys: ["project|P|digits7||2026|opt"],
    n: 2,
  },
  {
    hint: "a project code starting with P- and then the year, then nine characters mixing letters and digits (parts separated by hyphens)",
    keys: ["project|P|alnum9|-|2026|opt"],
    n: 1,
  },
  {
    hint: "a project code starting with P- and then the year, then nine digits (parts separated by hyphens)",
    keys: ["project|P|digits9|-|2024|opt"],
    n: 2,
  },
  {
    hint: "a project code starting with P- and then the year, then ten digits (parts separated by hyphens)",
    keys: ["project|P|digits10|-|2026|opt"],
    n: 2,
  },
  {
    hint: "a project code starting with P- and then the year, then three digits (parts separated by hyphens)",
    keys: ["project|P|digits3|-|2025|opt"],
    n: 1,
  },
  {
    hint: "a project code starting with P- and then the year, then two letters and five digits (parts separated by hyphens)",
    keys: ["project|P|letters2,digits5|-|2025|opt", "project|P|letters2,digits5|-|2027|opt"],
    n: 2,
  },
  {
    hint: "a project code starting with P. and then the year, then four characters mixing letters and digits and four digits (parts separated by dots)",
    keys: ["project|P|alnum4,digits4|.|2026|opt"],
    n: 3,
  },
  {
    hint: "a project code starting with P. and then the year, then nine digits (parts separated by dots)",
    keys: ["project|P|digits9|.|2027|opt"],
    n: 1,
  },
  {
    hint: "a project code starting with P. and then the year, then six digits (parts separated by dots)",
    keys: ["project|P|digits6|.|2025|opt"],
    n: 2,
  },
  {
    hint: "a project code starting with P. and then the year, then three digits (parts separated by dots)",
    keys: ["project|P|digits3|.|2025|opt"],
    n: 2,
  },
  {
    hint: "a project code starting with P/ and then the year, then eight characters mixing letters and digits (parts separated by slashes)",
    keys: ["project|P|alnum8|/|2025|opt"],
    n: 1,
  },
  {
    hint: "a project code starting with P/ and then the year, then four digits (parts separated by slashes)",
    keys: ["project|P|digits4|/|2025|opt", "project|P|digits4|/|2027|opt"],
    n: 2,
  },
  {
    hint: "a project code starting with P/ and then the year, then seven digits (parts separated by slashes)",
    keys: ["project|P|digits7|/|2027|opt"],
    n: 2,
  },
  {
    hint: "a project code starting with P/ and then the year, then ten digits (parts separated by slashes)",
    keys: ["project|P|digits10|/|2025|opt"],
    n: 1,
  },
  {
    hint: "a project code starting with PRJ and then the year, then seven digits (without separators)",
    keys: ["project|PRJ|digits7||2026|opt"],
    n: 1,
  },
  {
    hint: "a project code starting with PRJ- and then the year, then eight characters mixing letters and digits (parts separated by hyphens)",
    keys: ["project|PRJ|alnum8|-|2025|opt"],
    n: 1,
  },
  {
    hint: "a project code starting with PRJ- and then the year, then four digits (parts separated by hyphens)",
    keys: ["project|PRJ|digits4|-|2027|opt"],
    n: 1,
  },
  {
    hint: "a project code starting with PRJ- and then the year, then three digits (parts separated by hyphens)",
    keys: ["project|PRJ|digits3|-|2024|opt"],
    n: 2,
  },
  {
    hint: "a project code starting with PRJ. and then the year, then nine digits (parts separated by dots)",
    keys: ["project|PRJ|digits9|.|2025|opt"],
    n: 2,
  },
  {
    hint: "a project code starting with PRJ. and then the year, then ten digits (parts separated by dots)",
    keys: ["project|PRJ|digits10|.|2027|opt"],
    n: 1,
  },
  {
    hint: "a project code starting with PRJ/ and then nine digits (parts separated by slashes)",
    keys: ["project|PRJ|digits9|/|-|req"],
    n: 2,
  },
  {
    hint: "a project code starting with PRJ/ and then six characters mixing letters and digits (parts separated by slashes)",
    keys: ["project|PRJ|alnum6|/|-|req"],
    n: 2,
  },
  {
    hint: "a project code starting with PRJ/ and then the year, then five digits (parts separated by slashes)",
    keys: ["project|PRJ|digits5|/|2025|opt"],
    n: 1,
  },
  {
    hint: "a project code starting with PRJ/ and then the year, then nine characters mixing letters and digits (parts separated by slashes)",
    keys: ["project|PRJ|alnum9|/|2024|opt"],
    n: 2,
  },
  {
    hint: "a project code starting with PRJ/ and then the year, then six digits (parts separated by slashes)",
    keys: ["project|PRJ|digits6|/|2026|opt"],
    n: 1,
  },
  {
    hint: "a project code starting with PRJ/ and then the year, then three digits (parts separated by slashes)",
    keys: ["project|PRJ|digits3|/|2027|opt"],
    n: 1,
  },
  {
    hint: "a project code starting with PRJ/ and then two letters and five digits (parts separated by slashes)",
    keys: ["project|PRJ|letters2,digits5|/|-|req"],
    n: 3,
  },
  {
    hint: "a project code starting with PROJ and then the year, then eight digits (without separators)",
    keys: ["project|PROJ|digits8||2026|opt"],
    n: 1,
  },
  {
    hint: "a project code starting with PROJ and then the year, then nine digits (without separators)",
    keys: ["project|PROJ|digits9||2025|opt"],
    n: 2,
  },
  {
    hint: "a project code starting with PROJ and then the year, then six characters mixing letters and digits (without separators)",
    keys: ["project|PROJ|alnum6||2025|opt"],
    n: 1,
  },
  {
    hint: "a project code starting with PROJ and then the year, then six digits (without separators)",
    keys: ["project|PROJ|digits6||2027|opt"],
    n: 2,
  },
  {
    hint: "a project code starting with PROJ and then three digits (without separators)",
    keys: ["project|PROJ|digits3||-|req"],
    n: 1,
  },
  {
    hint: "a project code starting with PROJ- and then the year, then five digits (parts separated by hyphens)",
    keys: ["project|PROJ|digits5|-|2025|opt"],
    n: 1,
  },
  {
    hint: "a project code starting with PROJ- and then the year, then nine digits (parts separated by hyphens)",
    keys: ["project|PROJ|digits9|-|2025|opt", "project|PROJ|digits9|-|2026|opt"],
    n: 2,
  },
  {
    hint: "a project code starting with PROJ- and then two digits and two letters and two digits (parts separated by hyphens)",
    keys: ["project|PROJ|digits2,letters2,digits2|-|-|req"],
    n: 2,
  },
  {
    hint: "a project code starting with PROJ. and then eight characters mixing letters and digits (parts separated by dots)",
    keys: ["project|PROJ|alnum8|.|-|req"],
    n: 2,
  },
  {
    hint: "a project code starting with PROJ. and then the year, then seven characters mixing letters and digits (parts separated by dots)",
    keys: ["project|PROJ|alnum7|.|2025|opt"],
    n: 1,
  },
  {
    hint: "a project code starting with PROJ. and then the year, then two letters and five digits (parts separated by dots)",
    keys: ["project|PROJ|letters2,digits5|.|2025|opt"],
    n: 2,
  },
  {
    hint: "a project code starting with PROJ. and then two letters and two digits and two letters (parts separated by dots)",
    keys: ["project|PROJ|letters2,digits2,letters2|.|-|req"],
    n: 2,
  },
  {
    hint: "a project code starting with PROJ/ and then the year, then five digits (parts separated by slashes)",
    keys: ["project|PROJ|digits5|/|2024|opt"],
    n: 1,
  },
  {
    hint: "a project code starting with PROJ/ and then the year, then six characters mixing letters and digits (parts separated by slashes)",
    keys: ["project|PROJ|alnum6|/|2024|opt"],
    n: 2,
  },
  {
    hint: "a project code starting with PROJ/ and then the year, then ten digits (parts separated by slashes)",
    keys: ["project|PROJ|digits10|/|2024|opt"],
    n: 2,
  },
  {
    hint: "a registration number starting with INS- and then the year, then nine characters mixing letters and digits (parts separated by hyphens)",
    keys: ["registration|INS|alnum9|-|2027|opt"],
    n: 2,
  },
  {
    hint: "a registration number starting with REG and then the year, then ten digits (without separators)",
    keys: ["registration|REG|digits10||2025|opt"],
    n: 1,
  },
  {
    hint: "a registration number starting with REG. and then the year, then four digits (parts separated by dots)",
    keys: ["registration|REG|digits4|.|2027|opt"],
    n: 2,
  },
  {
    hint: "a registration number starting with REG. and then the year, then six characters mixing letters and digits (parts separated by dots)",
    keys: ["registration|REG|alnum6|.|2025|opt"],
    n: 1,
  },
  {
    hint: "a registration number starting with REG. and then the year, then three digits (parts separated by dots)",
    keys: ["registration|REG|digits3|.|2027|opt"],
    n: 2,
  },
  {
    hint: "a registration number starting with REG. and then the year, then two letters and five digits (parts separated by dots)",
    keys: ["registration|REG|letters2,digits5|.|2025|opt"],
    n: 1,
  },
  {
    hint: "a registration number starting with REG/ and then five digits (parts separated by slashes)",
    keys: ["registration|REG|digits5|/|-|req"],
    n: 1,
  },
  {
    hint: "a specimen number starting with LAB and then the year, then five digits (without separators)",
    keys: ["specimen|LAB|digits5||2025|opt"],
    n: 1,
  },
  {
    hint: "a specimen number starting with LAB. and then the year, then two letters and two digits and two letters (parts separated by dots)",
    keys: ["specimen|LAB|letters2,digits2,letters2|.|2024|opt"],
    n: 1,
  },
  {
    hint: "a specimen number starting with LAB/ and then the year, then nine characters mixing letters and digits (parts separated by slashes)",
    keys: ["specimen|LAB|alnum9|/|2025|opt"],
    n: 2,
  },
  {
    hint: "a specimen number starting with MON and then the year, then five digits (without separators)",
    keys: ["specimen|MON|digits5||2026|opt"],
    n: 2,
  },
  {
    hint: "a specimen number starting with MON. and then the year, then eight characters mixing letters and digits (parts separated by dots)",
    keys: ["specimen|MON|alnum8|.|2026|opt", "specimen|MON|alnum8|.|2027|opt"],
    n: 3,
  },
  {
    hint: "a specimen number starting with MON/ and then seven characters mixing letters and digits (parts separated by slashes)",
    keys: ["specimen|MON|alnum7|/|-|req"],
    n: 1,
  },
  {
    hint: "a specimen number starting with MON/ and then the year, then three digits (parts separated by slashes)",
    keys: ["specimen|MON|digits3|/|2027|opt"],
    n: 1,
  },
  {
    hint: "a vessel number starting with SCH and then the year, then five digits (without separators)",
    keys: ["vessel|SCH|digits5||2026|opt"],
    n: 1,
  },
  {
    hint: "a vessel number starting with SCH. and then the year, then four characters mixing letters and digits and four digits (parts separated by dots)",
    keys: ["vessel|SCH|alnum4,digits4|.|2025|opt"],
    n: 1,
  },
  {
    hint: "a vessel number starting with SCH/ and then six digits (parts separated by slashes)",
    keys: ["vessel|SCH|digits6|/|-|req"],
    n: 1,
  },
  {
    hint: "a vessel number starting with VRT and then the year, then six characters mixing letters and digits (without separators)",
    keys: ["vessel|VRT|alnum6||2027|opt"],
    n: 2,
  },
  {
    hint: "a vessel number starting with VRT- and then the year, then two letters and two digits and two letters (parts separated by hyphens)",
    keys: ["vessel|VRT|letters2,digits2,letters2|-|2027|opt"],
    n: 1,
  },
  {
    hint: "a vessel number starting with VRT/ and then six characters mixing letters and digits (parts separated by slashes)",
    keys: ["vessel|VRT|alnum6|/|-|req"],
    n: 1,
  },
  {
    hint: "asset code in a fixed shape: starts with AST and ends with eight characters mixing letters and digits, with the year 2025 included (without separators)",
    keys: ["asset|AST|alnum8||2025|req"],
    n: 1,
  },
  {
    hint: "asset code in a fixed shape: starts with AST and ends with nine characters mixing letters and digits, with the year 2024 included (without separators)",
    keys: ["asset|AST|alnum9||2024|req"],
    n: 1,
  },
  {
    hint: "asset code in a fixed shape: starts with AST and ends with nine digits, with the year 2026 included (without separators)",
    keys: ["asset|AST|digits9||2026|req"],
    n: 1,
  },
  {
    hint: "asset code in a fixed shape: starts with AST- and ends with six characters mixing letters and digits, with the year 2025 included (parts separated by hyphens)",
    keys: ["asset|AST|alnum6|-|2025|req"],
    n: 1,
  },
  {
    hint: "asset code in a fixed shape: starts with AST- and ends with two letters and five digits, with the year 2024 included (parts separated by hyphens)",
    keys: ["asset|AST|letters2,digits5|-|2024|req"],
    n: 1,
  },
  {
    hint: "asset code in a fixed shape: starts with AST. and ends with eight characters mixing letters and digits, with the year 2024 included (parts separated by dots)",
    keys: ["asset|AST|alnum8|.|2024|req"],
    n: 1,
  },
  {
    hint: "asset code in a fixed shape: starts with AST. and ends with three digits, with the year 2025 included (parts separated by dots)",
    keys: ["asset|AST|digits3|.|2025|req"],
    n: 2,
  },
  {
    hint: "asset code in a fixed shape: starts with AST/ and ends with seven digits, with the year 2026 included (parts separated by slashes)",
    keys: ["asset|AST|digits7|/|2026|req"],
    n: 2,
  },
  {
    hint: "asset code in a fixed shape: starts with MID and ends with four digits (without separators)",
    keys: ["asset|MID|digits4||-|req"],
    n: 1,
  },
  {
    hint: "asset code in a fixed shape: starts with MID and ends with six digits, with the year 2024 included (without separators)",
    keys: ["asset|MID|digits6||2024|req"],
    n: 1,
  },
  {
    hint: "asset code in a fixed shape: starts with MID- and ends with five digits, with the year 2027 included (parts separated by hyphens)",
    keys: ["asset|MID|digits5|-|2027|req"],
    n: 2,
  },
  {
    hint: "asset code in a fixed shape: starts with MID- and ends with six digits, with the year 2026 included (parts separated by hyphens)",
    keys: ["asset|MID|digits6|-|2026|req"],
    n: 2,
  },
  {
    hint: "asset code in a fixed shape: starts with MID. and ends with four digits (parts separated by dots)",
    keys: ["asset|MID|digits4|.|-|req"],
    n: 1,
  },
  {
    hint: "asset code in a fixed shape: starts with MID. and ends with four digits, with the year 2025 included (parts separated by dots)",
    keys: ["asset|MID|digits4|.|2025|req"],
    n: 2,
  },
  {
    hint: "asset code in a fixed shape: starts with MID/ and ends with three digits (parts separated by slashes)",
    keys: ["asset|MID|digits3|/|-|req"],
    n: 1,
  },
  {
    hint: "asset code in a fixed shape: starts with OBJ- and ends with four digits, with the year 2024 included (parts separated by hyphens)",
    keys: ["asset|OBJ|digits4|-|2024|req"],
    n: 1,
  },
  {
    hint: "asset code in a fixed shape: starts with OBJ- and ends with nine characters mixing letters and digits, with the year 2026 included (parts separated by hyphens)",
    keys: ["asset|OBJ|alnum9|-|2026|req"],
    n: 1,
  },
  {
    hint: "asset code in a fixed shape: starts with OBJ- and ends with seven characters mixing letters and digits, with the year 2026 included (parts separated by hyphens)",
    keys: ["asset|OBJ|alnum7|-|2026|req"],
    n: 1,
  },
  {
    hint: "asset code in a fixed shape: starts with OBJ- and ends with six characters mixing letters and digits, with the year 2024 included (parts separated by hyphens)",
    keys: ["asset|OBJ|alnum6|-|2024|req"],
    n: 1,
  },
  {
    hint: "asset code in a fixed shape: starts with OBJ- and ends with two letters and five digits, with the year 2026 included (parts separated by hyphens)",
    keys: ["asset|OBJ|letters2,digits5|-|2026|req"],
    n: 1,
  },
  {
    hint: "asset code in a fixed shape: starts with OBJ. and ends with five digits, with the year 2025 included (parts separated by dots)",
    keys: ["asset|OBJ|digits5|.|2025|req"],
    n: 1,
  },
  {
    hint: "asset code in a fixed shape: starts with OBJ. and ends with nine digits, with the year 2026 included (parts separated by dots)",
    keys: ["asset|OBJ|digits9|.|2026|req"],
    n: 1,
  },
  {
    hint: "asset code in a fixed shape: starts with OBJ. and ends with six digits, with the year 2025 included (parts separated by dots)",
    keys: ["asset|OBJ|digits6|.|2025|req"],
    n: 1,
  },
  {
    hint: "assetcode met vaste opbouw: begint met AST en eindigt met negen tekens met letters en cijfers, met het jaartal 2024 erin (zonder scheidingsteken)",
    keys: ["asset|AST|alnum9||2024|req"],
    n: 1,
  },
  {
    hint: "assetcode met vaste opbouw: begint met AST en eindigt met negen tekens met letters en cijfers, met het jaartal 2026 erin (zonder scheidingsteken)",
    keys: ["asset|AST|alnum9||2026|req"],
    n: 1,
  },
  {
    hint: "assetcode met vaste opbouw: begint met AST- en eindigt met zes tekens met letters en cijfers, met het jaartal 2025 erin (delen gescheiden door koppeltekens)",
    keys: ["asset|AST|alnum6|-|2025|req"],
    n: 1,
  },
  {
    hint: "assetcode met vaste opbouw: begint met AST- en eindigt met zeven tekens met letters en cijfers, met het jaartal 2024 erin (delen gescheiden door koppeltekens)",
    keys: ["asset|AST|alnum7|-|2024|req"],
    n: 1,
  },
  {
    hint: "assetcode met vaste opbouw: begint met AST. en eindigt met drie cijfers (delen gescheiden door punten)",
    keys: ["asset|AST|digits3|.|-|req"],
    n: 1,
  },
  {
    hint: "assetcode met vaste opbouw: begint met AST/ en eindigt met negen tekens met letters en cijfers, met het jaartal 2027 erin (delen gescheiden door schuine strepen)",
    keys: ["asset|AST|alnum9|/|2027|req"],
    n: 1,
  },
  {
    hint: "assetcode met vaste opbouw: begint met AST/ en eindigt met vijf cijfers, met het jaartal 2027 erin (delen gescheiden door schuine strepen)",
    keys: ["asset|AST|digits5|/|2027|req"],
    n: 1,
  },
  {
    hint: "assetcode met vaste opbouw: begint met MID en eindigt met acht tekens met letters en cijfers, met het jaartal 2024 erin (zonder scheidingsteken)",
    keys: ["asset|MID|alnum8||2024|req"],
    n: 1,
  },
  {
    hint: "assetcode met vaste opbouw: begint met MID en eindigt met negen cijfers, met het jaartal 2024 erin (zonder scheidingsteken)",
    keys: ["asset|MID|digits9||2024|req"],
    n: 1,
  },
  {
    hint: "assetcode met vaste opbouw: begint met MID en eindigt met negen tekens met letters en cijfers, met het jaartal 2024 erin (zonder scheidingsteken)",
    keys: ["asset|MID|alnum9||2024|req"],
    n: 1,
  },
  {
    hint: "assetcode met vaste opbouw: begint met MID en eindigt met zes cijfers, met het jaartal 2027 erin (zonder scheidingsteken)",
    keys: ["asset|MID|digits6||2027|req"],
    n: 1,
  },
  {
    hint: "assetcode met vaste opbouw: begint met MID en eindigt met zeven cijfers, met het jaartal 2025 erin (zonder scheidingsteken)",
    keys: ["asset|MID|digits7||2025|req"],
    n: 1,
  },
  {
    hint: "assetcode met vaste opbouw: begint met MID- en eindigt met drie cijfers, met het jaartal 2024 erin (delen gescheiden door koppeltekens)",
    keys: ["asset|MID|digits3|-|2024|req"],
    n: 1,
  },
  {
    hint: "assetcode met vaste opbouw: begint met MID- en eindigt met negen cijfers, met het jaartal 2024 erin (delen gescheiden door koppeltekens)",
    keys: ["asset|MID|digits9|-|2024|req"],
    n: 2,
  },
  {
    hint: "assetcode met vaste opbouw: begint met MID- en eindigt met zeven tekens met letters en cijfers, met het jaartal 2024 erin (delen gescheiden door koppeltekens)",
    keys: ["asset|MID|alnum7|-|2024|req"],
    n: 1,
  },
  {
    hint: "assetcode met vaste opbouw: begint met MID. en eindigt met acht cijfers, met het jaartal 2025 erin (delen gescheiden door punten)",
    keys: ["asset|MID|digits8|.|2025|req"],
    n: 1,
  },
  {
    hint: "assetcode met vaste opbouw: begint met MID. en eindigt met vier cijfers (delen gescheiden door punten)",
    keys: ["asset|MID|digits4|.|-|req"],
    n: 1,
  },
  {
    hint: "assetcode met vaste opbouw: begint met MID/ en eindigt met negen tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["asset|MID|alnum9|/|-|req"],
    n: 1,
  },
  {
    hint: "assetcode met vaste opbouw: begint met MID/ en eindigt met twee letters en vijf cijfers, met het jaartal 2024 erin (delen gescheiden door schuine strepen)",
    keys: ["asset|MID|letters2,digits5|/|2024|req"],
    n: 1,
  },
  {
    hint: "assetcode met vaste opbouw: begint met MID/ en eindigt met zes tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["asset|MID|alnum6|/|-|req"],
    n: 1,
  },
  {
    hint: "assetcode met vaste opbouw: begint met MID/ en eindigt met zeven tekens met letters en cijfers, met het jaartal 2026 erin (delen gescheiden door schuine strepen)",
    keys: ["asset|MID|alnum7|/|2026|req"],
    n: 2,
  },
  {
    hint: "assetcode met vaste opbouw: begint met OBJ en eindigt met negen tekens met letters en cijfers, met het jaartal 2025 erin (zonder scheidingsteken)",
    keys: ["asset|OBJ|alnum9||2025|req"],
    n: 1,
  },
  {
    hint: "assetcode met vaste opbouw: begint met OBJ en eindigt met zes cijfers, met het jaartal 2027 erin (zonder scheidingsteken)",
    keys: ["asset|OBJ|digits6||2027|req"],
    n: 1,
  },
  {
    hint: "assetcode met vaste opbouw: begint met OBJ en eindigt met zeven cijfers, met het jaartal 2027 erin (zonder scheidingsteken)",
    keys: ["asset|OBJ|digits7||2027|req"],
    n: 2,
  },
  {
    hint: "assetcode met vaste opbouw: begint met OBJ- en eindigt met vier cijfers, met het jaartal 2024 erin (delen gescheiden door koppeltekens)",
    keys: ["asset|OBJ|digits4|-|2024|req"],
    n: 1,
  },
  {
    hint: "assetcode met vaste opbouw: begint met OBJ- en eindigt met zeven tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|OBJ|alnum7|-|-|req"],
    n: 1,
  },
  {
    hint: "assetcode met vaste opbouw: begint met OBJ. en eindigt met twee letters en vijf cijfers, met het jaartal 2024 erin (delen gescheiden door punten)",
    keys: ["asset|OBJ|letters2,digits5|.|2024|req"],
    n: 1,
  },
  {
    hint: "assetcode met vaste opbouw: begint met OBJ. en eindigt met zeven tekens met letters en cijfers, met het jaartal 2025 erin (delen gescheiden door punten)",
    keys: ["asset|OBJ|alnum7|.|2025|req"],
    n: 1,
  },
  {
    hint: "assetcode met vaste opbouw: begint met OBJ/ en eindigt met tien cijfers, met het jaartal 2026 erin (delen gescheiden door schuine strepen)",
    keys: ["asset|OBJ|digits10|/|2026|req"],
    n: 1,
  },
  {
    hint: "assetlabel met AST- en twee letters en vijf cijfers",
    keys: ["asset|AST|letters2,digits5|-|-|req"],
    n: 13,
  },
  {
    hint: "batch code in a fixed shape: starts with BATCH and ends with seven characters mixing letters and digits, with the year 2024 included (without separators)",
    keys: ["batch|BATCH|alnum7||2024|req"],
    n: 2,
  },
  {
    hint: "batch code in a fixed shape: starts with BATCH and ends with six characters mixing letters and digits, with the year 2024 included (without separators)",
    keys: ["batch|BATCH|alnum6||2024|req"],
    n: 1,
  },
  {
    hint: "batch code in a fixed shape: starts with BATCH and ends with six digits, with the year 2025 included (without separators)",
    keys: ["batch|BATCH|digits6||2025|req"],
    n: 1,
  },
  {
    hint: "batch code in a fixed shape: starts with BATCH- and ends with six characters mixing letters and digits (parts separated by hyphens)",
    keys: ["batch|BATCH|alnum6|-|-|req"],
    n: 1,
  },
  {
    hint: "batch code in a fixed shape: starts with BATCH- and ends with three digits, with the year 2027 included (parts separated by hyphens)",
    keys: ["batch|BATCH|digits3|-|2027|req"],
    n: 1,
  },
  {
    hint: "batch code in a fixed shape: starts with BATCH. and ends with eight digits, with the year 2026 included (parts separated by dots)",
    keys: ["batch|BATCH|digits8|.|2026|req"],
    n: 1,
  },
  {
    hint: "batch code in a fixed shape: starts with BATCH/ and ends with eight digits, with the year 2027 included (parts separated by slashes)",
    keys: ["batch|BATCH|digits8|/|2027|req"],
    n: 1,
  },
  {
    hint: "batch code in a fixed shape: starts with BATCH/ and ends with nine characters mixing letters and digits, with the year 2025 included (parts separated by slashes)",
    keys: ["batch|BATCH|alnum9|/|2025|req"],
    n: 1,
  },
  {
    hint: "batch code in a fixed shape: starts with BATCH/ and ends with two letters and five digits (parts separated by slashes)",
    keys: ["batch|BATCH|letters2,digits5|/|-|req"],
    n: 2,
  },
  {
    hint: "batch code in a fixed shape: starts with BATCH/ and ends with two letters and five digits, with the year 2024 included (parts separated by slashes)",
    keys: ["batch|BATCH|letters2,digits5|/|2024|req"],
    n: 1,
  },
  {
    hint: "batch code in a fixed shape: starts with CH and ends with nine characters mixing letters and digits, with the year 2026 included (without separators)",
    keys: ["batch|CH|alnum9||2026|req"],
    n: 1,
  },
  {
    hint: "batch code in a fixed shape: starts with CH and ends with seven characters mixing letters and digits, with the year 2025 included (without separators)",
    keys: ["batch|CH|alnum7||2025|req"],
    n: 2,
  },
  {
    hint: "batch code in a fixed shape: starts with CH and ends with six digits, with the year 2025 included (without separators)",
    keys: ["batch|CH|digits6||2025|req"],
    n: 1,
  },
  {
    hint: "batch code in a fixed shape: starts with CH- and ends with eight characters mixing letters and digits (parts separated by hyphens)",
    keys: ["batch|CH|alnum8|-|-|req"],
    n: 1,
  },
  {
    hint: "batch code in a fixed shape: starts with CH- and ends with six characters mixing letters and digits, with the year 2026 included (parts separated by hyphens)",
    keys: ["batch|CH|alnum6|-|2026|req"],
    n: 1,
  },
  {
    hint: "batch code in a fixed shape: starts with CH- and ends with ten digits (parts separated by hyphens)",
    keys: ["batch|CH|digits10|-|-|req"],
    n: 2,
  },
  {
    hint: "batch code in a fixed shape: starts with CH. and ends with seven digits (parts separated by dots)",
    keys: ["batch|CH|digits7|.|-|req"],
    n: 1,
  },
  {
    hint: "batch code in a fixed shape: starts with CH/ and ends with seven digits (parts separated by slashes)",
    keys: ["batch|CH|digits7|/|-|req"],
    n: 1,
  },
  {
    hint: "batch code in a fixed shape: starts with LOT- and ends with five digits, with the year 2024 included (parts separated by hyphens)",
    keys: ["batch|LOT|digits5|-|2024|req"],
    n: 2,
  },
  {
    hint: "batch code in a fixed shape: starts with LOT- and ends with four digits, with the year 2026 included (parts separated by hyphens)",
    keys: ["batch|LOT|digits4|-|2026|req"],
    n: 1,
  },
  {
    hint: "batch code in a fixed shape: starts with LOT- and ends with seven characters mixing letters and digits, with the year 2024 included (parts separated by hyphens)",
    keys: ["batch|LOT|alnum7|-|2024|req"],
    n: 1,
  },
  {
    hint: "batch code in a fixed shape: starts with LOT. and ends with four digits, with the year 2024 included (parts separated by dots)",
    keys: ["batch|LOT|digits4|.|2024|req"],
    n: 1,
  },
  {
    hint: "batch code in a fixed shape: starts with LOT. and ends with three digits, with the year 2027 included (parts separated by dots)",
    keys: ["batch|LOT|digits3|.|2027|req"],
    n: 1,
  },
  {
    hint: "batch code in a fixed shape: starts with LOT. and ends with two letters and five digits, with the year 2027 included (parts separated by dots)",
    keys: ["batch|LOT|letters2,digits5|.|2027|req"],
    n: 1,
  },
  {
    hint: "batch code in a fixed shape: starts with LOT/ and ends with eight characters mixing letters and digits (parts separated by slashes)",
    keys: ["batch|LOT|alnum8|/|-|req"],
    n: 1,
  },
  {
    hint: "batch code in a fixed shape: starts with LOT/ and ends with four digits, with the year 2024 included (parts separated by slashes)",
    keys: ["batch|LOT|digits4|/|2024|req"],
    n: 2,
  },
  {
    hint: "batch code in a fixed shape: starts with LOT/ and ends with nine digits, with the year 2025 included (parts separated by slashes)",
    keys: ["batch|LOT|digits9|/|2025|req"],
    n: 1,
  },
  {
    hint: "batch code in a fixed shape: starts with LOT/ and ends with two letters and five digits, with the year 2025 included (parts separated by slashes)",
    keys: ["batch|LOT|letters2,digits5|/|2025|req"],
    n: 1,
  },
  {
    hint: "batch number with BATCH-, the year and four digits",
    keys: ["batch|BATCH|digits4|-|2026|opt"],
    n: 11,
  },
  {
    hint: "batchcode met vaste opbouw: begint met BATCH en eindigt met negen cijfers, met het jaartal 2025 erin (zonder scheidingsteken)",
    keys: ["batch|BATCH|digits9||2025|req"],
    n: 1,
  },
  {
    hint: "batchcode met vaste opbouw: begint met BATCH en eindigt met tien cijfers, met het jaartal 2027 erin (zonder scheidingsteken)",
    keys: ["batch|BATCH|digits10||2027|req"],
    n: 1,
  },
  {
    hint: "batchcode met vaste opbouw: begint met BATCH en eindigt met zes cijfers, met het jaartal 2025 erin (zonder scheidingsteken)",
    keys: ["batch|BATCH|digits6||2025|req"],
    n: 1,
  },
  {
    hint: "batchcode met vaste opbouw: begint met BATCH- en eindigt met drie cijfers, met het jaartal 2027 erin (delen gescheiden door koppeltekens)",
    keys: ["batch|BATCH|digits3|-|2027|req"],
    n: 1,
  },
  {
    hint: "batchcode met vaste opbouw: begint met BATCH- en eindigt met negen tekens met letters en cijfers, met het jaartal 2025 erin (delen gescheiden door koppeltekens)",
    keys: ["batch|BATCH|alnum9|-|2025|req"],
    n: 2,
  },
  {
    hint: "batchcode met vaste opbouw: begint met BATCH. en eindigt met negen cijfers, met het jaartal 2027 erin (delen gescheiden door punten)",
    keys: ["batch|BATCH|digits9|.|2027|req"],
    n: 1,
  },
  {
    hint: "batchcode met vaste opbouw: begint met BATCH. en eindigt met zeven tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["batch|BATCH|alnum7|.|-|req"],
    n: 2,
  },
  {
    hint: "batchcode met vaste opbouw: begint met BATCH/ en eindigt met acht cijfers, met het jaartal 2026 erin (delen gescheiden door schuine strepen)",
    keys: ["batch|BATCH|digits8|/|2026|req"],
    n: 2,
  },
  {
    hint: "batchcode met vaste opbouw: begint met BATCH/ en eindigt met acht cijfers, met het jaartal 2027 erin (delen gescheiden door schuine strepen)",
    keys: ["batch|BATCH|digits8|/|2027|req"],
    n: 1,
  },
  {
    hint: "batchcode met vaste opbouw: begint met BATCH/ en eindigt met negen tekens met letters en cijfers, met het jaartal 2025 erin (delen gescheiden door schuine strepen)",
    keys: ["batch|BATCH|alnum9|/|2025|req"],
    n: 1,
  },
  {
    hint: "batchcode met vaste opbouw: begint met BATCH/ en eindigt met twee letters en vijf cijfers, met het jaartal 2024 erin (delen gescheiden door schuine strepen)",
    keys: ["batch|BATCH|letters2,digits5|/|2024|req"],
    n: 1,
  },
  {
    hint: "batchcode met vaste opbouw: begint met BATCH/ en eindigt met vijf cijfers, met het jaartal 2025 erin (delen gescheiden door schuine strepen)",
    keys: ["batch|BATCH|digits5|/|2025|req"],
    n: 1,
  },
  {
    hint: "batchcode met vaste opbouw: begint met CH- en eindigt met twee letters en vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["batch|CH|letters2,digits5|-|-|req"],
    n: 1,
  },
  {
    hint: "batchcode met vaste opbouw: begint met CH. en eindigt met acht cijfers, met het jaartal 2026 erin (delen gescheiden door punten)",
    keys: ["batch|CH|digits8|.|2026|req"],
    n: 2,
  },
  {
    hint: "batchcode met vaste opbouw: begint met CH. en eindigt met zeven cijfers (delen gescheiden door punten)",
    keys: ["batch|CH|digits7|.|-|req"],
    n: 1,
  },
  {
    hint: "batchcode met vaste opbouw: begint met CH/ en eindigt met drie cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|CH|digits3|/|-|req"],
    n: 2,
  },
  {
    hint: "batchcode met vaste opbouw: begint met CH/ en eindigt met zes cijfers, met het jaartal 2026 erin (delen gescheiden door schuine strepen)",
    keys: ["batch|CH|digits6|/|2026|req"],
    n: 2,
  },
  {
    hint: "batchcode met vaste opbouw: begint met CH/ en eindigt met zeven cijfers, met het jaartal 2026 erin (delen gescheiden door schuine strepen)",
    keys: ["batch|CH|digits7|/|2026|req"],
    n: 1,
  },
  {
    hint: "batchcode met vaste opbouw: begint met CH/ en eindigt met zeven tekens met letters en cijfers, met het jaartal 2024 erin (delen gescheiden door schuine strepen)",
    keys: ["batch|CH|alnum7|/|2024|req"],
    n: 1,
  },
  {
    hint: "batchcode met vaste opbouw: begint met LOT en eindigt met zes tekens met letters en cijfers, met het jaartal 2024 erin (zonder scheidingsteken)",
    keys: ["batch|LOT|alnum6||2024|req"],
    n: 1,
  },
  {
    hint: "batchcode met vaste opbouw: begint met LOT- en eindigt met drie cijfers, met het jaartal 2024 erin (delen gescheiden door koppeltekens)",
    keys: ["batch|LOT|digits3|-|2024|req"],
    n: 1,
  },
  {
    hint: "batchcode met vaste opbouw: begint met LOT- en eindigt met negen cijfers, met het jaartal 2027 erin (delen gescheiden door koppeltekens)",
    keys: ["batch|LOT|digits9|-|2027|req"],
    n: 1,
  },
  {
    hint: "batchcode met vaste opbouw: begint met LOT- en eindigt met zeven tekens met letters en cijfers, met het jaartal 2024 erin (delen gescheiden door koppeltekens)",
    keys: ["batch|LOT|alnum7|-|2024|req"],
    n: 1,
  },
  {
    hint: "batchcode met vaste opbouw: begint met LOT. en eindigt met zes cijfers, met het jaartal 2026 erin (delen gescheiden door punten)",
    keys: ["batch|LOT|digits6|.|2026|req"],
    n: 1,
  },
  {
    hint: "batchcode met vaste opbouw: begint met LOT. en eindigt met zeven cijfers, met het jaartal 2024 erin (delen gescheiden door punten)",
    keys: ["batch|LOT|digits7|.|2024|req"],
    n: 2,
  },
  {
    hint: "batchcode met vaste opbouw: begint met LOT/ en eindigt met twee letters en vijf cijfers, met het jaartal 2024 erin (delen gescheiden door schuine strepen)",
    keys: ["batch|LOT|letters2,digits5|/|2024|req"],
    n: 1,
  },
  {
    hint: "batchcode met vaste opbouw: begint met LOT/ en eindigt met vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|LOT|digits5|/|-|req"],
    n: 1,
  },
  {
    hint: "batchcode met vaste opbouw: begint met LOT/ en eindigt met zeven cijfers, met het jaartal 2024 erin (delen gescheiden door schuine strepen)",
    keys: ["batch|LOT|digits7|/|2024|req"],
    n: 1,
  },
  {
    hint: "batchnummer met BATCH-, jaartal en vier cijfers",
    keys: ["batch|BATCH|digits4|-|2026|opt"],
    n: 9,
  },
  {
    hint: "case code in a fixed shape: starts with CASE and ends with five digits, with the year 2026 included (without separators)",
    keys: ["case|CASE|digits5||2026|req"],
    n: 1,
  },
  {
    hint: "case code in a fixed shape: starts with CASE and ends with four digits, with the year 2025 included (without separators)",
    keys: ["case|CASE|digits4||2025|req"],
    n: 1,
  },
  {
    hint: "case code in a fixed shape: starts with CASE and ends with ten digits, with the year 2025 included (without separators)",
    keys: ["case|CASE|digits10||2025|req"],
    n: 1,
  },
  {
    hint: "case code in a fixed shape: starts with CASE- and ends with six digits, with the year 2027 included (parts separated by hyphens)",
    keys: ["case|CASE|digits6|-|2027|req"],
    n: 1,
  },
  {
    hint: "case code in a fixed shape: starts with CASE- and ends with two letters and five digits, with the year 2024 included (parts separated by hyphens)",
    keys: ["case|CASE|letters2,digits5|-|2024|req"],
    n: 1,
  },
  {
    hint: "case code in a fixed shape: starts with CASE. and ends with eight digits (parts separated by dots)",
    keys: ["case|CASE|digits8|.|-|req"],
    n: 1,
  },
  {
    hint: "case code in a fixed shape: starts with CASE. and ends with six digits, with the year 2026 included (parts separated by dots)",
    keys: ["case|CASE|digits6|.|2026|req"],
    n: 1,
  },
  {
    hint: "case code in a fixed shape: starts with CASE. and ends with three digits, with the year 2026 included (parts separated by dots)",
    keys: ["case|CASE|digits3|.|2026|req"],
    n: 1,
  },
  {
    hint: "case code in a fixed shape: starts with CASE/ and ends with nine characters mixing letters and digits, with the year 2027 included (parts separated by slashes)",
    keys: ["case|CASE|alnum9|/|2027|req"],
    n: 1,
  },
  {
    hint: "case code in a fixed shape: starts with CASE/ and ends with two letters and five digits, with the year 2025 included (parts separated by slashes)",
    keys: ["case|CASE|letters2,digits5|/|2025|req"],
    n: 1,
  },
  {
    hint: "case code in a fixed shape: starts with DOSS and ends with five digits, with the year 2027 included (without separators)",
    keys: ["case|DOSS|digits5||2027|req"],
    n: 1,
  },
  {
    hint: "case code in a fixed shape: starts with DOSS and ends with seven characters mixing letters and digits, with the year 2026 included (without separators)",
    keys: ["case|DOSS|alnum7||2026|req"],
    n: 1,
  },
  {
    hint: "case code in a fixed shape: starts with DOSS- and ends with seven digits, with the year 2026 included (parts separated by hyphens)",
    keys: ["case|DOSS|digits7|-|2026|req"],
    n: 1,
  },
  {
    hint: "case code in a fixed shape: starts with DOSS. and ends with nine characters mixing letters and digits, with the year 2025 included (parts separated by dots)",
    keys: ["case|DOSS|alnum9|.|2025|req"],
    n: 1,
  },
  {
    hint: "case code in a fixed shape: starts with DOSS. and ends with six characters mixing letters and digits, with the year 2024 included (parts separated by dots)",
    keys: ["case|DOSS|alnum6|.|2024|req"],
    n: 1,
  },
  {
    hint: "case code in a fixed shape: starts with DOSS. and ends with two letters and five digits, with the year 2025 included (parts separated by dots)",
    keys: ["case|DOSS|letters2,digits5|.|2025|req"],
    n: 1,
  },
  {
    hint: "case code in a fixed shape: starts with DOSS/ and ends with five digits (parts separated by slashes)",
    keys: ["case|DOSS|digits5|/|-|req"],
    n: 1,
  },
  {
    hint: "case code in a fixed shape: starts with DOSS/ and ends with two letters and five digits (parts separated by slashes)",
    keys: ["case|DOSS|letters2,digits5|/|-|req"],
    n: 1,
  },
  {
    hint: "case code in a fixed shape: starts with ZD and ends with nine characters mixing letters and digits (without separators)",
    keys: ["case|ZD|alnum9||-|req"],
    n: 1,
  },
  {
    hint: "case code in a fixed shape: starts with ZD and ends with three digits, with the year 2026 included (without separators)",
    keys: ["case|ZD|digits3||2026|req"],
    n: 1,
  },
  {
    hint: "case code in a fixed shape: starts with ZD- and ends with nine characters mixing letters and digits, with the year 2025 included (parts separated by hyphens)",
    keys: ["case|ZD|alnum9|-|2025|req"],
    n: 1,
  },
  {
    hint: "case code in a fixed shape: starts with ZD. and ends with eight digits, with the year 2026 included (parts separated by dots)",
    keys: ["case|ZD|digits8|.|2026|req"],
    n: 1,
  },
  {
    hint: "case code in a fixed shape: starts with ZD/ and ends with eight digits, with the year 2026 included (parts separated by slashes)",
    keys: ["case|ZD|digits8|/|2026|req"],
    n: 1,
  },
  {
    hint: "case code, two letters, hyphen, six digits",
    keys: ["case||letters2,digits6|-|-|req"],
    n: 6,
  },
  {
    hint: "come up with a asset code: starts with AST, then the year, and contains eight characters mixing letters and digits (without separators)",
    keys: ["asset|AST|alnum8||2025|opt"],
    n: 1,
  },
  {
    hint: "come up with a asset code: starts with AST, then the year, and contains nine characters mixing letters and digits (without separators)",
    keys: ["asset|AST|alnum9||2024|opt"],
    n: 1,
  },
  {
    hint: "come up with a asset code: starts with AST-, then the year, and contains eight digits (parts separated by hyphens)",
    keys: ["asset|AST|digits8|-|2024|opt"],
    n: 2,
  },
  {
    hint: "come up with a asset code: starts with AST-, then the year, and contains six characters mixing letters and digits (parts separated by hyphens)",
    keys: ["asset|AST|alnum6|-|2025|opt"],
    n: 1,
  },
  {
    hint: "come up with a asset code: starts with AST-, then the year, and contains two letters and five digits (parts separated by hyphens)",
    keys: ["asset|AST|letters2,digits5|-|2027|opt"],
    n: 1,
  },
  {
    hint: "come up with a asset code: starts with AST., then the year, and contains eight characters mixing letters and digits (parts separated by dots)",
    keys: ["asset|AST|alnum8|.|2024|opt"],
    n: 1,
  },
  {
    hint: "come up with a asset code: starts with AST., then the year, and contains eight digits (parts separated by dots)",
    keys: ["asset|AST|digits8|.|2025|opt"],
    n: 2,
  },
  {
    hint: "come up with a asset code: starts with AST., then the year, and contains two letters and five digits (parts separated by dots)",
    keys: ["asset|AST|letters2,digits5|.|2027|opt"],
    n: 1,
  },
  {
    hint: "come up with a asset code: starts with AST/, then the year, and contains five digits (parts separated by slashes)",
    keys: ["asset|AST|digits5|/|2027|opt"],
    n: 1,
  },
  {
    hint: "come up with a asset code: starts with AST/, then the year, and contains nine characters mixing letters and digits (parts separated by slashes)",
    keys: ["asset|AST|alnum9|/|2027|opt"],
    n: 1,
  },
  {
    hint: "come up with a asset code: starts with AST/, then the year, and contains two letters and five digits (parts separated by slashes)",
    keys: ["asset|AST|letters2,digits5|/|2026|opt"],
    n: 1,
  },
  {
    hint: "come up with a asset code: starts with MID, then the year, and contains eight characters mixing letters and digits (without separators)",
    keys: ["asset|MID|alnum8||2024|opt"],
    n: 1,
  },
  {
    hint: "come up with a asset code: starts with MID, then the year, and contains nine characters mixing letters and digits (without separators)",
    keys: ["asset|MID|alnum9||2024|opt"],
    n: 1,
  },
  {
    hint: "come up with a asset code: starts with MID, then the year, and contains nine digits (without separators)",
    keys: ["asset|MID|digits9||2024|opt"],
    n: 2,
  },
  {
    hint: "come up with a asset code: starts with MID, then the year, and contains six digits (without separators)",
    keys: ["asset|MID|digits6||2024|opt", "asset|MID|digits6||2027|opt"],
    n: 2,
  },
  {
    hint: "come up with a asset code: starts with MID-, then the year, and contains five digits (parts separated by hyphens)",
    keys: ["asset|MID|digits5|-|2027|opt"],
    n: 1,
  },
  {
    hint: "come up with a asset code: starts with MID-, then the year, and contains three digits (parts separated by hyphens)",
    keys: ["asset|MID|digits3|-|2024|opt"],
    n: 1,
  },
  {
    hint: "come up with a asset code: starts with MID-, then the year, and contains two letters and five digits (parts separated by hyphens)",
    keys: ["asset|MID|letters2,digits5|-|2026|opt"],
    n: 1,
  },
  {
    hint: "come up with a asset code: starts with MID., and contains four digits (parts separated by dots)",
    keys: ["asset|MID|digits4|.|-|req"],
    n: 1,
  },
  {
    hint: "come up with a asset code: starts with MID., then the year, and contains eight characters mixing letters and digits (parts separated by dots)",
    keys: ["asset|MID|alnum8|.|2024|opt"],
    n: 1,
  },
  {
    hint: "come up with a asset code: starts with MID/, and contains nine characters mixing letters and digits (parts separated by slashes)",
    keys: ["asset|MID|alnum9|/|-|req"],
    n: 1,
  },
  {
    hint: "come up with a asset code: starts with MID/, and contains six characters mixing letters and digits (parts separated by slashes)",
    keys: ["asset|MID|alnum6|/|-|req"],
    n: 1,
  },
  {
    hint: "come up with a asset code: starts with MID/, and contains three digits (parts separated by slashes)",
    keys: ["asset|MID|digits3|/|-|req"],
    n: 1,
  },
  {
    hint: "come up with a asset code: starts with MID/, then the year, and contains seven characters mixing letters and digits (parts separated by slashes)",
    keys: ["asset|MID|alnum7|/|2026|opt"],
    n: 1,
  },
  {
    hint: "come up with a asset code: starts with MID/, then the year, and contains two letters and five digits (parts separated by slashes)",
    keys: ["asset|MID|letters2,digits5|/|2024|opt"],
    n: 2,
  },
  {
    hint: "come up with a asset code: starts with OBJ, then the year, and contains seven digits (without separators)",
    keys: ["asset|OBJ|digits7||2027|opt"],
    n: 1,
  },
  {
    hint: "come up with a asset code: starts with OBJ-, and contains seven characters mixing letters and digits (parts separated by hyphens)",
    keys: ["asset|OBJ|alnum7|-|-|req"],
    n: 1,
  },
  {
    hint: "come up with a asset code: starts with OBJ-, then the year, and contains four digits (parts separated by hyphens)",
    keys: ["asset|OBJ|digits4|-|2024|opt"],
    n: 1,
  },
  {
    hint: "come up with a asset code: starts with OBJ-, then the year, and contains seven characters mixing letters and digits (parts separated by hyphens)",
    keys: ["asset|OBJ|alnum7|-|2026|opt"],
    n: 1,
  },
  {
    hint: "come up with a asset code: starts with OBJ-, then the year, and contains six characters mixing letters and digits (parts separated by hyphens)",
    keys: ["asset|OBJ|alnum6|-|2025|opt"],
    n: 1,
  },
  {
    hint: "come up with a asset code: starts with OBJ-, then the year, and contains two letters and five digits (parts separated by hyphens)",
    keys: ["asset|OBJ|letters2,digits5|-|2026|opt"],
    n: 1,
  },
  {
    hint: "come up with a asset code: starts with OBJ., and contains five digits (parts separated by dots)",
    keys: ["asset|OBJ|digits5|.|-|req"],
    n: 2,
  },
  {
    hint: "come up with a asset code: starts with OBJ., then the year, and contains eight characters mixing letters and digits (parts separated by dots)",
    keys: ["asset|OBJ|alnum8|.|2026|opt"],
    n: 1,
  },
  {
    hint: "come up with a asset code: starts with OBJ., then the year, and contains seven characters mixing letters and digits (parts separated by dots)",
    keys: ["asset|OBJ|alnum7|.|2025|opt"],
    n: 1,
  },
  {
    hint: "come up with a asset code: starts with OBJ., then the year, and contains six digits (parts separated by dots)",
    keys: ["asset|OBJ|digits6|.|2025|opt"],
    n: 2,
  },
  {
    hint: "come up with a asset code: starts with OBJ., then the year, and contains two letters and five digits (parts separated by dots)",
    keys: ["asset|OBJ|letters2,digits5|.|2024|opt"],
    n: 1,
  },
  {
    hint: "come up with a asset code: starts with OBJ/, then the year, and contains ten digits (parts separated by slashes)",
    keys: ["asset|OBJ|digits10|/|2026|opt"],
    n: 1,
  },
  {
    hint: "come up with a batch code: starts with BATCH, then the year, and contains seven characters mixing letters and digits (without separators)",
    keys: ["batch|BATCH|alnum7||2024|opt"],
    n: 1,
  },
  {
    hint: "come up with a batch code: starts with BATCH, then the year, and contains six characters mixing letters and digits (without separators)",
    keys: ["batch|BATCH|alnum6||2024|opt"],
    n: 1,
  },
  {
    hint: "come up with a batch code: starts with BATCH, then the year, and contains six digits (without separators)",
    keys: ["batch|BATCH|digits6||2025|opt"],
    n: 2,
  },
  {
    hint: "come up with a batch code: starts with BATCH-, then the year, and contains eight characters mixing letters and digits (parts separated by hyphens)",
    keys: ["batch|BATCH|alnum8|-|2027|opt"],
    n: 1,
  },
  {
    hint: "come up with a batch code: starts with BATCH-, then the year, and contains nine characters mixing letters and digits (parts separated by hyphens)",
    keys: ["batch|BATCH|alnum9|-|2025|opt"],
    n: 1,
  },
  {
    hint: "come up with a batch code: starts with BATCH-, then the year, and contains seven digits (parts separated by hyphens)",
    keys: ["batch|BATCH|digits7|-|2026|opt"],
    n: 2,
  },
  {
    hint: "come up with a batch code: starts with BATCH-, then the year, and contains three digits (parts separated by hyphens)",
    keys: ["batch|BATCH|digits3|-|2027|opt"],
    n: 2,
  },
  {
    hint: "come up with a batch code: starts with BATCH., then the year, and contains eight characters mixing letters and digits (parts separated by dots)",
    keys: ["batch|BATCH|alnum8|.|2025|opt"],
    n: 1,
  },
  {
    hint: "come up with a batch code: starts with BATCH., then the year, and contains nine digits (parts separated by dots)",
    keys: ["batch|BATCH|digits9|.|2027|opt"],
    n: 1,
  },
  {
    hint: "come up with a batch code: starts with BATCH/, and contains four digits (parts separated by slashes)",
    keys: ["batch|BATCH|digits4|/|-|req"],
    n: 1,
  },
  {
    hint: "come up with a batch code: starts with BATCH/, then the year, and contains eight digits (parts separated by slashes)",
    keys: [
      "batch|BATCH|digits8|/|2025|opt",
      "batch|BATCH|digits8|/|2026|opt",
      "batch|BATCH|digits8|/|2027|opt",
    ],
    n: 4,
  },
  {
    hint: "come up with a batch code: starts with BATCH/, then the year, and contains five digits (parts separated by slashes)",
    keys: ["batch|BATCH|digits5|/|2025|opt"],
    n: 1,
  },
  {
    hint: "come up with a batch code: starts with BATCH/, then the year, and contains ten digits (parts separated by slashes)",
    keys: ["batch|BATCH|digits10|/|2026|opt"],
    n: 1,
  },
  {
    hint: "come up with a batch code: starts with BATCH/, then the year, and contains two letters and five digits (parts separated by slashes)",
    keys: ["batch|BATCH|letters2,digits5|/|2024|opt"],
    n: 1,
  },
  {
    hint: "come up with a batch code: starts with CH, then the year, and contains seven characters mixing letters and digits (without separators)",
    keys: ["batch|CH|alnum7||2025|opt"],
    n: 1,
  },
  {
    hint: "come up with a batch code: starts with CH-, and contains eight characters mixing letters and digits (parts separated by hyphens)",
    keys: ["batch|CH|alnum8|-|-|req"],
    n: 2,
  },
  {
    hint: "come up with a batch code: starts with CH-, then the year, and contains three digits (parts separated by hyphens)",
    keys: ["batch|CH|digits3|-|2026|opt"],
    n: 1,
  },
  {
    hint: "come up with a batch code: starts with CH., and contains eight digits (parts separated by dots)",
    keys: ["batch|CH|digits8|.|-|req"],
    n: 1,
  },
  {
    hint: "come up with a batch code: starts with CH., then the year, and contains eight digits (parts separated by dots)",
    keys: ["batch|CH|digits8|.|2026|opt"],
    n: 2,
  },
  {
    hint: "come up with a batch code: starts with CH., then the year, and contains four digits (parts separated by dots)",
    keys: ["batch|CH|digits4|.|2027|opt"],
    n: 1,
  },
  {
    hint: "come up with a batch code: starts with CH/, and contains seven digits (parts separated by slashes)",
    keys: ["batch|CH|digits7|/|-|req"],
    n: 1,
  },
  {
    hint: "come up with a batch code: starts with CH/, then the year, and contains nine characters mixing letters and digits (parts separated by slashes)",
    keys: ["batch|CH|alnum9|/|2024|opt"],
    n: 1,
  },
  {
    hint: "come up with a batch code: starts with CH/, then the year, and contains seven characters mixing letters and digits (parts separated by slashes)",
    keys: ["batch|CH|alnum7|/|2024|opt"],
    n: 1,
  },
  {
    hint: "come up with a batch code: starts with CH/, then the year, and contains seven digits (parts separated by slashes)",
    keys: ["batch|CH|digits7|/|2026|opt"],
    n: 2,
  },
  {
    hint: "come up with a batch code: starts with CH/, then the year, and contains six digits (parts separated by slashes)",
    keys: ["batch|CH|digits6|/|2026|opt"],
    n: 1,
  },
  {
    hint: "come up with a batch code: starts with LOT, then the year, and contains seven characters mixing letters and digits (without separators)",
    keys: ["batch|LOT|alnum7||2024|opt"],
    n: 2,
  },
  {
    hint: "come up with a batch code: starts with LOT, then the year, and contains six characters mixing letters and digits (without separators)",
    keys: ["batch|LOT|alnum6||2024|opt"],
    n: 1,
  },
  {
    hint: "come up with a batch code: starts with LOT-, then the year, and contains seven characters mixing letters and digits (parts separated by hyphens)",
    keys: ["batch|LOT|alnum7|-|2024|opt"],
    n: 1,
  },
  {
    hint: "come up with a batch code: starts with LOT., then the year, and contains four digits (parts separated by dots)",
    keys: ["batch|LOT|digits4|.|2024|opt"],
    n: 1,
  },
  {
    hint: "come up with a batch code: starts with LOT., then the year, and contains six characters mixing letters and digits (parts separated by dots)",
    keys: ["batch|LOT|alnum6|.|2026|opt"],
    n: 1,
  },
  {
    hint: "come up with a batch code: starts with LOT., then the year, and contains three digits (parts separated by dots)",
    keys: ["batch|LOT|digits3|.|2027|opt"],
    n: 2,
  },
  {
    hint: "come up with a batch code: starts with LOT., then the year, and contains two letters and five digits (parts separated by dots)",
    keys: ["batch|LOT|letters2,digits5|.|2027|opt"],
    n: 1,
  },
  {
    hint: "come up with a batch code: starts with LOT/, then the year, and contains five digits (parts separated by slashes)",
    keys: ["batch|LOT|digits5|/|2027|opt"],
    n: 1,
  },
  {
    hint: "come up with a batch code: starts with LOT/, then the year, and contains seven digits (parts separated by slashes)",
    keys: ["batch|LOT|digits7|/|2024|opt"],
    n: 1,
  },
  {
    hint: "come up with a case code: starts with CASE, and contains eight digits (without separators)",
    keys: ["case|CASE|digits8||-|req"],
    n: 1,
  },
  {
    hint: "come up with a case code: starts with CASE, then the year, and contains eight digits (without separators)",
    keys: ["case|CASE|digits8||2025|opt"],
    n: 1,
  },
  {
    hint: "come up with a case code: starts with CASE, then the year, and contains five digits (without separators)",
    keys: ["case|CASE|digits5||2026|opt"],
    n: 1,
  },
  {
    hint: "come up with a case code: starts with CASE, then the year, and contains four digits (without separators)",
    keys: ["case|CASE|digits4||2025|opt"],
    n: 1,
  },
  {
    hint: "come up with a case code: starts with CASE-, then the year, and contains six digits (parts separated by hyphens)",
    keys: ["case|CASE|digits6|-|2027|opt"],
    n: 1,
  },
  {
    hint: "come up with a case code: starts with CASE-, then the year, and contains two letters and five digits (parts separated by hyphens)",
    keys: ["case|CASE|letters2,digits5|-|2024|opt"],
    n: 1,
  },
  {
    hint: "come up with a case code: starts with CASE., then the year, and contains nine digits (parts separated by dots)",
    keys: ["case|CASE|digits9|.|2025|opt"],
    n: 1,
  },
  {
    hint: "come up with a case code: starts with CASE., then the year, and contains six characters mixing letters and digits (parts separated by dots)",
    keys: ["case|CASE|alnum6|.|2025|opt"],
    n: 1,
  },
  {
    hint: "come up with a case code: starts with CASE., then the year, and contains six digits (parts separated by dots)",
    keys: ["case|CASE|digits6|.|2025|opt"],
    n: 1,
  },
  {
    hint: "come up with a case code: starts with CASE., then the year, and contains two letters and five digits (parts separated by dots)",
    keys: ["case|CASE|letters2,digits5|.|2027|opt"],
    n: 2,
  },
  {
    hint: "come up with a case code: starts with CASE/, then the year, and contains nine characters mixing letters and digits (parts separated by slashes)",
    keys: ["case|CASE|alnum9|/|2027|opt"],
    n: 1,
  },
  {
    hint: "come up with a case code: starts with DOSS, and contains five digits (without separators)",
    keys: ["case|DOSS|digits5||-|req"],
    n: 1,
  },
  {
    hint: "come up with a case code: starts with DOSS, then the year, and contains five digits (without separators)",
    keys: ["case|DOSS|digits5||2027|opt"],
    n: 2,
  },
  {
    hint: "come up with a case code: starts with DOSS, then the year, and contains seven characters mixing letters and digits (without separators)",
    keys: ["case|DOSS|alnum7||2026|opt"],
    n: 1,
  },
  {
    hint: "come up with a case code: starts with DOSS., and contains seven characters mixing letters and digits (parts separated by dots)",
    keys: ["case|DOSS|alnum7|.|-|req"],
    n: 1,
  },
  {
    hint: "come up with a case code: starts with DOSS., then the year, and contains nine characters mixing letters and digits (parts separated by dots)",
    keys: ["case|DOSS|alnum9|.|2026|opt"],
    n: 1,
  },
  {
    hint: "come up with a case code: starts with DOSS., then the year, and contains two letters and five digits (parts separated by dots)",
    keys: ["case|DOSS|letters2,digits5|.|2025|opt"],
    n: 1,
  },
  {
    hint: "come up with a case code: starts with DOSS/, then the year, and contains ten digits (parts separated by slashes)",
    keys: ["case|DOSS|digits10|/|2027|opt"],
    n: 2,
  },
  {
    hint: "come up with a case code: starts with ZD, and contains five digits (without separators)",
    keys: ["case|ZD|digits5||-|req"],
    n: 1,
  },
  {
    hint: "come up with a case code: starts with ZD, and contains nine characters mixing letters and digits (without separators)",
    keys: ["case|ZD|alnum9||-|req"],
    n: 1,
  },
  {
    hint: "come up with a case code: starts with ZD, then the year, and contains three digits (without separators)",
    keys: ["case|ZD|digits3||2025|opt", "case|ZD|digits3||2026|opt"],
    n: 2,
  },
  {
    hint: "come up with a case code: starts with ZD-, then the year, and contains nine digits (parts separated by hyphens)",
    keys: ["case|ZD|digits9|-|2024|opt", "case|ZD|digits9|-|2025|opt"],
    n: 2,
  },
  {
    hint: "come up with a case code: starts with ZD., then the year, and contains nine digits (parts separated by dots)",
    keys: ["case|ZD|digits9|.|2025|opt"],
    n: 1,
  },
  {
    hint: "come up with a case code: starts with ZD/, then the year, and contains six characters mixing letters and digits (parts separated by slashes)",
    keys: ["case|ZD|alnum6|/|2024|opt"],
    n: 1,
  },
  {
    hint: "come up with a incident number: starts with INC, then the year, and contains five digits (without separators)",
    keys: ["ticket|INC|digits5||2024|opt"],
    n: 1,
  },
  {
    hint: "come up with a incident number: starts with INC, then the year, and contains four digits (without separators)",
    keys: ["ticket|INC|digits4||2027|opt"],
    n: 2,
  },
  {
    hint: "come up with a incident number: starts with INC, then the year, and contains six characters mixing letters and digits (without separators)",
    keys: ["ticket|INC|alnum6||2025|opt"],
    n: 1,
  },
  {
    hint: "come up with a incident number: starts with INC, then the year, and contains ten digits (without separators)",
    keys: ["ticket|INC|digits10||2024|opt"],
    n: 1,
  },
  {
    hint: "come up with a incident number: starts with INC, then the year, and contains three digits (without separators)",
    keys: ["ticket|INC|digits3||2024|opt"],
    n: 1,
  },
  {
    hint: "come up with a incident number: starts with INC-, and contains eight digits (parts separated by hyphens)",
    keys: ["ticket|INC|digits8|-|-|req"],
    n: 1,
  },
  {
    hint: "come up with a incident number: starts with INC-, then the year, and contains eight characters mixing letters and digits (parts separated by hyphens)",
    keys: ["ticket|INC|alnum8|-|2027|opt"],
    n: 2,
  },
  {
    hint: "come up with a incident number: starts with INC-, then the year, and contains seven characters mixing letters and digits (parts separated by hyphens)",
    keys: ["ticket|INC|alnum7|-|2026|opt"],
    n: 2,
  },
  {
    hint: "come up with a incident number: starts with INC-, then the year, and contains two letters and five digits (parts separated by hyphens)",
    keys: ["ticket|INC|letters2,digits5|-|2024|opt", "ticket|INC|letters2,digits5|-|2027|opt"],
    n: 3,
  },
  {
    hint: "come up with a incident number: starts with INC/, and contains nine characters mixing letters and digits (parts separated by slashes)",
    keys: ["ticket|INC|alnum9|/|-|req"],
    n: 2,
  },
  {
    hint: "come up with a incident number: starts with INC/, and contains six digits (parts separated by slashes)",
    keys: ["ticket|INC|digits6|/|-|req"],
    n: 1,
  },
  {
    hint: "come up with a incident number: starts with INC/, then the year, and contains three digits (parts separated by slashes)",
    keys: ["ticket|INC|digits3|/|2025|opt"],
    n: 1,
  },
  {
    hint: "come up with a incident number: starts with SD, and contains five digits (without separators)",
    keys: ["ticket|SD|digits5||-|req"],
    n: 1,
  },
  {
    hint: "come up with a incident number: starts with SD, and contains six digits (without separators)",
    keys: ["ticket|SD|digits6||-|req"],
    n: 2,
  },
  {
    hint: "come up with a incident number: starts with SD, and contains ten digits (without separators)",
    keys: ["ticket|SD|digits10||-|req"],
    n: 1,
  },
  {
    hint: "come up with a incident number: starts with SD, then the year, and contains eight digits (without separators)",
    keys: ["ticket|SD|digits8||2027|opt"],
    n: 1,
  },
  {
    hint: "come up with a incident number: starts with SD, then the year, and contains nine digits (without separators)",
    keys: ["ticket|SD|digits9||2025|opt"],
    n: 1,
  },
  {
    hint: "come up with a incident number: starts with SD, then the year, and contains three digits (without separators)",
    keys: ["ticket|SD|digits3||2024|opt"],
    n: 1,
  },
  {
    hint: "come up with a incident number: starts with SD-, then the year, and contains five digits (parts separated by hyphens)",
    keys: ["ticket|SD|digits5|-|2025|opt"],
    n: 1,
  },
  {
    hint: "come up with a incident number: starts with SD-, then the year, and contains nine characters mixing letters and digits (parts separated by hyphens)",
    keys: ["ticket|SD|alnum9|-|2025|opt"],
    n: 1,
  },
  {
    hint: "come up with a incident number: starts with SD., then the year, and contains eight characters mixing letters and digits (parts separated by dots)",
    keys: ["ticket|SD|alnum8|.|2025|opt"],
    n: 1,
  },
  {
    hint: "come up with a incident number: starts with SD., then the year, and contains four digits (parts separated by dots)",
    keys: ["ticket|SD|digits4|.|2027|opt"],
    n: 1,
  },
  {
    hint: "come up with a incident number: starts with SD., then the year, and contains seven characters mixing letters and digits (parts separated by dots)",
    keys: ["ticket|SD|alnum7|.|2027|opt"],
    n: 1,
  },
  {
    hint: "come up with a incident number: starts with SD., then the year, and contains seven digits (parts separated by dots)",
    keys: ["ticket|SD|digits7|.|2027|opt"],
    n: 1,
  },
  {
    hint: "come up with a incident number: starts with SD/, then the year, and contains nine digits (parts separated by slashes)",
    keys: ["ticket|SD|digits9|/|2025|opt"],
    n: 2,
  },
  {
    hint: "come up with a incident number: starts with SD/, then the year, and contains seven characters mixing letters and digits (parts separated by slashes)",
    keys: ["ticket|SD|alnum7|/|2027|opt"],
    n: 1,
  },
  {
    hint: "come up with a incident number: starts with SD/, then the year, and contains seven digits (parts separated by slashes)",
    keys: ["ticket|SD|digits7|/|2025|opt"],
    n: 1,
  },
  {
    hint: "come up with a incident number: starts with SD/, then the year, and contains ten digits (parts separated by slashes)",
    keys: ["ticket|SD|digits10|/|2025|opt"],
    n: 1,
  },
  {
    hint: "come up with a incident number: starts with SD/, then the year, and contains two letters and five digits (parts separated by slashes)",
    keys: ["ticket|SD|letters2,digits5|/|2026|opt"],
    n: 1,
  },
  {
    hint: "come up with a incident number: starts with TKT, then the year, and contains four digits (without separators)",
    keys: ["ticket|TKT|digits4||2027|opt"],
    n: 1,
  },
  {
    hint: "come up with a incident number: starts with TKT-, then the year, and contains six characters mixing letters and digits (parts separated by hyphens)",
    keys: ["ticket|TKT|alnum6|-|2025|opt"],
    n: 2,
  },
  {
    hint: "come up with a incident number: starts with TKT-, then the year, and contains six digits (parts separated by hyphens)",
    keys: ["ticket|TKT|digits6|-|2024|opt"],
    n: 1,
  },
  {
    hint: "come up with a incident number: starts with TKT-, then the year, and contains two letters and five digits (parts separated by hyphens)",
    keys: ["ticket|TKT|letters2,digits5|-|2025|opt"],
    n: 1,
  },
  {
    hint: "come up with a incident number: starts with TKT., then the year, and contains eight digits (parts separated by dots)",
    keys: ["ticket|TKT|digits8|.|2024|opt"],
    n: 2,
  },
  {
    hint: "come up with a incident number: starts with TKT., then the year, and contains nine digits (parts separated by dots)",
    keys: ["ticket|TKT|digits9|.|2026|opt"],
    n: 1,
  },
  {
    hint: "come up with a incident number: starts with TKT., then the year, and contains seven characters mixing letters and digits (parts separated by dots)",
    keys: ["ticket|TKT|alnum7|.|2026|opt"],
    n: 1,
  },
  {
    hint: "come up with a incident number: starts with TKT., then the year, and contains two letters and five digits (parts separated by dots)",
    keys: ["ticket|TKT|letters2,digits5|.|2026|opt"],
    n: 1,
  },
  {
    hint: "come up with a incident number: starts with TKT/, and contains nine characters mixing letters and digits (parts separated by slashes)",
    keys: ["ticket|TKT|alnum9|/|-|req"],
    n: 1,
  },
  {
    hint: "come up with a incident number: starts with TKT/, then the year, and contains eight characters mixing letters and digits (parts separated by slashes)",
    keys: ["ticket|TKT|alnum8|/|2025|opt"],
    n: 1,
  },
  {
    hint: "come up with a project code: starts with P, then the year, and contains seven digits (without separators)",
    keys: ["project|P|digits7||2026|opt"],
    n: 1,
  },
  {
    hint: "come up with a project code: starts with P, then the year, and contains three digits (without separators)",
    keys: ["project|P|digits3||2024|opt"],
    n: 2,
  },
  {
    hint: "come up with a project code: starts with P-, and contains six characters mixing letters and digits (parts separated by hyphens)",
    keys: ["project|P|alnum6|-|-|req"],
    n: 1,
  },
  {
    hint: "come up with a project code: starts with P-, then the year, and contains nine characters mixing letters and digits (parts separated by hyphens)",
    keys: ["project|P|alnum9|-|2026|opt"],
    n: 1,
  },
  {
    hint: "come up with a project code: starts with P-, then the year, and contains nine digits (parts separated by hyphens)",
    keys: ["project|P|digits9|-|2024|opt"],
    n: 1,
  },
  {
    hint: "come up with a project code: starts with P-, then the year, and contains seven characters mixing letters and digits (parts separated by hyphens)",
    keys: ["project|P|alnum7|-|2025|opt"],
    n: 1,
  },
  {
    hint: "come up with a project code: starts with P-, then the year, and contains seven digits (parts separated by hyphens)",
    keys: ["project|P|digits7|-|2024|opt", "project|P|digits7|-|2027|opt"],
    n: 2,
  },
  {
    hint: "come up with a project code: starts with P-, then the year, and contains ten digits (parts separated by hyphens)",
    keys: ["project|P|digits10|-|2026|opt"],
    n: 2,
  },
  {
    hint: "come up with a project code: starts with P-, then the year, and contains three digits (parts separated by hyphens)",
    keys: ["project|P|digits3|-|2025|opt"],
    n: 1,
  },
  {
    hint: "come up with a project code: starts with P-, then the year, and contains two letters and five digits (parts separated by hyphens)",
    keys: ["project|P|letters2,digits5|-|2025|opt"],
    n: 1,
  },
  {
    hint: "come up with a project code: starts with P., then the year, and contains six digits (parts separated by dots)",
    keys: ["project|P|digits6|.|2025|opt"],
    n: 1,
  },
  {
    hint: "come up with a project code: starts with P., then the year, and contains three digits (parts separated by dots)",
    keys: ["project|P|digits3|.|2025|opt"],
    n: 1,
  },
  {
    hint: "come up with a project code: starts with P/, then the year, and contains eight characters mixing letters and digits (parts separated by slashes)",
    keys: ["project|P|alnum8|/|2025|opt"],
    n: 1,
  },
  {
    hint: "come up with a project code: starts with P/, then the year, and contains seven digits (parts separated by slashes)",
    keys: ["project|P|digits7|/|2027|opt"],
    n: 1,
  },
  {
    hint: "come up with a project code: starts with P/, then the year, and contains ten digits (parts separated by slashes)",
    keys: ["project|P|digits10|/|2025|opt"],
    n: 2,
  },
  {
    hint: "come up with a project code: starts with PRJ, then the year, and contains five digits (without separators)",
    keys: ["project|PRJ|digits5||2024|opt"],
    n: 1,
  },
  {
    hint: "come up with a project code: starts with PRJ, then the year, and contains seven digits (without separators)",
    keys: ["project|PRJ|digits7||2026|opt"],
    n: 2,
  },
  {
    hint: "come up with a project code: starts with PRJ/, and contains eight characters mixing letters and digits (parts separated by slashes)",
    keys: ["project|PRJ|alnum8|/|-|req"],
    n: 1,
  },
  {
    hint: "come up with a project code: starts with PRJ/, and contains eight digits (parts separated by slashes)",
    keys: ["project|PRJ|digits8|/|-|req"],
    n: 1,
  },
  {
    hint: "come up with a project code: starts with PRJ/, and contains two letters and five digits (parts separated by slashes)",
    keys: ["project|PRJ|letters2,digits5|/|-|req"],
    n: 1,
  },
  {
    hint: "come up with a project code: starts with PRJ/, then the year, and contains nine characters mixing letters and digits (parts separated by slashes)",
    keys: ["project|PRJ|alnum9|/|2024|opt"],
    n: 1,
  },
  {
    hint: "come up with a project code: starts with PRJ/, then the year, and contains six digits (parts separated by slashes)",
    keys: ["project|PRJ|digits6|/|2026|opt"],
    n: 1,
  },
  {
    hint: "come up with a project code: starts with PRJ/, then the year, and contains three digits (parts separated by slashes)",
    keys: ["project|PRJ|digits3|/|2027|opt"],
    n: 1,
  },
  {
    hint: "come up with a project code: starts with PROJ, and contains three digits (without separators)",
    keys: ["project|PROJ|digits3||-|req"],
    n: 1,
  },
  {
    hint: "come up with a project code: starts with PROJ, then the year, and contains five digits (without separators)",
    keys: ["project|PROJ|digits5||2025|opt"],
    n: 2,
  },
  {
    hint: "come up with a project code: starts with PROJ, then the year, and contains nine digits (without separators)",
    keys: ["project|PROJ|digits9||2025|opt"],
    n: 1,
  },
  {
    hint: "come up with a project code: starts with PROJ-, then the year, and contains five digits (parts separated by hyphens)",
    keys: ["project|PROJ|digits5|-|2025|opt"],
    n: 1,
  },
  {
    hint: "come up with a project code: starts with PROJ-, then the year, and contains nine digits (parts separated by hyphens)",
    keys: ["project|PROJ|digits9|-|2025|opt"],
    n: 2,
  },
  {
    hint: "come up with a project code: starts with PROJ., then the year, and contains seven characters mixing letters and digits (parts separated by dots)",
    keys: ["project|PROJ|alnum7|.|2025|opt"],
    n: 1,
  },
  {
    hint: "come up with a project code: starts with PROJ/, and contains nine digits (parts separated by slashes)",
    keys: ["project|PROJ|digits9|/|-|req"],
    n: 1,
  },
  {
    hint: "come up with a project code: starts with PROJ/, then the year, and contains six characters mixing letters and digits (parts separated by slashes)",
    keys: ["project|PROJ|alnum6|/|2024|opt"],
    n: 1,
  },
  {
    hint: "come up with a project code: starts with PROJ/, then the year, and contains ten digits (parts separated by slashes)",
    keys: ["project|PROJ|digits10|/|2024|opt"],
    n: 1,
  },
  {
    hint: "dossiercode met vaste opbouw: begint met CASE en eindigt met acht cijfers (zonder scheidingsteken)",
    keys: ["case|CASE|digits8||-|req"],
    n: 1,
  },
  {
    hint: "dossiercode met vaste opbouw: begint met CASE en eindigt met acht cijfers, met het jaartal 2025 erin (zonder scheidingsteken)",
    keys: ["case|CASE|digits8||2025|req"],
    n: 1,
  },
  {
    hint: "dossiercode met vaste opbouw: begint met CASE en eindigt met vier cijfers, met het jaartal 2025 erin (zonder scheidingsteken)",
    keys: ["case|CASE|digits4||2025|req"],
    n: 1,
  },
  {
    hint: "dossiercode met vaste opbouw: begint met CASE en eindigt met vijf cijfers, met het jaartal 2026 erin (zonder scheidingsteken)",
    keys: ["case|CASE|digits5||2026|req"],
    n: 1,
  },
  {
    hint: "dossiercode met vaste opbouw: begint met CASE en eindigt met zes cijfers, met het jaartal 2024 erin (zonder scheidingsteken)",
    keys: ["case|CASE|digits6||2024|req"],
    n: 2,
  },
  {
    hint: "dossiercode met vaste opbouw: begint met CASE- en eindigt met zes cijfers, met het jaartal 2024 erin (delen gescheiden door koppeltekens)",
    keys: ["case|CASE|digits6|-|2024|req"],
    n: 1,
  },
  {
    hint: "dossiercode met vaste opbouw: begint met CASE- en eindigt met zes cijfers, met het jaartal 2027 erin (delen gescheiden door koppeltekens)",
    keys: ["case|CASE|digits6|-|2027|req"],
    n: 1,
  },
  {
    hint: "dossiercode met vaste opbouw: begint met CASE. en eindigt met acht cijfers (delen gescheiden door punten)",
    keys: ["case|CASE|digits8|.|-|req"],
    n: 1,
  },
  {
    hint: "dossiercode met vaste opbouw: begint met CASE. en eindigt met negen cijfers, met het jaartal 2025 erin (delen gescheiden door punten)",
    keys: ["case|CASE|digits9|.|2025|req"],
    n: 1,
  },
  {
    hint: "dossiercode met vaste opbouw: begint met CASE. en eindigt met twee letters en vijf cijfers, met het jaartal 2027 erin (delen gescheiden door punten)",
    keys: ["case|CASE|letters2,digits5|.|2027|req"],
    n: 1,
  },
  {
    hint: "dossiercode met vaste opbouw: begint met CASE. en eindigt met vijf cijfers (delen gescheiden door punten)",
    keys: ["case|CASE|digits5|.|-|req"],
    n: 1,
  },
  {
    hint: "dossiercode met vaste opbouw: begint met CASE. en eindigt met zes cijfers, met het jaartal 2025 erin (delen gescheiden door punten)",
    keys: ["case|CASE|digits6|.|2025|req"],
    n: 1,
  },
  {
    hint: "dossiercode met vaste opbouw: begint met CASE. en eindigt met zes cijfers, met het jaartal 2026 erin (delen gescheiden door punten)",
    keys: ["case|CASE|digits6|.|2026|req"],
    n: 1,
  },
  {
    hint: "dossiercode met vaste opbouw: begint met CASE/ en eindigt met drie cijfers (delen gescheiden door schuine strepen)",
    keys: ["case|CASE|digits3|/|-|req"],
    n: 1,
  },
  {
    hint: "dossiercode met vaste opbouw: begint met DOSS en eindigt met acht cijfers, met het jaartal 2027 erin (zonder scheidingsteken)",
    keys: ["case|DOSS|digits8||2027|req"],
    n: 1,
  },
  {
    hint: "dossiercode met vaste opbouw: begint met DOSS en eindigt met vijf cijfers, met het jaartal 2027 erin (zonder scheidingsteken)",
    keys: ["case|DOSS|digits5||2027|req"],
    n: 1,
  },
  {
    hint: "dossiercode met vaste opbouw: begint met DOSS- en eindigt met drie cijfers (delen gescheiden door koppeltekens)",
    keys: ["case|DOSS|digits3|-|-|req"],
    n: 1,
  },
  {
    hint: "dossiercode met vaste opbouw: begint met DOSS- en eindigt met negen cijfers, met het jaartal 2025 erin (delen gescheiden door koppeltekens)",
    keys: ["case|DOSS|digits9|-|2025|req"],
    n: 1,
  },
  {
    hint: "dossiercode met vaste opbouw: begint met DOSS- en eindigt met negen cijfers, met het jaartal 2026 erin (delen gescheiden door koppeltekens)",
    keys: ["case|DOSS|digits9|-|2026|req"],
    n: 1,
  },
  {
    hint: "dossiercode met vaste opbouw: begint met DOSS- en eindigt met vijf cijfers, met het jaartal 2027 erin (delen gescheiden door koppeltekens)",
    keys: ["case|DOSS|digits5|-|2027|req"],
    n: 1,
  },
  {
    hint: "dossiercode met vaste opbouw: begint met DOSS- en eindigt met zeven cijfers, met het jaartal 2026 erin (delen gescheiden door koppeltekens)",
    keys: ["case|DOSS|digits7|-|2026|req"],
    n: 1,
  },
  {
    hint: "dossiercode met vaste opbouw: begint met DOSS. en eindigt met negen tekens met letters en cijfers, met het jaartal 2025 erin (delen gescheiden door punten)",
    keys: ["case|DOSS|alnum9|.|2025|req"],
    n: 1,
  },
  {
    hint: "dossiercode met vaste opbouw: begint met DOSS. en eindigt met zes cijfers (delen gescheiden door punten)",
    keys: ["case|DOSS|digits6|.|-|req"],
    n: 1,
  },
  {
    hint: "dossiercode met vaste opbouw: begint met DOSS. en eindigt met zeven tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["case|DOSS|alnum7|.|-|req"],
    n: 1,
  },
  {
    hint: "dossiercode met vaste opbouw: begint met DOSS/ en eindigt met acht cijfers, met het jaartal 2027 erin (delen gescheiden door schuine strepen)",
    keys: ["case|DOSS|digits8|/|2027|req"],
    n: 1,
  },
  {
    hint: "dossiercode met vaste opbouw: begint met DOSS/ en eindigt met twee letters en vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["case|DOSS|letters2,digits5|/|-|req"],
    n: 1,
  },
  {
    hint: "dossiercode met vaste opbouw: begint met DOSS/ en eindigt met vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["case|DOSS|digits5|/|-|req"],
    n: 1,
  },
  {
    hint: "dossiercode met vaste opbouw: begint met ZD en eindigt met vijf cijfers (zonder scheidingsteken)",
    keys: ["case|ZD|digits5||-|req"],
    n: 1,
  },
  {
    hint: "dossiercode met vaste opbouw: begint met ZD en eindigt met zes tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["case|ZD|alnum6||-|req"],
    n: 1,
  },
  {
    hint: "dossiercode met vaste opbouw: begint met ZD- en eindigt met negen cijfers, met het jaartal 2024 erin (delen gescheiden door koppeltekens)",
    keys: ["case|ZD|digits9|-|2024|req"],
    n: 1,
  },
  {
    hint: "dossiercode met vaste opbouw: begint met ZD- en eindigt met zeven cijfers, met het jaartal 2027 erin (delen gescheiden door koppeltekens)",
    keys: ["case|ZD|digits7|-|2027|req"],
    n: 1,
  },
  {
    hint: "dossiercode met vaste opbouw: begint met ZD. en eindigt met acht cijfers, met het jaartal 2026 erin (delen gescheiden door punten)",
    keys: ["case|ZD|digits8|.|2026|req"],
    n: 1,
  },
  {
    hint: "dossiercode met vaste opbouw: begint met ZD. en eindigt met negen cijfers, met het jaartal 2025 erin (delen gescheiden door punten)",
    keys: ["case|ZD|digits9|.|2025|req"],
    n: 2,
  },
  {
    hint: "dossiercode met vaste opbouw: begint met ZD/ en eindigt met negen cijfers (delen gescheiden door schuine strepen)",
    keys: ["case|ZD|digits9|/|-|req"],
    n: 1,
  },
  {
    hint: "dossiercode met vaste opbouw: begint met ZD/ en eindigt met vijf cijfers, met het jaartal 2024 erin (delen gescheiden door schuine strepen)",
    keys: ["case|ZD|digits5|/|2024|req"],
    n: 1,
  },
  {
    hint: "dossiercode met vaste opbouw: begint met ZD/ en eindigt met zes tekens met letters en cijfers, met het jaartal 2024 erin (delen gescheiden door schuine strepen)",
    keys: ["case|ZD|alnum6|/|2024|req"],
    n: 2,
  },
  {
    hint: "dossiercode met vaste opbouw: begint met ZD/ en eindigt met zes tekens met letters en cijfers, met het jaartal 2027 erin (delen gescheiden door schuine strepen)",
    keys: ["case|ZD|alnum6|/|2027|req"],
    n: 2,
  },
  {
    hint: "dossiercode van twee letters, streepje, zes cijfers",
    keys: ["case||letters2,digits6|-|-|req"],
    n: 3,
  },
  {
    hint: "een assetcode dat begint met AST en dan het jaartal, dan negen cijfers (zonder scheidingsteken)",
    keys: ["asset|AST|digits9||2026|opt"],
    n: 2,
  },
  {
    hint: "een assetcode dat begint met AST en dan het jaartal, dan negen tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["asset|AST|alnum9||2026|opt"],
    n: 3,
  },
  {
    hint: "een assetcode dat begint met AST- en dan het jaartal, dan acht cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|AST|digits8|-|2024|opt"],
    n: 1,
  },
  {
    hint: "een assetcode dat begint met AST- en dan het jaartal, dan twee letters en vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|AST|letters2,digits5|-|2024|opt", "asset|AST|letters2,digits5|-|2027|opt"],
    n: 3,
  },
  {
    hint: "een assetcode dat begint met AST- en dan het jaartal, dan zes tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|AST|alnum6|-|2025|opt"],
    n: 2,
  },
  {
    hint: "een assetcode dat begint met AST- en dan het jaartal, dan zeven tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|AST|alnum7|-|2024|opt"],
    n: 1,
  },
  {
    hint: "een assetcode dat begint met AST. en dan het jaartal, dan acht cijfers (delen gescheiden door punten)",
    keys: ["asset|AST|digits8|.|2025|opt"],
    n: 1,
  },
  {
    hint: "een assetcode dat begint met AST. en dan het jaartal, dan acht tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["asset|AST|alnum8|.|2024|opt"],
    n: 3,
  },
  {
    hint: "een assetcode dat begint met AST. en dan het jaartal, dan drie cijfers (delen gescheiden door punten)",
    keys: ["asset|AST|digits3|.|2025|opt"],
    n: 1,
  },
  {
    hint: "een assetcode dat begint met AST/ en dan het jaartal, dan vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["asset|AST|digits5|/|2027|opt"],
    n: 1,
  },
  {
    hint: "een assetcode dat begint met MID en daarna vier cijfers (zonder scheidingsteken)",
    keys: ["asset|MID|digits4||-|req"],
    n: 1,
  },
  {
    hint: "een assetcode dat begint met MID en dan het jaartal, dan acht tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["asset|MID|alnum8||2024|opt"],
    n: 2,
  },
  {
    hint: "een assetcode dat begint met MID en dan het jaartal, dan negen cijfers (zonder scheidingsteken)",
    keys: ["asset|MID|digits9||2024|opt"],
    n: 2,
  },
  {
    hint: "een assetcode dat begint met MID en dan het jaartal, dan negen tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["asset|MID|alnum9||2024|opt"],
    n: 1,
  },
  {
    hint: "een assetcode dat begint met MID en dan het jaartal, dan zes cijfers (zonder scheidingsteken)",
    keys: ["asset|MID|digits6||2024|opt", "asset|MID|digits6||2027|opt"],
    n: 2,
  },
  {
    hint: "een assetcode dat begint met MID- en dan het jaartal, dan twee letters en vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|MID|letters2,digits5|-|2026|opt"],
    n: 2,
  },
  {
    hint: "een assetcode dat begint met MID- en dan het jaartal, dan vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|MID|digits5|-|2027|opt"],
    n: 1,
  },
  {
    hint: "een assetcode dat begint met MID- en dan het jaartal, dan zes tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|MID|alnum6|-|2027|opt"],
    n: 1,
  },
  {
    hint: "een assetcode dat begint met MID- en dan het jaartal, dan zeven tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|MID|alnum7|-|2024|opt"],
    n: 2,
  },
  {
    hint: "een assetcode dat begint met MID. en dan het jaartal, dan acht cijfers (delen gescheiden door punten)",
    keys: ["asset|MID|digits8|.|2025|opt"],
    n: 1,
  },
  {
    hint: "een assetcode dat begint met MID. en dan het jaartal, dan acht tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["asset|MID|alnum8|.|2024|opt"],
    n: 2,
  },
  {
    hint: "een assetcode dat begint met MID/ en daarna negen tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["asset|MID|alnum9|/|-|req"],
    n: 1,
  },
  {
    hint: "een assetcode dat begint met MID/ en daarna zes tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["asset|MID|alnum6|/|-|req"],
    n: 1,
  },
  {
    hint: "een assetcode dat begint met MID/ en dan het jaartal, dan twee letters en vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["asset|MID|letters2,digits5|/|2024|opt"],
    n: 2,
  },
  {
    hint: "een assetcode dat begint met MID/ en dan het jaartal, dan zeven tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["asset|MID|alnum7|/|2026|opt"],
    n: 1,
  },
  {
    hint: "een assetcode dat begint met OBJ en dan het jaartal, dan negen cijfers (zonder scheidingsteken)",
    keys: ["asset|OBJ|digits9||2024|opt"],
    n: 1,
  },
  {
    hint: "een assetcode dat begint met OBJ en dan het jaartal, dan negen tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["asset|OBJ|alnum9||2025|opt"],
    n: 1,
  },
  {
    hint: "een assetcode dat begint met OBJ en dan het jaartal, dan zes cijfers (zonder scheidingsteken)",
    keys: ["asset|OBJ|digits6||2027|opt"],
    n: 1,
  },
  {
    hint: "een assetcode dat begint met OBJ en dan het jaartal, dan zeven cijfers (zonder scheidingsteken)",
    keys: ["asset|OBJ|digits7||2027|opt"],
    n: 1,
  },
  {
    hint: "een assetcode dat begint met OBJ- en daarna zeven tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|OBJ|alnum7|-|-|req"],
    n: 1,
  },
  {
    hint: "een assetcode dat begint met OBJ- en dan het jaartal, dan negen tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|OBJ|alnum9|-|2026|opt"],
    n: 1,
  },
  {
    hint: "een assetcode dat begint met OBJ- en dan het jaartal, dan twee letters en vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|OBJ|letters2,digits5|-|2026|opt"],
    n: 1,
  },
  {
    hint: "een assetcode dat begint met OBJ- en dan het jaartal, dan vier cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|OBJ|digits4|-|2024|opt"],
    n: 2,
  },
  {
    hint: "een assetcode dat begint met OBJ- en dan het jaartal, dan zes tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|OBJ|alnum6|-|2024|opt", "asset|OBJ|alnum6|-|2025|opt"],
    n: 2,
  },
  {
    hint: "een assetcode dat begint met OBJ. en daarna vijf cijfers (delen gescheiden door punten)",
    keys: ["asset|OBJ|digits5|.|-|req"],
    n: 1,
  },
  {
    hint: "een assetcode dat begint met OBJ. en dan het jaartal, dan negen cijfers (delen gescheiden door punten)",
    keys: ["asset|OBJ|digits9|.|2026|opt"],
    n: 2,
  },
  {
    hint: "een assetcode dat begint met OBJ. en dan het jaartal, dan zes cijfers (delen gescheiden door punten)",
    keys: ["asset|OBJ|digits6|.|2025|opt"],
    n: 1,
  },
  {
    hint: "een assetcode dat begint met OBJ/ en daarna vier cijfers (delen gescheiden door schuine strepen)",
    keys: ["asset|OBJ|digits4|/|-|req"],
    n: 1,
  },
  {
    hint: "een assetcode dat begint met OBJ/ en dan het jaartal, dan tien cijfers (delen gescheiden door schuine strepen)",
    keys: ["asset|OBJ|digits10|/|2026|opt"],
    n: 2,
  },
  {
    hint: "een batchcode dat begint met BATCH en dan het jaartal, dan tien cijfers (zonder scheidingsteken)",
    keys: ["batch|BATCH|digits10||2027|opt"],
    n: 1,
  },
  {
    hint: "een batchcode dat begint met BATCH- en daarna zes tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["batch|BATCH|alnum6|-|-|req"],
    n: 3,
  },
  {
    hint: "een batchcode dat begint met BATCH- en dan het jaartal, dan drie cijfers (delen gescheiden door koppeltekens)",
    keys: ["batch|BATCH|digits3|-|2027|opt"],
    n: 2,
  },
  {
    hint: "een batchcode dat begint met BATCH- en dan het jaartal, dan negen tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["batch|BATCH|alnum9|-|2025|opt"],
    n: 1,
  },
  {
    hint: "een batchcode dat begint met BATCH- en dan het jaartal, dan zeven cijfers (delen gescheiden door koppeltekens)",
    keys: ["batch|BATCH|digits7|-|2026|opt"],
    n: 1,
  },
  {
    hint: "een batchcode dat begint met BATCH. en dan het jaartal, dan acht cijfers (delen gescheiden door punten)",
    keys: ["batch|BATCH|digits8|.|2026|opt"],
    n: 1,
  },
  {
    hint: "een batchcode dat begint met BATCH. en dan het jaartal, dan acht tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["batch|BATCH|alnum8|.|2025|opt"],
    n: 1,
  },
  {
    hint: "een batchcode dat begint met BATCH/ en dan het jaartal, dan acht cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|BATCH|digits8|/|2025|opt"],
    n: 1,
  },
  {
    hint: "een batchcode dat begint met BATCH/ en dan het jaartal, dan negen tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|BATCH|alnum9|/|2025|opt"],
    n: 1,
  },
  {
    hint: "een batchcode dat begint met BATCH/ en dan het jaartal, dan vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|BATCH|digits5|/|2025|opt"],
    n: 2,
  },
  {
    hint: "een batchcode dat begint met CH en dan het jaartal, dan negen tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["batch|CH|alnum9||2026|opt"],
    n: 1,
  },
  {
    hint: "een batchcode dat begint met CH en dan het jaartal, dan zes cijfers (zonder scheidingsteken)",
    keys: ["batch|CH|digits6||2025|opt"],
    n: 2,
  },
  {
    hint: "een batchcode dat begint met CH- en daarna acht tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["batch|CH|alnum8|-|-|req"],
    n: 3,
  },
  {
    hint: "een batchcode dat begint met CH- en daarna tien cijfers (delen gescheiden door koppeltekens)",
    keys: ["batch|CH|digits10|-|-|req"],
    n: 1,
  },
  {
    hint: "een batchcode dat begint met CH- en dan het jaartal, dan negen cijfers (delen gescheiden door koppeltekens)",
    keys: ["batch|CH|digits9|-|2026|opt"],
    n: 1,
  },
  {
    hint: "een batchcode dat begint met CH. en dan het jaartal, dan acht cijfers (delen gescheiden door punten)",
    keys: ["batch|CH|digits8|.|2026|opt"],
    n: 1,
  },
  {
    hint: "een batchcode dat begint met CH. en dan het jaartal, dan vier cijfers (delen gescheiden door punten)",
    keys: ["batch|CH|digits4|.|2027|opt"],
    n: 3,
  },
  {
    hint: "een batchcode dat begint met CH/ en daarna zeven cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|CH|digits7|/|-|req"],
    n: 2,
  },
  {
    hint: "een batchcode dat begint met CH/ en dan het jaartal, dan negen tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|CH|alnum9|/|2024|opt"],
    n: 1,
  },
  {
    hint: "een batchcode dat begint met CH/ en dan het jaartal, dan zes cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|CH|digits6|/|2026|opt"],
    n: 3,
  },
  {
    hint: "een batchcode dat begint met CH/ en dan het jaartal, dan zeven cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|CH|digits7|/|2026|opt"],
    n: 2,
  },
  {
    hint: "een batchcode dat begint met CH/ en dan het jaartal, dan zeven tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|CH|alnum7|/|2024|opt"],
    n: 2,
  },
  {
    hint: "een batchcode dat begint met LOT en dan het jaartal, dan zeven tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["batch|LOT|alnum7||2024|opt"],
    n: 1,
  },
  {
    hint: "een batchcode dat begint met LOT- en dan het jaartal, dan drie cijfers (delen gescheiden door koppeltekens)",
    keys: ["batch|LOT|digits3|-|2024|opt"],
    n: 1,
  },
  {
    hint: "een batchcode dat begint met LOT- en dan het jaartal, dan negen cijfers (delen gescheiden door koppeltekens)",
    keys: ["batch|LOT|digits9|-|2027|opt"],
    n: 1,
  },
  {
    hint: "een batchcode dat begint met LOT- en dan het jaartal, dan vier cijfers (delen gescheiden door koppeltekens)",
    keys: ["batch|LOT|digits4|-|2026|opt"],
    n: 1,
  },
  {
    hint: "een batchcode dat begint met LOT- en dan het jaartal, dan vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["batch|LOT|digits5|-|2024|opt"],
    n: 1,
  },
  {
    hint: "een batchcode dat begint met LOT- en dan het jaartal, dan zeven tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["batch|LOT|alnum7|-|2024|opt"],
    n: 2,
  },
  {
    hint: "een batchcode dat begint met LOT. en dan het jaartal, dan twee letters en vijf cijfers (delen gescheiden door punten)",
    keys: ["batch|LOT|letters2,digits5|.|2027|opt"],
    n: 1,
  },
  {
    hint: "een batchcode dat begint met LOT. en dan het jaartal, dan vier cijfers (delen gescheiden door punten)",
    keys: ["batch|LOT|digits4|.|2024|opt"],
    n: 1,
  },
  {
    hint: "een batchcode dat begint met LOT. en dan het jaartal, dan vier tekens met letters en cijfers en vier cijfers (delen gescheiden door punten)",
    keys: ["batch|LOT|alnum4,digits4|.|2026|opt"],
    n: 2,
  },
  {
    hint: "een batchcode dat begint met LOT. en dan het jaartal, dan zes tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["batch|LOT|alnum6|.|2026|opt"],
    n: 1,
  },
  {
    hint: "een batchcode dat begint met LOT/ en daarna acht tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|LOT|alnum8|/|-|req"],
    n: 2,
  },
  {
    hint: "een batchcode dat begint met LOT/ en daarna vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|LOT|digits5|/|-|req"],
    n: 2,
  },
  {
    hint: "een batchcode dat begint met LOT/ en dan het jaartal, dan twee letters en vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|LOT|letters2,digits5|/|2024|opt", "batch|LOT|letters2,digits5|/|2025|opt"],
    n: 3,
  },
  {
    hint: "een batchcode dat begint met LOT/ en dan het jaartal, dan vier cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|LOT|digits4|/|2024|opt"],
    n: 1,
  },
  {
    hint: "een dossiercode dat begint met CASE en daarna acht cijfers (zonder scheidingsteken)",
    keys: ["case|CASE|digits8||-|req"],
    n: 2,
  },
  {
    hint: "een dossiercode dat begint met CASE en dan het jaartal, dan tien cijfers (zonder scheidingsteken)",
    keys: ["case|CASE|digits10||2025|opt"],
    n: 2,
  },
  {
    hint: "een dossiercode dat begint met CASE en dan het jaartal, dan vier cijfers (zonder scheidingsteken)",
    keys: ["case|CASE|digits4||2025|opt"],
    n: 1,
  },
  {
    hint: "een dossiercode dat begint met CASE en dan het jaartal, dan vijf cijfers (zonder scheidingsteken)",
    keys: ["case|CASE|digits5||2026|opt"],
    n: 1,
  },
  {
    hint: "een dossiercode dat begint met CASE en dan het jaartal, dan zes cijfers (zonder scheidingsteken)",
    keys: ["case|CASE|digits6||2024|opt"],
    n: 1,
  },
  {
    hint: "een dossiercode dat begint met CASE- en dan het jaartal, dan zes cijfers (delen gescheiden door koppeltekens)",
    keys: ["case|CASE|digits6|-|2024|opt"],
    n: 1,
  },
  {
    hint: "een dossiercode dat begint met CASE. en dan het jaartal, dan drie cijfers (delen gescheiden door punten)",
    keys: ["case|CASE|digits3|.|2026|opt"],
    n: 1,
  },
  {
    hint: "een dossiercode dat begint met CASE. en dan het jaartal, dan negen cijfers (delen gescheiden door punten)",
    keys: ["case|CASE|digits9|.|2025|opt"],
    n: 1,
  },
  {
    hint: "een dossiercode dat begint met CASE. en dan het jaartal, dan twee letters en vijf cijfers (delen gescheiden door punten)",
    keys: ["case|CASE|letters2,digits5|.|2025|opt", "case|CASE|letters2,digits5|.|2027|opt"],
    n: 2,
  },
  {
    hint: "een dossiercode dat begint met CASE. en dan het jaartal, dan zes cijfers (delen gescheiden door punten)",
    keys: ["case|CASE|digits6|.|2026|opt"],
    n: 1,
  },
  {
    hint: "een dossiercode dat begint met CASE. en dan het jaartal, dan zes tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["case|CASE|alnum6|.|2025|opt"],
    n: 1,
  },
  {
    hint: "een dossiercode dat begint met CASE/ en dan het jaartal, dan negen tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["case|CASE|alnum9|/|2027|opt"],
    n: 2,
  },
  {
    hint: "een dossiercode dat begint met CASE/ en dan het jaartal, dan twee letters en vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["case|CASE|letters2,digits5|/|2025|opt"],
    n: 1,
  },
  {
    hint: "een dossiercode dat begint met DOSS en daarna vijf cijfers (zonder scheidingsteken)",
    keys: ["case|DOSS|digits5||-|req"],
    n: 1,
  },
  {
    hint: "een dossiercode dat begint met DOSS en dan het jaartal, dan acht cijfers (zonder scheidingsteken)",
    keys: ["case|DOSS|digits8||2027|opt"],
    n: 1,
  },
  {
    hint: "een dossiercode dat begint met DOSS en dan het jaartal, dan vijf cijfers (zonder scheidingsteken)",
    keys: ["case|DOSS|digits5||2027|opt"],
    n: 1,
  },
  {
    hint: "een dossiercode dat begint met DOSS en dan het jaartal, dan zeven tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["case|DOSS|alnum7||2026|opt"],
    n: 1,
  },
  {
    hint: "een dossiercode dat begint met DOSS- en daarna drie cijfers (delen gescheiden door koppeltekens)",
    keys: ["case|DOSS|digits3|-|-|req"],
    n: 2,
  },
  {
    hint: "een dossiercode dat begint met DOSS- en dan het jaartal, dan negen cijfers (delen gescheiden door koppeltekens)",
    keys: ["case|DOSS|digits9|-|2026|opt"],
    n: 2,
  },
  {
    hint: "een dossiercode dat begint met DOSS- en dan het jaartal, dan zeven cijfers (delen gescheiden door koppeltekens)",
    keys: ["case|DOSS|digits7|-|2026|opt"],
    n: 1,
  },
  {
    hint: "een dossiercode dat begint met DOSS. en daarna acht cijfers (delen gescheiden door punten)",
    keys: ["case|DOSS|digits8|.|-|req"],
    n: 1,
  },
  {
    hint: "een dossiercode dat begint met DOSS. en dan het jaartal, dan negen tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["case|DOSS|alnum9|.|2025|opt", "case|DOSS|alnum9|.|2026|opt"],
    n: 4,
  },
  {
    hint: "een dossiercode dat begint met DOSS. en dan het jaartal, dan twee letters en vijf cijfers (delen gescheiden door punten)",
    keys: ["case|DOSS|letters2,digits5|.|2025|opt"],
    n: 2,
  },
  {
    hint: "een dossiercode dat begint met DOSS/ en daarna vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["case|DOSS|digits5|/|-|req"],
    n: 1,
  },
  {
    hint: "een dossiercode dat begint met DOSS/ en dan het jaartal, dan tien cijfers (delen gescheiden door schuine strepen)",
    keys: ["case|DOSS|digits10|/|2027|opt"],
    n: 1,
  },
  {
    hint: "een dossiercode dat begint met ZD en daarna acht tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["case|ZD|alnum8||-|req"],
    n: 1,
  },
  {
    hint: "een dossiercode dat begint met ZD en daarna zes tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["case|ZD|alnum6||-|req"],
    n: 1,
  },
  {
    hint: "een dossiercode dat begint met ZD en dan het jaartal, dan drie cijfers (zonder scheidingsteken)",
    keys: ["case|ZD|digits3||2025|opt", "case|ZD|digits3||2026|opt"],
    n: 3,
  },
  {
    hint: "een dossiercode dat begint met ZD- en dan het jaartal, dan negen cijfers (delen gescheiden door koppeltekens)",
    keys: ["case|ZD|digits9|-|2024|opt"],
    n: 1,
  },
  {
    hint: "een dossiercode dat begint met ZD. en dan het jaartal, dan negen cijfers (delen gescheiden door punten)",
    keys: ["case|ZD|digits9|.|2025|opt"],
    n: 1,
  },
  {
    hint: "een dossiercode dat begint met ZD. en dan het jaartal, dan vijf cijfers (delen gescheiden door punten)",
    keys: ["case|ZD|digits5|.|2025|opt"],
    n: 1,
  },
  {
    hint: "een dossiercode dat begint met ZD/ en dan het jaartal, dan vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["case|ZD|digits5|/|2024|opt"],
    n: 1,
  },
  {
    hint: "een dossiercode dat begint met ZD/ en dan het jaartal, dan zes tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["case|ZD|alnum6|/|2024|opt", "case|ZD|alnum6|/|2027|opt"],
    n: 3,
  },
  {
    hint: "een dossiercode dat begint met ZD/ en dan het jaartal, dan zeven tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["case|ZD|alnum7|/|2024|opt"],
    n: 1,
  },
  {
    hint: "een incidentnummer dat begint met INC en dan het jaartal, dan negen tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["ticket|INC|alnum9||2026|opt"],
    n: 1,
  },
  {
    hint: "een incidentnummer dat begint met INC en dan het jaartal, dan vier cijfers (zonder scheidingsteken)",
    keys: ["ticket|INC|digits4||2027|opt"],
    n: 1,
  },
  {
    hint: "een incidentnummer dat begint met INC en dan het jaartal, dan vijf cijfers (zonder scheidingsteken)",
    keys: ["ticket|INC|digits5||2024|opt"],
    n: 1,
  },
  {
    hint: "een incidentnummer dat begint met INC en dan het jaartal, dan zes tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["ticket|INC|alnum6||2025|opt"],
    n: 1,
  },
  {
    hint: "een incidentnummer dat begint met INC- en daarna acht cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|INC|digits8|-|-|req"],
    n: 1,
  },
  {
    hint: "een incidentnummer dat begint met INC- en daarna vier cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|INC|digits4|-|-|req"],
    n: 2,
  },
  {
    hint: "een incidentnummer dat begint met INC- en dan het jaartal, dan twee letters en vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|INC|letters2,digits5|-|2024|opt", "ticket|INC|letters2,digits5|-|2027|opt"],
    n: 4,
  },
  {
    hint: "een incidentnummer dat begint met INC. en dan het jaartal, dan acht tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["ticket|INC|alnum8|.|2026|opt"],
    n: 1,
  },
  {
    hint: "een incidentnummer dat begint met INC. en dan het jaartal, dan vijf cijfers (delen gescheiden door punten)",
    keys: ["ticket|INC|digits5|.|2025|opt"],
    n: 1,
  },
  {
    hint: "een incidentnummer dat begint met INC/ en daarna negen tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|INC|alnum9|/|-|req"],
    n: 1,
  },
  {
    hint: "een incidentnummer dat begint met INC/ en daarna zes cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|INC|digits6|/|-|req"],
    n: 2,
  },
  {
    hint: "een incidentnummer dat begint met INC/ en dan het jaartal, dan drie cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|INC|digits3|/|2024|opt"],
    n: 3,
  },
  {
    hint: "een incidentnummer dat begint met SD en daarna negen tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["ticket|SD|alnum9||-|req"],
    n: 2,
  },
  {
    hint: "een incidentnummer dat begint met SD en daarna tien cijfers (zonder scheidingsteken)",
    keys: ["ticket|SD|digits10||-|req"],
    n: 1,
  },
  {
    hint: "een incidentnummer dat begint met SD en daarna vijf cijfers (zonder scheidingsteken)",
    keys: ["ticket|SD|digits5||-|req"],
    n: 1,
  },
  {
    hint: "een incidentnummer dat begint met SD en dan het jaartal, dan acht cijfers (zonder scheidingsteken)",
    keys: ["ticket|SD|digits8||2027|opt"],
    n: 1,
  },
  {
    hint: "een incidentnummer dat begint met SD- en dan het jaartal, dan negen tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|SD|alnum9|-|2025|opt"],
    n: 1,
  },
  {
    hint: "een incidentnummer dat begint met SD- en dan het jaartal, dan zes tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|SD|alnum6|-|2024|opt"],
    n: 1,
  },
  {
    hint: "een incidentnummer dat begint met SD. en dan het jaartal, dan acht tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["ticket|SD|alnum8|.|2025|opt"],
    n: 1,
  },
  {
    hint: "een incidentnummer dat begint met SD. en dan het jaartal, dan vier cijfers (delen gescheiden door punten)",
    keys: ["ticket|SD|digits4|.|2027|opt"],
    n: 2,
  },
  {
    hint: "een incidentnummer dat begint met SD. en dan het jaartal, dan zeven cijfers (delen gescheiden door punten)",
    keys: ["ticket|SD|digits7|.|2027|opt"],
    n: 2,
  },
  {
    hint: "een incidentnummer dat begint met SD. en dan het jaartal, dan zeven tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["ticket|SD|alnum7|.|2027|opt"],
    n: 2,
  },
  {
    hint: "een incidentnummer dat begint met SD/ en dan het jaartal, dan negen cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|SD|digits9|/|2025|opt"],
    n: 2,
  },
  {
    hint: "een incidentnummer dat begint met SD/ en dan het jaartal, dan twee letters en vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|SD|letters2,digits5|/|2026|opt"],
    n: 1,
  },
  {
    hint: "een incidentnummer dat begint met SD/ en dan het jaartal, dan zeven cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|SD|digits7|/|2025|opt"],
    n: 1,
  },
  {
    hint: "een incidentnummer dat begint met SD/ en dan het jaartal, dan zeven tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|SD|alnum7|/|2027|opt"],
    n: 1,
  },
  {
    hint: "een incidentnummer dat begint met TKT en daarna vijf cijfers (zonder scheidingsteken)",
    keys: ["ticket|TKT|digits5||-|req"],
    n: 1,
  },
  {
    hint: "een incidentnummer dat begint met TKT en dan het jaartal, dan zeven cijfers (zonder scheidingsteken)",
    keys: ["ticket|TKT|digits7||2026|opt"],
    n: 1,
  },
  {
    hint: "een incidentnummer dat begint met TKT- en dan het jaartal, dan twee letters en vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|TKT|letters2,digits5|-|2025|opt"],
    n: 1,
  },
  {
    hint: "een incidentnummer dat begint met TKT- en dan het jaartal, dan zes cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|TKT|digits6|-|2026|opt"],
    n: 2,
  },
  {
    hint: "een incidentnummer dat begint met TKT- en dan het jaartal, dan zes tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|TKT|alnum6|-|2025|opt"],
    n: 1,
  },
  {
    hint: "een incidentnummer dat begint met TKT. en dan het jaartal, dan acht cijfers (delen gescheiden door punten)",
    keys: ["ticket|TKT|digits8|.|2024|opt"],
    n: 1,
  },
  {
    hint: "een incidentnummer dat begint met TKT. en dan het jaartal, dan twee letters en vijf cijfers (delen gescheiden door punten)",
    keys: ["ticket|TKT|letters2,digits5|.|2026|opt"],
    n: 2,
  },
  {
    hint: "een incidentnummer dat begint met TKT. en dan het jaartal, dan zeven tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["ticket|TKT|alnum7|.|2026|opt"],
    n: 1,
  },
  {
    hint: "een incidentnummer dat begint met TKT/ en daarna acht tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|TKT|alnum8|/|-|req"],
    n: 2,
  },
  {
    hint: "een incidentnummer dat begint met TKT/ en dan het jaartal, dan negen cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|TKT|digits9|/|2026|opt"],
    n: 2,
  },
  {
    hint: "een incidentnummer dat begint met TKT/ en dan het jaartal, dan tien cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|TKT|digits10|/|2025|opt"],
    n: 2,
  },
  {
    hint: "een incidentnummer dat begint met TKT/ en dan het jaartal, dan vier cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|TKT|digits4|/|2025|opt"],
    n: 1,
  },
  {
    hint: "een korte code van drie cijfers, geen streepjes",
    keys: ["project||digits3||-|req"],
    n: 8,
  },
  {
    hint: "een licentienummer dat begint met LIC- en dan het jaartal, dan twee cijfers en twee letters en twee cijfers (delen gescheiden door koppeltekens)",
    keys: ["licence|LIC|digits2,letters2,digits2|-|2025|opt"],
    n: 1,
  },
  {
    hint: "een licentienummer dat begint met LIC/ en daarna drie cijfers (delen gescheiden door schuine strepen)",
    keys: ["licence|LIC|digits3|/|-|req"],
    n: 1,
  },
  {
    hint: "een licentienummer dat begint met VERG en daarna zeven tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["licence|VERG|alnum7||-|req"],
    n: 2,
  },
  {
    hint: "een licentienummer dat begint met VERG- en dan het jaartal, dan negen cijfers (delen gescheiden door koppeltekens)",
    keys: ["licence|VERG|digits9|-|2024|opt"],
    n: 1,
  },
  {
    hint: "een licentienummer dat begint met VERG. en dan het jaartal, dan acht cijfers (delen gescheiden door punten)",
    keys: ["licence|VERG|digits8|.|2026|opt"],
    n: 2,
  },
  {
    hint: "een monsternummer dat begint met LAB/ en dan het jaartal, dan negen tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["specimen|LAB|alnum9|/|2025|opt"],
    n: 2,
  },
  {
    hint: "een monsternummer dat begint met MON. en dan het jaartal, dan acht tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["specimen|MON|alnum8|.|2027|opt"],
    n: 1,
  },
  {
    hint: "een monsternummer dat begint met MON/ en daarna zeven tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["specimen|MON|alnum7|/|-|req"],
    n: 2,
  },
  {
    hint: "een projectnummer dat begint met P en daarna zeven tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["project|P|alnum7||-|req"],
    n: 1,
  },
  {
    hint: "een projectnummer dat begint met P en dan het jaartal, dan drie cijfers (zonder scheidingsteken)",
    keys: ["project|P|digits3||2024|opt"],
    n: 1,
  },
  {
    hint: "een projectnummer dat begint met P en dan het jaartal, dan zeven cijfers (zonder scheidingsteken)",
    keys: ["project|P|digits7||2026|opt"],
    n: 2,
  },
  {
    hint: "een projectnummer dat begint met P- en daarna zes tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|P|alnum6|-|-|req"],
    n: 3,
  },
  {
    hint: "een projectnummer dat begint met P- en dan het jaartal, dan drie cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|P|digits3|-|2025|opt"],
    n: 2,
  },
  {
    hint: "een projectnummer dat begint met P- en dan het jaartal, dan negen cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|P|digits9|-|2024|opt"],
    n: 1,
  },
  {
    hint: "een projectnummer dat begint met P- en dan het jaartal, dan negen tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|P|alnum9|-|2026|opt"],
    n: 1,
  },
  {
    hint: "een projectnummer dat begint met P- en dan het jaartal, dan tien cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|P|digits10|-|2026|opt"],
    n: 2,
  },
  {
    hint: "een projectnummer dat begint met P- en dan het jaartal, dan twee letters en vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|P|letters2,digits5|-|2027|opt"],
    n: 1,
  },
  {
    hint: "een projectnummer dat begint met P- en dan het jaartal, dan zeven cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|P|digits7|-|2024|opt", "project|P|digits7|-|2027|opt"],
    n: 2,
  },
  {
    hint: "een projectnummer dat begint met P. en dan het jaartal, dan negen cijfers (delen gescheiden door punten)",
    keys: ["project|P|digits9|.|2027|opt"],
    n: 1,
  },
  {
    hint: "een projectnummer dat begint met P. en dan het jaartal, dan vier tekens met letters en cijfers en vier cijfers (delen gescheiden door punten)",
    keys: ["project|P|alnum4,digits4|.|2026|opt"],
    n: 1,
  },
  {
    hint: "een projectnummer dat begint met P. en dan het jaartal, dan zes cijfers (delen gescheiden door punten)",
    keys: ["project|P|digits6|.|2024|opt", "project|P|digits6|.|2025|opt"],
    n: 2,
  },
  {
    hint: "een projectnummer dat begint met P/ en dan het jaartal, dan vier cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|P|digits4|/|2025|opt", "project|P|digits4|/|2027|opt"],
    n: 2,
  },
  {
    hint: "een projectnummer dat begint met PRJ en dan het jaartal, dan negen cijfers (zonder scheidingsteken)",
    keys: ["project|PRJ|digits9||2024|opt"],
    n: 1,
  },
  {
    hint: "een projectnummer dat begint met PRJ en dan het jaartal, dan vijf cijfers (zonder scheidingsteken)",
    keys: ["project|PRJ|digits5||2024|opt"],
    n: 2,
  },
  {
    hint: "een projectnummer dat begint met PRJ en dan het jaartal, dan zeven cijfers (zonder scheidingsteken)",
    keys: ["project|PRJ|digits7||2026|opt"],
    n: 1,
  },
  {
    hint: "een projectnummer dat begint met PRJ- en dan het jaartal, dan drie cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|PRJ|digits3|-|2024|opt"],
    n: 1,
  },
  {
    hint: "een projectnummer dat begint met PRJ- en dan het jaartal, dan vier cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|PRJ|digits4|-|2027|opt"],
    n: 2,
  },
  {
    hint: "een projectnummer dat begint met PRJ. en dan het jaartal, dan negen cijfers (delen gescheiden door punten)",
    keys: ["project|PRJ|digits9|.|2025|opt"],
    n: 1,
  },
  {
    hint: "een projectnummer dat begint met PRJ. en dan het jaartal, dan zes tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["project|PRJ|alnum6|.|2027|opt"],
    n: 1,
  },
  {
    hint: "een projectnummer dat begint met PRJ/ en daarna acht cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PRJ|digits8|/|-|req"],
    n: 2,
  },
  {
    hint: "een projectnummer dat begint met PRJ/ en daarna acht tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PRJ|alnum8|/|-|req"],
    n: 1,
  },
  {
    hint: "een projectnummer dat begint met PRJ/ en daarna twee letters en vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PRJ|letters2,digits5|/|-|req"],
    n: 1,
  },
  {
    hint: "een projectnummer dat begint met PRJ/ en daarna zes tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PRJ|alnum6|/|-|req"],
    n: 1,
  },
  {
    hint: "een projectnummer dat begint met PRJ/ en dan het jaartal, dan drie cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PRJ|digits3|/|2027|opt"],
    n: 2,
  },
  {
    hint: "een projectnummer dat begint met PRJ/ en dan het jaartal, dan negen tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PRJ|alnum9|/|2024|opt"],
    n: 1,
  },
  {
    hint: "een projectnummer dat begint met PRJ/ en dan het jaartal, dan vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PRJ|digits5|/|2025|opt"],
    n: 1,
  },
  {
    hint: "een projectnummer dat begint met PRJ/ en dan het jaartal, dan zes cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PRJ|digits6|/|2026|opt"],
    n: 1,
  },
  {
    hint: "een projectnummer dat begint met PRJ/ en dan het jaartal, dan zes tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PRJ|alnum6|/|2026|opt"],
    n: 2,
  },
  {
    hint: "een projectnummer dat begint met PROJ en daarna drie cijfers (zonder scheidingsteken)",
    keys: ["project|PROJ|digits3||-|req"],
    n: 1,
  },
  {
    hint: "een projectnummer dat begint met PROJ en dan het jaartal, dan negen cijfers (zonder scheidingsteken)",
    keys: ["project|PROJ|digits9||2025|opt"],
    n: 1,
  },
  {
    hint: "een projectnummer dat begint met PROJ en dan het jaartal, dan vijf cijfers (zonder scheidingsteken)",
    keys: ["project|PROJ|digits5||2025|opt"],
    n: 1,
  },
  {
    hint: "een projectnummer dat begint met PROJ en dan het jaartal, dan zes cijfers (zonder scheidingsteken)",
    keys: ["project|PROJ|digits6||2027|opt"],
    n: 1,
  },
  {
    hint: "een projectnummer dat begint met PROJ- en daarna twee cijfers en twee letters en twee cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|PROJ|digits2,letters2,digits2|-|-|req"],
    n: 4,
  },
  {
    hint: "een projectnummer dat begint met PROJ- en dan het jaartal, dan negen cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|PROJ|digits9|-|2025|opt", "project|PROJ|digits9|-|2026|opt"],
    n: 3,
  },
  {
    hint: "een projectnummer dat begint met PROJ- en dan het jaartal, dan tien cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|PROJ|digits10|-|2024|opt"],
    n: 1,
  },
  {
    hint: "een projectnummer dat begint met PROJ- en dan het jaartal, dan vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|PROJ|digits5|-|2025|opt"],
    n: 3,
  },
  {
    hint: "een projectnummer dat begint met PROJ. en daarna acht tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["project|PROJ|alnum8|.|-|req"],
    n: 1,
  },
  {
    hint: "een projectnummer dat begint met PROJ. en dan het jaartal, dan twee letters en vijf cijfers (delen gescheiden door punten)",
    keys: ["project|PROJ|letters2,digits5|.|2025|opt"],
    n: 1,
  },
  {
    hint: "een projectnummer dat begint met PROJ/ en daarna negen cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PROJ|digits9|/|-|req"],
    n: 1,
  },
  {
    hint: "een projectnummer dat begint met PROJ/ en dan het jaartal, dan acht cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PROJ|digits8|/|2026|opt"],
    n: 1,
  },
  {
    hint: "een registratienummer dat begint met INS- en dan het jaartal, dan negen tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["registration|INS|alnum9|-|2027|opt"],
    n: 1,
  },
  {
    hint: "een registratienummer dat begint met INS/ en dan het jaartal, dan zeven cijfers (delen gescheiden door schuine strepen)",
    keys: ["registration|INS|digits7|/|2026|opt"],
    n: 1,
  },
  {
    hint: "een registratienummer dat begint met REG. en dan het jaartal, dan drie cijfers (delen gescheiden door punten)",
    keys: ["registration|REG|digits3|.|2027|opt"],
    n: 1,
  },
  {
    hint: "een registratienummer dat begint met REG/ en daarna vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["registration|REG|digits5|/|-|req"],
    n: 2,
  },
  {
    hint: "een vaartuignummer dat begint met SCH. en dan het jaartal, dan vier tekens met letters en cijfers en vier cijfers (delen gescheiden door punten)",
    keys: ["vessel|SCH|alnum4,digits4|.|2025|opt"],
    n: 2,
  },
  {
    hint: "een vaartuignummer dat begint met SCH/ en daarna zes cijfers (delen gescheiden door schuine strepen)",
    keys: ["vessel|SCH|digits6|/|-|req"],
    n: 1,
  },
  {
    hint: "een vaartuignummer dat begint met VRT en dan het jaartal, dan zes tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["vessel|VRT|alnum6||2027|opt"],
    n: 1,
  },
  {
    hint: "een vaartuignummer dat begint met VRT- en dan het jaartal, dan twee letters en twee cijfers en twee letters (delen gescheiden door koppeltekens)",
    keys: ["vessel|VRT|letters2,digits2,letters2|-|2027|opt"],
    n: 2,
  },
  {
    hint: "een vaartuignummer dat begint met VRT/ en daarna zes tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["vessel|VRT|alnum6|/|-|req"],
    n: 1,
  },
  {
    hint: "een vergunningnummer dat begint met PER- en dan het jaartal, dan zes tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["permit|PER|alnum6|-|2025|opt"],
    n: 3,
  },
  {
    hint: "een vergunningnummer dat begint met PER. en dan het jaartal, dan vier tekens met letters en cijfers en vier cijfers (delen gescheiden door punten)",
    keys: ["permit|PER|alnum4,digits4|.|2024|opt"],
    n: 3,
  },
  {
    hint: "een vergunningnummer dat begint met VGM en dan het jaartal, dan negen tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["permit|VGM|alnum9||2024|opt"],
    n: 4,
  },
  {
    hint: "een vergunningnummer dat begint met VGM. en dan het jaartal, dan acht tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["permit|VGM|alnum8|.|2025|opt"],
    n: 1,
  },
  {
    hint: "een vergunningnummer dat begint met VGM/ en dan het jaartal, dan tien cijfers (delen gescheiden door schuine strepen)",
    keys: ["permit|VGM|digits10|/|2027|opt"],
    n: 1,
  },
  {
    hint: "generate a asset code, shape AST- plus the year 2024, then eight digits (parts separated by hyphens)",
    keys: ["asset|AST|digits8|-|2024|req"],
    n: 1,
  },
  {
    hint: "generate a asset code, shape AST- plus the year 2025, then six characters mixing letters and digits (parts separated by hyphens)",
    keys: ["asset|AST|alnum6|-|2025|req"],
    n: 1,
  },
  {
    hint: "generate a asset code, shape AST. plus the year 2024, then eight characters mixing letters and digits (parts separated by dots)",
    keys: ["asset|AST|alnum8|.|2024|req"],
    n: 1,
  },
  {
    hint: "generate a asset code, shape AST. plus the year 2025, then eight digits (parts separated by dots)",
    keys: ["asset|AST|digits8|.|2025|req"],
    n: 2,
  },
  {
    hint: "generate a asset code, shape AST. plus the year 2025, then three digits (parts separated by dots)",
    keys: ["asset|AST|digits3|.|2025|req"],
    n: 1,
  },
  {
    hint: "generate a asset code, shape AST., then three digits (parts separated by dots)",
    keys: ["asset|AST|digits3|.|-|req"],
    n: 1,
  },
  {
    hint: "generate a asset code, shape AST/ plus the year 2027, then four digits (parts separated by slashes)",
    keys: ["asset|AST|digits4|/|2027|req"],
    n: 1,
  },
  {
    hint: "generate a asset code, shape AST/ plus the year 2027, then nine characters mixing letters and digits (parts separated by slashes)",
    keys: ["asset|AST|alnum9|/|2027|req"],
    n: 1,
  },
  {
    hint: "generate a asset code, shape MID- plus the year 2024, then three digits (parts separated by hyphens)",
    keys: ["asset|MID|digits3|-|2024|req"],
    n: 1,
  },
  {
    hint: "generate a asset code, shape MID- plus the year 2026, then six digits (parts separated by hyphens)",
    keys: ["asset|MID|digits6|-|2026|req"],
    n: 2,
  },
  {
    hint: "generate a asset code, shape MID. plus the year 2024, then eight characters mixing letters and digits (parts separated by dots)",
    keys: ["asset|MID|alnum8|.|2024|req"],
    n: 2,
  },
  {
    hint: "generate a asset code, shape MID. plus the year 2025, then four digits (parts separated by dots)",
    keys: ["asset|MID|digits4|.|2025|req"],
    n: 1,
  },
  {
    hint: "generate a asset code, shape MID/ plus the year 2026, then seven characters mixing letters and digits (parts separated by slashes)",
    keys: ["asset|MID|alnum7|/|2026|req"],
    n: 1,
  },
  {
    hint: "generate a asset code, shape OBJ plus the year 2027, then seven digits (without separators)",
    keys: ["asset|OBJ|digits7||2027|req"],
    n: 1,
  },
  {
    hint: "generate a asset code, shape OBJ- plus the year 2024, then four digits (parts separated by hyphens)",
    keys: ["asset|OBJ|digits4|-|2024|req"],
    n: 1,
  },
  {
    hint: "generate a asset code, shape OBJ. plus the year 2024, then two letters and five digits (parts separated by dots)",
    keys: ["asset|OBJ|letters2,digits5|.|2024|req"],
    n: 1,
  },
  {
    hint: "generate a asset code, shape OBJ. plus the year 2026, then eight characters mixing letters and digits (parts separated by dots)",
    keys: ["asset|OBJ|alnum8|.|2026|req"],
    n: 1,
  },
  {
    hint: "generate a asset code, shape OBJ/ plus the year 2026, then ten digits (parts separated by slashes)",
    keys: ["asset|OBJ|digits10|/|2026|req"],
    n: 1,
  },
  {
    hint: "generate a batch code, shape BATCH- plus the year 2025, then nine characters mixing letters and digits (parts separated by hyphens)",
    keys: ["batch|BATCH|alnum9|-|2025|req"],
    n: 1,
  },
  {
    hint: "generate a batch code, shape BATCH. plus the year 2025, then eight characters mixing letters and digits (parts separated by dots)",
    keys: ["batch|BATCH|alnum8|.|2025|req"],
    n: 1,
  },
  {
    hint: "generate a batch code, shape BATCH., then seven characters mixing letters and digits (parts separated by dots)",
    keys: ["batch|BATCH|alnum7|.|-|req"],
    n: 1,
  },
  {
    hint: "generate a batch code, shape CH-, then ten digits (parts separated by hyphens)",
    keys: ["batch|CH|digits10|-|-|req"],
    n: 1,
  },
  {
    hint: "generate a batch code, shape CH. plus the year 2027, then four digits (parts separated by dots)",
    keys: ["batch|CH|digits4|.|2027|req"],
    n: 1,
  },
  {
    hint: "generate a batch code, shape CH/ plus the year 2026, then seven digits (parts separated by slashes)",
    keys: ["batch|CH|digits7|/|2026|req"],
    n: 1,
  },
  {
    hint: "generate a batch code, shape CH/ plus the year 2026, then six digits (parts separated by slashes)",
    keys: ["batch|CH|digits6|/|2026|req"],
    n: 1,
  },
  {
    hint: "generate a batch code, shape LOT plus the year 2024, then seven characters mixing letters and digits (without separators)",
    keys: ["batch|LOT|alnum7||2024|req"],
    n: 1,
  },
  {
    hint: "generate a batch code, shape LOT- plus the year 2027, then nine digits (parts separated by hyphens)",
    keys: ["batch|LOT|digits9|-|2027|req"],
    n: 1,
  },
  {
    hint: "generate a batch code, shape LOT. plus the year 2024, then four digits (parts separated by dots)",
    keys: ["batch|LOT|digits4|.|2024|req"],
    n: 1,
  },
  {
    hint: "generate a batch code, shape LOT. plus the year 2024, then seven digits (parts separated by dots)",
    keys: ["batch|LOT|digits7|.|2024|req"],
    n: 1,
  },
  {
    hint: "generate a batch code, shape LOT. plus the year 2026, then seven characters mixing letters and digits (parts separated by dots)",
    keys: ["batch|LOT|alnum7|.|2026|req"],
    n: 1,
  },
  {
    hint: "generate a batch code, shape LOT/, then eight characters mixing letters and digits (parts separated by slashes)",
    keys: ["batch|LOT|alnum8|/|-|req"],
    n: 1,
  },
  {
    hint: "generate a case code, shape CASE plus the year 2024, then six digits (without separators)",
    keys: ["case|CASE|digits6||2024|req"],
    n: 1,
  },
  {
    hint: "generate a case code, shape CASE plus the year 2026, then five digits (without separators)",
    keys: ["case|CASE|digits5||2026|req"],
    n: 2,
  },
  {
    hint: "generate a case code, shape CASE- plus the year 2024, then two letters and five digits (parts separated by hyphens)",
    keys: ["case|CASE|letters2,digits5|-|2024|req"],
    n: 1,
  },
  {
    hint: "generate a case code, shape CASE/ plus the year 2027, then nine characters mixing letters and digits (parts separated by slashes)",
    keys: ["case|CASE|alnum9|/|2027|req"],
    n: 1,
  },
  {
    hint: "generate a case code, shape CASE/, then three digits (parts separated by slashes)",
    keys: ["case|CASE|digits3|/|-|req"],
    n: 1,
  },
  {
    hint: "generate a case code, shape DOSS plus the year 2026, then seven characters mixing letters and digits (without separators)",
    keys: ["case|DOSS|alnum7||2026|req"],
    n: 1,
  },
  {
    hint: "generate a case code, shape ZD plus the year 2026, then three digits (without separators)",
    keys: ["case|ZD|digits3||2026|req"],
    n: 1,
  },
  {
    hint: "generate a case code, shape ZD, then eight characters mixing letters and digits (without separators)",
    keys: ["case|ZD|alnum8||-|req"],
    n: 1,
  },
  {
    hint: "generate a case code, shape ZD- plus the year 2025, then nine digits (parts separated by hyphens)",
    keys: ["case|ZD|digits9|-|2025|req"],
    n: 1,
  },
  {
    hint: "generate a case code, shape ZD- plus the year 2027, then seven digits (parts separated by hyphens)",
    keys: ["case|ZD|digits7|-|2027|req"],
    n: 1,
  },
  {
    hint: "generate a case code, shape ZD- plus the year 2027, then two letters and five digits (parts separated by hyphens)",
    keys: ["case|ZD|letters2,digits5|-|2027|req"],
    n: 1,
  },
  {
    hint: "generate a case code, shape ZD. plus the year 2026, then eight digits (parts separated by dots)",
    keys: ["case|ZD|digits8|.|2026|req"],
    n: 1,
  },
  {
    hint: "generate a case code, shape ZD/ plus the year 2024, then six characters mixing letters and digits (parts separated by slashes)",
    keys: ["case|ZD|alnum6|/|2024|req"],
    n: 1,
  },
  {
    hint: "generate a incident number, shape INC plus the year 2027, then four digits (without separators)",
    keys: ["ticket|INC|digits4||2027|req"],
    n: 1,
  },
  {
    hint: "generate a incident number, shape INC- plus the year 2024, then two letters and five digits (parts separated by hyphens)",
    keys: ["ticket|INC|letters2,digits5|-|2024|req"],
    n: 1,
  },
  {
    hint: "generate a incident number, shape INC- plus the year 2026, then seven characters mixing letters and digits (parts separated by hyphens)",
    keys: ["ticket|INC|alnum7|-|2026|req"],
    n: 1,
  },
  {
    hint: "generate a incident number, shape INC-, then seven characters mixing letters and digits (parts separated by hyphens)",
    keys: ["ticket|INC|alnum7|-|-|req"],
    n: 1,
  },
  {
    hint: "generate a incident number, shape INC. plus the year 2025, then five digits (parts separated by dots)",
    keys: ["ticket|INC|digits5|.|2025|req"],
    n: 1,
  },
  {
    hint: "generate a incident number, shape SD- plus the year 2024, then six digits (parts separated by hyphens)",
    keys: ["ticket|SD|digits6|-|2024|req"],
    n: 1,
  },
  {
    hint: "generate a incident number, shape SD. plus the year 2027, then four digits (parts separated by dots)",
    keys: ["ticket|SD|digits4|.|2027|req"],
    n: 1,
  },
  {
    hint: "generate a incident number, shape SD/ plus the year 2025, then ten digits (parts separated by slashes)",
    keys: ["ticket|SD|digits10|/|2025|req"],
    n: 1,
  },
  {
    hint: "generate a incident number, shape SD/ plus the year 2026, then two letters and five digits (parts separated by slashes)",
    keys: ["ticket|SD|letters2,digits5|/|2026|req"],
    n: 1,
  },
  {
    hint: "generate a incident number, shape TKT plus the year 2026, then seven digits (without separators)",
    keys: ["ticket|TKT|digits7||2026|req"],
    n: 1,
  },
  {
    hint: "generate a incident number, shape TKT- plus the year 2025, then two letters and five digits (parts separated by hyphens)",
    keys: ["ticket|TKT|letters2,digits5|-|2025|req"],
    n: 1,
  },
  {
    hint: "generate a incident number, shape TKT. plus the year 2026, then two letters and five digits (parts separated by dots)",
    keys: ["ticket|TKT|letters2,digits5|.|2026|req"],
    n: 1,
  },
  {
    hint: "generate a project code, shape P- plus the year 2025, then seven characters mixing letters and digits (parts separated by hyphens)",
    keys: ["project|P|alnum7|-|2025|req"],
    n: 1,
  },
  {
    hint: "generate a project code, shape P- plus the year 2027, then seven digits (parts separated by hyphens)",
    keys: ["project|P|digits7|-|2027|req"],
    n: 1,
  },
  {
    hint: "generate a project code, shape P/ plus the year 2025, then eight characters mixing letters and digits (parts separated by slashes)",
    keys: ["project|P|alnum8|/|2025|req"],
    n: 1,
  },
  {
    hint: "generate a project code, shape P/ plus the year 2025, then ten digits (parts separated by slashes)",
    keys: ["project|P|digits10|/|2025|req"],
    n: 1,
  },
  {
    hint: "generate a project code, shape P/ plus the year 2027, then four digits (parts separated by slashes)",
    keys: ["project|P|digits4|/|2027|req"],
    n: 2,
  },
  {
    hint: "generate a project code, shape PRJ plus the year 2024, then five digits (without separators)",
    keys: ["project|PRJ|digits5||2024|req"],
    n: 1,
  },
  {
    hint: "generate a project code, shape PRJ plus the year 2024, then nine digits (without separators)",
    keys: ["project|PRJ|digits9||2024|req"],
    n: 1,
  },
  {
    hint: "generate a project code, shape PRJ plus the year 2024, then ten digits (without separators)",
    keys: ["project|PRJ|digits10||2024|req"],
    n: 1,
  },
  {
    hint: "generate a project code, shape PRJ- plus the year 2024, then three digits (parts separated by hyphens)",
    keys: ["project|PRJ|digits3|-|2024|req"],
    n: 1,
  },
  {
    hint: "generate a project code, shape PRJ- plus the year 2027, then four digits (parts separated by hyphens)",
    keys: ["project|PRJ|digits4|-|2027|req"],
    n: 1,
  },
  {
    hint: "generate a project code, shape PRJ. plus the year 2027, then six characters mixing letters and digits (parts separated by dots)",
    keys: ["project|PRJ|alnum6|.|2027|req"],
    n: 1,
  },
  {
    hint: "generate a project code, shape PRJ/ plus the year 2025, then five digits (parts separated by slashes)",
    keys: ["project|PRJ|digits5|/|2025|req"],
    n: 1,
  },
  {
    hint: "generate a project code, shape PRJ/ plus the year 2026, then six characters mixing letters and digits (parts separated by slashes)",
    keys: ["project|PRJ|alnum6|/|2026|req"],
    n: 1,
  },
  {
    hint: "generate a project code, shape PRJ/, then nine digits (parts separated by slashes)",
    keys: ["project|PRJ|digits9|/|-|req"],
    n: 1,
  },
  {
    hint: "generate a project code, shape PROJ plus the year 2025, then nine digits (without separators)",
    keys: ["project|PROJ|digits9||2025|req"],
    n: 1,
  },
  {
    hint: "generate a project code, shape PROJ- plus the year 2025, then five digits (parts separated by hyphens)",
    keys: ["project|PROJ|digits5|-|2025|req"],
    n: 1,
  },
  {
    hint: "generate a project code, shape PROJ- plus the year 2025, then nine digits (parts separated by hyphens)",
    keys: ["project|PROJ|digits9|-|2025|req"],
    n: 1,
  },
  {
    hint: "generate a project code, shape PROJ- plus the year 2026, then nine digits (parts separated by hyphens)",
    keys: ["project|PROJ|digits9|-|2026|req"],
    n: 1,
  },
  {
    hint: "generate a project code, shape PROJ. plus the year 2025, then seven characters mixing letters and digits (parts separated by dots)",
    keys: ["project|PROJ|alnum7|.|2025|req"],
    n: 1,
  },
  {
    hint: "generate a project code, shape PROJ/ plus the year 2024, then ten digits (parts separated by slashes)",
    keys: ["project|PROJ|digits10|/|2024|req"],
    n: 1,
  },
  {
    hint: "genereer een assetcode, opbouw AST- en jaartal 2025, daarna zes tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|AST|alnum6|-|2025|req"],
    n: 1,
  },
  {
    hint: "genereer een assetcode, opbouw AST/ en jaartal 2026, daarna twee letters en vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["asset|AST|letters2,digits5|/|2026|req"],
    n: 1,
  },
  {
    hint: "genereer een assetcode, opbouw AST/ en jaartal 2027, daarna vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["asset|AST|digits5|/|2027|req"],
    n: 1,
  },
  {
    hint: "genereer een assetcode, opbouw MID- en jaartal 2024, daarna zeven tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|MID|alnum7|-|2024|req"],
    n: 1,
  },
  {
    hint: "genereer een assetcode, opbouw MID- en jaartal 2026, daarna twee letters en vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|MID|letters2,digits5|-|2026|req"],
    n: 1,
  },
  {
    hint: "genereer een assetcode, opbouw MID. en jaartal 2025, daarna acht cijfers (delen gescheiden door punten)",
    keys: ["asset|MID|digits8|.|2025|req"],
    n: 1,
  },
  {
    hint: "genereer een assetcode, opbouw MID., daarna vier cijfers (delen gescheiden door punten)",
    keys: ["asset|MID|digits4|.|-|req"],
    n: 1,
  },
  {
    hint: "genereer een assetcode, opbouw MID/, daarna negen tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["asset|MID|alnum9|/|-|req"],
    n: 1,
  },
  {
    hint: "genereer een assetcode, opbouw OBJ en jaartal 2027, daarna zes cijfers (zonder scheidingsteken)",
    keys: ["asset|OBJ|digits6||2027|req"],
    n: 1,
  },
  {
    hint: "genereer een assetcode, opbouw OBJ. en jaartal 2025, daarna zes cijfers (delen gescheiden door punten)",
    keys: ["asset|OBJ|digits6|.|2025|req"],
    n: 1,
  },
  {
    hint: "genereer een assetcode, opbouw OBJ., daarna acht cijfers (delen gescheiden door punten)",
    keys: ["asset|OBJ|digits8|.|-|req"],
    n: 1,
  },
  {
    hint: "genereer een assetcode, opbouw OBJ., daarna vijf cijfers (delen gescheiden door punten)",
    keys: ["asset|OBJ|digits5|.|-|req"],
    n: 1,
  },
  {
    hint: "genereer een assetcode, opbouw OBJ/ en jaartal 2026, daarna tien cijfers (delen gescheiden door schuine strepen)",
    keys: ["asset|OBJ|digits10|/|2026|req"],
    n: 1,
  },
  {
    hint: "genereer een batchcode, opbouw BATCH en jaartal 2024, daarna zeven tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["batch|BATCH|alnum7||2024|req"],
    n: 1,
  },
  {
    hint: "genereer een batchcode, opbouw BATCH en jaartal 2025, daarna negen cijfers (zonder scheidingsteken)",
    keys: ["batch|BATCH|digits9||2025|req"],
    n: 1,
  },
  {
    hint: "genereer een batchcode, opbouw BATCH/ en jaartal 2024, daarna twee letters en vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|BATCH|letters2,digits5|/|2024|req"],
    n: 1,
  },
  {
    hint: "genereer een batchcode, opbouw BATCH/ en jaartal 2026, daarna tien cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|BATCH|digits10|/|2026|req"],
    n: 1,
  },
  {
    hint: "genereer een batchcode, opbouw BATCH/, daarna twee letters en vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|BATCH|letters2,digits5|/|-|req"],
    n: 1,
  },
  {
    hint: "genereer een batchcode, opbouw CH- en jaartal 2026, daarna drie cijfers (delen gescheiden door koppeltekens)",
    keys: ["batch|CH|digits3|-|2026|req"],
    n: 2,
  },
  {
    hint: "genereer een batchcode, opbouw CH. en jaartal 2024, daarna acht tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["batch|CH|alnum8|.|2024|req"],
    n: 1,
  },
  {
    hint: "genereer een batchcode, opbouw CH. en jaartal 2026, daarna acht cijfers (delen gescheiden door punten)",
    keys: ["batch|CH|digits8|.|2026|req"],
    n: 1,
  },
  {
    hint: "genereer een batchcode, opbouw CH., daarna zeven cijfers (delen gescheiden door punten)",
    keys: ["batch|CH|digits7|.|-|req"],
    n: 1,
  },
  {
    hint: "genereer een batchcode, opbouw CH/ en jaartal 2024, daarna negen tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|CH|alnum9|/|2024|req"],
    n: 1,
  },
  {
    hint: "genereer een batchcode, opbouw CH/ en jaartal 2024, daarna zeven tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|CH|alnum7|/|2024|req"],
    n: 1,
  },
  {
    hint: "genereer een batchcode, opbouw CH/, daarna zeven cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|CH|digits7|/|-|req"],
    n: 1,
  },
  {
    hint: "genereer een batchcode, opbouw LOT- en jaartal 2024, daarna vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["batch|LOT|digits5|-|2024|req"],
    n: 1,
  },
  {
    hint: "genereer een batchcode, opbouw LOT- en jaartal 2024, daarna zeven tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["batch|LOT|alnum7|-|2024|req"],
    n: 1,
  },
  {
    hint: "genereer een batchcode, opbouw LOT. en jaartal 2026, daarna zes tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["batch|LOT|alnum6|.|2026|req"],
    n: 2,
  },
  {
    hint: "genereer een batchcode, opbouw LOT/ en jaartal 2024, daarna twee letters en vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|LOT|letters2,digits5|/|2024|req"],
    n: 1,
  },
  {
    hint: "genereer een batchcode, opbouw LOT/, daarna acht tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|LOT|alnum8|/|-|req"],
    n: 1,
  },
  {
    hint: "genereer een dossiercode, opbouw CASE, daarna acht cijfers (zonder scheidingsteken)",
    keys: ["case|CASE|digits8||-|req"],
    n: 1,
  },
  {
    hint: "genereer een dossiercode, opbouw CASE-, daarna twee letters en vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["case|CASE|letters2,digits5|-|-|req"],
    n: 1,
  },
  {
    hint: "genereer een dossiercode, opbouw CASE. en jaartal 2025, daarna twee letters en vijf cijfers (delen gescheiden door punten)",
    keys: ["case|CASE|letters2,digits5|.|2025|req"],
    n: 1,
  },
  {
    hint: "genereer een dossiercode, opbouw CASE. en jaartal 2025, daarna zes cijfers (delen gescheiden door punten)",
    keys: ["case|CASE|digits6|.|2025|req"],
    n: 2,
  },
  {
    hint: "genereer een dossiercode, opbouw CASE. en jaartal 2026, daarna drie cijfers (delen gescheiden door punten)",
    keys: ["case|CASE|digits3|.|2026|req"],
    n: 1,
  },
  {
    hint: "genereer een dossiercode, opbouw CASE., daarna acht cijfers (delen gescheiden door punten)",
    keys: ["case|CASE|digits8|.|-|req"],
    n: 1,
  },
  {
    hint: "genereer een dossiercode, opbouw CASE/ en jaartal 2025, daarna twee letters en vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["case|CASE|letters2,digits5|/|2025|req"],
    n: 1,
  },
  {
    hint: "genereer een dossiercode, opbouw CASE/, daarna drie cijfers (delen gescheiden door schuine strepen)",
    keys: ["case|CASE|digits3|/|-|req"],
    n: 1,
  },
  {
    hint: "genereer een dossiercode, opbouw DOSS, daarna vijf cijfers (zonder scheidingsteken)",
    keys: ["case|DOSS|digits5||-|req"],
    n: 1,
  },
  {
    hint: "genereer een dossiercode, opbouw DOSS- en jaartal 2025, daarna negen cijfers (delen gescheiden door koppeltekens)",
    keys: ["case|DOSS|digits9|-|2025|req"],
    n: 1,
  },
  {
    hint: "genereer een dossiercode, opbouw DOSS. en jaartal 2025, daarna negen tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["case|DOSS|alnum9|.|2025|req"],
    n: 1,
  },
  {
    hint: "genereer een dossiercode, opbouw DOSS. en jaartal 2025, daarna zeven cijfers (delen gescheiden door punten)",
    keys: ["case|DOSS|digits7|.|2025|req"],
    n: 1,
  },
  {
    hint: "genereer een dossiercode, opbouw DOSS. en jaartal 2026, daarna negen tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["case|DOSS|alnum9|.|2026|req"],
    n: 1,
  },
  {
    hint: "genereer een dossiercode, opbouw ZD en jaartal 2025, daarna drie cijfers (zonder scheidingsteken)",
    keys: ["case|ZD|digits3||2025|req"],
    n: 1,
  },
  {
    hint: "genereer een dossiercode, opbouw ZD, daarna zes tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["case|ZD|alnum6||-|req"],
    n: 2,
  },
  {
    hint: "genereer een dossiercode, opbouw ZD. en jaartal 2025, daarna negen cijfers (delen gescheiden door punten)",
    keys: ["case|ZD|digits9|.|2025|req"],
    n: 1,
  },
  {
    hint: "genereer een dossiercode, opbouw ZD. en jaartal 2025, daarna vijf cijfers (delen gescheiden door punten)",
    keys: ["case|ZD|digits5|.|2025|req"],
    n: 1,
  },
  {
    hint: "genereer een dossiercode, opbouw ZD/ en jaartal 2026, daarna acht cijfers (delen gescheiden door schuine strepen)",
    keys: ["case|ZD|digits8|/|2026|req"],
    n: 1,
  },
  {
    hint: "genereer een dossiercode, opbouw ZD/, daarna negen cijfers (delen gescheiden door schuine strepen)",
    keys: ["case|ZD|digits9|/|-|req"],
    n: 1,
  },
  {
    hint: "genereer een incidentnummer, opbouw INC en jaartal 2024, daarna tien cijfers (zonder scheidingsteken)",
    keys: ["ticket|INC|digits10||2024|req"],
    n: 1,
  },
  {
    hint: "genereer een incidentnummer, opbouw INC en jaartal 2024, daarna vier cijfers (zonder scheidingsteken)",
    keys: ["ticket|INC|digits4||2024|req"],
    n: 1,
  },
  {
    hint: "genereer een incidentnummer, opbouw INC en jaartal 2024, daarna vijf cijfers (zonder scheidingsteken)",
    keys: ["ticket|INC|digits5||2024|req"],
    n: 1,
  },
  {
    hint: "genereer een incidentnummer, opbouw INC- en jaartal 2027, daarna twee letters en vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|INC|letters2,digits5|-|2027|req"],
    n: 1,
  },
  {
    hint: "genereer een incidentnummer, opbouw INC/, daarna zes cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|INC|digits6|/|-|req"],
    n: 1,
  },
  {
    hint: "genereer een incidentnummer, opbouw SD en jaartal 2024, daarna drie cijfers (zonder scheidingsteken)",
    keys: ["ticket|SD|digits3||2024|req"],
    n: 1,
  },
  {
    hint: "genereer een incidentnummer, opbouw SD. en jaartal 2027, daarna zeven cijfers (delen gescheiden door punten)",
    keys: ["ticket|SD|digits7|.|2027|req"],
    n: 1,
  },
  {
    hint: "genereer een incidentnummer, opbouw TKT en jaartal 2027, daarna acht tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["ticket|TKT|alnum8||2027|req"],
    n: 1,
  },
  {
    hint: "genereer een incidentnummer, opbouw TKT- en jaartal 2024, daarna zes cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|TKT|digits6|-|2024|req"],
    n: 1,
  },
  {
    hint: "genereer een incidentnummer, opbouw TKT- en jaartal 2025, daarna twee letters en vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|TKT|letters2,digits5|-|2025|req"],
    n: 1,
  },
  {
    hint: "genereer een incidentnummer, opbouw TKT- en jaartal 2025, daarna zes tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|TKT|alnum6|-|2025|req"],
    n: 1,
  },
  {
    hint: "genereer een incidentnummer, opbouw TKT/, daarna negen tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|TKT|alnum9|/|-|req"],
    n: 1,
  },
  {
    hint: "genereer een projectnummer, opbouw P en jaartal 2026, daarna zeven cijfers (zonder scheidingsteken)",
    keys: ["project|P|digits7||2026|req"],
    n: 1,
  },
  {
    hint: "genereer een projectnummer, opbouw P, daarna zes tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["project|P|alnum6||-|req"],
    n: 1,
  },
  {
    hint: "genereer een projectnummer, opbouw P, daarna zeven tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["project|P|alnum7||-|req"],
    n: 1,
  },
  {
    hint: "genereer een projectnummer, opbouw P- en jaartal 2025, daarna drie cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|P|digits3|-|2025|req"],
    n: 1,
  },
  {
    hint: "genereer een projectnummer, opbouw P- en jaartal 2026, daarna negen tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|P|alnum9|-|2026|req"],
    n: 1,
  },
  {
    hint: "genereer een projectnummer, opbouw P- en jaartal 2027, daarna twee letters en vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|P|letters2,digits5|-|2027|req"],
    n: 1,
  },
  {
    hint: "genereer een projectnummer, opbouw P. en jaartal 2025, daarna zes cijfers (delen gescheiden door punten)",
    keys: ["project|P|digits6|.|2025|req"],
    n: 1,
  },
  {
    hint: "genereer een projectnummer, opbouw P/ en jaartal 2025, daarna acht tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|P|alnum8|/|2025|req"],
    n: 1,
  },
  {
    hint: "genereer een projectnummer, opbouw PRJ en jaartal 2024, daarna tien cijfers (zonder scheidingsteken)",
    keys: ["project|PRJ|digits10||2024|req"],
    n: 1,
  },
  {
    hint: "genereer een projectnummer, opbouw PRJ. en jaartal 2027, daarna zes tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["project|PRJ|alnum6|.|2027|req"],
    n: 1,
  },
  {
    hint: "genereer een projectnummer, opbouw PRJ/ en jaartal 2024, daarna negen tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PRJ|alnum9|/|2024|req"],
    n: 1,
  },
  {
    hint: "genereer een projectnummer, opbouw PROJ en jaartal 2025, daarna vijf cijfers (zonder scheidingsteken)",
    keys: ["project|PROJ|digits5||2025|req"],
    n: 1,
  },
  {
    hint: "genereer een projectnummer, opbouw PROJ. en jaartal 2025, daarna twee letters en vijf cijfers (delen gescheiden door punten)",
    keys: ["project|PROJ|letters2,digits5|.|2025|req"],
    n: 1,
  },
  {
    hint: "genereer een projectnummer, opbouw PROJ/, daarna twee letters en vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PROJ|letters2,digits5|/|-|req"],
    n: 1,
  },
  {
    hint: "iets als ZD-4821, twee letters en vier cijfers",
    keys: ["case|ZD|digits4|-|-|req"],
    n: 10,
  },
  {
    hint: "incident number in a fixed shape: starts with INC and ends with four digits, with the year 2027 included (without separators)",
    keys: ["ticket|INC|digits4||2027|req"],
    n: 1,
  },
  {
    hint: "incident number in a fixed shape: starts with INC and ends with nine characters mixing letters and digits, with the year 2026 included (without separators)",
    keys: ["ticket|INC|alnum9||2026|req"],
    n: 1,
  },
  {
    hint: "incident number in a fixed shape: starts with INC- and ends with eight characters mixing letters and digits, with the year 2027 included (parts separated by hyphens)",
    keys: ["ticket|INC|alnum8|-|2027|req"],
    n: 1,
  },
  {
    hint: "incident number in a fixed shape: starts with INC- and ends with two letters and five digits, with the year 2027 included (parts separated by hyphens)",
    keys: ["ticket|INC|letters2,digits5|-|2027|req"],
    n: 1,
  },
  {
    hint: "incident number in a fixed shape: starts with INC/ and ends with nine characters mixing letters and digits (parts separated by slashes)",
    keys: ["ticket|INC|alnum9|/|-|req"],
    n: 1,
  },
  {
    hint: "incident number in a fixed shape: starts with INC/ and ends with three digits, with the year 2024 included (parts separated by slashes)",
    keys: ["ticket|INC|digits3|/|2024|req"],
    n: 1,
  },
  {
    hint: "incident number in a fixed shape: starts with SD and ends with six digits (without separators)",
    keys: ["ticket|SD|digits6||-|req"],
    n: 1,
  },
  {
    hint: "incident number in a fixed shape: starts with SD and ends with ten digits (without separators)",
    keys: ["ticket|SD|digits10||-|req"],
    n: 2,
  },
  {
    hint: "incident number in a fixed shape: starts with SD- and ends with five digits, with the year 2025 included (parts separated by hyphens)",
    keys: ["ticket|SD|digits5|-|2025|req"],
    n: 1,
  },
  {
    hint: "incident number in a fixed shape: starts with SD- and ends with nine characters mixing letters and digits, with the year 2025 included (parts separated by hyphens)",
    keys: ["ticket|SD|alnum9|-|2025|req"],
    n: 1,
  },
  {
    hint: "incident number in a fixed shape: starts with SD- and ends with six digits, with the year 2024 included (parts separated by hyphens)",
    keys: ["ticket|SD|digits6|-|2024|req"],
    n: 2,
  },
  {
    hint: "incident number in a fixed shape: starts with SD. and ends with eight characters mixing letters and digits, with the year 2025 included (parts separated by dots)",
    keys: ["ticket|SD|alnum8|.|2025|req"],
    n: 1,
  },
  {
    hint: "incident number in a fixed shape: starts with SD. and ends with four digits, with the year 2027 included (parts separated by dots)",
    keys: ["ticket|SD|digits4|.|2027|req"],
    n: 1,
  },
  {
    hint: "incident number in a fixed shape: starts with SD. and ends with seven digits, with the year 2027 included (parts separated by dots)",
    keys: ["ticket|SD|digits7|.|2027|req"],
    n: 1,
  },
  {
    hint: "incident number in a fixed shape: starts with SD/ and ends with five digits (parts separated by slashes)",
    keys: ["ticket|SD|digits5|/|-|req"],
    n: 1,
  },
  {
    hint: "incident number in a fixed shape: starts with SD/ and ends with ten digits, with the year 2025 included (parts separated by slashes)",
    keys: ["ticket|SD|digits10|/|2025|req"],
    n: 1,
  },
  {
    hint: "incident number in a fixed shape: starts with TKT and ends with eight characters mixing letters and digits, with the year 2027 included (without separators)",
    keys: ["ticket|TKT|alnum8||2027|req"],
    n: 1,
  },
  {
    hint: "incident number in a fixed shape: starts with TKT and ends with five digits (without separators)",
    keys: ["ticket|TKT|digits5||-|req"],
    n: 1,
  },
  {
    hint: "incident number in a fixed shape: starts with TKT and ends with seven digits, with the year 2026 included (without separators)",
    keys: ["ticket|TKT|digits7||2026|req"],
    n: 1,
  },
  {
    hint: "incident number in a fixed shape: starts with TKT- and ends with six characters mixing letters and digits, with the year 2025 included (parts separated by hyphens)",
    keys: ["ticket|TKT|alnum6|-|2025|req"],
    n: 1,
  },
  {
    hint: "incident number in a fixed shape: starts with TKT- and ends with six digits, with the year 2024 included (parts separated by hyphens)",
    keys: ["ticket|TKT|digits6|-|2024|req"],
    n: 1,
  },
  {
    hint: "incident number in a fixed shape: starts with TKT. and ends with nine digits, with the year 2026 included (parts separated by dots)",
    keys: ["ticket|TKT|digits9|.|2026|req"],
    n: 1,
  },
  {
    hint: "incident number in a fixed shape: starts with TKT. and ends with three digits (parts separated by dots)",
    keys: ["ticket|TKT|digits3|.|-|req"],
    n: 1,
  },
  {
    hint: "incident number in a fixed shape: starts with TKT. and ends with two letters and five digits, with the year 2026 included (parts separated by dots)",
    keys: ["ticket|TKT|letters2,digits5|.|2026|req"],
    n: 1,
  },
  {
    hint: "incident number in a fixed shape: starts with TKT/ and ends with eight characters mixing letters and digits, with the year 2025 included (parts separated by slashes)",
    keys: ["ticket|TKT|alnum8|/|2025|req"],
    n: 1,
  },
  {
    hint: "incident number in a fixed shape: starts with TKT/ and ends with nine digits, with the year 2026 included (parts separated by slashes)",
    keys: ["ticket|TKT|digits9|/|2026|req"],
    n: 1,
  },
  {
    hint: "incidentnummer met vaste opbouw: begint met INC en eindigt met negen tekens met letters en cijfers, met het jaartal 2026 erin (zonder scheidingsteken)",
    keys: ["ticket|INC|alnum9||2026|req"],
    n: 1,
  },
  {
    hint: "incidentnummer met vaste opbouw: begint met INC en eindigt met vier cijfers, met het jaartal 2027 erin (zonder scheidingsteken)",
    keys: ["ticket|INC|digits4||2027|req"],
    n: 1,
  },
  {
    hint: "incidentnummer met vaste opbouw: begint met INC en eindigt met vijf cijfers, met het jaartal 2024 erin (zonder scheidingsteken)",
    keys: ["ticket|INC|digits5||2024|req"],
    n: 1,
  },
  {
    hint: "incidentnummer met vaste opbouw: begint met INC en eindigt met zes tekens met letters en cijfers, met het jaartal 2025 erin (zonder scheidingsteken)",
    keys: ["ticket|INC|alnum6||2025|req"],
    n: 1,
  },
  {
    hint: "incidentnummer met vaste opbouw: begint met INC- en eindigt met twee letters en vijf cijfers, met het jaartal 2024 erin (delen gescheiden door koppeltekens)",
    keys: ["ticket|INC|letters2,digits5|-|2024|req"],
    n: 1,
  },
  {
    hint: "incidentnummer met vaste opbouw: begint met INC- en eindigt met twee letters en vijf cijfers, met het jaartal 2027 erin (delen gescheiden door koppeltekens)",
    keys: ["ticket|INC|letters2,digits5|-|2027|req"],
    n: 1,
  },
  {
    hint: "incidentnummer met vaste opbouw: begint met INC- en eindigt met vier cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|INC|digits4|-|-|req"],
    n: 1,
  },
  {
    hint: "incidentnummer met vaste opbouw: begint met INC. en eindigt met acht tekens met letters en cijfers, met het jaartal 2026 erin (delen gescheiden door punten)",
    keys: ["ticket|INC|alnum8|.|2026|req"],
    n: 2,
  },
  {
    hint: "incidentnummer met vaste opbouw: begint met INC. en eindigt met drie cijfers (delen gescheiden door punten)",
    keys: ["ticket|INC|digits3|.|-|req"],
    n: 1,
  },
  {
    hint: "incidentnummer met vaste opbouw: begint met INC. en eindigt met vijf cijfers, met het jaartal 2025 erin (delen gescheiden door punten)",
    keys: ["ticket|INC|digits5|.|2025|req"],
    n: 2,
  },
  {
    hint: "incidentnummer met vaste opbouw: begint met INC/ en eindigt met negen tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|INC|alnum9|/|-|req"],
    n: 1,
  },
  {
    hint: "incidentnummer met vaste opbouw: begint met SD en eindigt met acht cijfers, met het jaartal 2027 erin (zonder scheidingsteken)",
    keys: ["ticket|SD|digits8||2027|req"],
    n: 1,
  },
  {
    hint: "incidentnummer met vaste opbouw: begint met SD en eindigt met vijf cijfers (zonder scheidingsteken)",
    keys: ["ticket|SD|digits5||-|req"],
    n: 2,
  },
  {
    hint: "incidentnummer met vaste opbouw: begint met SD- en eindigt met vijf cijfers, met het jaartal 2025 erin (delen gescheiden door koppeltekens)",
    keys: ["ticket|SD|digits5|-|2025|req"],
    n: 1,
  },
  {
    hint: "incidentnummer met vaste opbouw: begint met SD- en eindigt met zes tekens met letters en cijfers, met het jaartal 2024 erin (delen gescheiden door koppeltekens)",
    keys: ["ticket|SD|alnum6|-|2024|req"],
    n: 1,
  },
  {
    hint: "incidentnummer met vaste opbouw: begint met SD. en eindigt met negen cijfers, met het jaartal 2024 erin (delen gescheiden door punten)",
    keys: ["ticket|SD|digits9|.|2024|req"],
    n: 1,
  },
  {
    hint: "incidentnummer met vaste opbouw: begint met SD. en eindigt met zes cijfers, met het jaartal 2025 erin (delen gescheiden door punten)",
    keys: ["ticket|SD|digits6|.|2025|req"],
    n: 1,
  },
  {
    hint: "incidentnummer met vaste opbouw: begint met SD. en eindigt met zeven cijfers, met het jaartal 2027 erin (delen gescheiden door punten)",
    keys: ["ticket|SD|digits7|.|2027|req"],
    n: 1,
  },
  {
    hint: "incidentnummer met vaste opbouw: begint met SD. en eindigt met zeven tekens met letters en cijfers, met het jaartal 2027 erin (delen gescheiden door punten)",
    keys: ["ticket|SD|alnum7|.|2027|req"],
    n: 1,
  },
  {
    hint: "incidentnummer met vaste opbouw: begint met SD/ en eindigt met tien cijfers, met het jaartal 2025 erin (delen gescheiden door schuine strepen)",
    keys: ["ticket|SD|digits10|/|2025|req"],
    n: 1,
  },
  {
    hint: "incidentnummer met vaste opbouw: begint met SD/ en eindigt met twee letters en vijf cijfers, met het jaartal 2026 erin (delen gescheiden door schuine strepen)",
    keys: ["ticket|SD|letters2,digits5|/|2026|req"],
    n: 2,
  },
  {
    hint: "incidentnummer met vaste opbouw: begint met TKT en eindigt met acht tekens met letters en cijfers, met het jaartal 2027 erin (zonder scheidingsteken)",
    keys: ["ticket|TKT|alnum8||2027|req"],
    n: 1,
  },
  {
    hint: "incidentnummer met vaste opbouw: begint met TKT en eindigt met vier cijfers, met het jaartal 2027 erin (zonder scheidingsteken)",
    keys: ["ticket|TKT|digits4||2027|req"],
    n: 1,
  },
  {
    hint: "incidentnummer met vaste opbouw: begint met TKT en eindigt met vijf cijfers (zonder scheidingsteken)",
    keys: ["ticket|TKT|digits5||-|req"],
    n: 1,
  },
  {
    hint: "incidentnummer met vaste opbouw: begint met TKT en eindigt met zeven cijfers, met het jaartal 2026 erin (zonder scheidingsteken)",
    keys: ["ticket|TKT|digits7||2026|req"],
    n: 1,
  },
  {
    hint: "incidentnummer met vaste opbouw: begint met TKT- en eindigt met zes cijfers, met het jaartal 2024 erin (delen gescheiden door koppeltekens)",
    keys: ["ticket|TKT|digits6|-|2024|req"],
    n: 1,
  },
  {
    hint: "incidentnummer met vaste opbouw: begint met TKT- en eindigt met zes cijfers, met het jaartal 2026 erin (delen gescheiden door koppeltekens)",
    keys: ["ticket|TKT|digits6|-|2026|req"],
    n: 2,
  },
  {
    hint: "incidentnummer met vaste opbouw: begint met TKT. en eindigt met negen cijfers, met het jaartal 2026 erin (delen gescheiden door punten)",
    keys: ["ticket|TKT|digits9|.|2026|req"],
    n: 1,
  },
  {
    hint: "incidentnummer met vaste opbouw: begint met TKT/ en eindigt met acht tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|TKT|alnum8|/|-|req"],
    n: 1,
  },
  {
    hint: "incidentnummer met vaste opbouw: begint met TKT/ en eindigt met acht tekens met letters en cijfers, met het jaartal 2025 erin (delen gescheiden door schuine strepen)",
    keys: ["ticket|TKT|alnum8|/|2025|req"],
    n: 1,
  },
  {
    hint: "incidentnummer met vaste opbouw: begint met TKT/ en eindigt met negen cijfers, met het jaartal 2026 erin (delen gescheiden door schuine strepen)",
    keys: ["ticket|TKT|digits9|/|2026|req"],
    n: 1,
  },
  {
    hint: "incidentnummer met vaste opbouw: begint met TKT/ en eindigt met vier cijfers, met het jaartal 2025 erin (delen gescheiden door schuine strepen)",
    keys: ["ticket|TKT|digits4|/|2025|req"],
    n: 1,
  },
  {
    hint: "intern assetcode met prefix AST, daarna het jaartal 2024 en negen tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["asset|AST|alnum9||2024|req"],
    n: 1,
  },
  {
    hint: "intern assetcode met prefix AST, daarna het jaartal 2025 en acht tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["asset|AST|alnum8||2025|req"],
    n: 1,
  },
  {
    hint: "intern assetcode met prefix AST, daarna het jaartal 2026 en negen cijfers (zonder scheidingsteken)",
    keys: ["asset|AST|digits9||2026|req"],
    n: 1,
  },
  {
    hint: "intern assetcode met prefix AST-, daarna het jaartal 2024 en acht cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|AST|digits8|-|2024|req"],
    n: 1,
  },
  {
    hint: "intern assetcode met prefix AST-, daarna het jaartal 2024 en twee letters en vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|AST|letters2,digits5|-|2024|req"],
    n: 1,
  },
  {
    hint: "intern assetcode met prefix AST-, daarna het jaartal 2024 en zeven tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|AST|alnum7|-|2024|req"],
    n: 2,
  },
  {
    hint: "intern assetcode met prefix AST., daarna het jaartal 2025 en drie cijfers (delen gescheiden door punten)",
    keys: ["asset|AST|digits3|.|2025|req"],
    n: 1,
  },
  {
    hint: "intern assetcode met prefix AST/, daarna het jaartal 2026 en zeven cijfers (delen gescheiden door schuine strepen)",
    keys: ["asset|AST|digits7|/|2026|req"],
    n: 1,
  },
  {
    hint: "intern assetcode met prefix AST/, daarna het jaartal 2027 en negen tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["asset|AST|alnum9|/|2027|req"],
    n: 4,
  },
  {
    hint: "intern assetcode met prefix AST/, daarna het jaartal 2027 en vier cijfers (delen gescheiden door schuine strepen)",
    keys: ["asset|AST|digits4|/|2027|req"],
    n: 3,
  },
  {
    hint: "intern assetcode met prefix AST/, daarna het jaartal 2027 en vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["asset|AST|digits5|/|2027|req"],
    n: 1,
  },
  {
    hint: "intern assetcode met prefix MID en vier cijfers (zonder scheidingsteken)",
    keys: ["asset|MID|digits4||-|req"],
    n: 1,
  },
  {
    hint: "intern assetcode met prefix MID, daarna het jaartal 2024 en negen tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["asset|MID|alnum9||2024|req"],
    n: 1,
  },
  {
    hint: "intern assetcode met prefix MID, daarna het jaartal 2024 en zes cijfers (zonder scheidingsteken)",
    keys: ["asset|MID|digits6||2024|req"],
    n: 1,
  },
  {
    hint: "intern assetcode met prefix MID-, daarna het jaartal 2024 en negen cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|MID|digits9|-|2024|req"],
    n: 1,
  },
  {
    hint: "intern assetcode met prefix MID-, daarna het jaartal 2024 en zeven tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|MID|alnum7|-|2024|req"],
    n: 1,
  },
  {
    hint: "intern assetcode met prefix MID-, daarna het jaartal 2026 en twee letters en vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|MID|letters2,digits5|-|2026|req"],
    n: 1,
  },
  {
    hint: "intern assetcode met prefix MID-, daarna het jaartal 2026 en zes cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|MID|digits6|-|2026|req"],
    n: 3,
  },
  {
    hint: "intern assetcode met prefix MID. en vier cijfers (delen gescheiden door punten)",
    keys: ["asset|MID|digits4|.|-|req"],
    n: 1,
  },
  {
    hint: "intern assetcode met prefix MID., daarna het jaartal 2024 en acht tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["asset|MID|alnum8|.|2024|req"],
    n: 1,
  },
  {
    hint: "intern assetcode met prefix MID., daarna het jaartal 2025 en acht cijfers (delen gescheiden door punten)",
    keys: ["asset|MID|digits8|.|2025|req"],
    n: 1,
  },
  {
    hint: "intern assetcode met prefix MID., daarna het jaartal 2025 en vier cijfers (delen gescheiden door punten)",
    keys: ["asset|MID|digits4|.|2025|req"],
    n: 2,
  },
  {
    hint: "intern assetcode met prefix MID/ en drie cijfers (delen gescheiden door schuine strepen)",
    keys: ["asset|MID|digits3|/|-|req"],
    n: 2,
  },
  {
    hint: "intern assetcode met prefix OBJ, daarna het jaartal 2025 en negen tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["asset|OBJ|alnum9||2025|req"],
    n: 1,
  },
  {
    hint: "intern assetcode met prefix OBJ, daarna het jaartal 2027 en zeven cijfers (zonder scheidingsteken)",
    keys: ["asset|OBJ|digits7||2027|req"],
    n: 2,
  },
  {
    hint: "intern assetcode met prefix OBJ- en vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|OBJ|digits5|-|-|req"],
    n: 2,
  },
  {
    hint: "intern assetcode met prefix OBJ- en zeven tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|OBJ|alnum7|-|-|req"],
    n: 1,
  },
  {
    hint: "intern assetcode met prefix OBJ-, daarna het jaartal 2024 en vier cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|OBJ|digits4|-|2024|req"],
    n: 1,
  },
  {
    hint: "intern assetcode met prefix OBJ-, daarna het jaartal 2024 en zes tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|OBJ|alnum6|-|2024|req"],
    n: 1,
  },
  {
    hint: "intern assetcode met prefix OBJ-, daarna het jaartal 2025 en zes tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|OBJ|alnum6|-|2025|req"],
    n: 1,
  },
  {
    hint: "intern assetcode met prefix OBJ-, daarna het jaartal 2026 en negen tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|OBJ|alnum9|-|2026|req"],
    n: 1,
  },
  {
    hint: "intern assetcode met prefix OBJ-, daarna het jaartal 2026 en twee letters en vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|OBJ|letters2,digits5|-|2026|req"],
    n: 1,
  },
  {
    hint: "intern assetcode met prefix OBJ-, daarna het jaartal 2026 en zeven tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|OBJ|alnum7|-|2026|req"],
    n: 2,
  },
  {
    hint: "intern assetcode met prefix OBJ. en acht cijfers (delen gescheiden door punten)",
    keys: ["asset|OBJ|digits8|.|-|req"],
    n: 1,
  },
  {
    hint: "intern assetcode met prefix OBJ. en vijf cijfers (delen gescheiden door punten)",
    keys: ["asset|OBJ|digits5|.|-|req"],
    n: 2,
  },
  {
    hint: "intern assetcode met prefix OBJ., daarna het jaartal 2024 en twee letters en vijf cijfers (delen gescheiden door punten)",
    keys: ["asset|OBJ|letters2,digits5|.|2024|req"],
    n: 1,
  },
  {
    hint: "intern assetcode met prefix OBJ., daarna het jaartal 2025 en vijf cijfers (delen gescheiden door punten)",
    keys: ["asset|OBJ|digits5|.|2025|req"],
    n: 2,
  },
  {
    hint: "intern assetcode met prefix OBJ., daarna het jaartal 2025 en zes cijfers (delen gescheiden door punten)",
    keys: ["asset|OBJ|digits6|.|2025|req"],
    n: 1,
  },
  {
    hint: "intern assetcode met prefix OBJ., daarna het jaartal 2025 en zeven tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["asset|OBJ|alnum7|.|2025|req"],
    n: 1,
  },
  {
    hint: "intern assetcode met prefix OBJ., daarna het jaartal 2026 en acht tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["asset|OBJ|alnum8|.|2026|req"],
    n: 1,
  },
  {
    hint: "intern assetcode met prefix OBJ., daarna het jaartal 2026 en negen cijfers (delen gescheiden door punten)",
    keys: ["asset|OBJ|digits9|.|2026|req"],
    n: 2,
  },
  {
    hint: "intern assetcode met prefix OBJ/, daarna het jaartal 2026 en tien cijfers (delen gescheiden door schuine strepen)",
    keys: ["asset|OBJ|digits10|/|2026|req"],
    n: 1,
  },
  {
    hint: "intern batchcode met prefix BATCH, daarna het jaartal 2024 en zes tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["batch|BATCH|alnum6||2024|req"],
    n: 1,
  },
  {
    hint: "intern batchcode met prefix BATCH, daarna het jaartal 2024 en zeven tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["batch|BATCH|alnum7||2024|req"],
    n: 2,
  },
  {
    hint: "intern batchcode met prefix BATCH, daarna het jaartal 2025 en zes cijfers (zonder scheidingsteken)",
    keys: ["batch|BATCH|digits6||2025|req"],
    n: 1,
  },
  {
    hint: "intern batchcode met prefix BATCH- en zes tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["batch|BATCH|alnum6|-|-|req"],
    n: 1,
  },
  {
    hint: "intern batchcode met prefix BATCH-, daarna het jaartal 2027 en acht tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["batch|BATCH|alnum8|-|2027|req"],
    n: 1,
  },
  {
    hint: "intern batchcode met prefix BATCH-, daarna het jaartal 2027 en drie cijfers (delen gescheiden door koppeltekens)",
    keys: ["batch|BATCH|digits3|-|2027|req"],
    n: 1,
  },
  {
    hint: "intern batchcode met prefix BATCH. en twee cijfers en twee letters en twee cijfers (delen gescheiden door punten)",
    keys: ["batch|BATCH|digits2,letters2,digits2|.|-|req"],
    n: 2,
  },
  {
    hint: "intern batchcode met prefix BATCH. en zeven tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["batch|BATCH|alnum7|.|-|req"],
    n: 1,
  },
  {
    hint: "intern batchcode met prefix BATCH., daarna het jaartal 2025 en acht tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["batch|BATCH|alnum8|.|2025|req"],
    n: 2,
  },
  {
    hint: "intern batchcode met prefix BATCH., daarna het jaartal 2026 en acht cijfers (delen gescheiden door punten)",
    keys: ["batch|BATCH|digits8|.|2026|req"],
    n: 1,
  },
  {
    hint: "intern batchcode met prefix BATCH., daarna het jaartal 2027 en negen cijfers (delen gescheiden door punten)",
    keys: ["batch|BATCH|digits9|.|2027|req"],
    n: 1,
  },
  {
    hint: "intern batchcode met prefix BATCH/ en twee letters en vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|BATCH|letters2,digits5|/|-|req"],
    n: 3,
  },
  {
    hint: "intern batchcode met prefix BATCH/ en vier cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|BATCH|digits4|/|-|req"],
    n: 1,
  },
  {
    hint: "intern batchcode met prefix BATCH/, daarna het jaartal 2024 en twee letters en vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|BATCH|letters2,digits5|/|2024|req"],
    n: 1,
  },
  {
    hint: "intern batchcode met prefix BATCH/, daarna het jaartal 2025 en acht cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|BATCH|digits8|/|2025|req"],
    n: 1,
  },
  {
    hint: "intern batchcode met prefix BATCH/, daarna het jaartal 2025 en negen tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|BATCH|alnum9|/|2025|req"],
    n: 1,
  },
  {
    hint: "intern batchcode met prefix BATCH/, daarna het jaartal 2026 en tien cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|BATCH|digits10|/|2026|req"],
    n: 3,
  },
  {
    hint: "intern batchcode met prefix CH, daarna het jaartal 2025 en zeven tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["batch|CH|alnum7||2025|req"],
    n: 2,
  },
  {
    hint: "intern batchcode met prefix CH- en acht tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["batch|CH|alnum8|-|-|req"],
    n: 1,
  },
  {
    hint: "intern batchcode met prefix CH- en tien cijfers (delen gescheiden door koppeltekens)",
    keys: ["batch|CH|digits10|-|-|req"],
    n: 1,
  },
  {
    hint: "intern batchcode met prefix CH- en twee letters en vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["batch|CH|letters2,digits5|-|-|req"],
    n: 1,
  },
  {
    hint: "intern batchcode met prefix CH-, daarna het jaartal 2026 en drie cijfers (delen gescheiden door koppeltekens)",
    keys: ["batch|CH|digits3|-|2026|req"],
    n: 2,
  },
  {
    hint: "intern batchcode met prefix CH-, daarna het jaartal 2026 en negen cijfers (delen gescheiden door koppeltekens)",
    keys: ["batch|CH|digits9|-|2026|req"],
    n: 2,
  },
  {
    hint: "intern batchcode met prefix CH., daarna het jaartal 2026 en acht cijfers (delen gescheiden door punten)",
    keys: ["batch|CH|digits8|.|2026|req"],
    n: 1,
  },
  {
    hint: "intern batchcode met prefix CH., daarna het jaartal 2027 en vier cijfers (delen gescheiden door punten)",
    keys: ["batch|CH|digits4|.|2027|req"],
    n: 1,
  },
  {
    hint: "intern batchcode met prefix CH/, daarna het jaartal 2024 en negen tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|CH|alnum9|/|2024|req"],
    n: 2,
  },
  {
    hint: "intern batchcode met prefix CH/, daarna het jaartal 2024 en zeven tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|CH|alnum7|/|2024|req"],
    n: 1,
  },
  {
    hint: "intern batchcode met prefix CH/, daarna het jaartal 2026 en zeven cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|CH|digits7|/|2026|req"],
    n: 1,
  },
  {
    hint: "intern batchcode met prefix LOT, daarna het jaartal 2024 en zes tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["batch|LOT|alnum6||2024|req"],
    n: 1,
  },
  {
    hint: "intern batchcode met prefix LOT-, daarna het jaartal 2024 en drie cijfers (delen gescheiden door koppeltekens)",
    keys: ["batch|LOT|digits3|-|2024|req"],
    n: 1,
  },
  {
    hint: "intern batchcode met prefix LOT-, daarna het jaartal 2024 en vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["batch|LOT|digits5|-|2024|req"],
    n: 1,
  },
  {
    hint: "intern batchcode met prefix LOT-, daarna het jaartal 2024 en zeven tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["batch|LOT|alnum7|-|2024|req"],
    n: 1,
  },
  {
    hint: "intern batchcode met prefix LOT-, daarna het jaartal 2026 en twee letters en twee cijfers en twee letters (delen gescheiden door koppeltekens)",
    keys: ["batch|LOT|letters2,digits2,letters2|-|2026|req"],
    n: 2,
  },
  {
    hint: "intern batchcode met prefix LOT-, daarna het jaartal 2026 en vier cijfers (delen gescheiden door koppeltekens)",
    keys: ["batch|LOT|digits4|-|2026|req"],
    n: 1,
  },
  {
    hint: "intern batchcode met prefix LOT-, daarna het jaartal 2027 en negen cijfers (delen gescheiden door koppeltekens)",
    keys: ["batch|LOT|digits9|-|2027|req"],
    n: 1,
  },
  {
    hint: "intern batchcode met prefix LOT., daarna het jaartal 2024 en zeven cijfers (delen gescheiden door punten)",
    keys: ["batch|LOT|digits7|.|2024|req"],
    n: 1,
  },
  {
    hint: "intern batchcode met prefix LOT., daarna het jaartal 2026 en vier tekens met letters en cijfers en vier cijfers (delen gescheiden door punten)",
    keys: ["batch|LOT|alnum4,digits4|.|2026|req"],
    n: 3,
  },
  {
    hint: "intern batchcode met prefix LOT., daarna het jaartal 2026 en zes cijfers (delen gescheiden door punten)",
    keys: ["batch|LOT|digits6|.|2026|req"],
    n: 2,
  },
  {
    hint: "intern batchcode met prefix LOT., daarna het jaartal 2026 en zes tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["batch|LOT|alnum6|.|2026|req"],
    n: 1,
  },
  {
    hint: "intern batchcode met prefix LOT., daarna het jaartal 2026 en zeven tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["batch|LOT|alnum7|.|2026|req"],
    n: 1,
  },
  {
    hint: "intern batchcode met prefix LOT., daarna het jaartal 2027 en drie cijfers (delen gescheiden door punten)",
    keys: ["batch|LOT|digits3|.|2027|req"],
    n: 1,
  },
  {
    hint: "intern batchcode met prefix LOT/, daarna het jaartal 2024 en twee letters en vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|LOT|letters2,digits5|/|2024|req"],
    n: 1,
  },
  {
    hint: "intern batchcode met prefix LOT/, daarna het jaartal 2024 en vier cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|LOT|digits4|/|2024|req"],
    n: 2,
  },
  {
    hint: "intern batchcode met prefix LOT/, daarna het jaartal 2024 en zeven cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|LOT|digits7|/|2024|req"],
    n: 1,
  },
  {
    hint: "intern batchcode met prefix LOT/, daarna het jaartal 2025 en negen cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|LOT|digits9|/|2025|req"],
    n: 1,
  },
  {
    hint: "intern batchcode met prefix LOT/, daarna het jaartal 2025 en twee letters en vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|LOT|letters2,digits5|/|2025|req"],
    n: 1,
  },
  {
    hint: "intern dossiercode met prefix CASE, daarna het jaartal 2024 en zes cijfers (zonder scheidingsteken)",
    keys: ["case|CASE|digits6||2024|req"],
    n: 1,
  },
  {
    hint: "intern dossiercode met prefix CASE, daarna het jaartal 2026 en vijf cijfers (zonder scheidingsteken)",
    keys: ["case|CASE|digits5||2026|req"],
    n: 1,
  },
  {
    hint: "intern dossiercode met prefix CASE-, daarna het jaartal 2027 en zes cijfers (delen gescheiden door koppeltekens)",
    keys: ["case|CASE|digits6|-|2027|req"],
    n: 1,
  },
  {
    hint: "intern dossiercode met prefix CASE., daarna het jaartal 2025 en negen cijfers (delen gescheiden door punten)",
    keys: ["case|CASE|digits9|.|2025|req"],
    n: 1,
  },
  {
    hint: "intern dossiercode met prefix CASE., daarna het jaartal 2025 en zes tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["case|CASE|alnum6|.|2025|req"],
    n: 2,
  },
  {
    hint: "intern dossiercode met prefix CASE., daarna het jaartal 2026 en drie cijfers (delen gescheiden door punten)",
    keys: ["case|CASE|digits3|.|2026|req"],
    n: 1,
  },
  {
    hint: "intern dossiercode met prefix CASE., daarna het jaartal 2027 en twee letters en vijf cijfers (delen gescheiden door punten)",
    keys: ["case|CASE|letters2,digits5|.|2027|req"],
    n: 1,
  },
  {
    hint: "intern dossiercode met prefix CASE/ en drie cijfers (delen gescheiden door schuine strepen)",
    keys: ["case|CASE|digits3|/|-|req"],
    n: 1,
  },
  {
    hint: "intern dossiercode met prefix DOSS- en acht tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["case|DOSS|alnum8|-|-|req"],
    n: 4,
  },
  {
    hint: "intern dossiercode met prefix DOSS- en drie cijfers (delen gescheiden door koppeltekens)",
    keys: ["case|DOSS|digits3|-|-|req"],
    n: 1,
  },
  {
    hint: "intern dossiercode met prefix DOSS-, daarna het jaartal 2025 en negen cijfers (delen gescheiden door koppeltekens)",
    keys: ["case|DOSS|digits9|-|2025|req"],
    n: 3,
  },
  {
    hint: "intern dossiercode met prefix DOSS. en acht cijfers (delen gescheiden door punten)",
    keys: ["case|DOSS|digits8|.|-|req"],
    n: 2,
  },
  {
    hint: "intern dossiercode met prefix DOSS. en zes cijfers (delen gescheiden door punten)",
    keys: ["case|DOSS|digits6|.|-|req"],
    n: 2,
  },
  {
    hint: "intern dossiercode met prefix DOSS. en zeven tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["case|DOSS|alnum7|.|-|req"],
    n: 1,
  },
  {
    hint: "intern dossiercode met prefix DOSS., daarna het jaartal 2025 en zeven cijfers (delen gescheiden door punten)",
    keys: ["case|DOSS|digits7|.|2025|req"],
    n: 1,
  },
  {
    hint: "intern dossiercode met prefix DOSS., daarna het jaartal 2026 en negen tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["case|DOSS|alnum9|.|2026|req"],
    n: 1,
  },
  {
    hint: "intern dossiercode met prefix DOSS/ en vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["case|DOSS|digits5|/|-|req"],
    n: 1,
  },
  {
    hint: "intern dossiercode met prefix DOSS/, daarna het jaartal 2027 en acht cijfers (delen gescheiden door schuine strepen)",
    keys: ["case|DOSS|digits8|/|2027|req"],
    n: 2,
  },
  {
    hint: "intern dossiercode met prefix DOSS/, daarna het jaartal 2027 en tien cijfers (delen gescheiden door schuine strepen)",
    keys: ["case|DOSS|digits10|/|2027|req"],
    n: 1,
  },
  {
    hint: "intern dossiercode met prefix ZD en negen tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["case|ZD|alnum9||-|req"],
    n: 2,
  },
  {
    hint: "intern dossiercode met prefix ZD en vijf cijfers (zonder scheidingsteken)",
    keys: ["case|ZD|digits5||-|req"],
    n: 2,
  },
  {
    hint: "intern dossiercode met prefix ZD en zes tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["case|ZD|alnum6||-|req"],
    n: 3,
  },
  {
    hint: "intern dossiercode met prefix ZD, daarna het jaartal 2026 en drie cijfers (zonder scheidingsteken)",
    keys: ["case|ZD|digits3||2026|req"],
    n: 2,
  },
  {
    hint: "intern dossiercode met prefix ZD-, daarna het jaartal 2024 en negen cijfers (delen gescheiden door koppeltekens)",
    keys: ["case|ZD|digits9|-|2024|req"],
    n: 3,
  },
  {
    hint: "intern dossiercode met prefix ZD-, daarna het jaartal 2025 en negen cijfers (delen gescheiden door koppeltekens)",
    keys: ["case|ZD|digits9|-|2025|req"],
    n: 1,
  },
  {
    hint: "intern dossiercode met prefix ZD-, daarna het jaartal 2025 en negen tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["case|ZD|alnum9|-|2025|req"],
    n: 1,
  },
  {
    hint: "intern dossiercode met prefix ZD-, daarna het jaartal 2025 en vier cijfers (delen gescheiden door koppeltekens)",
    keys: ["case|ZD|digits4|-|2025|req"],
    n: 3,
  },
  {
    hint: "intern dossiercode met prefix ZD-, daarna het jaartal 2027 en twee letters en vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["case|ZD|letters2,digits5|-|2027|req"],
    n: 1,
  },
  {
    hint: "intern dossiercode met prefix ZD., daarna het jaartal 2025 en negen cijfers (delen gescheiden door punten)",
    keys: ["case|ZD|digits9|.|2025|req"],
    n: 1,
  },
  {
    hint: "intern dossiercode met prefix ZD., daarna het jaartal 2026 en acht cijfers (delen gescheiden door punten)",
    keys: ["case|ZD|digits8|.|2026|req"],
    n: 1,
  },
  {
    hint: "intern dossiercode met prefix ZD/, daarna het jaartal 2024 en vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["case|ZD|digits5|/|2024|req"],
    n: 2,
  },
  {
    hint: "intern dossiercode met prefix ZD/, daarna het jaartal 2024 en zeven tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["case|ZD|alnum7|/|2024|req"],
    n: 1,
  },
  {
    hint: "intern dossiercode met prefix ZD/, daarna het jaartal 2026 en acht cijfers (delen gescheiden door schuine strepen)",
    keys: ["case|ZD|digits8|/|2026|req"],
    n: 3,
  },
  {
    hint: "intern dossiercode met prefix ZD/, daarna het jaartal 2027 en zes tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["case|ZD|alnum6|/|2027|req"],
    n: 1,
  },
  {
    hint: "intern incidentnummer met prefix INC, daarna het jaartal 2024 en tien cijfers (zonder scheidingsteken)",
    keys: ["ticket|INC|digits10||2024|req"],
    n: 1,
  },
  {
    hint: "intern incidentnummer met prefix INC, daarna het jaartal 2024 en vier cijfers (zonder scheidingsteken)",
    keys: ["ticket|INC|digits4||2024|req"],
    n: 2,
  },
  {
    hint: "intern incidentnummer met prefix INC, daarna het jaartal 2025 en zes tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["ticket|INC|alnum6||2025|req"],
    n: 2,
  },
  {
    hint: "intern incidentnummer met prefix INC- en acht cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|INC|digits8|-|-|req"],
    n: 1,
  },
  {
    hint: "intern incidentnummer met prefix INC- en vier cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|INC|digits4|-|-|req"],
    n: 1,
  },
  {
    hint: "intern incidentnummer met prefix INC-, daarna het jaartal 2026 en zeven tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|INC|alnum7|-|2026|req"],
    n: 2,
  },
  {
    hint: "intern incidentnummer met prefix INC-, daarna het jaartal 2027 en acht tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|INC|alnum8|-|2027|req"],
    n: 1,
  },
  {
    hint: "intern incidentnummer met prefix INC-, daarna het jaartal 2027 en twee letters en vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|INC|letters2,digits5|-|2027|req"],
    n: 1,
  },
  {
    hint: "intern incidentnummer met prefix INC., daarna het jaartal 2025 en vijf cijfers (delen gescheiden door punten)",
    keys: ["ticket|INC|digits5|.|2025|req"],
    n: 2,
  },
  {
    hint: "intern incidentnummer met prefix INC., daarna het jaartal 2026 en acht tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["ticket|INC|alnum8|.|2026|req"],
    n: 1,
  },
  {
    hint: "intern incidentnummer met prefix INC/ en negen tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|INC|alnum9|/|-|req"],
    n: 2,
  },
  {
    hint: "intern incidentnummer met prefix INC/ en zes cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|INC|digits6|/|-|req"],
    n: 1,
  },
  {
    hint: "intern incidentnummer met prefix INC/, daarna het jaartal 2026 en tien cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|INC|digits10|/|2026|req"],
    n: 1,
  },
  {
    hint: "intern incidentnummer met prefix SD en negen tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["ticket|SD|alnum9||-|req"],
    n: 1,
  },
  {
    hint: "intern incidentnummer met prefix SD en vijf cijfers (zonder scheidingsteken)",
    keys: ["ticket|SD|digits5||-|req"],
    n: 2,
  },
  {
    hint: "intern incidentnummer met prefix SD en zes cijfers (zonder scheidingsteken)",
    keys: ["ticket|SD|digits6||-|req"],
    n: 2,
  },
  {
    hint: "intern incidentnummer met prefix SD, daarna het jaartal 2024 en drie cijfers (zonder scheidingsteken)",
    keys: ["ticket|SD|digits3||2024|req"],
    n: 1,
  },
  {
    hint: "intern incidentnummer met prefix SD, daarna het jaartal 2025 en negen cijfers (zonder scheidingsteken)",
    keys: ["ticket|SD|digits9||2025|req"],
    n: 2,
  },
  {
    hint: "intern incidentnummer met prefix SD-, daarna het jaartal 2024 en zes cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|SD|digits6|-|2024|req"],
    n: 2,
  },
  {
    hint: "intern incidentnummer met prefix SD-, daarna het jaartal 2024 en zes tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|SD|alnum6|-|2024|req"],
    n: 1,
  },
  {
    hint: "intern incidentnummer met prefix SD-, daarna het jaartal 2025 en vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|SD|digits5|-|2025|req"],
    n: 2,
  },
  {
    hint: "intern incidentnummer met prefix SD., daarna het jaartal 2024 en negen cijfers (delen gescheiden door punten)",
    keys: ["ticket|SD|digits9|.|2024|req"],
    n: 2,
  },
  {
    hint: "intern incidentnummer met prefix SD., daarna het jaartal 2025 en acht tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["ticket|SD|alnum8|.|2025|req"],
    n: 1,
  },
  {
    hint: "intern incidentnummer met prefix SD., daarna het jaartal 2025 en zes cijfers (delen gescheiden door punten)",
    keys: ["ticket|SD|digits6|.|2025|req"],
    n: 2,
  },
  {
    hint: "intern incidentnummer met prefix SD., daarna het jaartal 2027 en zeven cijfers (delen gescheiden door punten)",
    keys: ["ticket|SD|digits7|.|2027|req"],
    n: 1,
  },
  {
    hint: "intern incidentnummer met prefix SD/ en vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|SD|digits5|/|-|req"],
    n: 1,
  },
  {
    hint: "intern incidentnummer met prefix SD/, daarna het jaartal 2025 en negen cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|SD|digits9|/|2025|req"],
    n: 1,
  },
  {
    hint: "intern incidentnummer met prefix SD/, daarna het jaartal 2025 en tien cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|SD|digits10|/|2025|req"],
    n: 2,
  },
  {
    hint: "intern incidentnummer met prefix SD/, daarna het jaartal 2026 en twee letters en vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|SD|letters2,digits5|/|2026|req"],
    n: 4,
  },
  {
    hint: "intern incidentnummer met prefix TKT, daarna het jaartal 2026 en zeven cijfers (zonder scheidingsteken)",
    keys: ["ticket|TKT|digits7||2026|req"],
    n: 2,
  },
  {
    hint: "intern incidentnummer met prefix TKT, daarna het jaartal 2027 en vier cijfers (zonder scheidingsteken)",
    keys: ["ticket|TKT|digits4||2027|req"],
    n: 1,
  },
  {
    hint: "intern incidentnummer met prefix TKT-, daarna het jaartal 2024 en zes cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|TKT|digits6|-|2024|req"],
    n: 2,
  },
  {
    hint: "intern incidentnummer met prefix TKT-, daarna het jaartal 2025 en twee letters en vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|TKT|letters2,digits5|-|2025|req"],
    n: 1,
  },
  {
    hint: "intern incidentnummer met prefix TKT-, daarna het jaartal 2025 en zes tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|TKT|alnum6|-|2025|req"],
    n: 1,
  },
  {
    hint: "intern incidentnummer met prefix TKT. en drie cijfers (delen gescheiden door punten)",
    keys: ["ticket|TKT|digits3|.|-|req"],
    n: 1,
  },
  {
    hint: "intern incidentnummer met prefix TKT., daarna het jaartal 2026 en zeven tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["ticket|TKT|alnum7|.|2026|req"],
    n: 1,
  },
  {
    hint: "intern incidentnummer met prefix TKT/ en negen tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|TKT|alnum9|/|-|req"],
    n: 1,
  },
  {
    hint: "intern incidentnummer met prefix TKT/, daarna het jaartal 2025 en acht tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|TKT|alnum8|/|2025|req"],
    n: 1,
  },
  {
    hint: "intern incidentnummer met prefix TKT/, daarna het jaartal 2025 en vier cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|TKT|digits4|/|2025|req"],
    n: 1,
  },
  {
    hint: "intern licentienummer met prefix LIC-, daarna het jaartal 2025 en twee cijfers en twee letters en twee cijfers (delen gescheiden door koppeltekens)",
    keys: ["licence|LIC|digits2,letters2,digits2|-|2025|req"],
    n: 2,
  },
  {
    hint: "intern licentienummer met prefix LIC-, daarna het jaartal 2027 en acht cijfers (delen gescheiden door koppeltekens)",
    keys: ["licence|LIC|digits8|-|2027|req"],
    n: 2,
  },
  {
    hint: "intern licentienummer met prefix LIC., daarna het jaartal 2027 en negen tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["licence|LIC|alnum9|.|2027|req"],
    n: 2,
  },
  {
    hint: "intern licentienummer met prefix LIC/ en drie cijfers (delen gescheiden door schuine strepen)",
    keys: ["licence|LIC|digits3|/|-|req"],
    n: 1,
  },
  {
    hint: "intern licentienummer met prefix VERG en zeven tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["licence|VERG|alnum7||-|req"],
    n: 1,
  },
  {
    hint: "intern licentienummer met prefix VERG-, daarna het jaartal 2024 en negen cijfers (delen gescheiden door koppeltekens)",
    keys: ["licence|VERG|digits9|-|2024|req"],
    n: 1,
  },
  {
    hint: "intern licentienummer met prefix VERG., daarna het jaartal 2026 en acht cijfers (delen gescheiden door punten)",
    keys: ["licence|VERG|digits8|.|2026|req"],
    n: 1,
  },
  {
    hint: "intern monsternummer met prefix LAB, daarna het jaartal 2025 en vijf cijfers (zonder scheidingsteken)",
    keys: ["specimen|LAB|digits5||2025|req"],
    n: 1,
  },
  {
    hint: "intern monsternummer met prefix LAB., daarna het jaartal 2024 en twee letters en twee cijfers en twee letters (delen gescheiden door punten)",
    keys: ["specimen|LAB|letters2,digits2,letters2|.|2024|req"],
    n: 1,
  },
  {
    hint: "intern monsternummer met prefix LAB/, daarna het jaartal 2025 en negen tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["specimen|LAB|alnum9|/|2025|req"],
    n: 2,
  },
  {
    hint: "intern monsternummer met prefix MON., daarna het jaartal 2026 en acht tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["specimen|MON|alnum8|.|2026|req"],
    n: 2,
  },
  {
    hint: "intern monsternummer met prefix MON., daarna het jaartal 2027 en acht tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["specimen|MON|alnum8|.|2027|req"],
    n: 1,
  },
  {
    hint: "intern monsternummer met prefix MON/, daarna het jaartal 2027 en drie cijfers (delen gescheiden door schuine strepen)",
    keys: ["specimen|MON|digits3|/|2027|req"],
    n: 1,
  },
  {
    hint: "intern projectnummer met prefix P en zes tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["project|P|alnum6||-|req"],
    n: 1,
  },
  {
    hint: "intern projectnummer met prefix P en zeven tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["project|P|alnum7||-|req"],
    n: 1,
  },
  {
    hint: "intern projectnummer met prefix P- en zes tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|P|alnum6|-|-|req"],
    n: 1,
  },
  {
    hint: "intern projectnummer met prefix P-, daarna het jaartal 2024 en zeven cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|P|digits7|-|2024|req"],
    n: 2,
  },
  {
    hint: "intern projectnummer met prefix P-, daarna het jaartal 2025 en drie cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|P|digits3|-|2025|req"],
    n: 1,
  },
  {
    hint: "intern projectnummer met prefix P-, daarna het jaartal 2025 en zeven tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|P|alnum7|-|2025|req"],
    n: 1,
  },
  {
    hint: "intern projectnummer met prefix P-, daarna het jaartal 2026 en negen tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|P|alnum9|-|2026|req"],
    n: 1,
  },
  {
    hint: "intern projectnummer met prefix P-, daarna het jaartal 2027 en twee letters en vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|P|letters2,digits5|-|2027|req"],
    n: 1,
  },
  {
    hint: "intern projectnummer met prefix P-, daarna het jaartal 2027 en zeven cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|P|digits7|-|2027|req"],
    n: 3,
  },
  {
    hint: "intern projectnummer met prefix P., daarna het jaartal 2025 en zes cijfers (delen gescheiden door punten)",
    keys: ["project|P|digits6|.|2025|req"],
    n: 2,
  },
  {
    hint: "intern projectnummer met prefix P., daarna het jaartal 2026 en vier tekens met letters en cijfers en vier cijfers (delen gescheiden door punten)",
    keys: ["project|P|alnum4,digits4|.|2026|req"],
    n: 1,
  },
  {
    hint: "intern projectnummer met prefix P/, daarna het jaartal 2025 en acht tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|P|alnum8|/|2025|req"],
    n: 1,
  },
  {
    hint: "intern projectnummer met prefix P/, daarna het jaartal 2025 en tien cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|P|digits10|/|2025|req"],
    n: 2,
  },
  {
    hint: "intern projectnummer met prefix P/, daarna het jaartal 2027 en zeven cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|P|digits7|/|2027|req"],
    n: 1,
  },
  {
    hint: "intern projectnummer met prefix PRJ, daarna het jaartal 2024 en negen cijfers (zonder scheidingsteken)",
    keys: ["project|PRJ|digits9||2024|req"],
    n: 1,
  },
  {
    hint: "intern projectnummer met prefix PRJ, daarna het jaartal 2024 en tien cijfers (zonder scheidingsteken)",
    keys: ["project|PRJ|digits10||2024|req"],
    n: 2,
  },
  {
    hint: "intern projectnummer met prefix PRJ, daarna het jaartal 2024 en vijf cijfers (zonder scheidingsteken)",
    keys: ["project|PRJ|digits5||2024|req"],
    n: 2,
  },
  {
    hint: "intern projectnummer met prefix PRJ, daarna het jaartal 2026 en zeven cijfers (zonder scheidingsteken)",
    keys: ["project|PRJ|digits7||2026|req"],
    n: 1,
  },
  {
    hint: "intern projectnummer met prefix PRJ-, daarna het jaartal 2024 en drie cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|PRJ|digits3|-|2024|req"],
    n: 1,
  },
  {
    hint: "intern projectnummer met prefix PRJ-, daarna het jaartal 2025 en acht tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|PRJ|alnum8|-|2025|req"],
    n: 2,
  },
  {
    hint: "intern projectnummer met prefix PRJ-, daarna het jaartal 2027 en vier cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|PRJ|digits4|-|2027|req"],
    n: 1,
  },
  {
    hint: "intern projectnummer met prefix PRJ., daarna het jaartal 2027 en tien cijfers (delen gescheiden door punten)",
    keys: ["project|PRJ|digits10|.|2027|req"],
    n: 1,
  },
  {
    hint: "intern projectnummer met prefix PRJ., daarna het jaartal 2027 en zes tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["project|PRJ|alnum6|.|2027|req"],
    n: 3,
  },
  {
    hint: "intern projectnummer met prefix PRJ/ en acht tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PRJ|alnum8|/|-|req"],
    n: 1,
  },
  {
    hint: "intern projectnummer met prefix PRJ/ en negen cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PRJ|digits9|/|-|req"],
    n: 3,
  },
  {
    hint: "intern projectnummer met prefix PRJ/ en twee letters en vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PRJ|letters2,digits5|/|-|req"],
    n: 1,
  },
  {
    hint: "intern projectnummer met prefix PRJ/, daarna het jaartal 2027 en zeven tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PRJ|alnum7|/|2027|req"],
    n: 1,
  },
  {
    hint: "intern projectnummer met prefix PROJ en drie cijfers (zonder scheidingsteken)",
    keys: ["project|PROJ|digits3||-|req"],
    n: 1,
  },
  {
    hint: "intern projectnummer met prefix PROJ, daarna het jaartal 2025 en negen cijfers (zonder scheidingsteken)",
    keys: ["project|PROJ|digits9||2025|req"],
    n: 1,
  },
  {
    hint: "intern projectnummer met prefix PROJ, daarna het jaartal 2025 en vijf cijfers (zonder scheidingsteken)",
    keys: ["project|PROJ|digits5||2025|req"],
    n: 1,
  },
  {
    hint: "intern projectnummer met prefix PROJ, daarna het jaartal 2025 en zes tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["project|PROJ|alnum6||2025|req"],
    n: 2,
  },
  {
    hint: "intern projectnummer met prefix PROJ, daarna het jaartal 2026 en acht cijfers (zonder scheidingsteken)",
    keys: ["project|PROJ|digits8||2026|req"],
    n: 1,
  },
  {
    hint: "intern projectnummer met prefix PROJ- en twee cijfers en twee letters en twee cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|PROJ|digits2,letters2,digits2|-|-|req"],
    n: 1,
  },
  {
    hint: "intern projectnummer met prefix PROJ- en vier cijfers",
    keys: ["project|PROJ|digits4|-|-|req"],
    n: 9,
  },
  {
    hint: "intern projectnummer met prefix PROJ-, daarna het jaartal 2024 en tien cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|PROJ|digits10|-|2024|req"],
    n: 3,
  },
  {
    hint: "intern projectnummer met prefix PROJ-, daarna het jaartal 2025 en negen cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|PROJ|digits9|-|2025|req"],
    n: 1,
  },
  {
    hint: "intern projectnummer met prefix PROJ-, daarna het jaartal 2026 en negen cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|PROJ|digits9|-|2026|req"],
    n: 1,
  },
  {
    hint: "intern projectnummer met prefix PROJ-, daarna het jaartal 2027 en negen tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|PROJ|alnum9|-|2027|req"],
    n: 3,
  },
  {
    hint: "intern projectnummer met prefix PROJ., daarna het jaartal 2025 en twee letters en vijf cijfers (delen gescheiden door punten)",
    keys: ["project|PROJ|letters2,digits5|.|2025|req"],
    n: 2,
  },
  {
    hint: "intern projectnummer met prefix PROJ/ en negen cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PROJ|digits9|/|-|req"],
    n: 2,
  },
  {
    hint: "intern projectnummer met prefix PROJ/ en twee letters en vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PROJ|letters2,digits5|/|-|req"],
    n: 1,
  },
  {
    hint: "intern projectnummer met prefix PROJ/, daarna het jaartal 2024 en tien cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PROJ|digits10|/|2024|req"],
    n: 3,
  },
  {
    hint: "intern projectnummer met prefix PROJ/, daarna het jaartal 2024 en vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PROJ|digits5|/|2024|req"],
    n: 1,
  },
  {
    hint: "intern projectnummer met prefix PROJ/, daarna het jaartal 2026 en acht cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PROJ|digits8|/|2026|req"],
    n: 1,
  },
  {
    hint: "intern registratienummer met prefix REG, daarna het jaartal 2025 en tien cijfers (zonder scheidingsteken)",
    keys: ["registration|REG|digits10||2025|req"],
    n: 1,
  },
  {
    hint: "intern registratienummer met prefix REG., daarna het jaartal 2025 en zes tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["registration|REG|alnum6|.|2025|req"],
    n: 2,
  },
  {
    hint: "intern registratienummer met prefix REG., daarna het jaartal 2027 en drie cijfers (delen gescheiden door punten)",
    keys: ["registration|REG|digits3|.|2027|req"],
    n: 1,
  },
  {
    hint: "intern vaartuignummer met prefix SCH., daarna het jaartal 2025 en vier tekens met letters en cijfers en vier cijfers (delen gescheiden door punten)",
    keys: ["vessel|SCH|alnum4,digits4|.|2025|req"],
    n: 1,
  },
  {
    hint: "intern vaartuignummer met prefix VRT-, daarna het jaartal 2027 en twee letters en twee cijfers en twee letters (delen gescheiden door koppeltekens)",
    keys: ["vessel|VRT|letters2,digits2,letters2|-|2027|req"],
    n: 2,
  },
  {
    hint: "intern vaartuignummer met prefix VRT/ en zes tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["vessel|VRT|alnum6|/|-|req"],
    n: 1,
  },
  {
    hint: "intern vergunningnummer met prefix PER-, daarna het jaartal 2025 en zes tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["permit|PER|alnum6|-|2025|req"],
    n: 1,
  },
  {
    hint: "intern vergunningnummer met prefix VGM., daarna het jaartal 2026 en twee letters en vijf cijfers (delen gescheiden door punten)",
    keys: ["permit|VGM|letters2,digits5|.|2026|req"],
    n: 1,
  },
  {
    hint: "intern vergunningnummer met prefix VGM/, daarna het jaartal 2027 en tien cijfers (delen gescheiden door schuine strepen)",
    keys: ["permit|VGM|digits10|/|2027|req"],
    n: 3,
  },
  {
    hint: "internal asset code with prefix AST, then the year 2025 and eight characters mixing letters and digits (without separators)",
    keys: ["asset|AST|alnum8||2025|req"],
    n: 3,
  },
  {
    hint: "internal asset code with prefix AST, then the year 2026 and nine digits (without separators)",
    keys: ["asset|AST|digits9||2026|req"],
    n: 1,
  },
  {
    hint: "internal asset code with prefix AST-, then the year 2024 and seven characters mixing letters and digits (parts separated by hyphens)",
    keys: ["asset|AST|alnum7|-|2024|req"],
    n: 1,
  },
  {
    hint: "internal asset code with prefix AST-, then the year 2024 and two letters and five digits (parts separated by hyphens)",
    keys: ["asset|AST|letters2,digits5|-|2024|req"],
    n: 1,
  },
  {
    hint: "internal asset code with prefix AST-, then the year 2027 and nine digits (parts separated by hyphens)",
    keys: ["asset|AST|digits9|-|2027|req"],
    n: 1,
  },
  {
    hint: "internal asset code with prefix AST. and three digits (parts separated by dots)",
    keys: ["asset|AST|digits3|.|-|req"],
    n: 2,
  },
  {
    hint: "internal asset code with prefix AST., then the year 2025 and eight digits (parts separated by dots)",
    keys: ["asset|AST|digits8|.|2025|req"],
    n: 3,
  },
  {
    hint: "internal asset code with prefix AST., then the year 2027 and two letters and five digits (parts separated by dots)",
    keys: ["asset|AST|letters2,digits5|.|2027|req"],
    n: 2,
  },
  {
    hint: "internal asset code with prefix AST/, then the year 2026 and two letters and five digits (parts separated by slashes)",
    keys: ["asset|AST|letters2,digits5|/|2026|req"],
    n: 1,
  },
  {
    hint: "internal asset code with prefix AST/, then the year 2027 and five digits (parts separated by slashes)",
    keys: ["asset|AST|digits5|/|2027|req"],
    n: 1,
  },
  {
    hint: "internal asset code with prefix AST/, then the year 2027 and four digits (parts separated by slashes)",
    keys: ["asset|AST|digits4|/|2027|req"],
    n: 1,
  },
  {
    hint: "internal asset code with prefix MID and four digits (without separators)",
    keys: ["asset|MID|digits4||-|req"],
    n: 1,
  },
  {
    hint: "internal asset code with prefix MID, then the year 2024 and nine digits (without separators)",
    keys: ["asset|MID|digits9||2024|req"],
    n: 1,
  },
  {
    hint: "internal asset code with prefix MID, then the year 2025 and seven digits (without separators)",
    keys: ["asset|MID|digits7||2025|req"],
    n: 1,
  },
  {
    hint: "internal asset code with prefix MID, then the year 2027 and six digits (without separators)",
    keys: ["asset|MID|digits6||2027|req"],
    n: 1,
  },
  {
    hint: "internal asset code with prefix MID-, then the year 2024 and three digits (parts separated by hyphens)",
    keys: ["asset|MID|digits3|-|2024|req"],
    n: 1,
  },
  {
    hint: "internal asset code with prefix MID-, then the year 2026 and six digits (parts separated by hyphens)",
    keys: ["asset|MID|digits6|-|2026|req"],
    n: 1,
  },
  {
    hint: "internal asset code with prefix MID-, then the year 2026 and two letters and five digits (parts separated by hyphens)",
    keys: ["asset|MID|letters2,digits5|-|2026|req"],
    n: 1,
  },
  {
    hint: "internal asset code with prefix MID-, then the year 2027 and five digits (parts separated by hyphens)",
    keys: ["asset|MID|digits5|-|2027|req"],
    n: 2,
  },
  {
    hint: "internal asset code with prefix MID-, then the year 2027 and six characters mixing letters and digits (parts separated by hyphens)",
    keys: ["asset|MID|alnum6|-|2027|req"],
    n: 1,
  },
  {
    hint: "internal asset code with prefix MID., then the year 2025 and four digits (parts separated by dots)",
    keys: ["asset|MID|digits4|.|2025|req"],
    n: 1,
  },
  {
    hint: "internal asset code with prefix MID/ and six characters mixing letters and digits (parts separated by slashes)",
    keys: ["asset|MID|alnum6|/|-|req"],
    n: 1,
  },
  {
    hint: "internal asset code with prefix MID/ and three digits (parts separated by slashes)",
    keys: ["asset|MID|digits3|/|-|req"],
    n: 2,
  },
  {
    hint: "internal asset code with prefix MID/, then the year 2024 and two letters and five digits (parts separated by slashes)",
    keys: ["asset|MID|letters2,digits5|/|2024|req"],
    n: 2,
  },
  {
    hint: "internal asset code with prefix OBJ, then the year 2027 and seven digits (without separators)",
    keys: ["asset|OBJ|digits7||2027|req"],
    n: 2,
  },
  {
    hint: "internal asset code with prefix OBJ-, then the year 2024 and six characters mixing letters and digits (parts separated by hyphens)",
    keys: ["asset|OBJ|alnum6|-|2024|req"],
    n: 2,
  },
  {
    hint: "internal asset code with prefix OBJ-, then the year 2025 and six characters mixing letters and digits (parts separated by hyphens)",
    keys: ["asset|OBJ|alnum6|-|2025|req"],
    n: 2,
  },
  {
    hint: "internal asset code with prefix OBJ-, then the year 2026 and nine characters mixing letters and digits (parts separated by hyphens)",
    keys: ["asset|OBJ|alnum9|-|2026|req"],
    n: 1,
  },
  {
    hint: "internal asset code with prefix OBJ-, then the year 2026 and seven characters mixing letters and digits (parts separated by hyphens)",
    keys: ["asset|OBJ|alnum7|-|2026|req"],
    n: 1,
  },
  {
    hint: "internal asset code with prefix OBJ. and eight digits (parts separated by dots)",
    keys: ["asset|OBJ|digits8|.|-|req"],
    n: 2,
  },
  {
    hint: "internal asset code with prefix OBJ., then the year 2024 and two letters and five digits (parts separated by dots)",
    keys: ["asset|OBJ|letters2,digits5|.|2024|req"],
    n: 2,
  },
  {
    hint: "internal asset code with prefix OBJ., then the year 2025 and five digits (parts separated by dots)",
    keys: ["asset|OBJ|digits5|.|2025|req"],
    n: 2,
  },
  {
    hint: "internal asset code with prefix OBJ., then the year 2025 and seven characters mixing letters and digits (parts separated by dots)",
    keys: ["asset|OBJ|alnum7|.|2025|req"],
    n: 1,
  },
  {
    hint: "internal asset code with prefix OBJ., then the year 2025 and six digits (parts separated by dots)",
    keys: ["asset|OBJ|digits6|.|2025|req"],
    n: 1,
  },
  {
    hint: "internal asset code with prefix OBJ., then the year 2026 and eight characters mixing letters and digits (parts separated by dots)",
    keys: ["asset|OBJ|alnum8|.|2026|req"],
    n: 1,
  },
  {
    hint: "internal asset code with prefix OBJ/ and four digits (parts separated by slashes)",
    keys: ["asset|OBJ|digits4|/|-|req"],
    n: 2,
  },
  {
    hint: "internal asset code with prefix OBJ/, then the year 2026 and ten digits (parts separated by slashes)",
    keys: ["asset|OBJ|digits10|/|2026|req"],
    n: 1,
  },
  {
    hint: "internal batch code with prefix BATCH, then the year 2024 and six characters mixing letters and digits (without separators)",
    keys: ["batch|BATCH|alnum6||2024|req"],
    n: 2,
  },
  {
    hint: "internal batch code with prefix BATCH, then the year 2025 and six digits (without separators)",
    keys: ["batch|BATCH|digits6||2025|req"],
    n: 1,
  },
  {
    hint: "internal batch code with prefix BATCH, then the year 2027 and ten digits (without separators)",
    keys: ["batch|BATCH|digits10||2027|req"],
    n: 1,
  },
  {
    hint: "internal batch code with prefix BATCH-, then the year 2025 and nine characters mixing letters and digits (parts separated by hyphens)",
    keys: ["batch|BATCH|alnum9|-|2025|req"],
    n: 3,
  },
  {
    hint: "internal batch code with prefix BATCH., then the year 2025 and eight characters mixing letters and digits (parts separated by dots)",
    keys: ["batch|BATCH|alnum8|.|2025|req"],
    n: 1,
  },
  {
    hint: "internal batch code with prefix BATCH/ and four digits (parts separated by slashes)",
    keys: ["batch|BATCH|digits4|/|-|req"],
    n: 1,
  },
  {
    hint: "internal batch code with prefix BATCH/ and two letters and five digits (parts separated by slashes)",
    keys: ["batch|BATCH|letters2,digits5|/|-|req"],
    n: 1,
  },
  {
    hint: "internal batch code with prefix BATCH/, then the year 2024 and two letters and five digits (parts separated by slashes)",
    keys: ["batch|BATCH|letters2,digits5|/|2024|req"],
    n: 2,
  },
  {
    hint: "internal batch code with prefix BATCH/, then the year 2025 and eight digits (parts separated by slashes)",
    keys: ["batch|BATCH|digits8|/|2025|req"],
    n: 1,
  },
  {
    hint: "internal batch code with prefix CH, then the year 2025 and seven characters mixing letters and digits (without separators)",
    keys: ["batch|CH|alnum7||2025|req"],
    n: 1,
  },
  {
    hint: "internal batch code with prefix CH, then the year 2025 and six digits (without separators)",
    keys: ["batch|CH|digits6||2025|req"],
    n: 1,
  },
  {
    hint: "internal batch code with prefix CH- and eight characters mixing letters and digits (parts separated by hyphens)",
    keys: ["batch|CH|alnum8|-|-|req"],
    n: 1,
  },
  {
    hint: "internal batch code with prefix CH- and ten digits (parts separated by hyphens)",
    keys: ["batch|CH|digits10|-|-|req"],
    n: 1,
  },
  {
    hint: "internal batch code with prefix CH- and two letters and five digits (parts separated by hyphens)",
    keys: ["batch|CH|letters2,digits5|-|-|req"],
    n: 1,
  },
  {
    hint: "internal batch code with prefix CH-, then the year 2026 and six characters mixing letters and digits (parts separated by hyphens)",
    keys: ["batch|CH|alnum6|-|2026|req"],
    n: 1,
  },
  {
    hint: "internal batch code with prefix CH-, then the year 2026 and three digits (parts separated by hyphens)",
    keys: ["batch|CH|digits3|-|2026|req"],
    n: 1,
  },
  {
    hint: "internal batch code with prefix CH. and eight digits (parts separated by dots)",
    keys: ["batch|CH|digits8|.|-|req"],
    n: 3,
  },
  {
    hint: "internal batch code with prefix CH. and seven digits (parts separated by dots)",
    keys: ["batch|CH|digits7|.|-|req"],
    n: 4,
  },
  {
    hint: "internal batch code with prefix CH., then the year 2024 and eight characters mixing letters and digits (parts separated by dots)",
    keys: ["batch|CH|alnum8|.|2024|req"],
    n: 2,
  },
  {
    hint: "internal batch code with prefix CH., then the year 2026 and eight digits (parts separated by dots)",
    keys: ["batch|CH|digits8|.|2026|req"],
    n: 2,
  },
  {
    hint: "internal batch code with prefix CH/ and three digits (parts separated by slashes)",
    keys: ["batch|CH|digits3|/|-|req"],
    n: 2,
  },
  {
    hint: "internal batch code with prefix CH/, then the year 2024 and seven characters mixing letters and digits (parts separated by slashes)",
    keys: ["batch|CH|alnum7|/|2024|req"],
    n: 2,
  },
  {
    hint: "internal batch code with prefix CH/, then the year 2026 and seven digits (parts separated by slashes)",
    keys: ["batch|CH|digits7|/|2026|req"],
    n: 1,
  },
  {
    hint: "internal batch code with prefix CH/, then the year 2026 and six digits (parts separated by slashes)",
    keys: ["batch|CH|digits6|/|2026|req"],
    n: 1,
  },
  {
    hint: "internal batch code with prefix LOT, then the year 2024 and seven characters mixing letters and digits (without separators)",
    keys: ["batch|LOT|alnum7||2024|req"],
    n: 3,
  },
  {
    hint: "internal batch code with prefix LOT, then the year 2024 and six characters mixing letters and digits (without separators)",
    keys: ["batch|LOT|alnum6||2024|req"],
    n: 3,
  },
  {
    hint: "internal batch code with prefix LOT-, then the year 2024 and five digits (parts separated by hyphens)",
    keys: ["batch|LOT|digits5|-|2024|req"],
    n: 1,
  },
  {
    hint: "internal batch code with prefix LOT-, then the year 2024 and seven characters mixing letters and digits (parts separated by hyphens)",
    keys: ["batch|LOT|alnum7|-|2024|req"],
    n: 1,
  },
  {
    hint: "internal batch code with prefix LOT-, then the year 2024 and three digits (parts separated by hyphens)",
    keys: ["batch|LOT|digits3|-|2024|req"],
    n: 2,
  },
  {
    hint: "internal batch code with prefix LOT-, then the year 2026 and two letters and two digits and two letters (parts separated by hyphens)",
    keys: ["batch|LOT|letters2,digits2,letters2|-|2026|req"],
    n: 2,
  },
  {
    hint: "internal batch code with prefix LOT-, then the year 2027 and nine digits (parts separated by hyphens)",
    keys: ["batch|LOT|digits9|-|2027|req"],
    n: 2,
  },
  {
    hint: "internal batch code with prefix LOT., then the year 2024 and seven digits (parts separated by dots)",
    keys: ["batch|LOT|digits7|.|2024|req"],
    n: 2,
  },
  {
    hint: "internal batch code with prefix LOT., then the year 2026 and four characters mixing letters and digits and four digits (parts separated by dots)",
    keys: ["batch|LOT|alnum4,digits4|.|2026|req"],
    n: 1,
  },
  {
    hint: "internal batch code with prefix LOT., then the year 2026 and seven characters mixing letters and digits (parts separated by dots)",
    keys: ["batch|LOT|alnum7|.|2026|req"],
    n: 1,
  },
  {
    hint: "internal batch code with prefix LOT., then the year 2026 and six characters mixing letters and digits (parts separated by dots)",
    keys: ["batch|LOT|alnum6|.|2026|req"],
    n: 1,
  },
  {
    hint: "internal batch code with prefix LOT., then the year 2026 and six digits (parts separated by dots)",
    keys: ["batch|LOT|digits6|.|2026|req"],
    n: 1,
  },
  {
    hint: "internal batch code with prefix LOT/ and eight characters mixing letters and digits (parts separated by slashes)",
    keys: ["batch|LOT|alnum8|/|-|req"],
    n: 1,
  },
  {
    hint: "internal batch code with prefix LOT/, then the year 2024 and four digits (parts separated by slashes)",
    keys: ["batch|LOT|digits4|/|2024|req"],
    n: 1,
  },
  {
    hint: "internal batch code with prefix LOT/, then the year 2027 and five digits (parts separated by slashes)",
    keys: ["batch|LOT|digits5|/|2027|req"],
    n: 1,
  },
  {
    hint: "internal case code with prefix CASE and eight digits (without separators)",
    keys: ["case|CASE|digits8||-|req"],
    n: 3,
  },
  {
    hint: "internal case code with prefix CASE, then the year 2025 and eight digits (without separators)",
    keys: ["case|CASE|digits8||2025|req"],
    n: 1,
  },
  {
    hint: "internal case code with prefix CASE, then the year 2025 and four digits (without separators)",
    keys: ["case|CASE|digits4||2025|req"],
    n: 3,
  },
  {
    hint: "internal case code with prefix CASE, then the year 2025 and ten digits (without separators)",
    keys: ["case|CASE|digits10||2025|req"],
    n: 2,
  },
  {
    hint: "internal case code with prefix CASE, then the year 2026 and five digits (without separators)",
    keys: ["case|CASE|digits5||2026|req"],
    n: 1,
  },
  {
    hint: "internal case code with prefix CASE- and two letters and five digits (parts separated by hyphens)",
    keys: ["case|CASE|letters2,digits5|-|-|req"],
    n: 1,
  },
  {
    hint: "internal case code with prefix CASE. and eight digits (parts separated by dots)",
    keys: ["case|CASE|digits8|.|-|req"],
    n: 1,
  },
  {
    hint: "internal case code with prefix CASE. and five digits (parts separated by dots)",
    keys: ["case|CASE|digits5|.|-|req"],
    n: 1,
  },
  {
    hint: "internal case code with prefix CASE., then the year 2025 and six digits (parts separated by dots)",
    keys: ["case|CASE|digits6|.|2025|req"],
    n: 1,
  },
  {
    hint: "internal case code with prefix CASE., then the year 2025 and two letters and five digits (parts separated by dots)",
    keys: ["case|CASE|letters2,digits5|.|2025|req"],
    n: 1,
  },
  {
    hint: "internal case code with prefix CASE., then the year 2026 and three digits (parts separated by dots)",
    keys: ["case|CASE|digits3|.|2026|req"],
    n: 2,
  },
  {
    hint: "internal case code with prefix CASE., then the year 2027 and two letters and five digits (parts separated by dots)",
    keys: ["case|CASE|letters2,digits5|.|2027|req"],
    n: 1,
  },
  {
    hint: "internal case code with prefix CASE/ and three digits (parts separated by slashes)",
    keys: ["case|CASE|digits3|/|-|req"],
    n: 2,
  },
  {
    hint: "internal case code with prefix CASE/, then the year 2025 and two letters and five digits (parts separated by slashes)",
    keys: ["case|CASE|letters2,digits5|/|2025|req"],
    n: 1,
  },
  {
    hint: "internal case code with prefix CASE/, then the year 2027 and nine characters mixing letters and digits (parts separated by slashes)",
    keys: ["case|CASE|alnum9|/|2027|req"],
    n: 1,
  },
  {
    hint: "internal case code with prefix DOSS and five digits (without separators)",
    keys: ["case|DOSS|digits5||-|req"],
    n: 2,
  },
  {
    hint: "internal case code with prefix DOSS, then the year 2027 and eight digits (without separators)",
    keys: ["case|DOSS|digits8||2027|req"],
    n: 2,
  },
  {
    hint: "internal case code with prefix DOSS, then the year 2027 and five digits (without separators)",
    keys: ["case|DOSS|digits5||2027|req"],
    n: 1,
  },
  {
    hint: "internal case code with prefix DOSS- and eight characters mixing letters and digits (parts separated by hyphens)",
    keys: ["case|DOSS|alnum8|-|-|req"],
    n: 1,
  },
  {
    hint: "internal case code with prefix DOSS-, then the year 2025 and nine digits (parts separated by hyphens)",
    keys: ["case|DOSS|digits9|-|2025|req"],
    n: 1,
  },
  {
    hint: "internal case code with prefix DOSS-, then the year 2026 and seven digits (parts separated by hyphens)",
    keys: ["case|DOSS|digits7|-|2026|req"],
    n: 2,
  },
  {
    hint: "internal case code with prefix DOSS. and seven characters mixing letters and digits (parts separated by dots)",
    keys: ["case|DOSS|alnum7|.|-|req"],
    n: 2,
  },
  {
    hint: "internal case code with prefix DOSS. and six digits (parts separated by dots)",
    keys: ["case|DOSS|digits6|.|-|req"],
    n: 1,
  },
  {
    hint: "internal case code with prefix DOSS., then the year 2025 and nine characters mixing letters and digits (parts separated by dots)",
    keys: ["case|DOSS|alnum9|.|2025|req"],
    n: 1,
  },
  {
    hint: "internal case code with prefix DOSS., then the year 2025 and two letters and five digits (parts separated by dots)",
    keys: ["case|DOSS|letters2,digits5|.|2025|req"],
    n: 1,
  },
  {
    hint: "internal case code with prefix DOSS/ and two letters and five digits (parts separated by slashes)",
    keys: ["case|DOSS|letters2,digits5|/|-|req"],
    n: 1,
  },
  {
    hint: "internal case code with prefix DOSS/, then the year 2027 and eight digits (parts separated by slashes)",
    keys: ["case|DOSS|digits8|/|2027|req"],
    n: 1,
  },
  {
    hint: "internal case code with prefix DOSS/, then the year 2027 and ten digits (parts separated by slashes)",
    keys: ["case|DOSS|digits10|/|2027|req"],
    n: 1,
  },
  {
    hint: "internal case code with prefix ZD and eight characters mixing letters and digits (without separators)",
    keys: ["case|ZD|alnum8||-|req"],
    n: 1,
  },
  {
    hint: "internal case code with prefix ZD and nine characters mixing letters and digits (without separators)",
    keys: ["case|ZD|alnum9||-|req"],
    n: 1,
  },
  {
    hint: "internal case code with prefix ZD, then the year 2025 and three digits (without separators)",
    keys: ["case|ZD|digits3||2025|req"],
    n: 1,
  },
  {
    hint: "internal case code with prefix ZD, then the year 2026 and three digits (without separators)",
    keys: ["case|ZD|digits3||2026|req"],
    n: 1,
  },
  {
    hint: "internal case code with prefix ZD-, then the year 2025 and four digits (parts separated by hyphens)",
    keys: ["case|ZD|digits4|-|2025|req"],
    n: 1,
  },
  {
    hint: "internal case code with prefix ZD-, then the year 2025 and nine characters mixing letters and digits (parts separated by hyphens)",
    keys: ["case|ZD|alnum9|-|2025|req"],
    n: 1,
  },
  {
    hint: "internal case code with prefix ZD-, then the year 2027 and seven digits (parts separated by hyphens)",
    keys: ["case|ZD|digits7|-|2027|req"],
    n: 2,
  },
  {
    hint: "internal case code with prefix ZD-, then the year 2027 and two letters and five digits (parts separated by hyphens)",
    keys: ["case|ZD|letters2,digits5|-|2027|req"],
    n: 1,
  },
  {
    hint: "internal case code with prefix ZD., then the year 2025 and nine digits (parts separated by dots)",
    keys: ["case|ZD|digits9|.|2025|req"],
    n: 2,
  },
  {
    hint: "internal case code with prefix ZD/, then the year 2024 and five digits (parts separated by slashes)",
    keys: ["case|ZD|digits5|/|2024|req"],
    n: 1,
  },
  {
    hint: "internal case code with prefix ZD/, then the year 2024 and seven characters mixing letters and digits (parts separated by slashes)",
    keys: ["case|ZD|alnum7|/|2024|req"],
    n: 2,
  },
  {
    hint: "internal case code with prefix ZD/, then the year 2024 and six characters mixing letters and digits (parts separated by slashes)",
    keys: ["case|ZD|alnum6|/|2024|req"],
    n: 1,
  },
  {
    hint: "internal case code with prefix ZD/, then the year 2027 and six characters mixing letters and digits (parts separated by slashes)",
    keys: ["case|ZD|alnum6|/|2027|req"],
    n: 1,
  },
  {
    hint: "internal incident number with prefix INC, then the year 2024 and ten digits (without separators)",
    keys: ["ticket|INC|digits10||2024|req"],
    n: 1,
  },
  {
    hint: "internal incident number with prefix INC, then the year 2025 and six characters mixing letters and digits (without separators)",
    keys: ["ticket|INC|alnum6||2025|req"],
    n: 2,
  },
  {
    hint: "internal incident number with prefix INC, then the year 2027 and four digits (without separators)",
    keys: ["ticket|INC|digits4||2027|req"],
    n: 1,
  },
  {
    hint: "internal incident number with prefix INC- and seven characters mixing letters and digits (parts separated by hyphens)",
    keys: ["ticket|INC|alnum7|-|-|req"],
    n: 1,
  },
  {
    hint: "internal incident number with prefix INC-, then the year 2026 and seven characters mixing letters and digits (parts separated by hyphens)",
    keys: ["ticket|INC|alnum7|-|2026|req"],
    n: 1,
  },
  {
    hint: "internal incident number with prefix INC-, then the year 2027 and eight characters mixing letters and digits (parts separated by hyphens)",
    keys: ["ticket|INC|alnum8|-|2027|req"],
    n: 2,
  },
  {
    hint: "internal incident number with prefix INC-, then the year 2027 and two letters and five digits (parts separated by hyphens)",
    keys: ["ticket|INC|letters2,digits5|-|2027|req"],
    n: 1,
  },
  {
    hint: "internal incident number with prefix INC., then the year 2025 and five digits (parts separated by dots)",
    keys: ["ticket|INC|digits5|.|2025|req"],
    n: 1,
  },
  {
    hint: "internal incident number with prefix INC., then the year 2026 and eight characters mixing letters and digits (parts separated by dots)",
    keys: ["ticket|INC|alnum8|.|2026|req"],
    n: 1,
  },
  {
    hint: "internal incident number with prefix INC/ and nine characters mixing letters and digits (parts separated by slashes)",
    keys: ["ticket|INC|alnum9|/|-|req"],
    n: 2,
  },
  {
    hint: "internal incident number with prefix INC/, then the year 2025 and three digits (parts separated by slashes)",
    keys: ["ticket|INC|digits3|/|2025|req"],
    n: 2,
  },
  {
    hint: "internal incident number with prefix SD and five digits (without separators)",
    keys: ["ticket|SD|digits5||-|req"],
    n: 1,
  },
  {
    hint: "internal incident number with prefix SD and nine characters mixing letters and digits (without separators)",
    keys: ["ticket|SD|alnum9||-|req"],
    n: 1,
  },
  {
    hint: "internal incident number with prefix SD, then the year 2024 and three digits (without separators)",
    keys: ["ticket|SD|digits3||2024|req"],
    n: 2,
  },
  {
    hint: "internal incident number with prefix SD-, then the year 2025 and nine characters mixing letters and digits (parts separated by hyphens)",
    keys: ["ticket|SD|alnum9|-|2025|req"],
    n: 1,
  },
  {
    hint: "internal incident number with prefix SD., then the year 2025 and six digits (parts separated by dots)",
    keys: ["ticket|SD|digits6|.|2025|req"],
    n: 2,
  },
  {
    hint: "internal incident number with prefix SD., then the year 2027 and four digits (parts separated by dots)",
    keys: ["ticket|SD|digits4|.|2027|req"],
    n: 1,
  },
  {
    hint: "internal incident number with prefix SD., then the year 2027 and seven characters mixing letters and digits (parts separated by dots)",
    keys: ["ticket|SD|alnum7|.|2027|req"],
    n: 1,
  },
  {
    hint: "internal incident number with prefix SD/ and five digits (parts separated by slashes)",
    keys: ["ticket|SD|digits5|/|-|req"],
    n: 3,
  },
  {
    hint: "internal incident number with prefix SD/, then the year 2024 and six characters mixing letters and digits (parts separated by slashes)",
    keys: ["ticket|SD|alnum6|/|2024|req"],
    n: 2,
  },
  {
    hint: "internal incident number with prefix SD/, then the year 2025 and seven digits (parts separated by slashes)",
    keys: ["ticket|SD|digits7|/|2025|req"],
    n: 1,
  },
  {
    hint: "internal incident number with prefix SD/, then the year 2025 and ten digits (parts separated by slashes)",
    keys: ["ticket|SD|digits10|/|2025|req"],
    n: 2,
  },
  {
    hint: "internal incident number with prefix TKT and five digits (without separators)",
    keys: ["ticket|TKT|digits5||-|req"],
    n: 1,
  },
  {
    hint: "internal incident number with prefix TKT, then the year 2027 and four digits (without separators)",
    keys: ["ticket|TKT|digits4||2027|req"],
    n: 2,
  },
  {
    hint: "internal incident number with prefix TKT-, then the year 2024 and six digits (parts separated by hyphens)",
    keys: ["ticket|TKT|digits6|-|2024|req"],
    n: 2,
  },
  {
    hint: "internal incident number with prefix TKT. and three digits (parts separated by dots)",
    keys: ["ticket|TKT|digits3|.|-|req"],
    n: 2,
  },
  {
    hint: "internal incident number with prefix TKT., then the year 2024 and eight digits (parts separated by dots)",
    keys: ["ticket|TKT|digits8|.|2024|req"],
    n: 2,
  },
  {
    hint: "internal incident number with prefix TKT., then the year 2026 and nine digits (parts separated by dots)",
    keys: ["ticket|TKT|digits9|.|2026|req"],
    n: 2,
  },
  {
    hint: "internal incident number with prefix TKT., then the year 2026 and seven characters mixing letters and digits (parts separated by dots)",
    keys: ["ticket|TKT|alnum7|.|2026|req"],
    n: 1,
  },
  {
    hint: "internal incident number with prefix TKT/ and eight characters mixing letters and digits (parts separated by slashes)",
    keys: ["ticket|TKT|alnum8|/|-|req"],
    n: 1,
  },
  {
    hint: "internal incident number with prefix TKT/ and nine characters mixing letters and digits (parts separated by slashes)",
    keys: ["ticket|TKT|alnum9|/|-|req"],
    n: 1,
  },
  {
    hint: "internal incident number with prefix TKT/, then the year 2025 and eight characters mixing letters and digits (parts separated by slashes)",
    keys: ["ticket|TKT|alnum8|/|2025|req"],
    n: 1,
  },
  {
    hint: "internal incident number with prefix TKT/, then the year 2025 and four digits (parts separated by slashes)",
    keys: ["ticket|TKT|digits4|/|2025|req"],
    n: 1,
  },
  {
    hint: "internal licence number with prefix LIC-, then the year 2025 and two digits and two letters and two digits (parts separated by hyphens)",
    keys: ["licence|LIC|digits2,letters2,digits2|-|2025|req"],
    n: 3,
  },
  {
    hint: "internal licence number with prefix LIC-, then the year 2027 and eight digits (parts separated by hyphens)",
    keys: ["licence|LIC|digits8|-|2027|req"],
    n: 1,
  },
  {
    hint: "internal licence number with prefix LIC., then the year 2027 and nine characters mixing letters and digits (parts separated by dots)",
    keys: ["licence|LIC|alnum9|.|2027|req"],
    n: 4,
  },
  {
    hint: "internal licence number with prefix VERG-, then the year 2024 and nine digits (parts separated by hyphens)",
    keys: ["licence|VERG|digits9|-|2024|req"],
    n: 4,
  },
  {
    hint: "internal licence number with prefix VERG., then the year 2026 and eight digits (parts separated by dots)",
    keys: ["licence|VERG|digits8|.|2026|req"],
    n: 1,
  },
  {
    hint: "internal permit number with prefix PER-, then the year 2025 and three digits (parts separated by hyphens)",
    keys: ["permit|PER|digits3|-|2025|req"],
    n: 2,
  },
  {
    hint: "internal permit number with prefix PER., then the year 2024 and four characters mixing letters and digits and four digits (parts separated by dots)",
    keys: ["permit|PER|alnum4,digits4|.|2024|req"],
    n: 1,
  },
  {
    hint: "internal permit number with prefix PER., then the year 2024 and two letters and five digits (parts separated by dots)",
    keys: ["permit|PER|letters2,digits5|.|2024|req"],
    n: 1,
  },
  {
    hint: "internal permit number with prefix VGM, then the year 2024 and nine characters mixing letters and digits (without separators)",
    keys: ["permit|VGM|alnum9||2024|req"],
    n: 1,
  },
  {
    hint: "internal permit number with prefix VGM., then the year 2025 and eight characters mixing letters and digits (parts separated by dots)",
    keys: ["permit|VGM|alnum8|.|2025|req"],
    n: 1,
  },
  {
    hint: "internal permit number with prefix VGM., then the year 2026 and two letters and five digits (parts separated by dots)",
    keys: ["permit|VGM|letters2,digits5|.|2026|req"],
    n: 1,
  },
  {
    hint: "internal permit number with prefix VGM/, then the year 2027 and ten digits (parts separated by slashes)",
    keys: ["permit|VGM|digits10|/|2027|req"],
    n: 1,
  },
  {
    hint: "internal project code with prefix P and seven characters mixing letters and digits (without separators)",
    keys: ["project|P|alnum7||-|req"],
    n: 1,
  },
  {
    hint: "internal project code with prefix P and six characters mixing letters and digits (without separators)",
    keys: ["project|P|alnum6||-|req"],
    n: 1,
  },
  {
    hint: "internal project code with prefix P, then the year 2024 and three digits (without separators)",
    keys: ["project|P|digits3||2024|req"],
    n: 2,
  },
  {
    hint: "internal project code with prefix P- and six characters mixing letters and digits (parts separated by hyphens)",
    keys: ["project|P|alnum6|-|-|req"],
    n: 1,
  },
  {
    hint: "internal project code with prefix P-, then the year 2024 and seven digits (parts separated by hyphens)",
    keys: ["project|P|digits7|-|2024|req"],
    n: 1,
  },
  {
    hint: "internal project code with prefix P-, then the year 2025 and seven characters mixing letters and digits (parts separated by hyphens)",
    keys: ["project|P|alnum7|-|2025|req"],
    n: 1,
  },
  {
    hint: "internal project code with prefix P-, then the year 2025 and two letters and five digits (parts separated by hyphens)",
    keys: ["project|P|letters2,digits5|-|2025|req"],
    n: 1,
  },
  {
    hint: "internal project code with prefix P-, then the year 2026 and ten digits (parts separated by hyphens)",
    keys: ["project|P|digits10|-|2026|req"],
    n: 1,
  },
  {
    hint: "internal project code with prefix P-, then the year 2027 and two letters and five digits (parts separated by hyphens)",
    keys: ["project|P|letters2,digits5|-|2027|req"],
    n: 2,
  },
  {
    hint: "internal project code with prefix P., then the year 2024 and six digits (parts separated by dots)",
    keys: ["project|P|digits6|.|2024|req"],
    n: 2,
  },
  {
    hint: "internal project code with prefix P., then the year 2025 and three digits (parts separated by dots)",
    keys: ["project|P|digits3|.|2025|req"],
    n: 1,
  },
  {
    hint: "internal project code with prefix P., then the year 2026 and four characters mixing letters and digits and four digits (parts separated by dots)",
    keys: ["project|P|alnum4,digits4|.|2026|req"],
    n: 1,
  },
  {
    hint: "internal project code with prefix P., then the year 2027 and nine digits (parts separated by dots)",
    keys: ["project|P|digits9|.|2027|req"],
    n: 1,
  },
  {
    hint: "internal project code with prefix P/, then the year 2024 and six digits (parts separated by slashes)",
    keys: ["project|P|digits6|/|2024|req"],
    n: 2,
  },
  {
    hint: "internal project code with prefix P/, then the year 2025 and eight characters mixing letters and digits (parts separated by slashes)",
    keys: ["project|P|alnum8|/|2025|req"],
    n: 2,
  },
  {
    hint: "internal project code with prefix P/, then the year 2025 and four digits (parts separated by slashes)",
    keys: ["project|P|digits4|/|2025|req"],
    n: 1,
  },
  {
    hint: "internal project code with prefix P/, then the year 2025 and ten digits (parts separated by slashes)",
    keys: ["project|P|digits10|/|2025|req"],
    n: 1,
  },
  {
    hint: "internal project code with prefix P/, then the year 2027 and four digits (parts separated by slashes)",
    keys: ["project|P|digits4|/|2027|req"],
    n: 1,
  },
  {
    hint: "internal project code with prefix P/, then the year 2027 and seven digits (parts separated by slashes)",
    keys: ["project|P|digits7|/|2027|req"],
    n: 2,
  },
  {
    hint: "internal project code with prefix PRJ, then the year 2024 and nine digits (without separators)",
    keys: ["project|PRJ|digits9||2024|req"],
    n: 2,
  },
  {
    hint: "internal project code with prefix PRJ, then the year 2024 and ten digits (without separators)",
    keys: ["project|PRJ|digits10||2024|req"],
    n: 2,
  },
  {
    hint: "internal project code with prefix PRJ-, then the year 2025 and eight characters mixing letters and digits (parts separated by hyphens)",
    keys: ["project|PRJ|alnum8|-|2025|req"],
    n: 2,
  },
  {
    hint: "internal project code with prefix PRJ-, then the year 2027 and four digits (parts separated by hyphens)",
    keys: ["project|PRJ|digits4|-|2027|req"],
    n: 1,
  },
  {
    hint: "internal project code with prefix PRJ., then the year 2025 and nine digits (parts separated by dots)",
    keys: ["project|PRJ|digits9|.|2025|req"],
    n: 2,
  },
  {
    hint: "internal project code with prefix PRJ., then the year 2027 and six characters mixing letters and digits (parts separated by dots)",
    keys: ["project|PRJ|alnum6|.|2027|req"],
    n: 2,
  },
  {
    hint: "internal project code with prefix PRJ., then the year 2027 and ten digits (parts separated by dots)",
    keys: ["project|PRJ|digits10|.|2027|req"],
    n: 1,
  },
  {
    hint: "internal project code with prefix PRJ/ and eight digits (parts separated by slashes)",
    keys: ["project|PRJ|digits8|/|-|req"],
    n: 1,
  },
  {
    hint: "internal project code with prefix PRJ/ and nine digits (parts separated by slashes)",
    keys: ["project|PRJ|digits9|/|-|req"],
    n: 1,
  },
  {
    hint: "internal project code with prefix PRJ/ and six characters mixing letters and digits (parts separated by slashes)",
    keys: ["project|PRJ|alnum6|/|-|req"],
    n: 1,
  },
  {
    hint: "internal project code with prefix PRJ/, then the year 2024 and nine characters mixing letters and digits (parts separated by slashes)",
    keys: ["project|PRJ|alnum9|/|2024|req"],
    n: 1,
  },
  {
    hint: "internal project code with prefix PRJ/, then the year 2026 and six characters mixing letters and digits (parts separated by slashes)",
    keys: ["project|PRJ|alnum6|/|2026|req"],
    n: 1,
  },
  {
    hint: "internal project code with prefix PRJ/, then the year 2026 and six digits (parts separated by slashes)",
    keys: ["project|PRJ|digits6|/|2026|req"],
    n: 1,
  },
  {
    hint: "internal project code with prefix PRJ/, then the year 2027 and three digits (parts separated by slashes)",
    keys: ["project|PRJ|digits3|/|2027|req"],
    n: 1,
  },
  {
    hint: "internal project code with prefix PROJ and three digits (without separators)",
    keys: ["project|PROJ|digits3||-|req"],
    n: 1,
  },
  {
    hint: "internal project code with prefix PROJ, then the year 2025 and five digits (without separators)",
    keys: ["project|PROJ|digits5||2025|req"],
    n: 2,
  },
  {
    hint: "internal project code with prefix PROJ, then the year 2025 and nine digits (without separators)",
    keys: ["project|PROJ|digits9||2025|req"],
    n: 1,
  },
  {
    hint: "internal project code with prefix PROJ, then the year 2026 and eight digits (without separators)",
    keys: ["project|PROJ|digits8||2026|req"],
    n: 3,
  },
  {
    hint: "internal project code with prefix PROJ- and four digits",
    keys: ["project|PROJ|digits4|-|-|req"],
    n: 9,
  },
  {
    hint: "internal project code with prefix PROJ- and two digits and two letters and two digits (parts separated by hyphens)",
    keys: ["project|PROJ|digits2,letters2,digits2|-|-|req"],
    n: 1,
  },
  {
    hint: "internal project code with prefix PROJ-, then the year 2024 and ten digits (parts separated by hyphens)",
    keys: ["project|PROJ|digits10|-|2024|req"],
    n: 1,
  },
  {
    hint: "internal project code with prefix PROJ-, then the year 2025 and five digits (parts separated by hyphens)",
    keys: ["project|PROJ|digits5|-|2025|req"],
    n: 1,
  },
  {
    hint: "internal project code with prefix PROJ-, then the year 2026 and nine digits (parts separated by hyphens)",
    keys: ["project|PROJ|digits9|-|2026|req"],
    n: 2,
  },
  {
    hint: "internal project code with prefix PROJ-, then the year 2027 and nine characters mixing letters and digits (parts separated by hyphens)",
    keys: ["project|PROJ|alnum9|-|2027|req"],
    n: 2,
  },
  {
    hint: "internal project code with prefix PROJ. and eight characters mixing letters and digits (parts separated by dots)",
    keys: ["project|PROJ|alnum8|.|-|req"],
    n: 1,
  },
  {
    hint: "internal project code with prefix PROJ., then the year 2025 and seven characters mixing letters and digits (parts separated by dots)",
    keys: ["project|PROJ|alnum7|.|2025|req"],
    n: 2,
  },
  {
    hint: "internal project code with prefix PROJ/ and nine digits (parts separated by slashes)",
    keys: ["project|PROJ|digits9|/|-|req"],
    n: 1,
  },
  {
    hint: "internal project code with prefix PROJ/ and two letters and five digits (parts separated by slashes)",
    keys: ["project|PROJ|letters2,digits5|/|-|req"],
    n: 1,
  },
  {
    hint: "internal project code with prefix PROJ/, then the year 2024 and five digits (parts separated by slashes)",
    keys: ["project|PROJ|digits5|/|2024|req"],
    n: 1,
  },
  {
    hint: "internal project code with prefix PROJ/, then the year 2024 and six characters mixing letters and digits (parts separated by slashes)",
    keys: ["project|PROJ|alnum6|/|2024|req"],
    n: 1,
  },
  {
    hint: "internal project code with prefix PROJ/, then the year 2024 and ten digits (parts separated by slashes)",
    keys: ["project|PROJ|digits10|/|2024|req"],
    n: 1,
  },
  {
    hint: "internal project code with prefix PROJ/, then the year 2026 and eight digits (parts separated by slashes)",
    keys: ["project|PROJ|digits8|/|2026|req"],
    n: 3,
  },
  {
    hint: "internal registration number with prefix INS/, then the year 2026 and seven digits (parts separated by slashes)",
    keys: ["registration|INS|digits7|/|2026|req"],
    n: 3,
  },
  {
    hint: "internal registration number with prefix REG, then the year 2025 and ten digits (without separators)",
    keys: ["registration|REG|digits10||2025|req"],
    n: 2,
  },
  {
    hint: "internal registration number with prefix REG., then the year 2025 and two letters and five digits (parts separated by dots)",
    keys: ["registration|REG|letters2,digits5|.|2025|req"],
    n: 2,
  },
  {
    hint: "internal registration number with prefix REG., then the year 2027 and three digits (parts separated by dots)",
    keys: ["registration|REG|digits3|.|2027|req"],
    n: 1,
  },
  {
    hint: "internal specimen number with prefix LAB, then the year 2025 and five digits (without separators)",
    keys: ["specimen|LAB|digits5||2025|req"],
    n: 1,
  },
  {
    hint: "internal specimen number with prefix LAB., then the year 2024 and two letters and two digits and two letters (parts separated by dots)",
    keys: ["specimen|LAB|letters2,digits2,letters2|.|2024|req"],
    n: 1,
  },
  {
    hint: "internal specimen number with prefix MON., then the year 2026 and eight characters mixing letters and digits (parts separated by dots)",
    keys: ["specimen|MON|alnum8|.|2026|req"],
    n: 3,
  },
  {
    hint: "internal specimen number with prefix MON/ and seven characters mixing letters and digits (parts separated by slashes)",
    keys: ["specimen|MON|alnum7|/|-|req"],
    n: 1,
  },
  {
    hint: "internal vessel number with prefix SCH., then the year 2025 and four characters mixing letters and digits and four digits (parts separated by dots)",
    keys: ["vessel|SCH|alnum4,digits4|.|2025|req"],
    n: 1,
  },
  {
    hint: "internal vessel number with prefix SCH/ and six digits (parts separated by slashes)",
    keys: ["vessel|SCH|digits6|/|-|req"],
    n: 2,
  },
  {
    hint: "internal vessel number with prefix VRT, then the year 2027 and six characters mixing letters and digits (without separators)",
    keys: ["vessel|VRT|alnum6||2027|req"],
    n: 2,
  },
  {
    hint: "internal vessel number with prefix VRT/ and six characters mixing letters and digits (parts separated by slashes)",
    keys: ["vessel|VRT|alnum6|/|-|req"],
    n: 2,
  },
  {
    hint: "internal vessel number with prefix VRT/, then the year 2024 and four digits (parts separated by slashes)",
    keys: ["vessel|VRT|digits4|/|2024|req"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: AST plus negen tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["asset|AST|alnum9||2024|opt", "asset|AST|alnum9||2026|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: AST- plus negen cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|AST|digits9|-|2027|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: AST- plus twee letters en vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|AST|letters2,digits5|-|2024|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: AST- plus zes tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|AST|alnum6|-|2025|opt"],
    n: 3,
  },
  {
    hint: "korte code met jaartal: AST- plus zeven tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|AST|alnum7|-|2024|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: AST. plus drie cijfers (delen gescheiden door punten)",
    keys: ["asset|AST|digits3|.|2025|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: AST. plus twee letters en vijf cijfers (delen gescheiden door punten)",
    keys: ["asset|AST|letters2,digits5|.|2027|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: AST/ plus twee letters en vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["asset|AST|letters2,digits5|/|2026|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: AST/ plus vier cijfers (delen gescheiden door schuine strepen)",
    keys: ["asset|AST|digits4|/|2027|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: AST/ plus vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["asset|AST|digits5|/|2027|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: AST/ plus zeven cijfers (delen gescheiden door schuine strepen)",
    keys: ["asset|AST|digits7|/|2026|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: BATCH plus negen cijfers (zonder scheidingsteken)",
    keys: ["batch|BATCH|digits9||2025|opt"],
    n: 3,
  },
  {
    hint: "korte code met jaartal: BATCH plus tien cijfers (zonder scheidingsteken)",
    keys: ["batch|BATCH|digits10||2027|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: BATCH plus zes cijfers (zonder scheidingsteken)",
    keys: ["batch|BATCH|digits6||2025|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: BATCH- plus acht tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["batch|BATCH|alnum8|-|2027|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: BATCH- plus zeven cijfers (delen gescheiden door koppeltekens)",
    keys: ["batch|BATCH|digits7|-|2026|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: BATCH. plus acht cijfers (delen gescheiden door punten)",
    keys: ["batch|BATCH|digits8|.|2026|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: BATCH. plus negen cijfers (delen gescheiden door punten)",
    keys: ["batch|BATCH|digits9|.|2027|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: BATCH/ plus acht cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|BATCH|digits8|/|2026|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: BATCH/ plus twee letters en vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|BATCH|letters2,digits5|/|2024|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: BATCH/ plus vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|BATCH|digits5|/|2025|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: CASE plus acht cijfers (zonder scheidingsteken)",
    keys: ["case|CASE|digits8||2025|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: CASE plus vijf cijfers (zonder scheidingsteken)",
    keys: ["case|CASE|digits5||2026|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: CASE plus zes cijfers (zonder scheidingsteken)",
    keys: ["case|CASE|digits6||2024|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: CASE- plus twee letters en vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["case|CASE|letters2,digits5|-|2024|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: CASE- plus zes cijfers (delen gescheiden door koppeltekens)",
    keys: ["case|CASE|digits6|-|2024|opt", "case|CASE|digits6|-|2027|opt"],
    n: 7,
  },
  {
    hint: "korte code met jaartal: CASE. plus twee letters en vijf cijfers (delen gescheiden door punten)",
    keys: ["case|CASE|letters2,digits5|.|2027|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: CASE. plus zes cijfers (delen gescheiden door punten)",
    keys: ["case|CASE|digits6|.|2025|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: CASE. plus zes tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["case|CASE|alnum6|.|2025|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: CH plus negen tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["batch|CH|alnum9||2026|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: CH plus zeven tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["batch|CH|alnum7||2025|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: CH- plus drie cijfers (delen gescheiden door koppeltekens)",
    keys: ["batch|CH|digits3|-|2026|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: CH. plus acht cijfers (delen gescheiden door punten)",
    keys: ["batch|CH|digits8|.|2026|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: CH. plus acht tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["batch|CH|alnum8|.|2024|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: CH/ plus negen tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|CH|alnum9|/|2024|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: CH/ plus zes cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|CH|digits6|/|2026|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: DOSS plus vijf cijfers (zonder scheidingsteken)",
    keys: ["case|DOSS|digits5||2027|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: DOSS plus zeven tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["case|DOSS|alnum7||2026|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: DOSS- plus negen cijfers (delen gescheiden door koppeltekens)",
    keys: ["case|DOSS|digits9|-|2025|opt", "case|DOSS|digits9|-|2026|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: DOSS- plus vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["case|DOSS|digits5|-|2027|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: DOSS. plus negen tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["case|DOSS|alnum9|.|2026|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: DOSS. plus twee letters en vijf cijfers (delen gescheiden door punten)",
    keys: ["case|DOSS|letters2,digits5|.|2025|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: DOSS. plus zes tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["case|DOSS|alnum6|.|2024|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: DOSS. plus zeven cijfers (delen gescheiden door punten)",
    keys: ["case|DOSS|digits7|.|2025|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: DOSS/ plus tien cijfers (delen gescheiden door schuine strepen)",
    keys: ["case|DOSS|digits10|/|2027|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: INC plus drie cijfers (zonder scheidingsteken)",
    keys: ["ticket|INC|digits3||2024|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: INC plus negen tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["ticket|INC|alnum9||2026|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: INC plus tien cijfers (zonder scheidingsteken)",
    keys: ["ticket|INC|digits10||2024|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: INC plus vier cijfers (zonder scheidingsteken)",
    keys: ["ticket|INC|digits4||2024|opt", "ticket|INC|digits4||2027|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: INC plus vijf cijfers (zonder scheidingsteken)",
    keys: ["ticket|INC|digits5||2024|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: INC- plus twee letters en vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|INC|letters2,digits5|-|2024|opt", "ticket|INC|letters2,digits5|-|2027|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: INC. plus acht tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["ticket|INC|alnum8|.|2026|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: INC/ plus drie cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|INC|digits3|/|2024|opt", "ticket|INC|digits3|/|2025|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: INC/ plus tien cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|INC|digits10|/|2026|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: INS- plus negen tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["registration|INS|alnum9|-|2027|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: INS/ plus zeven cijfers (delen gescheiden door schuine strepen)",
    keys: ["registration|INS|digits7|/|2026|opt"],
    n: 5,
  },
  {
    hint: "korte code met jaartal: LAB plus vijf cijfers (zonder scheidingsteken)",
    keys: ["specimen|LAB|digits5||2025|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: LIC- plus acht cijfers (delen gescheiden door koppeltekens)",
    keys: ["licence|LIC|digits8|-|2027|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: LIC. plus negen tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["licence|LIC|alnum9|.|2027|opt"],
    n: 3,
  },
  {
    hint: "korte code met jaartal: LOT plus zes tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["batch|LOT|alnum6||2024|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: LOT- plus drie cijfers (delen gescheiden door koppeltekens)",
    keys: ["batch|LOT|digits3|-|2024|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: LOT- plus twee letters en twee cijfers en twee letters (delen gescheiden door koppeltekens)",
    keys: ["batch|LOT|letters2,digits2,letters2|-|2026|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: LOT- plus vier cijfers (delen gescheiden door koppeltekens)",
    keys: ["batch|LOT|digits4|-|2026|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: LOT. plus drie cijfers (delen gescheiden door punten)",
    keys: ["batch|LOT|digits3|.|2027|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: LOT. plus twee letters en vijf cijfers (delen gescheiden door punten)",
    keys: ["batch|LOT|letters2,digits5|.|2027|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: LOT. plus vier cijfers (delen gescheiden door punten)",
    keys: ["batch|LOT|digits4|.|2024|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: LOT. plus zes cijfers (delen gescheiden door punten)",
    keys: ["batch|LOT|digits6|.|2026|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: LOT. plus zes tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["batch|LOT|alnum6|.|2026|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: LOT. plus zeven cijfers (delen gescheiden door punten)",
    keys: ["batch|LOT|digits7|.|2024|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: LOT. plus zeven tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["batch|LOT|alnum7|.|2026|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: LOT/ plus twee letters en vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|LOT|letters2,digits5|/|2024|opt", "batch|LOT|letters2,digits5|/|2025|opt"],
    n: 3,
  },
  {
    hint: "korte code met jaartal: LOT/ plus vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|LOT|digits5|/|2027|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: LOT/ plus zeven cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|LOT|digits7|/|2024|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: MID plus acht tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["asset|MID|alnum8||2024|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: MID plus negen cijfers (zonder scheidingsteken)",
    keys: ["asset|MID|digits9||2024|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: MID plus negen tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["asset|MID|alnum9||2024|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: MID plus zes cijfers (zonder scheidingsteken)",
    keys: ["asset|MID|digits6||2024|opt", "asset|MID|digits6||2027|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: MID- plus drie cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|MID|digits3|-|2024|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: MID- plus negen cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|MID|digits9|-|2024|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: MID- plus vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|MID|digits5|-|2027|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: MID- plus zes tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|MID|alnum6|-|2027|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: MID. plus acht cijfers (delen gescheiden door punten)",
    keys: ["asset|MID|digits8|.|2025|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: MID. plus acht tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["asset|MID|alnum8|.|2024|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: MID/ plus zeven tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["asset|MID|alnum7|/|2026|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: MON plus vijf cijfers (zonder scheidingsteken)",
    keys: ["specimen|MON|digits5||2026|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: MON. plus acht tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["specimen|MON|alnum8|.|2026|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: OBJ plus negen cijfers (zonder scheidingsteken)",
    keys: ["asset|OBJ|digits9||2024|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: OBJ plus negen tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["asset|OBJ|alnum9||2025|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: OBJ plus zes cijfers (zonder scheidingsteken)",
    keys: ["asset|OBJ|digits6||2027|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: OBJ- plus twee letters en vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|OBJ|letters2,digits5|-|2026|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: OBJ- plus zes tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|OBJ|alnum6|-|2025|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: OBJ. plus negen cijfers (delen gescheiden door punten)",
    keys: ["asset|OBJ|digits9|.|2026|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: OBJ. plus vijf cijfers (delen gescheiden door punten)",
    keys: ["asset|OBJ|digits5|.|2025|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: OBJ. plus zeven tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["asset|OBJ|alnum7|.|2025|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: P plus drie cijfers (zonder scheidingsteken)",
    keys: ["project|P|digits3||2024|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: P- plus drie cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|P|digits3|-|2025|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: P- plus negen cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|P|digits9|-|2024|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: P- plus negen tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|P|alnum9|-|2026|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: P- plus twee letters en vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|P|letters2,digits5|-|2025|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: P- plus zeven cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|P|digits7|-|2027|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: P- plus zeven tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|P|alnum7|-|2025|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: P. plus drie cijfers (delen gescheiden door punten)",
    keys: ["project|P|digits3|.|2025|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: P. plus negen cijfers (delen gescheiden door punten)",
    keys: ["project|P|digits9|.|2027|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: P. plus vier tekens met letters en cijfers en vier cijfers (delen gescheiden door punten)",
    keys: ["project|P|alnum4,digits4|.|2026|opt"],
    n: 3,
  },
  {
    hint: "korte code met jaartal: P. plus zes cijfers (delen gescheiden door punten)",
    keys: ["project|P|digits6|.|2024|opt", "project|P|digits6|.|2025|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: P/ plus acht tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|P|alnum8|/|2025|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: P/ plus vier cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|P|digits4|/|2025|opt", "project|P|digits4|/|2027|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: P/ plus zes cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|P|digits6|/|2024|opt"],
    n: 3,
  },
  {
    hint: "korte code met jaartal: PER- plus zes tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["permit|PER|alnum6|-|2025|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: PER. plus vier tekens met letters en cijfers en vier cijfers (delen gescheiden door punten)",
    keys: ["permit|PER|alnum4,digits4|.|2024|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: PRJ plus zeven cijfers (zonder scheidingsteken)",
    keys: ["project|PRJ|digits7||2026|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: PRJ- plus acht tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|PRJ|alnum8|-|2025|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: PRJ. plus negen cijfers (delen gescheiden door punten)",
    keys: ["project|PRJ|digits9|.|2025|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: PRJ. plus tien cijfers (delen gescheiden door punten)",
    keys: ["project|PRJ|digits10|.|2027|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: PRJ/ plus drie cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PRJ|digits3|/|2027|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: PRJ/ plus vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PRJ|digits5|/|2025|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: PRJ/ plus zes cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PRJ|digits6|/|2026|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: PRJ/ plus zes tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PRJ|alnum6|/|2026|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: PRJ/ plus zeven tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PRJ|alnum7|/|2027|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: PROJ plus zes tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["project|PROJ|alnum6||2025|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: PROJ- plus tien cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|PROJ|digits10|-|2024|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: PROJ. plus zeven tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["project|PROJ|alnum7|.|2025|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: PROJ/ plus acht cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PROJ|digits8|/|2026|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: PROJ/ plus vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PROJ|digits5|/|2024|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: PROJ/ plus zes tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PROJ|alnum6|/|2024|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: REG plus tien cijfers (zonder scheidingsteken)",
    keys: ["registration|REG|digits10||2025|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: REG. plus drie cijfers (delen gescheiden door punten)",
    keys: ["registration|REG|digits3|.|2027|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: REG. plus twee letters en vijf cijfers (delen gescheiden door punten)",
    keys: ["registration|REG|letters2,digits5|.|2025|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: REG. plus vier cijfers (delen gescheiden door punten)",
    keys: ["registration|REG|digits4|.|2027|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: REG. plus zes tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["registration|REG|alnum6|.|2025|opt"],
    n: 3,
  },
  {
    hint: "korte code met jaartal: SCH. plus vier tekens met letters en cijfers en vier cijfers (delen gescheiden door punten)",
    keys: ["vessel|SCH|alnum4,digits4|.|2025|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: SD plus acht cijfers (zonder scheidingsteken)",
    keys: ["ticket|SD|digits8||2027|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: SD plus negen cijfers (zonder scheidingsteken)",
    keys: ["ticket|SD|digits9||2025|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: SD- plus vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|SD|digits5|-|2025|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: SD- plus zes tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|SD|alnum6|-|2024|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: SD. plus negen cijfers (delen gescheiden door punten)",
    keys: ["ticket|SD|digits9|.|2024|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: SD. plus vier cijfers (delen gescheiden door punten)",
    keys: ["ticket|SD|digits4|.|2027|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: SD/ plus negen cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|SD|digits9|/|2025|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: SD/ plus zes tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|SD|alnum6|/|2024|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: SD/ plus zeven cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|SD|digits7|/|2025|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: SD/ plus zeven tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|SD|alnum7|/|2027|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: TKT plus acht tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["ticket|TKT|alnum8||2027|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: TKT plus vier cijfers (zonder scheidingsteken)",
    keys: ["ticket|TKT|digits4||2027|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: TKT plus zeven cijfers (zonder scheidingsteken)",
    keys: ["ticket|TKT|digits7||2026|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: TKT- plus twee letters en vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|TKT|letters2,digits5|-|2025|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: TKT- plus zes cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|TKT|digits6|-|2026|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: TKT- plus zes tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|TKT|alnum6|-|2025|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: TKT. plus negen cijfers (delen gescheiden door punten)",
    keys: ["ticket|TKT|digits9|.|2026|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: TKT/ plus acht tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|TKT|alnum8|/|2025|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: TKT/ plus negen cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|TKT|digits9|/|2026|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: VERG. plus acht cijfers (delen gescheiden door punten)",
    keys: ["licence|VERG|digits8|.|2026|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: VGM plus negen tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["permit|VGM|alnum9||2024|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: VRT plus zes tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["vessel|VRT|alnum6||2027|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: ZD plus drie cijfers (zonder scheidingsteken)",
    keys: ["case|ZD|digits3||2025|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: ZD- plus twee letters en vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["case|ZD|letters2,digits5|-|2027|opt"],
    n: 2,
  },
  {
    hint: "korte code met jaartal: ZD- plus zeven cijfers (delen gescheiden door koppeltekens)",
    keys: ["case|ZD|digits7|-|2027|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: ZD. plus acht cijfers (delen gescheiden door punten)",
    keys: ["case|ZD|digits8|.|2026|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: ZD/ plus vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["case|ZD|digits5|/|2024|opt"],
    n: 1,
  },
  {
    hint: "korte code met jaartal: ZD/ plus zes tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["case|ZD|alnum6|/|2024|opt", "case|ZD|alnum6|/|2027|opt"],
    n: 3,
  },
  {
    hint: "korte code: AST. plus drie cijfers (delen gescheiden door punten)",
    keys: ["asset|AST|digits3|.|-|req"],
    n: 1,
  },
  {
    hint: "korte code: BATCH. plus twee cijfers en twee letters en twee cijfers (delen gescheiden door punten)",
    keys: ["batch|BATCH|digits2,letters2,digits2|.|-|req"],
    n: 1,
  },
  {
    hint: "korte code: BATCH. plus zeven tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["batch|BATCH|alnum7|.|-|req"],
    n: 2,
  },
  {
    hint: "korte code: BATCH/ plus twee letters en vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|BATCH|letters2,digits5|/|-|req"],
    n: 1,
  },
  {
    hint: "korte code: BATCH/ plus vier cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|BATCH|digits4|/|-|req"],
    n: 2,
  },
  {
    hint: "korte code: CASE- plus twee letters en vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["case|CASE|letters2,digits5|-|-|req"],
    n: 1,
  },
  {
    hint: "korte code: CASE. plus acht cijfers (delen gescheiden door punten)",
    keys: ["case|CASE|digits8|.|-|req"],
    n: 1,
  },
  {
    hint: "korte code: CASE. plus vijf cijfers (delen gescheiden door punten)",
    keys: ["case|CASE|digits5|.|-|req"],
    n: 1,
  },
  {
    hint: "korte code: CASE/ plus drie cijfers (delen gescheiden door schuine strepen)",
    keys: ["case|CASE|digits3|/|-|req"],
    n: 2,
  },
  {
    hint: "korte code: CH. plus acht cijfers (delen gescheiden door punten)",
    keys: ["batch|CH|digits8|.|-|req"],
    n: 1,
  },
  {
    hint: "korte code: CH/ plus drie cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|CH|digits3|/|-|req"],
    n: 2,
  },
  {
    hint: "korte code: CH/ plus zeven cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|CH|digits7|/|-|req"],
    n: 1,
  },
  {
    hint: "korte code: DOSS- plus drie cijfers (delen gescheiden door koppeltekens)",
    keys: ["case|DOSS|digits3|-|-|req"],
    n: 1,
  },
  {
    hint: "korte code: DOSS. plus acht cijfers (delen gescheiden door punten)",
    keys: ["case|DOSS|digits8|.|-|req"],
    n: 1,
  },
  {
    hint: "korte code: DOSS/ plus vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["case|DOSS|digits5|/|-|req"],
    n: 2,
  },
  {
    hint: "korte code: INC- plus acht cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|INC|digits8|-|-|req"],
    n: 1,
  },
  {
    hint: "korte code: INC- plus vier cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|INC|digits4|-|-|req"],
    n: 2,
  },
  {
    hint: "korte code: INC- plus zeven tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|INC|alnum7|-|-|req"],
    n: 1,
  },
  {
    hint: "korte code: INC. plus drie cijfers (delen gescheiden door punten)",
    keys: ["ticket|INC|digits3|.|-|req"],
    n: 2,
  },
  {
    hint: "korte code: LIC/ plus drie cijfers (delen gescheiden door schuine strepen)",
    keys: ["licence|LIC|digits3|/|-|req"],
    n: 1,
  },
  {
    hint: "korte code: LOT/ plus acht tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|LOT|alnum8|/|-|req"],
    n: 1,
  },
  {
    hint: "korte code: MID plus vier cijfers (zonder scheidingsteken)",
    keys: ["asset|MID|digits4||-|req"],
    n: 1,
  },
  {
    hint: "korte code: MID/ plus negen tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["asset|MID|alnum9|/|-|req"],
    n: 3,
  },
  {
    hint: "korte code: MID/ plus zes tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["asset|MID|alnum6|/|-|req"],
    n: 1,
  },
  {
    hint: "korte code: OBJ- plus vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|OBJ|digits5|-|-|req"],
    n: 2,
  },
  {
    hint: "korte code: OBJ- plus zeven tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|OBJ|alnum7|-|-|req"],
    n: 2,
  },
  {
    hint: "korte code: OBJ. plus acht cijfers (delen gescheiden door punten)",
    keys: ["asset|OBJ|digits8|.|-|req"],
    n: 1,
  },
  {
    hint: "korte code: OBJ/ plus vier cijfers (delen gescheiden door schuine strepen)",
    keys: ["asset|OBJ|digits4|/|-|req"],
    n: 1,
  },
  {
    hint: "korte code: P plus zes tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["project|P|alnum6||-|req"],
    n: 1,
  },
  {
    hint: "korte code: PRJ/ plus acht cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PRJ|digits8|/|-|req"],
    n: 1,
  },
  {
    hint: "korte code: PRJ/ plus acht tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PRJ|alnum8|/|-|req"],
    n: 3,
  },
  {
    hint: "korte code: PRJ/ plus zes tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PRJ|alnum6|/|-|req"],
    n: 1,
  },
  {
    hint: "korte code: PROJ- plus twee cijfers en twee letters en twee cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|PROJ|digits2,letters2,digits2|-|-|req"],
    n: 1,
  },
  {
    hint: "korte code: PROJ. plus acht tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["project|PROJ|alnum8|.|-|req"],
    n: 1,
  },
  {
    hint: "korte code: PROJ. plus twee letters en twee cijfers en twee letters (delen gescheiden door punten)",
    keys: ["project|PROJ|letters2,digits2,letters2|.|-|req"],
    n: 1,
  },
  {
    hint: "korte code: PROJ/ plus twee letters en vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PROJ|letters2,digits5|/|-|req"],
    n: 1,
  },
  {
    hint: "korte code: REG/ plus vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["registration|REG|digits5|/|-|req"],
    n: 1,
  },
  {
    hint: "korte code: SCH- plus twee cijfers en twee letters en twee cijfers (delen gescheiden door koppeltekens)",
    keys: ["vessel|SCH|digits2,letters2,digits2|-|-|req"],
    n: 2,
  },
  {
    hint: "korte code: SD plus negen tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["ticket|SD|alnum9||-|req"],
    n: 1,
  },
  {
    hint: "korte code: SD plus tien cijfers (zonder scheidingsteken)",
    keys: ["ticket|SD|digits10||-|req"],
    n: 3,
  },
  {
    hint: "korte code: SD plus vijf cijfers (zonder scheidingsteken)",
    keys: ["ticket|SD|digits5||-|req"],
    n: 1,
  },
  {
    hint: "korte code: SD plus zes cijfers (zonder scheidingsteken)",
    keys: ["ticket|SD|digits6||-|req"],
    n: 1,
  },
  {
    hint: "korte code: SD/ plus vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|SD|digits5|/|-|req"],
    n: 1,
  },
  {
    hint: "korte code: TKT plus vijf cijfers (zonder scheidingsteken)",
    keys: ["ticket|TKT|digits5||-|req"],
    n: 2,
  },
  {
    hint: "korte code: TKT. plus drie cijfers (delen gescheiden door punten)",
    keys: ["ticket|TKT|digits3|.|-|req"],
    n: 1,
  },
  {
    hint: "korte code: TKT/ plus acht tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|TKT|alnum8|/|-|req"],
    n: 2,
  },
  {
    hint: "korte code: TKT/ plus negen tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|TKT|alnum9|/|-|req"],
    n: 2,
  },
  {
    hint: "korte code: VERG plus zeven tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["licence|VERG|alnum7||-|req"],
    n: 1,
  },
  {
    hint: "korte code: ZD plus acht tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["case|ZD|alnum8||-|req"],
    n: 1,
  },
  {
    hint: "korte code: ZD plus vijf cijfers (zonder scheidingsteken)",
    keys: ["case|ZD|digits5||-|req"],
    n: 2,
  },
  {
    hint: "korte code: ZD/ plus negen cijfers (delen gescheiden door schuine strepen)",
    keys: ["case|ZD|digits9|/|-|req"],
    n: 2,
  },
  {
    hint: "ons interne nummer, zes cijfers, met een punt ertussen",
    keys: ["project||digits3,digits3|.|-|req"],
    n: 11,
  },
  {
    hint: "project code in a fixed shape: starts with P and ends with seven digits, with the year 2026 included (without separators)",
    keys: ["project|P|digits7||2026|req"],
    n: 1,
  },
  {
    hint: "project code in a fixed shape: starts with P and ends with three digits, with the year 2024 included (without separators)",
    keys: ["project|P|digits3||2024|req"],
    n: 1,
  },
  {
    hint: "project code in a fixed shape: starts with P- and ends with nine digits, with the year 2024 included (parts separated by hyphens)",
    keys: ["project|P|digits9|-|2024|req"],
    n: 1,
  },
  {
    hint: "project code in a fixed shape: starts with P- and ends with seven digits, with the year 2027 included (parts separated by hyphens)",
    keys: ["project|P|digits7|-|2027|req"],
    n: 1,
  },
  {
    hint: "project code in a fixed shape: starts with P- and ends with ten digits, with the year 2026 included (parts separated by hyphens)",
    keys: ["project|P|digits10|-|2026|req"],
    n: 1,
  },
  {
    hint: "project code in a fixed shape: starts with P- and ends with two letters and five digits, with the year 2025 included (parts separated by hyphens)",
    keys: ["project|P|letters2,digits5|-|2025|req"],
    n: 1,
  },
  {
    hint: "project code in a fixed shape: starts with P. and ends with nine digits, with the year 2027 included (parts separated by dots)",
    keys: ["project|P|digits9|.|2027|req"],
    n: 1,
  },
  {
    hint: "project code in a fixed shape: starts with P. and ends with six digits, with the year 2024 included (parts separated by dots)",
    keys: ["project|P|digits6|.|2024|req"],
    n: 1,
  },
  {
    hint: "project code in a fixed shape: starts with P. and ends with six digits, with the year 2025 included (parts separated by dots)",
    keys: ["project|P|digits6|.|2025|req"],
    n: 1,
  },
  {
    hint: "project code in a fixed shape: starts with PRJ and ends with five digits, with the year 2024 included (without separators)",
    keys: ["project|PRJ|digits5||2024|req"],
    n: 1,
  },
  {
    hint: "project code in a fixed shape: starts with PRJ and ends with seven digits, with the year 2026 included (without separators)",
    keys: ["project|PRJ|digits7||2026|req"],
    n: 1,
  },
  {
    hint: "project code in a fixed shape: starts with PRJ- and ends with four digits, with the year 2027 included (parts separated by hyphens)",
    keys: ["project|PRJ|digits4|-|2027|req"],
    n: 1,
  },
  {
    hint: "project code in a fixed shape: starts with PRJ- and ends with three digits, with the year 2024 included (parts separated by hyphens)",
    keys: ["project|PRJ|digits3|-|2024|req"],
    n: 1,
  },
  {
    hint: "project code in a fixed shape: starts with PRJ/ and ends with eight characters mixing letters and digits (parts separated by slashes)",
    keys: ["project|PRJ|alnum8|/|-|req"],
    n: 1,
  },
  {
    hint: "project code in a fixed shape: starts with PRJ/ and ends with nine digits (parts separated by slashes)",
    keys: ["project|PRJ|digits9|/|-|req"],
    n: 1,
  },
  {
    hint: "project code in a fixed shape: starts with PROJ and ends with eight digits, with the year 2026 included (without separators)",
    keys: ["project|PROJ|digits8||2026|req"],
    n: 1,
  },
  {
    hint: "project code in a fixed shape: starts with PROJ and ends with six digits, with the year 2027 included (without separators)",
    keys: ["project|PROJ|digits6||2027|req"],
    n: 1,
  },
  {
    hint: "project code in a fixed shape: starts with PROJ- and ends with nine characters mixing letters and digits, with the year 2027 included (parts separated by hyphens)",
    keys: ["project|PROJ|alnum9|-|2027|req"],
    n: 1,
  },
  {
    hint: "project code in a fixed shape: starts with PROJ- and ends with nine digits, with the year 2026 included (parts separated by hyphens)",
    keys: ["project|PROJ|digits9|-|2026|req"],
    n: 1,
  },
  {
    hint: "project code in a fixed shape: starts with PROJ. and ends with eight characters mixing letters and digits (parts separated by dots)",
    keys: ["project|PROJ|alnum8|.|-|req"],
    n: 1,
  },
  {
    hint: "project code in a fixed shape: starts with PROJ. and ends with two letters and five digits, with the year 2025 included (parts separated by dots)",
    keys: ["project|PROJ|letters2,digits5|.|2025|req"],
    n: 2,
  },
  {
    hint: "project code in a fixed shape: starts with PROJ/ and ends with eight digits, with the year 2026 included (parts separated by slashes)",
    keys: ["project|PROJ|digits8|/|2026|req"],
    n: 1,
  },
  {
    hint: "project code in a fixed shape: starts with PROJ/ and ends with five digits, with the year 2024 included (parts separated by slashes)",
    keys: ["project|PROJ|digits5|/|2024|req"],
    n: 2,
  },
  {
    hint: "project code in a fixed shape: starts with PROJ/ and ends with nine digits (parts separated by slashes)",
    keys: ["project|PROJ|digits9|/|-|req"],
    n: 1,
  },
  {
    hint: "project code in a fixed shape: starts with PROJ/ and ends with six characters mixing letters and digits, with the year 2024 included (parts separated by slashes)",
    keys: ["project|PROJ|alnum6|/|2024|req"],
    n: 1,
  },
  {
    hint: "project code in a fixed shape: starts with PROJ/ and ends with two letters and five digits (parts separated by slashes)",
    keys: ["project|PROJ|letters2,digits5|/|-|req"],
    n: 1,
  },
  {
    hint: "projectnummer met vaste opbouw: begint met P en eindigt met drie cijfers, met het jaartal 2024 erin (zonder scheidingsteken)",
    keys: ["project|P|digits3||2024|req"],
    n: 1,
  },
  {
    hint: "projectnummer met vaste opbouw: begint met P en eindigt met zes tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["project|P|alnum6||-|req"],
    n: 1,
  },
  {
    hint: "projectnummer met vaste opbouw: begint met P- en eindigt met drie cijfers, met het jaartal 2025 erin (delen gescheiden door koppeltekens)",
    keys: ["project|P|digits3|-|2025|req"],
    n: 2,
  },
  {
    hint: "projectnummer met vaste opbouw: begint met P- en eindigt met twee letters en vijf cijfers, met het jaartal 2027 erin (delen gescheiden door koppeltekens)",
    keys: ["project|P|letters2,digits5|-|2027|req"],
    n: 1,
  },
  {
    hint: "projectnummer met vaste opbouw: begint met P- en eindigt met zeven cijfers, met het jaartal 2024 erin (delen gescheiden door koppeltekens)",
    keys: ["project|P|digits7|-|2024|req"],
    n: 1,
  },
  {
    hint: "projectnummer met vaste opbouw: begint met P- en eindigt met zeven cijfers, met het jaartal 2027 erin (delen gescheiden door koppeltekens)",
    keys: ["project|P|digits7|-|2027|req"],
    n: 1,
  },
  {
    hint: "projectnummer met vaste opbouw: begint met P- en eindigt met zeven tekens met letters en cijfers, met het jaartal 2025 erin (delen gescheiden door koppeltekens)",
    keys: ["project|P|alnum7|-|2025|req"],
    n: 1,
  },
  {
    hint: "projectnummer met vaste opbouw: begint met P. en eindigt met zes cijfers, met het jaartal 2024 erin (delen gescheiden door punten)",
    keys: ["project|P|digits6|.|2024|req"],
    n: 1,
  },
  {
    hint: "projectnummer met vaste opbouw: begint met P/ en eindigt met acht tekens met letters en cijfers, met het jaartal 2025 erin (delen gescheiden door schuine strepen)",
    keys: ["project|P|alnum8|/|2025|req"],
    n: 1,
  },
  {
    hint: "projectnummer met vaste opbouw: begint met P/ en eindigt met vier cijfers, met het jaartal 2025 erin (delen gescheiden door schuine strepen)",
    keys: ["project|P|digits4|/|2025|req"],
    n: 1,
  },
  {
    hint: "projectnummer met vaste opbouw: begint met PRJ en eindigt met tien cijfers, met het jaartal 2024 erin (zonder scheidingsteken)",
    keys: ["project|PRJ|digits10||2024|req"],
    n: 2,
  },
  {
    hint: "projectnummer met vaste opbouw: begint met PRJ- en eindigt met drie cijfers, met het jaartal 2024 erin (delen gescheiden door koppeltekens)",
    keys: ["project|PRJ|digits3|-|2024|req"],
    n: 1,
  },
  {
    hint: "projectnummer met vaste opbouw: begint met PRJ- en eindigt met vier cijfers, met het jaartal 2027 erin (delen gescheiden door koppeltekens)",
    keys: ["project|PRJ|digits4|-|2027|req"],
    n: 1,
  },
  {
    hint: "projectnummer met vaste opbouw: begint met PRJ. en eindigt met tien cijfers, met het jaartal 2027 erin (delen gescheiden door punten)",
    keys: ["project|PRJ|digits10|.|2027|req"],
    n: 1,
  },
  {
    hint: "projectnummer met vaste opbouw: begint met PRJ/ en eindigt met vijf cijfers, met het jaartal 2025 erin (delen gescheiden door schuine strepen)",
    keys: ["project|PRJ|digits5|/|2025|req"],
    n: 2,
  },
  {
    hint: "projectnummer met vaste opbouw: begint met PROJ- en eindigt met negen cijfers, met het jaartal 2025 erin (delen gescheiden door koppeltekens)",
    keys: ["project|PROJ|digits9|-|2025|req"],
    n: 2,
  },
  {
    hint: "projectnummer met vaste opbouw: begint met PROJ- en eindigt met negen cijfers, met het jaartal 2026 erin (delen gescheiden door koppeltekens)",
    keys: ["project|PROJ|digits9|-|2026|req"],
    n: 1,
  },
  {
    hint: "projectnummer met vaste opbouw: begint met PROJ. en eindigt met zeven tekens met letters en cijfers, met het jaartal 2025 erin (delen gescheiden door punten)",
    keys: ["project|PROJ|alnum7|.|2025|req"],
    n: 1,
  },
  {
    hint: "projectnummer met vaste opbouw: begint met PROJ/ en eindigt met acht cijfers, met het jaartal 2026 erin (delen gescheiden door schuine strepen)",
    keys: ["project|PROJ|digits8|/|2026|req"],
    n: 1,
  },
  {
    hint: "projectnummer met vaste opbouw: begint met PROJ/ en eindigt met negen cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PROJ|digits9|/|-|req"],
    n: 1,
  },
  {
    hint: "projectnummer met vaste opbouw: begint met PROJ/ en eindigt met zes tekens met letters en cijfers, met het jaartal 2024 erin (delen gescheiden door schuine strepen)",
    keys: ["project|PROJ|alnum6|/|2024|req"],
    n: 1,
  },
  {
    hint: "short code with a year: AST plus nine digits (without separators)",
    keys: ["asset|AST|digits9||2026|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: AST- plus eight digits (parts separated by hyphens)",
    keys: ["asset|AST|digits8|-|2024|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: AST- plus nine digits (parts separated by hyphens)",
    keys: ["asset|AST|digits9|-|2027|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: AST- plus two letters and five digits (parts separated by hyphens)",
    keys: ["asset|AST|letters2,digits5|-|2024|opt", "asset|AST|letters2,digits5|-|2027|opt"],
    n: 3,
  },
  {
    hint: "short code with a year: AST. plus eight characters mixing letters and digits (parts separated by dots)",
    keys: ["asset|AST|alnum8|.|2024|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: AST. plus three digits (parts separated by dots)",
    keys: ["asset|AST|digits3|.|2025|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: AST/ plus nine characters mixing letters and digits (parts separated by slashes)",
    keys: ["asset|AST|alnum9|/|2027|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: AST/ plus seven digits (parts separated by slashes)",
    keys: ["asset|AST|digits7|/|2026|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: BATCH plus nine digits (without separators)",
    keys: ["batch|BATCH|digits9||2025|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: BATCH plus seven characters mixing letters and digits (without separators)",
    keys: ["batch|BATCH|alnum7||2024|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: BATCH plus six characters mixing letters and digits (without separators)",
    keys: ["batch|BATCH|alnum6||2024|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: BATCH plus six digits (without separators)",
    keys: ["batch|BATCH|digits6||2025|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: BATCH- plus eight characters mixing letters and digits (parts separated by hyphens)",
    keys: ["batch|BATCH|alnum8|-|2027|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: BATCH- plus seven digits (parts separated by hyphens)",
    keys: ["batch|BATCH|digits7|-|2026|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: BATCH- plus three digits (parts separated by hyphens)",
    keys: ["batch|BATCH|digits3|-|2027|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: BATCH. plus eight characters mixing letters and digits (parts separated by dots)",
    keys: ["batch|BATCH|alnum8|.|2025|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: BATCH. plus eight digits (parts separated by dots)",
    keys: ["batch|BATCH|digits8|.|2026|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: BATCH. plus nine digits (parts separated by dots)",
    keys: ["batch|BATCH|digits9|.|2027|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: BATCH/ plus eight digits (parts separated by slashes)",
    keys: [
      "batch|BATCH|digits8|/|2025|opt",
      "batch|BATCH|digits8|/|2026|opt",
      "batch|BATCH|digits8|/|2027|opt",
    ],
    n: 7,
  },
  {
    hint: "short code with a year: BATCH/ plus nine characters mixing letters and digits (parts separated by slashes)",
    keys: ["batch|BATCH|alnum9|/|2025|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: BATCH/ plus ten digits (parts separated by slashes)",
    keys: ["batch|BATCH|digits10|/|2026|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: CASE plus eight digits (without separators)",
    keys: ["case|CASE|digits8||2025|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: CASE plus six digits (without separators)",
    keys: ["case|CASE|digits6||2024|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: CASE plus ten digits (without separators)",
    keys: ["case|CASE|digits10||2025|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: CASE- plus two letters and five digits (parts separated by hyphens)",
    keys: ["case|CASE|letters2,digits5|-|2024|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: CASE. plus nine digits (parts separated by dots)",
    keys: ["case|CASE|digits9|.|2025|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: CASE. plus six digits (parts separated by dots)",
    keys: ["case|CASE|digits6|.|2025|opt", "case|CASE|digits6|.|2026|opt"],
    n: 4,
  },
  {
    hint: "short code with a year: CASE. plus three digits (parts separated by dots)",
    keys: ["case|CASE|digits3|.|2026|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: CASE. plus two letters and five digits (parts separated by dots)",
    keys: ["case|CASE|letters2,digits5|.|2025|opt", "case|CASE|letters2,digits5|.|2027|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: CASE/ plus nine characters mixing letters and digits (parts separated by slashes)",
    keys: ["case|CASE|alnum9|/|2027|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: CASE/ plus two letters and five digits (parts separated by slashes)",
    keys: ["case|CASE|letters2,digits5|/|2025|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: CH plus nine characters mixing letters and digits (without separators)",
    keys: ["batch|CH|alnum9||2026|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: CH- plus nine digits (parts separated by hyphens)",
    keys: ["batch|CH|digits9|-|2026|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: CH- plus six characters mixing letters and digits (parts separated by hyphens)",
    keys: ["batch|CH|alnum6|-|2026|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: CH. plus eight characters mixing letters and digits (parts separated by dots)",
    keys: ["batch|CH|alnum8|.|2024|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: CH. plus four digits (parts separated by dots)",
    keys: ["batch|CH|digits4|.|2027|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: CH/ plus seven digits (parts separated by slashes)",
    keys: ["batch|CH|digits7|/|2026|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: DOSS plus five digits (without separators)",
    keys: ["case|DOSS|digits5||2027|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: DOSS plus seven characters mixing letters and digits (without separators)",
    keys: ["case|DOSS|alnum7||2026|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: DOSS- plus seven digits (parts separated by hyphens)",
    keys: ["case|DOSS|digits7|-|2026|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: DOSS. plus nine characters mixing letters and digits (parts separated by dots)",
    keys: ["case|DOSS|alnum9|.|2025|opt", "case|DOSS|alnum9|.|2026|opt"],
    n: 3,
  },
  {
    hint: "short code with a year: DOSS. plus seven digits (parts separated by dots)",
    keys: ["case|DOSS|digits7|.|2025|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: DOSS. plus two letters and five digits (parts separated by dots)",
    keys: ["case|DOSS|letters2,digits5|.|2025|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: DOSS/ plus eight digits (parts separated by slashes)",
    keys: ["case|DOSS|digits8|/|2027|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: INC plus five digits (without separators)",
    keys: ["ticket|INC|digits5||2024|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: INC plus four digits (without separators)",
    keys: ["ticket|INC|digits4||2024|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: INC plus nine characters mixing letters and digits (without separators)",
    keys: ["ticket|INC|alnum9||2026|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: INC plus three digits (without separators)",
    keys: ["ticket|INC|digits3||2024|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: INC- plus eight characters mixing letters and digits (parts separated by hyphens)",
    keys: ["ticket|INC|alnum8|-|2027|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: INC- plus seven characters mixing letters and digits (parts separated by hyphens)",
    keys: ["ticket|INC|alnum7|-|2026|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: INC- plus two letters and five digits (parts separated by hyphens)",
    keys: ["ticket|INC|letters2,digits5|-|2024|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: INS/ plus seven digits (parts separated by slashes)",
    keys: ["registration|INS|digits7|/|2026|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: LAB plus five digits (without separators)",
    keys: ["specimen|LAB|digits5||2025|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: LAB/ plus nine characters mixing letters and digits (parts separated by slashes)",
    keys: ["specimen|LAB|alnum9|/|2025|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: LIC- plus eight digits (parts separated by hyphens)",
    keys: ["licence|LIC|digits8|-|2027|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: LIC- plus two digits and two letters and two digits (parts separated by hyphens)",
    keys: ["licence|LIC|digits2,letters2,digits2|-|2025|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: LOT plus seven characters mixing letters and digits (without separators)",
    keys: ["batch|LOT|alnum7||2024|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: LOT- plus five digits (parts separated by hyphens)",
    keys: ["batch|LOT|digits5|-|2024|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: LOT- plus nine digits (parts separated by hyphens)",
    keys: ["batch|LOT|digits9|-|2027|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: LOT. plus four digits (parts separated by dots)",
    keys: ["batch|LOT|digits4|.|2024|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: LOT. plus three digits (parts separated by dots)",
    keys: ["batch|LOT|digits3|.|2027|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: LOT. plus two letters and five digits (parts separated by dots)",
    keys: ["batch|LOT|letters2,digits5|.|2027|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: LOT/ plus five digits (parts separated by slashes)",
    keys: ["batch|LOT|digits5|/|2027|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: LOT/ plus four digits (parts separated by slashes)",
    keys: ["batch|LOT|digits4|/|2024|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: LOT/ plus nine digits (parts separated by slashes)",
    keys: ["batch|LOT|digits9|/|2025|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: LOT/ plus two letters and five digits (parts separated by slashes)",
    keys: ["batch|LOT|letters2,digits5|/|2024|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: MID plus nine characters mixing letters and digits (without separators)",
    keys: ["asset|MID|alnum9||2024|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: MID plus seven digits (without separators)",
    keys: ["asset|MID|digits7||2025|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: MID plus six digits (without separators)",
    keys: ["asset|MID|digits6||2024|opt", "asset|MID|digits6||2027|opt"],
    n: 3,
  },
  {
    hint: "short code with a year: MID- plus nine digits (parts separated by hyphens)",
    keys: ["asset|MID|digits9|-|2024|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: MID- plus six characters mixing letters and digits (parts separated by hyphens)",
    keys: ["asset|MID|alnum6|-|2027|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: MID- plus six digits (parts separated by hyphens)",
    keys: ["asset|MID|digits6|-|2026|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: MID- plus three digits (parts separated by hyphens)",
    keys: ["asset|MID|digits3|-|2024|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: MID. plus four digits (parts separated by dots)",
    keys: ["asset|MID|digits4|.|2025|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: MID/ plus seven characters mixing letters and digits (parts separated by slashes)",
    keys: ["asset|MID|alnum7|/|2026|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: MON plus five digits (without separators)",
    keys: ["specimen|MON|digits5||2026|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: MON. plus eight characters mixing letters and digits (parts separated by dots)",
    keys: ["specimen|MON|alnum8|.|2027|opt"],
    n: 4,
  },
  {
    hint: "short code with a year: OBJ plus nine characters mixing letters and digits (without separators)",
    keys: ["asset|OBJ|alnum9||2025|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: OBJ plus nine digits (without separators)",
    keys: ["asset|OBJ|digits9||2024|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: OBJ plus six digits (without separators)",
    keys: ["asset|OBJ|digits6||2027|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: OBJ- plus nine characters mixing letters and digits (parts separated by hyphens)",
    keys: ["asset|OBJ|alnum9|-|2026|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: OBJ- plus six characters mixing letters and digits (parts separated by hyphens)",
    keys: ["asset|OBJ|alnum6|-|2024|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: OBJ. plus eight characters mixing letters and digits (parts separated by dots)",
    keys: ["asset|OBJ|alnum8|.|2026|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: OBJ. plus six digits (parts separated by dots)",
    keys: ["asset|OBJ|digits6|.|2025|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: OBJ. plus two letters and five digits (parts separated by dots)",
    keys: ["asset|OBJ|letters2,digits5|.|2024|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: P plus seven digits (without separators)",
    keys: ["project|P|digits7||2026|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: P- plus nine characters mixing letters and digits (parts separated by hyphens)",
    keys: ["project|P|alnum9|-|2026|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: P- plus seven characters mixing letters and digits (parts separated by hyphens)",
    keys: ["project|P|alnum7|-|2025|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: P- plus seven digits (parts separated by hyphens)",
    keys: ["project|P|digits7|-|2024|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: P- plus two letters and five digits (parts separated by hyphens)",
    keys: ["project|P|letters2,digits5|-|2025|opt", "project|P|letters2,digits5|-|2027|opt"],
    n: 3,
  },
  {
    hint: "short code with a year: P. plus four characters mixing letters and digits and four digits (parts separated by dots)",
    keys: ["project|P|alnum4,digits4|.|2026|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: P. plus nine digits (parts separated by dots)",
    keys: ["project|P|digits9|.|2027|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: P. plus six digits (parts separated by dots)",
    keys: ["project|P|digits6|.|2024|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: P. plus three digits (parts separated by dots)",
    keys: ["project|P|digits3|.|2025|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: P/ plus eight characters mixing letters and digits (parts separated by slashes)",
    keys: ["project|P|alnum8|/|2025|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: P/ plus four digits (parts separated by slashes)",
    keys: ["project|P|digits4|/|2025|opt", "project|P|digits4|/|2027|opt"],
    n: 4,
  },
  {
    hint: "short code with a year: P/ plus six digits (parts separated by slashes)",
    keys: ["project|P|digits6|/|2024|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: P/ plus ten digits (parts separated by slashes)",
    keys: ["project|P|digits10|/|2025|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: PER- plus three digits (parts separated by hyphens)",
    keys: ["permit|PER|digits3|-|2025|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: PER. plus four characters mixing letters and digits and four digits (parts separated by dots)",
    keys: ["permit|PER|alnum4,digits4|.|2024|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: PER. plus two letters and five digits (parts separated by dots)",
    keys: ["permit|PER|letters2,digits5|.|2024|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: PRJ plus five digits (without separators)",
    keys: ["project|PRJ|digits5||2024|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: PRJ plus nine digits (without separators)",
    keys: ["project|PRJ|digits9||2024|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: PRJ plus seven digits (without separators)",
    keys: ["project|PRJ|digits7||2026|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: PRJ plus ten digits (without separators)",
    keys: ["project|PRJ|digits10||2024|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: PRJ- plus four digits (parts separated by hyphens)",
    keys: ["project|PRJ|digits4|-|2027|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: PRJ- plus three digits (parts separated by hyphens)",
    keys: ["project|PRJ|digits3|-|2024|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: PRJ. plus ten digits (parts separated by dots)",
    keys: ["project|PRJ|digits10|.|2027|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: PRJ/ plus five digits (parts separated by slashes)",
    keys: ["project|PRJ|digits5|/|2025|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: PRJ/ plus nine characters mixing letters and digits (parts separated by slashes)",
    keys: ["project|PRJ|alnum9|/|2024|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: PRJ/ plus seven characters mixing letters and digits (parts separated by slashes)",
    keys: ["project|PRJ|alnum7|/|2027|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: PRJ/ plus six characters mixing letters and digits (parts separated by slashes)",
    keys: ["project|PRJ|alnum6|/|2026|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: PRJ/ plus six digits (parts separated by slashes)",
    keys: ["project|PRJ|digits6|/|2026|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: PRJ/ plus three digits (parts separated by slashes)",
    keys: ["project|PRJ|digits3|/|2027|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: PROJ plus five digits (without separators)",
    keys: ["project|PROJ|digits5||2025|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: PROJ plus nine digits (without separators)",
    keys: ["project|PROJ|digits9||2025|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: PROJ plus six characters mixing letters and digits (without separators)",
    keys: ["project|PROJ|alnum6||2025|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: PROJ plus six digits (without separators)",
    keys: ["project|PROJ|digits6||2027|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: PROJ- plus five digits (parts separated by hyphens)",
    keys: ["project|PROJ|digits5|-|2025|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: PROJ- plus nine digits (parts separated by hyphens)",
    keys: ["project|PROJ|digits9|-|2025|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: PROJ. plus seven characters mixing letters and digits (parts separated by dots)",
    keys: ["project|PROJ|alnum7|.|2025|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: PROJ. plus two letters and five digits (parts separated by dots)",
    keys: ["project|PROJ|letters2,digits5|.|2025|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: PROJ/ plus five digits (parts separated by slashes)",
    keys: ["project|PROJ|digits5|/|2024|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: PROJ/ plus six characters mixing letters and digits (parts separated by slashes)",
    keys: ["project|PROJ|alnum6|/|2024|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: REG. plus four digits (parts separated by dots)",
    keys: ["registration|REG|digits4|.|2027|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: REG. plus six characters mixing letters and digits (parts separated by dots)",
    keys: ["registration|REG|alnum6|.|2025|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: REG. plus three digits (parts separated by dots)",
    keys: ["registration|REG|digits3|.|2027|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: SCH. plus four characters mixing letters and digits and four digits (parts separated by dots)",
    keys: ["vessel|SCH|alnum4,digits4|.|2025|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: SD plus nine digits (without separators)",
    keys: ["ticket|SD|digits9||2025|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: SD plus three digits (without separators)",
    keys: ["ticket|SD|digits3||2024|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: SD- plus five digits (parts separated by hyphens)",
    keys: ["ticket|SD|digits5|-|2025|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: SD- plus nine characters mixing letters and digits (parts separated by hyphens)",
    keys: ["ticket|SD|alnum9|-|2025|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: SD- plus six characters mixing letters and digits (parts separated by hyphens)",
    keys: ["ticket|SD|alnum6|-|2024|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: SD- plus six digits (parts separated by hyphens)",
    keys: ["ticket|SD|digits6|-|2024|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: SD. plus eight characters mixing letters and digits (parts separated by dots)",
    keys: ["ticket|SD|alnum8|.|2025|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: SD. plus seven characters mixing letters and digits (parts separated by dots)",
    keys: ["ticket|SD|alnum7|.|2027|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: SD. plus seven digits (parts separated by dots)",
    keys: ["ticket|SD|digits7|.|2027|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: SD/ plus seven characters mixing letters and digits (parts separated by slashes)",
    keys: ["ticket|SD|alnum7|/|2027|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: SD/ plus seven digits (parts separated by slashes)",
    keys: ["ticket|SD|digits7|/|2025|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: SD/ plus six characters mixing letters and digits (parts separated by slashes)",
    keys: ["ticket|SD|alnum6|/|2024|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: SD/ plus ten digits (parts separated by slashes)",
    keys: ["ticket|SD|digits10|/|2025|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: TKT plus eight characters mixing letters and digits (without separators)",
    keys: ["ticket|TKT|alnum8||2027|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: TKT- plus six characters mixing letters and digits (parts separated by hyphens)",
    keys: ["ticket|TKT|alnum6|-|2025|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: TKT- plus six digits (parts separated by hyphens)",
    keys: ["ticket|TKT|digits6|-|2026|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: TKT- plus two letters and five digits (parts separated by hyphens)",
    keys: ["ticket|TKT|letters2,digits5|-|2025|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: TKT. plus eight digits (parts separated by dots)",
    keys: ["ticket|TKT|digits8|.|2024|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: TKT. plus nine digits (parts separated by dots)",
    keys: ["ticket|TKT|digits9|.|2026|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: TKT. plus seven characters mixing letters and digits (parts separated by dots)",
    keys: ["ticket|TKT|alnum7|.|2026|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: TKT. plus two letters and five digits (parts separated by dots)",
    keys: ["ticket|TKT|letters2,digits5|.|2026|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: TKT/ plus nine digits (parts separated by slashes)",
    keys: ["ticket|TKT|digits9|/|2026|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: VERG. plus eight digits (parts separated by dots)",
    keys: ["licence|VERG|digits8|.|2026|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: VRT- plus two letters and two digits and two letters (parts separated by hyphens)",
    keys: ["vessel|VRT|letters2,digits2,letters2|-|2027|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: ZD plus three digits (without separators)",
    keys: ["case|ZD|digits3||2025|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: ZD- plus nine characters mixing letters and digits (parts separated by hyphens)",
    keys: ["case|ZD|alnum9|-|2025|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: ZD- plus nine digits (parts separated by hyphens)",
    keys: ["case|ZD|digits9|-|2024|opt", "case|ZD|digits9|-|2025|opt"],
    n: 3,
  },
  {
    hint: "short code with a year: ZD- plus seven digits (parts separated by hyphens)",
    keys: ["case|ZD|digits7|-|2027|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: ZD. plus eight digits (parts separated by dots)",
    keys: ["case|ZD|digits8|.|2026|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: ZD. plus five digits (parts separated by dots)",
    keys: ["case|ZD|digits5|.|2025|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: ZD. plus nine digits (parts separated by dots)",
    keys: ["case|ZD|digits9|.|2025|opt"],
    n: 1,
  },
  {
    hint: "short code with a year: ZD/ plus eight digits (parts separated by slashes)",
    keys: ["case|ZD|digits8|/|2026|opt"],
    n: 2,
  },
  {
    hint: "short code with a year: ZD/ plus seven characters mixing letters and digits (parts separated by slashes)",
    keys: ["case|ZD|alnum7|/|2024|opt"],
    n: 1,
  },
  {
    hint: "short code: BATCH- plus six characters mixing letters and digits (parts separated by hyphens)",
    keys: ["batch|BATCH|alnum6|-|-|req"],
    n: 1,
  },
  {
    hint: "short code: BATCH. plus seven characters mixing letters and digits (parts separated by dots)",
    keys: ["batch|BATCH|alnum7|.|-|req"],
    n: 2,
  },
  {
    hint: "short code: BATCH. plus two digits and two letters and two digits (parts separated by dots)",
    keys: ["batch|BATCH|digits2,letters2,digits2|.|-|req"],
    n: 1,
  },
  {
    hint: "short code: BATCH/ plus four digits (parts separated by slashes)",
    keys: ["batch|BATCH|digits4|/|-|req"],
    n: 1,
  },
  {
    hint: "short code: CASE- plus two letters and five digits (parts separated by hyphens)",
    keys: ["case|CASE|letters2,digits5|-|-|req"],
    n: 2,
  },
  {
    hint: "short code: CASE. plus eight digits (parts separated by dots)",
    keys: ["case|CASE|digits8|.|-|req"],
    n: 2,
  },
  {
    hint: "short code: CASE. plus five digits (parts separated by dots)",
    keys: ["case|CASE|digits5|.|-|req"],
    n: 2,
  },
  {
    hint: "short code: CH- plus ten digits (parts separated by hyphens)",
    keys: ["batch|CH|digits10|-|-|req"],
    n: 1,
  },
  {
    hint: "short code: CH- plus two letters and five digits (parts separated by hyphens)",
    keys: ["batch|CH|letters2,digits5|-|-|req"],
    n: 1,
  },
  {
    hint: "short code: CH. plus eight digits (parts separated by dots)",
    keys: ["batch|CH|digits8|.|-|req"],
    n: 1,
  },
  {
    hint: "short code: DOSS plus five digits (without separators)",
    keys: ["case|DOSS|digits5||-|req"],
    n: 1,
  },
  {
    hint: "short code: DOSS. plus seven characters mixing letters and digits (parts separated by dots)",
    keys: ["case|DOSS|alnum7|.|-|req"],
    n: 1,
  },
  {
    hint: "short code: DOSS. plus six digits (parts separated by dots)",
    keys: ["case|DOSS|digits6|.|-|req"],
    n: 2,
  },
  {
    hint: "short code: DOSS/ plus five digits (parts separated by slashes)",
    keys: ["case|DOSS|digits5|/|-|req"],
    n: 1,
  },
  {
    hint: "short code: DOSS/ plus two letters and five digits (parts separated by slashes)",
    keys: ["case|DOSS|letters2,digits5|/|-|req"],
    n: 3,
  },
  {
    hint: "short code: INC- plus eight digits (parts separated by hyphens)",
    keys: ["ticket|INC|digits8|-|-|req"],
    n: 1,
  },
  {
    hint: "short code: INC- plus seven characters mixing letters and digits (parts separated by hyphens)",
    keys: ["ticket|INC|alnum7|-|-|req"],
    n: 1,
  },
  {
    hint: "short code: INC. plus three digits (parts separated by dots)",
    keys: ["ticket|INC|digits3|.|-|req"],
    n: 2,
  },
  {
    hint: "short code: INC/ plus six digits (parts separated by slashes)",
    keys: ["ticket|INC|digits6|/|-|req"],
    n: 1,
  },
  {
    hint: "short code: LIC/ plus three digits (parts separated by slashes)",
    keys: ["licence|LIC|digits3|/|-|req"],
    n: 3,
  },
  {
    hint: "short code: LOT/ plus eight characters mixing letters and digits (parts separated by slashes)",
    keys: ["batch|LOT|alnum8|/|-|req"],
    n: 1,
  },
  {
    hint: "short code: MID plus four digits (without separators)",
    keys: ["asset|MID|digits4||-|req"],
    n: 1,
  },
  {
    hint: "short code: MID. plus four digits (parts separated by dots)",
    keys: ["asset|MID|digits4|.|-|req"],
    n: 1,
  },
  {
    hint: "short code: MID/ plus nine characters mixing letters and digits (parts separated by slashes)",
    keys: ["asset|MID|alnum9|/|-|req"],
    n: 1,
  },
  {
    hint: "short code: MID/ plus six characters mixing letters and digits (parts separated by slashes)",
    keys: ["asset|MID|alnum6|/|-|req"],
    n: 1,
  },
  {
    hint: "short code: MON/ plus seven characters mixing letters and digits (parts separated by slashes)",
    keys: ["specimen|MON|alnum7|/|-|req"],
    n: 2,
  },
  {
    hint: "short code: OBJ. plus eight digits (parts separated by dots)",
    keys: ["asset|OBJ|digits8|.|-|req"],
    n: 1,
  },
  {
    hint: "short code: P plus seven characters mixing letters and digits (without separators)",
    keys: ["project|P|alnum7||-|req"],
    n: 1,
  },
  {
    hint: "short code: P plus six characters mixing letters and digits (without separators)",
    keys: ["project|P|alnum6||-|req"],
    n: 1,
  },
  {
    hint: "short code: PRJ/ plus eight characters mixing letters and digits (parts separated by slashes)",
    keys: ["project|PRJ|alnum8|/|-|req"],
    n: 1,
  },
  {
    hint: "short code: PRJ/ plus eight digits (parts separated by slashes)",
    keys: ["project|PRJ|digits8|/|-|req"],
    n: 1,
  },
  {
    hint: "short code: PRJ/ plus six characters mixing letters and digits (parts separated by slashes)",
    keys: ["project|PRJ|alnum6|/|-|req"],
    n: 1,
  },
  {
    hint: "short code: PRJ/ plus two letters and five digits (parts separated by slashes)",
    keys: ["project|PRJ|letters2,digits5|/|-|req"],
    n: 1,
  },
  {
    hint: "short code: PROJ plus three digits (without separators)",
    keys: ["project|PROJ|digits3||-|req"],
    n: 2,
  },
  {
    hint: "short code: PROJ. plus eight characters mixing letters and digits (parts separated by dots)",
    keys: ["project|PROJ|alnum8|.|-|req"],
    n: 1,
  },
  {
    hint: "short code: PROJ. plus two letters and two digits and two letters (parts separated by dots)",
    keys: ["project|PROJ|letters2,digits2,letters2|.|-|req"],
    n: 1,
  },
  {
    hint: "short code: PROJ/ plus nine digits (parts separated by slashes)",
    keys: ["project|PROJ|digits9|/|-|req"],
    n: 1,
  },
  {
    hint: "short code: PROJ/ plus two letters and five digits (parts separated by slashes)",
    keys: ["project|PROJ|letters2,digits5|/|-|req"],
    n: 2,
  },
  {
    hint: "short code: REG/ plus five digits (parts separated by slashes)",
    keys: ["registration|REG|digits5|/|-|req"],
    n: 1,
  },
  {
    hint: "short code: SCH/ plus six digits (parts separated by slashes)",
    keys: ["vessel|SCH|digits6|/|-|req"],
    n: 2,
  },
  {
    hint: "short code: SD plus six digits (without separators)",
    keys: ["ticket|SD|digits6||-|req"],
    n: 1,
  },
  {
    hint: "short code: TKT plus five digits (without separators)",
    keys: ["ticket|TKT|digits5||-|req"],
    n: 1,
  },
  {
    hint: "short code: TKT. plus three digits (parts separated by dots)",
    keys: ["ticket|TKT|digits3|.|-|req"],
    n: 1,
  },
  {
    hint: "short code: VERG plus seven characters mixing letters and digits (without separators)",
    keys: ["licence|VERG|alnum7||-|req"],
    n: 2,
  },
  {
    hint: "short code: VRT/ plus six characters mixing letters and digits (parts separated by slashes)",
    keys: ["vessel|VRT|alnum6|/|-|req"],
    n: 1,
  },
  {
    hint: "short code: ZD plus nine characters mixing letters and digits (without separators)",
    keys: ["case|ZD|alnum9||-|req"],
    n: 1,
  },
  {
    hint: "short code: ZD plus six characters mixing letters and digits (without separators)",
    keys: ["case|ZD|alnum6||-|req"],
    n: 1,
  },
  {
    hint: "short code: ZD/ plus nine digits (parts separated by slashes)",
    keys: ["case|ZD|digits9|/|-|req"],
    n: 2,
  },
  {
    hint: "ticketnummer zoals INC-2026- en dan vijf cijfers",
    keys: ["ticket|INC|digits5|-|2026|req"],
    n: 15,
  },
  {
    hint: "verzin een assetcode: begint met AST, dan het jaartal, en bevat negen cijfers (zonder scheidingsteken)",
    keys: ["asset|AST|digits9||2026|opt"],
    n: 1,
  },
  {
    hint: "verzin een assetcode: begint met AST, dan het jaartal, en bevat negen tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["asset|AST|alnum9||2026|opt"],
    n: 2,
  },
  {
    hint: "verzin een assetcode: begint met AST-, dan het jaartal, en bevat negen cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|AST|digits9|-|2027|opt"],
    n: 1,
  },
  {
    hint: "verzin een assetcode: begint met AST-, dan het jaartal, en bevat twee letters en vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|AST|letters2,digits5|-|2024|opt"],
    n: 1,
  },
  {
    hint: "verzin een assetcode: begint met AST., dan het jaartal, en bevat drie cijfers (delen gescheiden door punten)",
    keys: ["asset|AST|digits3|.|2025|opt"],
    n: 1,
  },
  {
    hint: "verzin een assetcode: begint met AST., en bevat drie cijfers (delen gescheiden door punten)",
    keys: ["asset|AST|digits3|.|-|req"],
    n: 1,
  },
  {
    hint: "verzin een assetcode: begint met AST/, dan het jaartal, en bevat zeven cijfers (delen gescheiden door schuine strepen)",
    keys: ["asset|AST|digits7|/|2026|opt"],
    n: 1,
  },
  {
    hint: "verzin een assetcode: begint met MID, dan het jaartal, en bevat negen tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["asset|MID|alnum9||2024|opt"],
    n: 1,
  },
  {
    hint: "verzin een assetcode: begint met MID, dan het jaartal, en bevat zes cijfers (zonder scheidingsteken)",
    keys: ["asset|MID|digits6||2024|opt", "asset|MID|digits6||2027|opt"],
    n: 2,
  },
  {
    hint: "verzin een assetcode: begint met MID, dan het jaartal, en bevat zeven cijfers (zonder scheidingsteken)",
    keys: ["asset|MID|digits7||2025|opt"],
    n: 1,
  },
  {
    hint: "verzin een assetcode: begint met MID, en bevat vier cijfers (zonder scheidingsteken)",
    keys: ["asset|MID|digits4||-|req"],
    n: 1,
  },
  {
    hint: "verzin een assetcode: begint met MID-, dan het jaartal, en bevat drie cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|MID|digits3|-|2024|opt"],
    n: 1,
  },
  {
    hint: "verzin een assetcode: begint met MID-, dan het jaartal, en bevat negen cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|MID|digits9|-|2024|opt"],
    n: 1,
  },
  {
    hint: "verzin een assetcode: begint met MID-, dan het jaartal, en bevat zes tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|MID|alnum6|-|2027|opt"],
    n: 1,
  },
  {
    hint: "verzin een assetcode: begint met MID-, dan het jaartal, en bevat zeven tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|MID|alnum7|-|2024|opt"],
    n: 1,
  },
  {
    hint: "verzin een assetcode: begint met MID., dan het jaartal, en bevat acht tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["asset|MID|alnum8|.|2024|opt"],
    n: 1,
  },
  {
    hint: "verzin een assetcode: begint met MID., en bevat vier cijfers (delen gescheiden door punten)",
    keys: ["asset|MID|digits4|.|-|req"],
    n: 1,
  },
  {
    hint: "verzin een assetcode: begint met MID/, dan het jaartal, en bevat zeven tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["asset|MID|alnum7|/|2026|opt"],
    n: 1,
  },
  {
    hint: "verzin een assetcode: begint met OBJ, dan het jaartal, en bevat negen cijfers (zonder scheidingsteken)",
    keys: ["asset|OBJ|digits9||2024|opt"],
    n: 1,
  },
  {
    hint: "verzin een assetcode: begint met OBJ, dan het jaartal, en bevat negen tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["asset|OBJ|alnum9||2025|opt"],
    n: 1,
  },
  {
    hint: "verzin een assetcode: begint met OBJ, dan het jaartal, en bevat zeven cijfers (zonder scheidingsteken)",
    keys: ["asset|OBJ|digits7||2027|opt"],
    n: 1,
  },
  {
    hint: "verzin een assetcode: begint met OBJ-, dan het jaartal, en bevat twee letters en vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|OBJ|letters2,digits5|-|2026|opt"],
    n: 1,
  },
  {
    hint: "verzin een assetcode: begint met OBJ-, dan het jaartal, en bevat vier cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|OBJ|digits4|-|2024|opt"],
    n: 1,
  },
  {
    hint: "verzin een assetcode: begint met OBJ-, dan het jaartal, en bevat zes tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|OBJ|alnum6|-|2025|opt"],
    n: 1,
  },
  {
    hint: "verzin een assetcode: begint met OBJ-, en bevat vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["asset|OBJ|digits5|-|-|req"],
    n: 1,
  },
  {
    hint: "verzin een assetcode: begint met OBJ., dan het jaartal, en bevat acht tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["asset|OBJ|alnum8|.|2026|opt"],
    n: 1,
  },
  {
    hint: "verzin een assetcode: begint met OBJ., dan het jaartal, en bevat negen cijfers (delen gescheiden door punten)",
    keys: ["asset|OBJ|digits9|.|2026|opt"],
    n: 2,
  },
  {
    hint: "verzin een assetcode: begint met OBJ., dan het jaartal, en bevat vijf cijfers (delen gescheiden door punten)",
    keys: ["asset|OBJ|digits5|.|2025|opt"],
    n: 1,
  },
  {
    hint: "verzin een assetcode: begint met OBJ., dan het jaartal, en bevat zeven tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["asset|OBJ|alnum7|.|2025|opt"],
    n: 1,
  },
  {
    hint: "verzin een assetcode: begint met OBJ., en bevat acht cijfers (delen gescheiden door punten)",
    keys: ["asset|OBJ|digits8|.|-|req"],
    n: 1,
  },
  {
    hint: "verzin een batchcode: begint met BATCH, dan het jaartal, en bevat negen cijfers (zonder scheidingsteken)",
    keys: ["batch|BATCH|digits9||2025|opt"],
    n: 2,
  },
  {
    hint: "verzin een batchcode: begint met BATCH, dan het jaartal, en bevat tien cijfers (zonder scheidingsteken)",
    keys: ["batch|BATCH|digits10||2027|opt"],
    n: 2,
  },
  {
    hint: "verzin een batchcode: begint met BATCH, dan het jaartal, en bevat zeven tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["batch|BATCH|alnum7||2024|opt"],
    n: 1,
  },
  {
    hint: "verzin een batchcode: begint met BATCH., dan het jaartal, en bevat acht cijfers (delen gescheiden door punten)",
    keys: ["batch|BATCH|digits8|.|2026|opt"],
    n: 2,
  },
  {
    hint: "verzin een batchcode: begint met BATCH., en bevat zeven tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["batch|BATCH|alnum7|.|-|req"],
    n: 1,
  },
  {
    hint: "verzin een batchcode: begint met BATCH/, dan het jaartal, en bevat acht cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|BATCH|digits8|/|2025|opt", "batch|BATCH|digits8|/|2026|opt"],
    n: 2,
  },
  {
    hint: "verzin een batchcode: begint met BATCH/, dan het jaartal, en bevat tien cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|BATCH|digits10|/|2026|opt"],
    n: 1,
  },
  {
    hint: "verzin een batchcode: begint met BATCH/, dan het jaartal, en bevat vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|BATCH|digits5|/|2025|opt"],
    n: 1,
  },
  {
    hint: "verzin een batchcode: begint met CH, dan het jaartal, en bevat negen tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["batch|CH|alnum9||2026|opt"],
    n: 2,
  },
  {
    hint: "verzin een batchcode: begint met CH, dan het jaartal, en bevat zeven tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["batch|CH|alnum7||2025|opt"],
    n: 1,
  },
  {
    hint: "verzin een batchcode: begint met CH-, en bevat tien cijfers (delen gescheiden door koppeltekens)",
    keys: ["batch|CH|digits10|-|-|req"],
    n: 2,
  },
  {
    hint: "verzin een batchcode: begint met CH., dan het jaartal, en bevat acht tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["batch|CH|alnum8|.|2024|opt"],
    n: 1,
  },
  {
    hint: "verzin een batchcode: begint met CH., dan het jaartal, en bevat vier cijfers (delen gescheiden door punten)",
    keys: ["batch|CH|digits4|.|2027|opt"],
    n: 1,
  },
  {
    hint: "verzin een batchcode: begint met CH/, dan het jaartal, en bevat zes cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|CH|digits6|/|2026|opt"],
    n: 1,
  },
  {
    hint: "verzin een batchcode: begint met CH/, dan het jaartal, en bevat zeven tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|CH|alnum7|/|2024|opt"],
    n: 1,
  },
  {
    hint: "verzin een batchcode: begint met CH/, en bevat zeven cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|CH|digits7|/|-|req"],
    n: 1,
  },
  {
    hint: "verzin een batchcode: begint met LOT, dan het jaartal, en bevat zes tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["batch|LOT|alnum6||2024|opt"],
    n: 1,
  },
  {
    hint: "verzin een batchcode: begint met LOT-, dan het jaartal, en bevat drie cijfers (delen gescheiden door koppeltekens)",
    keys: ["batch|LOT|digits3|-|2024|opt"],
    n: 2,
  },
  {
    hint: "verzin een batchcode: begint met LOT-, dan het jaartal, en bevat vier cijfers (delen gescheiden door koppeltekens)",
    keys: ["batch|LOT|digits4|-|2026|opt"],
    n: 1,
  },
  {
    hint: "verzin een batchcode: begint met LOT-, dan het jaartal, en bevat vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["batch|LOT|digits5|-|2024|opt"],
    n: 1,
  },
  {
    hint: "verzin een batchcode: begint met LOT-, dan het jaartal, en bevat zeven tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["batch|LOT|alnum7|-|2024|opt"],
    n: 1,
  },
  {
    hint: "verzin een batchcode: begint met LOT., dan het jaartal, en bevat twee letters en vijf cijfers (delen gescheiden door punten)",
    keys: ["batch|LOT|letters2,digits5|.|2027|opt"],
    n: 1,
  },
  {
    hint: "verzin een batchcode: begint met LOT., dan het jaartal, en bevat zes cijfers (delen gescheiden door punten)",
    keys: ["batch|LOT|digits6|.|2026|opt"],
    n: 1,
  },
  {
    hint: "verzin een batchcode: begint met LOT., dan het jaartal, en bevat zes tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["batch|LOT|alnum6|.|2026|opt"],
    n: 1,
  },
  {
    hint: "verzin een batchcode: begint met LOT., dan het jaartal, en bevat zeven cijfers (delen gescheiden door punten)",
    keys: ["batch|LOT|digits7|.|2024|opt"],
    n: 2,
  },
  {
    hint: "verzin een batchcode: begint met LOT/, dan het jaartal, en bevat twee letters en vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|LOT|letters2,digits5|/|2024|opt"],
    n: 2,
  },
  {
    hint: "verzin een batchcode: begint met LOT/, en bevat acht tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|LOT|alnum8|/|-|req"],
    n: 1,
  },
  {
    hint: "verzin een batchcode: begint met LOT/, en bevat vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["batch|LOT|digits5|/|-|req"],
    n: 1,
  },
  {
    hint: "verzin een dossiercode: begint met CASE, dan het jaartal, en bevat tien cijfers (zonder scheidingsteken)",
    keys: ["case|CASE|digits10||2025|opt"],
    n: 1,
  },
  {
    hint: "verzin een dossiercode: begint met CASE, dan het jaartal, en bevat vijf cijfers (zonder scheidingsteken)",
    keys: ["case|CASE|digits5||2026|opt"],
    n: 1,
  },
  {
    hint: "verzin een dossiercode: begint met CASE, en bevat acht cijfers (zonder scheidingsteken)",
    keys: ["case|CASE|digits8||-|req"],
    n: 1,
  },
  {
    hint: "verzin een dossiercode: begint met CASE-, dan het jaartal, en bevat zes cijfers (delen gescheiden door koppeltekens)",
    keys: ["case|CASE|digits6|-|2024|opt"],
    n: 2,
  },
  {
    hint: "verzin een dossiercode: begint met CASE., dan het jaartal, en bevat negen cijfers (delen gescheiden door punten)",
    keys: ["case|CASE|digits9|.|2025|opt"],
    n: 1,
  },
  {
    hint: "verzin een dossiercode: begint met CASE., dan het jaartal, en bevat twee letters en vijf cijfers (delen gescheiden door punten)",
    keys: ["case|CASE|letters2,digits5|.|2025|opt"],
    n: 1,
  },
  {
    hint: "verzin een dossiercode: begint met CASE., dan het jaartal, en bevat zes cijfers (delen gescheiden door punten)",
    keys: ["case|CASE|digits6|.|2026|opt"],
    n: 1,
  },
  {
    hint: "verzin een dossiercode: begint met CASE., en bevat vijf cijfers (delen gescheiden door punten)",
    keys: ["case|CASE|digits5|.|-|req"],
    n: 2,
  },
  {
    hint: "verzin een dossiercode: begint met CASE/, dan het jaartal, en bevat negen tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["case|CASE|alnum9|/|2027|opt"],
    n: 1,
  },
  {
    hint: "verzin een dossiercode: begint met CASE/, dan het jaartal, en bevat twee letters en vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["case|CASE|letters2,digits5|/|2025|opt"],
    n: 1,
  },
  {
    hint: "verzin een dossiercode: begint met DOSS, dan het jaartal, en bevat acht cijfers (zonder scheidingsteken)",
    keys: ["case|DOSS|digits8||2027|opt"],
    n: 1,
  },
  {
    hint: "verzin een dossiercode: begint met DOSS-, dan het jaartal, en bevat negen cijfers (delen gescheiden door koppeltekens)",
    keys: ["case|DOSS|digits9|-|2025|opt"],
    n: 1,
  },
  {
    hint: "verzin een dossiercode: begint met DOSS-, dan het jaartal, en bevat zeven cijfers (delen gescheiden door koppeltekens)",
    keys: ["case|DOSS|digits7|-|2026|opt"],
    n: 1,
  },
  {
    hint: "verzin een dossiercode: begint met DOSS-, en bevat drie cijfers (delen gescheiden door koppeltekens)",
    keys: ["case|DOSS|digits3|-|-|req"],
    n: 1,
  },
  {
    hint: "verzin een dossiercode: begint met DOSS., dan het jaartal, en bevat negen tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["case|DOSS|alnum9|.|2025|opt"],
    n: 2,
  },
  {
    hint: "verzin een dossiercode: begint met DOSS., dan het jaartal, en bevat zeven cijfers (delen gescheiden door punten)",
    keys: ["case|DOSS|digits7|.|2025|opt"],
    n: 1,
  },
  {
    hint: "verzin een dossiercode: begint met DOSS., en bevat acht cijfers (delen gescheiden door punten)",
    keys: ["case|DOSS|digits8|.|-|req"],
    n: 1,
  },
  {
    hint: "verzin een dossiercode: begint met DOSS., en bevat zes cijfers (delen gescheiden door punten)",
    keys: ["case|DOSS|digits6|.|-|req"],
    n: 2,
  },
  {
    hint: "verzin een dossiercode: begint met DOSS., en bevat zeven tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["case|DOSS|alnum7|.|-|req"],
    n: 1,
  },
  {
    hint: "verzin een dossiercode: begint met ZD, dan het jaartal, en bevat drie cijfers (zonder scheidingsteken)",
    keys: ["case|ZD|digits3||2025|opt", "case|ZD|digits3||2026|opt"],
    n: 2,
  },
  {
    hint: "verzin een dossiercode: begint met ZD, en bevat acht tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["case|ZD|alnum8||-|req"],
    n: 1,
  },
  {
    hint: "verzin een dossiercode: begint met ZD, en bevat vijf cijfers (zonder scheidingsteken)",
    keys: ["case|ZD|digits5||-|req"],
    n: 1,
  },
  {
    hint: "verzin een dossiercode: begint met ZD, en bevat zes tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["case|ZD|alnum6||-|req"],
    n: 2,
  },
  {
    hint: "verzin een dossiercode: begint met ZD-, dan het jaartal, en bevat negen cijfers (delen gescheiden door koppeltekens)",
    keys: ["case|ZD|digits9|-|2024|opt"],
    n: 1,
  },
  {
    hint: "verzin een dossiercode: begint met ZD-, dan het jaartal, en bevat negen tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["case|ZD|alnum9|-|2025|opt"],
    n: 1,
  },
  {
    hint: "verzin een dossiercode: begint met ZD-, dan het jaartal, en bevat twee letters en vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["case|ZD|letters2,digits5|-|2027|opt"],
    n: 1,
  },
  {
    hint: "verzin een dossiercode: begint met ZD-, dan het jaartal, en bevat zeven cijfers (delen gescheiden door koppeltekens)",
    keys: ["case|ZD|digits7|-|2027|opt"],
    n: 1,
  },
  {
    hint: "verzin een dossiercode: begint met ZD., dan het jaartal, en bevat acht cijfers (delen gescheiden door punten)",
    keys: ["case|ZD|digits8|.|2026|opt"],
    n: 1,
  },
  {
    hint: "verzin een dossiercode: begint met ZD., dan het jaartal, en bevat vijf cijfers (delen gescheiden door punten)",
    keys: ["case|ZD|digits5|.|2025|opt"],
    n: 2,
  },
  {
    hint: "verzin een dossiercode: begint met ZD/, dan het jaartal, en bevat acht cijfers (delen gescheiden door schuine strepen)",
    keys: ["case|ZD|digits8|/|2026|opt"],
    n: 1,
  },
  {
    hint: "verzin een dossiercode: begint met ZD/, dan het jaartal, en bevat vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["case|ZD|digits5|/|2024|opt"],
    n: 1,
  },
  {
    hint: "verzin een dossiercode: begint met ZD/, dan het jaartal, en bevat zes tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["case|ZD|alnum6|/|2027|opt"],
    n: 2,
  },
  {
    hint: "verzin een dossiercode: begint met ZD/, en bevat negen cijfers (delen gescheiden door schuine strepen)",
    keys: ["case|ZD|digits9|/|-|req"],
    n: 1,
  },
  {
    hint: "verzin een incidentnummer: begint met INC, dan het jaartal, en bevat negen tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["ticket|INC|alnum9||2026|opt"],
    n: 1,
  },
  {
    hint: "verzin een incidentnummer: begint met INC, dan het jaartal, en bevat zes tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["ticket|INC|alnum6||2025|opt"],
    n: 1,
  },
  {
    hint: "verzin een incidentnummer: begint met INC-, en bevat acht cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|INC|digits8|-|-|req"],
    n: 1,
  },
  {
    hint: "verzin een incidentnummer: begint met INC-, en bevat zeven tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|INC|alnum7|-|-|req"],
    n: 1,
  },
  {
    hint: "verzin een incidentnummer: begint met INC., dan het jaartal, en bevat acht tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["ticket|INC|alnum8|.|2026|opt"],
    n: 2,
  },
  {
    hint: "verzin een incidentnummer: begint met INC., dan het jaartal, en bevat vijf cijfers (delen gescheiden door punten)",
    keys: ["ticket|INC|digits5|.|2025|opt"],
    n: 1,
  },
  {
    hint: "verzin een incidentnummer: begint met INC/, dan het jaartal, en bevat drie cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|INC|digits3|/|2024|opt", "ticket|INC|digits3|/|2025|opt"],
    n: 3,
  },
  {
    hint: "verzin een incidentnummer: begint met SD, dan het jaartal, en bevat drie cijfers (zonder scheidingsteken)",
    keys: ["ticket|SD|digits3||2024|opt"],
    n: 1,
  },
  {
    hint: "verzin een incidentnummer: begint met SD, en bevat negen tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["ticket|SD|alnum9||-|req"],
    n: 1,
  },
  {
    hint: "verzin een incidentnummer: begint met SD, en bevat tien cijfers (zonder scheidingsteken)",
    keys: ["ticket|SD|digits10||-|req"],
    n: 1,
  },
  {
    hint: "verzin een incidentnummer: begint met SD, en bevat vijf cijfers (zonder scheidingsteken)",
    keys: ["ticket|SD|digits5||-|req"],
    n: 1,
  },
  {
    hint: "verzin een incidentnummer: begint met SD-, dan het jaartal, en bevat negen tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|SD|alnum9|-|2025|opt"],
    n: 1,
  },
  {
    hint: "verzin een incidentnummer: begint met SD-, dan het jaartal, en bevat vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|SD|digits5|-|2025|opt"],
    n: 1,
  },
  {
    hint: "verzin een incidentnummer: begint met SD-, dan het jaartal, en bevat zes cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|SD|digits6|-|2024|opt"],
    n: 1,
  },
  {
    hint: "verzin een incidentnummer: begint met SD-, dan het jaartal, en bevat zes tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|SD|alnum6|-|2024|opt"],
    n: 2,
  },
  {
    hint: "verzin een incidentnummer: begint met SD., dan het jaartal, en bevat negen cijfers (delen gescheiden door punten)",
    keys: ["ticket|SD|digits9|.|2024|opt"],
    n: 1,
  },
  {
    hint: "verzin een incidentnummer: begint met SD., dan het jaartal, en bevat vier cijfers (delen gescheiden door punten)",
    keys: ["ticket|SD|digits4|.|2027|opt"],
    n: 1,
  },
  {
    hint: "verzin een incidentnummer: begint met SD., dan het jaartal, en bevat zes cijfers (delen gescheiden door punten)",
    keys: ["ticket|SD|digits6|.|2025|opt"],
    n: 1,
  },
  {
    hint: "verzin een incidentnummer: begint met SD., dan het jaartal, en bevat zeven tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["ticket|SD|alnum7|.|2027|opt"],
    n: 1,
  },
  {
    hint: "verzin een incidentnummer: begint met SD/, dan het jaartal, en bevat zes tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|SD|alnum6|/|2024|opt"],
    n: 1,
  },
  {
    hint: "verzin een incidentnummer: begint met SD/, dan het jaartal, en bevat zeven tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|SD|alnum7|/|2027|opt"],
    n: 1,
  },
  {
    hint: "verzin een incidentnummer: begint met SD/, en bevat vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|SD|digits5|/|-|req"],
    n: 2,
  },
  {
    hint: "verzin een incidentnummer: begint met TKT, dan het jaartal, en bevat acht tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["ticket|TKT|alnum8||2027|opt"],
    n: 1,
  },
  {
    hint: "verzin een incidentnummer: begint met TKT, dan het jaartal, en bevat zeven cijfers (zonder scheidingsteken)",
    keys: ["ticket|TKT|digits7||2026|opt"],
    n: 2,
  },
  {
    hint: "verzin een incidentnummer: begint met TKT, en bevat vijf cijfers (zonder scheidingsteken)",
    keys: ["ticket|TKT|digits5||-|req"],
    n: 1,
  },
  {
    hint: "verzin een incidentnummer: begint met TKT-, dan het jaartal, en bevat twee letters en vijf cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|TKT|letters2,digits5|-|2025|opt"],
    n: 1,
  },
  {
    hint: "verzin een incidentnummer: begint met TKT-, dan het jaartal, en bevat zes cijfers (delen gescheiden door koppeltekens)",
    keys: ["ticket|TKT|digits6|-|2024|opt", "ticket|TKT|digits6|-|2026|opt"],
    n: 2,
  },
  {
    hint: "verzin een incidentnummer: begint met TKT., dan het jaartal, en bevat twee letters en vijf cijfers (delen gescheiden door punten)",
    keys: ["ticket|TKT|letters2,digits5|.|2026|opt"],
    n: 1,
  },
  {
    hint: "verzin een incidentnummer: begint met TKT., dan het jaartal, en bevat zeven tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["ticket|TKT|alnum7|.|2026|opt"],
    n: 1,
  },
  {
    hint: "verzin een incidentnummer: begint met TKT/, dan het jaartal, en bevat tien cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|TKT|digits10|/|2025|opt"],
    n: 2,
  },
  {
    hint: "verzin een incidentnummer: begint met TKT/, dan het jaartal, en bevat vier cijfers (delen gescheiden door schuine strepen)",
    keys: ["ticket|TKT|digits4|/|2025|opt"],
    n: 2,
  },
  {
    hint: "verzin een projectnummer: begint met P, en bevat zes tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["project|P|alnum6||-|req"],
    n: 1,
  },
  {
    hint: "verzin een projectnummer: begint met P, en bevat zeven tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["project|P|alnum7||-|req"],
    n: 1,
  },
  {
    hint: "verzin een projectnummer: begint met P-, dan het jaartal, en bevat drie cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|P|digits3|-|2025|opt"],
    n: 1,
  },
  {
    hint: "verzin een projectnummer: begint met P-, dan het jaartal, en bevat negen cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|P|digits9|-|2024|opt"],
    n: 1,
  },
  {
    hint: "verzin een projectnummer: begint met P-, dan het jaartal, en bevat negen tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|P|alnum9|-|2026|opt"],
    n: 1,
  },
  {
    hint: "verzin een projectnummer: begint met P-, dan het jaartal, en bevat zeven cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|P|digits7|-|2024|opt", "project|P|digits7|-|2027|opt"],
    n: 2,
  },
  {
    hint: "verzin een projectnummer: begint met P-, dan het jaartal, en bevat zeven tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|P|alnum7|-|2025|opt"],
    n: 1,
  },
  {
    hint: "verzin een projectnummer: begint met P., dan het jaartal, en bevat drie cijfers (delen gescheiden door punten)",
    keys: ["project|P|digits3|.|2025|opt"],
    n: 1,
  },
  {
    hint: "verzin een projectnummer: begint met P., dan het jaartal, en bevat negen cijfers (delen gescheiden door punten)",
    keys: ["project|P|digits9|.|2027|opt"],
    n: 1,
  },
  {
    hint: "verzin een projectnummer: begint met P., dan het jaartal, en bevat zes cijfers (delen gescheiden door punten)",
    keys: ["project|P|digits6|.|2024|opt"],
    n: 1,
  },
  {
    hint: "verzin een projectnummer: begint met P/, dan het jaartal, en bevat vier cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|P|digits4|/|2025|opt", "project|P|digits4|/|2027|opt"],
    n: 2,
  },
  {
    hint: "verzin een projectnummer: begint met P/, dan het jaartal, en bevat zes cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|P|digits6|/|2024|opt"],
    n: 1,
  },
  {
    hint: "verzin een projectnummer: begint met PRJ, dan het jaartal, en bevat negen cijfers (zonder scheidingsteken)",
    keys: ["project|PRJ|digits9||2024|opt"],
    n: 2,
  },
  {
    hint: "verzin een projectnummer: begint met PRJ, dan het jaartal, en bevat vijf cijfers (zonder scheidingsteken)",
    keys: ["project|PRJ|digits5||2024|opt"],
    n: 1,
  },
  {
    hint: "verzin een projectnummer: begint met PRJ-, dan het jaartal, en bevat acht tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|PRJ|alnum8|-|2025|opt"],
    n: 1,
  },
  {
    hint: "verzin een projectnummer: begint met PRJ-, dan het jaartal, en bevat drie cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|PRJ|digits3|-|2024|opt"],
    n: 1,
  },
  {
    hint: "verzin een projectnummer: begint met PRJ., dan het jaartal, en bevat negen cijfers (delen gescheiden door punten)",
    keys: ["project|PRJ|digits9|.|2025|opt"],
    n: 2,
  },
  {
    hint: "verzin een projectnummer: begint met PRJ., dan het jaartal, en bevat zes tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["project|PRJ|alnum6|.|2027|opt"],
    n: 2,
  },
  {
    hint: "verzin een projectnummer: begint met PRJ/, dan het jaartal, en bevat drie cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PRJ|digits3|/|2027|opt"],
    n: 1,
  },
  {
    hint: "verzin een projectnummer: begint met PRJ/, dan het jaartal, en bevat vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PRJ|digits5|/|2025|opt"],
    n: 1,
  },
  {
    hint: "verzin een projectnummer: begint met PRJ/, dan het jaartal, en bevat zeven tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PRJ|alnum7|/|2027|opt"],
    n: 2,
  },
  {
    hint: "verzin een projectnummer: begint met PRJ/, en bevat acht cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PRJ|digits8|/|-|req"],
    n: 1,
  },
  {
    hint: "verzin een projectnummer: begint met PRJ/, en bevat acht tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PRJ|alnum8|/|-|req"],
    n: 1,
  },
  {
    hint: "verzin een projectnummer: begint met PRJ/, en bevat negen cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PRJ|digits9|/|-|req"],
    n: 2,
  },
  {
    hint: "verzin een projectnummer: begint met PRJ/, en bevat twee letters en vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PRJ|letters2,digits5|/|-|req"],
    n: 1,
  },
  {
    hint: "verzin een projectnummer: begint met PRJ/, en bevat zes tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PRJ|alnum6|/|-|req"],
    n: 1,
  },
  {
    hint: "verzin een projectnummer: begint met PROJ, dan het jaartal, en bevat acht cijfers (zonder scheidingsteken)",
    keys: ["project|PROJ|digits8||2026|opt"],
    n: 2,
  },
  {
    hint: "verzin een projectnummer: begint met PROJ, dan het jaartal, en bevat zes cijfers (zonder scheidingsteken)",
    keys: ["project|PROJ|digits6||2027|opt"],
    n: 1,
  },
  {
    hint: "verzin een projectnummer: begint met PROJ, dan het jaartal, en bevat zes tekens met letters en cijfers (zonder scheidingsteken)",
    keys: ["project|PROJ|alnum6||2025|opt"],
    n: 2,
  },
  {
    hint: "verzin een projectnummer: begint met PROJ-, dan het jaartal, en bevat negen cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|PROJ|digits9|-|2026|opt"],
    n: 1,
  },
  {
    hint: "verzin een projectnummer: begint met PROJ-, dan het jaartal, en bevat negen tekens met letters en cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|PROJ|alnum9|-|2027|opt"],
    n: 1,
  },
  {
    hint: "verzin een projectnummer: begint met PROJ-, dan het jaartal, en bevat tien cijfers (delen gescheiden door koppeltekens)",
    keys: ["project|PROJ|digits10|-|2024|opt"],
    n: 1,
  },
  {
    hint: "verzin een projectnummer: begint met PROJ., dan het jaartal, en bevat twee letters en vijf cijfers (delen gescheiden door punten)",
    keys: ["project|PROJ|letters2,digits5|.|2025|opt"],
    n: 1,
  },
  {
    hint: "verzin een projectnummer: begint met PROJ., dan het jaartal, en bevat zeven tekens met letters en cijfers (delen gescheiden door punten)",
    keys: ["project|PROJ|alnum7|.|2025|opt"],
    n: 1,
  },
  {
    hint: "verzin een projectnummer: begint met PROJ/, dan het jaartal, en bevat vijf cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PROJ|digits5|/|2024|opt"],
    n: 2,
  },
  {
    hint: "verzin een projectnummer: begint met PROJ/, dan het jaartal, en bevat zes tekens met letters en cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PROJ|alnum6|/|2024|opt"],
    n: 1,
  },
  {
    hint: "verzin een projectnummer: begint met PROJ/, en bevat negen cijfers (delen gescheiden door schuine strepen)",
    keys: ["project|PROJ|digits9|/|-|req"],
    n: 1,
  },
];
