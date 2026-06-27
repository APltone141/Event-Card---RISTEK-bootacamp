# Deployment Checklist — Laravel + Inertia + React

Panduan singkat untuk men-deploy aplikasi monolit Laravel 13 dengan Inertia.js, React, dan Tailwind CSS v4 ke VPS atau Laravel Forge.

## Prasyarat Server

- [ ] PHP 8.2+ dengan ekstensi yang dibutuhkan Laravel (BCMath, Ctype, Fileinfo, JSON, Mbstring, OpenSSL, PDO, Tokenizer, XML)
- [ ] Composer terinstal
- [ ] Node.js 20+ dan npm terinstal (untuk build frontend)
- [ ] Web server (Nginx/Apache) dikonfigurasi dengan document root ke folder `public/`
- [ ] Database (MySQL/PostgreSQL/SQLite) siap dan dapat diakses

## Persiapan Aplikasi

- [ ] Clone repository ke server
- [ ] Salin `.env.example` menjadi `.env`
- [ ] Atur variabel environment production:
  - `APP_ENV=production`
  - `APP_DEBUG=false`
  - `APP_URL=https://domain-anda.com`
  - Kredensial database, mail, dan layanan lainnya
- [ ] Generate application key:
  ```bash
  php artisan key:generate
  ```

## Instalasi Dependensi

```bash
# Backend
composer install --optimize-autoloader --no-dev

# Frontend
npm ci
npm run build
```

## Migrasi & Storage

```bash
php artisan migrate --force
php artisan storage:link
```

## Optimasi Laravel (Production)

Jalankan perintah optimasi berikut **setelah** `.env` production sudah benar:

```bash
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan event:cache
php artisan optimize
```

> **Catatan:** Jangan jalankan `config:cache` saat development jika sering mengubah `.env`. Setelah deploy ulang dengan perubahan `.env`, jalankan ulang `php artisan config:cache`.

## Build Frontend

Pastikan asset Vite sudah di-build sebelum atau saat deploy:

```bash
npm run build
```

Output build berada di `public/build/`. Pastikan folder ini tidak di-ignore saat deploy.

## Permission

```bash
chmod -R 775 storage bootstrap/cache
chown -R www-data:www-data storage bootstrap/cache
```

(Sesuaikan user/group dengan konfigurasi server.)

## Laravel Forge (Opsional)

Jika menggunakan [Laravel Forge](https://forge.laravel.com):

- [ ] Buat site baru dan hubungkan repository
- [ ] Atur PHP version, web server, dan SSL (Let's Encrypt)
- [ ] Tambahkan **Deploy Script** yang mencakup:
  ```bash
  cd /home/forge/domain-anda.com
  git pull origin main
  composer install --optimize-autoloader --no-dev
  npm ci
  npm run build
  php artisan migrate --force
  php artisan config:cache
  php artisan route:cache
  php artisan view:cache
  php artisan optimize
  php artisan queue:restart
  ```
- [ ] Konfigurasi queue worker dan scheduler (`* * * * * php artisan schedule:run`) jika diperlukan

## Verifikasi Pasca-Deploy

- [ ] Halaman utama dapat diakses via HTTPS
- [ ] Asset CSS/JS (Inertia + React) termuat tanpa error 404
- [ ] Tidak ada error di `storage/logs/laravel.log`
- [ ] `APP_DEBUG=false` dan stack trace tidak terekspos ke publik

## Rollback Cepat

Jika deploy gagal:

1. Checkout commit sebelumnya: `git checkout <commit-hash>`
2. Jalankan ulang `composer install`, `npm run build`, dan perintah optimasi
3. Rollback migrasi jika perlu: `php artisan migrate:rollback --step=1`
