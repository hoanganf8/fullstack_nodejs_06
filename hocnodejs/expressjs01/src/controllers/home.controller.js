module.exports = {
  index: function (req, res) {
    res.send(
      `
        ${this.getSlide()}
        <h1>Home</h1>
        `
    );
  },
  getSlide: () => {
    return `<h1>Slide</h1>`;
  },
};
