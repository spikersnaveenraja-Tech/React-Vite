import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from './pages/Home.page'
import AboutPage from './pages/About.page'
import ContactPage from './pages/Contact.page'
import GalleryPage from './pages/Gallery.page'
import BlogPage from './pages/Blog.page'
import PageNotFound from "./pages/page.notfound"
import HeaderLayout from "./layouts/HeaderLayout";
import ButtonLayout from "./layouts/ButtonLayout";



export default function Router() {

    return (
        <>
            <Container>
                <BrowserRouter>
                    <HeaderLayout/>
                    <ButtonLayout/>
                    <Routes>
                        <Route index element={<HomePage />} />
                        <Route path='home' element={<HomePage />} />
                        <Route path="about" element={<AboutPage />} />
                        <Route path="contact" element={<ContactPage />} />
                        <Route path="gallery" element={<GalleryPage />} />
                        <Route path="blog" element={<BlogPage />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </BrowserRouter>
            </Container>
        </>
    )
}