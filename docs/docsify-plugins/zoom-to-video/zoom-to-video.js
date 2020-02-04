//import { getAndRemoveConfig, showVideo } from './core'

const matchesSelector = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.msMatchesSelector;

const defaultOptions = {
  'z2v-size': 32,
  'z2v-halign': 'right',
  'z2v-valign': 'top',
};

function install(hook) {
  hook.doneEach(_ => {
    let elms = [].slice.call(document.querySelectorAll('.markdown-section img:not(.emoji)'))
                 .filter(elm => elm.title.includes("@z2v") && matchesSelector.call(elm, 'a img') === false);
    
    elms.forEach(elm => {
      let { str, config } = getAndRemoveConfig(elm.title);
      
      elm.title = str;
      elm.classList.add('z2v-img');
	  
	  let imgContainer = addVideoInfo(elm);
	  
      imgContainer.onclick = function() {
        showVideo(imgContainer, config['z2v']);
      };
    });
  })
}

function addVideoInfo(elm) {
    let imgHeight = elm.offsetHeight;
	let imgWidth = elm.offsetWidth;
	
	// Container
	var imgContainer = document.createElement('div');
	imgContainer.className = 'z2v-img-container';
	
	// i> overlay
	var imgOverlay = document.createElement('div');
	imgOverlay.className = 'z2v-img-overlay';
	
	// Subtitle
	var imgSubtitle = document.createElement('p');
	imgSubtitle.className = 'z2v-img-subtitle';
	imgSubtitle.innerHTML = "Click on the image to activate and play the video.";
	
	// Append childs for size calculation
	imgContainer.appendChild(imgOverlay);
	imgContainer.appendChild(imgSubtitle);
	
	// Apply size
	elm.parentNode.replaceChild(imgContainer, elm);
	
	imgContainer.style.width = imgWidth + 'px';
	imgContainer.style.height = (imgHeight + imgSubtitle.offsetHeight) + 'px';
	
	// Insert image
	imgContainer.insertBefore(elm, imgOverlay);
	
	return imgContainer;
}

function showVideo(elm, baseLink) {
    var overlay = document.createElement('div');
    overlay.className = 'z2v-overlay';
    
    //
    // Video element
    
    var videoElm = document.createElement('video');
    videoElm.setAttribute('controls', '');
    
    // Add sources to video
    var mp4SourceElm = document.createElement('source');
    var webmSourceElm = document.createElement('source');
    
    mp4SourceElm.type = "video/mp4";
    mp4SourceElm.src = baseLink + ".mp4";
    
    mp4SourceElm.type = "video/webm; codecs=vp9";
    webmSourceElm.src = baseLink + ".webm";
    
    videoElm.appendChild(webmSourceElm);
    videoElm.appendChild(mp4SourceElm);
    
    // Add failover text
    var videoNotSupported = document.createElement('p');
    videoNotSupported.innerHTML = "Your browser doesn't support HTML5 video. <a href=\"" + baseLink + ".mp4" + "\">Download the video</a> instead";
    
    videoElm.appendChild(videoNotSupported);
    
    // Add listeners
    overlay.onclick = function() {
      overlay.style.opacity = 0;
      overlay.addEventListener('transitionend', function() {
          document.body.removeChild(overlay);
      });
    };
    
    overlay.addEventListener('transitionend', function() {
      videoElm.play();
    });
    
    // Append video ; container to body
    
    overlay.appendChild(videoElm);
    document.body.appendChild(overlay);
    
    // Display
    overlay.style.opacity = 1;
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
};

function getAndRemoveConfig(str = '') {
  const config = {}

  if (str) {
    str = str
      .replace(/^'/, '')
      .replace(/'$/, '')
      .replace(/(?:^|\s)@([\w-]+)=?([\w-./]+)?/g, (m, key, value) => {
        config[key] = (value && value.replace(/&quot;/g, '')) || true
        return ''
      })
      .trim()
  }

  return { str, config }
}

$docsify.plugins = [].concat(install, $docsify.plugins);