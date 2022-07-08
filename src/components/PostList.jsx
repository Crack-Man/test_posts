import React, {useEffect, useMemo, useState} from 'react';
import Posts from "../API/Posts";
import PostItem from "./PostItem";
import "../styles/scss/post-list.scss"
import PaginationItem from "./PaginationItem";
import ModalPostBody from "./ModalPostBody";

const PostList = () => {
    const [loading, setLoading] = useState(false);
    const [posts, setPost] = useState([]);
    const [selectedPost, setSelectedPost] = useState({});
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    // eslint-disable-next-line no-unused-vars
    const [limit, setLimit] = useState(10)
    const [visibleModal, setVisibleModal] = useState(false);

    const pagination = useMemo(() => {
        let array = [];
        for (let i = 0; i < totalPages; i++) {
            array.push(i + 1);
        }
        return array;
    }, [totalPages])

    const fetchPosts = async (limit, page) => {
        setLoading(true);
        const response = await Posts.getAll(limit, page);
        setPost(response.data);
        setTotalPages(Math.ceil(response.headers['x-total-count']) / limit);
        setLoading(false);
    }

    const deletePost = (id) => {
        setLoading(true);
        setPost(posts.filter(post => post.id !== id));
        setLoading(false);
    }

    const changePage = (page) => {
        setCurrentPage(page);
        fetchPosts(limit, page);
    }

    const openModal = (post) => {
        setSelectedPost(post);
        setVisibleModal(true);
    }

    const closeModal = () => {
        setSelectedPost({});
        setVisibleModal(false);
    }

    useEffect(() => {
        fetchPosts(limit, currentPage);
    }, [])

    return (
        <div>
            {
                loading
                ?
                    <h1 style={{textAlign: "center"}}>
                        Загрузка
                    </h1>
                :
                    posts.length
                        ?
                            <div>
                                <div className="post-list">
                                    {
                                        posts.map((post) =>
                                            <PostItem post={post} onSelectedPost={openModal} onDelete={deletePost} key={post.id}/>
                                        )
                                    }
                                </div>
                                <div className="post-pagination">
                                    <PaginationItem pagination={pagination} page={currentPage} onChangePage={changePage}/>
                                </div>
                                {
                                    visibleModal
                                    ?
                                        <ModalPostBody post={selectedPost} onClosed={closeModal}/>
                                    :
                                        null
                                }
                            </div>

                        :
                            <h1 style={{textAlign: "center"}}>
                                Посты не найдены
                            </h1>
            }
        </div>
    );
};

export default PostList;