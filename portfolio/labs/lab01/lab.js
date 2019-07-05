/*

*/


function start(e) {
    var name=[{
        char:'蘇',
        big5:'C4AC',
        cns:'1-7A37',
        unicode:'8607'

    },
    {
        char:'子',
        big5:'8607',
        cns:'1-444D',
        unicode:'5B50'
    },
    {
        char:'堯',
        big5:'B3F3',
        cns:'1-5E59',
        unicode:'582F'
    }

    ];
    var ele=document.getElementById('div1');
    for(i=0;i<3;i++){
     ele.innerHTML+=name[i].char;
ele.innerHTML+=' big5=';
ele.innerHTML+=name[i].big5;
ele.innerHTML+=' cns=';
ele.innerHTML+=name[i].cns;
ele.innerHTML+=' unicode=';
ele.innerHTML+=name[i].unicode;
ele.innerHTML+='<br>';
    }



}

/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );
