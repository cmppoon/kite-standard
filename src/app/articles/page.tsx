import type { Metadata } from "next";
import ArticlesClientPage from "./articlesClientPage";

export const metadata: Metadata = {
  title: "บทความ | ความรู้แผ่นอะคูสติก ฝ้าเพดาน ลดเสียงสะท้อน",
  description:
    "บทความความรู้เกี่ยวกับแผ่นอะคูสติก ฝ้าอะคูสติก การลดเสียงสะท้อน วิธีติดตั้งฝ้าเพดาน และเคล็ดลับการเลือกวัสดุ จากผู้เชี่ยวชาญประสบการณ์กว่า 40 ปี",
  keywords:
    "แผ่นอะคูสติก, ฝ้าอะคูสติก, ลดเสียงสะท้อน, วิธีติดตั้งฝ้าเพดาน, แผ่นฝ้ากันเสียง, บทความฝ้าเพดาน",
};

export default function ArticlesPage() {
  return <ArticlesClientPage />;
}