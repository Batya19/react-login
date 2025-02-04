import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { Avatar, IconButton, Box } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import UpdateUserForm from "./UpdateUserForm";

function stringToColor(string: string) {
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';
    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
}

const UserProfile = () => {
    const { state: { user } } = useUserContext();
    const [isEditOpen, setIsEditOpen] = useState(false);

    const initial = user.email[0]?.toUpperCase() || '?';

    return (
        <Box sx={{ position: 'relative', display: 'inline-block' }}>
            <Avatar
                sx={{
                    bgcolor: stringToColor(user.email),
                    width: 50,
                    height: 50,
                    cursor: 'pointer'
                }}
                onClick={() => setIsEditOpen(true)}
            >
                {initial}
            </Avatar>
            <IconButton
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    bgcolor: 'white',
                    borderRadius: '50%',
                    boxShadow: 1,
                    padding: '2px',
                }}
                onClick={() => setIsEditOpen(true)}
            >
                <EditIcon sx={{ fontSize: '14px' }} />
            </IconButton>

            <UpdateUserForm isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} />
        </Box>
    );
};

export default UserProfile;
