define(function(){

            function selectAll(allInput, checkInputs) {
                //缓存个数
                var inputLength = checkInputs.length;
                //选中全选按钮来选择 
                allInput.click(function(){
                    checkInputs.prop('checked', this.checked);
                });
                //通过下面的复选框选择是否全选
                checkInputs.click(function(){
                    allInput.prop('checked', checkInputs.filter(':checked').length === inputLength);
                });
            };
            return selectAll;   

})