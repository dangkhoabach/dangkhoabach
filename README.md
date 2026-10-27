## Hi, I'm Khoa — Bạch Thái Đăng Khoa

**Full-stack developer in Ho Chi Minh City, Vietnam.** I design and build websites, business systems and iPhone and Mac apps — from the first conversation to a system running in production.

[Portfolio](https://dangkhoabach.vn) · [Mac apps](https://apps.dangkhoabach.vn) · [ToolsHub](https://tools.dangkhoabach.vn) · [CV (PDF)](https://dangkhoabach.vn/cv/BachThaiDangKhoa-CV.pdf) · [LinkedIn](https://www.linkedin.com/in/dangkhoabach) · [Facebook](https://facebook.com/dangkhoabach.1609) · [dangkhoabach2002@gmail.com](mailto:dangkhoabach2002@gmail.com)

I have 3 years of experience and I build the whole thing: the database and API, the website or admin panel a team uses every day, native apps for iPhone and Mac, and the servers it all runs on. The systems are built to last — secure sign-in, encrypted data, audit trails and automated tests, more than 1,400 of them across my projects.

> **Why some of my work isn't public here:** client projects live in private repositories, so they link to a case study with screenshots and technical details instead. My own macOS apps below are open source.

---

### Client work

**[Cà Phê Tý Mập — POS & shop management](https://dangkhoabach.vn/projects/P04)** · 2026 · [caphetymap.store](https://caphetymap.store)
A complete system to run a coffee shop, replacing its commercial POS: an ASP.NET Core API (~215 endpoints), a Next.js admin panel and website, and two native iPhone apps for staff and the owner. Table and takeaway orders, ESC/POS printing over the shop's LAN, VietQR payments, till sessions, GPS attendance, payroll, stock and loyalty points.
<sub>.NET 8 · EF Core · SQL Server · Next.js 16 · Swift 6 · SwiftUI · Server-sent events — 373 tests</sub>

**GonShip — Zalo shipping-quote and order bot** · 2026
A bot for a delivery service in Rạch Giá that quotes customers on Zalo within seconds and turns shop group chats into orders. The Claude API reads each message for the service, pickup and drop-off; the distance comes from a map API on the motorbike route and the price from the owner's price table, never from the AI. Staff review orders on a dashboard and post them, with photos, to the dispatch group.
<sub>TypeScript · Cloudflare Workers · Durable Objects · D1 · Claude API · Node.js — 210 tests</sub>

**[Lanoca Design — platform rebuild](https://dangkhoabach.vn/projects/P05)** · 2024, 2026 · [lanoca.vn](https://lanoca.vn)
Rebuilt the website I first made for an interior design firm, from one ASP.NET MVC 5 app into an API and three Next.js apps. A self-built page-flip catalogue viewer replaced a paid embed; 301 redirects from every old URL kept the search rankings.
<sub>.NET 8 · EF Core · SQL Server · Next.js 16 · React 19 · Tailwind CSS — 75 tests</sub>

**Company websites — [HK Vina Logistics](https://hkvinalogistics.com) and [RIL Group (Australia)](https://rilgroup.com.au)** · 2024
Bilingual company websites with admin panels for the teams to manage their own content, project galleries and SEO.
<sub>ASP.NET MVC 5 · C# · Entity Framework · SQL Server</sub>

<table>
  <tr>
    <td width="50%"><a href="https://dangkhoabach.vn/projects/P04"><img src="https://dangkhoabach.vn/work/p04-staff.webp" alt="Cà Phê Tý Mập staff app: orders, item options and payment"></a></td>
    <td width="50%"><a href="https://dangkhoabach.vn/projects/P05"><img src="https://dangkhoabach.vn/work/p05-poster.webp" alt="Lanoca Design website"></a></td>
  </tr>
</table>

### Own products

**[dangkhoabach.vn](https://dangkhoabach.vn/projects/P08)** — one ASP.NET Core API and five Next.js apps: my portfolio, [ToolsHub](https://tools.dangkhoabach.vn) (88 browser-based tools in 8 languages), an app download centre and an admin console with revocable sessions, TOTP, passkeys, step-up verification, audit log and cookie-less analytics. 249 tests.

**[Home lab on TrueNAS](https://dangkhoabach.vn/projects/P12)** — Home Assistant, a Minecraft server and DNS filtering, monitored and controlled from my admin console without opening a single inbound port: an unprivileged agent signs every request with HMAC, and a root helper only runs a fixed allowlist. Includes a custom Home Assistant integration that brings a smart-home cloud API into Apple Home.

**macOS apps** — native Swift, open source under the MIT license, with signed auto-updates through Sparkle, used every day. [Download →](https://apps.dangkhoabach.vn)

| App | What it does | Tests |
| :--- | :--- | ---: |
| [SignalBar](https://github.com/dangkhoabach/SignalBar) | Uptime, SSL and domain expiry, Mac hardware sensors and Linux servers over SSH, from the menu bar. Rewritten from Tauri to Swift. | 385 |
| [SourceDeck](https://github.com/dangkhoabach/SourceDeck) | A Git client built to replace Sourcetree: line-by-line staging, a commit composer and a secret check before every commit. | 219 |
| [KeyCellar](https://github.com/dangkhoabach/KeyCellar) | An offline vault for API keys, passwords and .env sets. Master key in the Secure Enclave, values sealed with HPKE, no network access. | 134 |
| [MediaCatch](https://github.com/dangkhoabach/MediaCatch) | A yt-dlp front end: a format picker, a download queue, playlists and channel watching. | 92 |
| [FoldAway](https://github.com/dangkhoabach/FoldAway) | The screen blurs, tilts and fades as you close the MacBook lid, driven by the hinge-angle sensor. | 48 |

<table>
  <tr>
    <td width="50%"><a href="https://github.com/dangkhoabach/SignalBar"><img src="https://apps.dangkhoabach.vn/showcase/dkb-monitor/domains-dark.webp" alt="SignalBar"></a></td>
    <td width="50%"><a href="https://github.com/dangkhoabach/SourceDeck"><img src="https://apps.dangkhoabach.vn/showcase/dkb-source-control/workingcopy-dark.webp" alt="SourceDeck"></a></td>
  </tr>
</table>

---

### Experience

- **Software Developer** — ACIS Technology Corporation · 10/2024 – present
  Mobile, desktop and web apps for customers and internal operations: Xamarin/.NET MAUI and Swift, APIs, SQL Server/PostgreSQL, and the company's own email server.
- **Intern Web Developer** — XTECH789 · 04/2024 – 08/2024
- **IT Support (part-time)** — Lanoca Co., Ltd. · 02/2021 – present
- **Engineer's degree in Information Technology** — HUTECH University · 2020 – 2024

### Tech stack

| Area | Technologies |
| :--- | :--- |
| Backend | C#, ASP.NET Core Web API, ASP.NET MVC, Entity Framework Core |
| Web frontend | Next.js, React, TypeScript, Tailwind CSS |
| Apple platforms | Swift 6, SwiftUI, AppKit, CryptoKit, GRDB |
| Cross-platform .NET | Xamarin, .NET MAUI, WPF |
| Databases | SQL Server, PostgreSQL, SQLite |
| Security | Sessions & JWT, TOTP, passkeys (WebAuthn), AES-GCM, HMAC, CSP |
| Infrastructure | IIS, Docker, TrueNAS & ZFS, Caddy, Cloudflare, Linux |
| Testing & delivery | xUnit, Swift Testing, XCUITest, GitHub Actions, Sparkle |

---

Have a project in mind, or a role to talk about? Email me at [dangkhoabach2002@gmail.com](mailto:dangkhoabach2002@gmail.com), message me on [LinkedIn](https://www.linkedin.com/in/dangkhoabach) or use the contact form on [dangkhoabach.vn](https://dangkhoabach.vn).
