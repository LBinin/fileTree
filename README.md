# FileTree
	A lightweight tree of file. | jQuery plugin | Powered by LBinin
# Usage
1.Create a `ul` element whose class name is `tree`.

=========

2.Below the `ul` you can create a element `li`.In this `li` element,you can creat element `span`,it's inner content is what you want to show.

=========

3.Below the `li` you can continue create `ul`,But please Follow the rules.

=========

4.In the foot of html,please add the following code
```javascript
$(".tree").treemenu({
	delay:300,
	autoClose:true,
	openActive:true,
	activeSelector:".active",
});
```
###parameters explain:###
1. **delay** : animation duration.Unit is `ms`.(default parameter is `0 ms`)
2. **autoClose** : auto close all the list below you are closing item.(default parameter is `true`)
3. **openActive** : open the file tree form which class name is `active` or not.(default parameter is `true`)
4. **activeSelector** : when you click the item(span) you can add a class name which named `activeSelector` to the item which you clicked.(default parameter is `active`)

#Instance Link
[http://www.lbinin.com/sky31/tree/](http://www.lbinin.com/sky31/tree/)
