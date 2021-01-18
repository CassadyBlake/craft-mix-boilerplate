
// Plugins
import 'lazysizes'
import "lazysizes/plugins/bgset/ls.bgset";
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import './plugins/masonry'

//  Components
import component from './components/component';


// Init
document.addEventListener('DOMContentLoaded', function() {
  component();
});
