$(document).ready(function(){

    $("demoForm").validate({
        debug:true,
        rules:{
            username:{
                required:true,
                // minlength:2,
                // maxlength:10,      代表值的多少
                min:2,   // 代表字的多少
                max:10,
                range:[1,10],
                //url代表地址比如：http://www.baidu.com 前面要加http://
                //date代表时间格式是：2017-10-11    ISO的格式必须要是yyyy-yy-yy,中间可以用/可以用-.
                //emill代表邮箱格式是：1814847542@qq.com
                //number只要是数字都是有效的
                //digits要是整数才行
                rangelength:[2,10],
                remote:{
                    url:"remote.json",
                    type:"post",
                    date:{
                        loginTime:function(){
                            return+new date;
                        }
                    }
                }
            },
            password:{
                required:true,
                minlength:2,
                maxlength:16
            },
            "confirm-password":{
                equalTo:"#password"   //确认密码
            }
        },
        messages:{
            username:{
                required:"必须填写用户名",
                minlength:"用户名最小为2位",
                maxlength:"用户名最大为10位",
                rangelength:"用户名必须要在2~10位",
            },
            password:{
                required:"必须填写密码",
                minlength:"密码最小为2位",
                maxlength:"密码最大为16位",
            },
            "confirm-password":{
                equalTo:"两次输入的密码不一致"
            }
        },
        submitHandler:function(){
            console.log($("form").serialize());
        },
        invalidHandler:function(ever,validator){
            console.log("错误数:"+validator.numberOfInvalids());
        },
        showErrors:function(errorMap,erroList){
            console.log(errorMap);
            console.log(errorList);
            this.defaultShowErrors();
        },
        errorContainer:"#info2",
        errorlabelContainer:"#info",
        errorElement:"li",
        wrapper:"ul",
        //ignore:"id"
        
    });
        $("#check").click(function(){
            alert($("demoForm").valid()?"填写正确!":"填写错误")
        });
    });

    validator.form()//用来验证表单
    validator.element("id")//用来验证一个元素
    validator.resetForm()//回复成原来的状态
    validator.showErrors({})//添加提示
    validator.numberOfInvalids()//有几个无效的