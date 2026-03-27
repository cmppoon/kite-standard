export type CeilingType = "tbar" | "concealed"
export type TileSize = "600x600" | "600x1200"

export interface MaterialItem {
  name: string
  qty: number
  unit: string
}

export interface CalculatorResult {
  area: number
  materials: MaterialItem[]
}

// =================== ทีบาร์ ===================

export interface TbarInput {
  type: "tbar"
  width: number
  length: number
  tileSize: TileSize
}

const TILE_AREA: Record<TileSize, number> = {
  "600x600": 0.36,
  "600x1200": 0.72,
}

function calculateTbar(input: TbarInput): CalculatorResult {
  const { width, length, tileSize } = input
  const area = width * length

  const tileCount     = Math.ceil(area / TILE_AREA[tileSize] * 1.05)
  const mainRunner    = Math.ceil(area / 2.5)
  const crossRunner   = Math.ceil(area * 1.25)
  const lAngle        = Math.ceil(area / 4)
  const wire          = Math.ceil(area / 3)
  const hangPoint     = Math.ceil(area)
  const nail          = Math.ceil(area / 250)

  return {
    area,
    materials: [
      { name: "แผ่นฝ้าทีบาร์", qty: tileCount, unit: "แผ่น" },
      { name: "โครงทีเมนเหล็กอบสี 1\" ยาว 4.23 เมตร", qty: mainRunner, unit: "เส้น" },
      { name: "โครงทีซอยเหล็กอบสี 1\" ยาว 0.60 เมตร", qty: crossRunner, unit: "เส้น" },
      { name: "ฉาก 3/4\" ยาว 4 เมตร", qty: lAngle, unit: "เส้น" },
      { name: "พุกเหล็ก 3/16", qty: hangPoint, unit: "ตัว" },
      { name: "ฉากยึดท้องพื้น", qty: hangPoint, unit: "ตัว" },
      { name: "ลวด 3มิล ยาว 3 เมตร", qty: wire, unit: "เส้น" },
      { name: "สปริงล็อก", qty: hangPoint, unit: "ตัว" },
      { name: "ตะปูคอนกรีต", qty: nail, unit: "กล่อง" },
    ],
  }
}

// =================== ซีลาย (ฉาบเรียบ) ===================

export interface ConcealedInput {
  type: "concealed"
  width: number
  length: number
}

function calculateConcealed(input: ConcealedInput): CalculatorResult {
  const { width, length } = input
  const area = width * length

  const gypsumBoard   = Math.ceil(area / 2.88 * 1.05)
  const mainFrame     = Math.ceil(area * 0.92)
  const wallAngle     = Math.ceil(area * 0.32)
  const clip          = Math.ceil(area * 2.63)
  const springLock    = Math.ceil(area * 0.87)
  const hookLock      = Math.ceil(area * 0.87)
  const expansionBolt = Math.ceil(area * 0.87)
  const boltAngle     = Math.ceil(area * 0.87)
  const wire          = Math.ceil(area * 0.87)
  const connector     = Math.ceil(area * 0.48)
  const screw         = Math.ceil(area / 25)
  const nail          = Math.ceil(area / 100)
  const cement        = Math.ceil(area / 33)
  const tape          = Math.ceil(area / 50)

  return {
    area,
    materials: [
      { name: "แผ่นยิปซัม ขนาด 1200×2400 มม.", qty: gypsumBoard, unit: "แผ่น" },
      { name: "โครงซีลาย ยาว 4 เมตร.", qty: mainFrame, unit: "เส้น" },
      { name: "โครงริม ยาว 2.4 เมตร.", qty: wallAngle, unit: "เส้น" },
      { name: "คลิปล็อก", qty: clip, unit: "ชิ้น" },
      { name: "สปริงล็อก", qty: springLock, unit: "ชิ้น" },
      { name: "ขอล็อกโครง", qty: hookLock, unit: "ชิ้น" },
      { name: "พุกเหล็ก 3/16", qty: expansionBolt, unit: "ตัว" },
      { name: "ฉากยึดท้องพื้น", qty: boltAngle, unit: "ชิ้น" },
      { name: "ลวด 3มิล ยาว 3 เมตร", qty: wire, unit: "เส้น" },
      { name: "สกรูยิงแผ่นยิปซัม 25 มม. (500 ตัว/กล่อง)", qty: screw, unit: "กล่อง" },
      { name: "ตะปูคอนกรีต", qty: nail, unit: "กล่อง" },
      { name: "ปูนฉาบรอยต่อ", qty: cement, unit: "ถุง" },
      { name: "เทปผ้ายิปซัมปิดรอยต่อ", qty: tape, unit: "ห่อ" },
    ],
  }
}

// =================== export หลัก ===================

export type CalculatorInput = TbarInput | ConcealedInput

export function calculate(input: CalculatorInput): CalculatorResult {
  if (input.type === "tbar") return calculateTbar(input)
  return calculateConcealed(input)
}
