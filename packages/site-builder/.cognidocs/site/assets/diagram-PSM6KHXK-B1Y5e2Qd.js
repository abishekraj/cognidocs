var e;
import {
  _ as t,
  C as a,
  D as l,
  G as s,
  d as r,
  l as n,
  aa as o,
  b as i,
  a as c,
  o as d,
  p,
  g as h,
  s as m,
  E as y,
  ab as f,
  x as u,
} from './MarkdownPage-p1fdV9J8.js';
import { s as S } from './chunk-QN33PNHL-C981hClY.js';
import { p as g } from './chunk-4BX2VUAB-DyVaAKXC.js';
import { p as x } from './treemap-KMMF4GRG-gY4DcCqE.js';
import { f as v, o as b, h as C, t as $, s as w } from './graph-vendor-BuQDEdtN.js';
import './ui-vendor-uWBPbD_0.js';
import './react-vendor-BI367zWJ.js';
import './index-oaZTyD6l.js';
import './markdown-vendor-DSh4w1Df.js';
import './_baseUniq-D4RoSXpb.js';
import './_basePickBy-B8l-XB8e.js';
import './clone-GXC5ofYK.js';
var k =
  (t(
    (e = class {
      constructor() {
        ((this.nodes = []),
          (this.levels = new Map()),
          (this.outerNodes = []),
          (this.classes = new Map()),
          (this.setAccTitle = i),
          (this.getAccTitle = c),
          (this.setDiagramTitle = d),
          (this.getDiagramTitle = p),
          (this.getAccDescription = h),
          (this.setAccDescription = m));
      }
      getNodes() {
        return this.nodes;
      }
      getConfig() {
        const e = y,
          t = l();
        return a({ ...e.treemap, ...(t.treemap ?? {}) });
      }
      addNode(e, t) {
        (this.nodes.push(e),
          this.levels.set(e, t),
          0 === t && (this.outerNodes.push(e), this.root ?? (this.root = e)));
      }
      getRoot() {
        return { name: '', children: this.outerNodes };
      }
      addClass(e, t) {
        const a = this.classes.get(e) ?? { id: e, styles: [], textStyles: [] },
          l = t.replace(/\\,/g, '§§§').replace(/,/g, ';').replace(/§§§/g, ',').split(';');
        (l &&
          l.forEach((e) => {
            (f(e) &&
              ((null == a ? void 0 : a.textStyles) ? a.textStyles.push(e) : (a.textStyles = [e])),
              (null == a ? void 0 : a.styles) ? a.styles.push(e) : (a.styles = [e]));
          }),
          this.classes.set(e, a));
      }
      getClasses() {
        return this.classes;
      }
      getStylesForClass(e) {
        var t;
        return (null == (t = this.classes.get(e)) ? void 0 : t.styles) ?? [];
      }
      clear() {
        (u(),
          (this.nodes = []),
          (this.levels = new Map()),
          (this.outerNodes = []),
          (this.classes = new Map()),
          (this.root = void 0));
      }
    }),
    'TreeMapDB'
  ),
  e);
function L(e) {
  if (!e.length) return [];
  const t = [],
    a = [];
  return (
    e.forEach((e) => {
      const l = { name: e.name, children: 'Leaf' === e.type ? void 0 : [] };
      for (
        l.classSelector = null == e ? void 0 : e.classSelector,
          (null == e ? void 0 : e.cssCompiledStyles) &&
            (l.cssCompiledStyles = [e.cssCompiledStyles]),
          'Leaf' === e.type && void 0 !== e.value && (l.value = e.value);
        a.length > 0 && a[a.length - 1].level >= e.level;
      )
        a.pop();
      if (0 === a.length) t.push(l);
      else {
        const e = a[a.length - 1].node;
        e.children ? e.children.push(l) : (e.children = [l]);
      }
      'Leaf' !== e.type && a.push({ node: l, level: e.level });
    }),
    t
  );
}
t(L, 'buildHierarchy');
var M = t((e, a) => {
    g(e, a);
    const l = [];
    for (const t of e.TreemapRows ?? [])
      'ClassDefStatement' === t.$type && a.addClass(t.className ?? '', t.styleText ?? '');
    for (const t of e.TreemapRows ?? []) {
      const e = t.item;
      if (!e) continue;
      const s = t.indent ? parseInt(t.indent) : 0,
        r = T(e),
        n = e.classSelector ? a.getStylesForClass(e.classSelector) : [],
        o = n.length > 0 ? n.join(';') : void 0,
        i = {
          level: s,
          name: r,
          type: e.$type,
          value: e.value,
          classSelector: e.classSelector,
          cssCompiledStyles: o,
        };
      l.push(i);
    }
    const s = L(l),
      r = t((e, t) => {
        for (const l of e)
          (a.addNode(l, t), l.children && l.children.length > 0 && r(l.children, t + 1));
      }, 'addNodesRecursively');
    r(s, 0);
  }, 'populate'),
  T = t((e) => (e.name ? String(e.name) : ''), 'getItemName'),
  z = {
    parser: { yy: void 0 },
    parse: t(async (e) => {
      var t;
      try {
        const a = x,
          l = await a('treemap', e);
        n.debug('Treemap AST:', l);
        const s = null == (t = z.parser) ? void 0 : t.yy;
        if (!(s instanceof k))
          throw new Error(
            'parser.parser?.yy was not a TreemapDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.'
          );
        M(l, s);
      } catch (a) {
        throw (n.error('Error parsing treemap:', a), a);
      }
    }, 'parse'),
  },
  F = 10,
  P = {
    draw: t((e, a, i, c) => {
      const d = c.db,
        p = d.getConfig(),
        h = p.padding ?? 10,
        m = d.getDiagramTitle(),
        y = d.getRoot(),
        { themeVariables: f } = l();
      if (!y) return;
      const u = m ? 30 : 0,
        g = s(a),
        x = p.nodeWidth ? p.nodeWidth * F : 960,
        k = p.nodeHeight ? p.nodeHeight * F : 500,
        L = x,
        M = k + u;
      let T;
      (g.attr('viewBox', `0 0 ${L} ${M}`), r(g, M, L, p.useMaxWidth));
      try {
        const e = p.valueFormat || ',';
        if ('$0,0' === e) T = t((e) => '$' + v(',')(e), 'valueFormat');
        else if (e.startsWith('$') && e.includes(',')) {
          const a = /\.\d+/.exec(e),
            l = a ? a[0] : '';
          T = t((e) => '$' + v(',' + l)(e), 'valueFormat');
        } else if (e.startsWith('$')) {
          const a = e.substring(1);
          T = t((e) => '$' + v(a || '')(e), 'valueFormat');
        } else T = v(e);
      } catch (G) {
        (n.error('Error creating format function:', G), (T = v(',')));
      }
      const z = b().range([
          'transparent',
          f.cScale0,
          f.cScale1,
          f.cScale2,
          f.cScale3,
          f.cScale4,
          f.cScale5,
          f.cScale6,
          f.cScale7,
          f.cScale8,
          f.cScale9,
          f.cScale10,
          f.cScale11,
        ]),
        P = b().range([
          'transparent',
          f.cScalePeer0,
          f.cScalePeer1,
          f.cScalePeer2,
          f.cScalePeer3,
          f.cScalePeer4,
          f.cScalePeer5,
          f.cScalePeer6,
          f.cScalePeer7,
          f.cScalePeer8,
          f.cScalePeer9,
          f.cScalePeer10,
          f.cScalePeer11,
        ]),
        N = b().range([
          f.cScaleLabel0,
          f.cScaleLabel1,
          f.cScaleLabel2,
          f.cScaleLabel3,
          f.cScaleLabel4,
          f.cScaleLabel5,
          f.cScaleLabel6,
          f.cScaleLabel7,
          f.cScaleLabel8,
          f.cScaleLabel9,
          f.cScaleLabel10,
          f.cScaleLabel11,
        ]);
      m &&
        g
          .append('text')
          .attr('x', L / 2)
          .attr('y', u / 2)
          .attr('class', 'treemapTitle')
          .attr('text-anchor', 'middle')
          .attr('dominant-baseline', 'middle')
          .text(m);
      const j = g
          .append('g')
          .attr('transform', `translate(0, ${u})`)
          .attr('class', 'treemapContainer'),
        W = C(y)
          .sum((e) => e.value ?? 0)
          .sort((e, t) => (t.value ?? 0) - (e.value ?? 0)),
        D = $()
          .size([x, k])
          .paddingTop((e) => (e.children && e.children.length > 0 ? 35 : 0))
          .paddingInner(h)
          .paddingLeft((e) => (e.children && e.children.length > 0 ? F : 0))
          .paddingRight((e) => (e.children && e.children.length > 0 ? F : 0))
          .paddingBottom((e) => (e.children && e.children.length > 0 ? F : 0))
          .round(!0)(W),
        A = D.descendants().filter((e) => e.children && e.children.length > 0),
        V = j
          .selectAll('.treemapSection')
          .data(A)
          .enter()
          .append('g')
          .attr('class', 'treemapSection')
          .attr('transform', (e) => `translate(${e.x0},${e.y0})`);
      (V.append('rect')
        .attr('width', (e) => e.x1 - e.x0)
        .attr('height', 25)
        .attr('class', 'treemapSectionHeader')
        .attr('fill', 'none')
        .attr('fill-opacity', 0.6)
        .attr('stroke-width', 0.6)
        .attr('style', (e) => (0 === e.depth ? 'display: none;' : '')),
        V.append('clipPath')
          .attr('id', (e, t) => `clip-section-${a}-${t}`)
          .append('rect')
          .attr('width', (e) => Math.max(0, e.x1 - e.x0 - 12))
          .attr('height', 25),
        V.append('rect')
          .attr('width', (e) => e.x1 - e.x0)
          .attr('height', (e) => e.y1 - e.y0)
          .attr('class', (e, t) => `treemapSection section${t}`)
          .attr('fill', (e) => z(e.data.name))
          .attr('fill-opacity', 0.6)
          .attr('stroke', (e) => P(e.data.name))
          .attr('stroke-width', 2)
          .attr('stroke-opacity', 0.4)
          .attr('style', (e) => {
            if (0 === e.depth) return 'display: none;';
            const t = o({ cssCompiledStyles: e.data.cssCompiledStyles });
            return t.nodeStyles + ';' + t.borderStyles.join(';');
          }),
        V.append('text')
          .attr('class', 'treemapSectionLabel')
          .attr('x', 6)
          .attr('y', 12.5)
          .attr('dominant-baseline', 'middle')
          .text((e) => (0 === e.depth ? '' : e.data.name))
          .attr('font-weight', 'bold')
          .attr('style', (e) => {
            if (0 === e.depth) return 'display: none;';
            return (
              'dominant-baseline: middle; font-size: 12px; fill:' +
              N(e.data.name) +
              '; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;' +
              o({ cssCompiledStyles: e.data.cssCompiledStyles }).labelStyles.replace(
                'color:',
                'fill:'
              )
            );
          })
          .each(function (e) {
            if (0 === e.depth) return;
            const t = w(this),
              a = e.data.name;
            t.text(a);
            const l = e.x1 - e.x0;
            let s;
            if (!1 !== p.showValues && e.value) {
              s = l - 10 - 30 - 10 - 6;
            } else {
              s = l - 6 - 6;
            }
            const r = Math.max(15, s),
              n = t.node();
            if (n.getComputedTextLength() > r) {
              const e = '...';
              let l = a;
              for (; l.length > 0; ) {
                if (((l = a.substring(0, l.length - 1)), 0 === l.length)) {
                  (t.text(e), n.getComputedTextLength() > r && t.text(''));
                  break;
                }
                if ((t.text(l + e), n.getComputedTextLength() <= r)) break;
              }
            }
          }),
        !1 !== p.showValues &&
          V.append('text')
            .attr('class', 'treemapSectionValue')
            .attr('x', (e) => e.x1 - e.x0 - 10)
            .attr('y', 12.5)
            .attr('text-anchor', 'end')
            .attr('dominant-baseline', 'middle')
            .text((e) => (e.value ? T(e.value) : ''))
            .attr('font-style', 'italic')
            .attr('style', (e) => {
              if (0 === e.depth) return 'display: none;';
              return (
                'text-anchor: end; dominant-baseline: middle; font-size: 10px; fill:' +
                N(e.data.name) +
                '; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;' +
                o({ cssCompiledStyles: e.data.cssCompiledStyles }).labelStyles.replace(
                  'color:',
                  'fill:'
                )
              );
            }));
      const B = D.leaves(),
        R = j
          .selectAll('.treemapLeafGroup')
          .data(B)
          .enter()
          .append('g')
          .attr(
            'class',
            (e, t) =>
              `treemapNode treemapLeafGroup leaf${t}${e.data.classSelector ? ` ${e.data.classSelector}` : ''}x`
          )
          .attr('transform', (e) => `translate(${e.x0},${e.y0})`);
      (R.append('rect')
        .attr('width', (e) => e.x1 - e.x0)
        .attr('height', (e) => e.y1 - e.y0)
        .attr('class', 'treemapLeaf')
        .attr('fill', (e) => (e.parent ? z(e.parent.data.name) : z(e.data.name)))
        .attr('style', (e) => o({ cssCompiledStyles: e.data.cssCompiledStyles }).nodeStyles)
        .attr('fill-opacity', 0.3)
        .attr('stroke', (e) => (e.parent ? z(e.parent.data.name) : z(e.data.name)))
        .attr('stroke-width', 3),
        R.append('clipPath')
          .attr('id', (e, t) => `clip-${a}-${t}`)
          .append('rect')
          .attr('width', (e) => Math.max(0, e.x1 - e.x0 - 4))
          .attr('height', (e) => Math.max(0, e.y1 - e.y0 - 4)));
      if (
        (R.append('text')
          .attr('class', 'treemapLabel')
          .attr('x', (e) => (e.x1 - e.x0) / 2)
          .attr('y', (e) => (e.y1 - e.y0) / 2)
          .attr(
            'style',
            (e) =>
              'text-anchor: middle; dominant-baseline: middle; font-size: 38px;fill:' +
              N(e.data.name) +
              ';' +
              o({ cssCompiledStyles: e.data.cssCompiledStyles }).labelStyles.replace(
                'color:',
                'fill:'
              )
          )
          .attr('clip-path', (e, t) => `url(#clip-${a}-${t})`)
          .text((e) => e.data.name)
          .each(function (e) {
            const t = w(this),
              a = e.x1 - e.x0,
              l = e.y1 - e.y0,
              s = t.node(),
              r = a - 8,
              n = l - 8;
            if (r < 10 || n < 10) return void t.style('display', 'none');
            let o = parseInt(t.style('font-size'), 10);
            for (; s.getComputedTextLength() > r && o > 8; ) (o--, t.style('font-size', `${o}px`));
            let i = Math.max(6, Math.min(28, Math.round(0.6 * o))),
              c = o + 2 + i;
            for (
              ;
              c > n &&
              o > 8 &&
              (o--, (i = Math.max(6, Math.min(28, Math.round(0.6 * o)))), !(i < 6 && 8 === o));
            )
              (t.style('font-size', `${o}px`), (c = o + 2 + i));
            (t.style('font-size', `${o}px`),
              (s.getComputedTextLength() > r || o < 8 || n < o) && t.style('display', 'none'));
          }),
        !1 !== p.showValues)
      ) {
        R.append('text')
          .attr('class', 'treemapValue')
          .attr('x', (e) => (e.x1 - e.x0) / 2)
          .attr('y', function (e) {
            return (e.y1 - e.y0) / 2;
          })
          .attr(
            'style',
            (e) =>
              'text-anchor: middle; dominant-baseline: hanging; font-size: 28px;fill:' +
              N(e.data.name) +
              ';' +
              o({ cssCompiledStyles: e.data.cssCompiledStyles }).labelStyles.replace(
                'color:',
                'fill:'
              )
          )
          .attr('clip-path', (e, t) => `url(#clip-${a}-${t})`)
          .text((e) => (e.value ? T(e.value) : ''))
          .each(function (e) {
            const t = w(this),
              a = this.parentNode;
            if (!a) return void t.style('display', 'none');
            const l = w(a).select('.treemapLabel');
            if (l.empty() || 'none' === l.style('display')) return void t.style('display', 'none');
            const s = parseFloat(l.style('font-size')),
              r = Math.max(6, Math.min(28, Math.round(0.6 * s)));
            t.style('font-size', `${r}px`);
            const n = (e.y1 - e.y0) / 2 + s / 2 + 2;
            t.attr('y', n);
            const o = e.x1 - e.x0,
              i = e.y1 - e.y0 - 4,
              c = o - 8;
            t.node().getComputedTextLength() > c || n + r > i || r < 6
              ? t.style('display', 'none')
              : t.style('display', null);
          });
      }
      const E = p.diagramPadding ?? 8;
      S(g, E, 'flowchart', (null == p ? void 0 : p.useMaxWidth) || !1);
    }, 'draw'),
    getClasses: t(function (e, t) {
      return t.db.getClasses();
    }, 'getClasses'),
  },
  N = {
    sectionStrokeColor: 'black',
    sectionStrokeWidth: '1',
    sectionFillColor: '#efefef',
    leafStrokeColor: 'black',
    leafStrokeWidth: '1',
    leafFillColor: '#efefef',
    labelColor: 'black',
    labelFontSize: '12px',
    valueFontSize: '10px',
    valueColor: 'black',
    titleColor: 'black',
    titleFontSize: '14px',
  },
  j = t(({ treemap: e } = {}) => {
    const t = a(N, e);
    return `\n  .treemapNode.section {\n    stroke: ${t.sectionStrokeColor};\n    stroke-width: ${t.sectionStrokeWidth};\n    fill: ${t.sectionFillColor};\n  }\n  .treemapNode.leaf {\n    stroke: ${t.leafStrokeColor};\n    stroke-width: ${t.leafStrokeWidth};\n    fill: ${t.leafFillColor};\n  }\n  .treemapLabel {\n    fill: ${t.labelColor};\n    font-size: ${t.labelFontSize};\n  }\n  .treemapValue {\n    fill: ${t.valueColor};\n    font-size: ${t.valueFontSize};\n  }\n  .treemapTitle {\n    fill: ${t.titleColor};\n    font-size: ${t.titleFontSize};\n  }\n  `;
  }, 'getStyles'),
  W = {
    parser: z,
    get db() {
      return new k();
    },
    renderer: P,
    styles: j,
  };
export { W as diagram };
