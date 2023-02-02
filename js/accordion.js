window.onload = () => 
{

const button = Object.values( document.querySelectorAll( '.accardion-button' ) )

button.forEach( ( v ) => {

    v.onclick = () => 
    {
        const p = v.nextElementSibling

        const div = v.parentElement

        if ( p.style.maxHeight )
        {
            v.classList.remove( 'button-active' )
            p.classList.remove( 'p-active' )
            div.classList.remove( 'div-active' )

            p.style.maxHeight = null
        }

        else
        {
            button.forEach( ( v ) => {

                v.classList.remove( 'button-active' )

                v.nextElementSibling.classList.remove( 'p-active' )
                v.nextElementSibling.style.maxHeight = null

                v.parentElement.classList.remove( 'div-active' )

            } ) 

            v.classList.add( 'button-active' )
            p.classList.add( 'p-active' )
            div.classList.add( 'div-active' )

            p.style.maxHeight = p.scrollHeight + 'px'
        }
    }

} )


}