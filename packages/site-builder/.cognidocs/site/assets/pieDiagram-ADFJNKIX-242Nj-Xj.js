import {
  _ as e,
  g as t,
  s as a,
  a as i,
  b as r,
  p as n,
  o as s,
  l,
  c as o,
  C as p,
  G as c,
  I as d,
  d as u,
  x as m,
  E as g,
} from './MarkdownPage-p1fdV9J8.js';
import { p as h } from './chunk-4BX2VUAB-DyVaAKXC.js';
import { p as f } from './treemap-KMMF4GRG-gY4DcCqE.js';
import { d as x, o as w, a as v } from './graph-vendor-BuQDEdtN.js';
import './ui-vendor-uWBPbD_0.js';
import './react-vendor-BI367zWJ.js';
import './index-oaZTyD6l.js';
import './markdown-vendor-DSh4w1Df.js';
import './_baseUniq-D4RoSXpb.js';
import './_basePickBy-B8l-XB8e.js';
import './clone-GXC5ofYK.js';
var S = g.pie,
  $ = { sections: new Map(), showData: !1 },
  y = $.sections,
  b = $.showData,
  T = structuredClone(S),
  C = {
    getConfig: e(() => structuredClone(T), 'getConfig'),
    clear: e(() => {
      ((y = new Map()), (b = $.showData), m());
    }, 'clear'),
    setDiagramTitle: s,
    getDiagramTitle: n,
    setAccTitle: r,
    getAccTitle: i,
    setAccDescription: a,
    getAccDescription: t,
    addSection: e(({ label: e, value: t }) => {
      if (t < 0)
        throw new Error(
          `"${e}" has invalid value: ${t}. Negative values are not allowed in pie charts. All slice values must be >= 0.`
        );
      y.has(e) || (y.set(e, t), l.debug(`added new section: ${e}, with value: ${t}`));
    }, 'addSection'),
    getSections: e(() => y, 'getSections'),
    setShowData: e((e) => {
      b = e;
    }, 'setShowData'),
    getShowData: e(() => b, 'getShowData'),
  },
  D = e((e, t) => {
    (h(e, t), t.setShowData(e.showData), e.sections.map(t.addSection));
  }, 'populateDb'),
  k = {
    parse: e(async (e) => {
      const t = await f('pie', e);
      (l.debug(t), D(t, C));
    }, 'parse'),
  },
  j = e(
    (e) =>
      `\n  .pieCircle{\n    stroke: ${e.pieStrokeColor};\n    stroke-width : ${e.pieStrokeWidth};\n    opacity : ${e.pieOpacity};\n  }\n  .pieOuterCircle{\n    stroke: ${e.pieOuterStrokeColor};\n    stroke-width: ${e.pieOuterStrokeWidth};\n    fill: none;\n  }\n  .pieTitleText {\n    text-anchor: middle;\n    font-size: ${e.pieTitleTextSize};\n    fill: ${e.pieTitleTextColor};\n    font-family: ${e.fontFamily};\n  }\n  .slice {\n    font-family: ${e.fontFamily};\n    fill: ${e.pieSectionTextColor};\n    font-size:${e.pieSectionTextSize};\n    // fill: white;\n  }\n  .legend text {\n    fill: ${e.pieLegendTextColor};\n    font-family: ${e.fontFamily};\n    font-size: ${e.pieLegendTextSize};\n  }\n`,
    'getStyles'
  ),
  A = e((e) => {
    const t = [...e.values()].reduce((e, t) => e + t, 0),
      a = [...e.entries()]
        .map(([e, t]) => ({ label: e, value: t }))
        .filter((e) => (e.value / t) * 100 >= 1)
        .sort((e, t) => t.value - e.value);
    return v().value((e) => e.value)(a);
  }, 'createPieArcs'),
  M = {
    parser: k,
    db: C,
    renderer: {
      draw: e((e, t, a, i) => {
        l.debug('rendering pie chart\n' + e);
        const r = i.db,
          n = o(),
          s = p(r.getConfig(), n.pie),
          m = 18,
          g = 450,
          h = g,
          f = c(t),
          v = f.append('g');
        v.attr('transform', 'translate(225,225)');
        const { themeVariables: S } = n;
        let [$] = d(S.pieOuterStrokeWidth);
        $ ?? ($ = 2);
        const y = s.textPosition,
          b = Math.min(h, g) / 2 - 40,
          T = x().innerRadius(0).outerRadius(b),
          C = x()
            .innerRadius(b * y)
            .outerRadius(b * y);
        v.append('circle')
          .attr('cx', 0)
          .attr('cy', 0)
          .attr('r', b + $ / 2)
          .attr('class', 'pieOuterCircle');
        const D = r.getSections(),
          k = A(D),
          j = [
            S.pie1,
            S.pie2,
            S.pie3,
            S.pie4,
            S.pie5,
            S.pie6,
            S.pie7,
            S.pie8,
            S.pie9,
            S.pie10,
            S.pie11,
            S.pie12,
          ];
        let M = 0;
        D.forEach((e) => {
          M += e;
        });
        const z = k.filter((e) => '0' !== ((e.data.value / M) * 100).toFixed(0)),
          F = w(j);
        (v
          .selectAll('mySlices')
          .data(z)
          .enter()
          .append('path')
          .attr('d', T)
          .attr('fill', (e) => F(e.data.label))
          .attr('class', 'pieCircle'),
          v
            .selectAll('mySlices')
            .data(z)
            .enter()
            .append('text')
            .text((e) => ((e.data.value / M) * 100).toFixed(0) + '%')
            .attr('transform', (e) => 'translate(' + C.centroid(e) + ')')
            .style('text-anchor', 'middle')
            .attr('class', 'slice'),
          v
            .append('text')
            .text(r.getDiagramTitle())
            .attr('x', 0)
            .attr('y', -200)
            .attr('class', 'pieTitleText'));
        const O = [...D.entries()].map(([e, t]) => ({ label: e, value: t })),
          R = v
            .selectAll('.legend')
            .data(O)
            .enter()
            .append('g')
            .attr('class', 'legend')
            .attr('transform', (e, t) => 'translate(216,' + (22 * t - (22 * O.length) / 2) + ')');
        (R.append('rect')
          .attr('width', m)
          .attr('height', m)
          .style('fill', (e) => F(e.label))
          .style('stroke', (e) => F(e.label)),
          R.append('text')
            .attr('x', 22)
            .attr('y', 14)
            .text((e) => (r.getShowData() ? `${e.label} [${e.value}]` : e.label)));
        const B =
          512 +
          Math.max(
            ...R.selectAll('text')
              .nodes()
              .map((e) => (null == e ? void 0 : e.getBoundingClientRect().width) ?? 0)
          );
        (f.attr('viewBox', `0 0 ${B} 450`), u(f, g, B, s.useMaxWidth));
      }, 'draw'),
    },
    styles: j,
  };
export { M as diagram };
