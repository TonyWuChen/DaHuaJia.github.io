
window.onload = function(){
	var i = 1;   /*�������*/
	var oBox = document.getElementById('new-picture'); 
	var oBtn1 = document.getElementById('buttonLeft');
	var oBtn2 = document.getElementById('buttonRight');
	var oPicBtn1 = document.getElementById('end-one-img1');
	var oPicBtn2 = document.getElementById('end-one-img2');
	var oPicBtn3 = document.getElementById('end-one-img3');
	li1.style.background = '#5C307D'; 
	oBox.onmouseover = function(){     /*���ð�ť��ʾ*/
		oBtn1.style.display = 'block';
		oBtn2.style.display = 'block';
	};
	oBox.onmouseout = function(){  /*���ð�ť��ʧ*/
		oBtn1.style.display = 'none';
		oBtn2.style.display = 'none';
	};
	oBtn1.onclick = function(){       /*������ť����ֲ��ͱ����ʾ*/
		if(i == 1) i = 5;
		i--;
		oBox.style.backgroundImage = "url(images/new_picture"+i+".jpg)"; /*����ͼƬ*/
		li1.style.background = '#9F79EE';
		li2.style.background = '#9F79EE';
		li3.style.background = '#9F79EE';
		li4.style.background = '#9F79EE';
		var Li = document.getElementById('li' + i);/*�ֲ�ͼ�����ʾ*/
		Li.style.background = '#5C307D';
	};
	oBtn2.onclick = function(){  /*�����Ұ�ť����ֲ��ͱ����ʾ*/
		if(i == 4) i = 0;
		i++;
		oBox.style.backgroundImage = "url(images/new_picture"+i+".jpg)"; /*����ͼƬ*/
		li1.style.background = '#9F79EE';
		li2.style.background = '#9F79EE';
		li3.style.background = '#9F79EE';
		li4.style.background = '#9F79EE';
		var Li = document.getElementById('li' + i);
		Li.style.background = '#5C307D';
	};
	li1.onclick = function(){      /*�����ֲ�ͼ�������ת*/
		i = 1;
		li1.style.background = '#5C307D';
		li2.style.background = '#9F79EE';
		li3.style.background = '#9F79EE';
		li4.style.background = '#9F79EE';
		oBox.style.backgroundImage = "url(images/new_picture"+i+".jpg)";
	};
	li2.onclick = function(){  /*�����ֲ�ͼ�������ת*/
		i = 2;
		li1.style.background = '#9F79EE';
		li2.style.background = '#5C307D';
		li3.style.background = '#9F79EE';
		li4.style.background = '#9F79EE';
		oBox.style.backgroundImage = "url(images/new_picture"+i+".jpg)";
	};
	li3.onclick = function(){  /*�����ֲ�ͼ�������ת*/
		i = 3;
		li1.style.background = '#9F79EE';
		li2.style.background = '#9F79EE';
		li3.style.background = '#5C307D';	
		li4.style.background = '#9F79EE';
		oBox.style.backgroundImage = "url(images/new_picture"+i+".jpg)";
	};
	li4.onclick = function(){  /*�����ֲ�ͼ�������ת*/
		i = 4;
		li1.style.background = '#9F79EE';
		li2.style.background = '#9F79EE';
		li3.style.background = '#9F79EE';
		li4.style.background = '#5C307D';
		oBox.style.backgroundImage = "url(images/new_picture"+i+".jpg)";
	};
	oPicBtn1.onmouseover = function(){  /*�ײ�����ͼƬ���÷Ŵ�Ч��*/
		oPicBtn1.style.width='130px';
		oPicBtn1.style.height='116px';
	};
	oPicBtn1.onmouseout = function(){
		oPicBtn1.style.width='120px';
		oPicBtn1.style.height='106px';
	};
	oPicBtn2.onmouseover = function(){  
		oPicBtn2.style.width='130px';
		oPicBtn2.style.height='116px';
	};
	oPicBtn2.onmouseout = function(){
		oPicBtn2.style.width='120px';
		oPicBtn2.style.height='106px';
	};
	oPicBtn3.onmouseover = function(){  
		oPicBtn3.style.width='130px';
		oPicBtn3.style.height='116px';
	};
	oPicBtn3.onmouseout = function(){
		oPicBtn3.style.width='120px';
		oPicBtn3.style.height='106px';
	};
	
};