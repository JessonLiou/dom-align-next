import utils from './utils';

function getRegion(node) {
  let offset;
  let w;
  let h;
  const bodyScale = utils.getBodyScale(node);
  if (!utils.isWindow(node) && node.nodeType !== 9) {
    offset = utils.offset(node);
    w = utils.outerWidth(node);
    h = utils.outerHeight(node);
  } else {
    const win = utils.getWindow(node);
    offset = {
      left: utils.getWindowScrollLeft(win),
      top: utils.getWindowScrollTop(win),
    };
    w = utils.viewportWidth(win);
    h = utils.viewportHeight(win);
  }
  offset.width = w / bodyScale.matrix[0];
  offset.height = h / bodyScale.matrix[3];
  offset.realWidth = w;
  offset.realHeight = h;
  return offset;
}

export default getRegion;
