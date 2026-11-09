import json,sys,re
setn=sys.argv[1]; sp=setn+'/spec.json'; spec=json.load(open(sp))
def strip_dup(r):
    vi=(r.get('verdict','')+' '+r.get('intro','')).replace(' ','')
    for b in r['body']:
        c=b.get('cap','') or ''
        cn=c.replace(' ','')
        if not cn: continue
        if re.search(r'[📍💸💵🛒]',c): b['cap']=''; continue
        # clear if cap is substring of verdict/intro or contains verdict/intro sentence
        if cn and (cn in vi or vi.find(cn)>=0): b['cap']=''; continue
        if len(cn)>=8 and cn in vi: b['cap']=''
n=0
for r in spec['rows']:
    before=[b.get('cap','') for b in r['body']]
    strip_dup(r)
    after=[b.get('cap','') for b in r['body']]
    if before!=after: n+=1
json.dump(spec,open(sp,'w'),ensure_ascii=False,indent=1)
print('dedup applied, rows changed',n)
