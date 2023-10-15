function details2()
{
    let a=(document.querySelector('.butser2').value);
    if(a==="1")
    {
    document.querySelector('.divdetails2')
    .innerHTML='1) Delivering high availability and performance. <br> <br> 2) Writing well-designed, efficient, and testable code.';
    document.querySelector('.butser2').value=0;
    document.getElementById('atdiv2').innerHTML='view less <img style="width: 16px;margin-left: 5px; color: skyblue;" src="./images/images/right-arrow.png">';
    }
    else{
        document.querySelector('.divdetails2')
    .innerHTML="";
    document.querySelector('.butser2').value=1;
    document.getElementById('atdiv2').innerHTML='view more <img style="width: 16px;margin-left: 5px; color: skyblue;" src="./images/images/right-arrow.png">';
    }
}
function details1()
{
    let a=(document.querySelector('.butser1').value);
    if(a==="1")
    {
    document.querySelector('.divdetails1')
    .innerHTML='1) Web page development. <br> <br> 2) I develope user interface.';
    document.querySelector('.butser1').value=0;
    document.getElementById('atdiv1').innerHTML='view less <img style="width: 16px;margin-left: 5px; color: skyblue;" src="./images/images/right-arrow.png">';
    }
    else{
        document.querySelector('.divdetails1')
    .innerHTML="";
    document.querySelector('.butser1').value=1;
    document.getElementById('atdiv1').innerHTML='view more <img style="width: 16px;margin-left: 5px; color: skyblue;" src="./images/images/right-arrow.png">';
    }
    
}