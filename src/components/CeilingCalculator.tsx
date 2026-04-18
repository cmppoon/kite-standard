"use client"

import { useState } from "react"
import {
  calculate,
  type CeilingType,
  type TileSize,
  type CalculatorResult,
} from "@/data/calculator"

export default function CeilingCalculator() {
  const [ceilingType, setCeilingType] = useState<CeilingType>("tbar")
  const [width, setWidth] = useState("")
  const [length, setLength] = useState("")
  const [tileSize, setTileSize] = useState<TileSize>("600x600")
  const [result, setResult] = useState<CalculatorResult | null>(null)
  const [error, setError] = useState("")

  const runCalculate = (type: CeilingType, w: string, l: string, size: TileSize) => {
    setError("")
    const wNum = parseFloat(w)
    const lNum = parseFloat(l)
    if (!wNum || !lNum || wNum <= 0 || lNum <= 0) return
    const res = calculate(
      type === "tbar"
        ? { type: "tbar", width: wNum, length: lNum, tileSize: size }
        : { type: "concealed", width: wNum, length: lNum }
    )
    setResult(res)
  }

  const handleCalculate = () => {
    setError("")
    const w = parseFloat(width)
    const l = parseFloat(length)
    if (!w || !l || w <= 0 || l <= 0) {
      setError("กรุณากรอกความกว้างและความยาวให้ถูกต้อง")
      return
    }
    runCalculate(ceilingType, width, length, tileSize)
  }

  const handleTypeChange = (t: CeilingType) => {
    setCeilingType(t)
    setResult(null)
    setError("")
  }

  const handleTileSizeChange = (s: TileSize) => {
    setTileSize(s)
    runCalculate(ceilingType, width, length, s)
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          เครื่องคำนวณวัสดุฝ้าเพดาน
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          คำนวณปริมาณวัสดุตามพื้นที่
        </p>
      </div>

      {/* เลือกประเภทฝ้า */}
      <div>
        <label className="block text-sm text-gray-600 mb-2">ประเภทฝ้า</label>
        <div className="flex rounded-lg border border-gray-200 overflow-hidden w-fit">
          <button
            onClick={() => handleTypeChange("tbar")}
            className={`px-5 py-2 text-sm transition-colors ${
              ceilingType === "tbar"
                ? "bg-gray-900 text-white font-medium"
                : "text-gray-500 hover:bg-gray-50"
            }`}
          >
            ฝ้าทีบาร์
          </button>
          <button
            onClick={() => handleTypeChange("concealed")}
            className={`px-5 py-2 text-sm transition-colors ${
              ceilingType === "concealed"
                ? "bg-gray-900 text-white font-medium"
                : "text-gray-500 hover:bg-gray-50"
            }`}
          >
            ฝ้าซีลาย (ฉาบเรียบ)
          </button>
        </div>
      </div>

      {/* ขนาดห้อง */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">ความกว้าง (ม.)</label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            placeholder="เช่น 5"
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gray-400"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">ความยาว (ม.)</label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            placeholder="เช่น 8"
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gray-400"
          />
        </div>
      </div>

      {/* ขนาดแผ่นฝ้า (เฉพาะทีบาร์) */}
      {ceilingType === "tbar" && (
        <div>
          <label className="block text-sm text-gray-600 mb-2">ขนาดแผ่นฝ้า</label>
          <div className="flex rounded-lg border border-gray-200 overflow-hidden w-fit">
            {(["600x600", "600x1200"] as TileSize[]).map((s) => (
              <button
                key={s}
                onClick={() => handleTileSizeChange(s)}
                className={`px-4 py-2 text-sm transition-colors ${
                  tileSize === s
                    ? "bg-gray-100 font-medium text-gray-900"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                {s === "600x600" ? "600 × 600 มม." : "600 × 1200 มม."}
              </button>
            ))}
          </div>
        </div>
      )}

      {error && <p className="text-sm text-red-500">{error}</p>}

      <button
        onClick={handleCalculate}
        className="w-full py-3 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors"
      >
        คำนวณวัสดุ
      </button>

      {/* ผลลัพธ์ */}
      {result && (
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4 w-fit">
            <p className="text-xs text-gray-500 mb-1">พื้นที่รวม</p>
            <p className="text-xl font-semibold text-gray-900">{result.area.toFixed(2)}</p>
            <p className="text-xs text-gray-400">ตร.ม.</p>
          </div>

          <div className="border border-gray-100 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500">รายการ</th>
                  <th className="text-right px-4 py-3 text-xs font-medium text-gray-500">จำนวน</th>
                  <th className="text-right px-4 py-3 text-xs font-medium text-gray-500">หน่วย</th>
                </tr>
              </thead>
              <tbody>
                {result.materials.map((item, i) => (
                  <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-700">{item.name}</td>
                    <td className="px-4 py-3 text-right font-medium text-gray-900">
                      {item.qty.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-right text-gray-400">{item.unit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-400">
            * คำนวณเบื้องต้นโดยเผื่อค่าเสียหาย 5%
          </p>
        </div>
      )}
    </div>
  )
}
