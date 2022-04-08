

export async function getUsers() {
    const r = await fetch(`https://60eb0748e9647b0017cddcbd.mockapi.io/users`);
    const users = await r.json();
    return users;
}