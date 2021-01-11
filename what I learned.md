__input 요소의 placeholder__

 	이 속성은 textarea 요소에 알맞은 힌트를 제공하는 목적으로 사용됨.

__<button type = "button | submit | reset">__

	button - 해당 버튼이 클릭할 수 있는 버튼(clickable button)임을 명시함. 
	submit - 해당 버튼이 폼 데이터(form data)를 제출하는 제출 버튼(submit button)임을 명시함.
	reset - 해당 버튼이 폼 데이터를 초기값으로 리셋하는 리셋 버튼(reset button)임을 명시함.
	
__<form> 태그__

	사용자로부터 입력을 받을 수 있는 HTML 입력폼(form)을 정의할 때 사용됨.
	
__flex: 1__

	item이 container의 빈공간을 채움
	
__:nth-child() 의사 클래스__

	형제 사이에서의 순서에 따라 요소를 선택함.
	
	e.g.
	li:nth-child(2){	} /*목록의 두번째 <li> 선택*/
	:nth-child(odd){	} /*임의의 그룹에서 홀수번째에 위치하는 모든 요소 선택 */
	
__overflow__
	
	overflow-x 속성은 x축, 즉 왼쪽과 오른쪽의 내용이 넘칠 때,
	overflow-y 속성은 y축, 즉 위와 아래의 내용이 넘칠 때 어떻게 보여줄지 지정함.
	
	속성값 visible | hidden | scroll | auto | initial | inherit
	visible: 기본값으로 내용이 잘리지 않음. 넘치는 내용은 밖으로 흘러 넘침.
	hidden: 내용이 잘림. 스크롤바가 나타나지 않음.
	scroll: 내용이 잘림. 스크롤바가 나타남.
	auto: 내용이 잘림. 필요할 때만 스크롤바가 나타남.
	
__prevenDefault__

	submit 이벤트는 브라우저에서 새로고침을 발생시킴.
	이를 방지하기 위해서는 preventDefault 함수를 호출하면 됨.
	e.g. e.preventDefault();
