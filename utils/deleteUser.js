export async function deleteUser(userId) {
    try {
        const url = `http://localhost:3000/api/users/${userId}`;
        const options = {
            method: "DELETE",
            headers: {
                "x-api-key": "password",
            },
        };

        const res = await fetch(url, options);
        if (!res.ok) throw new Error("Error with the connection");
        const data = await res.json();
        //  console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}
