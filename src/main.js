var selectAll = require('./checked.js');

//调用selectAll
$(['group1', 'group2', 'group3']).each(function(i, v){
   selectAll($('input.all-'+v), $('input.'+v));
});  