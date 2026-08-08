// ผลงานที่ผ่านมา — โครงการที่ KAI Standard จัดส่งสินค้า
//
// รูปภาพทั้งหมดอยู่ในโฟลเดอร์ public/reference/
// ชื่อไฟล์รูป: ref01.webp, ref02.webp, ... (เลข 2 หลักเสมอ)
//
// วิธีเพิ่มโครงการใหม่:
//   1. อัปโหลดรูปใหม่ เช่น ref13.webp ไปที่ public/reference/
//   2. คัดลอกบล็อก { ... } อันล่างสุด มาวางต่อท้าย ก่อนเครื่องหมาย ];
//   3. แก้ id เป็นเลขถัดไป (13), แก้ image และ caption
//   4. โครงการใหม่จะขึ้นบนสุดของหน้าเว็บเอง ไม่ต้องเรียงใหม่

export type ReferenceProject = {
  id: number;
  image: string;
  caption: string;
};

export const referenceProjects: ReferenceProject[] = [
  {
    id: 1,
    image: "/reference/ref01.webp",
    caption: "จัดส่งแผ่นอะคูสติก ณ ราชวิทยาลัยจุฬาภรณ์",
  },
  {
    id: 2,
    image: "/reference/ref02.webp",
    caption: "จัดส่งแผ่นอะคูสติก ณ มหาวิทยาลัยมหิดล กาญจนบุรี",
  },
  {
    id: 3,
    image: "/reference/ref03.webp",
    caption: "จัดส่งแผ่นยิปซั่มลดเสียงสะท้อน ณ โรงเรียนเบญราชบุรี",
  },
  {
    id: 4,
    image: "/reference/ref04.webp",
    caption: "จัดส่งแผ่นอะคูสติก ณ มหาวิทยาลัยราชภัฏยะลา",
  },
  {
    id: 5,
    image: "/reference/ref05.webp",
    caption: "จัดส่งแผ่นยิปซั่มลดเสียงสะท้อน ณ มหาวิทยาลัยราชภัฏชัยภูมิ",
  },
  {
    id: 6,
    image: "/reference/ref06.webp",
    caption: "จัดส่งแผ่นอะคูสติก ณ ธนาคารออมสิน สำนักงานใหญ่",
  },
  {
    id: 7,
    image: "/reference/ref07.webp",
    caption: "จัดส่งแผ่นอะคูสติก ณ การไฟฟ้าส่วนภูมิภาค สาขาปากท่อ",
  },
  {
    id: 8,
    image: "/reference/ref08.webp",
    caption: "จัดส่งแผ่นยิปซั่มลดเสียงสะท้อน ณ มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตภูเก็ต",
  },
  {
    id: 9,
    image: "/reference/ref09.webp",
    caption: "จัดส่งแผ่นอะคูสติก ณ อาคารสรชัย",
  },
  {
    id: 10,
    image: "/reference/ref10.webp",
    caption: "จัดส่งแผ่นยิปซั่มลดเสียงสะท้อน ณ กฟผ. เขื่อนสิริกิติ์",
  },
  {
    id: 11,
    image: "/reference/ref11.webp",
    caption: "จัดส่งแผ่นอะคูสติก ณ ศูนย์อบรมเหลาจื่อเต้าเต๋อซิ่นซีสากล",
  },
  {
    id: 12,
    image: "/reference/ref12.webp",
    caption: "จัดส่งแผ่นอะคูสติก ณ ที่ทำการอำเภอพุทธมณฑล",
  },
  {
    id: 13,
    image: "/reference/ref13.webp",
    caption: "จัดส่งแผ่นอะคูสติก ณ คลังสินค้าเซ็นทรัลวัตสัน บางพลี",
  },
  {
    id: 14,
    image: "/reference/ref14.webp",
    caption: "จัดส่งแผ่นอะคูสติก ณ โรงเรียนโสมาภาพัฒนา",
  },
  {
    id: 15,
    image: "/reference/ref15.webp",
    caption: "จัดส่งแผ่นยิปซั่มลดเสียงสะท้อน ณ มหาวิทยาลัยวลัยลักษณ์",
  },
  {
    id: 16,
    image: "/reference/ref16.webp",
    caption: "จัดส่งแผ่นอะคูสติก ณ สำนักงานสาธารณะสุขจังหวัดลำพูน",
  },
  {
    id: 17,
    image: "/reference/ref17.webp",
    caption: "จัดส่งแผ่นอะคูสติก ณ Fisher & Paykel Appliances (Thailand) Co.,Ltd",
  },
  {
    id: 18,
    image: "/reference/ref18.webp",
    caption: "จัดส่งแผ่นอะคูสติก ณ 42 grand residence",
  },
   {
    id: 19,
    image: "/reference/ref19.webp",
    caption: "จัดส่งแผ่นอะคูสติก ณ D'oro Coffee อาคารรีเจ้นท์",
  },
  {
    id: 20,
    image: "/reference/ref20.webp",
    caption: "จัดส่งแผ่นอะคูสติก ณ ที่ทำการพุทธมณฑล",
  },
  {
    id: 21,
    image: "/reference/ref21.webp",
    caption: "จัดส่งแผ่นอะคูสติก ณ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
  },
  {
    id: 22,
    image: "/reference/ref22.webp",
    caption: "จัดส่งแผ่นอะคูสติก ณ กรมทางหลวง",
  },
  {
    id: 23,
    image: "/reference/ref23.webp",
    caption: "จัดส่งแผ่นอะคูสติก ณ มหาวิทยาลัยศรีนครินทรวิโรฒ",
  },
   {
    id: 24,
    image: "/reference/ref24.webp",
    caption: "จัดส่งแผ่นอะคูสติก ณ Sand Dunes Chaolao Beach Resort",
  },
];