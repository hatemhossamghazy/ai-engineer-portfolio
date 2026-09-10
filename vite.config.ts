import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    base: "/hatem-ghazy-portfolio-/",
  },
  nitro: {
    preset: "static", // تحويل الناتج لموقع ساكن يستخرج ملفات HTML
    static: true,
    prerender: {
      routes: ["/"], // توليد الصفحة الرئيسية تلقائياً
    },
  },
});
