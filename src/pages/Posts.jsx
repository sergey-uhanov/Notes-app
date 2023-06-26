import {useEffect, useState} from "react";
import {usePosts} from "../hooks/usePost";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/MyModal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import Loader from "../components/UI/Loader/Loader";
import Pagination from "../components/UI/pagination/Pagination";
import PostList from "../components/PostList";


function Posts() {
    const [posts, setPosts] = useState([])



    const [filter,setFilter]= useState({sort:'',query:'' })
    const [modal,setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit,setLimit] = useState(10)
    const [page,setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort,filter.query)




    const [fetchPost, isPostsLoading, postError] = useFetching(async ()=>{
        const response = await PostService.getAll(limit,page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })



    const createPost = (newPost)=>{
        setPosts([...posts,newPost])
        setModal(false)
    }

    useEffect(()=>{
        fetchPost()
    },[page])

    const removePost = (post)=>{
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) =>{
        setPage(page)

    }



    return (
        <div className='App'>
            {/*<button onClick={fetchPosts}>Получить посты</button>*/}
            <MyButton style={{marginTop: '25px'}}  onClick={()=> setModal(true)}>
                Создать
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}> <PostForm create={createPost}/></MyModal>

            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {isPostsLoading
                ?<div style={{display:"flex", justifyContent:"center", marginTop:"50px"}}><Loader/> </div>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts}/>
            }
            <Pagination page={page} changePage={changePage} totalPages={totalPages}/>


        </div>
    );
}

export default Posts;
