
const FunctionControl=(ButtonIdName, ListenerFunction)=>{
    document.getElementById(ButtonIdName).addEventListener('click',ListenerFunction);
}

const triangle=()=>{

    const inputBase=getInput('itb');
    const InputHeight=getInput('ith');
    const triangle =0.5*inputBase*InputHeight;
    
  
     let list = document.getElementById("myList");

     let li = document.createElement("li");
     li.innerHTML =`<pre>Triangle        ${triangle}cm<sup>2 </sup></pre>`;
     list .appendChild(li);
 let button=document.getElementById('myButton')
 let But=document.createElement("button")
 But.innerHTML=`<pre>Convert to m<sup>2 </sup></pre>`
 But.style.background='#3dfe3a';
 But.style.height='20px';
 But.style.border='none';
 But.style.borderRadius ='10px';
 But.style.marginBottom='18px'
 But.style.marginLeft='8px'
 button.appendChild(But);



}
  

const rect=()=>{

const inputWidth = getInput('irw');
const inputLength = getInput('irw');
const  rect = inputWidth*inputLength;




let list = document.getElementById("myList");

let li = document.createElement("li");
li.innerHTML =`<pre>Rectangle        ${rect}cm<sup>2 </sup></pre>`;
list .appendChild(li);
let button=document.getElementById('myButton')
let But=document.createElement("button")
But.innerHTML=`<pre>Convert to m<sup>2 </sup></pre>`
But.style.background='#3dfe3a';
But.style.height='20px';
But.style.border='none';
But.style.borderRadius ='10px';
But.style.marginBottom='18px'
But.style.marginLeft='8px'
button.appendChild(But);




}


const para=()=>{

    const inputBase = getInput('ipb');
    const inputN= getInput('ipn');
    const para=inputBase*inputN;
    


    let list = document.getElementById("myList");

    let li = document.createElement("li");
    li.innerHTML =`<pre>Parallelogram        ${para}cm<sup>2 </sup></pre>`;
    list .appendChild(li);
let button=document.getElementById('myButton')
let But=document.createElement("button")
But.innerHTML=`<pre>Convert to m<sup>2 </sup></pre>`
But.style.background='#3dfe3a';
But.style.height='20px';
But.style.border='none';
But.style.borderRadius ='10px';
But.style.marginBottom='18px'
But.style.marginLeft='8px'
button.appendChild(But);




   
}


const rhomb=()=>{

    const inputD1 =getInput('ird1');
    const inputD2=getInput('ird2');
    const rohMb= 0.5*inputD1*inputD2;



    let list = document.getElementById("myList");

    let li = document.createElement("li");
    li.innerHTML =`<pre>Rhombus        ${rohMb}cm<sup>2 </sup></pre>`;
    list .appendChild(li);
let button=document.getElementById('myButton')
let But=document.createElement("button")
But.innerHTML=`<pre>Convert to m<sup>2 </sup></pre>`
But.style.background='#3dfe3a';
But.style.height='20px';
But.style.border='none';
But.style.borderRadius ='10px';
But.style.marginBottom='18px'
But.style.marginLeft='8px'
button.appendChild(But);








}

const pent=()=>{


const p=getInput('ipp');
const b=getInput('ipB');
const pent = 0.5*p*b;



let list = document.getElementById("myList");

let li = document.createElement("li");
li.innerHTML =`<pre>Pentagon        ${pent}cm<sup>2 </sup></pre>`;
list .appendChild(li);
let button=document.getElementById('myButton')
let But=document.createElement("button")
But.innerHTML=`<pre>Convert to m<sup>2 </sup></pre>`
But.style.background='#3dfe3a';
But.style.height='20px';
But.style.border='none';
But.style.borderRadius ='10px';
But.style.marginBottom='18px'
But.style.marginLeft='8px'
button.appendChild(But);



}

const Eli=()=>{

const b = getInput('ieb');
const c = getInput("iec");
const ell = 0.5*b*c;




let list = document.getElementById("myList");

let li = document.createElement("li");
li.innerHTML =`<pre>Ellipse        ${ell}cm<sup>2 </sup></pre>`;
list .appendChild(li);
let button=document.getElementById('myButton')
let But=document.createElement("button")
But.innerHTML=`<pre>Convert to m<sup>2 </sup></pre>`
But.style.background='#3dfe3a';
But.style.height='20px';
But.style.border='none';
But.style.borderRadius ='10px';
But.style.marginBottom='18px'
But.style.marginLeft='8px'
button.appendChild(But);




}







 const Triangle = FunctionControl("itbbutton", triangle);

  const Rect  =   FunctionControl("Rect",rect);
  const Para  = FunctionControl("para", para);
  const Rhomb = FunctionControl("rohMb",rhomb);

  const Pent =FunctionControl("pent",pent);
  const ell =FunctionControl("ell",Eli);


//   Create element amd show the data








