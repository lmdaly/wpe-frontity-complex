const settings = {
  name: "frontity-twentynineteen",
  state: {
    frontity: {
      url: "https://test.frontity.io",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "@frontity/twentynineteen-theme",
      state: {
        theme: {
          color: "#0073aa",
          menu: [
            ["Home", "/"],
            ["Fate", "/fate-it-protects-fools/"],
            ["Enjoy", "/you-enjoyed-that/"],
            ["Hello", "/hello-world/"],
          ],
          featured: {
            showOnList: true,
            showOnPost: true,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://dynahead.wpengine.com/",
          api: "https://dynahead.wpengine.com/wp-json",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
