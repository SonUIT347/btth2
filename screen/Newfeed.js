import {
    StyleSheet,
    ScrollView,
} from 'react-native';
import { useState } from 'react';
import Post from '../component/Post';
import Header from '../component/Header';

const data = [
    {
        id: 1,
        name: "Alexsander",
        cap: "Vuong quoc anh",
        avt_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-h7JVnqd-k7xFeQqDehPGojOV7TFJppYvPA&usqp=CAU',
        image: 'https://auviettour.vn/wp-content/uploads/2023/04/dat-nuoc-va-con-nguoi-anh-quoc.jpeg',
        like_image: require('../assets/like.jpg'),
        like: 233,
        comment: 562,
        share: 5216,
        status: false
    },
    {
        id: 2,
        name: "Alexsander2",
        cap: "Vuong quoc anh",
        avt_img: 'https://auviettour.vn/wp-content/uploads/2023/04/dat-nuoc-va-con-nguoi-anh-quoc.jpeg',
        image: 'https://auviettour.vn/wp-content/uploads/2023/04/dat-nuoc-va-con-nguoi-anh-quoc.jpeg',
        like_image: require('../assets/like.jpg'),
        like: 233,
        comment: 562,
        share: 5216,
        status: false
    },
    {
        id: 3,
        name: "Alexsander3",
        cap: "Vuong quoc anh",
        avt_img: 'https://auviettour.vn/wp-content/uploads/2023/04/dat-nuoc-va-con-nguoi-anh-quoc.jpeg',
        image: 'https://auviettour.vn/wp-content/uploads/2023/04/dat-nuoc-va-con-nguoi-anh-quoc.jpeg',
        like_image: require('../assets/like.jpg'),
        like: 233,
        comment: 562,
        share: 5216,
        status: false
    },
    {
        id: 4,
        name: "Alexsander3",
        cap: "Vuong quoc anh",
        avt_img: 'https://auviettour.vn/wp-content/uploads/2023/04/dat-nuoc-va-con-nguoi-anh-quoc.jpeg',
        image: 'https://auviettour.vn/wp-content/uploads/2023/04/dat-nuoc-va-con-nguoi-anh-quoc.jpeg',
        like_image: require('../assets/like.jpg'),
        like: 233,
        comment: 562,
        share: 5216,
        status: false
    },
]
// 20521850
const Newfeed = () => {
    const [posts, setPosts] = useState([...data])
    // 20521850
    const handleLike = (postId) => {
        console.log(postId)
        const update = posts.map((post) => {
            console.log("asdas " + post.id)
            if (post.id === postId) {
                if (post.status == false) {
                    return {
                        ...post,
                        like: post.like + 1,
                        status: true,
                        like_image: require('../assets/blue_like.png')
                    };
                } else {
                    return {
                        ...post,
                        like: post.like - 1,
                        status: false,
                        like_image: require('../assets/like.jpg')
                    };
                }

            }
            return post
        })
        setPosts(update)
    }
    // 20521850
    const handleCmt = (postId) => {
        console.log(postId)
        const update = posts.map((post) => {
            if (post.id === postId) {
                return {
                    ...post,
                    comment: post.comment + 1,
                };
            }
            return post
        })
        setPosts(update)
    }
    const handleShare = (postId) => {
        console.log(postId)
        const update = posts.map((post) => {
            console.log("asdas " + post.id)
            if (post.id === postId) {
                return {
                    ...post,
                    share: post.share + 1,
                };
            }
            return post
        })
        setPosts(update)
    }

    return (
        <ScrollView style={styles.container}>
            <Header />
            {
                posts.map((post, index) => (
                    <Post
                        key={posts.id}
                        posts={post}
                        styles={styles}
                        handleCmt={handleCmt}
                        handleLike={handleLike}
                        handleShare={handleShare}
                    />
                ))
            }
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    newfeed_ctn: {
        flexDirection: 'column',
        backgroundColor: "white",
        height: 'auto',
        margin: 15,
        borderRadius: 10,
    },
    avt_image: {
        width: 50,
        height: 50,
        borderRadius: 100,
        margin: 5
        // 20521850
    },
    name_ctn: {
        marginTop: 20,
        marginLeft: 5,
    },
    name: {
        fontWeight: "bold"
    },
    post_image: {
        width: "97%",
        height: 200,
        borderRadius: 10,
        margin: 5,
    },
    name_image_ctn: {
        flexDirection: 'row'
    },
    like_cmt_share_display: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 5,
        paddingBottom: 15,
        borderBottomWidth: 2,
        borderColor: "#dddddd"
    },
    like_cmt_share: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 5
    },
    // 20521850
    txt_like_display_btn: {
        fontWeight: "bold",
        fontSize: 15,
        color: "blue"
    },
    txt_unlike_display_btn: {
        fontWeight: "bold",
        fontSize: 15,

    },
    txt_like_display: {
        color: "#333333"
    },
    txt_cmt_display_btn: {
        fontWeight: "bold",
        fontSize: 15,
    },
    txt_share_display_btn: {
        fontWeight: "bold",
        fontSize: 15,
    },
    cap_ctn: {
        marginLeft: 10
    },
    touch_ctn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default Newfeed