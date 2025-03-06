// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: "/admin/(.*)",
        headers: [
          {
            key: "Content-Type",
            value: "text/html",
          },
        ],
      },
    ];
  },
};
