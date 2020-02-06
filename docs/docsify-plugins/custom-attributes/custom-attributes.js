function install(hook) {
  hook.doneEach(_ => {
    let elms = [].slice.call(document.querySelectorAll('.markdown-section img:not(.emoji), a'));
    
    elms.forEach(elm => {
      let { str, config } = getAndRemoveConfig(elm.title);
      
      for (key in config)
		  elm.setAttribute(key, config[key]);
	  
	  if (config.hasOwnProperty('title') == false)
		  elm.title = str;
    });
  })
}

function getAndRemoveConfig(str = '') {
  const config = {}

  if (str) {
    str = str
      .replace(/^'/, '')
      .replace(/'$/, '')
      .replace(/(?:^|\s)@([\w-]+)(?:="([^"]+)")?/g, (m, key, value) => {
        config[key] = (value && value.replace(/&quot;/g, '')) || true
        return ''
      })
      .trim()
  }

  return { str, config }
}

$docsify.plugins = [].concat(install, $docsify.plugins);