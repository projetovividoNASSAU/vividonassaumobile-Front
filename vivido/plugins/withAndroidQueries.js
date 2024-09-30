const { withAndroidManifest } = require('@expo/config-plugins');

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

module.exports = withAndroidQueries;
