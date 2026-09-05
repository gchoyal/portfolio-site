"
Instagram Carousel Publisher Script for @gchoyal_websitedeveloper
"

import os
import sys

# Ensure instagrapi is installed
try:
    from instagrapi import Client
except ImportError:
    print([*] Installing instagrapi library...)
    import subprocess
    subprocess.check_call([sys.executable, -m, pip, install, instagrapi, pillow])
    from instagrapi import Client

USERNAME = gchoyal_websitedeveloper
PASSWORD = os.environ.get(IG_PASSWORD, Kaali@454446)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
IMAGE_PATHS = [
    os.path.join(BASE_DIR, assets, aura-living-showcase.jpg),
    os.path.join(BASE_DIR, assets, conversion-guide-preview.jpg)
]

CAPTION = "Is your website actually generating leads while you sleep, or is it just sitting there? 💤👇

Most small business owners lose up to 70% of their visitors in the first 5 seconds because of 3 common mistakes:
❌ Slow load times (> 3 seconds)
❌ Cluttered navigation with no clear CTA
❌ Outdated mobile experience

Here is a glimpse of our recent bespoke redesign for @AuraLiving:
✨ Ultra-fast <1s loading speed
✨ Glassmorphic modern aesthetic
✨ Streamlined 1-click mobile checkout
✨ +145% increase in conversion lift within 30 days!

💡 Want to know what is holding your website back?
👉 DM us AUDIT for a 100% FREE 5-minute video teardown of your website!

🌐 Explore our full portfolio: https://gchoyal.github.io/portfolio-site/
👨‍💻 Designed by @gchoyal_websitedeveloper

---
#webdesign #uidesign #webdesigner #smallbusinessowner #entrepreneurmindset #websitedesign #canadiansmallbusiness #businessgrowth #cro #ecommercewebsite #shopifyexpert #frontenddeveloper #torontobusiness #vancouverbusiness #webdevelopment #uxdesign #landingpagedesign"

def main():
    print(= * 50)
    print(f[*] Connecting to Instagram as @{USERNAME}...)
    print(= * 50)

    cl = Client()
    cl.delay_range = [2, 5]

    try:
        cl.login(USERNAME, PASSWORD)
        print([✓] Login successful!)
    except Exception as e:
        print(f[!] Login error: {e})
        print(\nNote: If Instagram prompted a 2FA/Security challenge, verify on your phone or use Meta Business Suite.)
        return

    print(f[*] Uploading carousel with {len(IMAGE_PATHS)} slides...)
    try:
        media = cl.album_upload(
            paths=IMAGE_PATHS,
            caption=CAPTION
        )
        print(f[✓] Post successfully published! Media ID: {media.pk})
    except Exception as e:
        print(f[!] Upload error: {e})

if __name__ == __main__:
    main()