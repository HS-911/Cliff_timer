# Cliff Timer

A mobile-friendly web application that estimates the height of a cliff or bridge using Newton's laws of motion and free-fall physics.

## Description

Cliff Timer is a physics-based measurement tool that allows you to measure the height of a cliff or bridge by timing the fall of an object. Simply start the timer when the object is dropped, stop it when it hits the ground, and the app instantly calculates the height using the free-fall equation:

**h = ½ × g × t²**

Where:
- **h** = height in meters
- **g** = gravitational acceleration (9.81 m/s²)
- **t** = measured fall time in seconds

## Features

✨ Real-time timer with smooth updates  
📱 Fully responsive mobile-first design  
🎯 Instant height calculation  
🎨 Clean, modern interface with intuitive controls  
⚡ No dependencies—runs immediately in any browser  
🔄 **Unit Toggle**: Click the height display to convert between meters and feet  

## Unit Conversion

The app supports two measurement units:

- **Meters (m)** - SI standard unit
- **Feet (ft)** - Imperial/US customary unit

**Conversion Formula:**
- 1 meter = 3.28084 feet

**How to Toggle Units:**
1. After the timer stops and height is calculated
2. Click or tap the height display (the white triangle at the top)
3. The height instantly converts between meters and feet
4. Click again to toggle back
5. Each measurement is formatted to 2 decimal places (e.g., 45.20 m or 148.30 ft)

## Try It Now

🔗 **[Launch Cliff Timer](https://hs-911.github.io/Cliff_timer/)**

## ⚠️ Disclaimer

This is an **educational physics tool** for demonstration purposes only. Please note:

- **Safety First**: Never use this app as a reason to drop objects from heights. Always prioritize safety.
- **Accuracy Limitations**: This calculator assumes an ideal physics model with no air resistance and constant gravity. Real-world measurements may vary due to air resistance, wind, and other environmental factors.
- **Educational Use**: Best used in controlled educational settings with proper safety measures and supervision.
- **Not for Professional Use**: Do not rely on this app for professional engineering or structural assessments. Use proper surveying equipment and professional engineers.

## How It Works

1. Stand safely below the cliff or bridge
2. Drop an object and press **"Start Timer"**
3. Press **"Stop Timer"** when the object hits the ground
4. The app calculates and displays the height instantly
5. **Optional**: Click the height display to toggle between meters (m) and feet (ft)
6. Press **"Reset"** to measure again

## Technical Details

- **Built with**: HTML5, CSS3, JavaScript
- **Timer Precision**: Uses `performance.now()` for millisecond accuracy
- **Physics Engine**: Implements Newton's second law of motion under free-fall conditions
- **Responsive Design**: Works perfectly on phones, tablets, and desktops

---

*Created with ❤️ for physics enthusiasts and educators*
