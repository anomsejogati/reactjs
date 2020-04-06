function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Anom',
    lastName: 'Sejogati'
};

const element = (
    <h1>
        Halo, {formatName(user)}!
    </h1>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);

// baris 1 : code function pada ES5