import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    base: "./", // استخدام مسار نسبي يجعل المتصفح يجد ملفات الـ JS والـ CSS في أي مكان
  },
});
