const TOKEN_COLORS = {
  tag: 'var(--syn-tag)',
  attr: 'var(--syn-attr)',
  string: 'var(--syn-string)',
  keyword: 'var(--syn-keyword)',
  property: 'var(--syn-property)',
  comment: 'var(--syn-comment)',
  number: 'var(--syn-number)',
  punctuation: 'var(--syn-punct)',
  function: 'var(--syn-function)',
  plain: 'var(--syn-plain)',
};

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function wrap(token, color) {
  return `<span style="color:${color}">${escapeHtml(token)}</span>`;
}

function highlightLine(line, lang) {
  if (lang === 'html' || lang === 'jsx') {
    return highlightHtmlLine(line, lang);
  }
  if (lang === 'css') {
    return highlightCssLine(line);
  }
  return highlightJsLine(line);
}

function highlightHtmlLine(line, lang) {
  let out = '';
  const regex = /(<\/?[a-zA-Z][\w-]*|\/?>|\/>|"[^"]*"|'[^']*'|\s[a-zA-Z-]+=|[{}])/g;
  let last = 0;
  let m;
  while ((m = regex.exec(line)) !== null) {
    out += highlightInline(line.slice(last, m.index), lang);
    const token = m[0];
    if (token.startsWith('<') || token === '>' || token === '/>' || token === '{' || token === '}') {
      out += wrap(token, TOKEN_COLORS.tag);
    } else if (token.startsWith('"') || token.startsWith("'")) {
      out += wrap(token, TOKEN_COLORS.string);
    } else if (/^\s[a-zA-Z-]+=$/.test(token)) {
      out += wrap(token.trim(), TOKEN_COLORS.attr);
    } else {
      out += escapeHtml(token);
    }
    last = m.index + token.length;
  }
  out += highlightInline(line.slice(last), lang);
  return out || escapeHtml(line);
}

function highlightCssLine(line) {
  let out = '';
  const regex = /(\/\*[\s\S]*?\*\/)|(--[\w-]+)|([.#][\w-]+)|([\w-]+(?=\s*:))|(:[\w-]+)|(\d+(?:\.\d+)?(?:px|rem|em|%|vh|vw)?)|\{|\}/g;
  let last = 0;
  let m;
  while ((m = regex.exec(line)) !== null) {
    out += escapeHtml(line.slice(last, m.index));
    const t = m[0];
    if (m[1]) out += wrap(t, TOKEN_COLORS.comment);
    else if (m[2]) out += wrap(t, TOKEN_COLORS.property);
    else if (m[3]) out += wrap(t, TOKEN_COLORS.tag);
    else if (m[4]) out += wrap(t, TOKEN_COLORS.property);
    else if (m[5]) out += wrap(t, TOKEN_COLORS.keyword);
    else if (m[6]) out += wrap(t, TOKEN_COLORS.number);
    else if (t === '{' || t === '}') out += wrap(t, TOKEN_COLORS.punctuation);
    else out += escapeHtml(t);
    last = m.index + t.length;
  }
  out += escapeHtml(line.slice(last));
  return out || escapeHtml(line);
}

function highlightJsLine(line) {
  let out = '';
  const regex = /(\/\*[\s\S]*?\*\/|\/\/[^\n]*)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)|(\b(?:const|let|var|function|return|if|else|export|import|from|new|typeof|for|while|class|extends|default)\b)|(\b\d+(?:\.\d+)?\b)|([a-zA-Z_$][\w$]*)(?=\s*\()/g;
  let last = 0;
  let m;
  while ((m = regex.exec(line)) !== null) {
    out += escapeHtml(line.slice(last, m.index));
    const t = m[0];
    if (m[1]) out += wrap(t, TOKEN_COLORS.comment);
    else if (m[2]) out += wrap(t, TOKEN_COLORS.string);
    else if (m[3]) out += wrap(t, TOKEN_COLORS.keyword);
    else if (m[4]) out += wrap(t, TOKEN_COLORS.number);
    else if (m[5]) out += wrap(t, TOKEN_COLORS.function);
    else out += escapeHtml(t);
    last = m.index + t.length;
  }
  out += escapeHtml(line.slice(last));
  return out || escapeHtml(line);
}

function highlightInline(segment, lang) {
  if (!segment) return '';
  if (lang === 'css') {
    return highlightCssLine(segment);
  }
  if (lang === 'html' || lang === 'jsx') {
    return escapeHtml(segment);
  }
  return highlightJsLine(segment);
}

export function highlight(code, lang) {
  return code
    .split('\n')
    .map((line) => highlightLine(line, lang))
    .join('\n');
}
