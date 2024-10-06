import React from "react";
import Loading from "../../../components/loading";
import { fetchUsers } from "@/lib/api";
import UserList from "@/components/team/users-list/users-list"; 

export default async function Team() {
    const users = await fetchUsers();
    return (
        <div>
            {users ? <UserList data={users} /> : <Loading />}
        </div>
    );
}