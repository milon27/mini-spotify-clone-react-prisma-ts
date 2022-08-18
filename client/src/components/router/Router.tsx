import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import URL from "../../utils/constant/URL";
import ArtistList from "../pages/artists/ArtistList";
import SingleArtist from "../pages/artists/SingleArtist";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Home from "../pages/home/Home";
import SingleAlbum from "../pages/home/SingleAlbum";
import _404 from "../pages/_404";
import ProtectedRoute from "./ProtectedRoute";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={URL.LOGIN} element={<Login />} />
                <Route path={URL.REGISTER} element={<Register />} />
                <Route path={URL.HOME} element={<ProtectedRoute><Home /></ProtectedRoute>} />
                <Route path={URL.ALBUMS + '/:id'} element={<ProtectedRoute><SingleAlbum /></ProtectedRoute>} />
                <Route path={URL.ARTISTS} element={<ProtectedRoute><ArtistList /></ProtectedRoute>} />
                <Route path={URL.ARTISTS + '/:id'} element={<ProtectedRoute><SingleArtist /></ProtectedRoute>} />

                <Route path="*" element={<_404 />} />
            </Routes>
        </BrowserRouter>
    )
}
