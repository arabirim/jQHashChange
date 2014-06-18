    previousHash = '';

function jQHashChange()
{
    var newHash = '';
    var url = window.location.href.split('#')[1];

    var zaman = setInterval
    (
        function ()
        {
            newHash = (window.location.href.split('#')[1] || '');

            if( (previousHash !== newHash) && (newHash.length > 1) )
            {
                clearInterval(zaman);
                previousHash = newHash;
                bodyAppend( newHash );
                jQHashChange();
            } 
        },100
    );
}
