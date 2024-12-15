import  { ReactNode } from "react";

// تعریف نوع props برای کامپوننت Container
 export  interface MainContainerProps {
  title: string; // عنوان کانتینر
  children: ReactNode; // محتوای داخلی کانتینر
}