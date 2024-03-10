import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"

 const AvatarDemo = () => {
    return (
      <Avatar>
        <AvatarImage src="https://ik.imagekit.io/t6luarqrmc/profile.png?updatedAt=1708318337804" alt="@qwertyroop" />
        <AvatarFallback className="font-extrabold p-4">Ww</AvatarFallback>
      </Avatar>
    )
  }

    export default AvatarDemo