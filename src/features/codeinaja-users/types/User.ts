import { type Role } from "@codeinaja-users/types/Role"
import { type Profile } from "@codeinaja-users/types/Profile"

export type User = {
    id : string,
    username : string,
    email : string,
    role : Role,
    profile: Profile
}