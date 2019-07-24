
export const linkChecker = (url) => {
    let bool = 'linkChecker function not working'
    fetch(url)
    .then(response => {
        if (response.ok) { bool = true}
        else {
            bool = false
            return Promise.reject('promise rejected')}
    })
    .catch(err => console.log('error is: ', err))
    return bool
}
