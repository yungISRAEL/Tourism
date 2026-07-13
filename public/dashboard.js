const gottenUser = JSON.parse(localStorage.getItem('newSignedInUser'))
console.log(gottenUser);


const signOut = () => {
    // alert('outtttttttttt')

    localStorage.removeItem('newSignedInUser')

    btn.innerHTML = `
                        <div class="spinner-grow text-light" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    `
    
    setTimeout(() => {
        window.location.href = `signin.html`
    }, 1500);
}