previousHash = '';

function jQHashChange( callback )
{
    
    var newHash = '';
    var url = window.location.href.split('#')[1];

    zaman = setInterval
    (
        function ()
        {
            newHash = (window.location.href.split('#')[1] || '');

            if( (previousHash !== newHash) && (newHash.length > 1) )
            {
                clearInterval(zaman);
                previousHash = newHash;
                
                if( callback )
                    callback(newHash);
                
                jQHashChange( callback );
            } 
        },100
    );
}
