//判断是否是超级管理员
	if(localStorage.getItem("role")==null || localStorage.getItem("role")==""){
		alert("请登录");
		window.location.href="admin.html";
	}
	
	
	
	/**
	 * 点击导航栏
	 * @param index
	 */
	function clickNav(index){
		//点击“团队”
		if(index==0){
			
		}
		//点击“科研需求”
		else if(index==1){
			localStorage.setItem("type","1");
			window.location.href="adminBlog.html";
		}
		//点击“网协”
		else if(index==2){
			localStorage.setItem("type","2");
			window.location.href="adminBlog.html";
		}
		//点击“读书活动”
		else if(index==3){
			localStorage.setItem("type","3");
			window.location.href="adminBlog.html";
		}
		//点击“新闻”
		else if(index==4){
			localStorage.setItem("type","4");
			window.location.href="adminBlog.html";
		}
		//点击“热门”
		else if(index==5){
			localStorage.setItem("type","5");
			window.location.href="adminBlog.html";
		}
		
	}