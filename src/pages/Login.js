import React, { useEffect } from 'react';

function Login(){
    useEffect(() => {
        let styles = ['hold-transition','login-page'];
        styles.forEach(style => {
            document.body.classList.add(style);
        });
        return () => {
            styles.forEach(style => {
                document.body.classList.remove(style);
            });
        }
    });
    return(
        <> Hola Mundo
        </>
    )
}
export default Login;