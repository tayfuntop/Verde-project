import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Posts from '../screens/Posts';
import PostDetails from '../screens/PostDetails';
import NewPost from '../screens/NewPost';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Posts />} />
                <Route path='/:id' element={<PostDetails />} />
                <Route path='/new-post' element={<NewPost />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;