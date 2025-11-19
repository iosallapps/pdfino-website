# GitHub Pages Setup Guide for Pdfino Legal Documents

## 🚀 Quick Setup (10 minutes)

This guide will help you publish your Terms of Service and Privacy Policy to **pdfino.com** using GitHub Pages (FREE).

---

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in (or create free account)
2. Click the **"+"** icon (top right) → **"New repository"**
3. Name it: `pdfino-legal` (or any name you like)
4. Set to **Public**
5. ✅ Check **"Add a README file"**
6. Click **"Create repository"**

---

## Step 2: Upload Your HTML Files

1. In your new repository, click **"Add file"** → **"Upload files"**
2. Drag and drop these 2 files from `/Users/vladtudosoiu/Developer/Vexan/docs/`:
   - `terms.html`
   - `privacy.html`
3. Add commit message: `Add legal documents`
4. Click **"Commit changes"**

---

## Step 3: Enable GitHub Pages

1. In your repository, click **"Settings"** (tab at top)
2. Scroll down to **"Pages"** in the left sidebar
3. Under **"Source"**, select:
   - Branch: **`main`**
   - Folder: **`/ (root)`**
4. Click **"Save"**
5. Wait 1-2 minutes for deployment

You'll see: **"Your site is published at https://[your-username].github.io/pdfino-legal/"**

---

## Step 4: Connect Your Custom Domain (pdfino.com)

### A. Configure DNS at Namecheap

1. Go to [Namecheap Dashboard](https://ap.www.namecheap.com/domains/list/)
2. Find **pdfino.com** → Click **"Manage"**
3. Go to **"Advanced DNS"** tab
4. Add these DNS records:

| Type  | Host | Value | TTL |
|-------|------|-------|-----|
| A Record | @ | 185.199.108.153 | Automatic |
| A Record | @ | 185.199.109.153 | Automatic |
| A Record | @ | 185.199.110.153 | Automatic |
| A Record | @ | 185.199.111.153 | Automatic |
| CNAME Record | www | [your-username].github.io | Automatic |

**Replace `[your-username]` with your actual GitHub username!**

5. Save all DNS records

### B. Configure Custom Domain in GitHub

1. Back in GitHub repository → **Settings** → **Pages**
2. Under **"Custom domain"**, enter: `pdfino.com`
3. Click **"Save"**
4. ✅ Check **"Enforce HTTPS"** (wait 5-10 minutes for SSL certificate)

---

## Step 5: Wait for DNS Propagation

DNS changes take **15 minutes to 24 hours** to fully propagate.

**Check if it's working:**
- Open browser
- Try: `https://pdfino.com/terms.html`
- Try: `https://pdfino.com/privacy.html`

If not working yet, wait 30 minutes and try again.

---

## ✅ Final URLs for Your App

Once DNS propagates, update these URLs in your app:

```swift
// Terms of Service
https://pdfino.com/terms.html

// Privacy Policy
https://pdfino.com/privacy.html
```

---

## 🔧 Troubleshooting

### "DNS check unsuccessful"
- **Solution:** Wait longer. DNS can take up to 24 hours.
- **Tip:** Clear your browser cache or try incognito mode

### "404 Not Found"
- **Check:** Did you upload `terms.html` and `privacy.html` to the root of the repo?
- **Check:** Is GitHub Pages enabled with `main` branch selected?

### "Not Secure" Warning
- **Solution:** Enable "Enforce HTTPS" in GitHub Pages settings
- **Wait:** SSL certificate takes 5-10 minutes to provision

### CNAME Record Error
- **Check:** Make sure you typed your GitHub username correctly
- **Format:** Should be `your-username.github.io` (no https://)

---

## 📝 How to Update Documents Later

1. Go to your GitHub repository
2. Click on `terms.html` or `privacy.html`
3. Click the **pencil icon** (Edit this file)
4. Make your changes
5. Click **"Commit changes"**
6. Changes go live in **1-2 minutes** automatically!

---

## 🎉 You're Done!

Your legal documents are now live at:
- ✅ https://pdfino.com/terms.html
- ✅ https://pdfino.com/privacy.html

**Next step:** Update the URLs in your iOS app's SettingsView.swift

---

## 💡 Bonus: Create Homepage (Optional)

Want a simple homepage at `https://pdfino.com`?

1. In your GitHub repo, create file: `index.html`
2. Add simple landing page:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Pdfino - Compress PDFs, Videos & Images</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, sans-serif;
            text-align: center;
            padding: 50px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            min-height: 100vh;
        }
        h1 { font-size: 48px; margin-bottom: 20px; }
        p { font-size: 20px; margin-bottom: 30px; }
        .btn {
            display: inline-block;
            padding: 15px 30px;
            background: white;
            color: #667eea;
            text-decoration: none;
            border-radius: 10px;
            font-weight: bold;
            margin: 10px;
        }
        .footer {
            margin-top: 50px;
            font-size: 14px;
        }
        .footer a { color: white; }
    </style>
</head>
<body>
    <h1>📄 Pdfino</h1>
    <p>Compress PDFs, Videos & Images on iOS</p>
    <a href="https://apps.apple.com/app/pdfino/idXXXXXXXX" class="btn">Download on App Store</a>
    <div class="footer">
        <a href="/terms.html">Terms of Service</a> |
        <a href="/privacy.html">Privacy Policy</a>
    </div>
</body>
</html>
```

3. Update the App Store link when you have it
4. Commit and you'll have a landing page!

---

## 📞 Need Help?

If you encounter any issues:
1. Check GitHub's [Pages documentation](https://docs.github.com/en/pages)
2. Verify DNS settings in Namecheap
3. Wait at least 30 minutes for DNS propagation

**Common mistake:** Forgetting to replace `[your-username]` with your actual GitHub username in DNS records!

---

**Status:** Ready to deploy! 🚀
**Time Required:** 10-15 minutes (plus DNS wait time)
**Cost:** $0.00 (FREE)
