// app/sitemap.xml/route.ts
import { NextResponse } from 'next/server';
import articleData from '../config/articleData';

export async function GET() {
  const baseUrl = 'https://yourdomain.com'; // Replace with your domain

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
>
  ${articleData
    .map(
      (article) => `
    <url>
      <loc>${baseUrl}/${article.slug}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
  `
    )
    .join('')}
</urlset>`;

  return new NextResponse(body, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
