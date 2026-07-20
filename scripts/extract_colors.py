import re, os, collections
html=open(os.path.join(os.environ['TEMP'],'dbd-home.html'),encoding='utf-8',errors='ignore').read()
for c in ['#9a27d5','#d6b8f8','#eaf7ff','#32536a','#000624','#f4fafe','#daeffe','#000000']:
    print('====', c, html.lower().count(c.lower()))
    m=re.search(re.escape(c), html, re.I)
    if m:
        s=max(0,m.start()-100); e=min(len(html), m.end()+120)
        print(re.sub(r'\s+',' ', html[s:e])[:220])

solids=re.findall(r'"color"\s*:\s*"(#[0-9A-Fa-f]{6})"', html)
print('solid', collections.Counter(solids).most_common(25))
# pageBackground
for pat in [r'pageBackground.{0,400}', r'backgroundMedia.{0,300}', r'\"rgb\"\s*:\s*\"([^\"]+)\"']:
    ms=re.findall(pat, html)
    print(pat[:30], len(ms))
    for x in ms[:5]:
        print(' ', x[:250] if isinstance(x,str) else x)
