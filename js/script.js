const WA='254700000000'; /* ← put the restaurant's WhatsApp number here */
const IM={pod:'the_pods.jpeg',kuku:'kuku_choma.PNG',shaw:'shawarma.PNG'};
document.querySelectorAll('[data-img]').forEach(e=>{const u=IM[e.dataset.img];e.tagName=='IMG'?e.src=u:(e.style.backgroundImage=`url(${u})`,e.style.backgroundPosition=e.dataset.pos||'center')});
const M={Appetizers:[['Nyama choma platter','Goat or beef, kachumbari, ugali','KSh 1,200'],['Grilled chicken','Half chicken, chips, salad','KSh 950'],['Fish fillet','Tilapia, ugali, greens','KSh 850']],Mains:[['Shawarma & chips','Wrap, fries, slaw, dip','Ask us']],Desserts:[['Ice cream & chocolate drizzle','Ask for today’s flavours','Ask us']],Drinks:[['Cocktails & fresh juices','Ask for today’s list','Ask us']]};
const tb=document.getElementById('tabs'),it=document.getElementById('items');
function show(k){[...tb.children].forEach(b=>b.classList.toggle('on',b.textContent==k));it.innerHTML=M[k].map(r=>`<div class="it"><div><h3>${r[0]}</h3><small>${r[1]}</small></div><b>${r[2]}</b></div>`).join('')}
Object.keys(M).forEach(k=>{const b=document.createElement('button');b.textContent=k;b.onclick=()=>show(k);tb.append(b)});show('Appetizers');
g.innerHTML=[1,2,3,4,5,6,7,8,'9+'].map(n=>`<option${n==2?' selected':''}>${n}</option>`).join('');
bf.onsubmit=e=>{e.preventDefault();open(`https://wa.me/${WA}?text=`+encodeURIComponent(`Hi The Pods! Table request:\nName: ${n.value}\nDate: ${d.value}\nTime: ${t.value}\nGuests: ${g.value}\nOccasion: ${o.value}`),'_blank')};
wa.href=`https://wa.me/${WA}`;
/* reveal + tilt */
const io=new IntersectionObserver(e=>e.forEach(i=>i.isIntersecting&&i.target.classList.add('in')),{threshold:.12});document.querySelectorAll('.rv').forEach(e=>io.observe(e));
document.querySelectorAll('.fc').forEach(c=>{const p=c.querySelector('.pop');c.onpointermove=e=>{const b=c.getBoundingClientRect(),x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5;p.style.transform=`rotateY(${x*22}deg) rotateX(${-y*18}deg)`};c.onpointerleave=()=>p.style.transform=''});
/* entrance tour */
const cl=(v,a=0,b=1)=>Math.min(b,Math.max(a,v)),ez=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2,caps=[c1,c2,c3];let tp=0;
function tour_(){const r=tour.getBoundingClientRect();tp=cl(-r.top/(r.height-innerHeight));scene.style.transform=`scale(${1+ez(cl(tp/.85))*5.5})`;warm.style.opacity=cl((tp-.2)/.4);door.style.opacity=cl((tp-.72)/.26);
 const on=[tp>.05&&tp<.3,tp>.32&&tp<.6,tp>.62&&tp<.9];caps.forEach((c,i)=>c.classList.toggle('on',on[i]));hint.style.opacity=tp<.04?1:0;bar.style.width=tp*100+'%'}
const cv=fx,cx=cv.getContext('2d');let W,H,P=[];function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight}rs();
for(let i=0;i<60;i++)P.push({x:Math.random(),y:Math.random(),s:Math.random()*2+.5,v:Math.random()*.0015+.0004,d:Math.random()*6});
/* 3D background */
const R=new THREE.WebGLRenderer({canvas:gl,antialias:true,alpha:true});R.setPixelRatio(Math.min(devicePixelRatio,2));
const S=new THREE.Scene(),C=new THREE.PerspectiveCamera(50,1,.1,100);C.position.z=9;
S.add(new THREE.AmbientLight(0x887766,.7));const L1=new THREE.PointLight(0xee9460,2.2,30);L1.position.set(-4,-2,5);S.add(L1);const L2=new THREE.PointLight(0xfff3a0,2,30);L2.position.set(3,3,4);S.add(L2);
const em=(c,i)=>new THREE.MeshStandardMaterial({color:c,emissive:c,emissiveIntensity:i});
const G=new THREE.Group();S.add(G);
const r1=new THREE.Mesh(new THREE.TorusGeometry(2.4,.09,24,120),em(0xfff3a0,1.4)),r2=new THREE.Mesh(new THREE.TorusGeometry(1.8,.035,16,100),new THREE.MeshStandardMaterial({color:0x777777,metalness:.9,roughness:.3})),core=new THREE.Mesh(new THREE.SphereGeometry(.7,32,32),em(0xfff0a0,1.2));
G.add(r1,r2,core);const orbs=[];
for(let i=0;i<34;i++){const m=new THREE.Mesh(new THREE.SphereGeometry(.07+Math.random()*.2,16,16),i%3?new THREE.MeshStandardMaterial({color:0xc08a60,metalness:.9,roughness:.25}):em(0xffe27a,1));m.position.set((Math.random()-.5)*16,(Math.random()-.5)*22,(Math.random()-.5)*6-1);m.userData={s:Math.random()*.8+.2,o:Math.random()*6};S.add(m);orbs.push(m)}
let mx=0,my=0;addEventListener('pointermove',e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});
function rz(){W=innerWidth;H=innerHeight;cv.width=W;cv.height=H;R.setSize(W,H,false);C.aspect=W/H;C.updateProjectionMatrix();G.position.x=W>800?3:0}addEventListener('resize',rz);rz();
function loop(n){const s=scrollY/innerHeight,t=n/1000;
 G.rotation.x=.9+Math.sin(t*.4)*.2+my*.4;G.rotation.y=t*.25+mx*.6;r2.rotation.x=t*.7;core.scale.setScalar(1+Math.sin(t*2)*.05);
 G.position.y=-Math.max(0,s-4)*1.1+0;orbs.forEach(o=>{o.position.y+=Math.sin(t*o.userData.s+o.userData.o)*.004;o.position.x+=Math.cos(t*o.userData.s)*.003});
 C.position.y=-Math.max(0,s-4.2)*.9;C.position.x=mx*.8;C.lookAt(0,C.position.y,0);R.render(S,C);
 cx.clearRect(0,0,W,H);if(tp<1){const k=.4+tp*1.6;for(const q of P){q.y-=q.v*k;if(q.y<-.05){q.y=1.05;q.x=Math.random()}cx.beginPath();cx.fillStyle=`rgba(255,${140+q.s*30|0},50,${(.25+.5*Math.sin(t*3+q.d)**2)*(.4+tp*.6)})`;cx.arc(q.x*W+Math.sin(t+q.d)*8,q.y*H,q.s*(1+tp),0,7);cx.fill()}}
 requestAnimationFrame(loop)}
addEventListener('scroll',tour_,{passive:true});tour_();requestAnimationFrame(loop);
const nv=document.querySelector('nav');burger.onclick=()=>nv.classList.toggle('open');
nv.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nv.classList.remove('open')));