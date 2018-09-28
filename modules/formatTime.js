var os = require( 'os' );
var color = require( 'colors' );
var uptime = os.uptime();
    
    function formTime() {
        var hours = Math.floor(uptime / 3600);
        var minutes = Math.floor((uptime - (hours * 3600)) / 60);
        var seconds = uptime - (hours * 3600) - (minutes * 60);
    
    if( hours > 0 ) {
        console.log( 'Uptime: ~'.cyan, ( hours ).toFixed( 0 ), 'hours ' + ( minutes ).toFixed( 0 ), 'min ' + ( seconds ).toFixed( 0 ), 'sec');
    } else if( minutes > 0 ) {
        console.log( 'Uptime: ~'.cyan, ( minutes ).toFixed( 0 ), 'min ' + ( seconds ).toFixed( 0 ), 'sec');
    } else if( seconds > 0 ) {
        console.log( 'Uptime: ~'.cyan, ( seconds ).toFixed( 0 ), 'sec');
    }
} 

    exports.print = formTime;