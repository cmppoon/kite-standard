export type TileSize = "600x600" | "600x1200"

export interface CalculatorInput {
  width: number
  length: number
  tileSize: TileSize
}

export interface MaterialItem {
  name: string
  qty: number
  unit: string
}

export interface CalculatorResult {
  area: number
  tileCount: number
  materials: MaterialItem[]
}

const TILE_AREA: Record<TileSize, number> = {
  "600x600": 0.36,
  "600x1200": 0.72,
}

export function calculate(input: CalculatorInput): CalculatorResult {
  const { width, length, tileSize } = input

  const area = width * length

  const tileCount = Math.ceil(area / TILE_AREA[tileSize] * 1.05)

  const mainRunner  = Math.ceil(area / 2.5)       // ทีเมน
  const crossRunner = Math.ceil(area * 1.25)       // ทีซอย
  const lAngle      = Math.ceil(area / 4)          // ฉากริม
  const wire        = Math.ceil(area / 3)          // ลวด
  const hangPoint   = Math.ceil(area)              // ฉากยึด, สปริง, ตะขอ, พุ๊ก
  const nail        = Math.ceil(area / 250)        // ตะปู (กล่อง)

  const materials: MaterialItem[] = [
    {
      name: "โครงทีเมนเหล็กอบสี 1\" ยาว 4.23 เมตร",
      qty: mainRunner,
      unit: "เส้น",
    },
    {
      name: "โครงทีซอยเหล็กอบสี 1\" ยาว 0.60 เมตร",
      qty: crossRunner,
      unit: "เส้น",
    },
    {
      name: "ฉาก 3/4\" ยาว 4 เมตร",
      qty: lAngle,
      unit: "เส้น",
    },
    {
      name: "พุกเหล็ก 3/16",
      qty: hangPoint,
      unit: "ตัว",
    },
    {
      name: "ฉากยึดท้องพื้น",
      qty: hangPoint,
      unit: "ตัว",
    },
    {
      name: "ลวด 3มิล ยาว 3 เมตร",
      qty: wire,
      unit: "เส้น",
    },
    {
      name: "สปริงล็อก",
      qty: hangPoint,
      unit: "ตัว",
    },
    {
      name: "ตะปูคอนกรีต",
      qty: nail,
      unit: "กล่อง",
    },
  ]

  return {
    area,
    tileCount,
    materials,
  }
}
