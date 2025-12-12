import { _ as r, l as e, G as s, d as t, H as a } from './MarkdownPage-p1fdV9J8.js';
import { p as o } from './treemap-KMMF4GRG-gY4DcCqE.js';
import './ui-vendor-uWBPbD_0.js';
import './react-vendor-BI367zWJ.js';
import './index-oaZTyD6l.js';
import './graph-vendor-BuQDEdtN.js';
import './markdown-vendor-DSh4w1Df.js';
import './_baseUniq-D4RoSXpb.js';
import './_basePickBy-B8l-XB8e.js';
import './clone-GXC5ofYK.js';
var n = {
    parse: r(async (r) => {
      const s = await o('info', r);
      e.debug(s);
    }, 'parse'),
  },
  i = { version: a.version + '' },
  p = {
    parser: n,
    db: { getVersion: r(() => i.version, 'getVersion') },
    renderer: {
      draw: r((r, a, o) => {
        e.debug('rendering info diagram\n' + r);
        const n = s(a);
        t(n, 100, 400, !0);
        n.append('g')
          .append('text')
          .attr('x', 100)
          .attr('y', 40)
          .attr('class', 'version')
          .attr('font-size', 32)
          .style('text-anchor', 'middle')
          .text(`v${o}`);
      }, 'draw'),
    },
  };
export { p as diagram };
