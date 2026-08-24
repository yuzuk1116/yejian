function setTheme(t){
document.body.className=t;
}

function loadBook(){
const file=document.getElementById('bookUpload').files[0];
if(!file)return alert('请先选择TXT电子书');

document.getElementById('bookTitle').innerText=file.name;

const reader=new FileReader();
reader.onload=function(e){
let text=e.target.result;
document.getElementById('content').innerText=text.substring(0,3000);
};
reader.readAsText(file,'UTF-8');
}
