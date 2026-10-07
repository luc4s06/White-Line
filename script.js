document.getElementById('yr').textContent=new Date().getFullYear();
const els=document.querySelectorAll('.rv');
if('IntersectionObserver' in window){
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}}),{threshold:.15});
  els.forEach(el=>io.observe(el));
}else{els.forEach(el=>el.classList.add('on'))}
