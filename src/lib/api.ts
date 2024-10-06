import { UserType } from "./types";

export const fetchUsers = async (): Promise<UserType[]> => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error(`Network response was not ok. Status: ${response.status}`);
        }

        const data: UserType[] = await response.json();
        

        return data.map(user => ({
            ...user,
            img: `https://github.com/shadcn.png?text=${user.name}`  
        }));
    } catch (error) {
        console.error("Error fetching users:", error);
        throw new Error("Failed to fetch users");
    }
};
