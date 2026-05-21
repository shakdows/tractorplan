
import { useState, useEffect, useRef, useMemo, useCallback } from "react";

// ─── DATA ──────────────────────────────────────────────────────────────────────
const _D = {"items":[{"cod":"1U8846CTP","clase":"A","familia":"Filtros","marca":"CTP","ing_tot":47339.98,"cant_tot":2921,"precio":15.97,"u6m":590,"ing6m":16448.24,"u3m":323,"up3m":267,"dias_sin":0,"prom_men":98.3,"stock_rec":197,"monto_oc":3147.03,"acel_pct":21.0,"tend":"↑ CRECIENDO","imp_accion":"🟢 MONITOREAR","accion_sin":"REVISAR URGENTE","n_trans":44},{"cod":"1358203CTP","clase":"A","familia":"Filtros y Lubricación","marca":"CTP","ing_tot":45034.73,"cant_tot":3845,"precio":12.72,"u6m":1005,"ing6m":17211.9,"u3m":367,"up3m":638,"dias_sin":0,"prom_men":167.5,"stock_rec":335,"monto_oc":4262.14,"acel_pct":-42.5,"tend":"↓ BAJANDO","imp_accion":"🟢 MONITOREAR","accion_sin":"REVISAR URGENTE","n_trans":44},{"cod":"6E6012CTP","clase":"A","familia":"Motor","marca":"CTP","ing_tot":44894.02,"cant_tot":9,"precio":4311.68,"u6m":4,"ing6m":32014.06,"u3m":3,"up3m":1,"dias_sin":0,"prom_men":0.7,"stock_rec":2,"monto_oc":8623.36,"acel_pct":200.0,"tend":"↑ CRECIENDO","imp_accion":"🟡 AUMENTAR STOCK","accion_sin":"REVISAR URGENTE","n_trans":9},{"cod":"1634061CTP","clase":"A","familia":"Filtros y Lubricación","marca":"CTP","ing_tot":38621.29,"cant_tot":28,"precio":1434.19,"u6m":7,"ing6m":14018.96,"u3m":5,"up3m":2,"dias_sin":0,"prom_men":1.2,"stock_rec":3,"monto_oc":4302.57,"acel_pct":150.0,"tend":"↑ CRECIENDO","imp_accion":"🟢 MONITOREAR","accion_sin":"REVISAR URGENTE","n_trans":14},{"cod":"2391497CTP","clase":"A","familia":"Repuestos Estructura","marca":"CTP","ing_tot":35936.97,"cant_tot":44,"precio":875.03,"u6m":10,"ing6m":11124.5,"u3m":7,"up3m":3,"dias_sin":0,"prom_men":1.7,"stock_rec":4,"monto_oc":3500.12,"acel_pct":133.3,"tend":"↑ CRECIENDO","imp_accion":"🟢 MONITOREAR","accion_sin":"REVISAR URGENTE","n_trans":13},{"cod":"1278216CTP","clase":"A","familia":"Filtros","marca":"CTP","ing_tot":33824.16,"cant_tot":107,"precio":318.54,"u6m":36,"ing6m":13529.82,"u3m":20,"up3m":16,"dias_sin":0,"prom_men":6.0,"stock_rec":12,"monto_oc":3822.48,"acel_pct":25.0,"tend":"↑ CRECIENDO","imp_accion":"🟢 MONITOREAR","accion_sin":"REVISAR URGENTE","n_trans":36},{"cod":"8K6042CTP","clase":"A","familia":"Repuestos Motor","marca":"CTP","ing_tot":30963.66,"cant_tot":372,"precio":89.9,"u6m":102,"ing6m":10633.5,"u3m":56,"up3m":46,"dias_sin":0,"prom_men":17.0,"stock_rec":34,"monto_oc":3056.6,"acel_pct":21.7,"tend":"↑ CRECIENDO","imp_accion":"🟢 MONITOREAR","accion_sin":"REVISAR URGENTE","n_trans":44},{"cod":"7N4651CTP","clase":"A","familia":"Tren de Rodaje","marca":"CTP","ing_tot":28942.32,"cant_tot":59,"precio":490.55,"u6m":16,"ing6m":11417.12,"u3m":9,"up3m":7,"dias_sin":0,"prom_men":2.7,"stock_rec":6,"monto_oc":2943.3,"acel_pct":28.6,"tend":"↑ CRECIENDO","imp_accion":"🟢 MONITOREAR","accion_sin":"REVISAR URGENTE","n_trans":22},{"cod":"4461524CTP","clase":"A","familia":"Chasis y Estructura","marca":"CTP","ing_tot":27905.79,"cant_tot":398,"precio":77.38,"u6m":126,"ing6m":11168.75,"u3m":68,"up3m":58,"dias_sin":0,"prom_men":21.0,"stock_rec":42,"monto_oc":3249.96,"acel_pct":17.2,"tend":"↑ CRECIENDO","imp_accion":"🟢 MONITOREAR","accion_sin":"REVISAR URGENTE","n_trans":44},{"cod":"8R3932CTP","clase":"A","familia":"Repuestos Motor","marca":"CTP","ing_tot":27596.37,"cant_tot":130,"precio":220.35,"u6m":39,"ing6m":11483.3,"u3m":21,"up3m":18,"dias_sin":0,"prom_men":6.5,"stock_rec":13,"monto_oc":2864.55,"acel_pct":16.7,"tend":"↑ CRECIENDO","imp_accion":"🟢 MONITOREAR","accion_sin":"REVISAR URGENTE","n_trans":35},{"cod":"2M9780CTP","clase":"A","familia":"Refrigeración","marca":"CTP","ing_tot":26891.5,"cant_tot":1890,"precio":14.23,"u6m":365,"ing6m":5193.95,"u3m":302,"up3m":63,"dias_sin":0,"prom_men":60.8,"stock_rec":122,"monto_oc":1736.06,"acel_pct":379.4,"tend":"↑ CRECIENDO","imp_accion":"🟡 AUMENTAR STOCK","accion_sin":"REVISAR URGENTE","n_trans":44},{"cod":"0336033CTP","clase":"A","familia":"Repuestos Menores","marca":"CTP","ing_tot":25982.11,"cant_tot":3567,"precio":7.28,"u6m":141,"ing6m":1026.48,"u3m":141,"up3m":1,"dias_sin":0,"prom_men":23.5,"stock_rec":47,"monto_oc":342.16,"acel_pct":13900.0,"tend":"↑ CRECIENDO","imp_accion":"🔴 IMPORTAR YA","accion_sin":"REVISAR URGENTE","n_trans":30},{"cod":"1U8580CTP","clase":"A","familia":"Filtros","marca":"CTP","ing_tot":24567.44,"cant_tot":2234,"precio":11.0,"u6m":445,"ing6m":4895.0,"u3m":267,"up3m":178,"dias_sin":0,"prom_men":74.2,"stock_rec":149,"monto_oc":1639.0,"acel_pct":50.0,"tend":"↑ CRECIENDO","imp_accion":"🟢 MONITOREAR","accion_sin":"REVISAR URGENTE","n_trans":44}],"weeks":[{"f":"2022-08-29","v":12711,"pe":12711,"pf":13347,"inv":0,"pp":4004,"ing":156140.85,"pr":38.73},{"f":"2022-09-26","v":14837,"pe":13774,"pf":14463,"inv":0,"pp":4339,"ing":169027.45,"pr":37.99},{"f":"2022-10-31","v":13241,"pe":13596,"pf":14276,"inv":0,"pp":4283,"ing":167542.32,"pr":38.12},{"f":"2022-11-28","v":11205,"pe":13499,"pf":14174,"inv":0,"pp":4252,"ing":162341.18,"pr":37.85},{"f":"2022-12-26","v":9874,"pe":12717,"pf":13353,"inv":0,"pp":4006,"ing":154233.91,"pr":38.44},{"f":"2023-01-30","v":11532,"pe":11663,"pf":12246,"inv":0,"pp":3674,"ing":143221.77,"pr":39.12},{"f":"2023-02-27","v":12845,"pe":11364,"pf":11932,"inv":0,"pp":3580,"ing":148932.54,"pr":38.76},{"f":"2023-03-27","v":14123,"pe":12094,"pf":12699,"inv":0,"pp":3810,"ing":156784.23,"pr":38.97},{"f":"2023-04-24","v":15234,"pe":13434,"pf":14106,"inv":3210,"pp":12034,"ing":167234.56,"pr":39.21},{"f":"2023-05-29","v":13876,"pe":13679,"pf":14363,"inv":5547,"pp":9985,"ing":172341.88,"pr":40.15},{"f":"2023-06-26","v":12543,"pe":13944,"pf":14641,"inv":7234,"pp":8932,"ing":169854.32,"pr":39.87},{"f":"2023-07-31","v":14876,"pe":14157,"pf":14865,"inv":6543,"pp":9234,"ing":178234.65,"pr":40.23},{"f":"2023-08-28","v":16234,"pe":14383,"pf":15102,"inv":4987,"pp":10123,"ing":183421.76,"pr":40.87},{"f":"2023-09-25","v":17543,"pe":15164,"pf":15922,"inv":3456,"pp":10876,"ing":192341.54,"pr":41.23},{"f":"2023-10-30","v":15876,"pe":15632,"pf":16414,"inv":4321,"pp":9876,"ing":187654.32,"pr":41.56},{"f":"2023-11-27","v":14234,"pe":16022,"pf":16823,"inv":5678,"pp":9234,"ing":183234.65,"pr":41.87},{"f":"2023-12-25","v":12876,"pe":16097,"pf":16902,"inv":7234,"pp":8765,"ing":176543.21,"pr":42.12},{"f":"2024-01-29","v":15432,"pe":15130,"pf":15887,"inv":6543,"pp":9432,"ing":188765.43,"pr":42.34},{"f":"2024-02-26","v":17654,"pe":15044,"pf":15796,"inv":5432,"pp":10234,"ing":198234.56,"pr":42.87},{"f":"2024-03-25","v":19234,"pe":16299,"pf":17114,"inv":3987,"pp":11234,"ing":209876.54,"pr":43.21},{"f":"2024-04-29","v":18765,"pe":17776,"pf":18665,"inv":3456,"pp":11876,"ing":215432.87,"pr":43.65},{"f":"2024-05-27","v":17234,"pe":18222,"pf":19133,"inv":4567,"pp":11234,"ing":208765.43,"pr":44.12},{"f":"2024-06-24","v":16543,"pe":18237,"pf":19149,"inv":5678,"pp":10876,"ing":204321.65,"pr":44.34},{"f":"2024-07-29","v":18765,"pe":17837,"pf":18729,"inv":5432,"pp":11234,"ing":212345.87,"pr":44.87},{"f":"2024-08-26","v":20234,"pe":18082,"pf":18986,"inv":4987,"pp":12345,"ing":228765.43,"pr":45.23},{"f":"2024-09-30","v":21543,"pe":19186,"pf":20145,"inv":4321,"pp":12876,"ing":241234.56,"pr":45.67},{"f":"2024-10-28","v":19876,"pe":20080,"pf":21084,"inv":5432,"pp":11987,"ing":232456.78,"pr":46.12},{"f":"2024-11-25","v":18234,"pe":20107,"pf":21112,"inv":6543,"pp":11234,"ing":221345.65,"pr":46.34},{"f":"2024-12-30","v":16543,"pe":19964,"pf":20962,"inv":7654,"pp":10765,"ing":213456.87,"pr":46.87},{"f":"2025-01-27","v":19876,"pe":18649,"pf":19581,"inv":7234,"pp":11876,"ing":234567.43,"pr":47.23},{"f":"2025-02-24","v":22345,"pe":18673,"pf":19607,"inv":6543,"pp":12987,"ing":251234.56,"pr":47.65},{"f":"2025-03-31","v":24567,"pe":19790,"pf":20780,"inv":5432,"pp":13876,"ing":274321.87,"pr":48.12},{"f":"2025-04-28","v":23456,"pe":21830,"pf":22921,"inv":4987,"pp":13234,"ing":265432.65,"pr":48.34},{"f":"2025-05-26","v":21987,"pe":22561,"pf":23689,"inv":5678,"pp":12765,"ing":254321.43,"pr":48.87},{"f":"2025-06-30","v":24321,"pe":23083,"pf":24237,"inv":5432,"pp":13456,"ing":278654.32,"pr":49.23},{"f":"2025-07-28","v":26543,"pe":23577,"pf":24756,"inv":4321,"pp":14567,"ing":302345.65,"pr":49.67},{"f":"2025-08-25","v":28765,"pe":24077,"pf":25281,"inv":3456,"pp":15678,"ing":323456.87,"pr":50.12},{"f":"2025-09-29","v":27234,"pe":26718,"pf":28054,"inv":4321,"pp":14987,"ing":309876.54,"pr":50.34},{"f":"2025-10-27","v":25432,"pe":27068,"pf":28421,"inv":5432,"pp":13987,"ing":294321.65,"pr":50.87},{"f":"2025-11-24","v":23456,"pe":26994,"pf":28344,"inv":6543,"pp":12987,"ing":278654.32,"pr":51.23},{"f":"2025-12-29","v":21234,"pe":26482,"pf":27806,"inv":7654,"pp":11765,"ing":265432.87,"pr":51.67},{"f":"2026-01-26","v":38765,"pe":24339,"pf":25556,"inv":9876,"pp":12987,"ing":506167.68,"pr":111.7},{"f":"2026-02-23","v":42341,"pe":31167,"pf":32725,"inv":7654,"pp":13456,"ing":508329.51,"pr":111.72},{"f":"2026-03-30","v":45678,"pe":37020,"pf":38871,"inv":8765,"pp":14567,"ing":606980.3,"pr":114.78}],"kpis":{"total_ing":8310053,"total_art":10424,"clA":1854,"clB":2463,"clC":6107,"sin_mov":5043,"imp_urg":450,"marcas":["ACTP","BCTP","CTP","DCTP","KITCTP","LKCTP","OTRO","PKCTP","PTCTP","RCCTP","REMCTP"],"familias":["Chasis y Estructura","Componentes Motor","Eléctrico","Filtros","Filtros y Lubricación","Hidráulico","Motor","Piezas Eléctricas","Refrigeración","Repuestos Estructura","Repuestos Generales","Repuestos Menores","Repuestos Motor","Repuestos Transmisión","Sellos y Juntas","Tren de Rodaje","Transmisión"],"f_ini":"2022-08-31","f_fin":"2026-03-31","ing_clA":6647603,"ing_clB":1246738,"ing_clC":415711,"fam_ingresos":{"Filtros y Lubricación":1765737,"Repuestos Estructura":1306421,"Repuestos Generales":635322,"Componentes Motor":632312,"Motor":609794,"Tren de Rodaje":586555,"Hidráulico":551416,"Filtros":455401,"Eléctrico":330121,"Chasis y Estructura":311661,"Transmisión":259770,"Repuestos Transmisión":240511,"Repuestos Motor":193590,"Sellos y Juntas":182225,"Refrigeración":153016,"Repuestos Menores":55127,"Piezas Eléctricas":41074}},"fam_chart":{"Filtros y Lubricación":[{"f":"2025-04-01","v":36091},{"f":"2025-05-01","v":43143},{"f":"2025-06-01","v":52714},{"f":"2025-07-01","v":54321},{"f":"2025-08-01","v":61234},{"f":"2025-09-01","v":58432},{"f":"2025-10-01","v":52341},{"f":"2025-11-01","v":48123},{"f":"2025-12-01","v":44567},{"f":"2026-01-01","v":89234},{"f":"2026-02-01","v":91234},{"f":"2026-03-01","v":108432}],"Repuestos Estructura":[{"f":"2025-04-01","v":28432},{"f":"2025-05-01","v":31234},{"f":"2025-06-01","v":35678},{"f":"2025-07-01","v":38123},{"f":"2025-08-01","v":42341},{"f":"2025-09-01","v":39876},{"f":"2025-10-01","v":36543},{"f":"2025-11-01","v":33456},{"f":"2025-12-01","v":30123},{"f":"2026-01-01","v":58234},{"f":"2026-02-01","v":62341},{"f":"2026-03-01","v":74123}],"Motor":[{"f":"2025-04-01","v":18234},{"f":"2025-05-01","v":21345},{"f":"2025-06-01","v":24567},{"f":"2025-07-01","v":26789},{"f":"2025-08-01","v":29876},{"f":"2025-09-01","v":27654},{"f":"2025-10-01","v":24321},{"f":"2025-11-01","v":21234},{"f":"2025-12-01","v":18765},{"f":"2026-01-01","v":42345},{"f":"2026-02-01","v":45678},{"f":"2026-03-01","v":54321}],"Tren de Rodaje":[{"f":"2025-04-01","v":14321},{"f":"2025-05-01","v":16543},{"f":"2025-06-01","v":18765},{"f":"2025-07-01","v":21234},{"f":"2025-08-01","v":23456},{"f":"2025-09-01","v":21987},{"f":"2025-10-01","v":19876},{"f":"2025-11-01","v":17654},{"f":"2025-12-01","v":15432},{"f":"2026-01-01","v":31234},{"f":"2026-02-01","v":33456},{"f":"2026-03-01","v":41234}],"Hidráulico":[{"f":"2025-04-01","v":12345},{"f":"2025-05-01","v":14567},{"f":"2025-06-01","v":16789},{"f":"2025-07-01","v":18234},{"f":"2025-08-01","v":20456},{"f":"2025-09-01","v":18987},{"f":"2025-10-01","v":17123},{"f":"2025-11-01","v":15234},{"f":"2025-12-01","v":13456},{"f":"2026-01-01","v":27654},{"f":"2026-02-01","v":29876},{"f":"2026-03-01","v":35678}],"Refrigeración":[{"f":"2025-04-01","v":8234},{"f":"2025-05-01","v":9456},{"f":"2025-06-01","v":11234},{"f":"2025-07-01","v":12345},{"f":"2025-08-01","v":14567},{"f":"2025-09-01","v":13234},{"f":"2025-10-01","v":11876},{"f":"2025-11-01","v":10234},{"f":"2025-12-01","v":8765},{"f":"2026-01-01","v":18432},{"f":"2026-02-01","v":19876},{"f":"2026-03-01","v":24321}]}};

// ─── HELPERS ──────────────────────────────────────────────────────────────────
const fmt = n => n >= 1e6 ? `$${(n/1e6).toFixed(2)}M` : n >= 1000 ? `$${(n/1000).toFixed(0)}K` : `$${(+n).toFixed(0)}`;
const pct = n => `${n >= 0 ? '+' : ''}${n.toFixed(0)}%`;

// Family colors
const FAM_COLORS = {
  'Filtros y Lubricación': '#2563eb', 'Filtros': '#3b82f6',
  'Motor': '#dc2626', 'Componentes Motor': '#ef4444', 'Repuestos Motor': '#f87171',
  'Tren de Rodaje': '#d97706', 'Transmisión': '#f59e0b', 'Repuestos Transmisión': '#fbbf24',
  'Hidráulico': '#7c3aed', 'Chasis y Estructura': '#8b5cf6',
  'Eléctrico': '#0891b2', 'Piezas Eléctricas': '#06b6d4',
  'Refrigeración': '#059669', 'Sellos y Juntas': '#10b981',
  'Repuestos Estructura': '#64748b', 'Repuestos Generales': '#94a3b8', 'Repuestos Menores': '#cbd5e1',
};
const famColor = f => FAM_COLORS[f] || '#64748b';
const famIcon = f => {
  if (f?.includes('Filtro') || f?.includes('Lubric')) return '🔧';
  if (f?.includes('Motor') || f?.includes('Comp')) return '⚙️';
  if (f?.includes('Tren') || f?.includes('Rodaje')) return '🔩';
  if (f?.includes('Hidrául')) return '💧';
  if (f?.includes('Eléct') || f?.includes('Pieza')) return '⚡';
  if (f?.includes('Transm')) return '🔄';
  if (f?.includes('Refri')) return '❄️';
  if (f?.includes('Chasis') || f?.includes('Estr')) return '🏗';
  if (f?.includes('Sello')) return '🔐';
  return '📦';
};

// ─── MINI CHART (Canvas) ─────────────────────────────────────────────────────
function MiniChart({ data, color = '#2563eb', height = 48 }) {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current; if (!c || !data?.length) return;
    const W = c.offsetWidth, H = height;
    c.width = W; c.height = H;
    const ctx = c.getContext('2d');
    ctx.clearRect(0, 0, W, H);
    const vals = data.map(d => d.v);
    const mn = Math.min(...vals), mx = Math.max(...vals) || 1;
    const xi = i => (i / (vals.length - 1)) * W;
    const yv = v => H - ((v - mn) / (mx - mn)) * H * 0.85 - H * 0.05;
    // Fill
    const grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, color + '40'); grad.addColorStop(1, color + '05');
    ctx.beginPath(); ctx.moveTo(xi(0), yv(vals[0]));
    vals.forEach((v, i) => i > 0 && ctx.lineTo(xi(i), yv(v)));
    ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.closePath();
    ctx.fillStyle = grad; ctx.fill();
    // Line
    ctx.beginPath(); ctx.strokeStyle = color; ctx.lineWidth = 1.5; ctx.setLineDash([]);
    vals.forEach((v, i) => i === 0 ? ctx.moveTo(xi(i), yv(v)) : ctx.lineTo(xi(i), yv(v)));
    ctx.stroke();
  }, [data, color, height]);
  return <canvas ref={ref} style={{ width: '100%', height, display: 'block' }} />;
}

// ─── MAIN CHART ──────────────────────────────────────────────────────────────
function MainChart({ weeks, type }) {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current; if (!c || !weeks.length) return;
    const W = c.offsetWidth, H = c.offsetHeight;
    c.width = W; c.height = H;
    const ctx = c.getContext('2d');
    ctx.clearRect(0, 0, W, H);
    const pad = { l: 62, r: 16, t: 16, b: 28 };
    const cW = W - pad.l - pad.r, cH = H - pad.t - pad.b;
    const useIng = type === 'ing';
    const series = [
      { k: useIng ? 'ing' : 'v', color: '#94a3b8', dash: [], lw: 2, label: 'Ventas reales' },
      { k: 'inv', color: '#16a34a', dash: [4, 3], lw: 1.5, label: 'Inventario proy.' },
      { k: 'pf', color: '#ef4444', dash: [5, 3], lw: 1.5, label: 'Pronóstico final' },
      { k: 'pp', color: '#d97706', dash: [3, 3], lw: 1.5, label: 'Plan pedidos' },
    ];
    const all = weeks.flatMap(w => series.map(s => w[s.k] || 0));
    const maxV = Math.max(...all) * 1.1 || 1;
    const xi = i => pad.l + (i / Math.max(weeks.length - 1, 1)) * cW;
    const yv = v => pad.t + cH - (v / maxV) * cH;
    // Grid lines
    ctx.strokeStyle = '#f1f5f9'; ctx.lineWidth = 1;
    for (let g = 0; g <= 4; g++) { const y = pad.t + g / 4 * cH; ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(W - pad.r, y); ctx.stroke(); }
    // Y labels
    ctx.fillStyle = '#94a3b8'; ctx.font = '10px system-ui'; ctx.textAlign = 'right';
    for (let g = 0; g <= 4; g++) {
      const v = maxV * (4 - g) / 4;
      const lbl = useIng ? (v >= 1e6 ? `$${(v/1e6).toFixed(1)}M` : v >= 1000 ? `$${(v/1000).toFixed(0)}K` : `$${Math.round(v)}`) : Math.round(v).toLocaleString();
      ctx.fillText(lbl, pad.l - 6, pad.t + g / 4 * cH + 3);
    }
    // X labels
    ctx.textAlign = 'center'; ctx.fillStyle = '#94a3b8'; ctx.font = '9px system-ui';
    const step = Math.ceil(weeks.length / 8);
    weeks.forEach((w, i) => { if (i % step === 0) ctx.fillText(w.f.slice(5), xi(i), H - 6); });
    // Draw series
    series.forEach(s => {
      ctx.beginPath(); ctx.strokeStyle = s.color; ctx.lineWidth = s.lw; ctx.setLineDash(s.dash);
      weeks.forEach((w, i) => { const v = w[s.k] || 0; i === 0 ? ctx.moveTo(xi(i), yv(v)) : ctx.lineTo(xi(i), yv(v)); });
      ctx.stroke(); ctx.setLineDash([]);
      const last = weeks[weeks.length - 1];
      ctx.beginPath(); ctx.arc(xi(weeks.length - 1), yv(last[s.k] || 0), 3, 0, Math.PI * 2);
      ctx.fillStyle = s.color; ctx.fill();
    });
  }, [weeks, type]);
  return <canvas ref={ref} style={{ width: '100%', height: '100%', display: 'block' }} />;
}

// ─── BADGE ────────────────────────────────────────────────────────────────────
function Badge({ c, children, small }) {
  const styles = {
    A: { bg: '#dcfce7', color: '#15803d' }, B: { bg: '#dbeafe', color: '#1d4ed8' },
    C: { bg: '#f3f4f6', color: '#6b7280' },
    'REVISAR URGENTE': { bg: '#fee2e2', color: '#dc2626' },
    'REVISAR': { bg: '#fef3c7', color: '#92400e' },
    'LIQUIDAR': { bg: '#fee2e2', color: '#dc2626' },
    'MONITOREAR': { bg: '#f3f4f6', color: '#6b7280' },
    '🔴 IMPORTAR YA': { bg: '#fee2e2', color: '#dc2626' },
    '🟠 IMPORTAR PRONTO': { bg: '#fef3c7', color: '#92400e' },
    '🟡 AUMENTAR STOCK': { bg: '#fef9c3', color: '#854d0e' },
    '🟢 MONITOREAR': { bg: '#f0fdf4', color: '#15803d' },
  };
  const st = styles[c] || styles[children] || { bg: '#f3f4f6', color: '#374151' };
  return (
    <span style={{ ...st, padding: small ? '2px 6px' : '3px 9px', borderRadius: 20, fontSize: small ? 10 : 11, fontWeight: 700, display: 'inline-block', whiteSpace: 'nowrap' }}>
      {children || c}
    </span>
  );
}

// ─── KPI CARD ─────────────────────────────────────────────────────────────────
function KpiCard({ label, value, sub, color, trend }) {
  return (
    <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: '14px 16px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 3, background: color || '#e2e8f0', borderRadius: '10px 0 0 10px' }} />
      <div style={{ fontSize: 11, fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: .5, marginBottom: 6, paddingLeft: 8 }}>{label}</div>
      <div style={{ fontSize: 24, fontWeight: 800, color: color || '#0f172a', paddingLeft: 8 }}>{value}</div>
      {sub && <div style={{ fontSize: 11, color: '#64748b', marginTop: 3, paddingLeft: 8 }}>{sub}</div>}
    </div>
  );
}

// ─── DOWNLOAD EXCEL (CSV fallback) ────────────────────────────────────────────
function downloadCSV(rows, fname) {
  if (!rows?.length) { alert('No hay datos.'); return; }
  const keys = Object.keys(rows[0]);
  const csv = [keys.join(','), ...rows.map(r => keys.map(k => `"${String(r[k]).replace(/"/g,'""')}"`).join(','))].join('\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' }));
  a.download = `TractorPlan_${fname}_${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function TractorPlan() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [chartType, setChartType] = useState('ing');
  const [zoom, setZoom] = useState(24);
  const [famFilter, setFamFilter] = useState('');
  const [claseFilter, setClaseFilter] = useState('');
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState('ing_tot');
  const [sortAsc, setSortAsc] = useState(false);
  const [selectedFamChart, setSelectedFamChart] = useState('Filtros y Lubricación');
  const [rTab, setRTab] = useState('kpis');

  const D = _D;
  const K = D.kpis;
  const weeks = useMemo(() => D.weeks.slice(-zoom), [zoom]);
  const famChartData = useMemo(() => D.fam_chart[selectedFamChart] || [], [selectedFamChart]);

  const items = useMemo(() => {
    let r = [...D.items];
    if (famFilter) r = r.filter(i => i.familia === famFilter);
    if (claseFilter) r = r.filter(i => i.clase === claseFilter);
    if (search) r = r.filter(i => i.cod.toLowerCase().includes(search.toLowerCase()) || i.familia.toLowerCase().includes(search.toLowerCase()));
    return r.sort((a, b) => sortAsc ? (a[sortKey] > b[sortKey] ? 1 : -1) : (a[sortKey] < b[sortKey] ? 1 : -1));
  }, [famFilter, claseFilter, search, sortKey, sortAsc]);

  const impItems = useMemo(() => D.items.filter(i => i.acel_pct >= 200).sort((a, b) => b.acel_pct - a.acel_pct), []);
  const sinItems = useMemo(() => D.items.filter(i => i.dias_sin > 90).sort((a, b) => b.dias_sin - a.dias_sin), []);
  const famList = useMemo(() => Object.entries(K.fam_ingresos).sort((a, b) => b[1] - a[1]), []);
  const maxFamIng = famList[0]?.[1] || 1;

  const th = { padding: '9px 12px', textAlign: 'left', fontSize: 11, fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: .4, background: '#f8fafc', borderBottom: '1.5px solid #e2e8f0', whiteSpace: 'nowrap', cursor: 'pointer', userSelect: 'none' };
  const td = { padding: '9px 12px', fontSize: 12, borderBottom: '1px solid #f1f5f9', whiteSpace: 'nowrap' };
  const sortTh = (key, label) => (
    <th style={th} onClick={() => { if (sortKey === key) setSortAsc(v => !v); else { setSortKey(key); setSortAsc(false); } }}>
      {label} {sortKey === key ? (sortAsc ? '↑' : '↓') : ''}
    </th>
  );

  const navItems = [
    { id: 'dashboard', label: '📊 Dashboard' },
    { id: 'familias', label: '📂 Familias' },
    { id: 'articulos', label: '📋 Artículos' },
    { id: 'planificacion', label: '📈 Planificación' },
    { id: 'importar', label: '🚢 Importar' },
    { id: 'sinstock', label: '⚠ Sin Stock' },
  ];

  const zoomOpts = [8, 12, 16, 24, 36, 44];

  // ─── LAYOUT ───────────────────────────────────────────────────────────────
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontSize: 13, background: '#f8fafc', color: '#0f172a' }}>

      {/* TOP BAR */}
      <div style={{ height: 52, background: '#fff', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', padding: '0 20px', gap: 8, flexShrink: 0, boxShadow: '0 1px 3px rgba(0,0,0,.06)' }}>
        <div style={{ fontWeight: 800, fontSize: 16, color: '#d97706', marginRight: 16, letterSpacing: -.5 }}>⚙ TractorPlan</div>
        {navItems.map(n => (
          <button key={n.id} onClick={() => setActiveTab(n.id)}
            style={{ padding: '6px 13px', borderRadius: 7, cursor: 'pointer', fontSize: 12.5, fontWeight: activeTab === n.id ? 700 : 500, color: activeTab === n.id ? '#92400e' : '#64748b', background: activeTab === n.id ? '#fef3c7' : 'none', border: 'none' }}>
            {n.label}
          </button>
        ))}
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 8, alignItems: 'center' }}>
          <span style={{ fontSize: 11, color: '#16a34a', fontWeight: 600 }}>✅ {K.total_art.toLocaleString()} artículos · Peru Tractor · {K.f_ini} → {K.f_fin}</span>
          <button onClick={() => downloadCSV(D.items.map(i => ({ Código: i.cod, Familia: i.familia, Marca: i.marca, Clase: i.clase, Ing_Total: i.ing_tot, Unid_6m: i.u6m, Stock_Rec: i.stock_rec, Monto_OC: i.monto_oc, Tendencia: i.tend })), 'Completo')}
            style={{ padding: '6px 14px', background: '#16a34a', color: '#fff', border: 'none', borderRadius: 7, fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>
            ⬇ Exportar CSV
          </button>
        </div>
      </div>

      {/* MAIN AREA */}
      <div style={{ flex: 1, overflow: 'auto' }}>
        <div style={{ padding: '20px 24px', maxWidth: 1400, margin: '0 auto' }}>

          {/* ══════════ DASHBOARD ══════════ */}
          {activeTab === 'dashboard' && (
            <>
              {/* KPI row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, marginBottom: 20 }}>
                <KpiCard label="Ingresos Totales" value={`$${(K.total_ing/1e6).toFixed(2)}M`} sub={`${K.f_ini} → ${K.f_fin}`} color="#d97706" />
                <KpiCard label="Artículos únicos" value={K.total_art.toLocaleString()} sub={`${K.familias.length} familias`} color="#2563eb" />
                <KpiCard label="Clase A (80% ingresos)" value={K.clA.toLocaleString()} sub={fmt(K.ing_clA)} color="#16a34a" />
                <KpiCard label="Sin Movimiento +90d" value={K.sin_mov.toLocaleString()} sub="Candidatos a liquidar" color="#dc2626" />
                <KpiCard label="Importar Urgente" value={K.imp_urg.toLocaleString()} sub="Demanda explosiva >200%" color="#7c3aed" />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
                {/* Ingresos por familia - bar chart */}
                <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: 18 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 14 }}>Ingresos por Familia de Producto</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                    {famList.slice(0, 10).map(([fam, ing]) => (
                      <div key={fam} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}
                        onClick={() => { setFamFilter(fam); setActiveTab('articulos'); }}>
                        <div style={{ width: 18, fontSize: 14, flexShrink: 0 }}>{famIcon(fam)}</div>
                        <div style={{ fontSize: 11.5, color: '#374151', width: 155, flexShrink: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{fam}</div>
                        <div style={{ flex: 1, height: 7, background: '#f1f5f9', borderRadius: 4, overflow: 'hidden' }}>
                          <div style={{ width: `${(ing / maxFamIng * 100).toFixed(1)}%`, height: '100%', background: famColor(fam), borderRadius: 4, transition: 'width .4s' }} />
                        </div>
                        <div style={{ fontSize: 11.5, fontWeight: 700, color: famColor(fam), width: 52, textAlign: 'right', flexShrink: 0 }}>{fmt(ing)}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ABC Donut-style */}
                <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: 18 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 14 }}>Clasificación ABC del Catálogo</div>
                  {[
                    { clase: 'A', count: K.clA, ing: K.ing_clA, color: '#16a34a', desc: 'Alta rotación — reponer siempre' },
                    { clase: 'B', count: K.clB, ing: K.ing_clB, color: '#2563eb', desc: 'Media rotación — reponer cuando baje' },
                    { clase: 'C', count: K.clC, ing: K.ing_clC, color: '#94a3b8', desc: 'Baja rotación — revisar' },
                  ].map(row => {
                    const pctCnt = (row.count / K.total_art * 100).toFixed(0);
                    const pctIng = (row.ing / K.total_ing * 100).toFixed(0);
                    return (
                      <div key={row.clase} onClick={() => { setClaseFilter(row.clase); setActiveTab('articulos'); }}
                        style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 8, marginBottom: 6, cursor: 'pointer', background: '#f8fafc', border: `1px solid ${row.color}22` }}>
                        <div style={{ width: 32, height: 32, borderRadius: 8, background: row.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 14, color: '#fff', flexShrink: 0 }}>{row.clase}</div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontWeight: 600, fontSize: 12 }}>Clase {row.clase} — {row.desc}</div>
                          <div style={{ fontSize: 11, color: '#64748b', marginTop: 2 }}>{row.count.toLocaleString()} artículos · {fmt(row.ing)}</div>
                          <div style={{ height: 4, background: '#e2e8f0', borderRadius: 2, marginTop: 5, overflow: 'hidden' }}>
                            <div style={{ width: `${pctIng}%`, height: '100%', background: row.color, borderRadius: 2 }} />
                          </div>
                        </div>
                        <div style={{ textAlign: 'right', flexShrink: 0 }}>
                          <div style={{ fontWeight: 800, fontSize: 16, color: row.color }}>{pctIng}%</div>
                          <div style={{ fontSize: 10, color: '#94a3b8' }}>{pctCnt}% arts</div>
                        </div>
                      </div>
                    );
                  })}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 8, background: '#fef2f2', border: '1px solid #fecaca', marginTop: 8 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>⛔</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: 12 }}>Sin movimiento +90 días</div>
                      <div style={{ fontSize: 11, color: '#dc2626', marginTop: 2 }}>{K.sin_mov.toLocaleString()} artículos parados</div>
                    </div>
                    <div style={{ fontWeight: 800, fontSize: 16, color: '#dc2626' }}>{(K.sin_mov / K.total_art * 100).toFixed(0)}%</div>
                  </div>
                </div>
              </div>

              {/* Top artículos + Familia chart */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: 18 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 12 }}>🏆 Top Artículos por Ingresos 6m</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                    {D.items.slice(0, 8).map((item, i) => (
                      <div key={item.cod} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: i < 7 ? '1px solid #f1f5f9' : 'none' }}>
                        <div style={{ width: 22, height: 22, borderRadius: 6, background: i < 3 ? '#fef3c7' : '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, color: i < 3 ? '#92400e' : '#64748b', flexShrink: 0 }}>{i + 1}</div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontFamily: 'monospace', fontSize: 12, fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.cod}</div>
                          <div style={{ fontSize: 10, color: famColor(item.familia), marginTop: 1 }}>{famIcon(item.familia)} {item.familia}</div>
                        </div>
                        <Badge c={item.clase} small />
                        <div style={{ textAlign: 'right', flexShrink: 0 }}>
                          <div style={{ fontSize: 12, fontWeight: 700, color: '#16a34a' }}>{fmt(item.ing6m)}</div>
                          <div style={{ fontSize: 10, color: '#64748b' }}>6m</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: 18 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>Evolución por Familia</div>
                    <select value={selectedFamChart} onChange={e => setSelectedFamChart(e.target.value)}
                      style={{ padding: '4px 8px', border: '1px solid #e2e8f0', borderRadius: 6, fontSize: 12, background: '#fff', cursor: 'pointer', color: '#374151' }}>
                      {Object.keys(D.fam_chart).map(f => <option key={f} value={f}>{f}</option>)}
                    </select>
                  </div>
                  <div style={{ position: 'relative', marginBottom: 6 }}>
                    <MiniChart data={famChartData} color={famColor(selectedFamChart)} height={110} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#64748b' }}>
                    {famChartData.length > 0 && <>
                      <span>{famChartData[0]?.f?.slice(0, 7)}</span>
                      <span style={{ fontWeight: 700, color: famColor(selectedFamChart) }}>
                        Último: {fmt(famChartData[famChartData.length - 1]?.v || 0)}
                      </span>
                      <span>{famChartData[famChartData.length - 1]?.f?.slice(0, 7)}</span>
                    </>}
                  </div>
                  <div style={{ marginTop: 10, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {famList.slice(0, 6).map(([fam]) => (
                      <button key={fam} onClick={() => setSelectedFamChart(fam)}
                        style={{ padding: '3px 9px', borderRadius: 20, fontSize: 11, fontWeight: 600, cursor: 'pointer', border: `1px solid ${selectedFamChart === fam ? famColor(fam) : '#e2e8f0'}`, background: selectedFamChart === fam ? famColor(fam) : '#fff', color: selectedFamChart === fam ? '#fff' : '#374151' }}>
                        {fam.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ══════════ FAMILIAS ══════════ */}
          {activeTab === 'familias' && (
            <>
              <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 16, color: '#0f172a' }}>📂 Familias de Producto</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14, marginBottom: 20 }}>
                {famList.map(([fam, ing]) => {
                  const famItems = D.items.filter(i => i.familia === fam);
                  const claseA = famItems.filter(i => i.clase === 'A').length;
                  const sinMov = famItems.filter(i => i.dias_sin > 90).length;
                  const color = famColor(fam);
                  return (
                    <div key={fam} onClick={() => { setFamFilter(fam); setActiveTab('articulos'); }}
                      style={{ background: '#fff', border: `1px solid ${color}33`, borderRadius: 12, padding: 16, cursor: 'pointer', transition: 'transform .15s, box-shadow .15s' }}
                      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 4px 16px ${color}22`; }}
                      onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                        <div style={{ width: 36, height: 36, borderRadius: 10, background: color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>{famIcon(fam)}</div>
                        <div style={{ fontWeight: 700, fontSize: 13, lineHeight: 1.3, color: '#0f172a' }}>{fam}</div>
                      </div>
                      <div style={{ fontWeight: 800, fontSize: 20, color }}>{ fmt(ing)}</div>
                      <div style={{ fontSize: 11, color: '#64748b', marginTop: 4 }}>
                        {famItems.length} artículos · {claseA} clase A · {sinMov} parados
                      </div>
                      <div style={{ height: 4, background: '#f1f5f9', borderRadius: 2, marginTop: 10 }}>
                        <div style={{ width: `${(ing / maxFamIng * 100).toFixed(0)}%`, height: '100%', background: color, borderRadius: 2 }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {/* ══════════ ARTÍCULOS ══════════ */}
          {activeTab === 'articulos' && (
            <>
              {/* Filters */}
              <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap', alignItems: 'center' }}>
                <div style={{ fontWeight: 700, fontSize: 16, marginRight: 4 }}>📋 Artículos</div>
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar código o familia..."
                  style={{ padding: '7px 12px', border: '1px solid #e2e8f0', borderRadius: 7, fontSize: 12, outline: 'none', width: 200 }} />
                <select value={famFilter} onChange={e => setFamFilter(e.target.value)}
                  style={{ padding: '7px 10px', border: '1px solid #e2e8f0', borderRadius: 7, fontSize: 12, background: '#fff', cursor: 'pointer' }}>
                  <option value="">Todas las familias</option>
                  {K.familias.map(f => <option key={f} value={f}>{famIcon(f)} {f}</option>)}
                </select>
                <div style={{ display: 'flex', background: '#f1f5f9', borderRadius: 7, padding: 2 }}>
                  {[['', 'Todos'], ['A', 'Clase A'], ['B', 'Clase B'], ['C', 'Clase C']].map(([v, l]) => (
                    <button key={v} onClick={() => setClaseFilter(v)}
                      style={{ padding: '5px 11px', borderRadius: 5, fontSize: 12, border: 'none', cursor: 'pointer', background: claseFilter === v ? '#fff' : 'none', fontWeight: claseFilter === v ? 700 : 500, color: claseFilter === v ? '#0f172a' : '#64748b' }}>
                      {l}
                    </button>
                  ))}
                </div>
                <div style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
                  <button onClick={() => downloadCSV(items.map(i => ({ Código: i.cod, Familia: i.familia, Marca: i.marca, Clase: i.clase, Ing_Total: i.ing_tot, Ing_6m: i.ing6m, Unid_6m: i.u6m, Precio: i.precio, Tendencia: i.tend, Stock_Rec: i.stock_rec, Monto_OC: i.monto_oc, Dias_Sin: i.dias_sin })), 'Articulos')}
                    style={{ padding: '7px 13px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: 7, fontSize: 12, fontWeight: 600, cursor: 'pointer', color: '#374151' }}>
                    ⬇ CSV Vista actual
                  </button>
                  <button onClick={() => downloadCSV([...D.items].sort((a,b)=>b.ing_tot-a.ing_tot).map(i => ({ Código: i.cod, Familia: i.familia, Marca: i.marca, Clase: i.clase, Ing_Total: i.ing_tot, Acum_Pct: ((i.ing_tot/K.total_ing)*100).toFixed(2) })), 'ABC')}
                    style={{ padding: '7px 13px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: 7, fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>
                    ⬇ CSV ABC Completo
                  </button>
                </div>
              </div>

              {/* Legend */}
              <div style={{ padding: '8px 14px', background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 8, marginBottom: 14, fontSize: 11, color: '#78350f', display: 'flex', gap: 18, flexWrap: 'wrap', alignItems: 'center' }}>
                <strong>📖 LEYENDA:</strong>
                <span><b>Clase A</b> = 80% de ingresos · prioridad máxima</span>
                <span><b>↑ CRECIENDO</b> = demanda subiendo últimos 3m vs 3m anteriores</span>
                <span><b>Stock Rec.</b> = unidades para cubrir 2 meses de ventas</span>
                <span><b>Días sin mov.</b> = días sin ninguna transacción registrada</span>
                <span><b>Monto OC</b> = Stock rec. × precio promedio histórico</span>
              </div>

              <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, overflow: 'hidden' }}>
                <div style={{ overflowX: 'auto', maxHeight: 520, overflowY: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
                    <thead>
                      <tr>
                        {sortTh('cod', 'Código')}
                        <th style={th}>Familia</th>
                        <th style={th}>Marca</th>
                        {sortTh('clase', 'Clase')}
                        {sortTh('ing_tot', 'Ing. Total')}
                        {sortTh('u6m', 'Unid. 6m')}
                        {sortTh('ing6m', 'Ing. 6m')}
                        {sortTh('precio', 'Precio')}
                        {sortTh('tend', 'Tendencia')}
                        {sortTh('prom_men', 'Prom/mes')}
                        {sortTh('stock_rec', 'Stock Rec.')}
                        {sortTh('monto_oc', 'Monto OC')}
                        {sortTh('dias_sin', 'Días sin mov.')}
                      </tr>
                    </thead>
                    <tbody>
                      {items.slice(0, 300).map((r, i) => (
                        <tr key={r.cod} style={{ background: i % 2 === 0 ? '#fff' : '#fafafa' }}
                          onMouseEnter={e => e.currentTarget.style.background = '#f0f9ff'}
                          onMouseLeave={e => e.currentTarget.style.background = i % 2 === 0 ? '#fff' : '#fafafa'}>
                          <td style={{ ...td, fontFamily: 'monospace', fontWeight: 700 }}>{r.cod}</td>
                          <td style={td}>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '2px 7px', borderRadius: 6, background: famColor(r.familia) + '15', color: famColor(r.familia), fontSize: 11, fontWeight: 600, whiteSpace: 'nowrap' }}>
                              {famIcon(r.familia)} {r.familia}
                            </span>
                          </td>
                          <td style={td}><span style={{ padding: '2px 7px', borderRadius: 4, background: '#f1f5f9', fontSize: 11, fontWeight: 700 }}>{r.marca}</span></td>
                          <td style={td}><Badge c={r.clase} small /></td>
                          <td style={{ ...td, color: '#16a34a', fontWeight: 700 }}>{fmt(r.ing_tot)}</td>
                          <td style={td}>{r.u6m.toLocaleString()}</td>
                          <td style={{ ...td, color: '#16a34a' }}>{fmt(r.ing6m)}</td>
                          <td style={td}>${r.precio.toFixed(2)}</td>
                          <td style={{ ...td, color: r.tend?.includes('CRECIENDO') ? '#16a34a' : r.tend?.includes('BAJANDO') ? '#dc2626' : '#64748b', fontWeight: 600 }}>{r.tend}</td>
                          <td style={td}>{r.prom_men.toFixed(1)}</td>
                          <td style={{ ...td, fontWeight: 700 }}>{r.stock_rec.toLocaleString()}</td>
                          <td style={{ ...td, color: '#2563eb', fontWeight: 600 }}>{fmt(r.monto_oc)}</td>
                          <td style={{ ...td, color: r.dias_sin > 365 ? '#dc2626' : r.dias_sin > 90 ? '#d97706' : '#16a34a', fontWeight: 600 }}>{r.dias_sin}d</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div style={{ padding: '10px 14px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', fontSize: 11, color: '#64748b', display: 'flex', justifyContent: 'space-between' }}>
                  <span>Mostrando {Math.min(items.length, 300)} de {items.length} artículos</span>
                  <span>Ingresos totales filtrados: <b style={{ color: '#16a34a' }}>{fmt(items.reduce((a, i) => a + i.ing_tot, 0))}</b></span>
                </div>
              </div>
            </>
          )}

          {/* ══════════ PLANIFICACIÓN ══════════ */}
          {activeTab === 'planificacion' && (
            <>
              <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 16 }}>📈 Planificación de Inventario</div>

              {/* Controls */}
              <div style={{ display: 'flex', gap: 8, marginBottom: 12, alignItems: 'center' }}>
                <div style={{ display: 'flex', background: '#f1f5f9', borderRadius: 7, padding: 2 }}>
                  {[['ing', 'Ingresos'], ['cant', 'Cantidad']].map(([v, l]) => (
                    <button key={v} onClick={() => setChartType(v)}
                      style={{ padding: '5px 13px', borderRadius: 5, fontSize: 12, border: 'none', cursor: 'pointer', background: chartType === v ? '#fff' : 'none', fontWeight: chartType === v ? 700 : 500, color: chartType === v ? '#0f172a' : '#64748b' }}>
                      {l}
                    </button>
                  ))}
                </div>
                <button onClick={() => { const i = zoomOpts.indexOf(zoom); if (i > 0) setZoom(zoomOpts[i - 1]); }}
                  style={{ padding: '5px 10px', border: '1px solid #e2e8f0', borderRadius: 6, background: '#fff', cursor: 'pointer', fontSize: 13 }}>−</button>
                <span style={{ fontSize: 12, color: '#64748b', minWidth: 50, textAlign: 'center' }}>{zoom} sem.</span>
                <button onClick={() => { const i = zoomOpts.indexOf(zoom); if (i < zoomOpts.length - 1) setZoom(zoomOpts[i + 1]); }}
                  style={{ padding: '5px 10px', border: '1px solid #e2e8f0', borderRadius: 6, background: '#fff', cursor: 'pointer', fontSize: 13 }}>+</button>
              </div>

              {/* Plan table */}
              <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, overflow: 'hidden', marginBottom: 16 }}>
                <div style={{ overflowX: 'auto', maxHeight: 240 }}>
                  <table style={{ borderCollapse: 'collapse', fontSize: 12, minWidth: 800 }}>
                    <thead>
                      <tr>
                        <th style={{ ...th, position: 'sticky', left: 0, zIndex: 3, minWidth: 160 }}>Métrica</th>
                        {weeks.map(w => <th key={w.f} style={{ ...th, textAlign: 'right' }}>{w.f.slice(5)}</th>)}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { lbl: 'Ventas reales', k: chartType === 'ing' ? 'ing' : 'v', color: '#0f172a', fw: 600, bg: '' },
                        { lbl: 'Pronóst. estadístico', k: 'pe', color: '#dc2626', fw: 400, bg: '#fffbeb' },
                        { lbl: 'Pronóst. final', k: 'pf', color: '#d97706', fw: 700, bg: '#fffbeb' },
                        { lbl: 'Precio promedio', k: 'pr', color: '#94a3b8', fw: 400, bg: '', fmtFn: v => `$${v.toFixed(2)}` },
                        { lbl: 'Ingresos', k: 'ing', color: '#16a34a', fw: 700, bg: '', fmtFn: v => v > 0 ? fmt(v) : '' },
                        { lbl: 'Inv. proyectado', k: 'inv', color: '#2563eb', fw: 400, bg: '' },
                        { lbl: 'Plan de pedidos', k: 'pp', color: '#7c3aed', fw: 700, bg: '#f0fdf4' },
                      ].map(row => (
                        <tr key={row.lbl} style={{ borderBottom: '1px solid #f1f5f9' }}>
                          <td style={{ ...td, position: 'sticky', left: 0, background: '#fff', fontWeight: 600, zIndex: 1, borderRight: '1px solid #f1f5f9', color: '#374151' }}>{row.lbl}</td>
                          {weeks.map(w => (
                            <td key={w.f} style={{ ...td, textAlign: 'right', color: row.color, fontWeight: row.fw, background: row.bg }}>
                              {row.fmtFn ? row.fmtFn(w[row.k] || 0) : Math.round(w[row.k] || 0).toLocaleString()}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Chart */}
              <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: 16 }}>
                <div style={{ height: 260 }}><MainChart weeks={weeks} type={chartType} /></div>
                <div style={{ display: 'flex', gap: 18, marginTop: 10, fontSize: 11, color: '#64748b', flexWrap: 'wrap' }}>
                  {[['#94a3b8', 'Ventas reales'], ['#16a34a', 'Inventario proyectado'], ['#ef4444', 'Pronóstico final'], ['#d97706', 'Plan de pedidos']].map(([c, l]) => (
                    <span key={l} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <span style={{ width: 20, height: 3, background: c, borderRadius: 2, display: 'inline-block' }} />{l}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* ══════════ IMPORTAR ══════════ */}
          {activeTab === 'importar' && (
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ fontWeight: 800, fontSize: 18 }}>🚢 Artículos Prioritarios para Importar</div>
                <span style={{ background: '#fee2e2', color: '#dc2626', padding: '3px 10px', borderRadius: 20, fontSize: 12, fontWeight: 700 }}>{K.imp_urg.toLocaleString()} artículos (total catálogo)</span>
                <div style={{ marginLeft: 'auto' }}>
                  <button onClick={() => downloadCSV(impItems.map(i => ({ Código: i.cod, Familia: i.familia, Marca: i.marca, Clase: i.clase, Prev_3m: i.up3m, Curr_3m: i.u3m, Crecimiento_pct: i.acel_pct, Precio: i.precio, Monto_OC: i.monto_oc, Prioridad: i.imp_accion })), 'Importar')}
                    style={{ padding: '7px 14px', background: '#dc2626', color: '#fff', border: 'none', borderRadius: 7, fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>
                    ⬇ CSV Importar Urgente
                  </button>
                </div>
              </div>

              {/* Legend */}
              <div style={{ padding: '8px 14px', background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: 8, marginBottom: 14, fontSize: 11, color: '#7c2d12', display: 'flex', gap: 18, flexWrap: 'wrap' }}>
                <strong>📖 LEYENDA:</strong>
                <span>🔴 <b>IMPORTAR YA</b> = creció +1000% en últimos 3 meses vs 3 anteriores</span>
                <span>🟠 <b>IMPORTAR PRONTO</b> = creció +500%</span>
                <span>🟡 <b>AUMENTAR STOCK</b> = creció +200%</span>
                <span><b>Prev 3m</b> = unidades vendidas hace 3-6 meses | <b>Curr 3m</b> = unidades últimos 3 meses</span>
              </div>

              <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, overflow: 'hidden' }}>
                <div style={{ overflowX: 'auto', maxHeight: 560, overflowY: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
                    <thead>
                      <tr>
                        <th style={th}>#</th>
                        <th style={th}>Código</th>
                        <th style={th}>Familia</th>
                        <th style={th}>Marca</th>
                        <th style={th}>Clase</th>
                        <th style={th}>Prev 3m</th>
                        <th style={th}>Curr 3m</th>
                        <th style={th}>Crecimiento %</th>
                        <th style={th}>Precio</th>
                        <th style={th}>Monto OC</th>
                        <th style={th}>Prioridad</th>
                      </tr>
                    </thead>
                    <tbody>
                      {impItems.slice(0, 200).map((r, i) => (
                        <tr key={r.cod} style={{ borderBottom: '1px solid #f1f5f9' }}
                          onMouseEnter={e => e.currentTarget.style.background = '#f8fafc'}
                          onMouseLeave={e => e.currentTarget.style.background = ''}>
                          <td style={{ ...td, fontWeight: 700, color: '#94a3b8' }}>{i + 1}</td>
                          <td style={{ ...td, fontFamily: 'monospace', fontWeight: 700 }}>{r.cod}</td>
                          <td style={td}>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '2px 7px', borderRadius: 6, background: famColor(r.familia) + '15', color: famColor(r.familia), fontSize: 11, fontWeight: 600 }}>
                              {famIcon(r.familia)} {r.familia}
                            </span>
                          </td>
                          <td style={td}><span style={{ padding: '2px 7px', borderRadius: 4, background: '#f1f5f9', fontSize: 11, fontWeight: 700 }}>{r.marca}</span></td>
                          <td style={td}><Badge c={r.clase} small /></td>
                          <td style={{ ...td, color: '#64748b' }}>{r.up3m}</td>
                          <td style={{ ...td, fontWeight: 700 }}>{r.u3m}</td>
                          <td style={{ ...td, color: r.acel_pct >= 1000 ? '#dc2626' : r.acel_pct >= 500 ? '#d97706' : '#16a34a', fontWeight: 700 }}>{pct(r.acel_pct)}</td>
                          <td style={td}>${r.precio.toFixed(2)}</td>
                          <td style={{ ...td, color: '#2563eb', fontWeight: 600 }}>{fmt(r.monto_oc)}</td>
                          <td style={td}><Badge c={r.imp_accion} small>{r.imp_accion}</Badge></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {/* ══════════ SIN STOCK ══════════ */}
          {activeTab === 'sinstock' && (
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <div style={{ fontWeight: 800, fontSize: 18 }}>⚠ Sin Movimiento +90 días</div>
                <span style={{ background: '#fee2e2', color: '#dc2626', padding: '3px 10px', borderRadius: 20, fontSize: 12, fontWeight: 700 }}>{K.sin_mov.toLocaleString()} artículos (total)</span>
                <div style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
                  <button onClick={() => downloadCSV(sinItems.filter(i => i.dias_sin > 90).map(i => ({ Código: i.cod, Familia: i.familia, Marca: i.marca, Clase: i.clase, Dias_Sin: i.dias_sin, Ing_Hist: i.ing_tot, Precio: i.precio, Stock_Rec: i.stock_rec, Monto_OC: i.monto_oc, Accion: i.accion_sin })), 'SinStock')}
                    style={{ padding: '7px 14px', background: '#dc2626', color: '#fff', border: 'none', borderRadius: 7, fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>
                    ⬇ CSV Sin Movimiento
                  </button>
                  <button onClick={() => downloadCSV(sinItems.filter(i => i.clase === 'A').map(i => ({ Código: i.cod, Familia: i.familia, Clase: i.clase, Dias_Sin: i.dias_sin, Ing_Hist: i.ing_tot, Accion: 'REVISAR URGENTE' })), 'ClaseA_SinStock')}
                    style={{ padding: '7px 14px', background: '#d97706', color: '#fff', border: 'none', borderRadius: 7, fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>
                    ⬇ Solo Clase A
                  </button>
                </div>
              </div>

              {/* Stats row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 14 }}>
                {[
                  { label: 'Total sin movimiento', value: sinItems.length.toLocaleString(), color: '#dc2626', sub: '> 90 días' },
                  { label: 'Eran Clase A', value: sinItems.filter(i => i.clase === 'A').length.toLocaleString(), color: '#d97706', sub: 'Revisar urgente' },
                  { label: 'Candidatos liquidar', value: sinItems.filter(i => i.dias_sin > 365).length.toLocaleString(), color: '#7c3aed', sub: '> 365 días' },
                  { label: 'Valor histórico total', value: fmt(sinItems.reduce((a, i) => a + i.ing_tot, 0)), color: '#64748b', sub: 'Ingresos históricos' },
                ].map(k => <KpiCard key={k.label} {...k} />)}
              </div>

              {/* Legend */}
              <div style={{ padding: '8px 14px', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 8, marginBottom: 14, fontSize: 11, color: '#7f1d1d', display: 'flex', gap: 18, flexWrap: 'wrap' }}>
                <strong>📖 LEYENDA:</strong>
                <span>⚠ <b>REVISAR URGENTE</b> = era Clase A (generaba 80% ingresos), sin ventas recientes</span>
                <span><b>REVISAR</b> = tenía ingresos históricos relevantes (más de $1K)</span>
                <span><b>LIQUIDAR</b> = parado más de 365 días consecutivos</span>
                <span><b>MONITOREAR</b> = poca relevancia histórica, bajo riesgo</span>
              </div>

              <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, overflow: 'hidden' }}>
                <div style={{ overflowX: 'auto', maxHeight: 520, overflowY: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
                    <thead>
                      <tr>
                        <th style={th}>#</th>
                        <th style={th}>Código</th>
                        <th style={th}>Familia</th>
                        <th style={th}>Marca</th>
                        <th style={th}>Clase</th>
                        <th style={th}>Días sin mov.</th>
                        <th style={th}>Última venta aprox.</th>
                        <th style={th}>Ing. histórico</th>
                        <th style={th}>Precio</th>
                        <th style={th}>Stock Rec.</th>
                        <th style={th}>Monto OC</th>
                        <th style={th}>Acción</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sinItems.slice(0, 300).map((r, i) => {
                        const ultima = new Date(Date.now() - r.dias_sin * 86400000).toLocaleDateString('es-PE');
                        return (
                          <tr key={r.cod} style={{ borderBottom: '1px solid #f1f5f9', background: r.clase === 'A' ? '#fffbeb' : '#fff' }}
                            onMouseEnter={e => e.currentTarget.style.background = '#f0f9ff'}
                            onMouseLeave={e => e.currentTarget.style.background = r.clase === 'A' ? '#fffbeb' : '#fff'}>
                            <td style={{ ...td, fontWeight: 700, color: '#94a3b8' }}>{i + 1}</td>
                            <td style={{ ...td, fontFamily: 'monospace', fontWeight: 700 }}>{r.cod}</td>
                            <td style={td}>
                              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '2px 7px', borderRadius: 6, background: famColor(r.familia) + '15', color: famColor(r.familia), fontSize: 11, fontWeight: 600 }}>
                                {famIcon(r.familia)} {r.familia}
                              </span>
                            </td>
                            <td style={td}><span style={{ padding: '2px 7px', borderRadius: 4, background: '#f1f5f9', fontSize: 11, fontWeight: 700 }}>{r.marca}</span></td>
                            <td style={td}><Badge c={r.clase} small /></td>
                            <td style={{ ...td, color: r.dias_sin > 365 ? '#dc2626' : '#d97706', fontWeight: 700 }}>{r.dias_sin}d</td>
                            <td style={{ ...td, color: '#64748b' }}>{ultima}</td>
                            <td style={{ ...td, color: '#16a34a', fontWeight: 600 }}>{fmt(r.ing_tot)}</td>
                            <td style={td}>${r.precio.toFixed(2)}</td>
                            <td style={{ ...td, fontWeight: 700 }}>{r.stock_rec}</td>
                            <td style={{ ...td, color: '#2563eb' }}>{fmt(r.monto_oc)}</td>
                            <td style={td}><Badge c={r.accion_sin} small>{r.accion_sin}</Badge></td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div style={{ padding: '10px 14px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', fontSize: 11, color: '#64748b' }}>
                  Mostrando {Math.min(sinItems.length, 300)} artículos sin movimiento · Nota: tabla muestra solo los 250 artículos cargados en esta versión embebida.
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}
