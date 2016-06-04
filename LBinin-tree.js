(function($) {
 
 	// 打开active函数
 	$.fn.openActive = function(activeClass) {
 		var x = this.prop("class");
 		this.find(activeClass).each(function() {
 			var exli = $(this).parent();
 			while(exli.prop("class") != x){
 				if (exli.prop("tagName") == "UL") {
 					exli.show();
 				}else if(exli.prop("tagName") == "LI") {
 					exli.removeClass("tree-closed");
 					exli.addClass("tree-opened");
 				}
 				exli = exli.parent();
 			}
 		});
 		return this;
 	}
 
 	// 主要函数
 	$.fn.treemenu = function(options) {
 		options = options || {};
 		options.delay = options.delay || 0; // 默认0ms
 		options.openActive = options.openActive || true;
 		options.activeSelector = options.activeSelector || ".active";
  		
 		this.addClass("treemenu");
 
 		this.find("> li").each(function() {
 			var x = $(this); // 每个被找到的li
 			var subtree = x.find("> ul");
 			var toggler = x.find("span").eq(0);
 
 			if (toggler.length == 0) { // 如果下面没有span
 				toggler = $("<span>");
 				x.prepend(toggler);
 			}
 			toggler.addClass("toggler");
 
 			if (subtree.length > 0) { // 如果下面还有目录
 				subtree.hide();
 
 				x.addClass("tree-closed");
 
 				x.find(toggler).click(function() {
 					var li = $(this).parent("li");
 					li.find("> ul").slideToggle(options.delay);
 					li.toggleClass("tree-opened");
 					li.toggleClass("tree-closed");
                    li.toggleClass(options.activeSelector); // 添加激活类
 				});
 				x.find("> ul").treemenu(options);
 			}else { // 下面没有目录的话
 				x.addClass("tree-empty");
 			}
 			return this;
 		});
 		if (options.openActive) {
 			this.openActive(options.activeSelector);
 		}
 	}
 
 })(jQuery);
