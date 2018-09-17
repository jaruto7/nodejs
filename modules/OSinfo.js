var os = require( 'os' );
var color = require( 'colors' );
var createTime = require( '../modules/formatTime' );


function getOSinfo() {
    var type = os.type();
    if( type === 'Darwin' ) {
        type = 'OSX';
    } else if( type === 'Windows_NT' ) {
        type = 'Windows';
    }
    var userInfo = os.userInfo();
    var release = os.release();
    console.log( 'User name: '.green, userInfo.username );
    console.log( 'Home dir: '.yellow, userInfo.homedir );
    createTime.print();
    console.log( 'System: '.bgYellow.grey, type );
    console.log( 'Release: '.red, release );    
}

exports.print = getOSinfo;