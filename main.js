var sub = document.getElementById('submit');
var main = document.getElementById('main');
var head = document.getElementById('heading');
var widt = screen.width;
console.log(widt);

(function(){
    if(widt<=600){
    main.style.width = widt;
    head.style.width = widt;
}
})();

sub.addEventListener('click', submitt);

function submitt(e){
    var name = document.getElementById('name').value;
    var className = document.getElementById('class').value;
    var sem = document.getElementById('sem').value;
    var batch = document.getElementById('batch').value;
    var reg = document.getElementById('reg').value;
    var mail = document.getElementById('mail').value;
    if(name != '' && reg != '' && mail != ''){
        var da = {
        'Name' : name,
        'Class' : className+sem+batch,
        'Reg No' : reg,
        'Email' : mail
        };
        fetch('http://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            data: JSON.stringify(da),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => alert(JSON.stringify(response)));
        document.getElementById('name').value = '';
        document.getElementById('reg').value = '';
        document.getElementById('mail').value = '';
    }
}