const directive = {
  mounted: (el, binding) => {
    if (!binding.value) binding.value = {};
    addWaterMark({
      parentNode: el,
      str: binding.value.str,
      font: binding.value.font,
      textColor: binding.value.textColor,
    });
  },
};

/**
 *
 * @param {String} str 水印字符串
 * @param {String} parentNode
 * @param {String} font
 * @param {String} textColor
 */
function addWaterMark({
  str = "",
  parentNode,
  font = "",
  textColor = "grey",
} = {}) {
  const canvasNode = document.createElement("canvas");
  parentNode.appendChild(canvasNode);
  canvasNode.width = 200;
  canvasNode.height = 200;
  canvasNode.style.display = "none";
  const cans = canvasNode.getContext("2d");
  cans.rotate((-20 * Math.PI) / 180);
  if (font) cans.font = font;
  cans.fillStyle = textColor;
  cans.textAlign = "left";
  cans.textBaseline = "middle";
  cans.fillText(str || "水印呀", canvasNode.width / 10, canvasNode.height / 2);
  parentNode.style.backgroundImage = `url(${canvasNode.toDataURL(
    "image/png"
  )})`;
}
export default directive;
