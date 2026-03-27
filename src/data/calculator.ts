export type TileSize = "600x600" | "600x1200"
export type GridSystem = "G" | "M"

export interface CalculatorInput {
  width: number
  length: number
  tileSize: TileSize
  gridSystem: GridSystem
}

export interface MaterialItem {
  name: string
  qty: number
  unit: string
}

export interface CalculatorResult {
  area: number
  tileCount: number
  tileBoxes: number
  tilesPerBox: number
  materials: MaterialItem[]
}

const TILE_AREA: Record<TileSize, number> = {
  "600x600": 0.36,
  "600x1200": 0.72,
}

const TILES_PER_BOX: Record<TileSize, number> = {
  "600x600": 10,
  "600x1200": 8,
}

const MAIN_RUNNER_LENGTH: Record<GridSystem, number> = {
  G: 3.63,
  M: 3.60,
}

export function calculate(input: CalculatorInput): CalculatorResult {
  const { width, length, tileSize, gridSystem } = input

  const area = width * length
  const perimeter = 2 * (width + length)

  const tileUnitArea = TILE_AREA[tileSize]
  const tilesPerBox = TILES_PER_BOX[tileSize]
  const tileCount = Math.ceil((area / tileUnitArea) * 1.05)
  const tileBoxes = Math.ceil(tileCount / tilesPerBox)

  const mainRunnerLength = MAIN_RUNNER_LENGTH[gridSystem]
  const mainRows = Math.ceil(width / 1.2) + 1
  const mainRunnerPerRow = Math.ceil(length / mainRunnerLength)
  const mainRunnerQty = Math.ceil(mainRows * mainRunnerPerRow * 1.05)

  const crossRunnerQty = Math.ceil(
    Math.ceil(width / 0.6) * Math.ceil(length / 0.6) * 1.05
  )

  const lAngleQty = Math.ceil((perimeter / 3.0) * 1.1)

  const hangPoints = Math.ceil(area / 1.44) + Math.ceil(perimeter / 1.2)

  const nailBoxes = Math.ceil(((perimeter / 0.3) * 2) / 50)

  const materials: MaterialItem[] = [
    {
      name: `โครงฝ้าทีบาร์ หลัก (${mainRunnerLength * 1000} มม.) ระบบ${gridSystem}`,
      qty: mainRunnerQty,
      unit: "เส้น",
    },
    {
      name: "โครงฝ้าทีบาร์ ซอย (600 มม.)",
      qty: crossRunnerQty,
      unit: "เส้น",
    },
    {
      name: "โครงริมทีบาร์ L-angle (3000 มม.)",
      qty: lAngleQty,
      unit: "เส้น",
    },
    {
      name: "พุกเหล็ก 1.5 หุน",
      qty: hangPoints,
      unit: "ตัว",
    },
    {
      name: "ฉากยึดท้องพื้น",
      qty: hangPoints,
      unit: "ตัว",
    },
    {
      name: "ลวดแขวน (3000 มม.)",
      qty: hangPoints,
      unit: "เส้น",
    },
    {
      name: "สปริงล็อก",
      qty: hangPoints,
      unit: "ตัว",
    },
    {
      name: "ตะปูคอนกรีต",
      qty: nailBoxes,
      unit: "กล่อง",
    },
  ]

  return {
    area,
    tileCount,
    tileBoxes,
    tilesPerBox,
    materials,
  }
}
