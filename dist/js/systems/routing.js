define(["core_facade","utilities_query_params"],function(e,n){var r,a,t=function(){r=n.getParam("page"),a=n.getParam("block")},u=function(e){return e!=NULL&&(r=e),r},c=function(e){return e!=NULL&&(a=e),a},i={page:u,block:c};return t(),i});