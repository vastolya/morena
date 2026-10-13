# Марина Баязова — портфолио

Сайт-портфолио одежды ручной работы. Next.js 16 (App Router) + Tailwind CSS 4.

## Запуск

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Где что лежит

- `src/data/works.ts` — список изделий: название, раздел, материал, описание и номера фото.
- `src/data/site.ts` — контакты (Telegram, Instagram, почта).
- `src/data/photos.json` — размеры фотографий (генерируется скриптом).
- `public/works/` — фотографии, сжатые для веба (`001.jpg` … `164.jpg`).

## Как добавить новые фото

1. Сложите исходники (HEIC или JPG) в папку, например `../одежда маркет`.
2. Запустите `node scripts/convert-photos.mjs "../одежда маркет"`. Скрипт пересоберёт
   `public/works` и `photos.json`; файлы нумеруются по имени, по порядку.
3. Добавьте изделие в `src/data/works.ts`, указав номера его фото. Первое фото станет обложкой.
