# AGCD.io

![GitHub deployments](https://img.shields.io/github/deployments/aaronERA/agcd-site/github-pages?label=Status&style=flat-square&color=6366f1)
![License](https://img.shields.io/badge/License-MIT-30363d?style=flat-square)

> **"i talk to AI about insecurities."**

A minimalist, single-file identity hub. Designed with a utilitarian "Hugging Face" aesthetic, featuring a deep dark-mode palette, embedded SVGs, and zero external dependencies.

## ⚡ Features

- **Monolith Architecture:** HTML and CSS combined in a single `index.html` file.
- **Zero Bloat:** No JavaScript frameworks, no tracking scripts, no external font requests.
- **Vector Graphics:** All icons are raw SVGs embedded directly in the code.
- **Responsive:** Fluid "card" layout that adapts to mobile and desktop.

## 🛠️ Tech Stack

- **Core:** Semantic HTML5 + CSS3 (Flexbox).
- **Hosting:** GitHub Pages.
- **DNS:** Custom records pointing `agcd.io` directly to GitHub's CDN.

## 📂 Structure

```text
agcd-site/
├── CNAME          # DNS pointer for agcd.io
├── README.md      # Documentation
└── index.html     # The entire website

🎨 Customization
To add new links, edit the .links container in index.html. Each link is a self-contained block:
code
Html
<a href="URL_HERE" class="link-item">
    <svg>...</svg>
    <span class="link-text">Name</span>
    <span class="arrow">&rarr;</span>
</a>
## 📝 License

This project is licensed under the **MIT License** — free to use, modify, and distribute, with attribution.  
See the [LICENSE](./LICENSE) file for the full legal text.

---

© 2026 Aaron Gelera.  
Released with ❤️ under MIT.  
