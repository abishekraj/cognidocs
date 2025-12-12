import { _ as t, d as i, l as e } from './MarkdownPage-p1fdV9J8.js';
var o = t((t, o, h, r) => {
    t.attr('class', h);
    const { width: s, height: n, x: g, y: w } = a(t, o);
    i(t, n, s, r);
    const c = d(g, w, s, n, o);
    (t.attr('viewBox', c), e.debug(`viewBox configured: ${c} with padding: ${o}`));
  }, 'setupViewPortForSVG'),
  a = t((t, i) => {
    var e;
    const o = (null == (e = t.node()) ? void 0 : e.getBBox()) || {
      width: 0,
      height: 0,
      x: 0,
      y: 0,
    };
    return { width: o.width + 2 * i, height: o.height + 2 * i, x: o.x, y: o.y };
  }, 'calculateDimensionsWithPadding'),
  d = t((t, i, e, o, a) => `${t - a} ${i - a} ${e} ${o}`, 'createViewBox');
export { o as s };
