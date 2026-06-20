import domtoimage from "dom-to-image";
import jsPDF from "jspdf";

export const exportMenu = async () => {
  const element = document.getElementById("menu");
  if (!element) return;
  if (typeof window == "undefined") {
    return;
  }
  const content_menu = element.querySelector(".content-menu") as HTMLDivElement;
  if (content_menu) {
    content_menu.style.marginTop = "0";
    content_menu.style.marginBottom = "0";
    content_menu.style.paddingBottom = "20px";
    element.style.paddingTop = "20px";
  }
  try {
    const dataUrl = await domtoimage.toPng(element, {
      quality: 0.95,
      width: element.scrollWidth,
      height: element.scrollHeight,
      style: {
        transform: "scale(1)",
        transformOrigin: "top left",
        backgroundColor: "rgb(23, 24, 25)", // تنظیم بک‌گراند
      },
      backgroundColor: "rgb(23, 24, 25)", // تنظیم بک‌گراند
    });

    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210;
    const imgHeight = (element.scrollHeight * imgWidth) / element.scrollWidth;

    pdf.setFillColor(23, 24, 25);
    pdf.rect(0, 0, 210, 297, "F");
    pdf.addImage(dataUrl, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("menu.pdf");
  } catch (error) {
    console.error("خطا در ایجاد PDF:", error);
  }
};
