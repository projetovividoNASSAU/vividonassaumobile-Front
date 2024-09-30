const { withAndroidManifest } = require('@expo/config-plugins');

// Plugin para adicionar permissões customizadas no AndroidManifest.xml
const withAndroidQueries = (config) => {
  return withAndroidManifest(config, (config) => {
    config.modResults.manifest.queries = [
      ...(config.modResults.manifest.queries || []),
      {
        intent: [
          {
            action: [{ $: { 'android:name': 'android.intent.action.SENDTO' } }],
            data: [{ $: { 'android:scheme': 'mailto' } }],
          },
          {
            action: [{ $: { 'android:name': 'android.intent.action.DIAL' } }],
            data: [{ $: { 'android:scheme': 'tel' } }],
          },
        ],
      },
    ];

    return config;
  });
};

// Exporta a configuração completa do seu app (equivalente ao app.json)
module.exports = {
  expo: {
    name: "vivido",
    slug: "vivido",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    scheme: "vivido",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    ios: {
      supportsTablet: true
    },
    android: {
      permissions: [
        "CALL_PHONE"
      ],
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      package: "com.uninassau.vivido"
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    plugins: [
      "expo-router",
      "expo-font",
      withAndroidQueries, // Adiciona o plugin aqui
    ],
    extra: {
      eas: {
        projectId: "708b80d7-cb24-43b1-86f2-27d38e937ce6"
      }
    },
    runtimeVersion: {
      policy: "appVersion"
    },
    updates: {
      url: "https://u.expo.dev/708b80d7-cb24-43b1-86f2-27d38e937ce6"
    },
    owner: "bruninha_motoplay"
  }
};
