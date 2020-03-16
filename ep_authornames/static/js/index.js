exports.acePostWriteDomLineHTML = function(hook_name, args, cb){
	var className2Author = function (className) {
	  if (className.substring(0, 7) == "author-") {
		return className.substring(7).replace(/[a-y0-9]+|-|z.+?z/g, function(cc) {
		  if (cc == '-') { return '.'; }
		  else if (cc.charAt(0) == 'z') {
			return String.fromCharCode(Number(cc.slice(1, -1)));
		  }
		  else {
			return cc;
		  }
		});
	  }
	  return null;
	};
	
	var className2AuthorName = function(className) {
		var authorId = className2Author(className);
		var authorObj = clientVars.collab_client_vars.historicalAuthorData[authorId];
		if (authorObj) {
		  return authorObj.name;
		} else {
		  return "unknown author: " + authorId;
		}
	};
	
	$(args.node).find('span').each(function(span){
		$(this).children('span').map(
			function() {
				if(this.classList[0]){
					var mainClass = this.classList[0];
					if(mainClass.substring(0,7) === 'author-') {
						this.title = className2AuthorName(mainClass);
					}
				}
			}
		);
	});
	return cb;
}

