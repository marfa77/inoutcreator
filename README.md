# sbunkov — сайт-визитка Сергея Бунькова

Персональный сайт на русском языке: генеральный директор, АЗС и нефтегазовое оборудование.

## Стек

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Статический экспорт → GitHub Pages

## Локальная разработка

```bash
npm install
npm run dev
```

Откройте `http://localhost:3000/sbunkov`.

## Сборка

```bash
npm run build
```

Результат — папка `out/`.

## Деплой

Сайт публикуется через GitHub Actions при push в `main`.

- Репозиторий: [marfa77/sbunkov](https://github.com/marfa77/sbunkov)
- URL: https://marfa77.github.io/sbunkov/

### Настройка GitHub Pages (один раз)

1. Откройте **Settings → Pages** в репозитории.
2. В **Source** выберите **GitHub Actions**.
3. Запушьте в `main` — workflow соберёт и опубликует сайт.

### Свой домен (опционально)

1. Добавьте файл `public/CNAME` с доменом (например `sbunkov.ru`).
2. Настройте DNS у регистратора.
3. Обновите `NEXT_PUBLIC_SITE_URL` в `.github/workflows/deploy.yml`.
