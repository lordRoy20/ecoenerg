var PROMO_TXT="🔥 Promo: compras desde $1000 = 5% de descuento · desde $5000 = 10%";
var TRAMOS=[[5000,10],[1000,5]];
function desc(t){for(var i=0;i<TRAMOS.length;i++){if(t>=TRAMOS[i][0])return Math.round(t*TRAMOS[i][1]/100)}return 0}
(function(){var b=document.createElement("div");b.style.cssText="background:#ffd54f;color:#222;text-align:center;padding:10px;font-weight:bold;font-size:14px";b.textContent=PROMO_TXT;var c=document.getElementById("cats");c.parentNode.insertBefore(b,c)})();
function openCart(){var h="",tot=0,L=["Hola, quiero cotizar:"];
for(var k in cart){var x=P.find(function(y){return y.id==k});tot+=x.p*cart[k];L.push(cart[k]+" x "+x.n);
h+='<p>'+cart[k]+' x '+x.n+' - $'+(x.p*cart[k])+' <button onclick="rem('+k+')">✖</button></p>'}
if(!h){h="<p>Tu carrito está vacío.</p>"}else{var d=desc(tot);L.push("Subtotal: $"+tot);if(d>0){L.push("Descuento: -$"+d)}L.push("Total estimado: $"+(tot-d));
h+='<p>Subtotal: $'+tot+'</p>'+(d>0?'<p style="color:#2e7d32"><b>🎉 Descuento: -$'+d+'</b></p>':'')+'<b>Total estimado: $'+(tot-d)+'</b><a class="wa" href="https://wa.me/'+WA+'?text='+encodeURIComponent(L.join("\n"))+'">Pedir por WhatsApp</a>'}
document.getElementById("cartbox").innerHTML=h;document.getElementById("cart").style.display="block"}
