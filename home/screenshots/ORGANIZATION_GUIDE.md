# Screenshot Organization Guide

## Current Screenshots Location
All new screenshots are in `/screenshots/Updated Screens/` with timestamp filenames.

## Suggested Organization Structure

The screenshots directory now has organized folders:
```
screenshots/
├── themes/
│   ├── catppuccin/
│   │   ├── dark/
│   │   └── light/
│   ├── nord/
│   │   ├── dark/
│   │   └── light/
│   ├── gruvbox/
│   │   ├── dark/
│   │   └── light/
│   ├── tokyo-night/
│   │   ├── dark/
│   │   └── light/
│   ├── dracula/
│   │   ├── dark/
│   │   └── light/
│   ├── solarized/
│   │   ├── dark/
│   │   └── light/
│   ├── kanagawa/
│   │   ├── dark/
│   │   └── light/
│   ├── ayu/
│   │   ├── dark/
│   │   └── light/
│   └── monochrome/
│       ├── dark/
│       └── light/
└── settings/
```

## How to Organize Your Screenshots

### Identifying Theme & Mode

**Look for these visual cues:**

1. **Background Color**
   - Very dark backgrounds = Dark mode
   - Light/white backgrounds = Light mode

2. **Color Scheme Identification**
   
   **Catppuccin:**
   - Dark: Deep purple/mauve accent colors, #1e1e2e base
   - Light: Soft pastels, cream background
   
   **Nord:**
   - Dark: Cool blues and grays, arctic feel
   - Light: Clean whites with muted blue accents
   
   **Gruvbox:**
   - Dark: Warm browns/oranges, retro feel, #282828 base
   - Light: Cream/beige background, earthy tones
   
   **Tokyo Night:**
   - Dark: Deep blue background, bright blue/purple accents
   - Light: Light gray background, muted blues
   
   **Dracula:**
   - Dark: Purple (#bd93f9) and pink (#ff79c6) accents, #282a36 base
   - Light: Adapted pastels
   
   **Solarized:**
   - Dark: Blue-tinted dark background (#002b36), distinctive yellow/orange
   - Light: Warm cream background (#fdf6e3)
   
   **Kanagawa:**
   - Dark: Muted natural tones, Japanese-inspired, soft purple/blue
   - Light: Warm cream/beige, earthy muted colors
   
   **Ayu:**
   - Dark: Very dark background (#0f1419), bright cyan blue accents
   - Light: Clean white, bright accent colors
   
   **Monochrome:**
   - Dark: Pure white text on black background
   - Light: Pure black text on white background

### Renaming Convention

Once you've identified the theme and mode, rename files like:
- `catppuccin-dark.png`
- `nord-light.png`
- `gruvbox-dark.png`
- `tokyo-night-light.png`
- etc.

For settings screenshots, use descriptive names:
- `settings-general.png`
- `settings-social-links.png`
- `settings-footer.png`
- `settings-help.png`

## Quick Identification Tips

1. Open each screenshot
2. Look at the time/greeting area colors (top-left)
3. Check the primary accent color of link cards
4. Note the background color tone
5. Move to appropriate theme/mode folder
6. Rename with descriptive name

## Example Workflow

```bash
# View a screenshot
xdg-open "Screenshot 2025-12-17 at 12-20-31 startpage.png"

# Identify as Nord Dark, then:
mv "Screenshot 2025-12-17 at 12-20-31 startpage.png" themes/nord/dark/main-view.png

# Or for a settings screenshot:
mv "Screenshot 2025-12-17 at 12-23-41 startpage.png" settings/social-links-tab.png
```

## Count Check
You should have approximately:
- 2 screenshots per theme (dark + light) × 9 themes = 18 theme screenshots
- 2-4 settings screenshots
- Total: ~20 screenshots

This matches the 20 files currently in "Updated Screens" folder.
