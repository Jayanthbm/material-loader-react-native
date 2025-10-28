# 🌈 material-loader-react-native

[![npm version](https://img.shields.io/npm/v/material-loader-react-native.svg?color=4caf50)](https://www.npmjs.com/package/material-loader-react-native)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/platform-react--native-blue.svg)](https://reactnative.dev/)
[![Expo Compatible](https://img.shields.io/badge/Expo-compatible-green)](https://expo.dev)

A **Material Design 3 inspired animated loading indicator** for **React Native** and **Expo**, powered by `react-native-reanimated` and `react-native-svg`. It morphs through geometric shapes while rotating — similar to the expressive style of M3.

Ported from the web version of [M3E — Material 3 Expressive](https://matraic.github.io/m3e/#/components/loading-indicator.html)

---

## ✨ Features

- 🎨 Material 3 expressive style
- 🔁 Infinite rotation animation
- 🔺 Dynamic morphing between multiple shapes
- ⚡ Built with `react-native-reanimated` for buttery-smooth performance
- 📱 Works on **iOS**, **Android**, and **Web (Expo)**
- 🧩 Fully customizable — size, colors, animation speed, etc.

---

## 🚀 Installation

```bash
npm install material-loader-react-native
# or
yarn add material-loader-react-native
```

### 📦 Peer Dependencies

Make sure you have these installed in your React Native or Expo project:

```bash
expo install react-native-reanimated react-native-svg
```

---

## 💡 Usage

```tsx
import React from "react";
import { View } from "react-native";
import { M3eLoader } from "material-loader-react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FAFAFA",
      }}
    >
      <M3eLoader
        size={80}
        color="#FF5722"
        duration={3000}
        shapeInterval={1000}
        backgroundColor="#E0F7FA"
        variant="contained"
      />
    </View>
  );
}
```

---

## ⚙️ Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| **`size`** | `number` | `60` | Loader size (diameter for contained variant) |
| **`color`** | `string` | `#6750A4` | Fill color of the shape |
| **`duration`** | `number` | `5000` | Duration of one full rotation in milliseconds |
| **`shapeInterval`** | `number` | `700` | Time interval for morphing to the next shape |
| **`backgroundColor`** | `string` | `#BBDEFB` | Background color for `variant="contained"` |
| **`variant`** | `'contained' \| 'uncontained'` | `'uncontained'` | Loader appearance style |
| **`style`** | `StyleProp<ViewStyle>` | `undefined` | Optional custom styles for the wrapper view |

---

## 🧱 Example (Expo Snack)

Try it live:  
👉 [**Open in Expo Snack**](https://snack.expo.dev/@jayanthm/m3-loader)

---

## 🛠️ Development

Clone and build locally:

```bash
git clone https://github.com/Jayanthbm/material-loader-react-native.git
cd material-loader-react-native
npm install
npm run build
```

Then link locally to test inside another app:

```bash
npm link
cd ../your-app
npm link material-loader-react-native
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to open a PR or issue on [GitHub Issues](https://github.com/Jayanthbm/material-loader-react-native/issues).

---

## 🪪 License

MIT © 2025 [Jayanthbharadwaj M](https://github.com/Jayanthbm)

---

### 💖 Support

If you find this useful, please ⭐ the repo — it helps others discover it!
