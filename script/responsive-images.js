let previousMediaQuery = 'mobile';

class Media {
    constructor(device, mediaQuery, nameEnding) {
        this.device = device;
        this.mediaQuery = mediaQuery;
        this.nameEnding = nameEnding;
    }
}

//checks if media query is curently active
Media.prototype.matches = function() {
    const match = window.matchMedia(this.mediaQuery).matches;
    if (match) { return this.isSameAsCurrent(match); }
}

//checks if new width changes current media query
Media.prototype.isSameAsCurrent = function() {
    if (this.device !== previousMediaQuery) {
        previousMediaQuery = this.device;
        return this.changeImages();
    }
}

Media.prototype.changeImages = function() {
    console.log('yeaaah were changing images!!!');
}

const mobile = new Media('mobile', '(max-width: 48em)', ['-mobile', '-mobile@2x']);
const tablet = new Media('tablet', '(min-width: 48em) and (max-width:80em)', ['-tablet', '-tablet@2x']);
const desktop = new Media('desktop', '(min-width: 80em)', ['-desktop', '-desktop@2x']);
mobile.matches();
tablet.matches();
desktop.matches();

window.addEventListener('resize', function(){
    mobile.matches();
    tablet.matches();
    desktop.matches();
})