#!/usr/bin/env python3
"""
Generate PNG icons for the FORCE Tracker PWA
"""

try:
    from PIL import Image, ImageDraw, ImageFont
    PILLOW_AVAILABLE = True
except ImportError:
    PILLOW_AVAILABLE = False
    print("Pillow not available. Install with: pip install Pillow")
    print("Creating placeholder files instead...")

import os

# Icon sizes needed for PWA
SIZES = [72, 96, 128, 144, 152, 192, 384, 512]

def create_icon(size):
    """Create a simple icon with the FORCE branding"""
    # Create image with background color
    img = Image.new('RGB', (size, size), color='#2c3e50')
    draw = ImageDraw.Draw(img)

    # Draw dumbbell shape
    # Left circle
    left_x = size * 0.25
    circle_radius = size * 0.08
    draw.ellipse([left_x - circle_radius, size/2 - circle_radius,
                  left_x + circle_radius, size/2 + circle_radius],
                 fill='#3498db')

    # Right circle
    right_x = size * 0.75
    draw.ellipse([right_x - circle_radius, size/2 - circle_radius,
                  right_x + circle_radius, size/2 + circle_radius],
                 fill='#3498db')

    # Bar connecting them
    bar_height = size * 0.04
    draw.rectangle([left_x, size/2 - bar_height,
                   right_x, size/2 + bar_height],
                  fill='#3498db')

    # Draw letter F
    try:
        # Try to use a nice font
        font_size = int(size * 0.4)
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", font_size)
    except:
        # Fallback to default font
        font = ImageFont.load_default()

    # Draw text
    text = "F"
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]

    text_x = (size - text_width) / 2
    text_y = size * 0.6

    draw.text((text_x, text_y), text, fill='white', font=font)

    return img

def create_placeholder(size):
    """Create a simple colored placeholder when PIL is not available"""
    # Create a minimal 1x1 PNG and scale it
    # This is a base64 encoded 1x1 transparent PNG
    import base64

    # Create icons directory if it doesn't exist
    os.makedirs('icons', exist_ok=True)

    filename = f'icons/icon-{size}.png'

    # Create a simple colored square using a hex editor approach
    # For now, just create an empty file as placeholder
    with open(filename, 'wb') as f:
        # Minimal PNG header
        f.write(b'\x89PNG\r\n\x1a\n')
        print(f"Created placeholder: {filename}")

def main():
    """Generate all icon sizes"""
    os.makedirs('icons', exist_ok=True)

    if PILLOW_AVAILABLE:
        print("Generating icons with Pillow...")
        for size in SIZES:
            img = create_icon(size)
            filename = f'icons/icon-{size}.png'
            img.save(filename, 'PNG')
            print(f"Created: {filename}")
    else:
        print("\nTo generate proper icons, install Pillow:")
        print("  pip install Pillow")
        print("\nOr use online tools like:")
        print("  - https://realfavicongenerator.net/")
        print("  - https://www.pwabuilder.com/")
        print("\nUsing the SVG file at icons/icon.svg as source")

if __name__ == '__main__':
    main()
