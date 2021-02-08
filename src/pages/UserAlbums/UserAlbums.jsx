import React from 'react';
import { useParams } from "react-router-dom";
import PageWrap from '../../components/PageWrap/PageWrap';

const UserAlbums = () => {
    const [user, setUser] = React.useState(null)
    let { id } = useParams();
    return (
        <PageWrap>

        </PageWrap>
    )
}

export default UserAlbums
