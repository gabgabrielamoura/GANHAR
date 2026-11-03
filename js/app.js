/* GANHAR · lógica do site (JavaScript puro, sem dependências) */
(function () {
  'use strict';

  /* ---------- Conteúdo ---------- */

  const IMG = {
    boas: 'assets/tela_boasvindas.webp',
    perg: 'assets/tela_pergunta.webp',
    perg2: 'assets/tela_pergunta2.webp',
    prog: 'assets/tela_progresso.webp',
    rel: 'assets/tela_relatorio.webp',
    acoes: 'assets/tela_acoes.webp',
    desb: 'assets/tela_desbloqueio.webp',
    hist: 'assets/tela_historico.webp',
    resumo: 'assets/tela_resumo.webp'
  };

  const PHASES = [
    { kicker: 'Fase 1 · 4 sem.', title: 'Diagnóstico', sum: 'Diagnóstico', dur: '4 sem.', bar: '4 sem.', num: '01', col: '2 / 6',
      desc: 'Entender como as equipes estão e classificar os pontos de atenção de cada setor.',
      items: ['Questionário estruturado para toda a equipe', 'Análise por áreas e setores', 'Dashboard executivo com mapa de calor', 'Relatório técnico com recomendações'] },
    { kicker: 'Fase 2 · 4 sem.', title: 'Perfis', sum: 'Perfis com o GANHAR', dur: '4 sem.', bar: '4 sem.', num: '02', col: '6 / 10',
      desc: 'Mapear como as pessoas estão funcionando hoje, com o Método GANHAR®.',
      items: ['64 perfis possíveis, com forças e caminhos de evolução', 'Leitura consolidada para a gestão'] },
    { kicker: 'Fase 3 · 4 sem.', title: 'Plano de ação', sum: 'Plano de ação', dur: '4 sem.', bar: '4 sem.', num: '03', col: '10 / 14',
      desc: 'Transformar o diagnóstico e os perfis em ações práticas e imediatas.',
      items: ['Lógica de classificação por dimensão', 'Prioridades por setor', 'Ações com responsável e prazo'] },
    { kicker: 'Fase 4 · 8 sem.', title: 'Implementação', sum: 'Implementação', dur: '8 sem.', bar: '8 semanas', num: '04', col: '14 / 22',
      desc: 'Colocar o plano em prática nas áreas, junto com as lideranças.',
      items: ['Execução das ações nas áreas', 'Workshops e encontros com as equipes', 'Apoio às lideranças'] },
    { kicker: 'Fase 5 · Contínuo', title: 'Monitoramento', sum: 'Monitoramento', dur: 'contínuo', bar: 'Contínuo', num: '05', col: '22 / 26',
      desc: 'Acompanhar os indicadores para manter a empresa em dia com a NR-1.',
      items: ['Acompanhamento contínuo dos indicadores', 'Novas leituras quando o contexto muda', 'Sustentação do PGR'] }
  ];

  const TEMAS = [
    { n: 9, label: 'Relações no trabalho', pct: '90%' },
    { n: 8, label: 'Carga de trabalho', pct: '80%' },
    { n: 7, label: 'Gestão de mudanças', pct: '70%' }
  ];

  // setor, pessoas, relações, carga, mudanças (1 = tema de atenção)
  const MAPA = [
    ['Administração', 19, 1, 1, 0], ['Recursos Humanos', 4, 1, 1, 0], ['Controle da Qualidade', 4, 1, 1, 0],
    ['Manutenção', 12, 1, 1, 1], ['Estamparia · produção', 11, 1, 1, 1], ['Estamparia · escritório', 4, 1, 0, 1],
    ['Trat. térmico · produção', 25, 1, 1, 1], ['Trat. térmico · escritório', 5, 0, 0, 1],
    ['Montagem transmissão', 67, 1, 1, 1], ['Montagem comando', 42, 1, 1, 1]
  ];

  const PILARES = [['G', 'Gestão', 3.8], ['A', 'Autoconhecimento', 4.2], ['N', 'Networking', 2.9], ['H', 'Habilidades', 3.5], ['A', 'Adaptabilidade', 4.0], ['R', 'Resultados', 3.1]];

  const JOURNEY = {
    empresa: [
      { n: 1, title: 'Convidar', desc: 'A empresa envia o link e cada colaborador responde no próprio celular.', kind: 'convite' },
      { n: 2, title: 'Responder', desc: 'Perguntas sobre situações reais, com cinco opções de resposta.', kind: 'img', img: IMG.perg, alt: 'Pergunta com escala de respostas' },
      { n: 3, title: 'Progresso', desc: 'O chat mostra o progresso e incentiva a chegar até o fim.', kind: 'img', img: IMG.prog, alt: 'Conversa mostrando o progresso' },
      { n: 4, title: 'Monitorar', desc: 'As respostas chegam numa base organizada por data, turno e setor.', kind: 'monitor' },
      { n: 5, title: 'Entrega', desc: 'Um relatório com a média de respostas enviadas.', kind: 'entrega' }
    ],
    pessoa: [
      { n: 1, title: 'Começar', desc: 'A pessoa abre o link e começa na hora.', kind: 'img', img: IMG.boas, alt: 'Tela de boas-vindas' },
      { n: 2, title: 'Responder', desc: 'Perguntas sobre situações reais, com cinco opções de resposta.', kind: 'img', img: IMG.perg2, alt: 'Perguntas respondidas no chat' },
      { n: 3, title: 'Progresso', desc: 'O chat mostra o progresso e incentiva a chegar até o fim.', kind: 'img', img: IMG.prog, alt: 'Conversa mostrando o progresso' },
      { n: 4, title: 'Receber o perfil', desc: 'Seu perfil, seus pontos de força e de melhoria e uma nota por pilar.', kind: 'img', img: IMG.rel, alt: 'Relatório com o perfil funcional' },
      { n: 5, title: 'Agir', desc: 'Ações recomendadas e opções de planos de rotina.', kind: 'img', img: IMG.desb, alt: 'Ações recomendadas e plano completo' }
    ]
  };

  const ENVIOS = [['03 ago. · 13:49', 'Produção'], ['03 ago. · 13:52', 'Manutenção'], ['03 ago. · 14:10', 'Produção'], ['04 ago. · 08:02', 'RH'], ['04 ago. · 08:15', 'Qualidade'], ['04 ago. · 09:31', 'Produção'], ['05 ago. · 07:48', 'Montagem'], ['05 ago. · 10:05', 'Montagem']];
  const HEAT = [0, 1, 0, 2, 1, 1, 0, 0, 2, 3, 1, 0, 0, 1, 2, 1, 1, 0, 0, 2].map(i => ['#B9F8CF', '#FEE685', '#FFD6A8', '#FFC9C9'][i]);

  const FAQ = {
    empresa: [
      ['Como a equipe responde?', 'A empresa recebe um link e envia para os colaboradores. Cada um responde no próprio celular, no ritmo de uma conversa.'],
      ['Quanto tempo leva?', 'São 40 perguntas curtas. Cada pessoa responde em cerca de 20 minutos, e a aplicação na empresa toda leva até 4 semanas, na fase de diagnóstico.'],
      ['A empresa vê as respostas de cada pessoa?', 'Não. Cada pessoa tem o próprio resultado, e a empresa recebe a visão geral da equipe, sem nomes.'],
      ['O perfil é pra sempre?', 'Não. Ele mostra como você está funcionando no contexto atual. Quando o contexto muda, vale responder de novo.']
    ],
    pessoa: [
      ['Preciso fazer cadastro?', 'Não. Você abre o link e começa a conversa na hora.'],
      ['O que eu recebo no final?', 'Seu perfil funcional entre 64 possíveis, com uma nota para cada pilar, pontos de força, pontos de melhoria e ações recomendadas.'],
      ['O perfil vale para sempre?', 'Não. Ele mostra como você está funcionando no contexto atual. Quando o contexto muda, vale responder de novo.']
    ]
  };

  const APP_SHOTS = [
    { img: IMG.perg, alt: 'Pergunta no chat', t: 'rotate(-8deg) translateY(30px)' },
    { img: IMG.hist, alt: 'Histórico de resultados', t: 'rotate(-4deg) translateY(10px)' },
    { img: IMG.acoes, alt: 'Ações recomendadas', t: 'none' },
    { img: IMG.resumo, alt: 'Resumo do resultado', t: 'none' },
    { img: IMG.rel, alt: 'Relatório com pilares', t: 'rotate(4deg) translateY(10px)' },
    { img: IMG.boas, alt: 'Boas-vindas do GANHAR', t: 'rotate(8deg) translateY(30px)' }
  ];

  /* Chat de contato: troque aqui o e-mail e as opções */
  const CONTATO_EMAIL = 'atendimento@roseanerodriguespsc.com';
  const SERVICOS = ['GANHAR', 'Implementação NR-1'];
  const TAMANHOS = ['até 31', '31 a 90', '90 a 250', 'mais de 250'];
  const CANAIS = ['e-mail', 'celular/telefone'];

  /* ---------- Utilidades ---------- */

  const $ = (sel) => document.querySelector(sel);
  const esc = (t) => String(t).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const CHECK = (color, size, w) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex:none"><path d="M20 6 9 17l-5-5"/></svg>`;

  const state = { page: 'inicio', phase: 0, tema: -1, aud: 'empresa', faqOpen: { 0: true } };

  /* ---------- Navegação (#inicio, #nr1, #metodo, #contato, #mapa, #fases) ---------- */

  const ROTAS = {
    inicio: ['inicio'], nr1: ['nr1'], metodo: ['metodo'],
    contato: ['inicio', 'contato'], mapa: ['inicio', 'mapa'],
    fases: ['nr1', 'fases'], entregaveis: ['nr1', 'entregaveis'], publico: ['metodo', 'publico']
  };

  // Serviço que o chat já começa respondido, conforme a aba de onde a pessoa veio
  const SERVICO_DA_ABA = { nr1: 'Implementação NR-1', metodo: 'GANHAR' };

  function showPage(page) {
    state.page = page;
    document.querySelectorAll('[data-page]').forEach((el) => { el.hidden = el.dataset.page !== page; });
    document.querySelectorAll('.nav [data-go]').forEach((el) => {
      const on = el.dataset.go === page;
      el.classList.toggle('is-on', on);
      if (on) el.setAttribute('aria-current', 'page'); else el.removeAttribute('aria-current');
    });
    const titles = { inicio: 'GANHAR · Gestão humana, desenvolvimento que faz sentido', nr1: 'Implementação NR-1 · GANHAR', metodo: 'Método GANHAR®' };
    document.title = titles[page];
  }

  function scrollToTarget(target, smooth) {
    const el = target && document.getElementById(target);
    if (el) el.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' });
    else window.scrollTo({ top: 0, behavior: 'auto' });
  }

  function go(page, target) {
    hideToast();
    showPage(page);
    const hash = '#' + (target || page);
    if (location.hash !== hash) history.pushState(null, '', hash);
    requestAnimationFrame(() => scrollToTarget(target, true));
  }

  function route() {
    const r = ROTAS[location.hash.slice(1)] || ['inicio'];
    showPage(r[0]);
    requestAnimationFrame(() => scrollToTarget(r[1], false));
  }

  document.addEventListener('click', (e) => {
    const link = e.target.closest('[data-go]');
    if (link) {
      e.preventDefault();
      const target = link.dataset.target;
      // Indo para o chat: se a pessoa está na aba NR-1 ou Método, o serviço já vem respondido
      if (target === 'contato') {
        const servico = SERVICO_DA_ABA[state.page];
        if (servico) chat.startWith(servico);
      }
      // "Ver as fases" e o card Serviço 01 sempre abrem na Fase 1
      if (target === 'fases') setPhase(0);
      // Cartõezinhos do banner do Método: já abrem com o público certo
      if (link.dataset.setAud) setAudience(link.dataset.setAud);
      go(link.dataset.go, target);
      return;
    }
    const act = e.target.closest('[data-action]');
    if (act) {
      if (act.dataset.action === 'questionario') showToast('O questionário individual ainda não está disponível. Enquanto isso, a gente leva o GANHAR para a sua empresa.');
      if (act.dataset.action === 'restart') chat.restart();
    }
  });
  window.addEventListener('popstate', route);

  /* ---------- Início: fases resumidas, temas e mapa ---------- */

  function renderHome() {
    $('#phase-summary').innerHTML = PHASES.map((p, i) => `
      <button data-phase-open="${i}" style="display:flex;justify-content:space-between;align-items:center;min-height:40px;padding:0 4px;background:none;border:0;border-bottom:1px solid #F3F4F6;font:400 14px Inter,system-ui,sans-serif;color:#19212E;cursor:pointer;text-align:left">
        <span>${esc(p.sum)}</span><span style="color:#00786F;font-weight:600">${esc(p.dur)}</span>
      </button>`).join('');
    $('#phase-summary').addEventListener('click', (e) => {
      const b = e.target.closest('[data-phase-open]');
      if (b) { setPhase(+b.dataset.phaseOpen); go('nr1', 'fases'); }
    });

    $('#temas').innerHTML = TEMAS.map((t) => `
      <div style="padding:28px;border-radius:20px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14)">
        <div style="display:flex;align-items:baseline;gap:8px"><span style="font-size:60px;font-weight:800;line-height:1">${t.n}</span><span style="font-size:18px;font-weight:600;color:#CBFBF1">de 10</span></div>
        <div style="height:6px;border-radius:3px;background:rgba(255,255,255,.15);margin:22px 0 16px;overflow:hidden"><div style="height:6px;border-radius:3px;background:#46EDD5;width:${t.pct}"></div></div>
        <div style="font-size:12px;color:#CBFBF1">setores com atenção em</div>
        <div style="font-size:18px;font-weight:700;margin-top:4px">${esc(t.label)}</div>
      </div>`).join('');

    renderMapa();
    $('#mapa-head').addEventListener('click', (e) => {
      const b = e.target.closest('[data-tema]');
      if (!b) return;
      const i = +b.dataset.tema;
      state.tema = state.tema === i ? -1 : i;
      renderMapa();
    });
  }

  function renderMapa() {
    $('#mapa-head').innerHTML = `<tr>
      <th scope="col" class="label" style="text-align:left;padding:4px 8px">Setor</th>
      <th scope="col" class="label" style="text-align:right;padding:4px 8px">Pessoas</th>
      ${TEMAS.map((t, i) => {
        const on = state.tema === i;
        return `<th scope="col" style="padding:0;width:22%"><button data-tema="${i}" aria-pressed="${on}" style="width:100%;min-height:36px;border-radius:10px;border:1px solid ${on ? '#00BBA7' : '#E5E7EB'};background:${on ? '#CBFBF1' : '#fff'};font:600 12px Inter,system-ui,sans-serif;color:#19212E;cursor:pointer">${esc(t.label)}</button></th>`;
      }).join('')}
    </tr>`;
    const td = 'border-top:1px solid #E5E7EB';
    $('#mapa-body').innerHTML = MAPA.map((r) => `<tr>
      <th scope="row" style="text-align:left;font-weight:400;padding:0 8px">${esc(r[0])}</th>
      <td style="text-align:right;padding:0 8px;color:#5A6575">${r[1]}</td>
      ${[r[2], r[3], r[4]].map((v, i) => {
        const op = (state.tema === -1 || state.tema === i) ? 1 : 0.25;
        return `<td style="padding:0"><div style="position:relative;height:34px;border-radius:8px;display:flex;align-items:center;justify-content:center;transition:opacity .2s;background:${v ? '#00786F' : '#F3F4F6'};opacity:${op}">${v ? '<span class="sr-only" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)">Tema de atenção</span>' + CHECK('#fff', 14, 3) : ''}</div></td>`;
      }).join('')}
    </tr>`).join('') + `<tr>
      <th scope="row" style="text-align:left;padding:10px 8px 0;font-weight:700;${td}">Setores afetados</th>
      <td style="text-align:right;padding:10px 8px 0;font-weight:700;${td}">193</td>
      ${TEMAS.map((t) => `<td style="text-align:center;padding:10px 0 0;font-weight:700;color:#00786F;${td}">${t.n}</td>`).join('')}
    </tr>`;
  }

  /* ---------- NR-1: abas das fases e cronograma ---------- */

  function setPhase(i) {
    state.phase = i;
    const p = PHASES[i];
    $('#phase-tabs').innerHTML = PHASES.map((ph, k) => `
      <button class="tab${k === i ? ' is-on' : ''}" role="tab" aria-selected="${k === i}" data-phase="${k}"><span class="tab-k">${esc(ph.kicker)}</span><span class="tab-t">${esc(ph.title)}</span></button>`).join('');
    $('#phase-num').textContent = p.num;
    $('#phase-title').textContent = p.title;
    $('#phase-desc').textContent = p.desc;
    $('#phase-items').innerHTML = p.items.map((it) => `
      <div class="fade" style="display:flex;align-items:center;gap:12px;padding:14px 16px;border-radius:12px;background:#F3F4F6;font-size:14px">${CHECK('#0D9488', 16, 2.5)}<span>${esc(it)}</span></div>`).join('');
    $('#gantt').innerHTML = PHASES.map((ph, k) => {
      const on = k === i, cont = k === 4;
      const bg = cont ? '#F0FDFA' : (on ? '#00786F' : '#B2ECE5');
      const fg = cont ? '#00786F' : (on ? '#fff' : '#134E4A');
      return `<button data-phase="${k}" style="display:grid;grid-template-columns:170px repeat(24,minmax(0,1fr));align-items:center;min-height:40px;background:none;border:0;padding:0;cursor:pointer;font-family:inherit;text-align:left">
        <span style="font-size:14px;color:#19212E;font-weight:${on ? 700 : 400}">${esc(ph.title)}</span>
        <span style="grid-column:${ph.col};height:28px;border-radius:999px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:600;background:${bg};color:${fg};border:1px ${cont ? 'dashed' : 'solid'} #00BBA7">${esc(ph.bar)}</span>
      </button>`;
    }).join('');
  }

  function initNr1() {
    setPhase(0);
    const onPick = (e) => { const b = e.target.closest('[data-phase]'); if (b) setPhase(+b.dataset.phase); };
    $('#phase-tabs').addEventListener('click', onPick);
    $('#gantt').addEventListener('click', onPick);
    // setas do teclado nas abas
    $('#phase-tabs').addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      const n = (state.phase + (e.key === 'ArrowRight' ? 1 : PHASES.length - 1)) % PHASES.length;
      setPhase(n);
      $('#phase-tabs').querySelectorAll('.tab')[n].focus();
    });
  }

  /* ---------- Método: pilares, público, jornada, perguntas, app ---------- */

  function renderPilares() {
    $('#pilares').innerHTML = PILARES.map((p) => `
      <div class="card" style="padding:24px;display:flex;flex-direction:column;gap:10px">
        <div style="font-size:52px;font-weight:800;color:#00786F;line-height:1">${p[0]}</div>
        <div style="font-size:15px;font-weight:700;margin-top:6px">${esc(p[1])}</div>
        <div style="height:6px;border-radius:3px;background:#E5E7EB;overflow:hidden"><div style="height:6px;border-radius:3px;background:#00BBA7;width:${Math.round(p[2] / 5 * 100)}%"></div></div>
        <div style="font-size:12px;color:#5A6575">Exemplo: ${p[2].toFixed(1).replace('.', ',')}</div>
      </div>`).join('');
  }

  function phoneContent(j) {
    if (j.kind === 'img') return `<img src="${j.img}" alt="${esc(j.alt)}" loading="lazy">`;
    if (j.kind === 'convite') return `
      <div style="height:100%;border-radius:27px;background:linear-gradient(160deg,#E6F7F5 0%,#B2ECE5 45%,#5ECDC3 100%);display:flex;align-items:center;justify-content:center;padding:14px">
        <div style="width:100%;padding:18px 14px;border-radius:16px;background:#fff;text-align:center;display:flex;flex-direction:column;gap:8px;align-items:center">
          <span style="font-size:9px;font-weight:700;letter-spacing:1px;color:#00786F">CONVITE</span>
          <span style="font-size:18px;font-weight:800;color:#19212E">Projeto NR-1</span>
          <span style="font-size:10px;line-height:1.5;color:#5A6575">Sua empresa convidou você para uma conversa sobre como você está no trabalho.</span>
          <span style="margin-top:4px;padding:6px 10px;border-radius:8px;background:#F0FDFA;font-size:9px;color:#134E4A">Responda até [DATA]</span>
          <span style="margin-top:4px;width:100%;padding:8px;border-radius:999px;background:#00786F;color:#fff;font-size:10px;font-weight:600">Começar</span>
        </div>
      </div>`;
    if (j.kind === 'monitor') return `
      <div style="height:100%;border-radius:27px;background:#fff;padding:22px 10px 10px;display:flex;flex-direction:column;gap:6px;font-size:9px;color:#19212E">
        <div style="display:flex;gap:6px;padding-bottom:6px;border-bottom:1px solid #F3F4F6"><span style="padding:3px 8px;border-radius:999px;background:#00786F;color:#fff;font-weight:600">Envios</span><span style="padding:3px 8px;color:#5A6575">Setores</span><span style="padding:3px 8px;color:#5A6575">Turnos</span></div>
        ${ENVIOS.map((e) => `<div style="display:flex;justify-content:space-between;align-items:center;padding:6px 4px;border-bottom:1px solid #F3F4F6"><span>${e[0]}</span><span style="padding:2px 6px;border-radius:999px;background:#F0FDFA;color:#134E4A">${e[1]}</span></div>`).join('')}
      </div>`;
    return `
      <div style="height:100%;border-radius:27px;background:#fff;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:26px 12px 12px;background:var(--grad-documento);color:#fff"><div style="font-size:7px;letter-spacing:1px;color:#CBFBF1">RESULTADOS INICIAIS</div><div style="font-size:11px;font-weight:800;margin-top:4px">Avaliação dos riscos psicossociais</div></div>
        <div style="padding:10px 12px;display:flex;flex-direction:column;gap:6px">
          <div style="font-size:8px;color:#5A6575">Média de respostas por setor</div>
          <div style="display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:3px">${HEAT.map((h) => `<span style="height:16px;border-radius:3px;background:${h}"></span>`).join('')}</div>
          <div style="display:flex;flex-wrap:wrap;gap:3px;margin-top:4px;font-size:7px"><span style="padding:2px 5px;border-radius:999px;background:#F0FDF4;color:#008236">Baixo</span><span style="padding:2px 5px;border-radius:999px;background:#FFFBEB;color:#BB4D00">Médio</span><span style="padding:2px 5px;border-radius:999px;background:#FFF7ED;color:#CA3500">Alto</span><span style="padding:2px 5px;border-radius:999px;background:#FEF2F2;color:#C10007">Crítico</span></div>
        </div>
      </div>`;
  }

  function renderAudience() {
    const a = state.aud;
    document.querySelectorAll('[data-aud]').forEach((b) => {
      const on = b.dataset.aud === a;
      b.classList.toggle('is-on', on);
      b.setAttribute('aria-pressed', on);
    });
    document.querySelectorAll('[data-aud-card]').forEach((c) => { c.hidden = c.dataset.audCard !== a; });
    $('#aud-label').textContent = a === 'empresa' ? 'para a empresa' : 'para você';
    $('#journey').innerHTML = JOURNEY[a].map((j) => `
      <div class="fade" style="display:flex;flex-direction:column;gap:12px">
        <div class="phone" style="width:100%;max-width:230px;height:400px">${phoneContent(j)}</div>
        <div style="display:flex;align-items:center;gap:10px"><span style="width:26px;height:26px;border-radius:50%;background:#00BBA7;color:#134E4A;font-size:13px;font-weight:700;display:inline-flex;align-items:center;justify-content:center">${j.n}</span><span style="font-size:16px;font-weight:700">${esc(j.title)}</span></div>
        <p style="margin:0;font-size:13px;line-height:1.6;color:#5A6575">${esc(j.desc)}</p>
      </div>`).join('');
    renderFaq();
  }

  function setAudience(a) {
    state.aud = a;
    state.faqOpen = { 0: true };
    renderAudience();
  }

  function renderFaq() {
    $('#faq').innerHTML = FAQ[state.aud].map((f, i) => {
      const open = !!state.faqOpen[i];
      return `<div style="display:flex;flex-direction:column;gap:14px">
        <button class="faq-q" aria-expanded="${open}" data-faq="${i}"><span>${esc(f[0])}</span><span aria-hidden="true" style="font-size:14px;opacity:.85">${open ? '−' : '+'}</span></button>
        ${open ? `<div class="bubble fade" style="font-size:15px;line-height:1.6;max-width:640px">${esc(f[1])}</div>` : ''}
      </div>`;
    }).join('');
  }

  function initMetodo() {
    renderPilares();
    renderAudience();
    document.querySelectorAll('[data-aud]').forEach((b) => b.addEventListener('click', () => setAudience(b.dataset.aud)));
    $('#faq').addEventListener('click', (e) => {
      const b = e.target.closest('[data-faq]');
      if (!b) return;
      const i = +b.dataset.faq;
      state.faqOpen[i] = !state.faqOpen[i];
      renderFaq();
      $('#faq').querySelector(`[data-faq="${i}"]`).focus();
    });
    $('#app-shots').innerHTML = APP_SHOTS.map((a) => `
      <div class="phone" style="flex:0 0 200px;height:420px;margin-bottom:-40px;transform:${a.t}"><img src="${a.img}" alt="${esc(a.alt)}" loading="lazy"></div>`).join('');
  }

  /* ---------- Aviso flutuante ---------- */

  let toastTimer = null;
  function showToast(text) {
    $('#toast-text').textContent = text;
    $('#toast').hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(hideToast, 6000);
  }
  function hideToast() { $('#toast').hidden = true; }

  /* ---------- Chat de contato ---------- */

  const chat = {
    msgs: [], step: 0, typing: false, error: '', timers: [],
    data: { service: '', size: '', channel: '', contact: '' },

    get isEmail() { return this.data.channel === 'e-mail'; },
    get inputOn() { return this.step === 3 && !this.typing; },

    start() {
      this.timers.forEach(clearTimeout);
      this.timers = [];
      this.msgs = [{ from: 'bot', text: 'Olá! Interesse em qual serviço?' }];
      this.step = 0; this.typing = false; this.error = '';
      this.data = { service: '', size: '', channel: '', contact: '' };
      $('#chat-input').value = '';
      this.render();
    },
    restart() { this.start(); },

    // Recomeça a conversa com o serviço já respondido e vai direto para o tamanho da equipe
    startWith(servico) {
      this.start();
      this.msgs.push({ from: 'user', text: servico });
      this.msgs.push({ from: 'bot', text: 'Quantas pessoas trabalham na sua empresa?' });
      this.data.service = servico;
      this.step = 1;
      this.render();
    },

    chips() {
      if (this.typing) return [];
      return ({ 0: SERVICOS, 1: TAMANHOS, 2: CANAIS })[this.step] || [];
    },

    pick(v) {
      if (this.step === 0) this.answer(v, 'service', 'Quantas pessoas trabalham na sua empresa?', 1, false);
      else if (this.step === 1) this.answer(v, 'size', 'Podemos entrar em contato de que forma?', 2, true);
      else if (this.step === 2) this.answer(v, 'channel', v === 'e-mail' ? 'Qual é o seu e-mail?' : 'Qual é o seu celular com DDD?', 3, true);
    },

    answer(text, key, next, nextStep, question) {
      this.msgs.push({ from: 'user', text: text });
      this.data[key] = text;
      this.step = -1;
      this.error = '';
      this.botSay(next, nextStep, question);
    },

    botSay(text, nextStep, question) {
      this.typing = true;
      this.render();
      this.timers.push(setTimeout(() => {
        this.typing = false;
        this.msgs.push({ from: 'bot', text: text, q: !!question });
        this.step = nextStep;
        this.render();
        if (this.step === 3) $('#chat-input').focus({ preventScroll: true });
      }, 700));
    },

    send() {
      if (this.step !== 3) return;
      const input = $('#chat-input');
      const v = input.value.trim();
      const digits = v.replace(/\D/g, '');
      const ok = this.isEmail ? /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) : (digits.length >= 10 && digits.length <= 13);
      if (!ok) {
        this.error = this.isEmail ? 'Digite um e-mail válido.' : 'Digite um celular com DDD, por exemplo (47) 99999-9999.';
        this.renderField();
        return;
      }
      input.value = '';
      this.data.contact = v;
      this.msgs.push({ from: 'user', text: v });
      this.step = -1;
      this.error = '';
      this.botSay('Obrigada! A equipe GANHAR vai falar com você por ' + (this.isEmail ? 'e-mail' : 'telefone') + ' em breve. Se quiser, envie o resumo direto para a nossa equipe.', 4, false);
    },

    mailto() {
      const d = this.data;
      const body = 'Serviço: ' + d.service + '\nTamanho da empresa: ' + d.size + ' pessoas\nContato por ' + d.channel + ': ' + d.contact;
      return 'mailto:' + CONTATO_EMAIL + '?subject=' + encodeURIComponent('Contato pelo site · ' + d.service) + '&body=' + encodeURIComponent(body);
    },

    progress() {
      const d = this.data;
      const s = this.step === -1 ? (d.contact ? 4 : d.channel ? 3 : d.size ? 2 : d.service ? 1 : 0) : this.step;
      return ({ 0: '8%', 1: '33%', 2: '58%', 3: '80%', 4: '100%' })[s];
    },

    renderField() {
      const input = $('#chat-input');
      const on = this.inputOn;
      input.disabled = !on;
      $('#chat-send').disabled = !on;
      input.type = on ? (this.isEmail ? 'email' : 'tel') : 'text';
      input.placeholder = on ? (this.isEmail ? 'voce@empresa.com' : '(47) 99999-9999') : (this.step === 4 ? 'Conversa concluída' : 'Escolha uma das opções acima');
      $('#chat-form').style.borderColor = this.error ? '#C10007' : (on ? '#00D5BE' : '#E5E7EB');
      const err = $('#chat-error');
      err.textContent = this.error;
      err.hidden = !this.error;
    },

    render() {
      const body = $('#chat-body');
      let html = this.msgs.map((m) => {
        const cls = m.from === 'user' ? 'bubble bubble-user' : (m.q ? 'bubble bubble-q' : 'bubble');
        return `<div class="${cls} fade">${esc(m.text)}</div>`;
      }).join('');
      if (this.typing) html += '<div class="bubble" style="display:inline-flex;gap:5px;padding:14px 16px" aria-label="Digitando"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>';
      const chips = this.chips();
      if (chips.length) html += `<div class="fade" style="display:flex;flex-wrap:wrap;gap:8px">${chips.map((c) => `<button class="opt" data-chip="${esc(c)}">${esc(c)}</button>`).join('')}</div>`;
      if (this.step === 4 && !this.typing) {
        html += `<div class="fade" style="display:flex;flex-wrap:wrap;gap:8px">
          <a class="btn btn-primary" href="${esc(this.mailto())}" style="min-height:40px;font-size:13px;color:#fff">Enviar para a equipe</a>
          <button class="opt" data-action="restart">Nova conversa</button></div>`;
      }
      body.innerHTML = html;
      body.scrollTop = body.scrollHeight;
      $('#chat-progress').style.width = this.progress();
      this.renderField();
    },

    init() {
      $('#chat-body').addEventListener('click', (e) => {
        const b = e.target.closest('[data-chip]');
        if (b) this.pick(b.dataset.chip);
      });
      $('#chat-form').addEventListener('submit', (e) => { e.preventDefault(); this.send(); });
      $('#chat-input').addEventListener('input', () => { if (this.error) { this.error = ''; this.renderField(); } });
      this.start();
    }
  };

  /* ---------- Início ---------- */

  renderHome();
  initNr1();
  initMetodo();
  chat.init();
  route();
})();
